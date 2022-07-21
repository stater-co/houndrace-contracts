import { ethers } from "ethers";

export interface SetAvailableToBreedParams {
    contract: ethers.Contract;
    houndId: number | string;
    fee: number | string;
    status: boolean;
  }