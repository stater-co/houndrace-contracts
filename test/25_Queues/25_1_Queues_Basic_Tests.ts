import { QueuesBasicTests } from "../../common/dto/test/queuesBasicTests";
import { safeCloseQueue } from "../../plugins/test/closeQueue";
import { safeEditQueue } from "../../plugins/test/editQueue";
import { safeJoinQueue } from "../../plugins/test/joinQueue";
import { safeMintQueue } from "../../plugins/test/mintQueue";
import { safeUnenqueue } from "../../plugins/test/unenqueue";
import { Hound, Hounds } from "../../typechain-types/Hounds";
import { Queue, Queues } from "../../typechain-types/Queues";
const { ethers } = require('hardhat');


async function basicTest(
  dependencies: QueuesBasicTests
): Promise<void> {
  describe('Queues Basic Tests', async function () {

    let createdQueueId: string | number;

    it("Create queue", async function () {
      let [, , , , , signer] = await ethers.getSigners();
      createdQueueId = await safeMintQueue({
        contract: dependencies.contract,
        queue: dependencies.queue,
        signer: signer
      });
    });

    it("Enqueue", async function() {
      const [sig] = await ethers.getSigners();
      await safeJoinQueue({
        contract: dependencies.contract as Queues,
        queueId: createdQueueId,
        houndId: dependencies.houndIdToEnqueue,
        houndsContract: dependencies.houndsContract as Hounds,
        sender: sig,
        arenasContract: dependencies.arenasContract,
        erc20: dependencies.erc20,
        paymentsContract: dependencies.payments
      });
    });

    it("Enqueue 10x", async function() {
      let totalHounds: number = Number(await dependencies.houndsContract.id());
      let totalEnqueues: number = 0;
      const [sig] = await ethers.getSigners();
      for ( let j = 1 ; j < totalHounds ; ++j && totalEnqueues < 10 ) {
        let hound: Hound.StructStructOutput = await dependencies.houndsContract.hound(j);
        if ( Number(hound.profile.runningOn) === 0 ) {
          await safeJoinQueue({
            contract: dependencies.contract as Queues,
            queueId: createdQueueId,
            houndId: j,
            houndsContract: dependencies.houndsContract as Hounds,
            sender: sig,
            arenasContract: dependencies.arenasContract,
            erc20: dependencies.erc20,
            paymentsContract: dependencies.payments
          });
          ++totalEnqueues;
        }
      }
    });

    it("Unenqueue", async function() {
      let queue: Queue.StructStructOutput = await dependencies.contract.queue(createdQueueId);
      if ( queue.core.participants.length === 0 ) {
        const [sig] = await ethers.getSigners();
        await safeJoinQueue({
          contract: dependencies.contract as Queues,
          queueId: createdQueueId,
          houndId: 1,
          houndsContract: dependencies.houndsContract as Hounds,
          sender: sig,
          arenasContract: dependencies.arenasContract,
          erc20: dependencies.erc20,
          paymentsContract: dependencies.payments
        });
        queue = await dependencies.contract.queue(createdQueueId);
      }
      await safeUnenqueue({
        contract: dependencies.contract,
        queueId: createdQueueId,
        houndId: Number(queue.core.participants[0])
      });
    });

    it("Edit queue", async function() {
      let [, , , , , , signer] = await ethers.getSigners();
      await safeEditQueue({
        contract: dependencies.contract,
        queueId: createdQueueId,
        queue: dependencies.queue,
        signer: signer
      });
    });

    it("Close queue", async function() {
      let [, , , , , , , signer] = await ethers.getSigners();
      await safeCloseQueue({
        contract: dependencies.contract,
        queueId: createdQueueId,
        signer: signer
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