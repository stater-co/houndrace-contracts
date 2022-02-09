const { expect } = require("chai");
const { ethers } = require("hardhat");
const Web3 = require('web3');
const web3 = new Web3(process.env.WSS);

const address0 = "0x0000000000000000000000000000000000000000";
const maleBoilerplateGene = [ 1, 2, 8, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 9, 8, 2, 1, 4, 2, 9, 8, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 7, 7, 0, 2, 9, 1, 0, 9, 1, 1, 2, 1, 9, 0, 2, 2, 8, 5 ];
const femaleBoilerplateGene = [ 2, 1, 6, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 3, 1, 9, 1, 4, 2, 4, 7, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 1, 7, 2, 7, 9, 1, 0, 9, 1, 1, 2, 1, 0, 7, 2, 2, 8, 5 ];
let paperSafetyVRFMethods, paperSafetyVRFData, geneticsData, geneticsMethods, 
terrainsContractMethods, terrainsContractData, 
commonIncubatorMethods, commonIncubatorData, houndsMethods, houndsData, racesMethods, racesData, 
raceGeneratorData, raceGeneratorMethods, ogars, shopData, shopMethods, testErc721, testErc1155;


describe("Setting up the Payments System", function () {
  
  it("Deploy the erc721 test contract", async function () {
    const TestingErc721 = await hre.ethers.getContractFactory("TestingErc721");
    testErc721 = await TestingErc721.deploy("test","t");
    await testErc721.deployed();
  });

  it("Mint erc721 nfts", async function () {
    const [owner] = await ethers.getSigners();
    for ( let i = 0 ; i < 100 ; ++i ) {
      await testErc721.safeMint(owner.address,i,'0x00');
    }
  });

  it("Deploy the erc1155 test contract", async function () {
    const TestingErc1155 = await hre.ethers.getContractFactory("TestingErc1155");
    testErc1155 = await TestingErc1155.deploy("test");
    await testErc1155.deployed();
  });

  it("Mint erc1155 nfts", async function () {
    const [owner] = await ethers.getSigners();
    await testErc1155.mintBatch(owner.address,Array.from(Array(100).keys()),Array(100).fill(5000),'0x00');
  });

  it("Deploy the Payments methods contract", async function () {
    const ShopMethods = await hre.ethers.getContractFactory("ShopMethods");
    shopMethods = await ShopMethods.deploy();
    await shopMethods.deployed();
    console.log("Shop methods: " + shopMethods.address);
  });

  it("Deploy the Payments data contract", async function () {
    const ShopData = await hre.ethers.getContractFactory("ShopData");
    shopData = await ShopData.deploy([shopMethods.address]);
    await shopData.deployed();
    console.log("Shop data: " + shopData.address);
  });

  it("Add discounts", async function () {
    // Add erc721 nfts
    for ( let i = 1 ; i < 100 ; ++i ) {
      await shopData.createDiscount([
        testErc721.address,
        [i],
        0,
        0,
        5,
        0,
        false
      ]);
    }
    // Add erc1155 nfts
    for ( let i = 1 ; i < 100 ; ++i ) {
      await shopData.createDiscount([
        testErc1155.address,
        [i],
        0,
        0,
        10,
        1,
        false
      ]);
    }
    // Edit erc721 nfts
    for ( let i = 1 ; i < 100 ; ++i ) {
      await shopData.editDiscount([
        testErc721.address,
        [i],
        0,
        0,
        5,
        0,
        false
      ],i);
    }
    // Edit erc1155 nfts
    for ( let i = 1 ; i < 100 ; ++i ) {
      await shopData.editDiscount([
        testErc1155.address,
        [i],
        0,
        0,
        10,
        1,
        false
      ],i);
    }
  });

});


