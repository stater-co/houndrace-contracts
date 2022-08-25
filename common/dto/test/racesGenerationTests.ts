import { Arena } from "../../../typechain-types/Arenas";
import { Hounds } from "../../../typechain-types/Hounds";
import { Race } from "../../../typechain-types/Races";


export interface RacesGenerationTests {
    race: Race.StructStructOutput;
    hounds: Hounds;
    arena: Arena.StructStructOutput;
}