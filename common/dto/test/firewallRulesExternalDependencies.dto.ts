import { Firewall } from '../../../typechain-types/Firewall';

export interface FirewallRulesExternalDependencies {
    firewall: Firewall,
    features: Array<string>,
    operators: Array<string>
}