import { RacesSystemController } from '../common/dto/test/racesSystemController.dto';
import { globalParams } from '../common/params';
import { expecting } from '../plugins/expecting';
const { ethers } = require('hardhat');


export async function set(
  dependencies: RacesSystemController
): Promise<void> {
  describe('Setting up the Races Contracts Controller', async function () {

    it("Setup races restricted controller", async function () {
      let [, , , , , , , , signer] = await ethers.getSigners();
      const before = await dependencies.racesRestricted.control();
      await dependencies.racesRestricted.setGlobalParameters({
        ...dependencies.constructor,
        operators: [dependencies.queuesAddress, signer.address, dependencies.races.address],
        targets: [['0x65913d77', '0x5bd4fd05'], ['0x30e54438'], ['0x9ad2e2b0', '0x5bd4fd05']]
      });
      const after = await dependencies.racesRestricted.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Races restricted global params setter bugged");
    });

    it("Setup races methods controller", async function () {
      let [, , , , , , , , signer] = await ethers.getSigners();
      const before = await dependencies.racesMethods.control();
      await dependencies.racesMethods.setGlobalParameters({
        ...dependencies.constructor,
        operators: [dependencies.queuesAddress, signer.address, dependencies.races.address],
        targets: [['0x65913d77', '0x5bd4fd05'], ['0x30e54438'], ['0x9ad2e2b0', '0x5bd4fd05']]
      });
      const after = await dependencies.racesMethods.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Races methods global params setter bugged");
    });

    it("Setup races controller", async function () {
      let [, , , , , , , , signer] = await ethers.getSigners();
      const before = await dependencies.races.control();
      await dependencies.races.setGlobalParameters({
        ...dependencies.constructor,
        operators: [dependencies.queuesAddress, signer.address, dependencies.races.address],
        targets: [['0x65913d77', '0x5bd4fd05'], ['0x797a6764'], ['0x9ad2e2b0', '0x5bd4fd05']]
      });
      const after = await dependencies.races.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Races global params setter bugged");
    });

  });
}