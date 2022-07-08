// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '../Index.sol';
import '../../randomness/IGetRandomNumber.sol';


contract Loot is ERC721, Ownable, ERC721URIStorage {

    string public tokensURI;
    address public mintCostCurrency;
    uint256 public mintCost;
    uint256 public id;
    mapping(uint256 => uint256) public lootboxes;

    constructor(
        string memory name_, 
        string memory symbol_
    ) ERC721(name_, symbol_) {}

    function loot() external payable {
        
        // Payment
        require(mintCostCurrency == address(0) ? msg.value >= mintCost : IERC20(mintCostCurrency).transferFrom(msg.sender, address(this), mintCost));

        _mint(msg.sender, id);
        _set
        ++id;
        
    }

}
