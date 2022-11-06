//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '@openzeppelin/contracts/token/ERC721/IERC721.sol';
import '@openzeppelin/contracts/interfaces/IERC1155.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '../params/Constructor.sol';
import '../../whitelist/Index.sol';
import '../interfaces/IGetDiscount.sol';
import '../interfaces/ITotalDiscounts.sol';
interface Geyser { function totalStakedFor(address addr) external view returns(uint256); }


contract ShopZerocost is Whitelist {

    ShopConstructor.Struct public control;
    constructor(
        ShopConstructor.Struct memory input
    ) 
        Whitelist(input.operators, input.targets) 
    {

    }

    function setGlobalParameters(
        ShopConstructor.Struct memory globalParameters
    ) 
        external 
        onlyOwner 
    {
        control = globalParameters;
        updateWhitelist(globalParameters.operators, globalParameters.targets);
    }

    function viewDiscount(
        address requester
    ) 
        external 
        view  
        returns(uint256) 
    {
        
        uint256 totalDiscountsSum = ITotalDiscounts(control.discounts).totalDiscounts();
        uint256 totalDiscount;

        for ( uint256 i = 1; i < totalDiscountsSum; ++i ) {

            Discount.Struct memory discount = IGetDiscount(control.discounts).getDiscount(i);

            // token type 1 is first to check to ensure the biggest discount will be applied
            // if user has a erc 1155 for discount
            if ( discount.tokenType == 1 )
                for (uint j = 0; j < discount.tokenIds.length ; ++j)
                    if ( ( totalDiscount > discount.discount || totalDiscount == 1 ) && discount.discount > 1 )
                        if ( ( discount.dateStart <= block.timestamp && discount.dateStop >= block.timestamp ) || ( discount.dateStart == 0 && discount.dateStop == 0 ) )
                            try IERC1155(discount.tokenContract).balanceOf(requester,discount.tokenIds[j]) returns (uint256 balanceOf) {
                                if ( balanceOf > 0 ) {
                                    totalDiscount = discount.discount;
                                }
                            } catch (bytes memory) {
                                
                            }


            // if user has a geyser stake for discount
            if ( discount.tokenType == 2 ) {
                if ( ( totalDiscount > discount.discount || totalDiscount == 1 ) && discount.discount > 1 ) {
                    if ( ( discount.dateStart <= block.timestamp && discount.dateStop >= block.timestamp ) || ( discount.dateStart == 0 && discount.dateStop == 0 ) ) {
                        try Geyser(discount.tokenContract).totalStakedFor(requester) returns (uint256 totalStakedFor) {
                            if ( totalStakedFor > 0 ) {
                                totalDiscount = discount.discount; 
                            }
                        } catch (bytes memory) {
                            
                        }
                    }
                }
            }


            if ( discount.tokenType == 3 ) {
                if ( ( totalDiscount > discount.discount || totalDiscount == 1 ) && discount.discount > 1 ) {
                    if ( ( discount.dateStart <= block.timestamp && discount.dateStop >= block.timestamp ) || ( discount.dateStart == 0 && discount.dateStop == 0 ) ) {
                        try IERC20(discount.tokenContract).balanceOf(requester) returns (uint256 balance) {
                            if ( balance > 0 ) {
                                totalDiscount = discount.discount; 
                            }
                        } catch (bytes memory) {
                            
                        }
                    }
                }
            }

            // if user has a erc 721 for discount 
            if ( discount.tokenType == 0 ) {
                for (uint j = 0; j < discount.tokenIds.length ; ++j) {
                    if ( ( totalDiscount > discount.discount || totalDiscount == 1 ) && discount.discount > 1 ) {
                        if ( ( discount.dateStart <= block.timestamp && discount.dateStop >= block.timestamp ) || ( discount.dateStart == 0 && discount.dateStop == 0 ) ) {
                            try IERC721(discount.tokenContract).ownerOf(discount.tokenIds[j]) returns (address ownerOfToken) {
                                if ( ownerOfToken == requester ) {
                                    totalDiscount = discount.discount;
                                }
                            } catch (bytes memory) {
                                
                            }
                        }
                    }
                }
            }

        }

        return totalDiscount;

    }

}
