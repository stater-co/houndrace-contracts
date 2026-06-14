import { run } from "hardhat";
import { globalParams } from '../common/params';

// Recovered from the on-chain Hounds creation transaction (deploy-time value of
// Date.now() captured once when common/params.ts was loaded during deployment).
// Both defaultHound.stamina.staminaLastUpdate and defaultHound.identity.birthDate
// were 0x6a26a243. We must reuse the exact value or the constructor args won't match.
const HOUNDS_DEPLOY_TIMESTAMP = 0x6a26a243; // 1780051011

const arrayfy = (input: any): Array<any> => {
  return Object.keys(input).map((key) => input[key]);
}

const address0 = globalParams.address0;

type Target = {
  name: string;
  contract: string;
  address: string | undefined;
  args: Array<any>;
};

async function main() {

  // Pin the Hounds default timestamps to the deploy-time value
  (globalParams.defaultHound as any).stamina.staminaLastUpdate = HOUNDS_DEPLOY_TIMESTAMP;
  (globalParams.defaultHound as any).identity.birthDate = HOUNDS_DEPLOY_TIMESTAMP;

  // ---- Reconstruct deploy-time constructors (must match scripts/deploy.ts) ----

  const paymentsConstructor = {
    operators: [],
    methods: address0,
    targets: []
  };

  const houndPotionsConstructor: Array<string> = [
    "Hound Potions", "HPO", "500000000000000000000000000"
  ];

  const shopConstructor = {
    operators: [],
    methods: address0,
    zerocost: address0,
    discounts: address0,
    restricted: address0,
    discountsReceiverWallet: address0,
    targets: []
  };

  const arenasConstructor = {
    name: "Houndrace Arenas",
    symbol: "HRA",
    operators: [],
    restricted: address0,
    methods: address0,
    payments: address0,
    alphadune: address0,
    targets: [],
    alphadunePercentage: 60
  };

  const geneticsConstructor = {
    maleGenesProbability: 60,
    femaleGenesProbability: 40,
    geneticSequenceSignature: [2,6,10,14,18,22,26,30,34,38,48,58,68],
    maxValues: [0,2,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
  };

  const houndsConstructorBoilerplate = {
    houndsInitializer: address0,
    payments: address0,
    restricted: address0,
    minter: address0,
    houndsModifier: address0,
    hounds: address0,
    zerocost: address0,
    shop: address0,
    races: address0,
    genetics: address0,
    houndsRenameHandler: address0
  };
  const houndsConstructorFees = {
    renameFeeCurrency: address0,
    platformBreedFeeCurrency: address0,
    breedTransactionFeeCurrency: address0,
    platformBreedFee: "0xB1A2BC2EC50000",
    breedTransactionFee: "0x2386F26FC10000",
    renameFee: "50000000000000000000"
  };
  const houndsConstructor = {
    name: 'Houndrace',
    symbol: 'HR',
    defaultHound: globalParams.defaultHound,
    breeding: globalParams.breedingConstructor,
    stamina: globalParams.staminaConstructor,
    operators: [],
    targets: [],
    boilerplate: houndsConstructorBoilerplate,
    fees: houndsConstructorFees
  };
  const houndsArgs = [arrayfy({
    ...houndsConstructor,
    boilerplate: arrayfy(houndsConstructorBoilerplate),
    fees: arrayfy(houndsConstructorFees)
  })];

  const racesConstructor = {
    operators: [],
    arenas: address0,
    hounds: address0,
    methods: address0,
    payments: address0,
    restricted: address0,
    queues: address0,
    races: address0,
    targets: []
  };

  const queuesConstructor = {
    operators: [],
    arenas: address0,
    hounds: address0,
    methods: address0,
    payments: address0,
    restricted: address0,
    races: address0,
    queues: address0,
    zerocost: address0,
    raceUploader: address0,
    targets: []
  };

  const lootboxesConstructor = {
    name: "Houndrace Mystery Boxes",
    operators: [],
    targets: [],
    canBeOpened: true
  };

  const targets: Array<Target> = [
    { name: 'PaymentsMethods',        contract: 'contracts/payments/methods/Index.sol:PaymentsMethods',   address: process.env.PAYMENTS_METHODS,   args: [arrayfy(paymentsConstructor)] },
    { name: 'Payments',               contract: 'contracts/payments/Index.sol:Payments',                  address: process.env.PAYMENTS,           args: [arrayfy(paymentsConstructor)] },
    { name: 'HoundPotions',           contract: 'contracts/houndracepotions/Data.sol:HoundPotions',       address: process.env.HOUND_POTIONS,      args: houndPotionsConstructor },
    { name: 'ShopRestricted',         contract: 'contracts/shop/restricted/Index.sol:ShopRestricted',     address: process.env.SHOP_RESTRICTED,    args: [arrayfy(shopConstructor)] },
    { name: 'ShopMethods',            contract: 'contracts/shop/methods/Index.sol:ShopMethods',           address: process.env.SHOP_METHODS,       args: [arrayfy(shopConstructor)] },
    { name: 'ShopZerocost',           contract: 'contracts/shop/zerocost/Index.sol:ShopZerocost',         address: process.env.SHOP_ZEROCOST,      args: [arrayfy(shopConstructor)] },
    { name: 'Shop',                   contract: 'contracts/shop/Index.sol:Shop',                          address: process.env.SHOP,               args: [arrayfy(shopConstructor)] },
    { name: 'ArenasRestricted',       contract: 'contracts/arenas/restricted/Index.sol:ArenasRestricted', address: process.env.ARENAS_RESTRICTED,  args: [arrayfy(arenasConstructor)] },
    { name: 'ArenasMethods',          contract: 'contracts/arenas/methods/Index.sol:ArenasMethods',       address: process.env.ARENAS_METHODS,     args: [arrayfy(arenasConstructor)] },
    { name: 'Arenas',                 contract: 'contracts/arenas/Index.sol:Arenas',                      address: process.env.ARENAS,             args: [arrayfy(arenasConstructor)] },
    { name: 'Genetics',               contract: 'contracts/genetics/Index.sol:Genetics',                  address: process.env.GENETICS,           args: [arrayfy(geneticsConstructor)] },
    { name: 'HoundsRestricted',       contract: 'contracts/hounds/restricted/Index.sol:HoundsRestricted', address: process.env.HOUNDS_RESTRICTED,  args: houndsArgs },
    { name: 'HoundsZerocost',         contract: 'contracts/hounds/zerocost/Index.sol:HoundsZerocost',     address: process.env.HOUNDS_ZEROCOST,    args: houndsArgs },
    { name: 'HoundsModifier',         contract: 'contracts/hounds/modifier/Index.sol:HoundsModifier',     address: process.env.HOUNDS_MODIFIER,    args: houndsArgs },
    { name: 'HoundsMinter',           contract: 'contracts/hounds/minter/Index.sol:HoundsMinter',         address: process.env.HOUNDS_MINTER,      args: houndsArgs },
    { name: 'Hounds',                 contract: 'contracts/hounds/Index.sol:Hounds',                      address: process.env.HOUNDS,             args: houndsArgs },
    { name: 'RacesRestricted',        contract: 'contracts/races/restricted/Index.sol:RacesRestricted',   address: process.env.RACE_RESTRICTED,    args: [arrayfy(racesConstructor)] },
    { name: 'RacesMethods',           contract: 'contracts/races/methods/Index.sol:RacesMethods',         address: process.env.RACE_METHODS,       args: [arrayfy(racesConstructor)] },
    { name: 'Races',                  contract: 'contracts/races/Index.sol:Races',                        address: process.env.RACE,               args: [arrayfy(racesConstructor)] },
    { name: 'QueuesMethods',          contract: 'contracts/queues/methods/Index.sol:QueuesMethods',       address: process.env.QUEUES_METHODS,     args: [arrayfy(queuesConstructor)] },
    { name: 'QueuesRestricted',       contract: 'contracts/queues/restricted/Index.sol:QueuesRestricted', address: process.env.QUEUES_RESTRICTED,  args: [arrayfy(queuesConstructor)] },
    { name: 'QueuesZerocost',         contract: 'contracts/queues/zerocost/Index.sol:QueuesZerocost',     address: process.env.QUEUES_ZEROCOST,    args: [arrayfy(queuesConstructor)] },
    { name: 'Queues',                 contract: 'contracts/queues/Index.sol:Queues',                      address: process.env.QUEUES,             args: [arrayfy(queuesConstructor)] },
    { name: 'HoundraceMysteryBoxes',  contract: 'contracts/lootboxes/Loot.sol:HoundraceMysteryBoxes',     address: process.env.LOOTBOXES,          args: [arrayfy(lootboxesConstructor)] },
  ];

  const ok: Array<string> = [];
  const already: Array<string> = [];
  const failed: Array<string> = [];

  for (const t of targets) {
    if (!t.address) {
      console.log(`\n[SKIP] ${t.name}: no address in env`);
      failed.push(`${t.name} (no address)`);
      continue;
    }
    console.log(`\n=== Verifying ${t.name} @ ${t.address} ===`);
    try {
      await run("verify:verify", {
        address: t.address,
        constructorArguments: t.args,
        contract: t.contract
      });
      ok.push(`${t.name} @ ${t.address}`);
    } catch (err) {
      const msg = (err as Error).message || String(err);
      if (/already verified/i.test(msg)) {
        console.log(`Already verified.`);
        already.push(`${t.name} @ ${t.address}`);
      } else {
        console.error(`FAILED ${t.name}: ${msg}`);
        failed.push(`${t.name} @ ${t.address} -> ${msg.split('\n')[0]}`);
      }
    }
  }

  console.log(`\n\n################ VERIFICATION SUMMARY ################`);
  console.log(`Newly verified: ${ok.length}`);
  ok.forEach(x => console.log(`  ✔ ${x}`));
  console.log(`Already verified: ${already.length}`);
  already.forEach(x => console.log(`  = ${x}`));
  console.log(`Failed: ${failed.length}`);
  failed.forEach(x => console.log(`  x ${x}`));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
