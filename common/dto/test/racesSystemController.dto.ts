import { ethers } from "ethers";
import { RacesConstructor } from '../../../typechain-types/contracts/races/params/Index.sol/Params';

export interface RacesSystemController {
    racesRestricted: ethers.Contract;
    racesMethods: ethers.Contract;
    races: ethers.Contract;
    constructor: RacesConstructor.StructStruct;
}