describe("Setting up the Houndrace contracts", function () {
  
  it("Paper Safe VRF Generator Methods", async function () {
    const PaperSafetyVRFMethods = await hre.ethers.getContractFactory("RandomnessVanillaMethods");
    paperSafetyVRFMethods = await PaperSafetyVRFMethods.deploy();
    await paperSafetyVRFMethods.deployed();
    ////console.log("Paper Safe VRF Generator Methods deployed at: " + paperSafetyVRFMethods.address);
  });

  it("Paper Safe VRF Generator Data", async function () {
    const PaperSafetyVRFData = await hre.ethers.getContractFactory("RandomnessVanillaData");
    paperSafetyVRFData = await PaperSafetyVRFData.deploy(paperSafetyVRFMethods.address);
    await paperSafetyVRFData.deployed();

    ////console.log("Paper Safe VRF Generator Data deployed at: " + paperSafetyVRFData.address);

    const paperSafetyVRFMethodsAddress = await paperSafetyVRFData.methodsContract();
    expect(paperSafetyVRFMethodsAddress === paperSafetyVRFMethods.address, "Bad Paper Safety");
  });

  it("Terrains methods", async function () {
    const TerrainsContractMethods = await hre.ethers.getContractFactory("ArenasMethods");
    terrainsContractMethods = await TerrainsContractMethods.deploy("HoundRace Terrains","HrT");
    await terrainsContractMethods.deployed();
    ////console.log("Terrains methods deployed at: " + terrainsContractMethods.address);
  });

  it("Terrains data", async function () {
    const TerrainsContractData = await hre.ethers.getContractFactory("ArenasData");
    terrainsContractData = await TerrainsContractData.deploy(terrainsContractMethods.address,"HoundRace Terrains","HrT");
    await terrainsContractData.deployed();
    ////console.log("Terrains data at: " + terrainsContractData.address);
  });

  it("Genetics methods", async function () {
    const GeneticsMethods = await hre.ethers.getContractFactory("GeneticsMethods");
    geneticsMethods = await GeneticsMethods.deploy();
    await geneticsMethods.deployed();
    ////console.log("Genetics methods at: " + geneticsMethods.address);
    ////console.log("The genetic methods is test unit scripts: " + geneticsMethods.address);
    await geneticsMethods.setGlobalParameters(
      [
        paperSafetyVRFData.address,
        address0,
        terrainsContractData.address,
        maleBoilerplateGene,
        femaleBoilerplateGene,
        60,
        40,
        [2,6,10,14,18,22,26,30,34,38,42,46],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
      ]
    );
    const control = await geneticsMethods.control();
    ////console.log("Genetics methods control >> " + JSON.stringify(control));
    expect(control[0] === paperSafetyVRFData.address, "Genetics methods : bad VRF address");
    expect(control[1] === address0, "Genetics methods : bad methods address");
    expect(control[2] === terrainsContractData.address, "Genetics methods : bad terrains address");
    expect(control[3] === terrainsContractData.address, "Genetics methods : bad terrains address");
  });

  it("Genetics data", async function () {
    const GeneticsData = await hre.ethers.getContractFactory("GeneticsData");
    geneticsData = await GeneticsData.deploy([
      paperSafetyVRFData.address,
      geneticsMethods.address,
      terrainsContractData.address,
      maleBoilerplateGene,
      femaleBoilerplateGene,
      60,
      40,
      [2,6,10,14,18,22,26,30,34,38,42,46],
      [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
    ]);
    await geneticsData.deployed();
    ////console.log("Genetics data at: " + geneticsData.address);
    const control = await geneticsData.control();
    ////console.log("Genetics data control >> " + JSON.stringify(control));
    expect(control[0] === paperSafetyVRFData.address, "Genetics data : bad VRF address");
    expect(control[1] === geneticsMethods.address, "Genetics data : bad methods address");
    expect(control[2] === terrainsContractData.address, "Genetics data : bad terrains address");
    expect(control[3] === terrainsContractData.address, "Genetics data : bad terrains address");
  });

  it("Common incubator", async function () {
    const IncubatorMethods = await hre.ethers.getContractFactory("IncubatorMethods");
    commonIncubatorMethods = await IncubatorMethods.deploy();
    await commonIncubatorMethods.deployed();
    ////console.log("Common incubator methods deployed at: " + commonIncubatorMethods.address);


    const IncubatorData = await hre.ethers.getContractFactory("IncubatorData");
    commonIncubatorData = await IncubatorData.deploy([
      commonIncubatorMethods.address,
      paperSafetyVRFData.address,
      geneticsData.address,
      "0x67657452"
    ]);
    await commonIncubatorData.deployed();
    ////console.log("Common incubator data deployed at: " + commonIncubatorData.address);

    await commonIncubatorMethods.setGlobalParameters([
      commonIncubatorMethods.address,
      paperSafetyVRFData.address,
      geneticsData.address,
      "0x67657452"
    ]);

    const control1 = await commonIncubatorMethods.control();
    //console.log("Common incubator methods control1 >> " + JSON.stringify(control1));
    //console.log("Genetics methods address: " + geneticsData.address + " && " + control1[2]);
    expect(control1[0] === commonIncubatorMethods.address, "Common incubator methods : bad common incubator methods address");
    expect(control1[1] === paperSafetyVRFData.address, "Common incubator methods : bad VRF address");
    expect(control1[2] === geneticsData.address, "Common incubator methods : bad genetics data address");
    expect(control1[3] === "0x67657452", "Common incubator methods : seconds to maturity");

    const control = await commonIncubatorData.control();
    //console.log("Common incubator data control >> " + JSON.stringify(control));
    //console.log("Genetics data address: " + geneticsData.address + " && " + control[2]);
    expect(control[0] === commonIncubatorMethods.address, "Common incubator data : bad common incubator methods address");
    expect(control[1] === paperSafetyVRFData.address, "Common incubator data : bad VRF address");
    expect(control[2] === geneticsData.address, "Common incubator data : bad genetics data address");
    expect(control[3] === "0x67657452", "Common incubator data : seconds to maturity");

  });

  it("Hounds contract", async function () {
    const [owner,otherOwner] = await ethers.getSigners();
    const HoundsMethods = await hre.ethers.getContractFactory("HoundsMethods");
    houndsMethods = await HoundsMethods.deploy([
      "Hounds Methods",
      "HM",
      [],
      address0,
      commonIncubatorData.address,
      otherOwner.address, // stater api address here
      shopData.address,
      "0xB1A2BC2EC50000",
      "0x2386F26FC10000",
      "0x2386F26FC10000",
      "0x2386F26FC10000",
      "0x2386F26FC10000"
    ]);
    await houndsMethods.deployed();
    console.log("Hounds methods deployed at: " + houndsMethods.address);

    const HoundsData = await hre.ethers.getContractFactory("HoundsData");
    houndsData = await HoundsData.deploy([
      "Hounds Factory",
      "HF",
      [],
      houndsMethods.address,
      commonIncubatorData.address,
      otherOwner.address, // stater api address here
      shopData.address,
      "0xB1A2BC2EC50000",
      "0x2386F26FC10000",
      "0x2386F26FC10000",
      "0x2386F26FC10000",
      "0x2386F26FC10000"
    ]);
    await houndsData.deployed();
    console.log("Hounds data deployed at: " + houndsData.address);

    const control = await houndsData.control();
    ////console.log("Hounds data control >> " + JSON.stringify(control));
    
    expect(control[2] === houndsMethods.address, "Hounds data : bad hounds methods address");
    expect(control[3] === houndsMethods.address, "Hounds data : bad stater api address");
    expect(control[2] === commonIncubatorData.address, "Hounds data : bad common incubator address");

  });

  it("Deploy race generator", async function () {
    const RaceGeneratorMethods = await hre.ethers.getContractFactory("RaceGeneratorMethods");
    raceGeneratorMethods = await RaceGeneratorMethods.deploy();
    await raceGeneratorMethods.deployed();
    ////console.log("Race generator methods deployed at: " + raceGeneratorMethods.address);

    const RaceGeneratorData = await hre.ethers.getContractFactory("RaceGeneratorData");
    raceGeneratorData = await RaceGeneratorData.deploy([
      paperSafetyVRFData.address,
      terrainsContractData.address,
      houndsData.address,
      raceGeneratorMethods.address,
      raceGeneratorMethods.address,
      raceGeneratorMethods.address,
      50000000,
      true
    ]);
    await raceGeneratorData.deployed();
    ////console.log("Race generator data deployed at: " + raceGeneratorData.address);

    const control = await raceGeneratorData.control();
    ////console.log("Race generator data control >> " + JSON.stringify(control));
    
    expect(control[0] === paperSafetyVRFData.address, "Race generator data : bad VRF address");
    expect(control[1] === terrainsContractData.address, "Race generator data : bad terrains address");
    expect(control[2] === houndsData.address, "Race generator data : bad hounds address");
    expect(control[3] === raceGeneratorMethods.address, "Race generator data : bad allowed address");
    expect(control[4] === raceGeneratorMethods.address, "Race generator data : bad methods address");
    expect(control[5] === raceGeneratorMethods.address, "Race generator data : bad race generator address");

  });

  it("Deploy race handler", async function () {
    const [owner] = await ethers.getSigners();
    const RacesMethods = await hre.ethers.getContractFactory("RacesMethods");
    racesMethods = await RacesMethods.deploy();
    await racesMethods.deployed();
    ////console.log("Race methods deployed at: " + racesMethods.address);

    const RacesData = await hre.ethers.getContractFactory("RacesData");

    ////console.log("Deploying races data with: ");
    ////console.log("Paper safety vrf data: " + paperSafetyVRFData.address);
    ////console.log("Terrains contract data: " + terrainsContractData.address);
    ////console.log("Hounds data: " + houndsData.address);
    ////console.log("Race generator data: " + raceGeneratorData.address);
    ////console.log("Race methods: " + racesMethods.address);
    ////console.log("Race generator data: " + raceGeneratorData.address);    
    racesData = await RacesData.deploy(
      [
        paperSafetyVRFData.address,
        terrainsContractData.address,
        houndsData.address,
        raceGeneratorData.address,
        racesMethods.address,
        raceGeneratorData.address,
        500000000, // the race fee
        true // back-end generator for true
      ]
    );
    await racesData.deployed();
    ////console.log("Race data deployed at: " + racesData.address);

    await racesMethods.setGlobalParameters(
      [
        paperSafetyVRFData.address,
        terrainsContractData.address,
        houndsData.address,
        raceGeneratorData.address,
        racesMethods.address,
        raceGeneratorData.address,
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
      500000000, // the race fee
      true
    ]);

    const control = await racesMethods.control();
    ////console.log("Race methods control >> " + JSON.stringify(control));
    
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
      "0xB1A2BC2EC50000",
      "0x2386F26FC10000",
      "0x2386F26FC10000",
      "0x2386F26FC10000",
      "0x2386F26FC10000",
      [true]
    ]);

  });

});



