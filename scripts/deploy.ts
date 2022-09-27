import DeploymentLogger from '../logs/deployment/printers/deployment';
import DeploymentError from '../logs/deployment/printers/errors';
import { run, network } from "hardhat";
import { deployContract } from '../plugins/test/deployContract';
import { Sortings } from '../typechain-types/Sortings';
import { Converters } from '../typechain-types/Converters';
import { Lootboxes, Constructor as LootboxesConstructor } from '../typechain-types/Lootboxes';
import { PaymentsRestricted } from '../typechain-types/PaymentsRestricted';
import { PaymentsMethods } from '../typechain-types/PaymentsMethods';
import { Randomness } from '../typechain-types/Randomness';
import { Payments, PaymentsConstructor } from '../typechain-types/Payments';
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
import { HoundsZerocost } from '../typechain-types/HoundsZerocost';
import { Hounds, Constructor as HoundsConstructor, ConstructorBoilerplate, ConstructorFees } from '../typechain-types/Hounds';
import { RacesRestricted } from '../typechain-types/RacesRestricted';
import { RacesMethods } from '../typechain-types/RacesMethods';
import { Races, RacesConstructor } from '../typechain-types/Races';
import { GeneratorZerocost } from '../typechain-types/GeneratorZerocost';
import { GeneratorMethods } from '../typechain-types/GeneratorMethods';
import { Generator, GeneratorConstructor } from '../typechain-types/Generator';
import { QueuesRestricted } from '../typechain-types/QueuesRestricted';
import { QueuesZerocost } from '../typechain-types/QueuesZerocost';
import { QueuesMethods } from '../typechain-types/QueuesMethods';
import { Queues, QueuesConstructor } from '../typechain-types/Queues';
import { globalParams } from '../common/params';
import { Gamification, Constructor as GamificationConstructor } from '../typechain-types/Gamification';
import { arrayfy } from '../plugins/arrayfy';


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

    const paymentsConstructor: PaymentsConstructor.StructStruct = {
      alphadune: globalParams.address0,
      methods: globalParams.address0,
      restricted: globalParams.address0
    };
    const paymentsRestricted = await deployContract({
      name: 'PaymentsRestricted',
      constructor: [arrayfy(paymentsConstructor)],
      props: {}
    }) as PaymentsRestricted;
    DeploymentLogger('export PAYMENTS_RESTRICTED=' + paymentsRestricted.address);
    deployments.update(5, {
      step: "Deploy houndrace potions"
    });

    const paymentsMethods = await deployContract({
      name: 'PaymentsMethods',
      constructor: [arrayfy(paymentsConstructor)],
      props: {}
    }) as PaymentsMethods;
    DeploymentLogger('export PAYMENTS_METHODS=' + paymentsMethods.address);
    deployments.update(5, {
      step: "Deploy houndrace potions"
    });

    const payments = await deployContract({
      name: 'Payments',
      constructor: [arrayfy(paymentsConstructor)],
      props: {}
    }) as Payments;
    DeploymentLogger('export PAYMENTS=' + payments.address);
    deployments.update(5, {
      step: "Deploy houndrace potions"
    });

    const houndracePotionsConstructor: Array<string> = [
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

    const shopConstructor: ShopConstructor.StructStruct = {
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

    const arenasConstructor: ArenasConstructor.StructStruct = {
      name: "HoundRace Arenas",
      symbol: "HRA",
      restricted: globalParams.address0,
      methods: globalParams.address0,
      payments: globalParams.address0,
      alphadune: globalParams.address0,
      allowedCallers: [],
      alhpadunePercentage: 60
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

    const geneticsConstructor: GeneticsConstructor.StructStruct = {
      randomness: globalParams.address0,
      terrains: globalParams.address0,
      male: globalParams.maleBoilerplateGene,
      female: globalParams.femaleBoilerplateGene,
      maleGenesProbability: 60,
      femaleGenesProbability: 40,
      geneticSequenceSignature: [2,6,10,14,18,22,26,30,34,38,42,46,50],
      maxValues: [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
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

    const incubatorConstructor: IncubatorConstructor.StructStruct = {
      methods: globalParams.address0,
      randomness: globalParams.address0,
      genetics: globalParams.address0,
      gamification: globalParams.address0,
      races: globalParams.address0,
      allowed: [],
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

    const houndsConstructorBoilerplate: ConstructorBoilerplate.StructStruct = {
      incubator: globalParams.address0,
      alphadune: globalParams.address0,
      payments: globalParams.address0,
      restricted: globalParams.address0,
      minter: globalParams.address0,
      houndsModifier: globalParams.address0,
      zerocost: globalParams.address0,
      shop: globalParams.address0,
      races: globalParams.address0,
      gamification: globalParams.address0
    };
    const houndsConstructorFees: ConstructorFees.StructStruct = {
      currency: globalParams.address0,
      breedCostCurrency: globalParams.address0,
      breedFeeCurrency: globalParams.address0,
      breedCost: "0xB1A2BC2EC50000",
      breedFee: "0x2386F26FC10000"
    };
    const houndsConstructor: HoundsConstructor.StructStruct = {
      name: 'HoundRace',
      symbol: 'HR',
      allowedCallers: [],
      boilerplate: houndsConstructorBoilerplate,
      fees: houndsConstructorFees
    }
    const houndsRestricted = await deployContract({
      name: 'HoundsRestricted',
      constructor: [arrayfy({
        ...houndsConstructor,
        boilerplate: arrayfy(houndsConstructorBoilerplate),
        fees: arrayfy(houndsConstructorFees)
      })],
      props: {}
    }) as HoundsRestricted;
    DeploymentLogger('export HOUNDS_RESTRICTED=' + houndsRestricted.address);
    deployments.update(15, {
      step: "Deploy hounds modifier"
    });

    const houndsZerocost = await deployContract({
      name: 'HoundsZerocost',
      constructor: [arrayfy({
        ...houndsConstructor,
        boilerplate: arrayfy(houndsConstructorBoilerplate),
        fees: arrayfy(houndsConstructorFees)
      })],
      props: {}
    }) as HoundsZerocost;
    DeploymentLogger('export HOUNDS_ZEROCOST=' + houndsZerocost.address);
    deployments.update(16, {
      step: "Deploy hounds minter"
    });

    const houndsModifier = await deployContract({
      name: 'HoundsModifier',
      constructor: [arrayfy({
        ...houndsConstructor,
        boilerplate: arrayfy(houndsConstructorBoilerplate),
        fees: arrayfy(houndsConstructorFees)
      })],
      props: {}
    }) as HoundsModifier;
    DeploymentLogger('export HOUNDS_MODIFIER=' + houndsModifier.address);
    deployments.update(16, {
      step: "Deploy hounds minter"
    });

    const houndsMinter = await deployContract({
      name: 'HoundsMinter',
      constructor: [arrayfy({
        ...houndsConstructor,
        boilerplate: arrayfy(houndsConstructorBoilerplate),
        fees: arrayfy(houndsConstructorFees)
      })],
      props: {}
    }) as HoundsMinter;
    DeploymentLogger('export HOUNDS_MINTER=' + houndsMinter.address);
    deployments.update(17, {
      step: "Deploy hounds"
    });

    const hounds = await deployContract({
      name: 'Hounds',
      constructor: [arrayfy({
        ...houndsConstructor,
        boilerplate: arrayfy(houndsConstructorBoilerplate),
        fees: arrayfy(houndsConstructorFees)
      })],
      props: {}
    }) as Hounds;
    DeploymentLogger('export HOUNDS=' + hounds.address);
    deployments.update(18, {
      step: "Deploy races restricted"
    });

    const gamificationConstructor: GamificationConstructor.StructStruct = {
      defaultBreeding: globalParams.houndBreeding,
      defaultStamina: globalParams.houndStamina,
      allowed: [],
      methods: globalParams.address0,
      restricted: globalParams.address0
    }
    const gamificationRestricted = await deployContract({
      name: 'GamificationRestricted',
      constructor: [arrayfy({
        ...gamificationConstructor,
        defaultBreeding: arrayfy(globalParams.houndBreeding),
        defaultStamina: arrayfy(globalParams.houndStamina)
      })],
      props: {}
    }) as Gamification;
    DeploymentLogger('export GAMIFICATION_RESTRICTED=' + gamificationRestricted.address);
    deployments.update(18, {
      step: "Deploy races restricted"
    });

    const gamificationMethods = await deployContract({
      name: 'GamificationMethods',
      constructor: [arrayfy({
        ...gamificationConstructor,
        defaultBreeding: arrayfy(globalParams.houndBreeding),
        defaultStamina: arrayfy(globalParams.houndStamina)
      })],
      props: {}
    }) as Gamification;
    DeploymentLogger('export GAMIFICATION_METHODS=' + gamificationMethods.address);
    deployments.update(18, {
      step: "Deploy races restricted"
    });

    const gamification = await deployContract({
      name: 'Gamification',
      constructor: [arrayfy({
        ...gamificationConstructor,
        defaultBreeding: arrayfy(globalParams.houndBreeding),
        defaultStamina: arrayfy(globalParams.houndStamina)
      })],
      props: {}
    }) as Gamification;
    DeploymentLogger('export GAMIFICATIONS=' + gamification.address);
    deployments.update(18, {
      step: "Deploy races restricted"
    });

    const racesConstructor: RacesConstructor.StructStruct = {
      randomness: globalParams.address0,
      arenas: globalParams.address0,
      hounds: globalParams.address0,
      methods: globalParams.address0,
      generator: globalParams.address0,
      payments: globalParams.address0,
      restricted: globalParams.address0,
      queues: globalParams.address0,
      races: globalParams.address0,
      allowedCallers: [],
      callable: false
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

    const generatorConstructor: GeneratorConstructor.StructStruct = {
      randomness: globalParams.address0,
      arenas: globalParams.address0,
      hounds: globalParams.address0,
      allowed: globalParams.address0,
      methods: globalParams.address0,
      payments: globalParams.address0,
      zerocost: globalParams.address0,
      incubator: globalParams.address0,
      gamification: globalParams.address0
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

    const queuesConstructor: QueuesConstructor.StructStruct = {
      arenas: globalParams.address0,
      hounds: globalParams.address0,
      methods: globalParams.address0,
      payments: globalParams.address0,
      restricted: globalParams.address0,
      races: globalParams.address0,
      queues: globalParams.address0,
      zerocost: globalParams.address0,
      incubator: globalParams.address0,
      allowedCallers: []
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

    const queuesZerocost = await deployContract({
      name: 'QueuesZerocost',
      constructor: [arrayfy(queuesConstructor)],
      props: {}
    }) as QueuesZerocost;
    DeploymentLogger('export QUEUES_ZEROCOST=' + queuesZerocost.address);
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

    const lootboxesConstructor: LootboxesConstructor.StructStruct = {
      allowedApprovals: [],
      hounds: globalParams.address0,
      payments: globalParams.address0,
      alphadune: globalParams.address0,
      canBeOpened: true
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







    const newPaymentsConstructor: PaymentsConstructor.StructStruct = {
      alphadune: String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
      methods: paymentsMethods.address,
      restricted: paymentsRestricted.address
    }
  
    const newShopConstructor: ShopConstructor.StructStruct = {
      methods: shopMethods.address,
      restricted: shopRestricted.address
    }

    const newArenasConstructor: ArenasConstructor.StructStruct = {
      name: "HoundRace Arenas", 
      symbol: "HRA",
      restricted: arenasRestricted.address,
      methods: arenasMethods.address,
      payments: payments.address,
      alphadune: String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
      allowedCallers: [races.address,queues.address],
      alhpadunePercentage: 60
    }

    const newGeneticsConstructor: GeneticsConstructor.StructStruct = {
      randomness: randomness.address,
      terrains: arenas.address,
      male: maleBoilerplateGene,
      female: femaleBoilerplateGene,
      maleGenesProbability: 60,
      femaleGenesProbability: 40,
      geneticSequenceSignature: geneticsConstructor.geneticSequenceSignature,
      maxValues: geneticsConstructor.maxValues
    }

    const newIncubatorConstructor: IncubatorConstructor.StructStruct = {
      methods: incubatorMethods.address,
      randomness: randomness.address,
      genetics: genetics.address,
      gamification: gamification.address,
      races: races.address,
      allowed: [incubator.address, hounds.address, incubatorMethods.address],
      secondsToMaturity: 345600
    }

    const newHoundsConstructorFees: ConstructorFees.StructStruct = {
      currency: globalParams.address0,
      breedCostCurrency: globalParams.address0,
      breedFeeCurrency: globalParams.address0,
      breedCost: "0xB1A2BC2EC50000",
      breedFee: "0x2386F26FC10000"
    };
    const newHoundsConstructorBoilerplate: ConstructorBoilerplate.StructStruct = {
      incubator: incubator.address,
      alphadune: String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
      payments: payments.address,
      restricted: houndsRestricted.address,
      minter: houndsMinter.address,
      houndsModifier: houndsModifier.address,
      zerocost: houndsZerocost.address,
      shop: shop.address,
      races: races.address,
      gamification: gamification.address
    };
    const newHoundsConstructor: HoundsConstructor.StructStruct = {
      name: 'HoundRace',
      symbol: 'HR',
      allowedCallers: [
        hounds.address,
        races.address,
        queues.address
      ],
      boilerplate: newHoundsConstructorBoilerplate,
      fees: newHoundsConstructorFees
    }

    const newGamificationConstructor: GamificationConstructor.StructStruct = {
      defaultBreeding: globalParams.houndBreeding,
      defaultStamina: globalParams.houndStamina,
      allowed: [incubator.address, hounds.address, incubatorMethods.address],
      restricted: gamificationRestricted.address,
      methods: gamificationMethods.address
    }

    const newRacesConstructor: RacesConstructor.StructStruct = {
      randomness: randomness.address,
      arenas: arenas.address,
      hounds: hounds.address,
      methods: racesMethods.address,
      generator: generator.address,
      payments: payments.address,
      restricted: racesRestricted.address,
      queues: queues.address,
      races: races.address,
      allowedCallers: [races.address, queues.address],
      callable: false
    }

    const newGeneratorConstructor: GeneratorConstructor.StructStruct = {
      randomness: randomness.address,
      arenas: arenas.address,
      hounds: hounds.address,
      allowed: races.address,
      methods: generatorMethods.address,
      payments: payments.address,
      zerocost: generatorZerocost.address,
      incubator: incubator.address,
      gamification: gamification.address
    }

    const newQueuesConstructor: QueuesConstructor.StructStruct = {
      arenas: arenas.address,
      hounds: hounds.address,
      methods: queuesMethods.address,
      payments: payments.address,
      restricted: queuesRestricted.address,
      races: races.address,
      allowedCallers: [races.address],
      queues: queues.address,
      zerocost: queuesZerocost.address,
      incubator: incubator.address
    }

    const newLootboxesConstructor: LootboxesConstructor.StructStruct = {
      allowedApprovals: [],
      hounds: hounds.address,
      payments: payments.address,
      alphadune: String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
      canBeOpened: true
    }









    try {
      await paymentsRestricted.setGlobalParameters(newPaymentsConstructor);
      configurations.update(2, {
        step: "Set global parameters for shop methods"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await paymentsMethods.setGlobalParameters(newPaymentsConstructor);
      configurations.update(2, {
        step: "Set global parameters for shop methods"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await payments.setGlobalParameters(newPaymentsConstructor);
      configurations.update(2, {
        step: "Set global parameters for shop methods"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await shopRestricted.setGlobalParameters(newShopConstructor);
      configurations.update(2, {
        step: "Set global parameters for shop methods"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await shopMethods.setGlobalParameters(newShopConstructor);
      configurations.update(3, {
        step: "Set global parameters for arenas restricted"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await shop.setGlobalParameters(newShopConstructor);
      configurations.update(3, {
        step: "Set global parameters for arenas restricted"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await lootboxes.setGlobalParameters(newLootboxesConstructor);
      configurations.update(2, {
        step: "Set global parameters for shop methods"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await gamificationRestricted.setGlobalParameters(newGamificationConstructor);
      configurations.update(2, {
        step: "Set global parameters for shop methods"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await gamificationMethods.setGlobalParameters(newGamificationConstructor);
      configurations.update(2, {
        step: "Set global parameters for shop methods"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await gamification.setGlobalParameters(newGamificationConstructor);
      configurations.update(2, {
        step: "Set global parameters for shop methods"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await genetics.setGlobalParameters(newGeneticsConstructor);
      configurations.update(2, {
        step: "Set global parameters for shop methods"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await arenasRestricted.setGlobalParameters(newArenasConstructor);
      configurations.update(4, {
        step: "Set global parameters for incubator methods"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await arenasMethods.setGlobalParameters(newArenasConstructor);
      configurations.update(4, {
        step: "Set global parameters for incubator methods"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await arenas.setGlobalParameters(newArenasConstructor);
      configurations.update(4, {
        step: "Set global parameters for incubator methods"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await incubatorMethods.setGlobalParameters(newIncubatorConstructor);
      configurations.update(5, {
        step: "Set global parameters for generator methods"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await incubator.setGlobalParameters(newIncubatorConstructor);
      configurations.update(5, {
        step: "Set global parameters for generator methods"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await generatorMethods.setGlobalParameters(newGeneratorConstructor);
      configurations.update(6, {
        step: "Set global parameters for generator zerocost"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await generatorZerocost.setGlobalParameters(newGeneratorConstructor);
      configurations.update(6, {
        step: "Set global parameters for generator zerocost"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await generator.setGlobalParameters(newGeneratorConstructor);
      configurations.update(6, {
        step: "Set global parameters for generator zerocost"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await queuesMethods.setGlobalParameters(newQueuesConstructor);
      configurations.update(8, {
        step: "Set global parameters for queues restricted"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await queuesZerocost.setGlobalParameters(newQueuesConstructor);
      configurations.update(8, {
        step: "Set global parameters for queues restricted"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await queuesRestricted.setGlobalParameters(newQueuesConstructor);
      configurations.update(9, {
        step: "Set global parameters for races restricted"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await queues.setGlobalParameters(newQueuesConstructor);
      configurations.update(9, {
        step: "Set global parameters for races restricted"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await racesRestricted.setGlobalParameters(newRacesConstructor);
      configurations.update(10, {
        step: "Set global parameters for races methods"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await racesMethods.setGlobalParameters(newRacesConstructor);
      configurations.update(11, {
        step: "Set global parameters for races"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await races.setGlobalParameters(newRacesConstructor);
      configurations.update(12, {
        step: "Set global parameters hounds"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await houndsModifier.setGlobalParameters(newHoundsConstructor);
      configurations.update(14, {
        step: "Set global parameters hounds restricted"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await houndsRestricted.setGlobalParameters(newHoundsConstructor);
      configurations.update(15, {
        step: "Set global parameters hounds minter"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await houndsMinter.setGlobalParameters(newHoundsConstructor);
      configurations.update(16, {
        step: "Finished!"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await houndsZerocost.setGlobalParameters(newHoundsConstructor);
      configurations.update(16, {
        step: "Finished!"
      });
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await hounds.setGlobalParameters(newHoundsConstructor);
      configurations.update(13, {
        step: "Set global parameters hounds modifier"
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
          address: payments.address,
          constructorArguments: [arrayfy(paymentsConstructor)]
        });
      } catch (err) {
        DeploymentError((err as NodeJS.ErrnoException).message);
      }
      verifications.update(5, {
        step: "Verify houndrace potions"
      });

      try {
        await run("verify:verify", {
          address: paymentsRestricted.address,
          constructorArguments: [arrayfy(paymentsConstructor)]
        });
      } catch (err) {
        DeploymentError((err as NodeJS.ErrnoException).message);
      }
      verifications.update(5, {
        step: "Verify houndrace potions"
      });

      try {
        await run("verify:verify", {
          address: paymentsMethods.address,
          constructorArguments: [arrayfy(paymentsConstructor)]
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
          constructorArguments: houndracePotionsConstructor
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
          constructorArguments: [arrayfy(shopConstructor)]
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
          constructorArguments: [arrayfy(shopConstructor)]
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
          constructorArguments: [arrayfy(shopConstructor)]
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
          constructorArguments: [arrayfy(arenasConstructor)]
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
          constructorArguments: [arrayfy(arenasConstructor)]
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
          constructorArguments: [arrayfy(arenasConstructor)]
        });
      } catch (err) {
        DeploymentError((err as NodeJS.ErrnoException).message);
      }
      verifications.update(11, {
        step: "Verify genetics"
      });

      try {
        await run("verify:verify", {
          address: gamificationRestricted.address,
          constructorArguments: [arrayfy({
            ...gamificationConstructor,
            defaultBreeding: arrayfy(globalParams.houndBreeding),
            defaultStamina: arrayfy(globalParams.houndStamina)
          })]
        });
      } catch (err) {
        DeploymentError((err as NodeJS.ErrnoException).message);
      }
      verifications.update(10, {
        step: "Verify arenas"
      });

      try {
        await run("verify:verify", {
          address: gamificationMethods.address,
          constructorArguments: [arrayfy({
            ...gamificationConstructor,
            defaultBreeding: arrayfy(globalParams.houndBreeding),
            defaultStamina: arrayfy(globalParams.houndStamina)
          })]
        });
      } catch (err) {
        DeploymentError((err as NodeJS.ErrnoException).message);
      }
      verifications.update(10, {
        step: "Verify arenas"
      });

      try {
        await run("verify:verify", {
          address: gamification.address,
          constructorArguments: [arrayfy({
            ...gamificationConstructor,
            defaultBreeding: arrayfy(globalParams.houndBreeding),
            defaultStamina: arrayfy(globalParams.houndStamina)
          })]
        });
      } catch (err) {
        DeploymentError((err as NodeJS.ErrnoException).message);
      }
      verifications.update(10, {
        step: "Verify arenas"
      });

      try {
        await run("verify:verify", {
          address: genetics.address,
          constructorArguments: [arrayfy(geneticsConstructor)]
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
          constructorArguments: [arrayfy(incubatorConstructor)]
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
          constructorArguments: [arrayfy(incubatorConstructor)]
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
          constructorArguments: [arrayfy({
            ...houndsConstructor,
            boilerplate: arrayfy(houndsConstructorBoilerplate),
            fees: arrayfy(houndsConstructorFees)
          })]
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
          constructorArguments: [arrayfy({
            ...houndsConstructor,
            boilerplate: arrayfy(houndsConstructorBoilerplate),
            fees: arrayfy(houndsConstructorFees)
          })]
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
          constructorArguments: [arrayfy({
            ...houndsConstructor,
            boilerplate: arrayfy(houndsConstructorBoilerplate),
            fees: arrayfy(houndsConstructorFees)
          })]
        });
      } catch (err) {
        DeploymentError((err as NodeJS.ErrnoException).message);
      }
      verifications.update(17, {
        step: "Verify hounds"
      });

      try {
        await run("verify:verify", {
          address: houndsZerocost.address,
          constructorArguments: [arrayfy({
            ...houndsConstructor,
            boilerplate: arrayfy(houndsConstructorBoilerplate),
            fees: arrayfy(houndsConstructorFees)
          })]
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
          constructorArguments: [arrayfy({
            ...houndsConstructor,
            boilerplate: arrayfy(houndsConstructorBoilerplate),
            fees: arrayfy(houndsConstructorFees)
          })]
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
          constructorArguments: [arrayfy(racesConstructor)]
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
          constructorArguments: [arrayfy(racesConstructor)]
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
          constructorArguments: [arrayfy(racesConstructor)]
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
          constructorArguments: [arrayfy(generatorConstructor)]
        });
      } catch (err) {
        DeploymentError((err as NodeJS.ErrnoException).message);
      }
      verifications.update(22, {
        step: "Verify generator"
      });

      try {
        await run("verify:verify", {
          address: generatorZerocost.address, 
          constructorArguments: [arrayfy(generatorConstructor)]
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
          constructorArguments: [arrayfy(generatorConstructor)]
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
          constructorArguments: [arrayfy(queuesConstructor)]
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
          constructorArguments: [arrayfy(queuesConstructor)]
        });
      } catch (err) {
        DeploymentError((err as NodeJS.ErrnoException).message);
      }
      verifications.update(25, {
        step: "Verify queues"
      });

      try {
        await run("verify:verify", {
          address: queuesZerocost.address,
          constructorArguments: [arrayfy(queuesConstructor)]
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
          constructorArguments: [arrayfy(queuesConstructor)]
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
          constructorArguments: [arrayfy(lootboxesConstructor)]
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