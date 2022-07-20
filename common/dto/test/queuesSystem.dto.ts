import { QueuesRestricted } from '../../../typechain-types/contracts/queues/restricted/Index.sol/QueuesRestricted';
import { QueuesMethods } from '../../../typechain-types/contracts/queues/methods/Index.sol/QueuesMethods';
import { Queues } from '../../../typechain-types/contracts/queues/Index.sol/Queues';

export interface QueuesSystem {
    queuesRestricted: QueuesRestricted;
    queueMethods: QueuesMethods;
    queues: Queues;
}