import { ethers } from "ethers";
import { Arena } from '../../../typechain-types/contracts/arenas/params/Index.sol/Params';

export interface MintArenaParams {
    contract: ethers.Contract;
    arena: Arena.StructStructOutput;
  }