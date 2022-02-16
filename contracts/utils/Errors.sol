//SPDX-License-Identifier: MIT
pragma solidity <=0.8.11;

library Errors {

    string public constant NO_OWNER_ON_HOUND_CREATION = '1';
    string public constant NOT_ENOUGH_PAID_TO_MINT = '2';
    string public constant NOT_ENOUGH_PAID_TO_BREED = '3';
    string public constant CONSTRUCTOR_PARAMETER_MISSING = '4';
    string public constant SYNCED_ARRAY_LENGTH_INVALID = '5';
    
    /* @DIIMIIM: Used for almost every .call() code snippet */
    string public constant CALL_FAILED = '6';
    
    /* @DIIMIIM: Used for almost every .delegatecall() code snippet */
    string public constant DELEGATECALL_FAILED = '7';
    
    string public constant RNG_PROVIDER_NOT_ALLOWED = '8';
    string public constant INCOMPLETE_INCUBATOR_IMPLEMENTATION = '9';
    
    string public constant NOT_ENOUGH_LINK = '10';
    
    string public constant NOT_OWNER_OF_CONTRACT = '11';
    string public constant QUEUE_ID_NOT_VALID = '12';
    string public constant ONE_RUN_PER_HOUND = '13';
    string public constant ETH_TRANSFER_FAILED = '14';
    string public constant CURRENCY_TRANSFER_FAILED = '15';
    string public constant BIOLOGICAL_REQUIREMENTS_NOT_MET = '16';
    string public constant NOT_ENOUGH_PAID_TO_PLAY = '17';
    string public constant CLASSIC_RACE_PARTICIPANTS_RANGE_NOT_MATCHED = '18';
    string public constant RACE_HAS_FINISHED_ALREADY = '19';
    string public constant NOT_THE_OWNER_OF_HOUND = '20';
    string public constant HOUND_BREEDING_STILL_ON_COOLDOWN = '21';
    string public constant HOUND_NOT_AVAILABLE_TO_BREED = '22';
    string public constant CALLER_NOT_ALLOWED = '23';
    string public constant HOUND_DOES_NOT_EXIST = '23';
    string public constant NOT_ENOUGH_STAMINA = '24';
    string public constant NOT_VALID_GAME_MODE = '25';
    string public constant NOT_ENOUGH_PAID_TO_REFILL = '26';
    string public constant INVALID_INPUT = '27';
    string public constant NO_FREE_BREED_ALLOWED = '28';
    string public constant INVALID_GENETIC_SEQUENCES = '29';
    string public constant PAYMENT_OVERFLOW = '30';
    string public constant NOT_ARENA_OWNER = '31';
    string public constant ARENA_FEE_TOO_EXPENSIVE = '32';
    string public constant QUEUE_DATES_NOT_REACHED = '33';
}