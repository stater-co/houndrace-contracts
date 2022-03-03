const hre = require("hardhat");
const address0 = "0x0000000000000000000000000000000000000000";
const maleBoilerplateGene = [ 1, 1, 8, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 9, 8, 2, 1, 4, 2, 9, 8, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 7, 7, 0, 2, 9, 1, 0, 9, 1, 1, 2, 1, 9, 0, 2, 2, 8, 5, 0, 1, 0, 8 ];
const femaleBoilerplateGene = [ 2, 1, 6, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 3, 1, 9, 1, 4, 2, 4, 7, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 1, 7, 2, 7, 9, 1, 0, 9, 1, 1, 2, 1, 0, 7, 2, 2, 8, 5, 9, 9, 0, 1 ];

async function main() {


  const Converters = await hre.ethers.getContractFactory("Converters");
  const converters = await Converters.deploy();
  await converters.deployed();
  console.log("Converters deployed to: ", converters.address);

  const Sortings = await hre.ethers.getContractFactory("Sortings");
  const sortings = await Sortings.deploy();
  await sortings.deployed();
  console.log("Sortings deployed to: ", sortings.address);
  
  const RandomnessVanillaMethods = await hre.ethers.getContractFactory("RandomnessVanillaMethods");
  const randomnessVanillaMethods = await RandomnessVanillaMethods.deploy();
  await randomnessVanillaMethods.deployed();
  console.log("RandomnessVanillaMethods deployed to: ", randomnessVanillaMethods.address);

  const RandomnessVanillaData = await hre.ethers.getContractFactory("RandomnessVanillaData");
  const randomnessVanillaData = await RandomnessVanillaData.deploy(randomnessVanillaMethods.address);
  await randomnessVanillaData.deployed();
  console.log("RandomnessVanillaData deployed to: ", randomnessVanillaData.address);

  const PaymentsMethods = await hre.ethers.getContractFactory("PaymentsMethods");
  const paymentsMethods = await PaymentsMethods.deploy([
    address0,
    []
  ]);
  await paymentsMethods.deployed();
  console.log("PaymentsMethods deployed to: ", paymentsMethods.address);

  const PaymentsData = await hre.ethers.getContractFactory("PaymentsData");
  const paymentsData = await PaymentsData.deploy([
    paymentsMethods.address,
    []
  ]);
  await paymentsData.deployed();
  console.log("PaymentsData deployed to: ", paymentsData.address);

  const Ogars = await hre.ethers.getContractFactory("HoundracePotions");
  const ogars = await Ogars.deploy("HoundracePotions", "HP");
  await ogars.deployed();
  console.log("Ogars Controlller deployed to: ", ogars.address);

  const ShopMethods = await hre.ethers.getContractFactory("ShopMethods");
  const shopMethods = await ShopMethods.deploy();
  await shopMethods.deployed();
  console.log("ShopMethods deployed to: ", shopMethods.address);

  const ShopData = await hre.ethers.getContractFactory("ShopData");
  const shopData = await ShopData.deploy([shopMethods.address]);
  await shopData.deployed();
  console.log("ShopsData deployed to: ", shopData.address);

  const ArenaContractMethods = await hre.ethers.getContractFactory("ArenasMethods");
  const arenaContractMethods = await ArenaContractMethods.deploy("HoundRace Terrains", "HrT");
  await arenaContractMethods.deployed();
  console.log("ArenaContractMethods deployed to: ", arenaContractMethods.address);

  const ArenaContractData = await hre.ethers.getContractFactory("ArenasData");
  const arenaData = await ArenaContractData.deploy(arenaContractMethods.address, "HoundRace Terrains", "HrT");
  await arenaData.deployed();
  console.log("ArenasData deployed to: ", arenaData.address);
  
  const GeneticsMethods = await hre.ethers.getContractFactory("GeneticsMethods");
  const geneticsMethods = await GeneticsMethods.deploy();
  await geneticsMethods.deployed();
  console.log("GeneticsMethods deployed to: ", geneticsMethods.address);

  const GeneticsData = await hre.ethers.getContractFactory("GeneticsData");
  const geneticsData = await GeneticsData.deploy([
    randomnessVanillaData.address,
    geneticsMethods.address,
    arenaData.address,
    maleBoilerplateGene,
    femaleBoilerplateGene,
    60,
    40,
    [2,6,10,14,18,22,26,30,34,38,42,46,50],
    [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
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

  const HoundsMethods = await hre.ethers.getContractFactory("HoundsMethods");
  const houndsMethods = await HoundsMethods.deploy([
    "Hounds Methods",
    "HM",
    [],
    address0,
    incubatorData.address,
    "0x4E514Af09D7674e2e2421F333f0bfb9af19dcDD8",
    shopData.address,
    paymentsData.address,
    "0x429D069189E0000",
    "0xB1A2BC2EC50000",
    "0xB1A2BC2EC50000",
    "0x2386F26FC10000",
    "0x2386F26FC10000"
  ]);
  await houndsMethods.deployed();
  console.log("HoundsMethods deployed to: ", houndsMethods.address);

  const HoundsData = await hre.ethers.getContractFactory("HoundsData");
  const houndsData = await HoundsData.deploy([
    "Hounds Factory",
    "HF",
    [],
    houndsMethods.address,
    incubatorData.address,
    "0x4E514Af09D7674e2e2421F333f0bfb9af19dcDD8",
    shopData.address,
    paymentsData.address,
    "0x429D069189E0000",
    "0xB1A2BC2EC50000",
    "0xB1A2BC2EC50000",
    "0x2386F26FC10000",
    "0x2386F26FC10000"
  ]);
  await houndsData.deployed();
  console.log("HoundsData deployed to: ", houndsData.address);

  const RaceGeneratorMethods = await hre.ethers.getContractFactory("RaceGeneratorMethods", {
    libraries: {
      Converters: converters.address,
      Sortings: sortings.address
    }
  });
  const raceGeneratorMethods = await RaceGeneratorMethods.deploy();
  await raceGeneratorMethods.deployed();
  console.log("RaceGeneratorMethods deployed to: ", raceGeneratorMethods.address);

  const RaceGeneratorData = await hre.ethers.getContractFactory("RaceGeneratorData");
  const raceGeneratorData = await RaceGeneratorData.deploy(
    [
      randomnessVanillaData.address,
      arenaData.address,
      houndsData.address,
      raceGeneratorMethods.address,
      raceGeneratorMethods.address,
      raceGeneratorMethods.address
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
      arenaData.address,
      houndsData.address,
      racesMethods.address,
      racesMethods.address,
      racesMethods.address,
      paymentsData.address,
      500000000,
      true
    ]
  );
  await racesData.deployed();
  console.log("RacesData deployed to: ", racesData.address);

  try {
    await raceGeneratorData.setGlobalParameters(
      [
        randomnessVanillaData.address,
        arenaData.address,
        houndsData.address,
        racesData.address,
        raceGeneratorMethods.address,
        raceGeneratorMethods.address,
        paymentsData.address,
        500000000,
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

    await houndsData.adminCreateHound([
      [0,0,0,0],
      [10000000,10000000,100,1,100],
      [1000,0,1000,false],
      [0,0,0,femaleBoilerplateGene],
      "Hound #1",
      "Hound #1 URL",
      false,
      false
    ]);

  } catch ( err ) {
    console.error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: randomnessVanillaMethods.address
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: paymentsMethods.address,
      constructorArguments: [
        address0,
        []
      ]
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: randomnessVanillaData.address,
      constructorArguments: [
        randomnessVanillaMethods.address
      ]
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: ogars.address,
      constructorArguments: [
        "HoundracePotions", "HP"
      ]
    });
  } catch (err) {
    console.error(err);
  }


  
  try {
    await hre.run("verify:verify", {
      address: arenaContractMethods.address,
      constructorArguments: [
        "HoundRace Terrains",
        "HrT"
      ]
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: converters.address
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: arenaData.address,
      constructorArguments: [
        arenaContractMethods.address,
        "HoundRace Terrains",
        "HrT"
      ]
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: houndsMethods.address,
      constructorArguments: [
        [
          "Hounds Factory",
          "HF",
          [],
          houndsMethods.address,
          incubatorData.address,
          "0x4E514Af09D7674e2e2421F333f0bfb9af19dcDD8",
          shopData.address,
          paymentsData.address,
          "0x429D069189E0000",
          "0xB1A2BC2EC50000",
          "0xB1A2BC2EC50000",
          "0x2386F26FC10000",
          "0x2386F26FC10000"
        ]
      ]
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: sortings.address
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: houndsData.address,
      constructorArguments: [
        [
          "Hounds Factory",
          "HF",
          [],
          houndsMethods.address,
          incubatorData.address,
          "0x4E514Af09D7674e2e2421F333f0bfb9af19dcDD8",
          shopData.address,
          "0x429D069189E0000",
          "0xB1A2BC2EC50000",
          "0xB1A2BC2EC50000",
          "0x2386F26FC10000",
          "0x2386F26FC10000"
        ]
      ]
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: racesMethods.address
    });
  } catch (err) {
    console.error(err);
  }

  try {
    console.log("We now deploy the shop methods");
    await hre.run("verify:verify", {
      address: shopMethods.address
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: paymentsData.address,
      constructorArguments: [
        [
          paymentsMethods.address,
          []
        ]
      ]
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: racesData.address,
      constructorArguments: [
        [
          randomnessVanillaData.address,
          arenaData.address,
          houndsData.address,
          racesMethods.address,
          racesMethods.address,
          racesMethods.address,
          paymentsData.address,
          "0x2386F26FC10000",
          true
        ]
      ]
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: geneticsMethods.address
    });
  } catch (err) {
    console.error(err);
  }

  try {
    console.log("We now deploy the shop data");
    await hre.run("verify:verify", {
      address: shopData.address,
      constructorArguments: [
        [
          shopMethods.address
        ]
      ]
    });
  } catch (err) {
    console.error(err);
  }

  try {
    console.log("We now deploy the genetics data");
    await hre.run("verify:verify", {
      address: geneticsData.address,
      constructorArguments: [
        [
          randomnessVanillaData.address,
          geneticsMethods.address,
          arenaData.address,
          maleBoilerplateGene,
          femaleBoilerplateGene,
          60,
          40,
          [2,6,10,14,18,22,26,30,34,38,42,46,50],
          [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
        ]
      ]
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: raceGeneratorMethods.address
    });
  } catch (err) {
    console.error(err);
  }

  try {
    console.log("We now deploy the race generator data");
    await hre.run("verify:verify", {
      address: raceGeneratorData.address,
      constructorArguments: [
        [
          randomnessVanillaData.address,
          arenaData.address,
          houndsData.address,
          raceGeneratorMethods.address,
          raceGeneratorMethods.address,
          raceGeneratorMethods.address
        ]
      ]
    });
  } catch (err) {
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