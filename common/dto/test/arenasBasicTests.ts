import { ethers } from "ethers";
import { Arena } from "../../../typechain-types/contracts/arenas/Index.sol/Arenas";

export interface ArenasBasicTests {
    arenas: ethers.Contract;
    arena: Arena.StructStructOutput;
}