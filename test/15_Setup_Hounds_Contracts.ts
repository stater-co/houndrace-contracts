import { HoundsSystemController } from '../common/dto/test/houndsSystemController.dto';
const { ethers } = require('hardhat');


export async function set(
  dependencies: HoundsSystemController
): Promise<void> {
  describe('Setting up the Hounds Contracts Controller', async function () {

    it("Setup hounds minter controller", async function () {
    
      const [sig1] = await ethers.getSigners();

      await dependencies.houndsMinter.setGlobalParameters({
        ...dependencies.constructor,
        boilerplate: {
          ...dependencies.constructor.boilerplate,
          staterApi: sig1.address
        }
      });
    
    });

    it("Setup hounds modifier controller", async function () {
    
      const [sig1] = await ethers.getSigners();

      await dependencies.houndsModifier.setGlobalParameters({
        ...dependencies.constructor,
        boilerplate: {
          ...dependencies.constructor.boilerplate,
          staterApi: sig1.address
        }
      });

    });

    it("Setup hounds restricted controller", async function () {
    
      const [sig1] = await ethers.getSigners();

      await dependencies.houndsRestricted.setGlobalParameters({
        ...dependencies.constructor,
        boilerplate: {
          ...dependencies.constructor.boilerplate,
          staterApi: sig1.address
        }
      });

    });

    it("Setup hounds controller", async function () {
    
      const [sig1] = await ethers.getSigners();

      await dependencies.hounds.setGlobalParameters({
        ...dependencies.constructor,
        boilerplate: {
          ...dependencies.constructor.boilerplate,
          staterApi: sig1.address
        }
      });

    });

  });
}