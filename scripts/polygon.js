const hre = require("hardhat");
const maleBoilerplateGene = [ 1, 1, 8, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 9, 8, 2, 1, 4, 2, 9, 8, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 7, 7, 0, 2, 9, 1, 0, 9, 1, 1, 2, 1, 9, 0, 2, 2, 8, 5, 9, 3, 6, 1, 1, 7, 8, 2, 1, 0, 9, 9, 0, 5, 2, 3, 1, 8, 7, 4, 2, 3, 9, 0, 1, 5, 6, 1 ];
const femaleBoilerplateGene = [ 2, 1, 6, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 3, 1, 9, 1, 4, 2, 4, 7, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 1, 7, 2, 7, 9, 1, 0, 9, 1, 1, 2, 1, 0, 7, 2, 2, 8, 5, 9, 3, 6, 1, 1, 7, 8, 2, 1, 0, 9, 9, 0, 5, 2, 3, 1, 8, 7, 4, 2, 3, 9, 0, 1, 5, 6, 1 ];
const addresss0 = "";

async function main() {

  const Transferrer = await hre.ethers.getContractFactory("Transferrer");
  const transferrer = await Transferrer.deploy();
  await transferrer.deployed();
  console.log("Transferrer deployed to: ", transferrer.address);

  const Withdrawer = await hre.ethers.getContractFactory("Withdrawer");
  const withdrawer = await Withdrawer.deploy();
  await withdrawer.deployed();
  console.log("Withdrawer deployed to: ", withdrawer.address);

  const RandomnessVanillaMethods = await hre.ethers.getContractFactory("RandomnessVanillaMethods");
  const randomnessVanillaMethods = await RandomnessVanillaMethods.deploy();
  await randomnessVanillaMethods.deployed();
  console.log("RandomnessVanillaMethods deployed to: ", randomnessVanillaMethods.address);

  const RandomnessVanillaData = await hre.ethers.getContractFactory("RandomnessVanillaData");
  const randomnessVanillaData = await RandomnessVanillaData.deploy(randomnessVanillaMethods.address);
  await randomnessVanillaData.deployed();
  console.log("RandomnessVanillaData deployed to: ", randomnessVanillaData.address);

  const Ogars = await hre.ethers.getContractFactory("Ogars");
  const ogars = await Ogars.deploy("OGars", "OG");
  await ogars.deployed();
  console.log("Ogars Controlller deployed to: ", ogars.address);

  const TerrainsContractMethods = await hre.ethers.getContractFactory("TerrainsContractMethods");
  const terrainsContractMethods = await TerrainsContractMethods.deploy();
  await terrainsContractMethods.deployed();
  console.log("TerrainsContractMethods deployed to: ", terrainsContractMethods.address);

  const TerrainsContractData = await hre.ethers.getContractFactory("TerrainsContractData");
  const terrainsContractData = await TerrainsContractData.deploy(terrainsContractMethods.address);
  await terrainsContractData.deployed();
  console.log("TerrainsContractData deployed to: ", terrainsContractData.address);

  await terrainsContractData.createTerrain([
    3, // surface
    1400, // distance
    2 // weather
  ]);

  await terrainsContractData.createTerrain([
    2, // surface
    900, // distance
    3 // weather
  ]);

  await terrainsContractData.createTerrain([
    1, // surface
    1500, // distance
    1 // weather
  ]);
  
  const GeneticsMethods = await hre.ethers.getContractFactory("GeneticsMethods");
  const geneticsMethods = await GeneticsMethods.deploy();
  await geneticsMethods.deployed();
  console.log("GeneticsMethods deployed to: ", geneticsMethods.address);

  const GeneticsData = await hre.ethers.getContractFactory("GeneticsData");
  const geneticsData = await GeneticsData.deploy([
    randomnessVanillaData.address,
    geneticsMethods.address,
    terrainsContractData.address,
    maleBoilerplateGene,
    femaleBoilerplateGene,
    60,
    40
  ]);
  await geneticsData.deployed();
  console.log("GeneticsData deployed to: ", geneticsData.address);

  const IncubatorMethods = await hre.ethers.getContractFactory("IncubatorMethods");
  const incubatorMethods = await IncubatorMethods.deploy();
  await incubatorMethods.deployed();
  console.log("IncubatorMethods deployed to: ", incubatorMethods.address);

  const IncubatorData = await hre.ethers.getContractFactory("IncubatorData");
  const incubatorData = await IncubatorData.deploy([
    incubatorMethods.address,
    randomnessVanillaData.address,
    geneticsData.address,
    0
  ]);
  await incubatorData.deployed();
  console.log("IncubatorData deployed to: ", incubatorData.address);

  const HoundsMethods = await hre.ethers.getContractFactory("HoundsMethods",{
    libraries: {
      Transferrer: transferrer.address
    }
  });
  const houndsMethods = await HoundsMethods.deploy(
    "Hounds Factory",
    "HF"
  );
  await houndsMethods.deployed();
  console.log("HoundsMethods deployed to: ", houndsMethods.address);

  const HoundsData = await hre.ethers.getContractFactory("HoundsData");
  const houndsData = await HoundsData.deploy([
    "Hounds Factory",
    "HF",
    [],
    houndsMethods.address,
    incubatorData.address,
    "0x429D069189E0000",
    "0xB1A2BC2EC50000",
    "0xB1A2BC2EC50000"
  ]);
  await houndsData.deployed();
  console.log("HoundsData deployed to: ", houndsData.address);

  const RaceGeneratorMethods = await hre.ethers.getContractFactory("RaceGeneratorMethods",{
    libraries: {
      Transferrer : transferrer.address
    }
  });
  const raceGeneratorMethods = await RaceGeneratorMethods.deploy();
  await raceGeneratorMethods.deployed();
  console.log("RaceGeneratorMethods deployed to: ", raceGeneratorMethods.address);

  const RaceGeneratorData = await hre.ethers.getContractFactory("RaceGeneratorData");
  const raceGeneratorData = await RaceGeneratorData.deploy(
    [
      randomnessVanillaData.address,
      terrainsContractData.address,
      houndsData.address,
      raceGeneratorMethods.address,
      raceGeneratorMethods.address,
      raceGeneratorMethods.address,
      true
    ]
  );
  await raceGeneratorData.deployed();
  console.log("RaceGeneratorData deployed to: ", raceGeneratorData.address);

  const RacesMethods = await hre.ethers.getContractFactory("RacesMethods");
  const racesMethods = await RacesMethods.deploy();
  await racesMethods.deployed();
  console.log("RacesMethods deployed to: ", racesMethods.address);

  const RacesData = await hre.ethers.getContractFactory("RacesData");
  const racesData = await RacesData.deploy(
    [
      randomnessVanillaData.address,
      terrainsContractData.address,
      houndsData.address,
      racesMethods.address,
      racesMethods.address,
      racesMethods.address,
      true
    ]
  );
  await racesData.deployed();
  console.log("RacesData deployed to: ", racesData.address);

  try {
    await raceGeneratorData.setGlobalParameters(
      [
        randomnessVanillaData.address,
        terrainsContractData.address,
        houndsData.address,
        racesData.address,
        raceGeneratorMethods.address,
        raceGeneratorMethods.address,
        true
      ] 
    );
    console.log("setGlobalParameters called successfully");
  } catch ( err ) {
    console.error(err);
  }

  

  try {
    // Create a queue
    await racesData.createQueues([
      [
        1, // terrain
        "0x0000000000000000000000000000000000000000",
        5000000000,
        5,
        10
      ]
    ]);
  } catch ( err ) {
    console.error(err);
  }

  try {
    // Creating 10 hounds to compete
    // And sign them into a queue
    await houndsData.adminCreateHound([[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false],[[0,0,0,0],[10000000,10000000,100,1,100],[1000,0,1000,false],[maleBoilerplateGene,0,maleBoilerplateGene,femaleBoilerplateGene],"Hound #","",false,false]]);

    // Avoid adding the last hound into the queue
    if ( i < 9 )
      await racesData.enqueue(1,i+1,{ value : 5000000000 });

  } catch ( err ) {
    console.error(err);
  }

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});