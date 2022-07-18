import { ethers } from "ethers";

export interface QueuesSystem {
    queuesRestricted: ethers.Contract;
    queueMethods: ethers.Contract;
    queues: ethers.Contract;
}