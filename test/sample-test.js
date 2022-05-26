const { expect } = require("chai");
const { ethers } = require("hardhat");
const address0 = "0x0000000000000000000000000000000000000000";
const maleBoilerplateGene = [ 1, 1, 8, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 9, 8, 2, 1, 4, 2, 9, 8, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 7, 7, 0, 2, 9, 1, 0, 9, 1, 1, 2, 1, 9, 0, 2, 2, 8, 5, 2, 8, 1, 9 ];
const femaleBoilerplateGene = [ 2, 2, 6, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 3, 1, 9, 1, 4, 2, 4, 7, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 1, 7, 2, 7, 9, 1, 0, 9, 1, 1, 2, 1, 0, 7, 2, 2, 8, 5, 8, 7, 1, 3 ];
const defaultHound = [
  [ 0, 0, 0, 0],
  [ 10000000, 10000000, 100, 1, 100 ],
  [ 0, 100000, 1000, true ],
  [ 1, 1, 0, 0, maleBoilerplateGene ],
  "",
  "",
  false,
  false
];
const defaultQueue = [
  "Test queue",
  "0x0000000000000000000000000000000000000000",
  [],
  1, // terrain
  5000000000,
  0,
  0,
  1,
  10,
  false
];
let currentDiscountId = 1;
let payments;
let paymentsMethods;
let shopRestricted;
let shopMethods;
let shop;
let randomness;
let arenas;
let arenasRestricted;
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

// @DIIMIIM: Get smart contract instance
async function getContractInstance(name,constructor,props) {
  let Contract;
  if ( props ) {
    Contract = await hre.ethers.getContractFactory(name,props);
  } else {
    Contract = await hre.ethers.getContractFactory(name);
  }
   
  let contract = constructor ? await Contract.deploy(constructor) : await Contract.deploy();
  await contract.deployed();
  deploymentMessage(name,contract.address);
  return contract;
}

// @DIIMIIM: Admin mint hound, no safety checks
async function mintHoundByAdmin(hound,isFemale) {
  let houndToMint;
  if ( hound ) {
    houndToMint = hound;
  } else {
    houndToMint = defaultHound;
    if ( isFemale ) {
      houndToMint[3][4][1] = 2;
    }
  }
  const [owner] = await ethers.getSigners();
  const contractOwner = await hounds.owner();
  expect(owner.address === contractOwner, "You're not the owner of the hounds data contract");
  await hounds.initializeHound(0,houndToMint);
}

async function safelyMintHoundByAdmin(hound,isFemale) {
  const houndIdBefore = await hounds.id();
  await mintHoundByAdmin(hound,isFemale);
  const houndIdAfter = await hounds.id();
  expect(houndIdBefore !== houndIdAfter, "Hound creation problem");
  await safelyUpdateHoundBreeding(houndIdBefore);
}

async function safelyUpdateHoundStamina(houndId) {
  let houndIdBefore;
  let houndToWorkWith;
  if ( houndId ) {
    houndToWorkWith = houndId;
  } else {
    houndIdBefore = await hounds.id();
    houndToWorkWith = Number(houndIdBefore)-1;
  }
  const houndBefore = await hounds.hound(houndToWorkWith);
  await hounds.updateHoundStamina(houndToWorkWith);
  const houndAfter = await hounds.hound(houndToWorkWith);
  expect(JSON.stringify(houndBefore) === JSON.stringify(houndAfter), "Hound stamin update on creation problem");
}

async function safelyUpdateHoundBreeding(houndId) {
  let houndIdBefore;
  let houndToWorkWith;
  if ( houndId ) {
    houndToWorkWith = houndId;
  } else {
    houndIdBefore = await hounds.id();
    houndToWorkWith = Number(houndIdBefore)-1;
  }
  const houndBefore = await hounds.hound(houndToWorkWith);
  await hounds.updateHoundBreeding(houndToWorkWith);
  const houndAfter = await hounds.hound(houndToWorkWith);
  expect(JSON.stringify(houndBefore) === JSON.stringify(houndAfter), "Hound stamin update on creation problem");
}

