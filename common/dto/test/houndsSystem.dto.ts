import { HoundsRestricted } from '../../../typechain-types/contracts/hounds/restricted/Index.sol/HoundsRestricted';
import { HoundsMinter } from '../../../typechain-types/contracts/hounds/minter/Index.sol/HoundsMinter';
import { HoundsModifier } from '../../../typechain-types/contracts/hounds/modifier/Index.sol/HoundsModifier';
import { Hounds } from '../../../typechain-types/contracts/hounds/Index.sol/Hounds';

export interface HoundsSystem {
    houndsRestricted: HoundsRestricted;
    houndsModifier: HoundsModifier;
    houndsMinter: HoundsMinter;
    hounds: Hounds;
}