import { ethers } from "ethers";
import { Queue } from "../../../typechain-types/Queues";

export interface QueuesBasicTests {
    contract: ethers.Contract;
    queue: Queue.StructStructOutput;
    houndIdToEnqueue: number | string;
    houndsContract: ethers.Contract;
}