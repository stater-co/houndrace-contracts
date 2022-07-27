import { ethers, Signer } from "ethers";

export interface BreedHoundsParams {
    contract: ethers.Contract;
    hound1: string | number;
    hound2: string | number;
    signer: Signer;
  }