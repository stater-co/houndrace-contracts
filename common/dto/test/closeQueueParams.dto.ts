import { ethers } from "ethers";

export interface CloseQueueParams {
  contract: ethers.Contract;
  queueId: number | string;
}