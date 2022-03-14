// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '@openzeppelin/contracts/access/Ownable.sol';
import './zerocost/IIndex.sol';
import './params/Index.sol';


contract RandomnessVanillaData is Params, Ownable {

    constructor(address methods) {
        methodsContract = methods;
    }

    function setGlobalParameters(address methods) external onlyOwner {
        (bool success, ) = methods.delegatecall(msg.data);
        require(success);
    }

    function getRandomNumber(bytes memory input) external view returns(uint256) {
        return IRandomnessMethods(methodsContract).getRandomNumber(input);
    }


}

