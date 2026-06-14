//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract DuneForwarder {

    event Forwarded(address indexed from, address indexed to, uint256 amount);

    error ZeroRecipient();
    error ZeroAmount();
    error TransferFailed();

    function sendForBridge(address payable to) external payable {
        if (to == address(0)) revert ZeroRecipient();
        if (msg.value == 0) revert ZeroAmount();

        (bool ok, ) = to.call{ value: msg.value }("");
        if (!ok) revert TransferFailed();

        emit Forwarded(msg.sender, to, msg.value);
    }

    function sendForInvestors(address payable to) external payable {
        if (to == address(0)) revert ZeroRecipient();
        if (msg.value == 0) revert ZeroAmount();

        (bool ok, ) = to.call{ value: msg.value }("");
        if (!ok) revert TransferFailed();

        emit Forwarded(msg.sender, to, msg.value);
    }

    function sendForVault(address payable to) external payable {
        if (to == address(0)) revert ZeroRecipient();
        if (msg.value == 0) revert ZeroAmount();

        (bool ok, ) = to.call{ value: msg.value }("");
        if (!ok) revert TransferFailed();

        emit Forwarded(msg.sender, to, msg.value);
    }

    function sendForAuction(address payable to) external payable {
        if (to == address(0)) revert ZeroRecipient();
        if (msg.value == 0) revert ZeroAmount();

        (bool ok, ) = to.call{ value: msg.value }("");
        if (!ok) revert TransferFailed();

        emit Forwarded(msg.sender, to, msg.value);
    }

}
