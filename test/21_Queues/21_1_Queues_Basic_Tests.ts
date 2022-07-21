import { QueuesBasicTests } from "../../common/dto/test/queuesBasicTests";
import { safeJoinQueue } from "../../plugins/test/joinQueue";
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

    it("Enqueue", async function() {
      await safeJoinQueue({
        contract: dependencies.contract,
        queueId: createdQueueId,
        houndId: dependencies.houndIdToEnqueue,
        houndsContract: dependencies.houndsContract,
        entryFee: (await dependencies.contract.queue(createdQueueId)).entryFee
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