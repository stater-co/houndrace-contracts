// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '../params/Index.sol';


contract DirectivesRestricted is Params {

    constructor(Constructor.Struct memory input) Params(input) {}

    function createRewardsBatch(Reward.Struct[] memory batch) external {
        for ( uint256 i = 0 ; i < batch.length ; ++i ) {
            rewards[rewardId].push(batch[i]);
        }
        emit NewRewardBatch(rewardId, batch);
        ++rewardId;
    }

    function createPaymentsBatch(Payment.Struct[] memory batch) external {
        for ( uint256 i = 0 ; i < batch.length ; ++i ) {
            payments[paymentId].push(batch[i]);
        }
        emit NewPaymentBatch(paymentId, batch);
        ++paymentId;
    }

}
