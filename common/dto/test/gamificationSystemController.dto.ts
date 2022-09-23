import { Gamification, GamificationConstructor } from '../../../typechain-types/Gamification';
import { GamificationRestricted } from '../../../typechain-types/GamificationRestricted';
import { GamificationMethods } from '../../../typechain-types/GamificationMethods';
import { FirewallConstructor } from '../../../typechain-types/Firewall';


export interface GamificationSystemController {
    restricted: GamificationRestricted;
    methods: GamificationMethods;
    gamification: Gamification;
    constructor: GamificationConstructor.StructStruct;
    defaultFirewall: FirewallConstructor.StructStruct;
}