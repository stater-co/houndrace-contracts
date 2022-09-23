import { HoundBreeding, HoundStamina } from '../../../typechain-types/Gamification';
import { FirewallConstructor } from '../../../typechain-types/Firewall';


export interface GamificationExternalDependencies {
    allowed: Array<string>,
    defaultBreeding: HoundBreeding.StructStruct,
    defaultStamina: HoundStamina.StructStruct,
    defaultFirewall: FirewallConstructor.StructStruct
}