import { QueuesAdvancedTests } from "../../common/dto/test/queuesAdvancedTests";
import { globalParams } from "../../common/params";
import { safeCloseQueue } from "../../plugins/test/closeQueue";
import { safeEditQueue } from "../../plugins/test/editQueue";
import { safeJoinQueue } from "../../plugins/test/joinQueue";
import { safeMintArena } from "../../plugins/test/mintArena";
import { safeMintHound } from "../../plugins/test/mintHound";
import { safeMintQueue } from "../../plugins/test/mintQueue";
import { safeUnenqueue } from "../../plugins/test/unenqueue";
import { Hound, Hounds } from "../../typechain-types/Hounds";
import { Queues } from "../../typechain-types/Queues";
const { ethers } = require('hardhat');


async function advancedTests(
  dependencies: QueuesAdvancedTests
): Promise<void> {
  describe('Queues Advanced Tests', async function () {

    let createdQueueId: string | number;
    let createdArenaId: string | number;
    let createdHoundId: string | number;

    it("Mint", async function () {
      const [sig1] = await ethers.getSigners();
      createdHoundId = await safeMintHound({
        contract: dependencies.houndsContract,
        hound: globalParams.defaultHound,
        owner: sig1.address,
        position: 0
      });
    });

    it("Create arena with custom token", async function () {
      createdArenaId = await safeMintArena({
        contract: dependencies.arenasContract,
        arena: {
          ...dependencies.arena,
          currency: dependencies.erc20.address
        }
      });
    });

    it("Create queue using custom token arena", async function () {
      createdQueueId = await safeMintQueue({
        contract: dependencies.queuesContract,
        queue: {
          ...dependencies.queue,
          arena: createdArenaId,
          cooldown: 0
        }
      });
    });

    it("Enqueue using custom token", async function() {

      const [sig1] = await ethers.getSigners();
      const entryFee = await (await dependencies.queuesContract.queue(createdQueueId)).entryFee;

      await dependencies.erc20.mint(sig1.address, entryFee);

      const paymentsAddress: [string, string, string, string, string, string] & {
        arenas: string;
        hounds: string;
        methods: string;
        payments: string;
        restricted: string;
        races: string;
    } = await dependencies.queuesContract.control();

      await dependencies.erc20
      .approve(paymentsAddress.payments, String(entryFee));

      await safeJoinQueue({
        contract: dependencies.queuesContract as Queues,
        queueId: createdQueueId,
        houndId: createdHoundId,
        houndsContract: dependencies.houndsContract as Hounds
      });
    });

    it("Enqueue 10x", async function() {
      let totalHounds: number = Number(await dependencies.houndsContract.id());
      let totalEnqueues: number = 0;
      for ( let j = 1 ; j < totalHounds ; ++j && totalEnqueues < 10 ) {
        let hound: Hound.StructStructOutput = await dependencies.houndsContract.hound(j);
        if ( Number(hound.queueId) === 0 ) {

          const [sig1] = await ethers.getSigners();
          const entryFee = await (await dependencies.queuesContract.queue(createdQueueId)).entryFee;
    
          await dependencies.erc20.mint(sig1.address, entryFee);
    
          const paymentsAddress: [string, string, string, string, string, string] & {
            arenas: string;
            hounds: string;
            methods: string;
            payments: string;
            restricted: string;
            races: string;
        } = await dependencies.queuesContract.control();
    
          await dependencies.erc20
          .approve(paymentsAddress.payments, String(entryFee));

          await safeJoinQueue({
            contract: dependencies.queuesContract as Queues,
            queueId: createdQueueId,
            houndId: j,
            houndsContract: dependencies.houndsContract as Hounds
          });
          ++totalEnqueues;
        }
      }
    });

    it("Mint", async function () {
      const [sig1] = await ethers.getSigners();
      createdHoundId = await safeMintHound({
        contract: dependencies.houndsContract,
        hound: globalParams.defaultHound,
        owner: sig1.address,
        position: 0
      });
    });

    it("Unenqueue", async function() {
      const [sig1] = await ethers.getSigners();
      const entryFee = await (await dependencies.queuesContract.queue(createdQueueId)).entryFee;

      await dependencies.erc20.mint(sig1.address, entryFee);

      const paymentsAddress: [string, string, string, string, string, string] & {
        arenas: string;
        hounds: string;
        methods: string;
        payments: string;
        restricted: string;
        races: string;
    } = await dependencies.queuesContract.control();

      await dependencies.erc20
      .approve(paymentsAddress.payments, String(entryFee));

      await safeJoinQueue({
        contract: dependencies.queuesContract as Queues,
        queueId: createdQueueId,
        houndId: createdHoundId,
        houndsContract: dependencies.houndsContract as Hounds
      });
      await safeUnenqueue({
        contract: dependencies.queuesContract,
        queueId: createdQueueId,
        houndId: createdHoundId
      });
    });

    it("Edit queue", async function() {
      await safeEditQueue({
        contract: dependencies.queuesContract,
        queueId: createdQueueId,
        queue: dependencies.queue
      });
    });

    it("Close queue", async function() {
      await safeCloseQueue({
        contract: dependencies.queuesContract,
        queueId: createdQueueId
      });
    });

  });

}

export interface TestInterface {
  advancedTests: Function;
}

export const test: TestInterface = {
  advancedTests: advancedTests
};