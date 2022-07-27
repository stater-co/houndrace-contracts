import { ethers } from "ethers";
import { GeneratorConstructor } from '../../../typechain-types/contracts/generator/params/Index.sol/Params';

export interface GeneratorSystemController {
    generatorZerocost: ethers.Contract;
    generatorMethods: ethers.Contract;
    constructor: GeneratorConstructor.StructStruct;
}