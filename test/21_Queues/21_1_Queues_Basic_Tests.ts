import { QueuesBasicTests } from "../../common/dto/test/queuesBasicTests";
import { safeMintQueue } from "../../plugins/test/mintQueue";


async function basicTest(
  dependencies: QueuesBasicTests
): Promise<void> {
  describe('Queues Basic Tests', async function () {

    let createdQueueId: string | number;

    it("Create queue", async function () {
      createdQueueId = await safeMintQueue({
        contract: dependencies.contract,
        queue: dependencies.queue
      });
    });

  });

}

export interface TestInterface {
    basicTest: Function;
}

export const test: TestInterface = {
    basicTest: basicTest
};