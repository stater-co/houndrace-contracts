import { ethers } from "ethers";
import { Queue } from '../../../typechain-types/contracts/queues/params/Index.sol/Params';

export interface MintQueueParams {
    contract: ethers.Contract;
    queue: Queue.StructStructOutput;
  }