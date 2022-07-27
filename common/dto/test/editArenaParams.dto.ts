import { ethers } from "ethers";
import { Arena } from '../../../typechain-types/contracts/arenas/params/Index.sol/Params';

export interface EditArenaParams {
    contract: ethers.Contract;
    arena: Arena.StructStructOutput;
    arenaId: string | number;
  }