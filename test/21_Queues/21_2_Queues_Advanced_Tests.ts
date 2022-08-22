import { expect } from "chai";
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
        position: 0,
        signer: sig1.address
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
        houndsContract: dependencies.houndsContract as Hounds,
        sender: sig1
      });
    });

    it("Mint 20x males", async function () {
      let [sig1] = await ethers.getSigners();
      for ( let i = 0 ; i < 20 ; ++i ) {
        let houndToMint: Hound.StructStruct = globalParams.defaultHound;
        houndToMint.identity.geneticSequence[1] = 1;
        createdHoundId = await safeMintHound({
          contract: dependencies.houndsContract,
          hound: houndToMint as Hound.StructStructOutput,
          owner: sig1.address,
          position: 0,
          signer: sig1.address
        });
      }
    });

    it("Mint 20x males for a regular user", async function () {
      let [sig1, sig2] = await ethers.getSigners();
      for ( let i = 0 ; i < 20 ; ++i ) {
        let houndToMint: Hound.StructStruct = globalParams.defaultHound;
        houndToMint.identity.geneticSequence[1] = 1;
        createdHoundId = await safeMintHound({
          contract: dependencies.houndsContract,
          hound: houndToMint as Hound.StructStructOutput,
          owner: sig2.address,
          position: 0,
          signer: sig1.address
        });
      }
    });

    it("Enqueue 10x", async function() {
      let totalHounds: number = Number(await dependencies.houndsContract.id());
      let totalEnqueues: number = 0;
      const [sig1] = await ethers.getSigners();
      const entryFee = await (await dependencies.queuesContract.queue(createdQueueId)).entryFee;

      for ( let j = 1 ; j < totalHounds && totalEnqueues < 10 ; ++j ) {
        let hound: Hound.StructStructOutput = await dependencies.houndsContract.hound(j);
        if ( Number(hound.profile.queueId) === 0 ) {    
    
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
            houndsContract: dependencies.houndsContract as Hounds,
            sender: sig1
          });
          ++totalEnqueues;
        }
      }
    });

    it("Enqueue 10x from another account", async function() {
      let totalHounds: number = Number(await dependencies.houndsContract.id());
      let totalEnqueues: number = 0;
      const [sig1, sig2] = await ethers.getSigners();
      const entryFee = await (await dependencies.queuesContract.queue(createdQueueId)).entryFee;
      const arenaOwner: string = await dependencies.arenasContract.arenaOwner(createdArenaId);

      for ( let j = 1 ; j < totalHounds && totalEnqueues < 10 ; ++j ) {
        let hound: Hound.StructStructOutput = await dependencies.houndsContract.hound(j);
        let houndOwner: string = await dependencies.houndsContract.houndOwner(j);
        if ( Number(hound.profile.queueId) === 0 && houndOwner === sig2.address) {
    
          await dependencies.erc20.mint(sig1.address, entryFee);

          await dependencies.erc20.transfer(sig2.address, entryFee);
    
          const paymentsAddress: [string, string, string, string, string, string] & {
            arenas: string;
            hounds: string;
            methods: string;
            payments: string;
            restricted: string;
            races: string;
        } = await dependencies.queuesContract.control();
    
          await dependencies.erc20.connect(sig2)
          .approve(paymentsAddress.payments, String(entryFee));

          const balanceBefore: string = String(await dependencies.erc20.balanceOf(sig2.address));

          await safeJoinQueue({
            contract: dependencies.queuesContract as Queues,
            queueId: createdQueueId,
            houndId: j,
            houndsContract: dependencies.houndsContract as Hounds,
            sender: sig2
          });

          const balanceAfter: string = String(await dependencies.erc20.balanceOf(sig2.address));
          expect(balanceBefore !== balanceAfter);
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
        position: 0,
        signer: sig1.address
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
        houndsContract: dependencies.houndsContract as Hounds,
        sender: sig1
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