// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '../params/Index.sol';


contract RacesRestricted is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function uploadRace(Race.Struct memory race) external payable onlyOwner {

        IOnBeforeRace(control.queues).onBeforeRace{ value: msg.value }(race.queueId);

        require(msg.value >= racePrize);

        for ( uint256 i = 0 ; i < race.participants.length ; ++i ) {
            IHounds(control.hounds).updateHoundRunning(race.participants[i], false);
        }

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
