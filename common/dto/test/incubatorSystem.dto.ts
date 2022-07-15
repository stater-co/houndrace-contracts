import { ethers } from "ethers";

export interface IncubatorSystem {
    incubatorMethods: ethers.Contract;
    incubator: ethers.Contract;
}