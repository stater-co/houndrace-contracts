import { GamificationSystemController } from '../common/dto/test/gamificationSystemController.dto';
import { expecting } from '../plugins/expecting';


export async function set(
  dependencies: GamificationSystemController
): Promise<void> {
  return new Promise((resolve, ) => {
    describe('Setting up the gamification controllers', () => {

      it('Setup gamification methods controller', async function () {
        const before = await dependencies.methods.control();
        await dependencies.methods.setGlobalParameters({
          defaultBreeding: dependencies.constructor.defaultBreeding,
          defaultStamina: dependencies.constructor.defaultStamina,
          methods: dependencies.methods.address,
          restricted: dependencies.restricted.address,
          firewall: dependencies.firewall
        });
        const after = await dependencies.methods.control();
        expecting(JSON.stringify(before) !== JSON.stringify(after), "Gamification methods params setter bugged");
      });

      it('Setup gamification restricted controller', async function () {
        const before = await dependencies.restricted.control();
        await dependencies.restricted.setGlobalParameters({
          defaultBreeding: dependencies.constructor.defaultBreeding,
          defaultStamina: dependencies.constructor.defaultStamina,
          methods: dependencies.methods.address,
          restricted: dependencies.restricted.address,
          firewall: dependencies.firewall
        });
        const after = await dependencies.restricted.control();
        expecting(JSON.stringify(before) !== JSON.stringify(after), "Gamification restricted params setter bugged");
      });

      it('Setup gamification controller', async function () {
        await dependencies.gamification.setGlobalParameters({
          defaultBreeding: dependencies.constructor.defaultBreeding,
          defaultStamina: dependencies.constructor.defaultStamina,
          methods: dependencies.methods.address,
          restricted: dependencies.restricted.address,
          firewall: dependencies.firewall
        });
        resolve();
      });

    });
    
  });
}