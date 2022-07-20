import { ethers } from "ethers";
import { GeneratorMethods } from '../../../typechain-types/contracts/generator/methods/Index.sol/GeneratorMethods';
import { GeneratorZerocost } from '../../../typechain-types/contracts/generator/zerocost/Index.sol/GeneratorZerocost';
import { Generator } from '../../../typechain-types/contracts/generator/Index.sol/Generator';

export interface GeneratorSystem {
    generatorMethods: GeneratorMethods;
    generatorZerocost: GeneratorZerocost;
    generator: Generator;
}