const { expect } = require("chai");
const { ethers } = require("hardhat");

const address0 = "0x0000000000000000000000000000000000000000";
const maleBoilerplateGene = [ 1, 1, 8, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 9, 8, 2, 1, 4, 2, 9, 8, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 7, 7, 0, 2, 9, 1, 0, 9, 1, 1, 2, 1, 9, 0, 2, 2, 8, 5, 2, 8, 1, 9 ];
const femaleBoilerplateGene = [ 2, 2, 6, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 3, 1, 9, 1, 4, 2, 4, 7, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 1, 7, 2, 7, 9, 1, 0, 9, 1, 1, 2, 1, 0, 7, 2, 2, 8, 5, 8, 7, 1, 3 ];
const defaultHound = [
  [ 0, 0, 0, 0],
  [ 10000000, 10000000, 100, 1, 100 ],
  [ 0, 100000, 1000, true ],
  [ 0, 0, 0, maleBoilerplateGene ],
  "",
  "",
  false,
  false
];
let currentDiscountId = 1;
let paymentsMain;
let paymentsMethods;
let shopZerocost;
let shopRestricted;
let shopMethods;
let shopMain;
let randomnessZerocost;
let randomnessMain;
let arenasRestricted;
let arenasMain;
let geneticsZerocost;
let geneticsMain;
let incubatorMethods;
let incubatorMain;
let houndMinter;
let houndModifier;
let houndRestricted;
let houndMain;
let racesMethods;
let racesRestricted;
let racesMain;
let generatorMethods;
let generatorZerocost;
let generatorMain;
let houndracePotions;


// @DIIMIIM: Get smart contract instance
async function getContractInstance(name,constructor) {
  const Contract = await hre.ethers.getContractFactory(name);
  let contract = constructor ? await Contract.deploy(constructor) : await Contract.deploy();
  await contract.deployed();
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
      houndToMint[3][3][1] = 2;
    }
  }
  const [owner] = await ethers.getSigners();
  const contractOwner = await houndMain.owner();
  expect(owner.address === contractOwner, "You're not the owner of the hounds data contract");
  //console.log("initializing hound: ", 0, JSON.stringify(houndToMint));
  await houndMain.initializeHound(0,houndToMint);
}

async function safelyMintHoundByAdmin(hound,isFemale) {
  const houndIdBefore = await houndMain.id();
  //console.log("Hound id before: " + houndIdBefore);
  await mintHoundByAdmin(hound,isFemale);
  const houndIdAfter = await houndMain.id();
  expect(houndIdBefore !== houndIdAfter, "Hound creation problem");
  await safelyUpdateHoundBreeding(houndIdBefore);
}

async function safelyUpdateHoundStamina(houndId) {
  let houndIdBefore;
  let houndToWorkWith;
  if ( houndId ) {
    houndToWorkWith = houndId;
  } else {
    houndIdBefore = await houndMain.id();
    houndToWorkWith = Number(houndIdBefore)-1;
  }
  const houndBefore = await houndMain.hound(houndToWorkWith);
  await houndMain.updateStamina(houndToWorkWith);
  const houndAfter = await houndMain.hound(houndToWorkWith);
  expect(JSON.stringify(houndBefore) === JSON.stringify(houndAfter), "Hound stamin update on creation problem");
}

async function safelyUpdateHoundBreeding(houndId) {
  let houndIdBefore;
  let houndToWorkWith;
  if ( houndId ) {
    houndToWorkWith = houndId;
  } else {
    houndIdBefore = await houndMain.id();
    houndToWorkWith = Number(houndIdBefore)-1;
  }
  const houndBefore = await houndMain.hound(houndToWorkWith);
  await houndMain.updateHoundBreeding(houndToWorkWith);
  const houndAfter = await houndMain.hound(houndToWorkWith);
  expect(JSON.stringify(houndBefore) === JSON.stringify(houndAfter), "Hound stamin update on creation problem");
}

