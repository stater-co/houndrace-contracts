import { DeployedFirewall } from '../common/dto/test/firewallDeployment.dto';
import { FirewallExternalDependencies } from '../common/dto/test/firewallExternalDependencies.dto';
import { deployContract } from '../plugins/test/deployContract';
import { Firewall } from '../typechain-types/Firewall';


let firewall: Firewall;


export async function run(
  dependencies: FirewallExternalDependencies
): Promise<DeployedFirewall> {
  return new Promise((resolve, ) => {
    describe('Setting up the firewall', () => {
      it('Deploy the Firewall', async function () {
        firewall = await deployContract({
          name: 'Firewall',
          constructor: [[
            dependencies.council,
            dependencies.minCouncilApprovals
          ]],
          props: {}
        }) as Firewall;
        resolve({
          firewall: firewall
        });
      });
    });
  });
}