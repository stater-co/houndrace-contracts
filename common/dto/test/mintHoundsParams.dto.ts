import { ethers } from "ethers";
import { Hound } from '../../../typechain-types/Hounds';

export interface MintHoundParams {
    contract: ethers.Contract;
    hound: Hound.StructStructOutput;
    owner: string;
    position: number;
  }