//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Index.sol';


contract ShopZerocost is Params {

    constructor(ShopConstructor.Struct memory input) Params(input) {}

    function checkDiscount(address requester) external view returns(uint256) {
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
                                    discount = discounts[i].discount;
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
                                                discount = discounts[i].discount;
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
