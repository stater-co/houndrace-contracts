import { ethers } from "ethers";

export interface HoundsSystem {
    houndsRestricted: ethers.Contract;
    houndsModifier: ethers.Contract;
    houndsMinter: ethers.Contract;
    hounds: ethers.Contract;
}