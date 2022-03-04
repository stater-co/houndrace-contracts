const { expect } = require("chai");
const { ethers, waffle } = require("hardhat");
const Web3 = require('web3');
const web3 = new Web3(process.env.WSS);

const address0 = "0x0000000000000000000000000000000000000000";
const maleBoilerplateGene = [ 1, 1, 8, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 9, 8, 2, 1, 4, 2, 9, 8, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 7, 7, 0, 2, 9, 1, 0, 9, 1, 1, 2, 1, 9, 0, 2, 2, 8, 5, 2, 8, 1, 9 ];
const femaleBoilerplateGene = [ 2, 2, 6, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 3, 1, 9, 1, 4, 2, 4, 7, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 1, 7, 2, 7, 9, 1, 0, 9, 1, 1, 2, 1, 0, 7, 2, 2, 8, 5, 8, 7, 1, 3 ];
let paperSafetyVRFMethods, paperSafetyVRFData, geneticsData, geneticsMethods, 
terrainsContractMethods, terrainsContractData, paymentsData, paymentsMethods, convertersLibrary, sortingsLibrary, 
commonIncubatorMethods, commonIncubatorData, houndsMethods, houndsData, racesMethods, racesData, 
raceGeneratorData, raceGeneratorMethods, houndracePotions, shopData, shopMethods, testErc721, testErc1155;
const defaultHound = [
  [ 0, 0, 0, 0],
  [ 10000000, 10000000, 100, 1, 100 ],
  [ 1000, 100000, 1000, false ],
  [ 0, 0, 0, maleBoilerplateGene ],
  "",
  "",
  false,
  false
];
let currentDiscountId = 1;

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
  const contractOwner = await houndsData.owner();
  expect(owner.address === contractOwner, "You're not the owner of the hounds data contract");
  await houndsData.adminCreateHound(houndToMint);
}

async function safelyMintHoundByAdmin(hound,isFemale) {
  const houndIdBefore = await houndsData.id();
  await mintHoundByAdmin(hound,isFemale);
  const houndIdAfter = await houndsData.id();
  expect(houndIdBefore !== houndIdAfter, "Hound creation problem");
  await safelyUpdateHoundBreeding(houndIdBefore);
}

async function safelyUpdateHoundStamina(houndId) {
  let houndIdBefore;
  let houndToWorkWith;
  if ( houndId ) {
    houndToWorkWith = houndId;
  } else {
    houndIdBefore = await houndsData.id();
    houndToWorkWith = Number(houndIdBefore)-1;
  }
  const houndBefore = await houndsData.hound(houndToWorkWith);
  await houndsData.updateHoundStamina(houndToWorkWith);
  const houndAfter = await houndsData.hound(houndToWorkWith);
  expect(JSON.stringify(houndBefore) === JSON.stringify(houndAfter), "Hound stamin update on creation problem");
}

async function safelyUpdateHoundBreeding(houndId) {
  let houndIdBefore;
  let houndToWorkWith;
  if ( houndId ) {
    houndToWorkWith = houndId;
  } else {
    houndIdBefore = await houndsData.id();
    houndToWorkWith = Number(houndIdBefore)-1;
  }
  const houndBefore = await houndsData.hound(houndToWorkWith);
  await houndsData.updateHoundBreeding(houndToWorkWith,10000000);
  const houndAfter = await houndsData.hound(houndToWorkWith);
  expect(JSON.stringify(houndBefore) === JSON.stringify(houndAfter), "Hound stamin update on creation problem");
}

