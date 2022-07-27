import { ethers } from "ethers";
import { QueuesConstructor } from '../../../typechain-types/contracts/queues/params/Index.sol/Params';

export interface QueuesSystemController {
    queuesRestricted: ethers.Contract;
    queuesMethods: ethers.Contract;
    constructor: QueuesConstructor.StructStruct;
}