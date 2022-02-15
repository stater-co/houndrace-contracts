// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;
import '@openzeppelin/contracts/access/Ownable.sol';
import './IData.sol';


contract RandomnessVanillaData is Ownable {
    
    address public methodsContract;

    constructor(address methods) {
        methodsContract = methods;
    }

    function setGlobalParameters(address methods) external onlyOwner {
        IRandomnessVanillaData(methodsContract).setGlobalParameters(methods);
    }

    /**
     * DIIMIIM: FOR TESTING PURPOSE ONLY !!!
     */
    function getRandomNumber(bytes memory input) external view returns(uint256) {
        return IRandomnessVanillaData(methodsContract).getRandomNumber(input);
    }


}

