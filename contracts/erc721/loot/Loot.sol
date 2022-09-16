// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC721/IERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import './Constructor.sol';
import './Box.sol';


contract Lootboxes is Ownable, ERC721URIStorage, ERC721Holder {

    uint256 public id;
    Constructor.Struct public control;
    mapping(uint256 => Box.Struct) public lootboxes;
    mapping(address => bool) public allowedApprovals;

    event NewLootboxes(uint256 indexed idStart, uint256 indexed idFinish);
    event LootboxOpened(uint256 indexed id, Box.Struct box, address indexed owner);

    constructor(
        Constructor.Struct memory input
    ) ERC721("HoundRace Lootbox", "HRLB") {
        control = input;
        for ( uint256 i = 0 ; i < input.allowedApprovals.length ; ++i ) {
            allowedApprovals[input.allowedApprovals[i]] = !allowedApprovals[input.allowedApprovals[i]];
        }
    }


    function setGlobalParameters(Constructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
        for ( uint256 i = 0 ; i < globalParameters.allowedApprovals.length ; ++i ) {
            allowedApprovals[globalParameters.allowedApprovals[i]] = !allowedApprovals[globalParameters.allowedApprovals[i]];
        }
    }

    function mint(uint256 amount, string memory token_uri) external onlyOwner {
        uint256 idStart = id;
        for ( uint256 i = 0; i < amount; ++i ) {
            _mint(msg.sender, id);
            _setTokenURI(id, token_uri);
            ++id;
        }

        emit NewLootboxes(idStart, id);
    }

    function setOpenStatus(bool status) external onlyOwner {
        control.canBeOpened = status;
    }

    function open(uint256 boxId) external {
        require(control.canBeOpened);
        require(ownerOf(boxId) == msg.sender);

        emit LootboxOpened(boxId, lootboxes[boxId], msg.sender);

        _burn(boxId);
    }

    /**
     * Override isApprovedForAll to auto-approve OS's proxy contract
     */
    function isApprovedForAll(
        address _owner,
        address _operator
    ) public override view returns (bool isOperator) {
        // if OpenSea's ERC721 Proxy Address is detected, auto-return true
        // for Polygon's Mumbai testnet, use 0xff7Ca10aF37178BdD056628eF42fD7F799fAc77c
        // 0x58807baD0B376efc12F5AD86aAc70E78ed67deaE
        if ( allowedApprovals[_operator] ) {
            return true;
        }
        
        // otherwise, use the default ERC721.isApprovedForAll()
        return ERC721.isApprovedForAll(_owner, _operator);
    }

}
