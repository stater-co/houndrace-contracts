import { ethers } from "ethers";
import { Arena } from '../../../typechain-types/Arenas';

export interface MintArenaParams {
    contract: ethers.Contract;
    arena: Arena.StructStructOutput;
  }