import { QueuesBasicTests } from "../../common/dto/test/queuesBasicTests";
import { safeCloseQueue } from "../../plugins/test/closeQueue";
import { safeEditQueue } from "../../plugins/test/editQueue";
import { safeJoinQueue } from "../../plugins/test/joinQueue";
import { safeMintQueue } from "../../plugins/test/mintQueue";
import { safeUnenqueue } from "../../plugins/test/unenqueue";
import { Hound } from "../../typechain-types/Hounds";
import { Queue } from "../../typechain-types/Queues";


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

    it("Enqueue 10x", async function() {
      let totalHounds: number = Number(await dependencies.houndsContract.id());
      let totalEnqueues: number = 0;
      for ( let j = 1 ; j < totalHounds ; ++j && totalEnqueues < 10 ) {
        let hound: Hound.StructStructOutput = await dependencies.houndsContract.hound(j);
        if ( Number(hound.queueId) === 0 ) {
          await safeJoinQueue({
            contract: dependencies.contract,
            queueId: createdQueueId,
            houndId: j,
            houndsContract: dependencies.houndsContract,
            entryFee: (await dependencies.contract.queue(createdQueueId)).entryFee
          });
          ++totalEnqueues;
        }
      }
    });

    it("Unenqueue", async function() {
      let queue: Queue.StructStructOutput = await dependencies.contract.queue(createdQueueId);
      if ( queue.participants.length === 0 ) {
        await safeJoinQueue({
          contract: dependencies.contract,
          queueId: createdQueueId,
          houndId: 1,
          houndsContract: dependencies.houndsContract,
          entryFee: (await dependencies.contract.queue(createdQueueId)).entryFee
        });
        queue = await dependencies.contract.queue(createdQueueId);
      }
      await safeUnenqueue({
        contract: dependencies.contract,
        queueId: createdQueueId,
        houndId: Number(queue.participants[0])
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