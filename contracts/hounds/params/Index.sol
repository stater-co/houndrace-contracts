//SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol';
import './Constructor.sol';
import './Hound.sol';


contract Params is Ownable, ERC721, ERC721Holder {
    uint256 public id = 1;
    mapping(address => bool) public allowed;
    mapping(uint256 => Hound.Struct) public hounds;
    event HoundEvent(uint256 indexed id, Hound.Struct hound);
    Constructor.Struct public control;

    constructor(string memory name, string memory symbol) ERC721(name,symbol) {
 
    }

    function setGlobalParameters(Constructor.Struct memory globalParameters) external onlyOwner {
        for ( uint256 i = 0 ; i < globalParameters.allowedCallers.length ; ++i )
            allowed[globalParameters.allowedCallers[i]] = !allowed[globalParameters.allowedCallers[i]];
        control = globalParameters;
    }

    function send(address target, string memory method, bytes memory input) public returns(bytes memory){
        (bool success, bytes memory output) = target.delegatecall(
            abi.encodeWithSignature(
                method,
                input
            )
        );
        require(success);
        return output;
    }

}