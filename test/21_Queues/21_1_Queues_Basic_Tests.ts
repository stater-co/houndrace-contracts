import { QueuesBasicTests } from "../../common/dto/test/queuesBasicTests";
import { safeCloseQueue } from "../../plugins/test/closeQueue";
import { safeEditQueue } from "../../plugins/test/editQueue";
import { safeJoinQueue } from "../../plugins/test/joinQueue";
import { safeMintQueue } from "../../plugins/test/mintQueue";
import { safeUnenqueue } from "../../plugins/test/unenqueue";


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

    it("Unenqueue", async function() {
      await safeUnenqueue({
        contract: dependencies.contract,
        queueId: createdQueueId,
        houndId: dependencies.houndIdToEnqueue
      });
    });

    it("Edit queue", async function() {
      await safeEditQueue({
        contract: dependencies.contract,
        queueId: createdQueueId,
        queue: dependencies.queue
      });
    });

    it("Close queue", async function() {
      await safeCloseQueue({
        contract: dependencies.contract,
        queueId: createdQueueId
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