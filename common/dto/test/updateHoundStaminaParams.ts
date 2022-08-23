import { BigNumber } from "ethers";
import { Gamification } from "../../../typechain-types/Gamification";
import { Hounds } from "../../../typechain-types/Hounds";

export interface UpdateHoundStaminaParams {
    contract: Hounds;
    gamification: Gamification
    houndId: string | number | BigNumber
  }