import { GamificationSystemController } from '../common/dto/test/gamificationSystemController.dto';
import { expecting } from '../plugins/expecting';
const { ethers } = require('hardhat');

export async function set(
  dependencies: GamificationSystemController
): Promise<void> {
  return new Promise((resolve, ) => {
    describe('Setting up the gamification controllers', () => {

      it('Setup gamification methods controller', async function () {
        const before = await dependencies.methods.control();
        const [ , , , sig4 ] = await ethers.getSigners();
        await dependencies.methods.connect(sig4).setGlobalParameters({
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
        const [ , , , sig4 ] = await ethers.getSigners();
        await dependencies.restricted.connect(sig4).setGlobalParameters({
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
        const [ , , , sig4 ] = await ethers.getSigners();
        await dependencies.gamification.connect(sig4).setGlobalParameters({
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