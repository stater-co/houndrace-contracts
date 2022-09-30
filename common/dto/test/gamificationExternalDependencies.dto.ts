import { HoundBreeding, HoundStamina } from '../../../typechain-types/Gamification';


export interface GamificationExternalDependencies {
    defaultBreeding: HoundBreeding.StructStruct,
    defaultStamina: HoundStamina.StructStruct,
    firewallAddress: string
}