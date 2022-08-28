import DeploymentLogger from '../logs/deployment/printers/deployment';
import DeploymentError from '../logs/deployment/printers/errors';
import { run, network } from "hardhat";
import { deployContract } from '../plugins/test/deployContract';
import { Sortings } from '../typechain-types/Sortings';
import { Converters } from '../typechain-types/Converters';
import { Lootboxes, Constructor as LootboxesConstructor } from '../typechain-types/Lootboxes';
import { Randomness } from '../typechain-types/Randomness';
import { Payments } from '../typechain-types/Payments';
import { HoundracePotions } from '../typechain-types/HoundracePotions';
import { ShopRestricted } from '../typechain-types/ShopRestricted';
import { ShopMethods } from '../typechain-types/ShopMethods';
import { Shop, ShopConstructor } from '../typechain-types/Shop';
import { ArenasConstructor, ArenasRestricted } from '../typechain-types/ArenasRestricted';
import { ArenasMethods } from '../typechain-types/ArenasMethods';
import { Arenas } from '../typechain-types/Arenas';
import { Genetics, GeneticsConstructor } from '../typechain-types/Genetics';
import { IncubatorConstructor, IncubatorMethods } from '../typechain-types/IncubatorMethods';
import { Incubator } from '../typechain-types/Incubator';
import { HoundsRestricted } from '../typechain-types/HoundsRestricted';
import { HoundsModifier } from '../typechain-types/HoundsModifier';
import { HoundsMinter } from '../typechain-types/HoundsMinter';
import { Hounds, Constructor as HoundsConstructor, ConstructorBoilerplate, ConstructorFees } from '../typechain-types/Hounds';
import { RacesRestricted } from '../typechain-types/RacesRestricted';
import { RacesMethods } from '../typechain-types/RacesMethods';
import { Races, RacesConstructor } from '../typechain-types/Races';
import { GeneratorZerocost } from '../typechain-types/GeneratorZerocost';
import { GeneratorMethods } from '../typechain-types/GeneratorMethods';
import { Generator, GeneratorConstructor } from '../typechain-types/Generator';
import { QueuesRestricted } from '../typechain-types/QueuesRestricted';
import { QueuesMethods } from '../typechain-types/QueuesMethods';
import { Queues, QueuesConstructor } from '../typechain-types/Queues';
import { globalParams } from '../common/params';


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


const maleBoilerplateGene: Array<number> = [ 0, 1, 8, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 9, 8, 2, 1, 4, 2, 9, 8, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 7, 7, 0, 2, 9, 1, 0, 9, 1, 1, 2, 1, 9, 0, 2, 2, 8, 5, 2, 8, 1, 9 ];
const femaleBoilerplateGene: Array<number> = [ 0, 2, 6, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 3, 1, 9, 1, 4, 2, 4, 7, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 1, 7, 2, 7, 9, 1, 0, 9, 1, 1, 2, 1, 0, 7, 2, 2, 8, 5, 8, 7, 1, 3 ];

const arrayfy = (input: Object): Array<any> => {
  return Object.keys(input).map((key) => [Number(key), input[key]]);
}

