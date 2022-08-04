import { ethers } from "ethers";
import { ArenasConstructor } from '../../../typechain-types/Arenas';

export interface ArenasSystemController {
    arenasRestricted: ethers.Contract;
    arenasMethods: ethers.Contract;
    arenas: ethers.Contract;
    constructor: ArenasConstructor.StructStruct;
}