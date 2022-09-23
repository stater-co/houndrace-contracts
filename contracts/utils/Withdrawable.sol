// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract Withdrawable is Ownable {

    function payout(
        uint256 amount
    ) 
        external 
        onlyOwner 
    {
        require(amount <= address(this).balance, "Payout: Requested amount to withdraw is too big");
        require(payable(owner()).send(amount), "Payout: Failed to withdraw");
    }

}