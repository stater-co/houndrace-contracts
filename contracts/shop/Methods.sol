//SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '@openzeppelin/contracts/access/Ownable.sol';
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/interfaces/IERC1155.sol";
import './Discount.sol';
import './Constructor.sol';
import 'hardhat/console.sol';

interface Geyser{ function totalStakedFor(address addr) external view returns(uint256); }

contract ShopMethods is Ownable {
    
    uint256 public id = 1;
    Constructor.Struct public control;

    // list of allowed contracts to use discount nfts on methods call
    mapping(address => bool) allowed;

    // contract address > token ID > discount 1 - 100%
    mapping(uint256 => Discount.Struct) discounts;

    event NewDiscount(uint256 indexed id, Discount.Struct discount);

    function setGlobalParameters(
        Constructor.Struct memory input
    ) external onlyOwner {
        control = input;
    }

    function createDiscount(Discount.Struct memory discount) external onlyOwner {
        discounts[id] = discount;
        emit NewDiscount(id,discount);
        ++id;
    }

    function editDiscount(Discount.Struct memory discount, uint256 theId) external onlyOwner {
        discounts[theId] = discount;
        emit NewDiscount(theId, discount);
    }

    function calculateDiscount(address requester) external returns(uint256) {
        uint256 discount;

        for ( uint256 i = 0; i < id; ++i ) {

            // token type 1 is first to check to ensure the biggest discount will be applied
            // if user has a erc 1155 for discount
            if ( discounts[i].tokenType == 1 )
                for (uint j = 0; j < discounts[i].tokenIds.length ; ++j)
                    if ( ( discount > discounts[i].discount || discount == 1 ) && discounts[i].discount > 1 )
                        try IERC1155(discounts[i].tokenContract).balanceOf(requester,discounts[i].tokenIds[j]) returns (uint256 balanceOf) {
                            if ( balanceOf > 0 ) {
                                if ( ( discounts[i].dateStart <= block.timestamp && discounts[i].dateStop >= block.timestamp ) || ( discounts[i].dateStart == 0 && discounts[i].dateStop == 0 ) ) {
                                    if ( discounts[i].usable ) {
                                        IERC1155(discounts[i].tokenContract).safeTransferFrom(
                                            requester,
                                            address(this),
                                            discounts[i].tokenIds[j],
                                            1,
                                            '0x00'
                                        );
                                        discount = discounts[i].discount;
                                    } else {
                                        discount = discounts[i].discount;
                                    }
                                }
                            }
                        } catch (bytes memory) {
                            
                        }


                        // if user has a geyser stake for discount
                        if ( discounts[i].tokenType == 2 )
                            if ( ( discount > discounts[i].discount || discount == 1 ) && discounts[i].discount > 1 )
                                try Geyser(discounts[i].tokenContract).totalStakedFor(requester) returns (uint256 totalStakedFor) {
                                    if ( totalStakedFor > 0 ) {
                                        if ( ( discounts[i].dateStart <= block.timestamp && discounts[i].dateStop >= block.timestamp ) || ( discounts[i].dateStart == 0 && discounts[i].dateStop == 0 ) ) {
                                            discount = discounts[i].discount; 
                                        }
                                    }
                                } catch (bytes memory) {
                                    
                                }


                        // if user has a erc 721 for discount 
                        if ( discounts[i].tokenType == 0 ) {
                            for (uint j = 0; j < discounts[i].tokenIds.length ; ++j) {
                                if ( ( discount > discounts[i].discount || discount == 1 ) && discounts[i].discount > 1 ) {
                                    try IERC721(discounts[i].tokenContract).ownerOf(discounts[i].tokenIds[j]) returns (address ownerOfToken) {
                                        if ( ownerOfToken == requester ) {
                                            if ( ( discounts[i].dateStart <= block.timestamp && discounts[i].dateStop >= block.timestamp ) || ( discounts[i].dateStart == 0 && discounts[i].dateStop == 0 ) ) {
                                                if ( discounts[i].usable ) {
                                                    IERC721(discounts[i].tokenContract).safeTransferFrom(
                                                        requester,
                                                        address(this),
                                                        discounts[i].tokenIds[j]
                                                    );
                                                    discount = discounts[i].discount;
                                                } else {
                                                    discount = discounts[i].discount;
                                                }
                                            }
                                        }
                                    } catch (bytes memory) {
                                    }
                                }
                            }
                        }

        }

        return discount;

    }

}
