// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '@openzeppelin/contracts/access/Ownable.sol';
import './Race.sol';
import './Constructor.sol';
import '../../utils/Converters.sol';
import '../../generator/interfaces/IGenerate.sol';
import '../../hounds/interfaces/IUpdateHoundRunning.sol';
import '../../arenas/interfaces/IHandleArenaUsage.sol';
import '../../arenas/interfaces/IArena.sol';
import '../../arenas/params/Arena.sol';
import '../../directives/params/Payment.sol';
import '../../directives/params/Reward.sol';
import '../../directives/interfaces/IGetPayments.sol';
import '../../directives/interfaces/IGetRewards.sol';
import '../../utils/Withdrawable.sol';
import '../../queues/params/Queue.sol';
import 'hardhat/console.sol';


contract Params is Ownable, Withdrawable {
    
    event NewRace(uint256 indexed id, Race.Struct race);
    event NewFinishedRace(uint256 indexed id, Race.Struct race);
    event UploadRace(uint256 indexed id, Race.Struct race);

    uint256 public id = 1;
    RacesConstructor.Struct public control;
    mapping(uint256 => Race.Struct) public races;
    mapping(address => bool) public allowed;

    constructor(RacesConstructor.Struct memory input) {
        control = input;
        for ( uint256 i = 0 ; i < input.allowedCallers.length ; ++i ) {
            allowed[input.allowedCallers[i]] = !allowed[input.allowedCallers[i]];
        }
    }

    function setGlobalParameters(RacesConstructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
        for ( uint256 i = 0 ; i < globalParameters.allowedCallers.length ; ++i ) {
            allowed[globalParameters.allowedCallers[i]] = !allowed[globalParameters.allowedCallers[i]];
        }
    }

    function race(uint256 theId) external view returns(Race.Struct memory) {
        return races[theId];
    }

    function participantsOf(uint256 theId) external view returns(uint256[] memory) {
        return races[theId].participants;
    }

    function handleRaceLoot(uint256 paymentsId, uint256 rewardsId) public payable {
        require(allowed[msg.sender]);
        Payment.Struct[] memory payments = IGetPayments(control.directives).getPayments(paymentsId);
        Reward.Struct[] memory rewards = IGetRewards(control.directives).getRewards(rewardsId);

        console.log("SO FAR SO GOOD");

        for ( uint256 i = 0 ; i < payments.length ; ++i ) {
            (bool success, ) = control.payments.delegatecall(
                abi.encodeWithSignature("runPayment((address,address,address,uint256[],uint256,uint32,uint32,uint32))", payments[i])
            );
            require(success);
        }

        for ( uint256 i = 0 ; i < rewards.length ; ++i ) {
            (bool success, ) = control.payments.delegatecall(
                abi.encodeWithSignature("runPayment((address,address,address,uint256[],uint256,uint32,uint32,uint32))", rewards[i].payment)
            );
            require(success);
        }

    }

    fallback() external payable {}
    receive() external payable {}

}
