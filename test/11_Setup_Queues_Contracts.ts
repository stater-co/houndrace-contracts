import { QueuesSystemController } from '../common/dto/test/queuesSystemController.dto';


export async function set(
  dependencies: QueuesSystemController
): Promise<void> {
  describe('Setting up the Queues Contracts Controller', async function () {

    it("Setup queues restricted contract controller", async function () {
      await dependencies.queuesRestricted.setGlobalParameters(dependencies.constructor);
    });

    it("Setup queues methods contract controller", async function () {
      await dependencies.queuesMethods.setGlobalParameters(dependencies.constructor);
    });

  });
}