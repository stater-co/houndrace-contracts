/*
const { expect } = require("chai");
const { ethers } = require("hardhat");
const address0 = "0x0000000000000000000000000000000000000000";
const maleBoilerplateGene = [ 1, 1, 8, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 9, 8, 2, 1, 4, 2, 9, 8, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 7, 7, 0, 2, 9, 1, 0, 9, 1, 1, 2, 1, 9, 0, 2, 2, 8, 5, 2, 8, 1, 9 ];
const femaleBoilerplateGene = [ 2, 2, 6, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 3, 1, 9, 1, 4, 2, 4, 7, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 1, 7, 2, 7, 9, 1, 0, 9, 1, 1, 2, 1, 0, 7, 2, 2, 8, 5, 8, 7, 1, 3 ];
const defaultHound = [
  [ 0, 0, 0, 0],
  [ address0, 10000000, 10000000, 100, 1, 100 ],
  [ 0, 0, address0, 100000, 1655990582, 10000000000, 1655990582, true ],
  [ 1, 1, 0, 0, maleBoilerplateGene ],
  "",
  "",
  0,
  false
];
const defaultQueue = [
  "Test queue",
  address0,
  [],
  1, // terrain
  5000000000,
  0,
  0,
  0,
  [],
  10,
  14400,
  false
];
let currentDiscountId = 1;
let payments;
let shopRestricted;
let shopMethods;
let shop;
let randomness;
let arenas;
let arenasRestricted;
let arenasMethods;
let genetics;
let incubator;
let incubatorMethods;
let hounds;
let houndsModifier;
let houndsRestricted;
let houndsMinter;
let generator;
let generatorMethods;
let generatorZerocost;
let races;
let racesRestricted;
let racesMethods;
let queues;
let queuesMethods;
let queuesRestricted;

function deploymentMessage(name,address) {
  console.log(name + " deployed at: " + address);
}

async function createDiscount(erc721Address, ids, dateStart, dateStop, discount, tokenType, usable) {
  const shopOwner = await shop.owner();
  const [owner] = await ethers.getSigners();
  if ( owner.address === shopOwner ) {
    await shop.createDiscount([
      erc721Address ? erc721Address : testErc721.address,
      ids ? ids : [currentDiscountId - 1],
      dateStart ? dateStart : 0,
      dateStop ? dateStop : 0,
      discount ? discount : 5,
      tokenType ? tokenType : 0,
      usable ? usable : false
    ]);
  }
}

async function editDiscount(id, erc721Address, ids, dateStart, dateStop, discount, tokenType, usable) {
  const shopOwner = await shop.owner();
  const [owner] = await ethers.getSigners();
  if ( owner.address === shopOwner ) {
    await shop.editDiscount([
      erc721Address ? erc721Address : testErc721.address,
      ids ? ids : [1],
      dateStart ? dateStart : 0,
      dateStop ? dateStop : 0,
      discount ? discount : 5,
      tokenType ? tokenType : 0,
      usable ? usable : false
    ],id);
  }
}

async function mintERC1155Batch(receiver, ids, amounts, data) {
  const [owner] = await ethers.getSigners();
  await testErc1155.mintBatch(
    receiver ? receiver : owner.address,
    ids ? ids : Array.from(Array(100).keys()),
    amounts ? amounts : Array(100).fill(5000),
    data ? data : '0x00'
  );
}

async function mintERC721(receiver, id, data) {
  const [owner] = await ethers.getSigners();
  await testErc721.safeMint(
    receiver ? receiver : owner.address,
    id ? id : currentDiscountId,
    data ? data : '0x00'
  );
  if ( !id )
    ++currentDiscountId;
}

async function joinQueueAutomatically(queueId, totalJoins) {
  let participating = 0;
  let houndsId = Number(await hounds.id()) - 1;
  while ( participating < totalJoins && houndsId >= 1 ) {
    let queue = await queues.queue(queueId);
    let houndToEnqueue = await hounds.hound(houndsId);
    if ( Number(houndToEnqueue.queueId) === 0 ) {
      await queues.enqueue(queueId,houndsId,{ value : queue.entryFee });
      queue = await queues.queue(queueId);
      if ( Number(queue.participants.length) === Number(queue.totalParticipants) - 1 ) {
        for ( let i = 0 , l = queue.participants.length ; i < l ; ++i ) {
          let hound = await hounds.hound(queue.participants[i]);
          expect(hound.queueId === 0);
        }
      } else {
        let hound = await hounds.hound(houndsId);
        expect(hound.queueId === queueId);
      }
      let beforeQueue = queue;
      let afterQueue = await queues.queue(queueId);
      expect(beforeQueue.participants.length < afterQueue.participants.length);
      ++participating;
    }
    --houndsId;
  }
}



describe("Setting up the Payments System", function () {

  it("Mint erc721 nfts", async function () {
    for ( let i = 0 ; i < 100 ; ++i ) {
      await mintERC721(undefined,undefined,'0x00');
    }
  });

  it("Mint erc1155 nfts", async function () {
    await mintERC1155Batch(undefined,Array.from(Array(100).keys()),Array(100).fill(5000),'0x00');
  });

  it("Add discounts", async function () {

    // Add erc721 nfts
    for ( let i = 1 ; i < 100 ; ++i ) {
      await createDiscount(testErc721.address,[i],0,0,5,0,false);
    }

    // Add erc1155 nfts
    for ( let i = 1 ; i < 100 ; ++i ) {
      await createDiscount(testErc1155.address,[i],0,0,10,1,false);
    }

    // Edit erc721 nfts
    for ( let i = 1 ; i < 100 ; ++i ) {
      await editDiscount(i,
        testErc721.address,
        [i],
        0,
        0,
        5,
        0,
        false
      );
    }

    // Edit erc1155 nfts
    for ( let i = 1 ; i < 100 ; ++i ) {
      await editDiscount(i,
        testErc1155.address,
        [i],
        0,
        0,
        10,
        1,
        false
      );
    }

  });

});



describe("Races", function () {

  let houndsStamina = [];

  it("Hounds stamina check x1", async function () {

    for ( let i = 1 ; i <= 10 ; ++i ) {
      let hound = await hounds.hound(i);
      expect(hound !== undefined, "Hound getter problem");
      houndsStamina[i] = hound[1][2];
    }

  });

  it("Join queue x10", async function () {
    await joinQueueAutomatically(1,10);
  });

  /*
  it("Join queue x200", async function () {
    await joinQueueAutomatically(1,200);
  });

  it("Join queue x300", async function () {
    await joinQueueAutomatically(1,300);
  });

  it("Hounds stamina check x2", async function () {
    let queue = await queues.queues(1);
    for ( let i = 1 ; i <= queue.totalParticipants ; ++i ) {
      let hound = await hounds.hound(i);
      expect(hound !== undefined, "Hound getter problem");
      expect(houndsStamina[i] < hound[1][2], "Hound stamina not consumed");
      houndsStamina[i] = hound[1][2];
    }
  });

  it("Edit queue and then close it", async function () {
    await queues.editQueue(2,defaultQueue);
    await queues.closeQueue(2);
  });

  it("Unenqueue", async function () {
    let queue = await queues.queue(1);
    if ( queue.participants.length > 0 ) {
      let houndToUnenqueue = Number(queue.participants[0]);
      await queues.unenqueue(1,houndToUnenqueue);
    }
  });

  if("Hounds Queue ID verification", async function() {
    let id = Number(await hounds.id());
    let runningHounds = 0;
    for ( let i = 1 ; i < id ; ++i ) {
      let hound = await hounds.hound(i);
      if ( Number(hound.queueId) > 0 ) {
        ++runningHounds;
      }
    }
  })

  it("UploadRace", async function () {
    let id = Number(await races.id());
    let queue = await queues.queue(1);
    for ( let i = 1 ; i < id ; ++i ) {
      let race = await races.race(i);
      if ( Number(race.arena) === 0 ) {
        await races.uploadRace(9999,[
          "Race #1",
          address0,
          [],
          queue.arena,
          queue.entryFee,
          12,
          [
            [],
            [],
            [],
            [[]],
            [[]],
            []
          ],
          i,
          "0x3333"
        ], {
          value: Number(queue.entryFee) * Number(queue.totalParticipants)
        });
      }
    }
  });

});
*/