import { ethers, BigNumber } from "ethers";

export interface UpdateHoundStaminaParams {
    contract: ethers.Contract;
    houndId: string | number | BigNumber
  }