import { ethers } from "ethers";
import { Constructor } from '../../../typechain-types/Hounds';

export interface HoundsSystemController {
    houndsRestricted: ethers.Contract;
    houndsModifier: ethers.Contract;
    houndsMinter: ethers.Contract;
    hounds: ethers.Contract;
    constructor: Constructor.StructStruct;
}