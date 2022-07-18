import { ethers } from "ethers";

export interface GeneratorSystem {
    generatorMethods: ethers.Contract;
    generatorZerocost: ethers.Contract;
    generator: ethers.Contract;
}