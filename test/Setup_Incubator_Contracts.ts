import { IncubatorSystemController } from '../common/dto/test/incubatorSystemController.dto';
import { expecting } from '../plugins/expecting';
const { ethers } = require('hardhat');


export async function set(
  dependencies: IncubatorSystemController
): Promise<void> {
  describe('Setting up the Incubator Contracts Controller', async function () {

    it("Setup incubator methods controller", async function () {
      const before = await dependencies.incubatorMethods.control();
      const [ , , , , , , , , , , , , , , , , , sig18 ] = await ethers.getSigners();
      await dependencies.incubatorMethods.connect(sig18).setGlobalParameters(dependencies.constructor);
      const after = await dependencies.incubatorMethods.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Incubator Methods global params setter bugged");
    });

    it("Setup incubator controller", async function () {
      const before = await dependencies.incubator.control();
      const [ , , , , , , , , , , , , , , , , , sig18 ] = await ethers.getSigners();
      await dependencies.incubator.connect(sig18).setGlobalParameters(dependencies.constructor);
      const after = await dependencies.incubator.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Incubator global params setter bugged");
    });

  });
}