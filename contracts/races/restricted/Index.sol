// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract RacesRestricted is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function uploadRace(Race.Struct memory race, Payment.Struct[] memory payments) external {
        races[id] = race;
        IPaymentsMethods(control.payments).sendHardcodedPayments(payments);
        emit UploadRace(id, race);
        ++id;
    }

}
