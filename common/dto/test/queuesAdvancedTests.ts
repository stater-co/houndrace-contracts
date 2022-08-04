import { ethers } from "ethers";
import { Arena, Arenas } from "../../../typechain-types/Arenas";
import { HoundracePotions } from "../../../typechain-types/HoundracePotions";
import { Queue, Queues } from "../../../typechain-types/Queues";

export interface QueuesAdvancedTests {
    queuesContract: Queues;
    arenasContract: Arenas;
    erc20: HoundracePotions;
    queue: Queue.StructStructOutput;
    arena: Arena.StructStructOutput;
    houndsContract: ethers.Contract;
}