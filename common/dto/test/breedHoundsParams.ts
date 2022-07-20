import { ethers, Signer } from "ethers";

export interface BreedHoundsParams {
    contract: ethers.Contract;
    signer: Signer;
  }