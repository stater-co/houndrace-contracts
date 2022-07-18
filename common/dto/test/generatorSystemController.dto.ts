import { ethers } from "ethers";

export interface GeneratorSystemController {
    queuesRestricted: ethers.Contract;
    queuesMethods: ethers.Contract;
    arenasAddress: string;
    houndsAddress: string;
    queuesAddress: string;
    paymentsAddress: string;
    racesAddress: string;
    allowed: Array<string>
}