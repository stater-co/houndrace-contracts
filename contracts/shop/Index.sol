//SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import './params/Index.sol';


contract Shop is Params {

    constructor(ShopConstructor.Struct memory input) Params(input) {}

    function createDiscount(Discount.Struct memory discount) external onlyOwner {
        (bool success, ) = control.restricted.delegatecall(msg.data);
        require(success);
    }

    function editDiscount(Discount.Struct memory discount, uint256 theId) external onlyOwner {
        (bool success, ) = control.restricted.delegatecall(msg.data);
        require(success);
    }

    function calculateDiscount(address requester) external returns(uint256) {
        (bool success, bytes memory output) = control.methods.delegatecall(msg.data);
        require(success);
        return abi.decode(output,(uint256));
    }

    function checkDiscount(address requester) external view returns(uint256) {
        return IShopZerocost(control.zerocost).checkDiscount(requester);
    }

}
