import { FirewallRulesExternalDependencies } from '../common/dto/test/firewallRulesExternalDependencies.dto';
const { ethers } = require('hardhat');

export async function set(
  dependencies: FirewallRulesExternalDependencies
): Promise<void> {
  return new Promise((resolve, ) => {
    describe('Setting up firewall rules', () => {

      it('Set-up', async function () {

        const [sig1, sig2, sig3] = await ethers.getSigners();
        console.log(sig1);
        console.log(sig2);
        console.log(sig3);

        if ( true /*dependencies.council.length > 0*/ ) {
          /*
          for ( let i = 0 , l = dependencies.council.length ; i < l ; ++i ) {
            await dependencies.firewall
            .connect(dependencies.council[i])
            .setRules(dependencies.features,dependencies.operators);
          }
          */
        } else {
          await dependencies.firewall
          .setRules(dependencies.features,dependencies.operators);
        }
        resolve();
      });
    });
    
  });
}