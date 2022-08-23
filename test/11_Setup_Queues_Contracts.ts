import { QueuesSystemController } from '../common/dto/test/queuesSystemController.dto';
import { expecting } from '../plugins/expecting';


export async function set(
  dependencies: QueuesSystemController
): Promise<void> {
  describe('Setting up the Queues Contracts Controller', async function () {

    it("Setup queues restricted contract controller", async function () {
      const before = await dependencies.queuesRestricted.control();
      await dependencies.queuesRestricted.setGlobalParameters(dependencies.constructor);
      const after = await dependencies.queuesRestricted.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Queues Restricted global params setter bugged");
    });

    it("Setup queues methods contract controller", async function () {
      const before = await dependencies.queuesMethods.control();
      await dependencies.queuesMethods.setGlobalParameters(dependencies.constructor);
      const after = await dependencies.queuesMethods.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Queues Methods global params setter bugged");
    });

  });
}