async function main() {

  try {

    DeploymentLogger('##############################################');

    const converters = await deployContract({
      name: 'Converters',
      constructor: [],
      props: {}
    }) as Converters;
    DeploymentLogger('export CONVERTERS=' + converters.address);
    deployments.update(1, {
      step: "Deploy sortings"
    });

    const sortings = await deployContract({
      name: 'Sortings',
      constructor: [],
      props: {}
    }) as Sortings;
    DeploymentLogger('export SORTINGS=' + sortings.address);
    deployments.update(2, {
      step: "Deploy randomness"
    });

    const randomness = await deployContract({
      name: 'Randomness',
      constructor: [],
      props: {}
    }) as Randomness;
    DeploymentLogger('export RANDOMNESS=' + randomness.address);
    deployments.update(3, {
      step: "Deploy payment methods"
    });

    const payments = await deployContract({
      name: 'Payments',
      constructor: [],
      props: {}
    }) as Payments;
    DeploymentLogger('export PAYMENTS=' + payments.address);
    deployments.update(5, {
      step: "Deploy houndrace potions"
    });

    let houndracePotionsConstructor: Array<string> = [
      "HoundracePotions", "HP"
    ];
    const houndracePotions = await deployContract({
      name: 'HoundracePotions',
      constructor: houndracePotionsConstructor,
      props: {}
    }) as HoundracePotions;
    DeploymentLogger('export HOUNDRACE_POTIONS=' + houndracePotions.address);
    deployments.update(6, {
      step: "Deploy shop restricted"
    });

    let shopConstructor: ShopConstructor.StructStruct = {
      methods: globalParams.address0,
      restricted: globalParams.address0
    };
    const shopRestricted = await deployContract({
      name: 'ShopRestricted',
      constructor: [arrayfy(shopConstructor)],
      props: {}
    }) as ShopRestricted;
    DeploymentLogger('export SHOP_RESTRICTED=' + shopRestricted.address);
    deployments.update(7, {
      step: "Deploy shop methods"
    });

    const shopMethods = await deployContract({
      name: 'ShopMethods',
      constructor: [arrayfy(shopConstructor)],
      props: {}
    }) as ShopMethods;
    DeploymentLogger('export SHOP_METHODS=' + shopMethods.address);
    deployments.update(8, {
      step: "Deploy shop"
    });

    const shop = await deployContract({
      name: 'Shop',
      constructor: [arrayfy(shopConstructor)],
      props: {}
    }) as Shop;
    DeploymentLogger('export SHOP=' + shop.address);
    deployments.update(9, {
      step: "Deploy arenas restricted"
    });

    let arenasConstructor: ArenasConstructor.StructStruct = {
      alhpadunePercentage: 60,
      allowedCallers: [],
      alphadune: globalParams.address0,
      methods: globalParams.address0,
      name: "HoundRace Arenas",
      symbol: "HRA",
      payments: globalParams.address0,
      restricted: globalParams.address0
    };
    const arenasRestricted = await deployContract({
      name: 'ArenasRestricted',
      constructor: [arrayfy(arenasConstructor)],
      props: {}
    }) as ArenasRestricted;
    DeploymentLogger('export ARENAS_RESTRICTED=' + arenasRestricted.address);
    deployments.update(10, {
      step: "Deploy arenas"
    });

    const arenasMethods = await deployContract({
      name: 'ArenasMethods',
      constructor: [arrayfy(arenasConstructor)],
      props: {}
    }) as ArenasMethods;
    DeploymentLogger('export ARENAS_METHODS=' + arenasMethods.address);
    deployments.update(10, {
      step: "Deploy arenas"
    });

    const arenas = await deployContract({
      name: 'Arenas',
      constructor: [arrayfy(arenasConstructor)],
      props: {}
    }) as Arenas;
    DeploymentLogger('export ARENAS=' + arenas.address);
    deployments.update(11, {
      step: "Deploy genetics"
    });

    let geneticsConstructor: GeneticsConstructor.StructStruct = {
      randomness: globalParams.address0,
      female: globalParams.femaleBoilerplateGene,
      male: globalParams.maleBoilerplateGene,
      femaleGenesProbability: 40,
      maleGenesProbability: 60,
      geneticSequenceSignature: [2,6,10,14,18,22,26,30,34,38,42,46,50],
      maxValues: [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
      terrains: globalParams.address0
    };
    const genetics = await deployContract({
      name: 'Genetics',
      constructor: [arrayfy(geneticsConstructor)],
      props: {}
    }) as Genetics;
    DeploymentLogger('export GENETICS=' + genetics.address);
    deployments.update(12, {
      step: "Deploy incubator methods"
    });

    let incubatorConstructor: IncubatorConstructor.StructStruct = {
      allowed: [],
      gamification: globalParams.address0,
      genetics: globalParams.address0,
      methods: globalParams.address0,
      races: globalParams.address0,
      randomness: globalParams.address0,
      secondsToMaturity: 345600
    };
    const incubatorMethods = await deployContract({
      name: 'IncubatorMethods',
      constructor: [arrayfy(incubatorConstructor)],
      props: {}
    }) as IncubatorMethods;
    DeploymentLogger('export INCUBATOR_METHODS=' + incubatorMethods.address);
    deployments.update(13, {
      step: "Deploy incubator"
    });

    const incubator = await deployContract({
      name: 'Incubator',
      constructor: [arrayfy(incubatorConstructor)],
      props: {}
    }) as Incubator;
    DeploymentLogger('export INCUBATOR=' + incubator.address);
    deployments.update(14, {
      step: "Deploy hounds restricted"
    });

    let houndsConstructorBoilerplate: ConstructorBoilerplate.StructStruct = {
      gamification: globalParams.address0,
      houndModifier: globalParams.address0,
      hounds: globalParams.address0,
      incubator: globalParams.address0,
      minter: globalParams.address0,
      payments: globalParams.address0,
      races: globalParams.address0,
      restricted: globalParams.address0,
      shop: globalParams.address0,
      staterApi: globalParams.address0
    };
    let houndsConstructorFees: ConstructorFees.StructStruct = {
      breedCost: "0xB1A2BC2EC50000",
      breedFee: "0x2386F26FC10000",
      currency: globalParams.address0,
      refillBreedingCooldownCost: "0x2386F26FC10000",
      refillCost: "0x2386F26FC10000",
      refillStaminaCooldownCost: "0x2386F26FC10000"
    };
    let houndsConstructor: HoundsConstructor.StructStruct = {
      name: 'HoundRace',
      symbol: 'HR',
      allowedCallers: [],
      boilerplate: houndsConstructorBoilerplate,
      fees: houndsConstructorFees
    }
    const houndsRestricted = await deployContract({
      name: 'HoundsRestricted',
      constructor: [arrayfy(houndsConstructor)],
      props: {}
    }) as HoundsRestricted;
    DeploymentLogger('export HOUNDS_RESTRICTED=' + houndsRestricted.address);
    deployments.update(15, {
      step: "Deploy hounds modifier"
    });

    const houndsModifier = await deployContract({
      name: 'HoundsModifier',
      constructor: [arrayfy(houndsConstructor)],
      props: {}
    }) as HoundsModifier;
    DeploymentLogger('export HOUNDS_MODIFIER=' + houndsModifier.address);
    deployments.update(16, {
      step: "Deploy hounds minter"
    });

    const houndsMinter = await deployContract({
      name: 'HoundsMinter',
      constructor: [arrayfy(houndsConstructor)],
      props: {}
    }) as HoundsMinter;
    DeploymentLogger('export HOUNDS_MINTER=' + houndsMinter.address);
    deployments.update(17, {
      step: "Deploy hounds"
    });

    const hounds = await deployContract({
      name: 'Hounds',
      constructor: [arrayfy(houndsConstructor)],
      props: {}
    }) as Hounds;
    DeploymentLogger('export HOUNDS=' + hounds.address);
    deployments.update(18, {
      step: "Deploy races restricted"
    });

    let racesConstructor: RacesConstructor.StructStruct = {
      allowedCallers: [],
      arenas: globalParams.address0,
      callable: false,
      generator: globalParams.address0,
      hounds: globalParams.address0,
      methods: globalParams.address0,
      payments: globalParams.address0,
      queues: globalParams.address0,
      randomness: globalParams.address0,
      restricted: globalParams.address0
    }
    const racesRestricted = await deployContract({
      name: 'RacesRestricted',
      constructor: [arrayfy(racesConstructor)],
      props: {}
    }) as RacesRestricted;
    DeploymentLogger('export RACE_RESTRICTED=' + racesRestricted.address);
    deployments.update(19, {
      step: "Deploy races methods"
    });

    const racesMethods = await deployContract({
      name: 'RacesMethods',
      constructor: [arrayfy(racesConstructor)],
      props: {}
    }) as RacesMethods;
    DeploymentLogger('export RACE_METHODS=' + racesMethods.address);
    deployments.update(20, {
      step: "Deploy races"
    });

    const races = await deployContract({
      name: 'Races',
      constructor: [arrayfy(racesConstructor)],
      props: {}
    }) as Races;
    DeploymentLogger('export RACE=' + races.address);

    deployments.update(21, {
      step: "Deploy generator methods"
    });

    let generatorConstructor: GeneratorConstructor.StructStruct = {
      allowed: globalParams.address0,
      arenas: globalParams.address0,
      gamification: globalParams.address0,
      hounds: globalParams.address0,
      incubator: globalParams.address0,
      methods: globalParams.address0,
      payments: globalParams.address0,
      randomness: globalParams.address0,
      zerocost: globalParams.address0
    }
    const generatorMethods = await deployContract({
      name: 'GeneratorMethods',
      constructor: [arrayfy(generatorConstructor)],
      props: {}
    }) as GeneratorMethods;
    DeploymentLogger('export GENERATOR_METHODS=' + generatorMethods.address);
    deployments.update(22, {
      step: "Deploy generator zerocost"
    });

    const generatorZerocost = await deployContract({
      name: 'GeneratorZerocost',
      constructor: [arrayfy(generatorConstructor)],
      props: {
        libraries: {
          Sortings: sortings.address
        }
      }
    }) as GeneratorZerocost;
    DeploymentLogger('export GENERATOR_ZEROCOST=' + generatorZerocost.address);
    deployments.update(23, {
      step: "Deploy generator"
    });

    const generator = await deployContract({
      name: 'Generator',
      constructor: [arrayfy(generatorConstructor)],
      props: {}
    }) as Generator;
    DeploymentLogger('export GENERATOR=' + generator.address);
    deployments.update(24, {
      step: "Deploy queues methods"
    });

    let queuesConstructor: QueuesConstructor.StructStruct = {
      allowedCallers: [],
      arenas: globalParams.address0,
      hounds: globalParams.address0,
      methods: globalParams.address0,
      payments: globalParams.address0,
      raceFee: "20000000000000000",
      races: globalParams.address0,
      restricted: globalParams.address0
    }
    const queuesMethods = await deployContract({
      name: 'QueuesMethods',
      constructor: [arrayfy(queuesConstructor)],
      props: {}
    }) as QueuesMethods;
    DeploymentLogger('export QUEUES_METHODS=' + queuesMethods.address);
    deployments.update(25, {
      step: "Deploy queues restricted"
    });

    const queuesRestricted = await deployContract({
      name: 'QueuesRestricted',
      constructor: [arrayfy(queuesConstructor)],
      props: {}
    }) as QueuesRestricted;
    DeploymentLogger('export QUEUES_RESTRICTED=' + queuesRestricted.address);
    deployments.update(26, {
      step: "Deploy queues"
    });

    const queues = await deployContract({
      name: 'Queues',
      constructor: [arrayfy(queuesConstructor)],
      props: {}
    }) as Queues;
    DeploymentLogger('export QUEUES=' + queues.address);
    deployments.update(27, {
      step: "Finished!"
    });

    let lootboxesConstructor: LootboxesConstructor.StructStruct = {
      alphadune: globalParams.address0,
      canBeOpened: true,
      hounds: globalParams.address0,
      payments: globalParams.address0,
      token_uri: "https://gateway.pinata.cloud/ipfs/QmNe61kgPiDKgear1A5D219MoripTtSR39oJXMZ4mGgeVK",
    }
    const lootboxes = await deployContract({
      name: 'Lootboxes',
      constructor: [arrayfy(lootboxesConstructor)],
      props: {}
    }) as Lootboxes;
    DeploymentLogger('export LOOTBOXES=' + lootboxes.address);
    deployments.update(1, {
      step: "Deploy sortings"
    });



    shopConstructor = {
      methods: shopMethods.address,
      restricted: shopRestricted.address
    }

    arenasConstructor = {
      alhpadunePercentage: 60,
      allowedCallers: [races.address,queues.address],
      alphadune: String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
      methods: arenasMethods.address,
      name: "HoundRace Arenas", 
      symbol: "HRA",
      payments: payments.address,
      restricted: arenasRestricted.address
    }

    geneticsConstructor = {
      female: femaleBoilerplateGene,
      male: maleBoilerplateGene,
      femaleGenesProbability: 40,
      maleGenesProbability: 60,
      geneticSequenceSignature: geneticsConstructor.geneticSequenceSignature,
      maxValues: geneticsConstructor.maxValues,
      randomness: randomness.address,
      terrains: arenas.address
    }
















    try {
      await shopRestricted.setGlobalParameters({
        methods: shopMethods.address,
        restricted: shopRestricted.address
      });
      configurations.update(2, {
        step: "Set global parameters for shop methods"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await shopMethods.setGlobalParameters({
        methods: shopMethods.address,
        restricted: shopRestricted.address
      });
      configurations.update(3, {
        step: "Set global parameters for arenas restricted"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await arenasRestricted.setGlobalParameters({
        name: "HoundRace Arenas", 
        symbol: "HRA", 
        restricted: arenasRestricted.address, 
        methods: arenasMethods.address, 
        payments: payments.address, 
        alphadune: String(process.env.ETH_ACCOUNT_PUBLIC_KEY), 
        allowedCallers: [],
        alhpadunePercentage: 60
      });
      configurations.update(4, {
        step: "Set global parameters for incubator methods"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await incubatorMethods.setGlobalParameters({
        methods: incubatorMethods.address,
        secondsToMaturity: 345600,
        genetics: genetics.address,
        randomness: randomness.address,
        gamification: globalParams.address0,
        races: globalParams.address0,
        allowed: []
      });
      configurations.update(5, {
        step: "Set global parameters for generator methods"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await generatorMethods.setGlobalParameters({
        randomness: randomness.address,
        arenas: arenas.address,
        hounds: hounds.address,
        methods: generatorMethods.address,
        payments: payments.address,
        zerocost: generatorZerocost.address,
        allowed: races.address,
        gamification: globalParams.address0,
        incubator: incubator.address
      });
      configurations.update(6, {
        step: "Set global parameters for generator zerocost"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await generatorZerocost.setGlobalParameters({
        randomness: randomness.address,
        arenas: arenas.address,
        hounds: hounds.address,
        methods: generatorMethods.address,
        payments: payments.address,
        zerocost: generatorZerocost.address,
        allowed: races.address,
        gamification: globalParams.address0,
        incubator: incubator.address
      });
      configurations.update(7, {
        step: "Set global parameters for queues methods"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await queuesMethods.setGlobalParameters({
        arenas: arenas.address,
        hounds: hounds.address,
        methods: queuesMethods.address,
        payments: payments.address,
        restricted: queuesRestricted.address,
        races: races.address,
        allowedCallers: [],
        raceFee: "20000000000000000"
      });
      configurations.update(8, {
        step: "Set global parameters for queues restricted"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await queuesRestricted.setGlobalParameters({
        arenas: arenas.address,
        hounds: hounds.address,
        methods: queuesMethods.address,
        payments: payments.address,
        restricted: queuesRestricted.address,
        races: races.address,
        allowedCallers: [],
        raceFee: "20000000000000000"
      });
      configurations.update(9, {
        step: "Set global parameters for races restricted"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await racesRestricted.setGlobalParameters({
        randomness: randomness.address,
        arenas: arenas.address,
        hounds: hounds.address,
        methods: racesMethods.address,
        generator: generator.address,
        payments: payments.address,
        restricted: racesRestricted.address,
        queues: queues.address,
        allowedCallers: [
          racesRestricted.address,racesMethods.address,races.address,
          queuesRestricted.address,queuesMethods.address,queues.address
        ],
        callable: false
      });
      configurations.update(10, {
        step: "Set global parameters for races methods"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await racesMethods.setGlobalParameters({
        randomness: randomness.address,
        arenas: arenas.address,
        hounds: hounds.address,
        methods: racesMethods.address,
        generator: generator.address,
        payments: payments.address,
        restricted: racesRestricted.address,
        queues: queues.address,
        allowedCallers: [
          racesRestricted.address,racesMethods.address,races.address,
          queuesRestricted.address,queuesMethods.address,queues.address
        ],
        callable: false
      });
      configurations.update(11, {
        step: "Set global parameters for races"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await races.setGlobalParameters({
        randomness: randomness.address,
        arenas: arenas.address,
        hounds: hounds.address,
        methods: racesMethods.address,
        generator: generator.address,
        payments: payments.address,
        restricted: racesRestricted.address,
        queues: queues.address,
        allowedCallers: [
          racesRestricted.address,racesMethods.address,races.address,
          queuesRestricted.address,queuesMethods.address,queues.address
        ],
        callable: false
      });
      configurations.update(12, {
        step: "Set global parameters hounds"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await arenas.setGlobalParameters({
        name: "HoundRace Arenas", 
        symbol: "HRA", 
        restricted: arenasRestricted.address, 
        methods: arenasMethods.address, 
        payments: payments.address, 
        alphadune: String(process.env.ETH_ACCOUNT_PUBLIC_KEY), 
        allowedCallers: [races.address,queues.address],
        alhpadunePercentage: 60
      });
      configurations.update(4, {
        step: "Set global parameters for incubator methods"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await hounds.setGlobalParameters({
        name: "HoundRace",
        symbol: "HR",
        allowedCallers: [
          hounds.address,
          houndsRestricted.address,
          houndsMinter.address,
          races.address,
          racesMethods.address,
          racesRestricted.address,
          queues.address,
          queuesMethods.address,
          queuesRestricted.address
        ],
        boilerplate: {
          incubator: incubator.address,
          staterApi: String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
          payments: payments.address,
          restricted: houndsRestricted.address,
          minter: houndsMinter.address,
          hounds: hounds.address,
          houndModifier: houndsModifier.address,
          shop: shop.address,
          gamification: globalParams.address0,
          races: races.address
        },
        fees: {
          currency: globalParams.address0,
          breedCost: "0xB1A2BC2EC50000",
          breedFee: "0x2386F26FC10000",
          refillBreedingCooldownCost: "0x2386F26FC10000",
          refillCost: "0x2386F26FC10000",
          refillStaminaCooldownCost: "0x2386F26FC10000"
        }
      });
      configurations.update(13, {
        step: "Set global parameters hounds modifier"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await houndsModifier.setGlobalParameters({
        name: "HoundRace",
        symbol: "HR",
        allowedCallers: [
          hounds.address,
          houndsRestricted.address,
          houndsMinter.address,
          races.address,
          racesMethods.address,
          racesRestricted.address,
          queues.address,
          queuesMethods.address,
          queuesRestricted.address
        ],
        boilerplate: {
          incubator: incubator.address,
          staterApi: String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
          payments: payments.address,
          restricted: houndsRestricted.address,
          minter: houndsMinter.address,
          hounds: hounds.address,
          houndModifier: houndsModifier.address,
          shop: shop.address,
          gamification: globalParams.address0,
          races: races.address
        },
        fees: {
          currency: globalParams.address0,
          breedCost: "0xB1A2BC2EC50000",
          breedFee: "0x2386F26FC10000",
          refillBreedingCooldownCost: "0x2386F26FC10000",
          refillCost: "0x2386F26FC10000",
          refillStaminaCooldownCost: "0x2386F26FC10000"
        }
      });
      configurations.update(14, {
        step: "Set global parameters hounds restricted"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await houndsRestricted.setGlobalParameters({
        name: "HoundRace",
        symbol: "HR",
        allowedCallers: [
          hounds.address,
          houndsRestricted.address,
          houndsMinter.address,
          races.address,
          racesMethods.address,
          racesRestricted.address,
          queues.address,
          queuesMethods.address,
          queuesRestricted.address
        ],
        boilerplate: {
          incubator: incubator.address,
          staterApi: String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
          payments: payments.address,
          restricted: houndsRestricted.address,
          minter: houndsMinter.address,
          hounds: hounds.address,
          houndModifier: houndsModifier.address,
          shop: shop.address,
          gamification: globalParams.address0,
          races: races.address
        },
        fees: {
          currency: globalParams.address0,
          breedCost: "0xB1A2BC2EC50000",
          breedFee: "0x2386F26FC10000",
          refillBreedingCooldownCost: "0x2386F26FC10000",
          refillCost: "0x2386F26FC10000",
          refillStaminaCooldownCost: "0x2386F26FC10000"
        }
      });
      configurations.update(15, {
        step: "Set global parameters hounds minter"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await houndsMinter.setGlobalParameters({
        name: "HoundRace",
        symbol: "HR",
        allowedCallers: [
          hounds.address,
          houndsRestricted.address,
          houndsMinter.address,
          races.address,
          racesMethods.address,
          racesRestricted.address,
          queues.address,
          queuesMethods.address,
          queuesRestricted.address
        ],
        boilerplate: {
          incubator: incubator.address,
          staterApi: String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
          payments: payments.address,
          restricted: houndsRestricted.address,
          minter: houndsMinter.address,
          hounds: hounds.address,
          houndModifier: houndsModifier.address,
          shop: shop.address,
          gamification: globalParams.address0,
          races: races.address
        },
        fees: {
          currency: globalParams.address0,
          breedCost: "0xB1A2BC2EC50000",
          breedFee: "0x2386F26FC10000",
          refillBreedingCooldownCost: "0x2386F26FC10000",
          refillCost: "0x2386F26FC10000",
          refillStaminaCooldownCost: "0x2386F26FC10000"
        }
      });
      configurations.update(16, {
        step: "Finished!"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }




















    if ( network.name !== "hardhat" ) {

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
              globalParams.address0, globalParams.address0, globalParams.address0
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
              globalParams.address0, globalParams.address0, globalParams.address0
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
              "HoundRace Arenas", "HRA", globalParams.address0, globalParams.address0, globalParams.address0, globalParams.address0, [], 60
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
              "HoundRace Arenas", "HRA", globalParams.address0, globalParams.address0, globalParams.address0, globalParams.address0, [], 60
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
              "HoundRace Arenas", "HRA", arenasRestricted.address, arenasMethods.address, payments.address, String(process.env.ETH_ACCOUNT_PUBLIC_KEY), [], 60
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
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
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
                globalParams.address0,
                String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
                globalParams.address0,
                globalParams.address0,
                globalParams.address0,
                globalParams.address0,
                globalParams.address0,
                globalParams.address0
              ],[
                payments.address,
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
                globalParams.address0,
                String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
                globalParams.address0,
                globalParams.address0,
                globalParams.address0,
                globalParams.address0,
                globalParams.address0,
                globalParams.address0
              ],[
                payments.address,
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
                globalParams.address0,
                String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
                globalParams.address0,
                globalParams.address0,
                globalParams.address0,
                globalParams.address0,
                globalParams.address0,
                globalParams.address0
              ],[
                payments.address,
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
                globalParams.address0,
                houndsModifier.address,
                shop.address
              ],[
                payments.address,
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
      verifications.update(18, {
        step: "Verify races restricted"
      });

      try {
        await run("verify:verify", {
          address: racesRestricted.address,
          constructorArguments: [
            [
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
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
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
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
              globalParams.address0,
              payments.address,
              racesRestricted.address,
              globalParams.address0,
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
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0
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
              globalParams.address0,
              payments.address,
              globalParams.address0,
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
              globalParams.address0,
              payments.address,
              globalParams.address0,
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

      try {
        await run("verify:verify", {
          address: lootboxes.address,
          constructorArguments: [
            [
              "https://gateway.pinata.cloud/ipfs/QmNe61kgPiDKgear1A5D219MoripTtSR39oJXMZ4mGgeVK", 
              hounds.address, 
              payments.address,
              String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
              true
            ]
          ]
        });
      } catch (err) {
        DeploymentError((err as NodeJS.ErrnoException).message);
      }

    }

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