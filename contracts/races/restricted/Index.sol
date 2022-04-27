// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract RacesRestricted is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function uploadRace(Race.Struct memory race, Payment.Struct[] memory payments) external {
        races[id] = race;
        (bool success, ) = control.payments.delegatecall(
            abi.encodeWithSignature(
                "sendHardcodedPayments((address,address,address,uint256[],uint256,uint32)[])",
                payments
            )
        );
        require(success);
        emit UploadRace(id, race);
        ++id;
    }

}
