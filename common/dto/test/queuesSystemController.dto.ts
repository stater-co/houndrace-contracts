import { QueuesConstructor } from '../../../typechain-types/Queues';
import { QueuesMethods } from '../../../typechain-types/QueuesMethods';
import { QueuesRestricted } from '../../../typechain-types/QueuesRestricted';

export interface QueuesSystemController {
    queuesRestricted: QueuesRestricted;
    queuesMethods: QueuesMethods;
    constructor: QueuesConstructor.StructStruct;
}