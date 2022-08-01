import { RacesSystemController } from '../common/dto/test/racesSystemController.dto';
const { ethers } = require('hardhat');


export async function set(
  dependencies: RacesSystemController
): Promise<void> {
  describe('Setting up the Races Contracts Controller', async function () {

    it("Setup races restricted controller", async function () {
    
      const [sig1] = await ethers.getSigners();

      await dependencies.racesRestricted.setGlobalParameters({
        ...dependencies.constructor,
        allowedCallers: [
          ...dependencies.constructor.allowedCallers,
          sig1.address
        ]
      });
    
    });

    it("Setup races methods controller", async function () {
    
      const [sig1] = await ethers.getSigners();

      await dependencies.racesMethods.setGlobalParameters({
        ...dependencies.constructor,
        allowedCallers: [
          ...dependencies.constructor.allowedCallers,
          sig1.address
        ]
      });

    });

    it("Setup races controller", async function () {
    
      const [sig1] = await ethers.getSigners();

      await dependencies.races.setGlobalParameters({
        ...dependencies.constructor,
        allowedCallers: [
          ...dependencies.constructor.allowedCallers,
          sig1.address
        ]
      });

    });

  });
}