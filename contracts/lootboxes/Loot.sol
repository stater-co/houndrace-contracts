// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC1155/IERC1155.sol';
import '@openzeppelin/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol';
import '@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol';
import '../firewall/interfaces/IsAllowed.sol';
import './params/Constructor.sol';
import './params/Box.sol';


contract Lootboxes is ERC1155URIStorage, ERC1155Holder {

    LootboxesConstructor.Struct public control;
    mapping(uint256 => Box.Struct) public lootboxes;

    event NewLootboxes(uint256 indexed id, uint256 indexed amount);
    event LootboxOpened(uint256 indexed id, Box.Struct box, address indexed owner);

    constructor(
        LootboxesConstructor.Struct memory input
    ) ERC1155(input.name) {
        control = input;
    }


    function setGlobalParameters(
        LootboxesConstructor.Struct memory globalParameters
    ) 
        external 
    {
        require(IsAllowed(control.firewall).isAllowed(msg.sender,msg.sig));
        control = globalParameters;
    }

    function mint(
        uint256 amount, 
        uint256 tokenId, 
        string memory token_uri
    ) 
        external 
    {
        require(IsAllowed(control.firewall).isAllowed(msg.sender,msg.sig));
        _mint(msg.sender, tokenId, amount, '0x0');
        _setURI(token_uri);
        emit NewLootboxes(tokenId, amount);
    }

    function setOpenStatus(bool status) external {
        require(IsAllowed(control.firewall).isAllowed(msg.sender,msg.sig));
        control.canBeOpened = status;
    }

    function open(uint256 boxId) external {
        require(control.canBeOpened);
        require(balanceOf(msg.sender, boxId) > 0);

        emit LootboxOpened(boxId, lootboxes[boxId], msg.sender);

        _burn(msg.sender,boxId,1);
    }

    /**
     * Override isApprovedForAll to auto-approve OS's proxy contract
     */
    function isApprovedForAll(
        address _owner,
        address _operator
    ) public override view returns (bool isOperator) {
        // if OpenSea's ERC1155 Proxy Address is detected, auto-return true
        // for Polygon's Mumbai testnet, use 0xff7Ca10aF37178BdD056628eF42fD7F799fAc77c
        // 0x58807baD0B376efc12F5AD86aAc70E78ed67deaE
        if ( IsAllowed(control.firewall).isAllowed(_operator,msg.sig) ) {
            return true;
        }
        
        // otherwise, use the default ERC1155.isApprovedForAll()
        return ERC1155.isApprovedForAll(_owner, _operator);
    }

    /**
     * https://docs.opensea.io/docs/polygon-basic-integration
     */
    function _msgSender()
        internal
        override
        view
        returns (address sender)
    {
        if (msg.sender == address(this)) {
            bytes memory array = msg.data;
            uint256 index = msg.data.length;
            assembly {
                // Load the 32 bytes word from memory with the address on the lower 20 bytes, and mask those.
                sender := and(
                    mload(add(array, index)),
                    0xffffffffffffffffffffffffffffffffffffffff
                )
            }
        } else {
            sender = payable(msg.sender);
        }
        return sender;
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC1155, ERC1155Receiver) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

}