async function checkHoundStructure(houndId) {
  const hound = await houndMain.hound(houndId ? houndId : 1);

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

  const houndGene = hound[3][3];
  expect(houndGene.length === defaultHound[3][3].length, "Hound getter mechanism problems");
}

async function findMaleAndFemaleAvailableForBreed() {
  const houndIdBefore = await houndMain.id();

  //console.log("Hound id to parse: " + houndIdBefore);
  let maleId , femaleId ;
  for ( let i = 1 , l = houndIdBefore ; i < l ; ++i ) {

    const hound = await houndMain.hound(i);
    const houndGene = hound[3][3];

    //console.log(JSON.stringify(hound));

    //console.log("Gene: " + i + " >> " + houndGene + " >> " + hound[2][3] + " >> " + hound[2][0]*1000 + " >> " + new Date().getTime());

    expect(houndGene.length > 0, "Getting hounds gender problem");

    if ( houndGene[1] === 1 && !maleId && hound[2][3] && hound[2][0]*1000 <= new Date().getTime() ) {
      maleId = i;
    }

    if ( houndGene[1] === 2 && !femaleId && hound[2][3] && hound[2][0]*1000 <= new Date().getTime() ) {
      femaleId = i;
    }

  }

  expect(maleId && femaleId, "No partners found for breeding");
  return { maleId, femaleId };
}

async function breed2Hounds() {
  const houndIdBefore = await houndMain.id();
  const availableHounds = await findMaleAndFemaleAvailableForBreed();
  //console.log("Available hounds >> " + JSON.stringify(findMaleAndFemaleAvailableForBreed));
  const maleId = availableHounds.maleId;
  const femaleId = availableHounds.femaleId; 

  //console.log("Male: " + maleId + " , Female:" + femaleId);
  if ( maleId && femaleId ) {

    const houndMaleBefore = await houndMain.hound(maleId);
    const houndFemaleBefore = await houndMain.hound(femaleId);

    const [owner] = await ethers.getSigners();
    const ownerOfMale = await houndMain.ownerOf(maleId);
    const ownerOfFemale = await houndMain.ownerOf(femaleId);

    let hound1 = maleId , hound2 = femaleId;
    if ( ownerOfFemale !== owner && ownerOfMale === owner ) {
      hound1 = maleId;
      hound2 = femaleId;
    } else if ( ownerOfMale !== owner && ownerOfFemale === owner ) {
      hound1 = femaleId;
      hound2 = maleId;
    }
    
    //console.log("We breed hounds here !!!!!");

    const foreignHound = await houndMain.hound(hound2);
    ////console.log("Breed fee: " + Number(foreignHound[2][1]));
    const control = await houndMain.control();
    ////console.log(Number(control[3][0]) + " + " + Number(control[3][1]));
    ////console.log(Number(foreignHound[2][1]) + Number(control[3][0]) + Number(control[3][1]));

    const totalToPay = await houndMain.getBreedCost(hound1,hound2);
    //console.log("Total to pay >> " + totalToPay);

    //console.log("Breed hounds: " + hound1 + " , " + hound2);
    await houndMain.breedHounds(hound1, hound2, { value : totalToPay });
    const houndMaleAfter = await houndMain.hound(maleId);
    const houndFemaleAfter = await houndMain.hound(femaleId);
    expect(JSON.stringify(houndMaleBefore) !== JSON.stringify(houndMaleAfter), "Hound male breeding status should be changed after breeding");
    expect(JSON.stringify(houndFemaleBefore) !== JSON.stringify(houndFemaleAfter), "Hound female breeding status should be changed after breeding");
    //console.log("Breed hounds after: " + hound1 + " , " + hound2);
    const houndIdAfter = await houndMain.id();
    expect(houndIdBefore !== houndIdAfter, "Owned hound breeding problem");

  }

}

