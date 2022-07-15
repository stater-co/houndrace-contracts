import { ethers } from "ethers";

export interface RandomnessSystem {
    randomness: ethers.Contract;
}