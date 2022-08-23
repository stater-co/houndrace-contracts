import { Arena, Arenas } from "../../../typechain-types/Arenas";
import { Gamification } from "../../../typechain-types/Gamification";
import { HoundracePotions } from "../../../typechain-types/HoundracePotions";
import { Hounds } from "../../../typechain-types/Hounds";
import { Queue, Queues } from "../../../typechain-types/Queues";
import { Races } from "../../../typechain-types/Races";

export interface QueuesAdvancedTests {
    queuesContract: Queues;
    arenasContract: Arenas;
    erc20: HoundracePotions;
    queue: Queue.StructStructOutput;
    arena: Arena.StructStructOutput;
    houndsContract: Hounds;
    gamification: Gamification;
    races: Races;
}