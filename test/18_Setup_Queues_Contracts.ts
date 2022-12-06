import { QueuesSystemController } from '../common/dto/test/queuesSystemController.dto';
import { globalParams } from '../common/params';
import { expecting } from '../plugins/expecting';
const { ethers } = require('hardhat');


export async function set(
  dependencies: QueuesSystemController
): Promise<void> {
  describe('Setting up the Queues Contracts Controller', async function () {

    it("Setup queues restricted contract controller", async function () {
      const before = await dependencies.queuesRestricted.control();
      let [, , , , , signer, signer2, signer3] = await ethers.getSigners();
      await dependencies.queuesRestricted.setGlobalParameters({
        ...dependencies.constructor,
        operators: [signer.address, signer2.address, signer3.address],
        targets: [['0x90c14066'], ['0xe7c4d374'], ['0x19e3e592', '0x857b29e5']]
      });
      const after = await dependencies.queuesRestricted.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Queues Restricted global params setter bugged");
    });

    it("Setup queues methods contract controller", async function () {
      const before = await dependencies.queuesMethods.control();
      let [, , , , , signer, signer2, signer3] = await ethers.getSigners();
      await dependencies.queuesMethods.setGlobalParameters({
        ...dependencies.constructor,
        operators: [signer.address, signer2.address, signer3.address],
        targets: [['0x90c14066'], ['0xe7c4d374'], ['0x19e3e592', '0x857b29e5']]
      });
      const after = await dependencies.queuesMethods.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Queues Methods global params setter bugged");
    });

    it("Setup queues zerocost contract controller", async function () {
      const before = await dependencies.queuesZerocost.control();
      let [, , , , , signer, signer2, signer3] = await ethers.getSigners();
      await dependencies.queuesZerocost.setGlobalParameters({
        ...dependencies.constructor,
        operators: [signer.address, signer2.address, signer3.address],
        targets: [['0x90c14066'], ['0xe7c4d374'], ['0x19e3e592', '0x857b29e5']]
      });
      const after = await dependencies.queuesZerocost.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Queues Methods global params setter bugged");
    });

    it("Setup queues contract controller", async function () {
      const before = await dependencies.queues.control();
      let [, , , , , signer, signer2, signer3] = await ethers.getSigners();
      await dependencies.queues.setGlobalParameters({
        ...dependencies.constructor,
        operators: [signer.address, signer2.address, signer3.address],
        targets: [['0x90c14066'], ['0xe7c4d374', '0x857b29e5'], ['0x19e3e592']]
      });
      const after = await dependencies.queues.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Queues Methods global params setter bugged");
    });

  });
}