async function createDiscount(erc721Address, ids, dateStart, dateStop, discount, tokenType, usable) {
  const shopOwner = await shopMain.owner();
  const [owner] = await ethers.getSigners();
  if ( owner.address === shopOwner ) {
    await shopMain.createDiscount([
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
  const shopOwner = await shopMain.owner();
  const [owner] = await ethers.getSigners();
  if ( owner.address === shopOwner ) {
    await shopMain.editDiscount([
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
    houndracePotions = await HoundracePotions.deploy(["Ogars","OG"]);
    await houndracePotions.deployed();
  });

  it("Deploy the payments contract", async function () {
    paymentsMethods = await getContractInstance("PaymentsMethods",[address0,[]]);
    //console.log("Payments methods: " + paymentsMethods.address);
    paymentsMain = await getContractInstance("Payments",[paymentsMethods.address,[]]);
    //console.log("Payments: " + paymentsMain.address);
    await paymentsMethods.setGlobalParameters([paymentsMethods.address,[]]);
  });

  it("Deploy the erc721 test contract", async function () {
    const TestingErc721 = await hre.ethers.getContractFactory("TestingErc721");
    testErc721 = await TestingErc721.deploy("test","t");
    await testErc721.deployed();
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

  it("Deploy the Shop contract", async function () {
    shopZerocost = await getContractInstance("ShopZerocost",[address0,address0,address0]);
    //console.log("Shop zerocost: " + shopZerocost.address);
    shopRestricted = await getContractInstance("ShopRestricted",[address0,address0,address0]);
    //console.log("Shop restricted: " + shopRestricted.address);
    shopMethods = await getContractInstance("ShopMethods",[address0,address0,address0]);
    //console.log("Shop methods: " + shopMethods.address);
    shopMain = await getContractInstance("Shop",[shopMethods.address,shopZerocost.address,shopRestricted.address]);
    //console.log("Shop: " + shopMain.address);
    await shopZerocost.setGlobalParameters([shopMethods.address,shopZerocost.address,shopRestricted.address]);
    await shopRestricted.setGlobalParameters([shopMethods.address,shopZerocost.address,shopRestricted.address]);
    await shopMethods.setGlobalParameters([shopMethods.address,shopZerocost.address,shopRestricted.address]);
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
    randomnessZerocost = await getContractInstance("RandomnessZerocost",[address0]);
    //console.log("Zerocost contract deployed at: " + randomnessZerocost.address);
    randomnessMain = await getContractInstance("Randomness",[randomnessZerocost.address]);
    //console.log("Randomness main deployed at: " + randomnessMain.address);
    await randomnessZerocost.setGlobalParameters([randomnessZerocost.address]);
  });

  it("Deploy the arenas contracts", async function () {
    arenasRestricted = await getContractInstance("ArenasRestricted",[address0]);
    //console.log("Restricted contract deployed at: " + arenasRestricted.address);
    arenasMain = await getContractInstance("Arenas",[arenasRestricted.address]);
    //console.log("Arenas contract deployed at: " + arenasMain.address);
    await arenasRestricted.setGlobalParameters([arenasRestricted.address]);
  });

  it("Genetics methods", async function () {
    geneticsZerocost = await getContractInstance("GeneticsZerocost",[
      randomnessMain.address,
      address0,
      maleBoilerplateGene,
      femaleBoilerplateGene,
      60,
      40,
      [2,6,10,14,18,22,26,30,34,38,42,46,50],
      [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
    ]);
    //console.log("Zerocost contract deployed at: " + geneticsZerocost.address);
    geneticsMain = await getContractInstance("Genetics",[
      randomnessMain.address,
      geneticsZerocost.address,
      maleBoilerplateGene,
      femaleBoilerplateGene,
      60,
      40,
      [2,6,10,14,18,22,26,30,34,38,42,46,50],
      [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
    ]);
    //console.log("Genetics contract deployed at: " + geneticsMain.address);
    await geneticsZerocost.setGlobalParameters([
      randomnessMain.address,
      geneticsZerocost.address,
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
      randomnessMain.address,
      geneticsMain.address,
      "0x67657452"
    ]);
    //console.log("Methods contract deployed at: " + incubatorMethods.address);
    incubatorMain = await getContractInstance("Incubator",[
      incubatorMethods.address,
      randomnessMain.address,
      geneticsMain.address,
      "0x67657452"
    ]);
    //console.log("Incubator contract deployed at: " + incubatorMain.address);
    await incubatorMethods.setGlobalParameters([
      incubatorMethods.address,
      randomnessMain.address,
      geneticsMain.address,
      "0x67657452"
    ]);
  });

  it("Deploy the hounds contract", async function () {
    const [owner,otherOwner] = await ethers.getSigners();
    houndRestricted = await getContractInstance("HoundsRestricted",[
      "HoundRace",
      "HR",
      [owner.address,otherOwner.address],
      [
        incubatorMain.address,
        otherOwner.address,
        paymentsMain.address,
        address0,
        address0,
        address0,
        shopMain.address,
        houndracePotions.address
      ],[
        "0xB1A2BC2EC50000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000"
      ]
    ]);
    //console.log("Restricted contract deployed at: " + houndRestricted.address);
    houndModifier = await getContractInstance("HoundsModifier",[
      "HoundRace",
      "HR",
      [owner.address,otherOwner.address],
      [
        incubatorMain.address,
        otherOwner.address,
        paymentsMain.address,
        address0,
        address0,
        address0,
        shopMain.address,
        houndracePotions.address
      ],[
        "0xB1A2BC2EC50000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000"
      ]
    ]);
    //console.log("Modifier contract deployed at: " + houndModifier.address);
    houndMinter = await getContractInstance("HoundsMinter",[
      "HoundRace",
      "HR",
      [owner.address,otherOwner.address],
      [
        incubatorMain.address,
        otherOwner.address,
        paymentsMain.address,
        address0,
        address0,
        address0,
        shopMain.address,
        houndracePotions.address
      ],[
        "0xB1A2BC2EC50000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000"
      ]
    ]);
    //console.log("Minter contract deployed at: " + houndMinter.address);
    houndMain = await getContractInstance("Hounds",[
      "HoundRace",
      "HR",
      [owner.address,houndMinter.address],
      [
        incubatorMain.address,
        otherOwner.address,
        paymentsMain.address,
        houndRestricted.address,
        houndMinter.address,
        houndModifier.address,
        shopMain.address,
        houndracePotions.address
      ],[
        "0xB1A2BC2EC50000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000"
      ]
    ]);
    //console.log("Hounds contract deployed at: " + houndMain.address);

    await paymentsMain.setGlobalParameters([paymentsMethods.address,[houndMain.address,houndMinter.address,houndModifier.address,houndRestricted.address]]);
    //console.log("Successfully global parameters set");

    await houndModifier.setGlobalParameters([
      "HoundRace",
      "HR",
      [houndMain.address],
      [
        incubatorMain.address,
        otherOwner.address,
        paymentsMain.address,
        houndMain.address,
        houndMain.address,
        houndMain.address,
        shopMain.address,
        houndracePotions.address
      ],[
        "0xB1A2BC2EC50000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000"
      ]
    ]);

    await houndMinter.setGlobalParameters([
      "HoundRace",
      "HR",
      [],
      [
        incubatorMain.address,
        otherOwner.address,
        paymentsMain.address,
        houndMain.address,
        houndMain.address,
        houndMain.address,
        shopMain.address,
        houndracePotions.address
      ],[
        "0xB1A2BC2EC50000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000"
      ]
    ]);

    await houndRestricted.setGlobalParameters([
      "HoundRace",
      "HR",
      [],
      [
        incubatorMain.address,
        otherOwner.address,
        paymentsMain.address,
        houndMain.address,
        houndMain.address,
        houndMain.address,
        shopMain.address,
        houndracePotions.address
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
    racesRestricted = await getContractInstance("RacesRestricted",[
      randomnessMain.address,
      arenasMain.address,
      houndMain.address,
      address0,
      address0,
      paymentsMain.address,
      address0,
      500000000,
      true
    ]);
    //console.log("Restricted contract deployed at: " + racesRestricted.address);
    racesMethods = await getContractInstance("RacesMethods",[
      randomnessMain.address,
      arenasMain.address,
      houndMain.address,
      address0,
      address0,
      paymentsMain.address,
      address0,
      500000000,
      true
    ]);
    //console.log("Methods contract deployed at: " + racesMethods.address);
    racesMain = await getContractInstance("Races",[
      randomnessMain.address,
      arenasMain.address,
      houndMain.address,
      racesMethods.address,
      address0,
      paymentsMain.address,
      racesRestricted.address,
      500000000,
      true
    ]);
    //console.log("Races contract deployed at: " + racesMain.address);
  });

  it("Deploy the generator contracts", async function () {
    let Contract = await hre.ethers.getContractFactory("GeneratorZerocost", {
      libraries: {
        Sortings: sortingsLibrary.address
      }
    });
    let contract = await Contract.deploy([
      randomnessMain.address,
      arenasMain.address,
      houndMain.address,
      racesMain.address,
      address0,
      paymentsMain.address,
      address0
    ]);
    await contract.deployed();
    generatorZerocost = contract;
    //console.log("Zerocost contract deployed at: " + generatorZerocost.address);

    Contract = await hre.ethers.getContractFactory("GeneratorMethods", {
      libraries: {
        Converters: convertersLibrary.address
      }
    });
    contract = await Contract.deploy([
      randomnessMain.address,
      arenasMain.address,
      houndMain.address,
      racesMain.address,
      address0,
      paymentsMain.address,
      address0
    ]);
    await contract.deployed();
    generatorMethods = contract;
    //console.log("Methods contract deployed at: " + generatorMethods.address);

    generatorMain = await getContractInstance("Generator",[
      randomnessMain.address,
      arenasMain.address,
      houndMain.address,
      racesMain.address,
      generatorMethods.address,
      paymentsMain.address,
      generatorZerocost.address
    ]);
    //console.log("Generator contract deployed at: " + generatorMain.address);

    await generatorZerocost.setGlobalParameters([
      randomnessMain.address,
      arenasMain.address,
      houndMain.address,
      racesMain.address,
      generatorMethods.address,
      paymentsMain.address,
      generatorZerocost.address
    ]);

    await generatorMethods.setGlobalParameters([
      randomnessMain.address,
      arenasMain.address,
      houndMain.address,
      racesMain.address,
      generatorMethods.address,
      paymentsMain.address,
      generatorZerocost.address
    ]);

    await racesMain.setGlobalParameters([
      randomnessMain.address,
      arenasMain.address,
      houndMain.address,
      racesMethods.address,
      generatorMain.address,
      paymentsMain.address,
      racesRestricted.address,
      500000000,
      true
    ]);

    await racesRestricted.setGlobalParameters([
      randomnessMain.address,
      arenasMain.address,
      houndMain.address,
      racesMethods.address,
      generatorMain.address,
      paymentsMain.address,
      racesRestricted.address,
      500000000,
      true
    ]);

    await racesMethods.setGlobalParameters([
      randomnessMain.address,
      arenasMain.address,
      houndMain.address,
      racesMethods.address,
      generatorMain.address,
      paymentsMain.address,
      racesRestricted.address,
      500000000,
      true
    ]);

  });

});



describe("Genetics methods", function () {

  it("Genetics - wholeArithmeticRecombination", async function () {
    let newGeneticSequence = await geneticsMain.wholeArithmeticRecombination(maleBoilerplateGene,femaleBoilerplateGene);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
  });

  it("Genetics - swapMutation", async function () {
    let newGeneticSequence = await geneticsMain.swapMutation(maleBoilerplateGene,5);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
  });

  it("Genetics - inversionMutation", async function () {
    let newGeneticSequence = await geneticsMain.inversionMutation(maleBoilerplateGene,5);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
  });

  it("Genetics - scrambleMutation", async function () {
    let newGeneticSequence = await geneticsMain.scrambleMutation(maleBoilerplateGene,9);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
  });

  it("Genetics - arithmeticMutation", async function () {
    let newGeneticSequence = await geneticsMain.arithmeticMutation(maleBoilerplateGene,9);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
  });

  it("Genetics - uniformCrossover", async function () {
    let newGeneticSequence = await geneticsMain.uniformCrossover(maleBoilerplateGene,femaleBoilerplateGene,9);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
  });
  
  it("Genetics - mixGenes 100x", async function () {
    for ( let i = 0 ; i < 100 ; ++i ) {
      let newGeneticSequence = await geneticsMain.mixGenes(maleBoilerplateGene,femaleBoilerplateGene,i);
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

  let ownedHound, otherHound;

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
    const houndId = await houndMain.id();
    await houndMain.putHoundForBreed(houndId-2,0,true);
  });

});


describe("Races", function () {

  it("Create terrain", async function () {
    const [owner] = await ethers.getSigners();
    let createTerrain = await arenasMain.createArena([
      owner.address,
      0,
      1,
      1000,
      3
    ]);

    expect(createTerrain !== undefined, "Create terrain problem");
  });

  it("Create queue", async function () {

    await racesMain.createQueues([
      [
        "test",
        "0x0000000000000000000000000000000000000000",
        [],
        1, // terrain
        5000000000,
        0,
        0,
        1,
        10
      ]
    ]);

    await racesMain.createQueues([
      [
        "test",
        "0x0000000000000000000000000000000000000000",
        [],
        1, // terrain
        3000000000,
        0,
        0,
        1,
        10
      ]
    ]);

    await racesMain.createQueues([
      [
        "test",
        "0x0000000000000000000000000000000000000000",
        [],
        1, // terrain
        8000000000,
        0,
        0,
        1,
        10
      ]
    ]);

    let queueId = await racesMain.id();

    //////console.log("Queue id >> " + queueId);

    expect(Number(queueId) === 2, "Queue has not been created");

  });

  let houndsStamina = [];

  it("Hounds stamina check x1", async function () {

    for ( let i = 1 ; i <= 10 ; ++i ) {
      let hound = await houndMain.hound(i);
      expect(hound !== undefined, "Hound getter problem");
      houndsStamina[i] = hound[1][2];
    }

  });

  it("Join queue x10", async function () {
    let queue = await racesMain.queues(1);
    for ( let i = 1 ; i <= queue[8] ; ++i ) {
      await racesMain.enqueue(1,i,{ value : queue[2] });
    }
  });

  it("Hounds stamina check x2", async function () {
    let queue = await racesMain.queues(1);
    for ( let i = 1 ; i <= queue[8] ; ++i ) {
      let hound = await houndMain.hound(i);
      expect(hound !== undefined, "Hound getter problem");
      expect(houndsStamina[i] < hound[1][2], "Hound stamina not consumed");
      houndsStamina[i] = hound[1][2];
    }
  });

  it("Join queue x20", async function () {
    let queue = await racesMain.queues(1);
    for ( let i = 1 ; i <= queue[8] ; ++i ) {
      await racesMain.enqueue(1,i,{ value : queue[2] });
    }
  });

  it("Hounds stamina check x3", async function () {
    let queue = await racesMain.queues(1);
    for ( let i = 1 ; i <= queue[8] ; ++i ) {
      let hound = await houndMain.hound(i);
      expect(hound !== undefined, "Hound getter problem");
      ////console.log("Stamina: " + hound[1][2]);
      expect(houndsStamina[i] < hound[1][2], "Hound stamina not consumed");
      houndsStamina[i] = hound[1][2];
    }
  });

  it("Join queue x30", async function () {
    let queue = await racesMain.queues(1);
    for ( let i = 1 ; i <= queue[8] ; ++i ) {
      await racesMain.enqueue(1,i,{ value : queue[2] });
    }
  });

  it("Hounds stamina check x4", async function () {
    let queue = await racesMain.queues(1);
    for ( let i = 1 ; i <= queue[8] ; ++i ) {
      let hound = await houndMain.hound(i);
      expect(hound !== undefined, "Hound getter problem");
      expect(houndsStamina[i] < hound[1][2], "Hound stamina not consumed");
      houndsStamina[i] = hound[1][2];
    }
  });

});