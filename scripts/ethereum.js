const { deployment, errors } = require("../plugins/logger.js");
const cliProgress = require('cli-progress');

const opt = {
  format: 'progress [{bar}] {percentage}% | ETA: {eta}s | {value}/{total}'
}

const deploymentsStepsName = [

];
const configurationsStepsName = [

];
const recommendedCallsStepsCalls = [

];
const verificationsStepsCalls = [

];

// create new container
const multibar = new cliProgress.MultiBar({
  clearOnComplete: false,
  hideCursor: true,
  stopOnComplete: true,
  noTTYOutput: true
}, cliProgress.Presets.shades_classic);


const deployments = multibar.create(27,0);
const configurations = multibar.create(16,0);
const recommendedCalls = multibar.create(39,0);
const verifications = multibar.create(26,0);


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
const defaultRace = [
  "race name",
  address0,
  [1,2,3,4,5,6,7,8,9,10],
  1,
  500,
  1,
  55,
  '0x00'
];


async function main() {

  try {

    deployment('##############################################');
    const [owner] = await hre.ethers.getSigners();

    const Converters = await hre.ethers.getContractFactory("Converters");
    const converters = await Converters.deploy();
    deployments.increment();
    deployment('export CONVERTERS=' + converters.address);

    const Sortings = await hre.ethers.getContractFactory("Sortings");
    const sortings = await Sortings.deploy();
    await sortings.deployed();
    deployments.increment();
    deployment('export SORTINGS=' + sortings.address);

    const Randomness = await hre.ethers.getContractFactory("Randomness");
    const randomness = await Randomness.deploy();
    await randomness.deployed();
    deployments.increment();
    deployment('export RANDOMNESS=' + randomness.address);

    const PaymentsMethods = await hre.ethers.getContractFactory("PaymentsMethods");
    const paymentsMethods = await PaymentsMethods.deploy([address0,[]]);
    await paymentsMethods.deployed();
    deployments.increment();
    deployment('export PAYMENTS_METHODS=' + paymentsMethods.address);

    const Payments = await hre.ethers.getContractFactory("Payments");
    const payments = await Payments.deploy([paymentsMethods.address,[owner.address]]);
    await payments.deployed();
    deployments.increment();
    deployment('export PAYMENTS=' + payments.address);

    try {
      await paymentsMethods.setGlobalParameters([payments.address,[]]);
      configurations.increment();
    } catch(err) {
      errors(err);
    }

    const HoundracePotions = await hre.ethers.getContractFactory("HoundracePotions");
    const houndracePotions = await HoundracePotions.deploy("HoundracePotions", "HP");
    await houndracePotions.deployed();
    deployments.increment();
    deployment('export HOUNDRACE_POTIONS=' + houndracePotions.address);

    const ShopRestricted = await hre.ethers.getContractFactory("ShopRestricted");
    const shopRestricted = await ShopRestricted.deploy([address0,address0,address0]);
    await shopRestricted.deployed();
    deployments.increment();
    deployment('export SHOP_RESTRICTED=' + shopRestricted.address);

    const ShopMethods = await hre.ethers.getContractFactory("ShopMethods");
    const shopMethods = await ShopMethods.deploy([address0,address0,address0]);
    await shopMethods.deployed();
    deployments.increment();
    deployment('export SHOP_METHODS=' + shopMethods.address);

    const Shop = await hre.ethers.getContractFactory("Shop");
    const shop = await Shop.deploy([shopMethods.address,shopRestricted.address]);
    await shop.deployed();
    deployments.increment();
    deployment('export SHOP=' + shop.address);

    try {
      await shopRestricted.setGlobalParameters([shopMethods.address,shopRestricted.address]);
      configurations.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await shopMethods.setGlobalParameters([shopMethods.address,shopRestricted.address]);
      configurations.increment();
    } catch(err) {
      errors(err);
    }

    const ArenasRestricted = await hre.ethers.getContractFactory("ArenasRestricted");
    const arenasRestricted = await ArenasRestricted.deploy(["HoundRace Arenas", "HRA", address0, address0]);
    await arenasRestricted.deployed();
    deployments.increment();
    deployment('export ARENAS_RESTRICTED=' + arenasRestricted.address);

    const Arenas = await hre.ethers.getContractFactory("Arenas");
    const arenas = await Arenas.deploy(["HoundRace Arenas", "HRA",arenasRestricted.address]);
    await arenas.deployed();
    deployments.increment();
    deployment('export ARENAS=' + arenas.address);

    try {
      await arenasRestricted.setGlobalParameters(["HoundRace Arenas", "HRA", arenasRestricted.address]);
      configurations.increment();
    } catch(err) {
      errors(err);
    }

    const Genetics = await hre.ethers.getContractFactory("Genetics");
    const genetics = await Genetics.deploy([
      randomness.address,
      arenas.address,
      maleBoilerplateGene,
      femaleBoilerplateGene,
      60,
      40,
      [2,6,10,14,18,22,26,30,34,38,42,46,50],
      [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
    ]);
    await genetics.deployed();
    deployments.increment();
    deployment('export GENETICS=' + genetics.address);

    const IncubatorMethods = await hre.ethers.getContractFactory("IncubatorMethods");
    const incubatorMethods = await IncubatorMethods.deploy([
      address0,
      address0,
      address0,
      "0x67657452"
    ]);
    await incubatorMethods.deployed();
    deployments.increment();
    deployment('export INCUBATOR_METHODS=' + incubatorMethods.address);

    const Incubator = await hre.ethers.getContractFactory("Incubator");
    const incubator = await Incubator.deploy([
      incubatorMethods.address,
      randomness.address,
      genetics.address,
      "0x67657452"
    ]);
    await incubator.deployed();
    deployments.increment();
    deployment('export INCUBATOR=' + incubator.address);

    try {
      await incubatorMethods.setGlobalParameters([
        incubatorMethods.address,
        randomness.address,
        genetics.address,
        "0x67657452"
      ]);
      configurations.increment();
    } catch(err) {
      errors(err);
    }

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
    deployments.increment();
    deployment('export HOUNDS_RESTRICTED=' + houndsRestricted.address);

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
    deployments.increment();
    deployment('export HOUNDS_MODIFIER=' + houndsModifier.address);

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
    deployments.increment();
    deployment('export HOUNDS_MINTER=' + houndsMinter.address);

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
    await hounds.deployed();
    deployments.increment();
    deployment('export HOUNDS=' + hounds.address);

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
      address0,
      500000000,
      true
    ]);
    await racesRestricted.deployed();
    deployments.increment();
    deployment('export RACE_RESTRICTED=' + racesRestricted.address);

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
      address0,
      500000000,
      true
    ]);
    await racesMethods.deployed();
    deployments.increment();
    deployment('export RACE_METHODS=' + racesMethods.address);

    const Races = await hre.ethers.getContractFactory("Races");
    const races = await Races.deploy([
      randomness.address,
      arenas.address,
      hounds.address,
      racesMethods.address,
      address0,
      payments.address,
      racesRestricted.address,
      address0,
      owner.address,
      500000000,
      true
    ]);
    await races.deployed();
    deployments.increment();
    deployment('export RACE=' + races.address);

    const GeneratorMethods = await hre.ethers.getContractFactory("GeneratorMethods");
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
    deployments.increment();
    deployment('export GENERATOR_METHODS=' + generatorMethods.address);

    const GeneratorZerocost = await hre.ethers.getContractFactory("GeneratorZerocost",{
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
    deployments.increment();
    deployment('export GENERATOR_ZEROCOST=' + generatorZerocost.address);

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
    deployments.increment();
    deployment('export GENERATOR=' + generator.address);

    try {
      await generatorMethods.setGlobalParameters([
        randomness.address,
        arenas.address,
        hounds.address,
        races.address,
        generatorMethods.address,
        payments.address,
        generatorZerocost.address
      ]);
      configurations.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await generatorZerocost.setGlobalParameters([
        randomness.address,
        arenas.address,
        hounds.address,
        races.address,
        generatorMethods.address,
        payments.address,
        generatorZerocost.address
      ]);
      configurations.increment();
    } catch(err) {
      errors(err);
    }

    const QueuesMethods = await hre.ethers.getContractFactory("QueuesMethods");
    const queuesMethods = await QueuesMethods.deploy([
      arenas.address,
      hounds.address,
      address0,
      payments.address,
      address0,
      races.address
    ]);
    await queuesMethods.deployed();
    deployments.increment();
    deployment('export QUEUES_METHODS=' + queuesMethods.address);

    const QueuesRestricted = await hre.ethers.getContractFactory("QueuesRestricted");
    const queuesRestricted = await QueuesRestricted.deploy([
      arenas.address,
      hounds.address,
      address0,
      payments.address,
      address0,
      races.address
    ]);
    await queuesRestricted.deployed();
    deployments.increment();
    deployment('export QUEUES_RESTRICTED=' + queuesRestricted.address);

    const Queues = await hre.ethers.getContractFactory("Queues");
    const queues = await Queues.deploy([
      arenas.address,
      hounds.address,
      queuesMethods.address,
      payments.address,
      queuesRestricted.address,
      races.address
    ]);
    await queues.deployed();
    deployments.increment();
    deployment('export QUEUES=' + queues.address);
      
    try {
      await queuesMethods.setGlobalParameters([
        arenas.address,
        hounds.address,
        queuesMethods.address,
        payments.address,
        queuesRestricted.address,
        races.address
      ]);
      configurations.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await queuesRestricted.setGlobalParameters([
        arenas.address,
        hounds.address,
        queuesMethods.address,
        payments.address,
        queuesRestricted.address,
        races.address
      ]);
      configurations.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await racesRestricted.setGlobalParameters([
        randomness.address,
        arenas.address,
        hounds.address,
        racesMethods.address,
        generator.address,
        payments.address,
        racesRestricted.address,
        queues.address,
        owner.address,
        500000000,
        true
      ]);
      configurations.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await racesMethods.setGlobalParameters([
        randomness.address,
        arenas.address,
        hounds.address,
        racesMethods.address,
        generator.address,
        payments.address,
        racesRestricted.address,
        queues.address,
        owner.address,
        500000000,
        true
      ]);
      configurations.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await races.setGlobalParameters([
        randomness.address,
        arenas.address,
        hounds.address,
        racesMethods.address,
        generator.address,
        payments.address,
        racesRestricted.address,
        queues.address,
        owner.address,
        500000000,
        true
      ]);
      configurations.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await hounds.setGlobalParameters([
        "HoundRace",
        "HR",
        [
          hounds.address,
          houndsRestricted.address,
          houndsMinter.address,
          races.address,
          racesMethods.address,
          racesRestricted.address,
          queues.address,
          queuesMethods.address,
          queuesRestricted.address,
          races.address,
          racesMethods.address,
          racesRestricted.address
        ],[
          incubator.address,
          String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
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
      configurations.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await houndsModifier.setGlobalParameters([
        "HoundRace",
        "HR",
        [
          hounds.address,
          houndsRestricted.address,
          houndsMinter.address,
          races.address,
          racesMethods.address,
          racesRestricted.address,
          queues.address,
          queuesMethods.address,
          queuesRestricted.address,
          races.address,
          racesMethods.address,
          racesRestricted.address
        ],[
          incubator.address,
          String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
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
      configurations.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await houndsRestricted.setGlobalParameters([
        "HoundRace",
        "HR",
        [
          hounds.address,
          houndsRestricted.address,
          houndsMinter.address,
          races.address,
          racesMethods.address,
          racesRestricted.address,
          queues.address,
          queuesMethods.address,
          queuesRestricted.address,
          races.address,
          racesMethods.address,
          racesRestricted.address
        ],[
          incubator.address,
          String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
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
      configurations.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await houndsMinter.setGlobalParameters([
        "HoundRace",
        "HR",
        [
          hounds.address,
          houndsRestricted.address,
          houndsMinter.address,
          races.address,
          racesMethods.address,
          racesRestricted.address,
          queues.address,
          queuesMethods.address,
          queuesRestricted.address,
          races.address,
          racesMethods.address,
          racesRestricted.address
        ],[
          incubator.address,
          String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
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
      configurations.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await queues.createQueues(defaultQueues);
      recommendedCalls.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await hounds.id();
      recommendedCalls.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await hounds.initializeHound(0,defaultHound);
      recommendedCalls.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await hounds.id();
      recommendedCalls.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await hounds.initializeHound(0,defaultHound);
      recommendedCalls.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await hounds.id();
      recommendedCalls.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await hounds.initializeHound(0,defaultHound);
      recommendedCalls.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await hounds.id();
      recommendedCalls.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await hounds.initializeHound(0,defaultHound);
      recommendedCalls.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await hounds.id();
      recommendedCalls.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await hounds.breedHounds(1,2,{ value: "0xD529AE9E860000" });
      recommendedCalls.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await hounds.id();
      recommendedCalls.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await hounds.breedHounds(3,4,{ value: "0xD529AE9E860000" });
      recommendedCalls.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await hounds.id();
      recommendedCalls.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await hounds.initializeHound(0,defaultHound);
      recommendedCalls.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await hounds.initializeHound(5,defaultHound);
      recommendedCalls.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await hounds.initializeHound(6,defaultHound);
      recommendedCalls.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await payments.addPayments(1,[
        [
          payments.address, // from
          address0, // to
          address0, // currency
          [], // token ids
          0, // amount
          3, // 2 - erc20 1 - erc1155 0 - erc721
          50, // % of the total race prize
          0 // first place
        ],[
          payments.address, // from
          address0, // to
          address0, // currency
          [], // token ids
          0, // amount
          3, // 2 - erc20 1 - erc1155 0 - erc721
          30, // % of the total race prize
          1 // second place
        ],[
          payments.address, // from
          address0, // to
          address0, // currency
          [], // token ids
          0, // amount
          3, // 2 - erc20 1 - erc1155 0 - erc721
          20, // % of the total race prize
          2 // third place
        ]
      ]);
    } catch(err) {
      errors(err);
    }

    try {
      for ( let i = 0 ; i < 10 ; ++i ) {
        await hounds.initializeHound(0,defaultHound);
        recommendedCalls.increment();

        await queues.enqueue(1,Number(await hounds.id())-1,{
          value: defaultQueues[0][4]
        });
        recommendedCalls.increment();
      }
    } catch(err) {
      errors(err);
    }

    try {
      await queues.createQueues(defaultQueues);
      recommendedCalls.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await queues.deleteQueue(Number(await hounds.id())-1);
      recommendedCalls.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await queues.deleteQueue(999999);
      recommendedCalls.increment();
    } catch(err) {
      errors(err);
    }

    const defaultRacePayments = [
      [
        payments.address, // from
        address0, // to
        address0, // currency
        [1,2,3,4,5,6,7,8,9,10], // token ids
        0, // amount
        3, // 2 - erc20 1 - erc1155 0 - erc721
        50, // % of the total race prize
        0 // first place
      ],[
        payments.address, // from
        address0, // to
        address0, // currency
        [1,2,3,4,5,6,7,8,9,10], // token ids
        0, // amount
        3, // 2 - erc20 1 - erc1155 0 - erc721
        30, // % of the total race prize
        1 // second place
      ],[
        payments.address, // from
        address0, // to
        address0, // currency
        [1,2,3,4,5,6,7,8,9,10], // token ids
        0, // amount
        3, // 2 - erc20 1 - erc1155 0 - erc721
        20, // % of the total race prize
        2 // third place
      ]
    ];

    try {
      await races.uploadRace(defaultRace,defaultRacePayments,{
        value: defaultRace[4] * defaultRace[2].length
      });
      recommendedCalls.increment();
    } catch(err) {
      errors(err);
    }

    try {
      await hre.run("verify:verify", {
        address: converters.address
      });
    } catch (err) {
      errors(err);
    }
    verifications.increment();

    try {
      await hre.run("verify:verify", {
        address: sortings.address
      });
    } catch (err) {
      errors(err);
    }
    verifications.increment();

    try {
      await hre.run("verify:verify", {
        address: randomness.address
      });
    } catch (err) {
      errors(err);
    }
    verifications.increment();
    
    try {
      await hre.run("verify:verify", {
        address: paymentsMethods.address,
        constructorArguments: [
          [
            address0,[]
          ]
        ]
      });
    } catch (err) {
      errors(err);
    }
    verifications.increment();
    
    try {
      await hre.run("verify:verify", {
        address: payments.address,
        constructorArguments: [
          [
            paymentsMethods.address,[]
          ]
        ]
      });
    } catch (err) {
      errors(err);
    }
    verifications.increment();

    try {
      await hre.run("verify:verify", {
        address: houndracePotions.address,
        constructorArguments: ["HoundracePotions", "HP"]
      });
    } catch (err) {
      errors(err);
    }
    verifications.increment();

    try {
      await hre.run("verify:verify", {
        address: shopRestricted.address,
        constructorArguments: [
          [
            address0,address0,address0
          ]
        ]
      });
    } catch (err) {
      errors(err);
    }
    verifications.increment();

    try {
      await hre.run("verify:verify", {
        address: shopMethods.address,
        constructorArguments: [
          [
            address0,address0,address0
          ]
        ]
      });
    } catch (err) {
      errors(err);
    }
    verifications.increment();

    try {
      await hre.run("verify:verify", {
        address: shop.address,
        constructorArguments: [
          [
            shopMethods.address,shopRestricted.address
          ]
        ]
      });
    } catch (err) {
      errors(err);
    }
    verifications.increment();

    try {
      await hre.run("verify:verify", {
        address: arenasRestricted.address,
        constructorArguments: [
          [
            "HoundRace Arenas", "HRA", address0, address0
          ]
        ]
      });
    } catch (err) {
      errors(err);
    }
    verifications.increment();

    try {
      await hre.run("verify:verify", {
        address: arenas.address,
        constructorArguments: [
          [
            "HoundRace Arenas", "HRA", arenasRestricted.address
          ]
        ]
      });
    } catch (err) {
      errors(err);
    }
    verifications.increment();

    try {
      await hre.run("verify:verify", {
        address: genetics.address,
        constructorArguments: [
          [
            randomness.address,
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
    } catch (err) {
      errors(err);
    }
    verifications.increment();

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
    } catch (err) {
      errors(err);
    }
    verifications.increment();
    
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
    } catch (err) {
      errors(err);
    }
    verifications.increment();

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
    } catch (err) {
      errors(err);
    }
    verifications.increment();
    
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
    } catch (err) {
      errors(err);
    }
    verifications.increment();
    
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
    } catch (err) {
      errors(err);
    }
    verifications.increment();

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
    } catch (err) {
      errors(err);
    }
    verifications.increment();

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
    } catch (err) {
      errors(err);
    }
    verifications.increment();

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
    } catch (err) {
      errors(err);
    }
    verifications.increment();
    
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
            500000000,
            true
          ]
        ]
      });
    } catch (err) {
      errors(err);
    }
    verifications.increment();

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
    } catch (err) {
      errors(err);
    }
    verifications.increment();

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
            payments.address
          ]
        ]
      });
    } catch (err) {
      errors(err);
    }
    verifications.increment();

    try {
      await hre.run("verify:verify", {
        address: queuesRestricted.address,
        constructorArguments: [
          [
            arenas.address,
            hounds.address,
            address0,
            payments.address,
            address0,
            races.address
          ]
        ]
      });
    } catch (err) {
      errors(err);
    }
    verifications.increment();

    try {
      await hre.run("verify:verify", {
        address: queuesMethods.address,
        constructorArguments: [
          [
            arenas.address,
            hounds.address,
            address0,
            payments.address,
            address0,
            races.address
          ]
        ]
      });
    } catch (err) {
      errors(err);
    }
    verifications.increment();

    try {
      await hre.run("verify:verify", {
        address: queues.address,
        constructorArguments: [
          [
            arenas.address,
            hounds.address,
            queuesMethods.address,
            payments.address,
            queuesRestricted.address,
            races.address
          ]
        ]
      });
    } catch (err) {
      errors(err);
    }
    verifications.increment();

  } catch(err) {
    console.error(err);
    errors(err);
  }

}



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    errors(error);
    process.exit(1);
});