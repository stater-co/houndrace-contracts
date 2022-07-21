import { ethers } from "ethers";

export interface SetMatingSeasonParams {
    contract: ethers.Contract;
    season: boolean;
  }