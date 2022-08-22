import { GamificationSystemController } from '../common/dto/test/gamificationSystemController.dto';


export async function set(
  dependencies: GamificationSystemController
): Promise<void> {
  return new Promise((resolve, ) => {
    describe('Setting up the gamification controllers', () => {

      it('Setup gamification methods controller', async function () {
        await dependencies.methods.setGlobalParameters({
          allowed: dependencies.constructor.allowed,
          defaultBreeding: dependencies.constructor.defaultBreeding,
          defaultStamina: dependencies.constructor.defaultStamina,
          methods: dependencies.methods.address,
          restricted: dependencies.restricted.address
        });
      });

      it('Setup gamification restricted controller', async function () {
        await dependencies.restricted.setGlobalParameters({
          allowed: dependencies.constructor.allowed,
          defaultBreeding: dependencies.constructor.defaultBreeding,
          defaultStamina: dependencies.constructor.defaultStamina,
          methods: dependencies.methods.address,
          restricted: dependencies.restricted.address
        });
      });

      it('Setup gamification controller', async function () {
        await dependencies.gamification.setGlobalParameters({
          allowed: dependencies.constructor.allowed,
          defaultBreeding: dependencies.constructor.defaultBreeding,
          defaultStamina: dependencies.constructor.defaultStamina,
          methods: dependencies.methods.address,
          restricted: dependencies.restricted.address
        });
      });

    });
    
  });
}