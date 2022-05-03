// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract RacesRestricted is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function uploadRace(Race.Struct memory race, Payment.Struct[] memory payments) external payable {
        uint256 ethToSend = 0;
        uint256 racePrize = race.participants.length * race.entryFee;

        require(msg.value >= racePrize);

        // custom ERC20 / ERC721 / ERC1155 will be sent to the contract that makes the transfer, to avoid code complications
        for ( uint256 i = 0 ; i < payments.length ; ++i ) {
            if ( payments[i].currency == address(0) ) {
                if ( payments[i].paymentType == 3 ) {
                    payments[i].qty = racePrize / 100 * payments[i].percentageWon;
                    payments[i].to = payable(IHounds(control.hounds).houndOwner(race.participants[payments[i].place]));
                    ethToSend += payments[i].qty;
                } else {
                    ethToSend += payments[i].qty;
                }
            }
        }

        IPayments(control.payments).sendHardcodedPayments{ value: ethToSend }(payments);

        races[id] = race;

        emit UploadRace(id, race);

        ++id;
    }

}
