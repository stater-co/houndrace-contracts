import { Signer } from "ethers";
import { Gamification } from "../../../typechain-types/Gamification";
import { Hound, Hounds } from '../../../typechain-types/Hounds';
import { Races } from "../../../typechain-types/Races";

export interface MintHoundParams {
    contract: Hounds;
    hound: Hound.StructStructOutput;
    gamification: Gamification;
    races: Races;
    owner: string;
    position: number;
    signer: Signer;
  }