async function checkHoundStructure(houndId) {
  const hound = await hounds.hound(houndId ? houndId : 1);

  // Check the hound statistics field
  expect(hound[0] && hound[0].length === defaultHound[0].length, "Not all hound statistics are received from contract");

  // Check the hound stamina field
  expect(hound[1] && hound[1].length === defaultHound[1].length, "Not all hound stamina data has been received from contract");

  // Check the hound breeding field
  expect(hound[2] && hound[2].length === defaultHound[2].length, "Not all hound breeding data has been received from contract");

  // Check the hound identity field
  expect(hound[3] && hound[3].length === defaultHound[3].length, "Not all hound identity data has been received from contract");

  // Check the hound total fields
  expect(hound.length === defaultHound.length, "Hound has been partially received from contract");

  const houndGene = hound[3][4];
  expect(houndGene.length === defaultHound[3][4].length, "Hound getter mechanism problems");
}

async function findMaleAndFemaleAvailableForBreed() {
  const houndIdBefore = await hounds.id();

  let maleId , femaleId ;
  for ( let i = 1 , l = houndIdBefore ; i < l ; ++i ) {

    const hound = await hounds.hound(i);
    const houndGene = hound[3][4];

    expect(houndGene.length > 0, "Getting hounds gender problem");

    if ( houndGene[1] === 1 && !maleId && hound[2][3] && hound[2][0]*1000 <= new Date().getTime() && !hound[7] ) {
      maleId = i;
    }

    if ( houndGene[1] === 2 && !femaleId && hound[2][3] && hound[2][0]*1000 <= new Date().getTime() && !hound[7] ) {
      femaleId = i;
    }

  }

  expect(maleId && femaleId, "No partners found for breeding");
  return { maleId, femaleId };
}

async function breed2Hounds() {
  const houndIdBefore = await hounds.id();
  const availableHounds = await findMaleAndFemaleAvailableForBreed();

  const maleId = availableHounds.maleId;
  const femaleId = availableHounds.femaleId; 

  if ( maleId && femaleId ) {

    const houndMaleBefore = await hounds.hound(maleId);
    const houndFemaleBefore = await hounds.hound(femaleId);

    const [owner] = await ethers.getSigners();
    const ownerOfMale = await hounds.ownerOf(maleId);
    const ownerOfFemale = await hounds.ownerOf(femaleId);

    let hound1 = maleId , hound2 = femaleId;
    if ( ownerOfFemale !== owner && ownerOfMale === owner ) {
      hound1 = maleId;
      hound2 = femaleId;
    } else if ( ownerOfMale !== owner && ownerOfFemale === owner ) {
      hound1 = femaleId;
      hound2 = maleId;
    }

    const totalToPay = await hounds.getBreedCost(hound1,hound2);
    let houndToFillUp = await hounds.id();
    await hounds.breedHounds(hound1, hound2, { value : totalToPay });
    await hounds.initializeHound(houndToFillUp,defaultHound);

    const houndMaleAfter = await hounds.hound(maleId);
    const houndFemaleAfter = await hounds.hound(femaleId);
    expect(JSON.stringify(houndMaleBefore) !== JSON.stringify(houndMaleAfter), "Hound male breeding status should be changed after breeding");
    expect(JSON.stringify(houndFemaleBefore) !== JSON.stringify(houndFemaleAfter), "Hound female breeding status should be changed after breeding");
    
  }

  const houndIdAfter = await hounds.id();
  expect(houndIdBefore !== houndIdAfter, "Owned hound breeding problem");

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
  let queue = await queues.queues(queueId);
  let participating = 0;
  let houndsId = Number(await hounds.id()) - 1;
  let joins = totalJoins ? totalJoins : queue.totalParticipants;
  while ( participating < joins && houndsId >= 1 ) {
    let houndToEnqueue = await hounds.hound(houndsId);
    if ( !houndToEnqueue.running ) {
      await queues.enqueue(queueId,houndsId,{ value : queue.entryFee });
      ++participating;
      --houndsId;
    }
  }
}


describe("Setting up the used libraries", function () {
  
  it("Deploy the Converters", async function () {
    convertersLibrary = await getContractInstance("Converters");
  });

  it("Deploy the Sortings", async function () {
    sortingsLibrary = await getContractInstance("Sortings");
  });

});



