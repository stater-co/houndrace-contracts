import { Race, Races } from "../../../typechain-types/Races";

export interface UploadRaceParams {
    contract: Races;
    race: Race.StructStructOutput
  }