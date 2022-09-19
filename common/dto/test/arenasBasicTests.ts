import { ethers } from "ethers";
import { Arena } from "../../../typechain-types/Arenas";

export interface ArenasBasicTests {
    arenas: ethers.Contract;
    arena: Arena.StructStructOutput;
}