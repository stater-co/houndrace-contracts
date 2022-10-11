import DeploymentLogger from '../logs/deployment/printers/deployment';
import DeploymentError from '../logs/deployment/printers/errors';
import { run, network } from "hardhat";
import { deployContract } from '../plugins/test/deployContract';
import { Lootboxes, LootboxesConstructor } from '../typechain-types/Lootboxes';
import { PaymentsRestricted } from '../typechain-types/PaymentsRestricted';
import { PaymentsMethods } from '../typechain-types/PaymentsMethods';
import { Payments, PaymentsConstructor } from '../typechain-types/Payments';
import { HoundracePotions } from '../typechain-types/HoundracePotions';
import { ShopRestricted } from '../typechain-types/ShopRestricted';
import { ShopMethods } from '../typechain-types/ShopMethods';
import { Shop, ShopConstructor } from '../typechain-types/Shop';
import { ArenasConstructor, ArenasRestricted } from '../typechain-types/ArenasRestricted';
import { ArenasMethods } from '../typechain-types/ArenasMethods';
import { Arenas } from '../typechain-types/Arenas';
import { HoundsRestricted } from '../typechain-types/HoundsRestricted';
import { HoundsModifier } from '../typechain-types/HoundsModifier';
import { HoundsMinter } from '../typechain-types/HoundsMinter';
import { HoundsZerocost } from '../typechain-types/HoundsZerocost';
import { Hounds, Constructor as HoundsConstructor, ConstructorBoilerplate, ConstructorFees } from '../typechain-types/Hounds';
import { RacesRestricted } from '../typechain-types/RacesRestricted';
import { RacesMethods } from '../typechain-types/RacesMethods';
import { Races, RacesConstructor } from '../typechain-types/Races';
import { QueuesRestricted } from '../typechain-types/QueuesRestricted';
import { QueuesZerocost } from '../typechain-types/QueuesZerocost';
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

const arrayfy = (input: any): Array<any> => {
  return Object.keys(input).map((key) => input[key]);
}

async function main() {

  try {

    DeploymentLogger('##############################################');

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
      restricted: globalParams.address0,
      alphadune: globalParams.address0
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

    const houndsConstructorBoilerplate: ConstructorBoilerplate.StructStruct = {
      alphadune: globalParams.address0,
      payments: globalParams.address0,
      restricted: globalParams.address0,
      minter: globalParams.address0,
      houndsModifier: globalParams.address0,
      hounds: globalParams.address0,
      zerocost: globalParams.address0,
      shop: globalParams.address0,
      races: globalParams.address0
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

    const racesConstructor: RacesConstructor.StructStruct = {
      arenas: globalParams.address0,
      hounds: globalParams.address0,
      methods: globalParams.address0,
      payments: globalParams.address0,
      restricted: globalParams.address0,
      queues: globalParams.address0,
      races: globalParams.address0,
      allowedCallers: []
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

    const queuesConstructor: QueuesConstructor.StructStruct = {
      arenas: globalParams.address0,
      hounds: globalParams.address0,
      methods: globalParams.address0,
      payments: globalParams.address0,
      restricted: globalParams.address0,
      races: globalParams.address0,
      queues: globalParams.address0,
      zerocost: globalParams.address0,
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
      name: "",
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
      restricted: shopRestricted.address,
      alphadune: String(process.env.ETH_ACCOUNT_PUBLIC_KEY)
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

    const newHoundsConstructorFees: ConstructorFees.StructStruct = {
      currency: globalParams.address0,
      breedCostCurrency: globalParams.address0,
      breedFeeCurrency: globalParams.address0,
      breedCost: "0xB1A2BC2EC50000",
      breedFee: "0x2386F26FC10000"
    };

    const newHoundsConstructorBoilerplate: ConstructorBoilerplate.StructStruct = {
      alphadune: String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
      payments: payments.address,
      restricted: houndsRestricted.address,
      minter: houndsMinter.address,
      houndsModifier: houndsModifier.address,
      zerocost: houndsZerocost.address,
      shop: shop.address,
      hounds: hounds.address,
      races: races.address
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

    const newRacesConstructor: RacesConstructor.StructStruct = {
      arenas: arenas.address,
      hounds: hounds.address,
      methods: racesMethods.address,
      payments: payments.address,
      restricted: racesRestricted.address,
      queues: queues.address,
      races: races.address,
      allowedCallers: [races.address, queues.address]
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
      zerocost: queuesZerocost.address
    }

    const newLootboxesConstructor: LootboxesConstructor.StructStruct = {
      name: "HoundRace Lootboxes",
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