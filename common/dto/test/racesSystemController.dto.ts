import { ethers } from "ethers";
import { RacesConstructor } from '../../../typechain-types/Races';

export interface RacesSystemController {
    racesRestricted: ethers.Contract;
    racesMethods: ethers.Contract;
    races: ethers.Contract;
    constructor: RacesConstructor.StructStruct;
}