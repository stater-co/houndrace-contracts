import { ethers } from "ethers";
import { Race } from "../../../typechain-types/contracts/races/Index.sol/Races";


export interface RacesBasicTests {
    contract: ethers.Contract;
    race: Race.StructStructOutput;
}