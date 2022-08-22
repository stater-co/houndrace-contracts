import { Signer } from "ethers";
import { Hounds } from "../../../typechain-types/Hounds";
import { Queues } from "../../../typechain-types/Queues";

export interface JoinQueueParams {
    contract: Queues;
    queueId: string | number;
    houndId: string | number;
    houndsContract: Hounds;
    sender: Signer | string;
  }