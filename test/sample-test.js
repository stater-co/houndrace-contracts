const { expect } = require("chai");
const { ethers } = require("hardhat");

const address0 = "0x0000000000000000000000000000000000000000";
const maleBoilerplateGene = [ 1, 1, 8, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 9, 8, 2, 1, 4, 2, 9, 8, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 7, 7, 0, 2, 9, 1, 0, 9, 1, 1, 2, 1, 9, 0, 2, 2, 8, 5, 2, 8, 1, 9 ];
const femaleBoilerplateGene = [ 2, 2, 6, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 3, 1, 9, 1, 4, 2, 4, 7, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 1, 7, 2, 7, 9, 1, 0, 9, 1, 1, 2, 1, 0, 7, 2, 2, 8, 5, 8, 7, 1, 3 ];
const defaultHound = [
  [ 0, 0, 0, 0],
  [ 10000000, 10000000, 100, 1, 100 ],
  [ 0, 100000, 1000, false ],
  [ 0, 0, 0, maleBoilerplateGene ],
  "",
  "",
  false,
  false
];
let currentDiscountId = 1;
let payments = {
  main: null,
  methods: null,
  restricted: null
};
let shop = {
  main: null,
  methods: null,
  restricted: null,
  zerocost: null
};
let randomness = {
  restricted: null,
  zerocost: null,
  main: null
};
let arenas = {
  main: null,
  restricted: null,
  zerocost: null
};
let genetics = {
  main: null,
  restricted: null,
  zerocost: null
};
let incubator = {
  methods: null,
  restricted: null,
  main: null
};
let hound = {
  minter: null,
  modifier: null,
  restricted: null,
  zerocost: null
};
let houndsContract;
let generator = {
  methods: null,
  restricted: null,
  zerocost: null, 
  main: null
};
let races = {
  methods: null,
  restricted: null,
  zerocost: null,
  main: null
};
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
  const contractOwner = await houndsContract.owner();
  expect(owner.address === contractOwner, "You're not the owner of the hounds data contract");
  console.log("initializing hound: ", 0, JSON.stringify(houndToMint));
  await houndsContract.initializeHound(0,houndToMint);
}

async function safelyMintHoundByAdmin(hound,isFemale) {
  const houndIdBefore = await houndsContract.id();
  console.log("Hound id before: " + houndIdBefore);
  await mintHoundByAdmin(hound,isFemale);
  const houndIdAfter = await houndsContract.id();
  expect(houndIdBefore !== houndIdAfter, "Hound creation problem");
  await safelyUpdateHoundBreeding(houndIdBefore);
}

async function safelyUpdateHoundStamina(houndId) {
  let houndIdBefore;
  let houndToWorkWith;
  if ( houndId ) {
    houndToWorkWith = houndId;
  } else {
    houndIdBefore = await houndsContract.id();
    houndToWorkWith = Number(houndIdBefore)-1;
  }
  const houndBefore = await houndsContract.hound(houndToWorkWith);
  await houndsContract.updateStamina(houndToWorkWith);
  const houndAfter = await houndsContract.hound(houndToWorkWith);
  expect(JSON.stringify(houndBefore) === JSON.stringify(houndAfter), "Hound stamin update on creation problem");
}

async function safelyUpdateHoundBreeding(houndId) {
  let houndIdBefore;
  let houndToWorkWith;
  if ( houndId ) {
    houndToWorkWith = houndId;
  } else {
    houndIdBefore = await houndsContract.id();
    houndToWorkWith = Number(houndIdBefore)-1;
  }
  const houndBefore = await houndsContract.hound(houndToWorkWith);
  await houndsContract.updateHoundBreeding(houndToWorkWith);
  const houndAfter = await houndsContract.hound(houndToWorkWith);
  expect(JSON.stringify(houndBefore) === JSON.stringify(houndAfter), "Hound stamin update on creation problem");
}

