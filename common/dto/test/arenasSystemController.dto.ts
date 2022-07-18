import { ethers } from "ethers";

export interface ShopSystemController {
    arenasRestricted: ethers.Contract;
    arenasMethods: ethers.Contract;
    arenas: ethers.Contract;
}