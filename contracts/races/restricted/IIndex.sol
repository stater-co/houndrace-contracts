// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../../payments/payment/Index.sol';
import '../params/Constructor.sol';
import '../params/Race.sol';


interface IRacesRestricted {

    function setGlobalParameters(RacesConstructor.Struct memory input) external;

    function uploadRace(Race.Struct memory race, Payment.Struct[] memory payments) external;

}
