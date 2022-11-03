import { Hounds } from "../../../typechain-types/Hounds";
import { Lootboxes } from "../../../typechain-types/Lootboxes";
import { Races } from "../../../typechain-types/Races";

export interface LootboxesBasicTests {
    lootboxesContract: Lootboxes;
    races: Races;
    houndsContract: Hounds;
}