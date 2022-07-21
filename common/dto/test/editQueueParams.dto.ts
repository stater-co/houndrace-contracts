import { ethers } from "ethers";
import { Queue } from "../../../typechain-types/contracts/queues/Index.sol/Queues";

export interface EditQueueParams {
  contract: ethers.Contract;
  queue: Queue.StructStructOutput;
  queueId: number | string;
}