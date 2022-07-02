// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../../payments/params/Payment.sol';


interface IHandleRaceLoot {

    function handleRaceLoot(
        address[] memory from,
        address[] memory to,
        address[] memory currency,
        uint256[][] memory id,
        uint256[][] memory amount,
        uint32[] memory paymentType
    ) external payable;

}