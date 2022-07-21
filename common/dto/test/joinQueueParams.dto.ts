import { ethers } from "ethers";

export interface JoinQueueParams {
    contract: ethers.Contract;
    queueId: string | number;
    houndId: string | number;
    entryFee: string | number;
    houndsContract: ethers.Contract;
  }