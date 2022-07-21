import { ethers } from "ethers";
import { Race } from "../../../typechain-types/contracts/races/Index.sol/Races";

export interface UploadRaceParams {
    contract: ethers.Contract;
    race: Race.StructStructOutput
  }