describe("After deployment calls", function () {

  it("Terrains data set global parameters", async function () {
    await terrainsContractData.setGlobalParameters(terrainsContractMethods.address);
    const control = await terrainsContractData.methodsContractAddress();
    ////console.log("Terrains data >> " + JSON.stringify(control));
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
    const houndIdBefore = await houndsData.id();
    await houndsData.adminCreateHound([
      [
        0,
        0,
        0,
        0
      ],[
        10000000,
        10000000,
        100,
        1,
        100
      ],[
        1000,
        100000,
        1000,
        false
      ],[
        0,
        0,
        0,
        maleBoilerplateGene
      ],
      "",
      "",
      false,
      false
    ]);

    const houndIdAfter = await houndsData.id();
    expect(houndIdBefore !== houndIdAfter, "Hound creation problem");
  });

  it("Update hound stamina after creation", async function() {
    const houndIdBefore = await houndsData.id();
    const houndToWorkWith = Number(houndIdBefore)-1;
    const houndBefore = await houndsData.hound(houndToWorkWith);
    await houndsData.updateHoundStamina(houndToWorkWith);
    const houndAfter = await houndsData.hound(houndToWorkWith);
    expect(JSON.stringify(houndBefore) === JSON.stringify(houndAfter), "Hound stamin update on creation problem");
  });

  it("Update hound breeding status after creation", async function() {
    const houndIdBefore = await houndsData.id();
    const houndToWorkWith = Number(houndIdBefore)-1;
    const houndBefore = await houndsData.hound(houndToWorkWith);
    await houndsData.updateHoundBreeding(houndToWorkWith,10000000);
    const houndAfter = await houndsData.hound(houndToWorkWith);
    expect(JSON.stringify(houndBefore) === JSON.stringify(houndAfter), "Hound breeding update on creation problem");
  });

  it("Mint again", async function () {
    await houndsData.adminCreateHound([
      [
        0,
        0,
        0,
        0
      ],[
        10000000,
        10000000,
        100,
        1,
        100
      ],[
        1000,
        100000,
        1000,
        false
      ],[
        0,
        0,
        0,
        maleBoilerplateGene
      ],
      "",
      "",
      false,
      false
    ]);
  });

  it("Mint 10x hounds", async function () {
    for ( let i = 0 ; i < 10 ; ++i ) {
      await houndsData.adminCreateHound([
        [
          0,
          0,
          0,
          0
        ],[
          10000000,
          10000000,
          100,
          1,
          100
        ],[
          1000,
          100000,
          1000,
          false
        ],[
          0,
          0,
          0,
          maleBoilerplateGene
        ],
        "",
        "",
        false,
        false
      ]);
    }
  });

  it("Receiving hound data", async function () {

    const hound = await houndsData.hound(1);

    // Check the hound statistics field
    expect(hound[0] && hound[0].length === 4, "Not all hound statistics are received from contract");

    // Check the hound stamina field
    expect(hound[1].length === 5, "Not all hound stamina data has been received from contract");

    // Check the hound breeding field
    expect(hound[2].length === 4, "Not all hound breeding data has been received from contract");

    // Check the hound identity field
    expect(hound[3].length === 4, "Not all hound identity data has been received from contract");

    // Check the hound total fields
    expect(hound.length === 8, "Hound has been partially received from contract");

    const houndGene = hound[3][0];
    expect(houndGene.length > 0, "Hound getter mechanism problems");

  });

  it("Breed", async function () {

    const houndIdBefore = await houndsData.id();

    let maleId , femaleId ;
    for ( let i = 1 , l = houndIdBefore ; i < l ; ++i ) {

      const hound = await houndsData.hound(i);
      const houndGene = hound[3][0];

      expect(houndGene.length > 0, "Getting hounds gender problem");

      if ( houndGene[1] === 1 && !maleId ) {
        maleId = houndGene[1];
      }

      if ( houndGene[1] === 2 && !femaleId ) {
        femaleId = houndGene[1];
      }

    }


    const control = await commonIncubatorData.control();
    expect(control[0] === commonIncubatorMethods.address, "Common incubator data : bad common incubator methods address");
    expect(control[1] === paperSafetyVRFData.address, "Common incubator data : bad VRF address");
    expect(control[2] === geneticsData.address, "Common incubator data : bad genetics data address");
    expect(control[3] === "0x67657452", "Common incubator data : seconds to maturity");
    expect(maleId && femaleId, "No partners found for breeding");
    if ( maleId && femaleId ) {
      const houndMaleBefore = await houndsData.hound(maleId);
      const houndFemaleBefore = await houndsData.hound(femaleId);
      console.log("Male >> " + maleId + "\nFemale >> " + femaleId);
      await houndsData.breedHounds(maleId, femaleId, { value : "0xD529AE9E860000" });
      const houndMaleAfter = await houndsData.hound(maleId);
      const houndFemaleAfter = await houndsData.hound(femaleId);
      expect(JSON.stringify(houndMaleBefore) !== JSON.stringify(houndMaleAfter), "Hound male breeding status should be changed after breeding");
      expect(JSON.stringify(houndFemaleBefore) !== JSON.stringify(houndFemaleAfter), "Hound female breeding status should be changed after breeding");
    }

    const houndIdAfter = await houndsData.id();
    expect(houndIdBefore !== houndIdAfter, "Owned hound breeding problem");

  });


  it("Breed again", async function () {

    const houndIdBefore = await houndsData.id();

    let maleId , femaleId ;
    for ( let i = 1 , l = houndIdBefore ; i < l ; ++i ) {

      const hound = await houndsData.hound(i);
      const houndGene = hound[3][0];

      expect(houndGene.length > 0, "Getting hounds gender problem");

      if ( houndGene[1] === 1 && !maleId ) {
        maleId = houndGene[1];
      }

      if ( houndGene[1] === 2 && !femaleId ) {
        femaleId = houndGene[1];
      }

    }

    const control = await commonIncubatorData.control();
    expect(control[0] === commonIncubatorMethods.address, "Common incubator data : bad common incubator methods address");
    expect(control[1] === paperSafetyVRFData.address, "Common incubator data : bad VRF address");
    expect(control[2] === geneticsData.address, "Common incubator data : bad genetics data address");
    expect(control[3] === "0x67657452", "Common incubator data : seconds to maturity");

    expect(maleId && femaleId, "No partners found for breeding");
    if ( maleId && femaleId ) {
      const houndMaleBefore = await houndsData.hound(maleId);
      const houndFemaleBefore = await houndsData.hound(femaleId);
      try {
        await houndsData.breedHounds(maleId, femaleId, { value : "0xD529AE9E860000" });
        const houndMaleAfter = await houndsData.hound(maleId);
        const houndFemaleAfter = await houndsData.hound(femaleId);
        expect(JSON.stringify(houndMaleBefore) !== JSON.stringify(houndMaleAfter), "Hound male breeding status should be changed after breeding");
        expect(JSON.stringify(houndFemaleBefore) !== JSON.stringify(houndFemaleAfter), "Hound female breeding status should be changed after breeding");
        expect(false, "Hounds should not be able to breed again right away");
      } catch (err) {

      }
    }

    const houndIdAfter = await houndsData.id();
    expect(houndIdBefore !== houndIdAfter, "Owned hound breeding problem");

  });

});







