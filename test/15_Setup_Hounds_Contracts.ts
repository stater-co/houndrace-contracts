import { HoundsSystemController } from '../common/dto/test/houndsSystemController.dto';
import { expecting } from '../plugins/expecting';
const { ethers } = require('hardhat');


export async function set(
  dependencies: HoundsSystemController
): Promise<void> {
  describe('Setting up the Hounds Contracts Controller', async function () {

    it("Setup hounds minter controller", async function () {
    
      const [sig1] = await ethers.getSigners();
      const before = await dependencies.houndsMinter.control();
      await dependencies.houndsMinter.setGlobalParameters({
        ...dependencies.constructor,
        boilerplate: {
          ...dependencies.constructor.boilerplate,
          alphadune: sig1.address
        }
      });
      const after = await dependencies.houndsMinter.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Hounds minter global params setter bugged");
    });

    it("Setup hounds modifier controller", async function () {
    
      const [sig1] = await ethers.getSigners();
      const before = await dependencies.houndsModifier.control();
      await dependencies.houndsModifier.setGlobalParameters({
        ...dependencies.constructor,
        boilerplate: {
          ...dependencies.constructor.boilerplate,
          alphadune: sig1.address
        }
      });
      const after = await dependencies.houndsModifier.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Hounds modifier global params setter bugged");

    });

    it("Setup hounds restricted controller", async function () {
    
      const [sig1] = await ethers.getSigners();

      const before = await dependencies.houndsRestricted.control();
      await dependencies.houndsRestricted.setGlobalParameters({
        ...dependencies.constructor,
        boilerplate: {
          ...dependencies.constructor.boilerplate,
          alphadune: sig1.address
        }
      });
      const after = await dependencies.houndsRestricted.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Hounds restricted global params setter bugged");

    });

    it("Setup hounds controller", async function () {
    
      const [sig1] = await ethers.getSigners();

      const before = await dependencies.hounds.control();
      await dependencies.hounds.setGlobalParameters({
        ...dependencies.constructor,
        boilerplate: {
          ...dependencies.constructor.boilerplate,
          alphadune: sig1.address
        }
      });
      const after = await dependencies.hounds.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Hounds global params setter bugged");

    });

  });
}