import { GamificationExternalDependencies } from '../common/dto/test/gamificationExternalDependencies.dto';
import { deployContract } from '../plugins/test/deployContract';
import { Gamification } from '../typechain-types/Gamification';
import { globalParams } from '../common/params';
import { GamificationSystem } from '../common/dto/test/gamificationSystem.dto';
import { GamificationRestricted } from '../typechain-types/GamificationRestricted';
import { GamificationMethods } from '../typechain-types/GamificationMethods';


let methods: GamificationMethods;
let restricted: GamificationRestricted;
let gamification: Gamification;

export async function run(
  dependencies: GamificationExternalDependencies
): Promise<GamificationSystem> {
  return new Promise((resolve, ) => {
    describe('Setting up the gamification', () => {

      it('Deploy the methods', async function () {
        methods = await deployContract({
          name: 'GamificationMethods',
          constructor: [[
            dependencies.defaultBreeding,
            dependencies.defaultStamina,
            dependencies.firewall,
            globalParams.address0,
            globalParams.address0
          ]],
          props: {}
        }) as GamificationMethods;
      });

      it('Deploy the restricted', async function () {
        restricted = await deployContract({
          name: 'GamificationRestricted',
          constructor: [[
            dependencies.defaultBreeding,
            dependencies.defaultStamina,
            dependencies.firewall,
            globalParams.address0,
            methods.address
          ]],
          props: {}
        }) as GamificationRestricted;
      });

      it('Deploy the gamification', async function () {
        gamification = await deployContract({
          name: 'Gamification',
          constructor: [[
            dependencies.defaultBreeding,
            dependencies.defaultStamina,
            dependencies.firewall,
            restricted.address,
            methods.address
          ]],
          props: {}
        }) as Gamification;
        resolve({
          gamification: gamification,
          methods: methods,
          restricted: restricted
        });
      });
    });
    
  });
}