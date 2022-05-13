// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import './Constructor.sol';
import '../../arenas/params/Arena.sol';
import '../../arenas/IIndex.sol';
import '../../utils/Converters.sol';
import '../../payments/IIndex.sol';
import '../../hounds/IIndex.sol';
import '../../utils/Withdrawable.sol';
import '../../races/IIndex.sol';
import './Directive.sol';


contract Params is Ownable {
    

    event QueuesCreation(uint256 indexed id, Directive.Struct directive);
    uint256 public id = 1;
    Constructor.Struct public control;
    mapping(uint256 => Queue.Struct) public queues;

    constructor(Constructor.Struct memory input) {
        control = input;
    }

    function setGlobalParameters(Constructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
    }

}