async function checkHoundStructure(houndId) {
  const hound = await houndsContract.hound(houndId ? houndId : 1);

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
  const houndIdBefore = await houndsContract.id();

  //console.log("Hound id to parse: " + houndIdBefore);
  let maleId , femaleId ;
  for ( let i = 1 , l = houndIdBefore ; i < l ; ++i ) {

    const hound = await houndsContract.hound(i);
    const houndGene = hound[3][3];

    //console.log("Gene: " + i + " >> " + houndGene);

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
  const houndIdBefore = await houndsContract.id();
  const availableHounds = await findMaleAndFemaleAvailableForBreed();
  //console.log("Available hounds >> " + JSON.stringify(findMaleAndFemaleAvailableForBreed));
  const maleId = availableHounds.maleId;
  const femaleId = availableHounds.femaleId; 

  //console.log("Male: " + maleId + " , Female:" + femaleId);
  if ( maleId && femaleId ) {

    const houndMaleBefore = await houndsContract.hound(maleId);
    const houndFemaleBefore = await houndsContract.hound(femaleId);

    const [owner] = await ethers.getSigners();
    const ownerOfMale = await houndsContract.ownerOf(maleId);
    const ownerOfFemale = await houndsContract.ownerOf(femaleId);

    let hound1 = maleId , hound2 = femaleId;
    if ( ownerOfFemale !== owner && ownerOfMale === owner ) {
      hound1 = maleId;
      hound2 = femaleId;
    } else if ( ownerOfMale !== owner && ownerOfFemale === owner ) {
      hound1 = femaleId;
      hound2 = maleId;
    }
    
    console.log("We breed hounds here !!!!!");

    const foreignHound = await houndsContract.hound(hound2);
    //console.log("Breed fee: " + Number(foreignHound[2][1]));
    const control = await houndsContract.control();
    //console.log(Number(control[3][0]) + " + " + Number(control[3][1]));
    //console.log(Number(foreignHound[2][1]) + Number(control[3][0]) + Number(control[3][1]));

    const totalToPay = await houndsContract.getBreedCost(hound1,hound2);
    console.log("Total to pay >> " + totalToPay);

    await houndsContract.breedHounds(hound1, hound2, { value : totalToPay });
    const houndMaleAfter = await houndsContract.hound(maleId);
    const houndFemaleAfter = await houndsContract.hound(femaleId);
    expect(JSON.stringify(houndMaleBefore) !== JSON.stringify(houndMaleAfter), "Hound male breeding status should be changed after breeding");
    expect(JSON.stringify(houndFemaleBefore) !== JSON.stringify(houndFemaleAfter), "Hound female breeding status should be changed after breeding");
    
    const houndIdAfter = await houndsContract.id();
    expect(houndIdBefore !== houndIdAfter, "Owned hound breeding problem");

  }

}

async function createDiscount(erc721Address, ids, dateStart, dateStop, discount, tokenType, usable) {
  const shopOwner = await shop.main.owner();
  const [owner] = await ethers.getSigners();
  if ( owner.address === shopOwner ) {
    await shop.main.createDiscount([
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
  const shopOwner = await shop.main.owner();
  const [owner] = await ethers.getSigners();
  if ( owner.address === shopOwner ) {
    await shop.main.editDiscount([
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
    payments.methods = await getContractInstance("PaymentsMethods");
    console.log("Payments method: " + payments.methods.address);
    payments.restricted = await getContractInstance("PaymentsRestricted");
    console.log("Payments restricted: " + payments.restricted.address);
    payments.main = await getContractInstance("Payments",[payments.methods.address,payments.restricted.address,[]]);
    console.log("Payments: " + payments.main.address);
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
    shop.zerocost = await getContractInstance("ShopZerocost");
    console.log("Shop zerocost: " + shop.zerocost.address);
    shop.restricted = await getContractInstance("ShopRestricted");
    console.log("Shop restricted: " + shop.restricted.address);
    shop.methods = await getContractInstance("ShopMethods");
    console.log("Shop methods: " + shop.methods.address);
    shop.main = await getContractInstance("Shop",[shop.methods.address,shop.zerocost.address,shop.restricted.address]);
    console.log("Shop: " + shop.main.address);
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
    randomness.zerocost = await getContractInstance("RandomnessZerocost");
    console.log("Zerocost contract deployed at: " + randomness.zerocost.address);
    randomness.restricted = await getContractInstance("RandomnessRestricted");
    console.log("Restricted contract deployed at: " + randomness.restricted.address);
    randomness.main = await getContractInstance("Randomness",[randomness.zerocost.address,randomness.restricted.address]);
    console.log("Randomness main deployed at: " + randomness.main.address);
  });

  it("Deploy the arenas contracts", async function () {
    arenas.zerocost = await getContractInstance("ArenasZerocost");
    console.log("Zerocost contract deployed at: " + arenas.zerocost.address);
    arenas.restricted = await getContractInstance("ArenasRestricted");
    console.log("Restricted contract deployed at: " + arenas.restricted.address);
    arenas.main = await getContractInstance("Arenas",[arenas.zerocost.address,arenas.restricted.address]);
    console.log("Arenas contract deployed at: " + arenas.main.address);
  });

  it("Genetics methods", async function () {
    genetics.restricted = await getContractInstance("GeneticsRestricted");
    console.log("Restricted contract deployed at: " + genetics.restricted.address);
    genetics.zerocost = await getContractInstance("GeneticsZerocost",[
      randomness.main.address,
      address0,
      genetics.restricted.address,
      arenas.main.address,
      maleBoilerplateGene,
      femaleBoilerplateGene,
      60,
      40,
      [2,6,10,14,18,22,26,30,34,38,42,46,50],
      [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
    ]);
    console.log("Zerocost contract deployed at: " + genetics.zerocost.address);
    genetics.main = await getContractInstance("Genetics",[
      randomness.main.address,
      genetics.zerocost.address,
      genetics.restricted.address,
      arenas.main.address,
      maleBoilerplateGene,
      femaleBoilerplateGene,
      60,
      40,
      [2,6,10,14,18,22,26,30,34,38,42,46,50],
      [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
    ]);
    console.log("Genetics contract deployed at: " + genetics.main.address);
  });

  it("Deploy the incubator contracts", async function () {
    incubator.methods = await getContractInstance("IncubatorMethods");
    console.log("Methods contract deployed at: " + incubator.methods.address);
    incubator.restricted = await getContractInstance("IncubatorRestricted");
    console.log("Restricted contract deployed at: " + incubator.restricted.address);
    incubator.main = await getContractInstance("Incubator",[
      incubator.methods.address,
      incubator.restricted.address,
      randomness.main.address,
      genetics.main.address,
      "0x67657452"
    ]);
    console.log("Incubator contract deployed at: " + incubator.main.address);

  });

  it("Deploy the hounds contract", async function () {
    const [owner,otherOwner] = await ethers.getSigners();
    hound.zerocost = await getContractInstance("HoundsZerocost");
    console.log("Zerocost contract deployed at: " + hound.zerocost.address);
    hound.restricted = await getContractInstance("HoundsRestricted");
    console.log("Restricted contract deployed at: " + hound.restricted.address);
    hound.modifier = await getContractInstance("HoundsModifier");
    console.log("Modifier contract deployed at: " + hound.modifier.address);
    hound.minter = await getContractInstance("HoundsMinter");
    console.log("Minter contract deployed at: " + hound.minter.address);
    houndsContract = await getContractInstance("Hounds",[
      "HoundRace",
      "HR",
      [owner.address,hound.minter.address],
      [
        incubator.main.address,
        otherOwner.address,
        payments.main.address,
        hound.restricted.address,
        hound.minter.address,
        hound.zerocost.address,
        hound.modifier.address,
        shop.main.address,
        houndracePotions.address
      ],[
        "0xB1A2BC2EC50000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000"
      ]
    ]);
    console.log("Hounds contract deployed at: " + houndsContract.address);

    await payments.main.setGlobalParameters([payments.methods.address,payments.restricted.address,[houndsContract.address]]);
    console.log("Successfully global parameters set");

  });

  it("Deploy the race contracts", async function () {
    races.zerocost = await getContractInstance("RacesZeroCost");
    console.log("Zerocost contract deployed at: " + races.zerocost.address);
    races.restricted = await getContractInstance("RacesRestricted");
    console.log("Restricted contract deployed at: " + races.restricted.address);
    races.methods = await getContractInstance("RacesMethods");
    console.log("Methods contract deployed at: " + races.methods.address);
    races.main = await getContractInstance("Races",[
      randomness.main.address,
      arenas.main.address,
      houndsContract.address,
      races.methods.address,
      address0,
      payments.main.address,
      races.restricted.address,
      races.zerocost.address,
      500000000,
      true
    ]);
    console.log("Races contract deployed at: " + races.main.address);
  });

  it("Deploy the generator contracts", async function () {
    let Contract = await hre.ethers.getContractFactory("GeneratorZerocost", {
      libraries: {
        Sortings: sortingsLibrary.address
      }
    });
    let contract = await Contract.deploy();
    await contract.deployed();
    generator.zerocost = contract;
    console.log("Zerocost contract deployed at: " + generator.zerocost.address);

    generator.restricted = await getContractInstance("GeneratorRestricted");
    console.log("Restricted contract deployed at: " + generator.restricted.address);

    Contract = await hre.ethers.getContractFactory("GeneratorMethods", {
      libraries: {
        Converters: convertersLibrary.address
      }
    });
    contract = await Contract.deploy();
    await contract.deployed();
    generator.methods = contract;
    console.log("Methods contract deployed at: " + generator.methods.address);

    generator.main = await getContractInstance("Generator",[
      randomness.main.address,
      arenas.main.address,
      houndsContract.address,
      races.main.address,
      generator.methods.address,
      payments.main.address,
      generator.restricted.address,
      generator.zerocost.address
    ]);
    console.log("Generator contract deployed at: " + generator.main.address);

    races.main.setGlobalParameters([
      randomness.main.address,
      arenas.main.address,
      houndsContract.address,
      races.methods.address,
      generator.main.address,
      payments.main.address,
      races.restricted.address,
      races.zerocost.address,
      500000000,
      true
    ]);

  });

});



describe("Genetics methods", function () {

  it("Genetics - wholeArithmeticRecombination", async function () {
    let newGeneticSequence = await genetics.main.wholeArithmeticRecombination(maleBoilerplateGene,femaleBoilerplateGene);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
  });

  it("Genetics - swapMutation", async function () {
    let newGeneticSequence = await genetics.main.swapMutation(maleBoilerplateGene,5);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
  });

  it("Genetics - inversionMutation", async function () {
    let newGeneticSequence = await genetics.main.inversionMutation(maleBoilerplateGene,5);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
  });

  it("Genetics - scrambleMutation", async function () {
    let newGeneticSequence = await genetics.main.scrambleMutation(maleBoilerplateGene,9);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
  });

  it("Genetics - arithmeticMutation", async function () {
    let newGeneticSequence = await genetics.main.arithmeticMutation(maleBoilerplateGene,9);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
  });

  it("Genetics - uniformCrossover", async function () {
    let newGeneticSequence = await genetics.main.uniformCrossover(maleBoilerplateGene,femaleBoilerplateGene,9);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, "Failed to generate a valid genetic sequence via whole arithmetic recombination");
  });
  
  it("Genetics - mixGenes 100x", async function () {
    for ( let i = 0 ; i < 100 ; ++i ) {
      let newGeneticSequence = await genetics.main.mixGenes(maleBoilerplateGene,femaleBoilerplateGene,i);
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
    const houndId = await houndsContract.id();
    await houndsContract.putHoundForBreed(houndId-2,0,true);
  });

});


describe("Races", function () {

  it("Create terrain", async function () {
    const [owner] = await ethers.getSigners();
    let createTerrain = await arenas.main.createArena([
      owner.address,
      0,
      1,
      1000,
      3
    ]);

    expect(createTerrain !== undefined, "Create terrain problem");
  });

  it("Create queue", async function () {

    await races.main.createQueues([
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

    await races.main.createQueues([
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

    await races.main.createQueues([
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

    let queueId = await races.main.id();

    ////console.log("Queue id >> " + queueId);

    expect(Number(queueId) === 2, "Queue has not been created");

  });

  let houndsStamina = [];

  it("Hounds stamina check x1", async function () {

    for ( let i = 1 ; i <= 10 ; ++i ) {
      let hound = await houndsContract.hound(i);
      expect(hound !== undefined, "Hound getter problem");
      houndsStamina[i] = hound[1][2];
    }

  });

  it("Join queue x10", async function () {
    let queue = await races.main.queues(1);
    for ( let i = 1 ; i <= queue[3] ; ++i ) {
      await races.main.enqueue(1,i,{ value : queue[2] });
    }
  });

  it("Hounds stamina check x2", async function () {
    let queue = await races.main.queues(1);
    for ( let i = 1 ; i <= queue[3] ; ++i ) {
      let hound = await houndsContract.hound(i);
      expect(hound !== undefined, "Hound getter problem");
      expect(houndsStamina[i] < hound[1][2], "Hound stamina not consumed");
      houndsStamina[i] = hound[1][2];
    }
  });

  it("Join queue x20", async function () {
    let queue = await races.main.queues(1);
    for ( let i = 1 ; i <= queue[3] ; ++i ) {
      await races.main.enqueue(1,i,{ value : queue[2] });
    }
  });

  it("Hounds stamina check x3", async function () {
    let queue = await races.main.queues(1);
    for ( let i = 1 ; i <= queue[3] ; ++i ) {
      let hound = await houndsContract.hound(i);
      expect(hound !== undefined, "Hound getter problem");
      //console.log("Stamina: " + hound[1][2]);
      expect(houndsStamina[i] < hound[1][2], "Hound stamina not consumed");
      houndsStamina[i] = hound[1][2];
    }
  });

  it("Join queue x30", async function () {
    let queue = await races.main.queues(1);
    for ( let i = 1 ; i <= queue[3] ; ++i ) {
      await races.main.enqueue(1,i,{ value : queue[2] });
    }
  });

  it("Hounds stamina check x4", async function () {
    let queue = await races.main.queues(1);
    for ( let i = 1 ; i <= queue[3] ; ++i ) {
      let hound = await houndsContract.hound(i);
      expect(hound !== undefined, "Hound getter problem");
      expect(houndsStamina[i] < hound[1][2], "Hound stamina not consumed");
      houndsStamina[i] = hound[1][2];
    }
  });

});