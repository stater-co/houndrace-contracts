const { debug, info, error } = require("../plugins/logger.js");
const cliProgress = require('cli-progress');

// create new container
const multibar = new cliProgress.MultiBar({
  clearOnComplete: false,
  hideCursor: true

}, cliProgress.Presets.shades_classic);

const deployments = multibar.create(30,0);
const configurations = multibar.create(18,0);
const recommendedCalls = multibar.create(17,0);
const verifications = multibar.create(30,0);


const { 
  deployedAt, globalParametersSetAt, 
  queuesCreation, houndId, 
  houndInitialized, breedHounds 
} = require("../plugins/message-formats.js");
const hre = require("hardhat");
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
  true,
  false
];
const defaultQueues = [["Test queue","0x0000000000000000000000000000000000000000",[],1,5000000000,0,0,1,10]];



async function main() {

  const Converters = await hre.ethers.getContractFactory("Converters");
  const converters = await Converters.deploy();
  await converters.deployed();
  info(deployedAt("Converters",converters.address));
  deployments.increment();

  const Sortings = await hre.ethers.getContractFactory("Sortings");
  const sortings = await Sortings.deploy();
  await sortings.deployed();
  info(deployedAt("Sortings",sortings.address));
  deployments.increment();
  
  const RandomnessZerocost = await hre.ethers.getContractFactory("RandomnessZerocost");
  const randomnessZerocost = await RandomnessZerocost.deploy([address0]);
  await randomnessZerocost.deployed();
  info(deployedAt("Randomness Zerocost",randomnessZerocost.address));
  deployments.increment();

  try {
    await hre.run("verify:verify", {
      address: randomness.address
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }

  const Randomness = await hre.ethers.getContractFactory("Randomness");
  const randomness = await Randomness.deploy([randomnessZerocost.address]);
  await randomness.deployed();
  info(deployedAt("Randomness",randomness.address));
  deployments.increment();

  await randomnessZerocost.setGlobalParameters([randomness.address]);
  info(globalParametersSetAt("Randomness Zerocost",[randomness.address]));
  configurations.increment();

  const PaymentsMethods = await hre.ethers.getContractFactory("PaymentsMethods");
  const paymentsMethods = await PaymentsMethods.deploy([address0,[]]);
  await paymentsMethods.deployed();
  info(deployedAt("Payments Methods",paymentsMethods.address));
  deployments.increment();

  const Payments = await hre.ethers.getContractFactory("Payments");
  const payments = await Payments.deploy([paymentsMethods.address,[]]);
  await payments.deployed();
  info(deployedAt("Payments",payments.address));
  deployments.increment();

  await paymentsMethods.setGlobalParameters([payments.address,[]]);
  info(globalParametersSetAt("Payments Methods",[payments.address,[]]));
  configurations.increment();

  const HoundracePotions = await hre.ethers.getContractFactory("HoundracePotions");
  const houndracePotions = await HoundracePotions.deploy("HoundracePotions", "HP");
  await houndracePotions.deployed();
  info(deployedAt("Houndrace Potions",houndracePotions.address));
  deployments.increment();

  const ShopZerocost = await hre.ethers.getContractFactory("ShopZerocost");
  const shopZerocost = await ShopZerocost.deploy([address0,address0,address0]);
  await shopZerocost.deployed();
  info(deployedAt("Shop Zerocost",shopZerocost.address));
  deployments.increment();

  const ShopRestricted = await hre.ethers.getContractFactory("ShopRestricted");
  const shopRestricted = await ShopRestricted.deploy([address0,address0,address0]);
  await shopRestricted.deployed();
  info(deployedAt("Shop Restricted",shopRestricted.address));
  deployments.increment();

  const ShopMethods = await hre.ethers.getContractFactory("ShopMethods");
  const shopMethods = await ShopMethods.deploy([address0,address0,address0]);
  await shopMethods.deployed();
  info(deployedAt("Shop Methods",shopMethods.address));
  deployments.increment();

  const Shop = await hre.ethers.getContractFactory("Shop");
  const shop = await Shop.deploy([shopMethods.address,shopZerocost.address,shopRestricted.address]);
  await shop.deployed();
  info(deployedAt("Shop",shop.address));
  deployments.increment();

  await shopZerocost.setGlobalParameters([shopMethods.address,shopZerocost.address,shopRestricted.address]);
  info(globalParametersSetAt("Shop Zerocost",[shopMethods.address,shopZerocost.address,shopRestricted.address]));
  configurations.increment();
  await shopRestricted.setGlobalParameters([shopMethods.address,shopZerocost.address,shopRestricted.address]);
  info(globalParametersSetAt("Shop Restricted",[shopMethods.address,shopZerocost.address,shopRestricted.address]));
  configurations.increment();
  await shopMethods.setGlobalParameters([shopMethods.address,shopZerocost.address,shopRestricted.address]);
  info(globalParametersSetAt("Shop Methods",[shopMethods.address,shopZerocost.address,shopRestricted.address]));
  configurations.increment();

  const ArenasZerocost = await hre.ethers.getContractFactory("ArenasZerocost");
  const arenasZerocost = await ArenasZerocost.deploy(["HoundRace Arenas", "HRA", address0, address0]);
  await arenasZerocost.deployed();
  info(deployedAt("Arenas Zerocost",arenasZerocost.address));
  deployments.increment();

  const ArenasRestricted = await hre.ethers.getContractFactory("ArenasRestricted");
  const arenasRestricted = await ArenasRestricted.deploy(["HoundRace Arenas", "HRA", address0, address0]);
  await arenasRestricted.deployed();
  info(deployedAt("Arenas Restricted",arenasRestricted.address));
  deployments.increment();

  const Arenas = await hre.ethers.getContractFactory("Arenas");
  const arenas = await Arenas.deploy(["HoundRace Arenas", "HRA", arenasZerocost.address,arenasRestricted.address]);
  await arenas.deployed();
  info(deployedAt("Arenas",arenas.address));
  deployments.increment();

  await arenasZerocost.setGlobalParameters(["HoundRace Arenas", "HRA", arenasZerocost.address,arenasRestricted.address]);
  info(globalParametersSetAt("Arenas Zerocost",["HoundRace Arenas", "HRA", arenasZerocost.address,arenasRestricted.address]));
  configurations.increment();
  await arenasRestricted.setGlobalParameters(["HoundRace Arenas", "HRA", arenasZerocost.address,arenasRestricted.address]);
  info(globalParametersSetAt("Arenas Restricted",["HoundRace Arenas", "HRA", arenasZerocost.address,arenasRestricted.address]));
  configurations.increment();

  const GeneticsZerocost = await hre.ethers.getContractFactory("GeneticsZerocost");
  const geneticsZerocost = await GeneticsZerocost.deploy([
    randomness.address,
    address0,
    arenas.address,
    maleBoilerplateGene,
    femaleBoilerplateGene,
    60,
    40,
    [2,6,10,14,18,22,26,30,34,38,42,46,50],
    [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
  ]);
  await geneticsZerocost.deployed();
  info(deployedAt("Genetics Zerocost",geneticsZerocost.address));
  deployments.increment();

  const Genetics = await hre.ethers.getContractFactory("Genetics");
  const genetics = await Genetics.deploy([
    randomness.address,
    geneticsZerocost.address,
    arenas.address,
    maleBoilerplateGene,
    femaleBoilerplateGene,
    60,
    40,
    [2,6,10,14,18,22,26,30,34,38,42,46,50],
    [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
  ]);
  await genetics.deployed();
  info(deployedAt("Genetics",genetics.address));
  deployments.increment();

  const IncubatorMethods = await hre.ethers.getContractFactory("IncubatorMethods");
  const incubatorMethods = await IncubatorMethods.deploy([
    address0,
    address0,
    address0,
    "0x67657452"
  ]);
  await incubatorMethods.deployed();
  info(deployedAt("Incubator Methods",incubatorMethods.address));
  deployments.increment();

  const Incubator = await hre.ethers.getContractFactory("Incubator");
  const incubator = await Incubator.deploy([
    incubatorMethods.address,
    randomness.address,
    genetics.address,
    "0x67657452"
  ]);
  await incubator.deployed();
  info(deployedAt("Incubator",incubator.address));
  deployments.increment();

  await incubatorMethods.setGlobalParameters([
    incubatorMethods.address,
    randomness.address,
    genetics.address,
    "0x67657452"
  ]);
  info(globalParametersSetAt("Incubator Methods",[
    incubatorMethods.address,
    randomness.address,
    genetics.address,
    "0x67657452"
  ]));
  configurations.increment();

  const HoundsZerocost = await hre.ethers.getContractFactory("HoundsZerocost");
  const houndsZerocost = await HoundsZerocost.deploy([
    "HoundRace",
    "HR",
    [String(process.env.ETH_ACCOUNT_PUBLIC_KEY)],
    [
      address0,
      String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
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
  await houndsZerocost.deployed();
  info(deployedAt("Hounds Zerocost",houndsZerocost.address));
  deployments.increment();

  const HoundsRestricted = await hre.ethers.getContractFactory("HoundsRestricted");
  const houndsRestricted = await HoundsRestricted.deploy([
    "HoundRace",
    "HR",
    [String(process.env.ETH_ACCOUNT_PUBLIC_KEY)],
    [
      address0,
      String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
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
  await houndsRestricted.deployed();
  info(deployedAt("Hounds Restricted",houndsRestricted.address));
  deployments.increment();

  const HoundsModifier = await hre.ethers.getContractFactory("HoundsModifier");
  const houndsModifier = await HoundsModifier.deploy([
    "HoundRace",
    "HR",
    [String(process.env.ETH_ACCOUNT_PUBLIC_KEY)],
    [
      address0,
      String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
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
  await houndsModifier.deployed();
  info(deployedAt("Hounds Modifier",houndsModifier.address));
  deployments.increment();

  const HoundsMinter = await hre.ethers.getContractFactory("HoundsMinter");
  const houndsMinter = await HoundsMinter.deploy([
    "HoundRace",
    "HR",
    [String(process.env.ETH_ACCOUNT_PUBLIC_KEY)],
    [
      address0,
      String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
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
  await houndsMinter.deployed();
  info(deployedAt("Hounds Minter",houndsMinter.address));
  deployments.increment();

  const Hounds = await hre.ethers.getContractFactory("Hounds");
  const hounds = await Hounds.deploy([
    "HoundRace",
    "HR",
    [String(process.env.ETH_ACCOUNT_PUBLIC_KEY)],
    [
      incubator.address,
      String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
      payments.address,
      houndsRestricted.address,
      houndsMinter.address,
      houndsZerocost.address,
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
  await hounds.deployed();
  info(deployedAt("Hounds",hounds.address));
  deployments.increment();

  await houndsZerocost.setGlobalParameters([
    "HoundRace",
    "HR",
    [],
    [
      incubator.address,
      String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
      payments.address,
      houndsRestricted.address,
      houndsMinter.address,
      houndsZerocost.address,
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
  info(globalParametersSetAt("Hounds Zerocost",[
    "HoundRace",
    "HR",
    [],
    [
      incubator.address,
      String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
      payments.address,
      houndsRestricted.address,
      houndsMinter.address,
      houndsZerocost.address,
      houndsModifier.address,
      shop.address
    ],[
      "0xB1A2BC2EC50000",
      "0x2386F26FC10000",
      "0x2386F26FC10000",
      "0x2386F26FC10000",
      "0x2386F26FC10000"
    ]
  ]));
  configurations.increment();

  await houndsRestricted.setGlobalParameters([
    "HoundRace",
    "HR",
    [hounds.address,houndsRestricted.address,houndsMinter.address],
    [
      incubator.address,
      String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
      payments.address,
      houndsRestricted.address,
      houndsMinter.address,
      houndsZerocost.address,
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
  info(globalParametersSetAt("Hounds Restricted",[
    "HoundRace",
    "HR",
    [],
    [
      incubator.address,
      String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
      payments.address,
      houndsRestricted.address,
      houndsMinter.address,
      houndsZerocost.address,
      houndsModifier.address,
      shop.address
    ],[
      "0xB1A2BC2EC50000",
      "0x2386F26FC10000",
      "0x2386F26FC10000",
      "0x2386F26FC10000",
      "0x2386F26FC10000"
    ]
  ]));
  configurations.increment();

  await houndsModifier.setGlobalParameters([
    "HoundRace",
    "HR",
    [hounds.address,houndsRestricted.address,houndsMinter.address],
    [
      incubator.address,
      String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
      payments.address,
      houndsRestricted.address,
      houndsMinter.address,
      houndsZerocost.address,
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
  info(globalParametersSetAt("Hounds Modifier",[
    "HoundRace",
    "HR",
    [],
    [
      incubator.address,
      String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
      payments.address,
      houndsRestricted.address,
      houndsMinter.address,
      houndsZerocost.address,
      houndsModifier.address,
      shop.address
    ],[
      "0xB1A2BC2EC50000",
      "0x2386F26FC10000",
      "0x2386F26FC10000",
      "0x2386F26FC10000",
      "0x2386F26FC10000"
    ]
  ]));
  configurations.increment();

  await houndsMinter.setGlobalParameters([
    "HoundRace",
    "HR",
    [hounds.address,houndsRestricted.address,houndsMinter.address],
    [
      incubator.address,
      String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
      payments.address,
      houndsRestricted.address,
      houndsMinter.address,
      houndsZerocost.address,
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
  info(globalParametersSetAt("Hounds Minter",[
    "HoundRace",
    "HR",
    [],
    [
      incubator.address,
      String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
      payments.address,
      houndsRestricted.address,
      houndsMinter.address,
      houndsZerocost.address,
      houndsModifier.address,
      shop.address
    ],[
      "0xB1A2BC2EC50000",
      "0x2386F26FC10000",
      "0x2386F26FC10000",
      "0x2386F26FC10000",
      "0x2386F26FC10000"
    ]
  ]));
  configurations.increment();

  const RacesZeroCost = await hre.ethers.getContractFactory("RacesZeroCost");
  const racesZeroCost = await RacesZeroCost.deploy([
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
  await racesZeroCost.deployed();
  info(deployedAt("Races Zerocost",racesZeroCost.address));
  deployments.increment();

  const RacesRestricted = await hre.ethers.getContractFactory("RacesRestricted");
  const racesRestricted = await RacesRestricted.deploy([
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
  await racesRestricted.deployed();
  info(deployedAt("Races Restricted",racesRestricted.address));
  deployments.increment();

  const RacesMethods = await hre.ethers.getContractFactory("RacesMethods");
  const racesMethods = await RacesMethods.deploy([
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
  await racesMethods.deployed();
  info(deployedAt("Races Methods",racesMethods.address));
  deployments.increment();

  const Races = await hre.ethers.getContractFactory("Races");
  const races = await Races.deploy([
    randomness.address,
    arenas.address,
    hounds.address,
    racesMethods.address,
    address0,
    payments.address,
    racesRestricted.address,
    racesZeroCost.address,
    500000000,
    true
  ]);
  await races.deployed();
  info(deployedAt("Races",races.address));
  deployments.increment();

  await racesZeroCost.setGlobalParameters([
    randomness.address,
    arenas.address,
    hounds.address,
    racesMethods.address,
    address0,
    payments.address,
    racesRestricted.address,
    racesZeroCost.address,
    500000000,
    true
  ]);
  info(globalParametersSetAt("Races Zerocost",[
    randomness.address,
    arenas.address,
    hounds.address,
    racesMethods.address,
    address0,
    payments.address,
    racesRestricted.address,
    racesZeroCost.address,
    500000000,
    true
  ]));
  configurations.increment();

  await racesRestricted.setGlobalParameters([
    randomness.address,
    arenas.address,
    hounds.address,
    racesMethods.address,
    address0,
    payments.address,
    racesRestricted.address,
    racesZeroCost.address,
    500000000,
    true
  ]);
  info(globalParametersSetAt("Races Restricted",[
    randomness.address,
    arenas.address,
    hounds.address,
    racesMethods.address,
    address0,
    payments.address,
    racesRestricted.address,
    racesZeroCost.address,
    500000000,
    true
  ]));
  configurations.increment();

  await racesMethods.setGlobalParameters([
    randomness.address,
    arenas.address,
    hounds.address,
    racesMethods.address,
    address0,
    payments.address,
    racesRestricted.address,
    racesZeroCost.address,
    500000000,
    true
  ]);
  info(globalParametersSetAt("Races Methods",[
    randomness.address,
    arenas.address,
    hounds.address,
    racesMethods.address,
    address0,
    payments.address,
    racesRestricted.address,
    racesZeroCost.address,
    500000000,
    true
  ]));
  configurations.increment();

  const GeneratorZerocost = await hre.ethers.getContractFactory("GeneratorZerocost", {
    libraries: {
      Sortings: sortings.address
    }
  });
  const generatorZerocost = await GeneratorZerocost.deploy([
    address0,
    address0,
    address0,
    address0,
    address0,
    address0,
    address0
  ]);
  await generatorZerocost.deployed();
  info(deployedAt("Generator Zerocost",generatorZerocost.address));
  deployments.increment();

  const GeneratorMethods = await hre.ethers.getContractFactory("GeneratorMethods", {
    libraries: {
      Converters: converters.address
    }
  });
  const generatorMethods = await GeneratorMethods.deploy([
    address0,
    address0,
    address0,
    address0,
    address0,
    address0,
    address0
  ]);
  await generatorMethods.deployed();
  info(deployedAt("Generator Methods",generatorMethods.address));
  deployments.increment();

  const Generator = await hre.ethers.getContractFactory("Generator");
  const generator = await Generator.deploy([
    randomness.address,
    arenas.address,
    hounds.address,
    races.address,
    generatorMethods.address,
    payments.address,
    generatorZerocost.address
  ]);
  await generator.deployed();
  info(deployedAt("Generator",generator.address));
  deployments.increment();

  await generatorZerocost.setGlobalParameters([
    randomness.address,
    arenas.address,
    hounds.address,
    races.address,
    generatorMethods.address,
    payments.address,
    generatorZerocost.address
  ]);
  info(globalParametersSetAt("Generator Zerocost",[
    randomness.address,
    arenas.address,
    hounds.address,
    races.address,
    generatorMethods.address,
    payments.address,
    generatorZerocost.address
  ]));
  configurations.increment();

  await generatorMethods.setGlobalParameters([
    randomness.address,
    arenas.address,
    hounds.address,
    races.address,
    generatorMethods.address,
    payments.address,
    generatorZerocost.address
  ]);
  info(globalParametersSetAt("Generator Methods",[
    randomness.address,
    arenas.address,
    hounds.address,
    races.address,
    generatorMethods.address,
    payments.address,
    generatorZerocost.address
  ]));
  configurations.increment();

  await races.setGlobalParameters(
    [
      randomness.address,
      arenas.address,
      hounds.address,
      racesMethods.address,
      generator.address,
      payments.address,
      racesRestricted.address,
      racesZeroCost.address,
      500000000,
      true
    ] 
  );
  info(globalParametersSetAt("Races",[
    randomness.address,
    arenas.address,
    hounds.address,
    racesMethods.address,
    generator.address,
    payments.address,
    racesRestricted.address,
    racesZeroCost.address,
    500000000,
    true
  ]));
  configurations.increment();

  await races.createQueues(defaultQueues);
  info(queuesCreation(defaultQueues));
  recommendedCalls.increment();

  let id = await hounds.id();
  debug(houndId(id));
  recommendedCalls.increment();

  await hounds.initializeHound(0,defaultHound);
  info(houndInitialized(0,defaultHound));
  recommendedCalls.increment();

  id = await hounds.id();
  debug(houndId(id));
  recommendedCalls.increment();

  await hounds.initializeHound(0,defaultHound);
  info(houndInitialized(0,defaultHound));
  recommendedCalls.increment();

  id = await hounds.id();
  debug(houndId(id));
  recommendedCalls.increment();

  await hounds.initializeHound(0,defaultHound);
  info(houndInitialized(0,defaultHound));
  recommendedCalls.increment();

  id = await hounds.id();
  debug(houndId(id));
  recommendedCalls.increment();

  await hounds.initializeHound(0,defaultHound);
  info(houndInitialized(0,defaultHound));
  recommendedCalls.increment();

  id = await hounds.id();
  debug(houndId(id));
  recommendedCalls.increment();

  await hounds.breedHounds(1,2,{ value: "0xD529AE9E860000" });
  info(breedHounds(1,2,"0xD529AE9E860000"));
  recommendedCalls.increment();

  id = await hounds.id();
  debug(houndId(id));
  recommendedCalls.increment();

  await hounds.breedHounds(3,4,{ value: "0xD529AE9E860000" });
  info(breedHounds(3,4,"0xD529AE9E860000"));
  recommendedCalls.increment();
  
  id = await hounds.id();
  debug(houndId(id));
  recommendedCalls.increment();

  await hounds.initializeHound(0,defaultHound);
  info(houndInitialized(0,defaultHound));
  recommendedCalls.increment();

  await hounds.initializeHound(5,defaultHound);
  info(houndInitialized(5,defaultHound));
  recommendedCalls.increment();

  await hounds.initializeHound(6,defaultHound);
  info(houndInitialized(6,defaultHound));
  recommendedCalls.increment();
  


  try {
    await hre.run("verify:verify", {
      address: converters.address
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: sortings.address
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: randomnessZerocost.address,
      constructorArguments: [
        [
          address0
        ]
      ]
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: randomness.address,
      constructorArguments: [
        [
          randomnessZerocost.address
        ]
      ]
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }
  
  try {
    await hre.run("verify:verify", {
      address: paymentsMethods.address,
      constructorArguments: [
        [
          address0,[]
        ]
      ]
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }
  
  try {
    await hre.run("verify:verify", {
      address: payments.address,
      constructorArguments: [
        [
          paymentsMethods.address,[]
        ]
      ]
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: houndracePotions.address,
      constructorArguments: ["HoundracePotions", "HP"]
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: shopZerocost.address,
      constructorArguments: [
        [
          address0,address0,address0
        ]
      ]
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: shopRestricted.address,
      constructorArguments: [
        [
          address0,address0,address0
        ]
      ]
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: shopMethods.address,
      constructorArguments: [
        [
          address0,address0,address0
        ]
      ]
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: shop.address,
      constructorArguments: [
        [
          shopMethods.address,shopZerocost.address,shopRestricted.address
        ]
      ]
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: arenasZerocost.address,
      constructorArguments: [
        [
          "HoundRace Arenas", "HRA", address0, address0
        ]
      ]
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: arenasRestricted.address,
      constructorArguments: [
        [
          "HoundRace Arenas", "HRA", address0, address0
        ]
      ]
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: arenas.address,
      constructorArguments: [
        [
          "HoundRace Arenas", "HRA", arenasZerocost.address, arenasRestricted.address
        ]
      ]
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: geneticsZerocost.address,
      constructorArguments: [
        [
          randomness.address,
          address0,
          arenas.address,
          maleBoilerplateGene,
          femaleBoilerplateGene,
          60,
          40,
          [2,6,10,14,18,22,26,30,34,38,42,46,50],
          [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
        ]
      ]
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: genetics.address,
      constructorArguments: [
        [
          randomness.address,
          geneticsZerocost.address,
          arenas.address,
          maleBoilerplateGene,
          femaleBoilerplateGene,
          60,
          40,
          [2,6,10,14,18,22,26,30,34,38,42,46,50],
          [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
        ]
      ]
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: incubatorMethods.address,
      constructorArguments: [
        [
          address0,
          address0,
          address0,
          "0x67657452"
        ]
      ]
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }
  
  try {
    await hre.run("verify:verify", {
      address: incubator.address,
      constructorArguments: [
        [
          incubatorMethods.address,
          randomness.address,
          genetics.address,
          0
        ]
      ]
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: houndsZerocost.address,
      constructorArguments: [
        [
          "HoundRace",
          "HR",
          [String(process.env.ETH_ACCOUNT_PUBLIC_KEY)],
          [
            address0,
            String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
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
        ]
      ]
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: houndsRestricted.address,
      constructorArguments: [
        [
          "HoundRace",
          "HR",
          [String(process.env.ETH_ACCOUNT_PUBLIC_KEY)],
          [
            address0,
            String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
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
        ]
      ]
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }
  
  try {
    await hre.run("verify:verify", {
      address: houndsModifier.address,
      constructorArguments: [
        [
          "HoundRace",
          "HR",
          [String(process.env.ETH_ACCOUNT_PUBLIC_KEY)],
          [
            address0,
            String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
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
        ]
      ]
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }
  
  try {
    await hre.run("verify:verify", {
      address: houndsMinter.address,
      constructorArguments: [
        [
          "HoundRace",
          "HR",
          [String(process.env.ETH_ACCOUNT_PUBLIC_KEY)],
          [
            address0,
            String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
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
        ]
      ]
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: hounds.address,
      constructorArguments: [
        [
          "HoundRace",
          "HR",
          [String(process.env.ETH_ACCOUNT_PUBLIC_KEY)],
          [
            incubator.address,
            String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
            payments.address,
            houndsRestricted.address,
            houndsMinter.address,
            houndsZerocost.address,
            houndsModifier.address,
            shop.address
          ],[
            "0xB1A2BC2EC50000",
            "0x2386F26FC10000",
            "0x2386F26FC10000",
            "0x2386F26FC10000",
            "0x2386F26FC10000"
          ]
        ]
      ]
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }
  
  try {
    await hre.run("verify:verify", {
      address: racesZeroCost.address,
      constructorArguments: [
        [
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
        ]
      ]
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: racesRestricted.address,
      constructorArguments: [
        [
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
        ]
      ]
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: racesMethods.address,
      constructorArguments: [
        [
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
        ]
      ]
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }
  
  try {
    await hre.run("verify:verify", {
      address: races.address,
      constructorArguments: [
        [
          randomness.address,
          arenas.address,
          hounds.address,
          racesMethods.address,
          address0,
          payments.address,
          racesRestricted.address,
          racesZeroCost.address,
          500000000,
          true
        ]
      ]
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: generatorZerocost.address,
      constructorArguments: [
        [
          address0,
          address0,
          address0,
          address0,
          address0,
          address0,
          address0
        ]
      ]
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: generatorMethods.address, 
      constructorArguments: [
        [
          address0,
          address0,
          address0,
          address0,
          address0,
          address0,
          address0
        ]
      ]
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }

  try {
    await hre.run("verify:verify", {
      address: generator.address,
      constructorArguments: [
        [
          randomness.address,
          arenas.address,
          hounds.address,
          races.address,
          generatorMethods.address,
          payments.address,
          generatorZerocost.address
        ]
      ]
    });
    verifications.increment();
  } catch (err) {
    error(err);
  }

  console.log('export CONVERTERS=' + converters.address);
  console.log('export SORTINGS=' + sortings.address);
  console.log('export RANDOMNESS_ZEROCOST=' + randomnessZerocost.address);
  console.log('export RANDOMNESS=' + randomness.address);
  console.log('export PAYMENTS_METHODS=' + paymentsMethods.address);
  console.log('export PAYMENTS=' + payments.address);
  console.log('export HOUNDRACE_POTIONS=' + houndracePotions.address);
  console.log('export SHOP_ZEROCOST=' + shopZerocost.address);
  console.log('export SHOP_RESTRICTED=' + shopRestricted.address);
  console.log('export SHOP_METHODS=' + shopMethods.address);
  console.log('export SHOP=' + shop.address);
  console.log('export ARENA_RESTRICTED=' + arenasRestricted.address);
  console.log('export ARENAS=' + arenas.address);
  console.log('export GENETICS_ZEROCOST=' + geneticsZerocost.address);
  console.log('export GENETICS=' + genetics.address);
  console.log('export INCUBATOR_METHODS=' + incubatorMethods.address);
  console.log('export INCUBATOR=' + incubator.address);
  console.log('export HOUNDS_RESTRICTED=' + houndsRestricted.address);
  console.log('export HOUNDS_MODIFIER=' + houndsModifier.address);
  console.log('export HOUNDS_MINTER=' + houndsMinter.address);
  console.log('export HOUNDS=' + hounds.address);
  console.log('export RACE_RESTRICTED=' + racesRestricted.address);
  console.log('export RACE_METHODS=' + racesMethods.address);
  console.log('export RACE=' + races.address);
  console.log('export GENERATOR_ZEROCOST=' + generatorZerocost.address);
  console.log('export GENERATOR_METHODS=' + generatorMethods.address);
  console.log('export GENERATOR=' + generator.address);


  // stop all bars
  multibar.stop();

}



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    error(error);
    process.exit(1);
});