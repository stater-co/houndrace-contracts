import { ethers } from "ethers";

export interface RacesSystem {
    racesRestricted: ethers.Contract;
    racesMethods: ethers.Contract;
    races: ethers.Contract;
}