import { ethers } from "ethers";
import { Hound } from '../../../typechain-types/contracts/hounds/params/Index.sol/Params';

export interface MintHoundParams {
    contract: ethers.Contract;
    hound: Hound.StructStructOutput;
  }