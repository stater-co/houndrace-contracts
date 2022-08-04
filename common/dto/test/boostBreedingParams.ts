import { ethers, Signer } from "ethers";
import { Hounds } from "../../../typechain-types/Hounds";

export interface BoostBreedingParams {
    contract: Hounds;
    hound1: string | number;
    signer: Signer;
  }