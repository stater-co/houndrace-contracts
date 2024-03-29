//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Index.sol';


contract ShopMethods is Params {

    constructor(ShopConstructor.Struct memory input) Params(input) {}

    function calculateDiscount(
        address requester
    ) 
        external 
        whitelisted 
        returns(uint256) 
    {
        
        uint256 totalDiscount;

        for ( uint256 i = 1; i < id; ++i ) {

            // token type 1 is first to check to ensure the biggest discount will be applied
            // if user has a erc 1155 for discount
            if ( discounts[i].tokenType == 1 )
                for (uint j = 0; j < discounts[i].tokenIds.length ; ++j)
                    if ( ( totalDiscount > discounts[i].discount || totalDiscount == 1 ) && discounts[i].discount > 1 )
                        if ( ( discounts[i].dateStart <= block.timestamp && discounts[i].dateStop >= block.timestamp ) || ( discounts[i].dateStart == 0 && discounts[i].dateStop == 0 ) )
                            try IERC1155(discounts[i].tokenContract).balanceOf(requester,discounts[i].tokenIds[j]) returns (uint256 balanceOf) {
                                if ( balanceOf > 0 )
                                    if ( discounts[i].usable ) {
                                        IERC1155(discounts[i].tokenContract).safeTransferFrom(
                                            requester,
                                            control.discountsReceiverWallet,
                                            discounts[i].tokenIds[j],
                                            discounts[i].amountToUsePerUsableDiscount,
                                            '0x00'
                                        );
                                        totalDiscount = discounts[i].discount;
                                    } else {
                                        totalDiscount = discounts[i].discount;
                                    }
                            } catch (bytes memory) {
                                
                            }


            // if user has a geyser stake for discount
            if ( discounts[i].tokenType == 2 ) {
                if ( ( totalDiscount > discounts[i].discount || totalDiscount == 1 ) && discounts[i].discount > 1 ) {
                    if ( ( discounts[i].dateStart <= block.timestamp && discounts[i].dateStop >= block.timestamp ) || ( discounts[i].dateStart == 0 && discounts[i].dateStop == 0 ) ) {
                        try Geyser(discounts[i].tokenContract).totalStakedFor(requester) returns (uint256 totalStakedFor) {
                            if ( totalStakedFor > 0 ) {
                                totalDiscount = discounts[i].discount; 
                            }
                        } catch (bytes memory) {
                            
                        }
                    }
                }
            }


            if ( discounts[i].tokenType == 3 ) {
                if ( ( totalDiscount > discounts[i].discount || totalDiscount == 1 ) && discounts[i].discount > 1 ) {
                    if ( ( discounts[i].dateStart <= block.timestamp && discounts[i].dateStop >= block.timestamp ) || ( discounts[i].dateStart == 0 && discounts[i].dateStop == 0 ) ) {
                        try IERC20(discounts[i].tokenContract).balanceOf(requester) returns (uint256 balance) {
                            if ( balance > 0 ) {
                                if ( discounts[i].usable ) {
                                    IERC20(discounts[i].tokenContract).transferFrom(
                                        requester, 
                                        control.discountsReceiverWallet, 
                                        discounts[i].amountToUsePerUsableDiscount
                                    );
                                    totalDiscount = discounts[i].discount;
                                } else {
                                    totalDiscount = discounts[i].discount; 
                                }
                            }
                        } catch (bytes memory) {
                            
                        }
                    }
                }
            }

            // if user has a erc 721 for discount 
            if ( discounts[i].tokenType == 0 ) {
                for (uint j = 0; j < discounts[i].tokenIds.length ; ++j) {
                    if ( ( totalDiscount > discounts[i].discount || totalDiscount == 1 ) && discounts[i].discount > 1 ) {
                        if ( ( discounts[i].dateStart <= block.timestamp && discounts[i].dateStop >= block.timestamp ) || ( discounts[i].dateStart == 0 && discounts[i].dateStop == 0 ) ) {
                            try IERC721(discounts[i].tokenContract).ownerOf(discounts[i].tokenIds[j]) returns (address ownerOfToken) {
                                if ( ownerOfToken == requester ) {
                                    if ( discounts[i].usable ) {
                                        IERC721(discounts[i].tokenContract).safeTransferFrom(
                                            requester,
                                            control.discountsReceiverWallet,
                                            discounts[i].tokenIds[j]
                                        );
                                        totalDiscount = discounts[i].discount;
                                    } else {
                                        totalDiscount = discounts[i].discount;
                                    }
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
