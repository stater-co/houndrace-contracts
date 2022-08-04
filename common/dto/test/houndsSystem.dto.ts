import { HoundsRestricted } from '../../../typechain-types/HoundsRestricted';
import { HoundsMinter } from '../../../typechain-types/HoundsMinter';
import { HoundsModifier } from '../../../typechain-types/HoundsModifier';
import { Hounds } from '../../../typechain-types/Hounds';
import { AlphaERC721 } from '../../../typechain-types/AlphaERC721';

export interface HoundsSystem {
    houndsRestricted: HoundsRestricted;
    houndsModifier: HoundsModifier;
    houndsMinter: HoundsMinter;
    hounds: Hounds;
    transferrableRoot: AlphaERC721;
}