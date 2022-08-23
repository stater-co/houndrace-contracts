import { Constructor, Hounds } from '../../../typechain-types/Hounds';
import { HoundsMinter } from '../../../typechain-types/HoundsMinter';
import { HoundsModifier } from '../../../typechain-types/HoundsModifier';
import { HoundsRestricted } from '../../../typechain-types/HoundsRestricted';

export interface HoundsSystemController {
    houndsRestricted: HoundsRestricted;
    houndsModifier: HoundsModifier;
    houndsMinter: HoundsMinter;
    hounds: Hounds;
    constructor: Constructor.StructStruct;
}