describe("Breed with other hounds", function () {

  let ownedHound, otherHound;

  it("Mint your hound", async function () {
    const houndIdBefore = await houndsData.id();
    await houndsData.adminCreateHound([
      [
        0,
        0,
        0,
        0
      ],[
        10000000,
        10000000,
        100,
        1,
        100
      ],[
        1000,
        100000,
        1000,
        false
      ],[
        0,
        0,
        0,
        femaleBoilerplateGene
      ],
      "",
      "",
      false,
      false
    ]);

    let houndIdAfter = await houndsData.id();
    expect(houndIdBefore !== houndIdAfter, "Hound breeding problem");
    ownedHound = houndIdBefore;
  });

  it("Mint another hound", async function () {
    const [owner,otherOwner] = await ethers.getSigners();
    const houndIdBefore = await houndsData.id();
    await houndsData.adminCreateHound([
      [
        0,
        0,
        0,
        0
      ],[
        10000000,
        10000000,
        100,
        1,
        100
      ],[
        1000,
        100000,
        1000,
        false
      ],[
        0,
        0,
        0,
        femaleBoilerplateGene
      ],
      "",
      "",
      false,
      false
    ]);

    const houndIdAfter = await houndsData.id();
    expect(houndIdBefore !== houndIdAfter, "Hound breeding problem");
    /*
    await houndsData.safeTransferFrom(owner,otherOwner,houndIdBefore);
    */
    otherHound = houndIdBefore;
  });

  it("Breed again", async function () {

    const houndIdBefore = await houndsData.id();

    let maleId , femaleId ;
    for ( let i = 1 , l = houndIdBefore ; i < l ; ++i ) {

      const hound = await houndsData.hound(i);
      const houndGene = hound[3][0];

      expect(houndGene.length > 0, "Getting hounds gender problem");

      if ( houndGene[1] === 1 && !maleId ) {
        maleId = houndGene[1];
      }

      if ( houndGene[1] === 2 && !femaleId ) {
        femaleId = houndGene[1];
      }

    }

    const control = await commonIncubatorData.control();
    expect(control[0] === commonIncubatorMethods.address, "Common incubator data : bad common incubator methods address");
    expect(control[1] === paperSafetyVRFData.address, "Common incubator data : bad VRF address");
    expect(control[2] === geneticsData.address, "Common incubator data : bad genetics data address");
    expect(control[3] === "0x67657452", "Common incubator data : seconds to maturity");

    expect(maleId && femaleId, "No partners found for breeding");
    if ( maleId && femaleId ) {
      const houndMaleBefore = await houndsData.hound(maleId);
      const houndFemaleBefore = await houndsData.hound(femaleId);
      try {
        await houndsData.breedHounds(maleId, femaleId, { value : "0xD529AE9E860000" });
        const houndMaleAfter = await houndsData.hound(maleId);
        const houndFemaleAfter = await houndsData.hound(femaleId);
        expect(JSON.stringify(houndMaleBefore) !== JSON.stringify(houndMaleAfter), "Hound male breeding status should be changed after breeding");
        expect(JSON.stringify(houndFemaleBefore) !== JSON.stringify(houndFemaleAfter), "Hound female breeding status should be changed after breeding");
        expect(false, "Hounds should not be able to breed again right away");
      } catch (err) {

      }
    }

    const houndIdAfter = await houndsData.id();
    expect(houndIdBefore !== houndIdAfter, "Owned hound breeding problem");

  });

  it("Make hound available to breed", async function () {
    const houndId = await houndsData.id();
    await houndsData.putHoundForBreed(houndId-1,0,true);
  });

});






describe("Races", function () {

  it("Create terrain", async function () {
    
    let createTerrain = await terrainsContractData.createArena([
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