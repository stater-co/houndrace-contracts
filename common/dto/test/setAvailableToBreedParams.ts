import { Gamification } from "../../../typechain-types/Gamification";
import { Hounds } from "../../../typechain-types/Hounds";

export interface SetAvailableToBreedParams {
    contract: Hounds;
    gamification: Gamification;
    houndId: number | string;
    fee: number | string;
    status: boolean;
  }