describe("Setting up the Payments System", function () {
  
  it("Deploy the HoundRace Potions contract", async function () {
    const HoundracePotions = await hre.ethers.getContractFactory("HoundracePotions");
    houndracePotions = await HoundracePotions.deploy("Ogars","OG");
    await houndracePotions.deployed();
    deploymentMessage("HoundracePotions",houndracePotions.address);
  });

  it("Deploy the payments contract", async function () {
    paymentsMethods = await getContractInstance("PaymentsMethods",[address0,[]]);
    payments = await getContractInstance("Payments",[paymentsMethods.address,[]]);
  });

  it("Deploy the erc721 test contract", async function () {
    const TestingErc721 = await hre.ethers.getContractFactory("TestingErc721");
    testErc721 = await TestingErc721.deploy("test","t");
    await testErc721.deployed();
    deploymentMessage("TestingErc721",testErc721.address);
  });

  it("Mint erc721 nfts", async function () {
    for ( let i = 0 ; i < 100 ; ++i ) {
      await mintERC721(undefined,undefined,'0x00');
    }
  });

  it("Deploy the erc1155 test contract", async function () {
    testErc1155 = await getContractInstance("TestingErc1155","test");
  });

  it("Mint erc1155 nfts", async function () {
    await mintERC1155Batch(undefined,Array.from(Array(100).keys()),Array(100).fill(5000),'0x00');
  });

  it("Deploy the Payments methods contract", async function () {
    shopRestricted = await getContractInstance("ShopRestricted",[address0,address0,address0]);
    shopMethods = await getContractInstance("ShopMethods",[address0,address0,address0]);
    shop = await getContractInstance("Shop",[shopMethods.address,shopRestricted.address]);
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


describe("Setting up the Houndrace contracts", function () {
  
  it("Deploy the randomness contracts", async function () {
    randomness = await getContractInstance("Randomness",[]);
  });

  it("Deploy the arenas contracts", async function () {
    arenasRestricted = await getContractInstance("ArenasRestricted", ["HoundRace Arenas", "HRA", address0, address0]);
    arenas = await getContractInstance("Arenas",["HoundRace Arenas", "HRA", arenasRestricted.address]);
  });

  it("Genetics methods", async function () {
    genetics = await getContractInstance("Genetics",[
      randomness.address,
      arenas.address,
      maleBoilerplateGene,
      femaleBoilerplateGene,
      60,
      40,
      [2,6,10,14,18,22,26,30,34,38,42,46,50],
      [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
    ]);
  });

  it("Deploy the incubator contracts", async function () {
    incubatorMethods = await getContractInstance("IncubatorMethods",[
      address0,
      address0,
      address0,
      "0x67657452"
    ]);
    incubator = await getContractInstance("Incubator",[
      incubatorMethods.address,
      randomness.address,
      genetics.address,
      "0x67657452"
    ]);
  });

  it("Deploy the hounds contract", async function () {
    const [owner,otherOwner] = await ethers.getSigners();

    houndsRestricted = await getContractInstance("HoundsRestricted",[
      "HoundRace",
      "HR",
      [owner.address],
      [
        address0,
        otherOwner.address,
        address0,
        address0,
        address0,
        address0,
        address0,
        address0
      ],[
        "0xB1A2BC2EC50000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000"
      ]
    ]);

    houndsModifier = await getContractInstance("HoundsModifier",[
      "HoundRace",
      "HR",
      [owner.address],
      [
        address0,
        otherOwner.address,
        address0,
        address0,
        address0,
        address0,
        address0,
        address0
      ],[
        "0xB1A2BC2EC50000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000"
      ]
    ]);

    houndsMinter = await getContractInstance("HoundsMinter",[
      "HoundRace",
      "HR",
      [owner.address],
      [
        address0,
        otherOwner.address,
        address0,
        address0,
        address0,
        address0,
        address0,
        address0
      ],[
        "0xB1A2BC2EC50000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000"
      ]
    ]);

    hounds = await getContractInstance("Hounds",[
      "HoundRace",
      "HR",
      [owner.address],
      [
        incubator.address,
        otherOwner.address,
        payments.address,
        houndsRestricted.address,
        houndsMinter.address,
        address0,
        houndsModifier.address,
        shop.address
      ],[
        "0xB1A2BC2EC50000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000"
      ]
    ]);
  });

  it("Deploy the race contracts", async function () {
    const [,otherOwner] = await ethers.getSigners();
    racesRestricted = await getContractInstance("RacesRestricted",[
      address0,
      address0,
      address0,
      address0,
      address0,
      address0,
      address0,
      address0,
      address0,
      500000000,
      true
    ]);
    racesMethods = await getContractInstance("RacesMethods",[
      address0,
      address0,
      address0,
      address0,
      address0,
      address0,
      address0,
      address0,
      address0,
      500000000,
      true
    ]);
    races = await getContractInstance("Races",[
      randomness.address,
      arenas.address,
      hounds.address,
      racesMethods.address,
      address0,
      payments.address,
      racesRestricted.address,
      address0,
      otherOwner.address,
      500000000,
      true
    ]);
  });

  it("Deploy the queues contracts", async function () {
    queuesRestricted = await getContractInstance("QueuesRestricted",[
      address0,
      address0,
      address0,
      address0,
      address0,
      address0
    ]);
    queuesMethods = await getContractInstance("QueuesMethods",[
      address0,
      address0,
      address0,
      address0,
      address0,
      address0
    ]);
    queues = await getContractInstance("Queues",[
      arenas.address,
      hounds.address,
      queuesMethods.address,
      paymentsMethods.address,
      queuesRestricted.address,
      races.address
    ]);
    await queuesRestricted.setGlobalParameters([
      arenas.address,
      hounds.address,
      queuesMethods.address,
      paymentsMethods.address,
      queuesRestricted.address,
      races.address
    ]);
    await queuesMethods.setGlobalParameters([
      arenas.address,
      hounds.address,
      queuesMethods.address,
      paymentsMethods.address,
      queuesRestricted.address,
      races.address
    ]);
  });

  it("Deploy the generator contracts", async function () {

    generatorMethods = await getContractInstance("GeneratorMethods",[
      address0,
      address0,
      address0,
      address0,
      address0,
      address0,
      address0
    ]);

    generatorZerocost = await getContractInstance("GeneratorZerocost",[
      address0,
      address0,
      address0,
      address0,
      address0,
      address0,
      address0
    ],{
      libraries: {
        Sortings: sortingsLibrary.address
      }
    });

    generator = await getContractInstance("Generator",[
      randomness.address,
      arenas.address,
      hounds.address,
      races.address,
      generatorMethods.address,
      payments.address,
      generatorZerocost.address
    ]);

  });

});


describe("Setting up the Houndrace contracts global parameters", function () {

  it("Setting up shop contracts dependencies", async function () {

    await shopRestricted.setGlobalParameters([shopMethods.address,shopRestricted.address]);
  
    await shopMethods.setGlobalParameters([shopMethods.address,shopRestricted.address]);

  });

  it("Setting up arenas contracts dependencies", async function () {

    await arenasRestricted.setGlobalParameters(["HoundRace Arenas", "HRA", arenasRestricted.address]);

  });

  it("Setting up incubator contracts dependencies", async function () {
    
    await incubatorMethods.setGlobalParameters([
      incubatorMethods.address,
      randomness.address,
      genetics.address,
      "0x67657452"
    ]);

  });

  it("Setting up hounds contracts dependencies", async function () {
    
    const [,otherOwner] = await ethers.getSigners();
  
    await houndsMinter.setGlobalParameters([
      "HoundRace",
      "HR",
      [
        hounds.address,
        houndsRestricted.address,
        houndsMinter.address,
        races.address,
        racesRestricted.address,
        queues.address,
        queuesMethods.address,
        queuesRestricted.address
      ],
      [
        incubator.address,
        otherOwner.address,
        payments.address,
        houndsRestricted.address,
        houndsMinter.address,
        hounds.address,
        houndsModifier.address,
        shop.address
      ],[
        "0xB1A2BC2EC50000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000"
      ]
    ]);
  
    await houndsModifier.setGlobalParameters([
      "HoundRace",
      "HR",
      [
        hounds.address,
        houndsRestricted.address,
        houndsMinter.address,
        races.address,
        racesRestricted.address,
        queues.address,
        queuesMethods.address,
        queuesRestricted.address
      ],
      [
        incubator.address,
        otherOwner.address,
        payments.address,
        houndsRestricted.address,
        houndsMinter.address,
        hounds.address,
        houndsModifier.address,
        shop.address
      ],[
        "0xB1A2BC2EC50000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000"
      ]
    ]);
  
    await houndsRestricted.setGlobalParameters([
      "HoundRace",
      "HR",
      [
        hounds.address,
        houndsRestricted.address,
        houndsMinter.address,
        races.address,
        racesRestricted.address,
        queues.address,
        queuesMethods.address,
        queuesRestricted.address
      ],
      [
        incubator.address,
        otherOwner.address,
        payments.address,
        houndsRestricted.address,
        houndsMinter.address,
        hounds.address,
        houndsModifier.address,
        shop.address
      ],[
        "0xB1A2BC2EC50000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000"
      ]
    ]);

    await hounds.setGlobalParameters([
      "HoundRace",
      "HR",
      [
        hounds.address,
        houndsRestricted.address,
        houndsMinter.address,
        races.address,
        racesRestricted.address,
        queues.address,
        queuesMethods.address,
        queuesRestricted.address
      ],
      [
        incubator.address,
        otherOwner.address,
        payments.address,
        houndsRestricted.address,
        houndsMinter.address,
        hounds.address,
        houndsModifier.address,
        shop.address
      ],[
        "0xB1A2BC2EC50000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000"
      ]
    ]);

  });

  it("Setting up payment contracts dependencies", async function () {
    
    await paymentsMethods.setGlobalParameters([paymentsMethods.address,[hounds.address]]);

    await payments.setGlobalParameters([paymentsMethods.address,[hounds.address]]);

  });
  
  it("Setting up races contracts dependencies", async function () {
    const [,otherOwner] = await ethers.getSigners();

    await racesRestricted.setGlobalParameters([
      randomness.address,
      arenas.address,
      hounds.address,
      racesMethods.address,
      generator.address,
      payments.address,
      racesRestricted.address,
      queues.address,
      otherOwner.address,
      500000000,
      true
    ]);

    await racesMethods.setGlobalParameters([
      randomness.address,
      arenas.address,
      hounds.address,
      racesMethods.address,
      generator.address,
      payments.address,
      racesRestricted.address,
      queues.address,
      otherOwner.address,
      500000000,
      true
    ]);

    await races.setGlobalParameters([
      randomness.address,
      arenas.address,
      hounds.address,
      racesMethods.address,
      generator.address,
      payments.address,
      racesRestricted.address,
      queues.address,
      otherOwner.address,
      500000000,
      true
    ]);

  });

  it("Setting up generator contracts dependencies", async function () {
  
    await generatorMethods.setGlobalParameters([
      randomness.address,
      arenas.address,
      hounds.address,
      races.address,
      generatorMethods.address,
      payments.address,
      generatorZerocost.address
    ]);

    await generatorZerocost.setGlobalParameters([
      randomness.address,
      arenas.address,
      hounds.address,
      races.address,
      generatorMethods.address,
      payments.address,
      generatorZerocost.address
    ]);

  });

});


describe("Genetics methods", function () {

  it("Genetics - wholeArithmeticRecombination", async function () {
    let newGeneticSequence = await genetics.wholeArithmeticRecombination(maleBoilerplateGene,femaleBoilerplateGene);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
  });

  it("Genetics - swapMutation", async function () {
    let newGeneticSequence = await genetics.swapMutation(maleBoilerplateGene,5);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
  });

  it("Genetics - inversionMutation", async function () {
    let newGeneticSequence = await genetics.inversionMutation(maleBoilerplateGene,5);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
  });

  it("Genetics - scrambleMutation", async function () {
    let newGeneticSequence = await genetics.scrambleMutation(maleBoilerplateGene,9);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
  });

  it("Genetics - arithmeticMutation", async function () {
    let newGeneticSequence = await genetics.arithmeticMutation(maleBoilerplateGene,9);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
  });

  it("Genetics - uniformCrossover", async function () {
    let newGeneticSequence = await genetics.uniformCrossover(maleBoilerplateGene,femaleBoilerplateGene,9);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
  });
  
  it("Genetics - mixGenes 100x", async function () {
    for ( let i = 0 ; i < 100 ; ++i ) {
      let newGeneticSequence = await genetics.mixGenes(maleBoilerplateGene,femaleBoilerplateGene,i);
      expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
    }
  });

});


describe("Hounds", function () {
  
  it("Mint", async function () {
    await safelyMintHoundByAdmin(undefined,false);
  });

  it("Update hound stamina after creation", async function() {
    await safelyUpdateHoundStamina();
  });

  it("Update hound breeding status after creation", async function() {
    await safelyUpdateHoundBreeding();
  });

  it("Mint again", async function () {
    await safelyMintHoundByAdmin(undefined,false);
  });

  it("Mint 10x hounds", async function () {
    for ( let i = 0 ; i < 10 ; ++i ) {
      await safelyMintHoundByAdmin(undefined,i % 2 === 1);
    }
  });

  it("Mint 40x hounds", async function () {
    for ( let i = 0 ; i < 40 ; ++i ) {
      await safelyMintHoundByAdmin(undefined,i % 2 === 1);
    }
  });

  it("Receiving hound data", async function () {
    await checkHoundStructure();
  });

  it("Breed", async function () {
    await breed2Hounds();
  });

  it("Breed again", async function () {
    await breed2Hounds();
  });

});


describe("Breed with other hounds", function () {

  it("Mint your hound", async function () {
    await safelyMintHoundByAdmin(undefined,false);
  });

  it("Mint another hound", async function () {
    await safelyMintHoundByAdmin(undefined,true);
  });

  it("Breed again", async function () {
    await breed2Hounds();
  });

  it("Make hound available to breed", async function () {
    const houndId = await hounds.id();
    await hounds.putHoundForBreed(houndId-2,0,true);
  });

});


describe("Races", function () {

  it("Create terrain", async function () {
    const [owner] = await ethers.getSigners();
    let createTerrain = await arenas.createArena([
      owner.address,
      "token_url",
      0,
      1,
      1000,
      3
    ]);

    expect(createTerrain !== undefined, "Create terrain problem");
  });

  it("Create queue", async function () {

    await queues.createQueues([
      defaultQueue
    ]);

    await queues.createQueues([
      defaultQueue
    ]);

    await queues.createQueues([
      defaultQueue
    ]);

    let queueId = await races.id();

    expect(Number(queueId) === 2, "Queue has not been created");

  });

  let houndsStamina = [];

  it("Hounds stamina check x1", async function () {

    for ( let i = 1 ; i <= 10 ; ++i ) {
      let hound = await hounds.hound(i);
      expect(hound !== undefined, "Hound getter problem");
      houndsStamina[i] = hound[1][2];
    }

  });

  it("Join queue x10", async function () {
    await joinQueueAutomatically(1);
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

  it("Join queue x20", async function () {
    await joinQueueAutomatically(1);
  });

  it("Hounds stamina check x3", async function () {
    let queue = await queues.queues(1);
    for ( let i = 1 ; i <= queue.totalParticipants ; ++i ) {
      let hound = await hounds.hound(i);
      expect(hound !== undefined, "Hound getter problem");
      expect(houndsStamina[i] < hound[1][2], "Hound stamina not consumed");
      houndsStamina[i] = hound[1][2];
    }
  });

  it("Join queue x30", async function () {
    await joinQueueAutomatically(1);
  });

  it("Join queue and then edit it and then close it", async function () {
    await joinQueueAutomatically(2,3);
    await queues.editQueue(1,defaultQueue);
    await queues.closeQueue(1);
  });

  it("Hounds stamina check x4", async function () {
    let queue = await queues.queues(1);
    for ( let i = 1 ; i <= queue.totalParticipants ; ++i ) {
      let hound = await hounds.hound(i);
      expect(hound !== undefined, "Hound getter problem");
      expect(houndsStamina[i] < hound[1][2], "Hound stamina not consumed");
      houndsStamina[i] = hound[1][2];
    }
  });

});