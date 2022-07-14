import DeploymentLogger from '../logs/deployment/printers/deployment';
import DeploymentError from '../logs/deployment/printers/errors';
import { run } from "hardhat";
const { ethers } = require("ethers");


const cliProgress = require('cli-progress');
const opt = {
  format: '{step} [{bar}] {percentage}% | ETA: {eta}s | {value}/{total}'
}

// create new container
const multibar = new cliProgress.MultiBar({
  ...opt,
  clearOnComplete: false,
  hideCursor: true,
  stopOnComplete: true,
  noTTYOutput: true
}, cliProgress.Presets.shades_classic);


const deployments = multibar.create(27,0);
deployments.update(0, {
  step: "Deploy converters"
});
const configurations = multibar.create(16,0);
configurations.update(0, {
  step: "Set global parameters for payment methods"
});
const verifications = multibar.create(26,0);
verifications.update(0, {
  step: "Verify converters"
});


const address0: string = "0x0000000000000000000000000000000000000000";
const maleBoilerplateGene: Array<number> = [ 0, 1, 8, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 9, 8, 2, 1, 4, 2, 9, 8, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 7, 7, 0, 2, 9, 1, 0, 9, 1, 1, 2, 1, 9, 0, 2, 2, 8, 5, 2, 8, 1, 9 ];
const femaleBoilerplateGene: Array<number> = [ 0, 2, 6, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 3, 1, 9, 1, 4, 2, 4, 7, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 1, 7, 2, 7, 9, 1, 0, 9, 1, 1, 2, 1, 0, 7, 2, 2, 8, 5, 8, 7, 1, 3 ];
const defaultHound: Array<any> = [
  [ 0, 0, 0, 0],
  [ 10000000, 10000000, 100, 1, 100 ],
  [ 0, 100000, 1000, true ],
  [ 1, 1, 0, 0, maleBoilerplateGene ],
  "",
  "",
  true,
  false
];
const defaultQueues: Array<any> = [[
  "Test queue",
  address0,
  [],
  1, // terrain
  5000000000,
  address0,
  0,
  0,
  1,
  1,
  10,
  0,
  false
]];
const defaultRace: Array<any> = [
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

    DeploymentLogger('##############################################');
    const [owner] = await ethers.getSigners();

    const Converters = await ethers.getContractFactory("Converters");
    const converters = await Converters.deploy();
    DeploymentLogger('export CONVERTERS=' + converters.address);
    deployments.update(1, {
      step: "Deploy sortings"
    });

    const Sortings = await ethers.getContractFactory("Sortings");
    const sortings = await Sortings.deploy();
    await sortings.deployed();
    DeploymentLogger('export SORTINGS=' + sortings.address);
    deployments.update(2, {
      step: "Deploy randomness"
    });

    const Randomness = await ethers.getContractFactory("Randomness");
    const randomness = await Randomness.deploy();
    await randomness.deployed();
    DeploymentLogger('export RANDOMNESS=' + randomness.address);
    deployments.update(3, {
      step: "Deploy payment methods"
    });

    const Payments = await ethers.getContractFactory("Payments");
    const payments = await Payments.deploy();
    await payments.deployed();
    DeploymentLogger('export PAYMENTS=' + payments.address);
    deployments.update(5, {
      step: "Deploy houndrace potions"
    });

    const HoundracePotions = await ethers.getContractFactory("HoundracePotions");
    const houndracePotions = await HoundracePotions.deploy("HoundracePotions", "HP");
    await houndracePotions.deployed();
    DeploymentLogger('export HOUNDRACE_POTIONS=' + houndracePotions.address);
    deployments.update(6, {
      step: "Deploy shop restricted"
    });

    const ShopRestricted = await ethers.getContractFactory("ShopRestricted");
    const shopRestricted = await ShopRestricted.deploy([address0,address0] as any);
    await shopRestricted.deployed();
    DeploymentLogger('export SHOP_RESTRICTED=' + shopRestricted.address);
    deployments.update(7, {
      step: "Deploy shop methods"
    });

    const ShopMethods = await ethers.getContractFactory("ShopMethods");
    const shopMethods = await ShopMethods.deploy([address0,address0] as any);
    await shopMethods.deployed();
    DeploymentLogger('export SHOP_METHODS=' + shopMethods.address);
    deployments.update(8, {
      step: "Deploy shop"
    });

    const Shop = await ethers.getContractFactory("Shop");
    const shop = await Shop.deploy([shopMethods.address,shopRestricted.address] as any);
    await shop.deployed();
    DeploymentLogger('export SHOP=' + shop.address);
    deployments.update(9, {
      step: "Deploy arenas restricted"
    });

    try {
      await shopRestricted.setGlobalParameters([shopMethods.address,shopRestricted.address] as any);
      configurations.update(2, {
        step: "Set global parameters for shop methods"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await shopMethods.setGlobalParameters([shopMethods.address,shopRestricted.address] as any);
      configurations.update(3, {
        step: "Set global parameters for arenas restricted"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    const ArenasRestricted = await ethers.getContractFactory("ArenasRestricted");
    const arenasRestricted = await ArenasRestricted.deploy(["HoundRace Arenas", "HRA", address0, address0, address0, address0, []] as any);
    await arenasRestricted.deployed();
    DeploymentLogger('export ARENAS_RESTRICTED=' + arenasRestricted.address);
    deployments.update(10, {
      step: "Deploy arenas"
    });

    const ArenasMethods = await ethers.getContractFactory("ArenasMethods");
    const arenasMethods = await ArenasMethods.deploy(["HoundRace Arenas", "HRA", address0, address0, address0, address0, []] as any);
    await arenasMethods.deployed();
    DeploymentLogger('export ARENAS_METHODS=' + arenasMethods.address);
    deployments.update(10, {
      step: "Deploy arenas"
    });

    const Arenas = await ethers.getContractFactory("Arenas");
    const arenas = await Arenas.deploy(["HoundRace Arenas", "HRA", arenasRestricted.address, arenasMethods.address, payments.address, String(process.env.ETH_ACCOUNT_PUBLIC_KEY), []] as any);
    await arenas.deployed();
    DeploymentLogger('export ARENAS=' + arenas.address);
    deployments.update(11, {
      step: "Deploy genetics"
    });

    try {
      await arenasRestricted.setGlobalParameters(["HoundRace Arenas", "HRA", arenasRestricted.address, arenasMethods.address, payments.address, String(process.env.ETH_ACCOUNT_PUBLIC_KEY), []] as any);
      configurations.update(4, {
        step: "Set global parameters for incubator methods"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    const Genetics = await ethers.getContractFactory("Genetics");
    const genetics = await Genetics.deploy([
      randomness.address,
      arenas.address,
      maleBoilerplateGene,
      femaleBoilerplateGene,
      60,
      40,
      [2,6,10,14,18,22,26,30,34,38,42,46,50],
      [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
    ] as any);
    await genetics.deployed();
    DeploymentLogger('export GENETICS=' + genetics.address);
    deployments.update(12, {
      step: "Deploy incubator methods"
    });

    const IncubatorMethods = await ethers.getContractFactory("IncubatorMethods");
    const incubatorMethods = await IncubatorMethods.deploy([
      address0,
      address0,
      address0,
      345600
    ] as any);
    await incubatorMethods.deployed();
    DeploymentLogger('export INCUBATOR_METHODS=' + incubatorMethods.address);
    deployments.update(13, {
      step: "Deploy incubator"
    });

    const Incubator = await ethers.getContractFactory("Incubator");
    const incubator = await Incubator.deploy([
      incubatorMethods.address,
      randomness.address,
      genetics.address,
      345600
    ] as any);
    await incubator.deployed();
    DeploymentLogger('export INCUBATOR=' + incubator.address);
    deployments.update(14, {
      step: "Deploy hounds restricted"
    });

    try {
      await incubatorMethods.setGlobalParameters([
        incubatorMethods.address,
        randomness.address,
        genetics.address,
        345600
      ] as any);
      configurations.update(5, {
        step: "Set global parameters for generator methods"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    const HoundsRestricted = await ethers.getContractFactory("HoundsRestricted");
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
        address0,
        address0,
        address0,
        address0,
        "0xB1A2BC2EC50000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000"
      ]
    ] as any);
    await houndsRestricted.deployed();
    DeploymentLogger('export HOUNDS_RESTRICTED=' + houndsRestricted.address);
    deployments.update(15, {
      step: "Deploy hounds modifier"
    });

    const HoundsModifier = await ethers.getContractFactory("HoundsModifier");
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
        address0,
        address0,
        address0,
        address0,
        "0xB1A2BC2EC50000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000"
      ]
    ] as any);
    await houndsModifier.deployed();
    DeploymentLogger('export HOUNDS_MODIFIER=' + houndsModifier.address);
    deployments.update(16, {
      step: "Deploy hounds minter"
    });

    const HoundsMinter = await ethers.getContractFactory("HoundsMinter");
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
        address0,
        address0,
        address0,
        address0,
        "0xB1A2BC2EC50000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000"
      ]
    ] as any);
    await houndsMinter.deployed();
    DeploymentLogger('export HOUNDS_MINTER=' + houndsMinter.address);
    deployments.update(17, {
      step: "Deploy hounds"
    });

    const Hounds = await ethers.getContractFactory("Hounds");
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
        address0,
        address0,
        address0,
        address0,
        "0x38D7EA4C68000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000",
        "0x2386F26FC10000"
      ]
    ] as any);
    await hounds.deployed();
    DeploymentLogger('export HOUNDS=' + hounds.address);
    deployments.update(18, {
      step: "Deploy races restricted"
    });

    const RacesRestricted = await ethers.getContractFactory("RacesRestricted");
    const racesRestricted = await RacesRestricted.deploy([
      address0,
      address0,
      address0,
      address0,
      address0,
      address0,
      address0,
      address0,
      [],
      500000000,
      false
    ] as any);
    await racesRestricted.deployed();
    DeploymentLogger('export RACE_RESTRICTED=' + racesRestricted.address);
    deployments.update(19, {
      step: "Deploy races methods"
    });

    const RacesMethods = await ethers.getContractFactory("RacesMethods");
    const racesMethods = await RacesMethods.deploy([
      address0,
      address0,
      address0,
      address0,
      address0,
      address0,
      address0,
      address0,
      [],
      500000000,
      false
    ] as any);
    await racesMethods.deployed();
    DeploymentLogger('export RACE_METHODS=' + racesMethods.address);
    deployments.update(20, {
      step: "Deploy races"
    });

    const Races = await ethers.getContractFactory("Races");
    const races = await Races.deploy([
      randomness.address,
      arenas.address,
      hounds.address,
      racesMethods.address,
      address0,
      payments.address,
      racesRestricted.address,
      address0,
      [],
      500000000,
      false
    ] as any);
    await races.deployed();
    DeploymentLogger('export RACE=' + races.address);
    deployments.update(21, {
      step: "Deploy generator methods"
    });

    const GeneratorMethods = await ethers.getContractFactory("GeneratorMethods");
    const generatorMethods = await GeneratorMethods.deploy([
      address0,
      address0,
      address0,
      address0,
      address0,
      address0,
      address0
    ] as any);
    await generatorMethods.deployed();
    DeploymentLogger('export GENERATOR_METHODS=' + generatorMethods.address);
    deployments.update(22, {
      step: "Deploy generator zerocost"
    });

    const GeneratorZerocost = await ethers.getContractFactory("GeneratorZerocost",{
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
    ] as any);
    await generatorZerocost.deployed();
    DeploymentLogger('export GENERATOR_ZEROCOST=' + generatorZerocost.address);
    deployments.update(23, {
      step: "Deploy generator"
    });

    const Generator = await ethers.getContractFactory("Generator");
    const generator = await Generator.deploy([
      randomness.address,
      arenas.address,
      hounds.address,
      races.address,
      generatorMethods.address,
      payments.address,
      generatorZerocost.address
    ] as any);
    await generator.deployed();
    DeploymentLogger('export GENERATOR=' + generator.address);
    deployments.update(24, {
      step: "Deploy queues methods"
    });

    try {
      await generatorMethods.setGlobalParameters([
        randomness.address,
        arenas.address,
        hounds.address,
        races.address,
        generatorMethods.address,
        payments.address,
        generatorZerocost.address
      ] as any);
      configurations.update(6, {
        step: "Set global parameters for generator zerocost"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
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
      ] as any);
      configurations.update(7, {
        step: "Set global parameters for queues methods"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    const QueuesMethods = await ethers.getContractFactory("QueuesMethods");
    const queuesMethods = await QueuesMethods.deploy([
      arenas.address,
      hounds.address,
      address0,
      payments.address,
      address0,
      races.address,
      []
    ] as any);
    await queuesMethods.deployed();
    DeploymentLogger('export QUEUES_METHODS=' + queuesMethods.address);
    deployments.update(25, {
      step: "Deploy queues restricted"
    });

    const QueuesRestricted = await ethers.getContractFactory("QueuesRestricted");
    const queuesRestricted = await QueuesRestricted.deploy([
      arenas.address,
      hounds.address,
      address0,
      payments.address,
      address0,
      races.address,
      []
    ] as any);
    await queuesRestricted.deployed();
    DeploymentLogger('export QUEUES_RESTRICTED=' + queuesRestricted.address);
    deployments.update(26, {
      step: "Deploy queues"
    });

    const Queues = await ethers.getContractFactory("Queues");
    const queues = await Queues.deploy([
      arenas.address,
      hounds.address,
      queuesMethods.address,
      payments.address,
      queuesRestricted.address,
      races.address,
      []
    ] as any);
    await queues.deployed();
    DeploymentLogger('export QUEUES=' + queues.address);
    deployments.update(27, {
      step: "Finished!"
    });
      
    try {
      await queuesMethods.setGlobalParameters([
        arenas.address,
        hounds.address,
        queuesMethods.address,
        payments.address,
        queuesRestricted.address,
        races.address,
        []
      ] as any);
      configurations.update(8, {
        step: "Set global parameters for queues restricted"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await queuesRestricted.setGlobalParameters([
        arenas.address,
        hounds.address,
        queuesMethods.address,
        payments.address,
        queuesRestricted.address,
        races.address,
        []
      ] as any);
      configurations.update(9, {
        step: "Set global parameters for races restricted"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
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
        [
          racesRestricted.address,racesMethods.address,races.address,
          queuesRestricted.address,queuesMethods.address,queues.address
        ],
        500000000,
        false
      ] as any);
      configurations.update(10, {
        step: "Set global parameters for races methods"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
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
        [
          racesRestricted.address,racesMethods.address,races.address,
          queuesRestricted.address,queuesMethods.address,queues.address
        ],
        500000000,
        false
      ] as any);
      configurations.update(11, {
        step: "Set global parameters for races"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
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
        [
          racesRestricted.address,racesMethods.address,races.address,
          queuesRestricted.address,queuesMethods.address,queues.address
        ],
        500000000,
        false
      ] as any);
      configurations.update(12, {
        step: "Set global parameters hounds"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await arenas.setGlobalParameters(["HoundRace Arenas", "HRA", arenasRestricted.address, arenasMethods.address, payments.address, String(process.env.ETH_ACCOUNT_PUBLIC_KEY), [races.address]] as any);
      configurations.update(4, {
        step: "Set global parameters for incubator methods"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
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
          queuesRestricted.address
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
          address0,
          address0,
          address0,
          address0,
          "0xB1A2BC2EC50000",
          "0x2386F26FC10000",
          "0x2386F26FC10000",
          "0x2386F26FC10000",
          "0x2386F26FC10000"
        ]
      ] as any);
      configurations.update(13, {
        step: "Set global parameters hounds modifier"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
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
          queuesRestricted.address
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
          address0,
          address0,
          address0,
          address0,
          "0xB1A2BC2EC50000",
          "0x2386F26FC10000",
          "0x2386F26FC10000",
          "0x2386F26FC10000",
          "0x2386F26FC10000"
        ]
      ] as any);
      configurations.update(14, {
        step: "Set global parameters hounds restricted"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
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
          queuesRestricted.address
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
          address0,
          address0,
          address0,
          address0,
          "0xB1A2BC2EC50000",
          "0x2386F26FC10000",
          "0x2386F26FC10000",
          "0x2386F26FC10000",
          "0x2386F26FC10000"
        ]
      ] as any);
      configurations.update(15, {
        step: "Set global parameters hounds minter"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
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
          queuesRestricted.address
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
          address0,
          address0,
          address0,
          address0,
          "0xB1A2BC2EC50000",
          "0x2386F26FC10000",
          "0x2386F26FC10000",
          "0x2386F26FC10000",
          "0x2386F26FC10000"
        ]
      ] as any);
      configurations.update(16, {
        step: "Finished!"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await run("verify:verify", {
        address: converters.address
      });
    } catch (err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }
    verifications.update(1, {
      step: "Verify sortings"
    });

    try {
      await run("verify:verify", {
        address: sortings.address
      });
    } catch (err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }
    verifications.update(2, {
      step: "Verify randomness"
    });

    try {
      await run("verify:verify", {
        address: randomness.address
      });
    } catch (err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }
    verifications.update(3, {
      step: "Verify payment methods"
    });
    
    try {
      await run("verify:verify", {
        address: payments.address
      });
    } catch (err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }
    verifications.update(5, {
      step: "Verify houndrace potions"
    });

    try {
      await run("verify:verify", {
        address: houndracePotions.address,
        constructorArguments: ["HoundracePotions", "HP"]
      });
    } catch (err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }
    verifications.update(6, {
      step: "Verify shop restricted"
    });

    try {
      await run("verify:verify", {
        address: shopRestricted.address,
        constructorArguments: [
          [
            address0,address0,address0
          ]
        ]
      });
    } catch (err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }
    verifications.update(7, {
      step: "Verify shop methods"
    });

    try {
      await run("verify:verify", {
        address: shopMethods.address,
        constructorArguments: [
          [
            address0,address0,address0
          ]
        ]
      });
    } catch (err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }
    verifications.update(8, {
      step: "Verify shop"
    });

    try {
      await run("verify:verify", {
        address: shop.address,
        constructorArguments: [
          [
            shopMethods.address,shopRestricted.address
          ]
        ]
      });
    } catch (err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }
    verifications.update(9, {
      step: "Verify arenas restricted"
    });

    try {
      await run("verify:verify", {
        address: arenasRestricted.address,
        constructorArguments: [
          [
            "HoundRace Arenas", "HRA", address0, address0, address0, address0, []
          ]
        ]
      });
    } catch (err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }
    verifications.update(10, {
      step: "Verify arenas"
    });

    try {
      await run("verify:verify", {
        address: arenasMethods.address,
        constructorArguments: [
          [
            "HoundRace Arenas", "HRA", address0, address0, address0, address0, []
          ]
        ]
      });
    } catch (err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }
    verifications.update(10, {
      step: "Verify arenas"
    });

    try {
      await run("verify:verify", {
        address: arenas.address,
        constructorArguments: [
          [
            "HoundRace Arenas", "HRA", arenasRestricted.address, arenasMethods.address, payments.address, String(process.env.ETH_ACCOUNT_PUBLIC_KEY), []
          ]
        ]
      });
    } catch (err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }
    verifications.update(11, {
      step: "Verify genetics"
    });

    try {
      await run("verify:verify", {
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
      DeploymentError((err as NodeJS.ErrnoException).message);
    }
    verifications.update(12, {
      step: "Verify incubator methods"
    });

    try {
      await run("verify:verify", {
        address: incubatorMethods.address,
        constructorArguments: [
          [
            address0,
            address0,
            address0,
            345600,
            1800,
            2419200,
            '300000000000000000'
          ]
        ]
      });
    } catch (err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }
    verifications.update(13, {
      step: "Verify incubator"
    });
    
    try {
      await run("verify:verify", {
        address: incubator.address,
        constructorArguments: [
          [
            incubatorMethods.address,
            randomness.address,
            genetics.address,
            345600,
            1800,
            2419200,
            '300000000000000000'
          ]
        ]
      });
    } catch (err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }
    verifications.update(14, {
      step: "Verify hounds restricted"
    });

    try {
      await run("verify:verify", {
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
              address0,
              address0,
              address0,
              address0,
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
      DeploymentError((err as NodeJS.ErrnoException).message);
    }
    verifications.update(15, {
      step: "Verify hounds modifier"
    });

    
    try {
      await run("verify:verify", {
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
              address0,
              address0,
              address0,
              address0,
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
      DeploymentError((err as NodeJS.ErrnoException).message);
    }
    verifications.update(16, {
      step: "Verify hounds minter"
    });
    
    try {
      await run("verify:verify", {
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
              address0,
              address0,
              address0,
              address0,
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
      DeploymentError((err as NodeJS.ErrnoException).message);
    }
    verifications.update(17, {
      step: "Verify hounds"
    });

    try {
      await run("verify:verify", {
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
              address0,
              houndsModifier.address,
              shop.address
            ],[
              address0,
              address0,
              address0,
              address0,
              "0x38D7EA4C68000",
              "0x2386F26FC10000",
              "0x2386F26FC10000",
              "0x2386F26FC10000",
              "0x2386F26FC10000"
            ]
          ]
        ]
      });
    } catch (err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }
    verifications.update(18, {
      step: "Verify races restricted"
    });

    try {
      await run("verify:verify", {
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
            [],
            500000000,
            false
          ]
        ]
      });
    } catch (err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }
    verifications.update(19, {
      step: "Verify races methods"
    });

    try {
      await run("verify:verify", {
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
            [],
            500000000,
            false
          ]
        ]
      });
    } catch (err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }
    verifications.update(20, {
      step: "Verify races"
    });
    
    try {
      await run("verify:verify", {
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
            address0,
            [],
            500000000,
            false
          ]
        ]
      });
    } catch (err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }
    verifications.update(21, {
      step: "Verify generator methods"
    });

    try {
      await run("verify:verify", {
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
      DeploymentError((err as NodeJS.ErrnoException).message);
    }
    verifications.update(22, {
      step: "Verify generator"
    });

    try {
      await run("verify:verify", {
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
    } catch (err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }
    verifications.update(23, {
      step: "Verify queues restricted"
    });

    try {
      await run("verify:verify", {
        address: queuesRestricted.address,
        constructorArguments: [
          [
            arenas.address,
            hounds.address,
            address0,
            payments.address,
            address0,
            races.address,
            []
          ]
        ]
      });
    } catch (err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }
    verifications.update(24, {
      step: "Verify queues methods"
    });

    try {
      await run("verify:verify", {
        address: queuesMethods.address,
        constructorArguments: [
          [
            arenas.address,
            hounds.address,
            address0,
            payments.address,
            address0,
            races.address,
            []
          ]
        ]
      });
    } catch (err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }
    verifications.update(25, {
      step: "Verify queues"
    });

    try {
      await run("verify:verify", {
        address: queues.address,
        constructorArguments: [
          [
            arenas.address,
            hounds.address,
            queuesMethods.address,
            payments.address,
            queuesRestricted.address,
            races.address,
            []
          ]
        ]
      });
    } catch (err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }
    verifications.update(26, {
      step: "Finished!"
    });

  } catch(err) {
    console.error(err);
    DeploymentError((err as NodeJS.ErrnoException).message);
  }

}



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    DeploymentError(error);
    process.exit(1);
});