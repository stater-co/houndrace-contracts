import { ethers, Signer } from "ethers";
import { Hounds } from "../../../typechain-types/Hounds";

export interface BoostStaminaParams {
    contract: Hounds;
    hound1: string | number;
    signer: Signer;
  }