async function checkHoundStructure(houndId) {
  const hound = await houndsData.hound(houndId ? houndId : 1);

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
  const houndIdBefore = await houndsData.id();

  let maleId , femaleId ;
  for ( let i = 1 , l = houndIdBefore ; i < l ; ++i ) {

    const hound = await houndsData.hound(i);
    const houndGene = hound[3][4];

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
  const houndIdBefore = await houndsData.id();
  const availableHounds = await findMaleAndFemaleAvailableForBreed();
  const maleId = availableHounds.maleId;
  const femaleId = availableHounds.femaleId; 

  const control = await commonIncubatorData.control();
  expect(control[0] === commonIncubatorMethods.address, "Common incubator data : bad common incubator methods address");
  expect(control[1] === paperSafetyVRFData.address, "Common incubator data : bad VRF address");
  expect(control[2] === geneticsData.address, "Common incubator data : bad genetics data address");
  expect(control[3] === "0x67657452", "Common incubator data : seconds to maturity");

  if ( maleId && femaleId ) {

    const houndMaleBefore = await houndsData.hound(maleId);
    const houndFemaleBefore = await houndsData.hound(femaleId);

    const [owner] = await ethers.getSigners();
    const ownerOfMale = await houndsData.ownerOf(maleId);
    const ownerOfFemale = await houndsData.ownerOf(femaleId);

    let hound1 = maleId , hound2 = femaleId;
    if ( ownerOfFemale !== owner && ownerOfMale === owner ) {
      hound1 = maleId;
      hound2 = femaleId;
    } else if ( ownerOfMale !== owner && ownerOfFemale === owner ) {
      hound1 = femaleId;
      hound2 = maleId;
    }
    
    await houndsData.breedHounds(hound1, hound2, { value : "0xD529AE9E860000" });
    const houndMaleAfter = await houndsData.hound(maleId);
    const houndFemaleAfter = await houndsData.hound(femaleId);
    expect(JSON.stringify(houndMaleBefore) !== JSON.stringify(houndMaleAfter), "Hound male breeding status should be changed after breeding");
    expect(JSON.stringify(houndFemaleBefore) !== JSON.stringify(houndFemaleAfter), "Hound female breeding status should be changed after breeding");
    
    const houndIdAfter = await houndsData.id();
    expect(houndIdBefore !== houndIdAfter, "Owned hound breeding problem");

  }

}

async function createDiscount(erc721Address, ids, dateStart, dateStop, discount, tokenType, usable) {
  const shopOwner = await shopData.owner();
  const [owner] = await ethers.getSigners();
  if ( owner.address === shopOwner ) {
    await shopData.createDiscount([
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
  const shopOwner = await shopData.owner();
  const [owner] = await ethers.getSigners();
  if ( owner.address === shopOwner ) {
    await shopData.editDiscount([
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
    houndracePotions = await HoundracePotions.deploy("Ogars","OG");
    await houndracePotions.deployed();
  });

  it("Deploy the payments contract", async function () {
    paymentsMethods = await getContractInstance("PaymentsMethods",[address0,[]]);
    console.log("Payments method: " + paymentsMethods.address);
    paymentsData = await getContractInstance("PaymentsData",[paymentsMethods.address,[]]);
    console.log("Payments data: " + paymentsData.address);
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

  it("Deploy the Payments methods contract", async function () {
    shopMethods = await getContractInstance("ShopMethods");
    console.log("Shop methods: " + shopMethods.address);
  });

  it("Deploy the Payments data contract", async function () {
    shopData = await getContractInstance("ShopData",[shopMethods.address]);
    console.log("Shop data: " + shopData.address);
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
  
  it("Paper Safe VRF Generator Methods", async function () {
    paperSafetyVRFMethods = await getContractInstance("RandomnessVanillaMethods");
    console.log("Paper Safe VRF Generator Methods deployed at: " + paperSafetyVRFMethods.address);
  });

  it("Paper Safe VRF Generator Data", async function () {
    paperSafetyVRFData = await getContractInstance("RandomnessVanillaData",paperSafetyVRFMethods.address);
    console.log("Paper Safe VRF Generator Data deployed at: " + paperSafetyVRFData.address);

    const paperSafetyVRFMethodsAddress = await paperSafetyVRFData.methodsContract();
    expect(paperSafetyVRFMethodsAddress === paperSafetyVRFMethods.address, "Bad Paper Safety");
  });

  it("Terrains methods", async function () {
    const TerrainsContractMethods = await hre.ethers.getContractFactory("ArenasMethods");
    terrainsContractMethods = await TerrainsContractMethods.deploy("HoundRace Terrains","HrT");
    await terrainsContractMethods.deployed();
    console.log("Terrains methods deployed at: " + terrainsContractMethods.address);
  });

  it("Terrains data", async function () {
    const TerrainsContractData = await hre.ethers.getContractFactory("ArenasData");
    terrainsContractData = await TerrainsContractData.deploy(terrainsContractMethods.address,"HoundRace Terrains","HrT");
    await terrainsContractData.deployed();
    console.log("Terrains data at: " + terrainsContractData.address);
  });

  it("Genetics methods", async function () {
    geneticsMethods = await getContractInstance("GeneticsMethods");
    console.log("Genetics methods at: " + geneticsMethods.address);
    
    await geneticsMethods.setGlobalParameters(
      [
        paperSafetyVRFData.address,
        address0,
        terrainsContractData.address,
        maleBoilerplateGene,
        femaleBoilerplateGene,
        60,
        40,
        [2,6,10,14,18,22,26,30,34,38,42,46,50],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
      ]
    );
    const control = await geneticsMethods.control();
    expect(control[0] === paperSafetyVRFData.address, "Genetics methods : bad VRF address");
    expect(control[1] === address0, "Genetics methods : bad methods address");
    expect(control[2] === terrainsContractData.address, "Genetics methods : bad terrains address");
    expect(control[3] === terrainsContractData.address, "Genetics methods : bad terrains address");
  });

  it("Genetics data", async function () {
    geneticsData = await getContractInstance("GeneticsData",[
      paperSafetyVRFData.address,
      geneticsMethods.address,
      terrainsContractData.address,
      maleBoilerplateGene,
      femaleBoilerplateGene,
      60,
      40,
      [2,6,10,14,18,22,26,30,34,38,42,46,50],
      [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
    ]);
    console.log("Genetics data at: " + geneticsData.address);
    const control = await geneticsData.control();
    expect(control[0] === paperSafetyVRFData.address, "Genetics data : bad VRF address");
    expect(control[1] === geneticsMethods.address, "Genetics data : bad methods address");
    expect(control[2] === terrainsContractData.address, "Genetics data : bad terrains address");
    expect(control[3] === terrainsContractData.address, "Genetics data : bad terrains address");
  });

  it("Common incubator", async function () {
    commonIncubatorMethods = await getContractInstance("IncubatorMethods");
    console.log("Common incubator methods deployed at: " + commonIncubatorMethods.address);

    commonIncubatorData = await getContractInstance("IncubatorData",[
      commonIncubatorMethods.address,
      paperSafetyVRFData.address,
      geneticsData.address,
      "0x67657452"
    ]);
    console.log("Common incubator data deployed at: " + commonIncubatorData.address);

    await commonIncubatorMethods.setGlobalParameters([
      commonIncubatorMethods.address,
      paperSafetyVRFData.address,
      geneticsData.address,
      "0x67657452"
    ]);

    const control1 = await commonIncubatorMethods.control();
    expect(control1[0] === commonIncubatorMethods.address, "Common incubator methods : bad common incubator methods address");
    expect(control1[1] === paperSafetyVRFData.address, "Common incubator methods : bad VRF address");
    expect(control1[2] === geneticsData.address, "Common incubator methods : bad genetics data address");
    expect(control1[3] === "0x67657452", "Common incubator methods : seconds to maturity");

    const control = await commonIncubatorData.control();
    expect(control[0] === commonIncubatorMethods.address, "Common incubator data : bad common incubator methods address");
    expect(control[1] === paperSafetyVRFData.address, "Common incubator data : bad VRF address");
    expect(control[2] === geneticsData.address, "Common incubator data : bad genetics data address");
    expect(control[3] === "0x67657452", "Common incubator data : seconds to maturity");

  });

  it("Hounds contract", async function () {
    const [,otherOwner] = await ethers.getSigners();
    houndsMethods = await getContractInstance("HoundsMethods",[
      "Hounds Methods", // name
      "HM", // symbol
      [], // allowed
      address0, // methods
      commonIncubatorData.address, // incubator
      otherOwner.address, // stater api address here
      shopData.address, // shop
      paymentsData.address, // payments
      "0xB1A2BC2EC50000",
      "0x2386F26FC10000",
      "0x2386F26FC10000",
      "0x2386F26FC10000",
      "0x2386F26FC10000"
    ]);
    console.log("Hounds methods deployed at: " + houndsMethods.address);

    houndsData = await getContractInstance("HoundsData",[
      "Hounds Factory",
      "HF",
      [],
      houndsMethods.address,
      commonIncubatorData.address,
      otherOwner.address, // stater api address here
      shopData.address,
      paymentsData.address, // payments
      "0xB1A2BC2EC50000",
      "0x2386F26FC10000",
      "0x2386F26FC10000",
      "0x2386F26FC10000",
      "0x2386F26FC10000"
    ]);
    console.log("Hounds data deployed at: " + houndsData.address);

    const control = await houndsData.control();
    expect(control[2] === houndsMethods.address, "Hounds data : bad hounds methods address");
    expect(control[3] === houndsMethods.address, "Hounds data : bad stater api address");
    expect(control[2] === commonIncubatorData.address, "Hounds data : bad common incubator address");

  });

  it("Deploy race generator", async function () {
    const RaceGeneratorMethods = await hre.ethers.getContractFactory("RaceGeneratorMethods", {
      libraries: {
        Converters: convertersLibrary.address,
        Sortings: sortingsLibrary.address
      }
    });
    raceGeneratorMethods = await RaceGeneratorMethods.deploy();
    await raceGeneratorMethods.deployed();
    console.log("Race generator methods deployed at: " + raceGeneratorMethods.address);

    raceGeneratorData = await getContractInstance("RaceGeneratorData",[
      paperSafetyVRFData.address,
      terrainsContractData.address,
      houndsData.address,
      raceGeneratorMethods.address,
      raceGeneratorMethods.address,
      raceGeneratorMethods.address,
      50000000,
      true
    ]);
    console.log("Race generator data deployed at: " + raceGeneratorData.address);

    const control = await raceGeneratorData.control();
    expect(control[0] === paperSafetyVRFData.address, "Race generator data : bad VRF address");
    expect(control[1] === terrainsContractData.address, "Race generator data : bad terrains address");
    expect(control[2] === houndsData.address, "Race generator data : bad hounds address");
    expect(control[3] === raceGeneratorMethods.address, "Race generator data : bad allowed address");
    expect(control[4] === raceGeneratorMethods.address, "Race generator data : bad methods address");
    expect(control[5] === raceGeneratorMethods.address, "Race generator data : bad race generator address");

  });

  it("Deploy race handler", async function () {
    const [owner] = await ethers.getSigners();
    racesMethods = await getContractInstance("RacesMethods");
    console.log("Race methods deployed at: " + racesMethods.address);

    
    racesData = await getContractInstance("RacesData",[
      paperSafetyVRFData.address,
      terrainsContractData.address,
      houndsData.address,
      raceGeneratorData.address,
      racesMethods.address,
      raceGeneratorData.address,
      paymentsData.address,
      500000000, // the race fee
      true // back-end generator for true
    ]);
    console.log("Race data deployed at: " + racesData.address);

    await racesMethods.setGlobalParameters(
      [
        paperSafetyVRFData.address,
        terrainsContractData.address,
        houndsData.address,
        raceGeneratorData.address,
        racesMethods.address,
        raceGeneratorData.address,
        paymentsData.address,
        500000000, // the race fee
        true
      ]
    );

    await raceGeneratorData.setGlobalParameters([
      paperSafetyVRFData.address,
      terrainsContractData.address,
      houndsData.address,
      racesData.address,
      raceGeneratorMethods.address,
      raceGeneratorMethods.address,
      paymentsData.address,
      500000000, // the race fee
      true
    ]);

    await raceGeneratorMethods.setGlobalParameters([
      paperSafetyVRFData.address,
      terrainsContractData.address,
      houndsData.address,
      racesData.address,
      address0,
      address0,
      paymentsData.address,
      500000000, // the race fee
      true
    ]);

    const control = await racesMethods.control();
    expect(control[0] === paperSafetyVRFData.address, "Race generator data : bad VRF address");
    expect(control[1] === terrainsContractData.address, "Race generator data : bad terrains address");
    expect(control[2] === houndsData.address, "Race generator data : bad hounds address");
    expect(control[3] === raceGeneratorMethods.address, "Race generator data : bad allowed address");
    expect(control[4] === racesMethods.address, "Race generator data : bad races methods address");
    expect(control[5] === raceGeneratorMethods.address, "Race generator data : bad race generator address");

    await houndsData.setGlobalParameters([
      [racesData.address],
      houndsMethods.address,
      commonIncubatorData.address,
      owner.address,
      shopData.address,
      paymentsData.address,
      "0xB1A2BC2EC50000",
      "0x2386F26FC10000",
      "0x2386F26FC10000",
      "0x2386F26FC10000",
      "0x2386F26FC10000",
      [true]
    ]);

    await paymentsData.setGlobalParameters([paymentsMethods.address,[
      paperSafetyVRFMethods.address, paperSafetyVRFData.address,
      houndsData.address, houndsMethods.address,
      shopData.address, shopMethods.address,
      raceGeneratorData.address, raceGeneratorMethods.address,
      racesData.address, racesMethods.address
    ]]);

  });

});


describe("After deployment calls", function () {

  it("Terrains data set global parameters", async function () {
    await terrainsContractData.setGlobalParameters(terrainsContractMethods.address);
    const control = await terrainsContractData.methodsContractAddress();
    expect(control === terrainsContractMethods.address, "Terrains data contract : bad terrains methods address");
  });

});


describe("Genetics methods", function () {

  it("Genetics - wholeArithmeticRecombination", async function () {
    let newGeneticSequence = await geneticsData.wholeArithmeticRecombination(maleBoilerplateGene,femaleBoilerplateGene);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
  });

  it("Genetics - swapMutation", async function () {
    let newGeneticSequence = await geneticsData.swapMutation(maleBoilerplateGene,5);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
  });

  it("Genetics - inversionMutation", async function () {
    let newGeneticSequence = await geneticsData.inversionMutation(maleBoilerplateGene,5);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
  });

  it("Genetics - scrambleMutation", async function () {
    let newGeneticSequence = await geneticsData.scrambleMutation(maleBoilerplateGene,9);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
  });

  it("Genetics - arithmeticMutation", async function () {
    let newGeneticSequence = await geneticsData.arithmeticMutation(maleBoilerplateGene,9);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
  });

  it("Genetics - uniformCrossover", async function () {
    let newGeneticSequence = await geneticsData.uniformCrossover(maleBoilerplateGene,femaleBoilerplateGene,9);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
  });
  
  it("Genetics - mixGenes 100x", async function () {
    for ( let i = 0 ; i < 100 ; ++i ) {
      let newGeneticSequence = await geneticsData.mixGenes(maleBoilerplateGene,femaleBoilerplateGene,i);
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
    const houndId = await houndsData.id();
    await houndsData.putHoundForBreed(houndId-1,0,true);
  });

});


describe("Races", function () {

  it("Create terrain", async function () {
    const [owner] = await ethers.getSigners();
    let createTerrain = await terrainsContractData.createArena([
      owner.address,
      0,
      1,
      1000,
      3
    ]);

    expect(createTerrain !== undefined, "Create terrain problem");
  });

  it("Create queue", async function () {

    await racesData.createQueues([
      [
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

    await racesData.createQueues([
      [
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

    await racesData.createQueues([
      [
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

    let queueId = await racesData.id();

    ////console.log("Queue id >> " + queueId);

    expect(web3.utils.hexToNumber(queueId) === 2, "Queue has not been created");

  });

  let houndsStamina = [];

  it("Hounds stamina check x1", async function () {

    for ( let i = 1 ; i <= 10 ; ++i ) {
      let hound = await houndsData.hound(i);
      expect(hound !== undefined, "Hound getter problem");
      houndsStamina[i] = hound[1][2];
    }

  });

  it("Join queue x10", async function () {
    let queue = await racesData.queues(1);
    let control = await racesData.control();
    expect(control[0] === paperSafetyVRFData.address,"Randomness not ok");
    expect(control[1] === terrainsContractData.address,"Terrains not ok");
    expect(control[2] === houndsData.address,"Hounds not ok");
    ////console.log("## The race generator address is: " + raceGeneratorData.address);
    expect(control[3] === raceGeneratorData.address,"Race generator not ok");
    expect(control[4] === racesMethods.address,"Race methods not ok");
    expect(control[5] === raceGeneratorData.address,"Race generator(again) not ok");
    ////console.log("We parse for Join queue x10 : " + queue[3]);
    ////console.log("Races data control: " + JSON.stringify(control));
    const raceGeneratorDataControl = await raceGeneratorData.control();
    const raceGeneratorMethodsControl = await raceGeneratorMethods.control();
    const racesDataControl = await racesData.control();
    const racesMethodsControl = await racesMethods.control();
    ////console.log("=============================");
    ////console.log(raceGeneratorDataControl[0]);
    ////console.log(raceGeneratorMethodsControl[0]);
    ////console.log(racesDataControl[0]);
    ////console.log(racesMethodsControl[0]);
    for ( let i = 1 ; i <= queue[3] ; ++i ) {
      ////console.log("Enqueue: " + i);
      await racesData.enqueue(1,i,{ value : queue[2] });
    }
  });

  it("Hounds stamina check x2", async function () {
    let queue = await racesData.queues(1);
    for ( let i = 1 ; i <= queue[3] ; ++i ) {
      let hound = await houndsData.hound(i);
      ////console.log("Hound is: " + JSON.stringify(hound));
      expect(hound !== undefined, "Hound getter problem");
      //console.log("Stamina: " + hound[1][2]);
      expect(houndsStamina[i] < hound[1][2], "Hound stamina not consumed");
      houndsStamina[i] = hound[1][2];
    }
  });

  it("Join queue x20", async function () {
    let queue = await racesData.queues(1);
    for ( let i = 1 ; i <= queue[3] ; ++i ) {
      await racesData.enqueue(1,i,{ value : queue[2] });
    }
  });

  it("Hounds stamina check x3", async function () {
    let queue = await racesData.queues(1);
    for ( let i = 1 ; i <= queue[3] ; ++i ) {
      let hound = await houndsData.hound(i);
      expect(hound !== undefined, "Hound getter problem");
      //console.log("Stamina: " + hound[1][2]);
      expect(houndsStamina[i] < hound[1][2], "Hound stamina not consumed");
      houndsStamina[i] = hound[1][2];
    }
  });

  it("Join queue x30", async function () {
    let queue = await racesData.queues(1);
    for ( let i = 1 ; i <= queue[3] ; ++i ) {
      await racesData.enqueue(1,i,{ value : queue[2] });
    }
  });

  it("Hounds stamina check x4", async function () {
    let queue = await racesData.queues(1);
    for ( let i = 1 ; i <= queue[3] ; ++i ) {
      let hound = await houndsData.hound(i);
      expect(hound !== undefined, "Hound getter problem");
      expect(houndsStamina[i] < hound[1][2], "Hound stamina not consumed");
      houndsStamina[i] = hound[1][2];
    }
  });

});