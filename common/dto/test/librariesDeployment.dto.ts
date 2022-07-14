import { ethers } from "ethers";

export interface DeployedLibraries {
    converters: ethers.Contract;
    sortings: ethers.Contract;
}