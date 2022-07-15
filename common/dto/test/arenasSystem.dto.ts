import { ethers } from "ethers";

export interface ArenasSystem {
    arenasRestricted: ethers.Contract;
    arenasMethods: ethers.Contract;
    arenas: ethers.Contract;
}