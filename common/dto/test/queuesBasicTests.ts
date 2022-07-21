import { ethers } from "ethers";
import { Queue } from "../../../typechain-types/contracts/queues/Index.sol/Queues";

export interface QueuesBasicTests {
    contract: ethers.Contract;
    queue: Queue.StructStructOutput;
    houndIdToEnqueue: number | string;
    houndsContract: ethers.Contract;
}