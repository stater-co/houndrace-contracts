import { IncubatorMethods } from '../../../typechain-types/contracts/incubator/methods/Index.sol/IncubatorMethods';
import { Incubator } from '../../../typechain-types/contracts/incubator/Index.sol/Incubator';

export interface IncubatorSystem {
    incubatorMethods: IncubatorMethods;
    incubator: Incubator;
}