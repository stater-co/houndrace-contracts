import { RacesSystemController } from '../common/dto/test/racesSystemController.dto';
import { expecting } from '../plugins/expecting';
const { ethers } = require('hardhat');


export async function set(
  dependencies: RacesSystemController
): Promise<void> {
  describe('Setting up the Races Contracts Controller', async function () {

    it("Setup races restricted controller", async function () {
    
      const [sig1] = await ethers.getSigners();
      const before = await dependencies.racesRestricted.control();
      await dependencies.racesRestricted.setGlobalParameters(dependencies.constructor);
      const after = await dependencies.racesRestricted.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Races restricted global params setter bugged");

    });

    it("Setup races methods controller", async function () {
    
      const [sig1] = await ethers.getSigners();
      const before = await dependencies.racesMethods.control();
      await dependencies.racesMethods.setGlobalParameters(dependencies.constructor);
      const after = await dependencies.racesMethods.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Races methods global params setter bugged");

    });

    it("Setup races controller", async function () {
    
      const [sig1] = await ethers.getSigners();
      const before = await dependencies.races.control();
      await dependencies.races.setGlobalParameters(dependencies.constructor);
      const after = await dependencies.races.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Races global params setter bugged");

    });

  });
}