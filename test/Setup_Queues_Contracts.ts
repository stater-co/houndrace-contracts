import { QueuesSystemController } from '../common/dto/test/queuesSystemController.dto';
import { expecting } from '../plugins/expecting';
const { ethers } = require('hardhat');


export async function set(
  dependencies: QueuesSystemController
): Promise<void> {
  describe('Setting up the Queues Contracts Controller', async function () {

    it("Setup queues restricted contract controller", async function () {
      const before = await dependencies.queuesRestricted.control();
      const [ , , , , , , , , , , , , , sig14 ] = await ethers.getSigners();
      await dependencies.queuesRestricted.connect(sig14).setGlobalParameters(dependencies.constructor);
      const after = await dependencies.queuesRestricted.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Queues Restricted global params setter bugged");
    });

    it("Setup queues methods contract controller", async function () {
      const before = await dependencies.queuesMethods.control();
      const [ , , , , , , , , , , , , , sig14 ] = await ethers.getSigners();
      await dependencies.queuesMethods.connect(sig14).setGlobalParameters(dependencies.constructor);
      const after = await dependencies.queuesMethods.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Queues Methods global params setter bugged");
    });

    it("Setup queues zerocost contract controller", async function () {
      const before = await dependencies.queuesZerocost.control();
      const [ , , , , , , , , , , , , , sig14 ] = await ethers.getSigners();
      console.log("Set queues zerocost params: ", dependencies.constructor);
      await dependencies.queuesZerocost.connect(sig14).setGlobalParameters(dependencies.constructor);
      const after = await dependencies.queuesZerocost.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Queues Methods global params setter bugged");
    });

  });
}