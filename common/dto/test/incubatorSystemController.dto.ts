import { ethers } from "ethers";
import { IncubatorConstructor } from '../../../typechain-types/contracts/incubator/params/Index.sol/Params';

export interface IncubatorSystemController {
    incubatorMethods: ethers.Contract;
    incubator: ethers.Contract;
    constructor: IncubatorConstructor.StructStruct;
}