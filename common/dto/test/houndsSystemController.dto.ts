import { ethers } from "ethers";
import { Constructor } from '../../../typechain-types/contracts/hounds/params/Index.sol/Params';

export interface HoundsSystemController {
    houndsRestricted: ethers.Contract;
    houndsModifier: ethers.Contract;
    houndsMinter: ethers.Contract;
    hounds: ethers.Contract;
    constructor: Constructor.StructStruct;
}