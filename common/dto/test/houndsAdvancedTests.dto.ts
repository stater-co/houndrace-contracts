import { Contract } from "ethers";
import { Gamification } from "../../../typechain-types/Gamification";
import { Hounds } from "../../../typechain-types/Hounds";
import { Races } from "../../../typechain-types/Races";

export interface HoundsAdvancedTests {
    hounds: Hounds;
    gamification: Gamification
    erc20: Contract;
    payments: Contract;
    transferableHounds: Contract;
    races: Races;
}