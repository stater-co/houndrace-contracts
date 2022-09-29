import { DeployedFirewall } from '../common/dto/test/firewallDeployment.dto';
import { FirewallExternalDependencies } from '../common/dto/test/firewallExternalDependencies.dto';
import { expecting } from '../plugins/expecting';
import { deployContract } from '../plugins/test/deployContract';
import { Firewall } from '../typechain-types/Firewall';
const { ethers } = require('hardhat');


let firewall: Firewall;


export async function run(
  dependencies: FirewallExternalDependencies
): Promise<DeployedFirewall> {
  return new Promise((resolve, ) => {
    describe('Setting up the firewall', () => {
      it('Deploy the Firewall', async function () {
        const [
          sig1, sig2, sig3, sig4, sig5, 
          sig6, sig7, sig8, sig9, sig10,
          sig11, sig12, sig13, sig14, sig15,
          sig16, sig17, sig18, sig19, sig20
        ] = await ethers.getSigners();
        const council: Array<string> = [
          sig1.address,
          sig2.address,
          sig3.address,
          sig4.address,
          sig5.address,
          sig6.address,
          sig7.address,
          sig8.address,
          sig9.address,
          sig10.address,
          sig11.address,
          sig12.address,
          sig13.address,
          sig14.address,
          sig15.address,
          sig16.address,
          sig17.address,
          sig18.address,
          sig19.address,
          sig20.address
        ];
        expecting(council.length >= dependencies.minCouncilApprovals, "Number of council members cannot be less than minimum council approvals");

        firewall = await deployContract({
          name: 'Firewall',
          constructor: [[
            council,
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