// SPDX-License-Identifier: MIT
pragma solidity <=0.8.11;
import '../races/Race.sol';
import '../../hounds/Hound.sol';


interface IRaceGeneratorData {
    function simulateClassicRace(Hound.Struct[] memory participants, uint256 terrain, uint256 theRandomness) external returns(bytes memory seed);
    function generate(Race.Struct memory queue) external payable returns(Race.Finished memory race);
    function sendRewards(address[3] memory winners, address currency, uint256[3] memory amounts) external;
}
