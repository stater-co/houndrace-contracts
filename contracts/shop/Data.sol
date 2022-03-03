//SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '@openzeppelin/contracts/access/Ownable.sol';
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/interfaces/IERC1155.sol";
import './Discount.sol';
import './Constructor.sol';
import './IData.sol';
interface Geyser{ function totalStakedFor(address addr) external view returns(uint256); }


contract ShopData is Ownable {
    
    uint256 public id = 1;
    Constructor.Struct public control;

    // list of allowed contracts to use discount nfts on methods call
    mapping(address => bool) allowed;

    // contract address > token ID > discount 1 - 100%
    mapping(uint256 => Discount.Struct) discounts;

    event NewDiscount(uint256 indexed id, Discount.Struct discount);

    constructor(
        Constructor.Struct memory input
    ) {
        control = input;
    }

    function setGlobalParameters(
        Constructor.Struct memory input
    ) external onlyOwner {
        (bool success, ) = control.methods.delegatecall(msg.data);
        require(success);
    }

    function createDiscount(Discount.Struct memory discount) external onlyOwner {
        (bool success, ) = control.methods.delegatecall(msg.data);
        require(success);
    }

    function editDiscount(Discount.Struct memory discount, uint256 theId) external onlyOwner {
        (bool success, ) = control.methods.delegatecall(msg.data);
        require(success);
    }

    function calculateDiscount(address requester) external returns(uint256) {
        (bool success, bytes memory output) = control.methods.delegatecall(msg.data);
        require(success);
        return abi.decode(output,(uint256));
    }

    function checkDiscount(address requester) external view returns(uint256) {
        return IShopData(control.methods).checkDiscount(requester);
    }

}
