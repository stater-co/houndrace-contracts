import { ethers } from "ethers";
import { ArenasConstructor } from '../../../typechain-types/contracts/arenas/params/Index.sol/Params';

export interface ArenasSystemController {
    arenasRestricted: ethers.Contract;
    arenasMethods: ethers.Contract;
    arenas: ethers.Contract;
    constructor: ArenasConstructor.StructStruct;
}