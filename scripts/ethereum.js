const hre = require('hardhat');
const address0 = '0x0000000000000000000000000000000000000000';
const maleBoilerplateGene = [ 1, 1, 8, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 9, 8, 2, 1, 4, 2, 9, 8, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 7, 7, 0, 2, 9, 1, 0, 9, 1, 1, 2, 1, 9, 0, 2, 2, 8, 5, 2, 8, 1, 9 ];
const femaleBoilerplateGene = [ 2, 2, 6, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 3, 1, 9, 1, 4, 2, 4, 7, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 1, 7, 2, 7, 9, 1, 0, 9, 1, 1, 2, 1, 0, 7, 2, 2, 8, 5, 8, 7, 1, 3 ];
const defaultHound = [
  [ 0, 0, 0, 0],
  [ 10000000, 10000000, 100, 1, 100 ],
  [ 0, 100000, 1000, true ],
  [ 0, 0, 0, maleBoilerplateGene ],
  '',
  '',
  false,
  false
];




async function main() {

  const Converters = await hre.ethers.getContractFactory('Converters');
  const converters = await Converters.deploy();
  await converters.deployed();
  console.log('Converters deployed to: ', converters.address);

  const Sortings = await hre.ethers.getContractFactory('Sortings');
  const sortings = await Sortings.deploy();
  await sortings.deployed();
  console.log('Sortings deployed to: ', sortings.address);
  
  const RandomnessZerocost = await hre.ethers.getContractFactory('RandomnessZerocost');
  const randomnessZerocost = await RandomnessZerocost.deploy([address0]);
  await randomnessZerocost.deployed();
  console.log('RandomnessZerocost deployed to: ', randomnessZerocost.address);

  const Randomness = await hre.ethers.getContractFactory('Randomness');
  const randomness = await Randomness.deploy([randomnessZerocost.address]);
  await randomness.deployed();
  console.log('Randomness deployed to: ', randomness.address);

  await randomnessZerocost.setGlobalParameters([randomnessZerocost.address]);

  const PaymentsMethods = await hre.ethers.getContractFactory('PaymentsMethods');
  const paymentsMethods = await PaymentsMethods.deploy([address0,[]]);
  await paymentsMethods.deployed();
  console.log('PaymentsMethods deployed to: ', paymentsMethods.address);

  const Payments = await hre.ethers.getContractFactory('Payments');
  const payments = await Payments.deploy([paymentsMethods.address,[]]);
  await payments.deployed();
  console.log('Payments deployed to: ', payments.address);

  await paymentsMethods.setGlobalParameters([paymentsMethods.address,[]]);

  const HoundracePotions = await hre.ethers.getContractFactory('HoundracePotions');
  const houndracePotions = await HoundracePotions.deploy(['HoundracePotions', 'HP']);
  await houndracePotions.deployed();
  console.log('HoundracePotions deployed to: ', houndracePotions.address);

  const ShopZerocost = await hre.ethers.getContractFactory('ShopZerocost');
  const shopZerocost = await ShopZerocost.deploy([address0,address0,address0]);
  await shopZerocost.deployed();
  console.log('ShopZerocost deployed to: ', shopZerocost.address);

  const ShopRestricted = await hre.ethers.getContractFactory('ShopRestricted');
  const shopRestricted = await ShopRestricted.deploy([address0,address0,address0]);
  await shopRestricted.deployed();
  console.log('ShopRestricted deployed to: ', shopRestricted.address);

  const ShopMethods = await hre.ethers.getContractFactory('ShopMethods');
  const shopMethods = await ShopMethods.deploy([address0,address0,address0]);
  await shopMethods.deployed();
  console.log('ShopMethods deployed to: ', shopMethods.address);

  const Shop = await hre.ethers.getContractFactory('Shop');
  const shop = await Shop.deploy([shopMethods.address,shopZerocost.address,shopRestricted.address]);
  await shop.deployed();
  console.log('Shop deployed to: ', shop.address);

  await shopZerocost.setGlobalParameters([shopMethods.address,shopZerocost.address,shopRestricted.address]);
  await shopRestricted.setGlobalParameters([shopMethods.address,shopZerocost.address,shopRestricted.address]);
  await shopMethods.setGlobalParameters([shopMethods.address,shopZerocost.address,shopRestricted.address]);

  const ArenasRestricted = await hre.ethers.getContractFactory('ArenasRestricted');
  const arenasRestricted = await ArenasRestricted.deploy([address0]);
  await arenasRestricted.deployed();
  console.log('ArenasRestricted deployed to: ', arenasRestricted.address);

  const Arenas = await hre.ethers.getContractFactory('Arenas');
  const arenas = await Arenas.deploy([arenasRestricted.address]);
  await arenas.deployed();
  console.log('Arenas deployed to: ', arenas.address);

  await arenasRestricted.setGlobalParameters([arenasRestricted.address]);

  const GeneticsZerocost = await hre.ethers.getContractFactory('GeneticsZerocost');
  const geneticsZerocost = await GeneticsZerocost.deploy([
    randomness.address,
    address0,
    maleBoilerplateGene,
    femaleBoilerplateGene,
    60,
    40,
    [2,6,10,14,18,22,26,30,34,38,42,46,50],
    [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
  ]);
  await geneticsZerocost.deployed();
  console.log('GeneticsZerocost deployed to: ', geneticsZerocost.address);

  const Genetics = await hre.ethers.getContractFactory('Genetics');
  const genetics = await Genetics.deploy([
    randomness.address,
    geneticsZerocost.address,
    maleBoilerplateGene,
    femaleBoilerplateGene,
    60,
    40,
    [2,6,10,14,18,22,26,30,34,38,42,46,50],
    [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
  ]);
  await genetics.deployed();
  console.log('Genetics deployed to: ', genetics.address);

  await geneticsZerocost.setGlobalParameters([
    randomness.address,
    geneticsZerocost.address,
    maleBoilerplateGene,
    femaleBoilerplateGene,
    60,
    40,
    [2,6,10,14,18,22,26,30,34,38,42,46,50],
    [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
  ]);

  const IncubatorMethods = await hre.ethers.getContractFactory('IncubatorMethods');
  const incubatorMethods = await IncubatorMethods.deploy([
    address0,
    randomness.address,
    genetics.address,
    0
  ]);
  await incubatorMethods.deployed();
  console.log('IncubatorMethods deployed to: ', incubatorMethods.address);

  const Incubator = await hre.ethers.getContractFactory('Incubator');
  const incubator = await Incubator.deploy([
    incubatorMethods.address,
    randomness.address,
    genetics.address,
    0
  ]);
  await incubator.deployed();
  console.log('Incubator deployed to: ', incubator.address);

  await incubatorMethods.setGlobalParameters([
    incubatorMethods.address,
    randomness.address,
    genetics.address,
    0
  ]);

  const HoundsRestricted = await hre.ethers.getContractFactory('HoundsRestricted');
  const houndsRestricted = await HoundsRestricted.deploy([
    'HoundRace',
    'HR',
    [],
    [
      incubator.address,
      String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
      payments.address,
      address0,
      address0,
      address0,
      shop.address,
      houndracePotions.address
    ],[
      '0xB1A2BC2EC50000',
      '0x2386F26FC10000',
      '0x2386F26FC10000',
      '0x2386F26FC10000',
      '0x2386F26FC10000'
    ]
  ]);
  await houndsRestricted.deployed();
  console.log('HoundsRestricted deployed to: ', houndsRestricted.address);

  const HoundsModifier = await hre.ethers.getContractFactory('HoundsModifier');
  const houndsModifier = await HoundsModifier.deploy([
    'HoundRace',
    'HR',
    [],
    [
      incubator.address,
      String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
      payments.address,
      address0,
      address0,
      address0,
      shop.address,
      houndracePotions.address
    ],[
      '0xB1A2BC2EC50000',
      '0x2386F26FC10000',
      '0x2386F26FC10000',
      '0x2386F26FC10000',
      '0x2386F26FC10000'
    ]
  ]);
  await houndsModifier.deployed();
  console.log('HoundsModifier deployed to: ', houndsModifier.address);

  const HoundsMinter = await hre.ethers.getContractFactory('HoundsMinter');
  const houndsMinter = await HoundsMinter.deploy([
    'HoundRace',
    'HR',
    [],
    [
      incubator.address,
      String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
      payments.address,
      address0,
      address0,
      address0,
      shop.address,
      houndracePotions.address
    ],[
      '0xB1A2BC2EC50000',
      '0x2386F26FC10000',
      '0x2386F26FC10000',
      '0x2386F26FC10000',
      '0x2386F26FC10000'
    ]
  ]);
  await houndsMinter.deployed();
  console.log('HoundsMinter deployed to: ', houndsMinter.address);

  const Hounds = await hre.ethers.getContractFactory('Hounds');
  const hounds = await Hounds.deploy([
    'HoundRace',
    'HR',
    [houndsMinter.address,houndsModifier.address,houndsRestricted.address],
    [
      incubator.address,
      String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
      payments.address,
      houndsRestricted.address,
      houndsMinter.address,
      houndsModifier.address,
      shop.address,
      houndracePotions.address
    ],[
      '0xB1A2BC2EC50000',
      '0x2386F26FC10000',
      '0x2386F26FC10000',
      '0x2386F26FC10000',
      '0x2386F26FC10000'
    ]
  ]);
  await hounds.deployed();
  console.log('Hounds deployed to: ', hounds.address);

  await houndsRestricted.setGlobalParameters([
    'HoundRace',
    'HR',
    [houndsMinter.address,houndsModifier.address,houndsRestricted.address,hounds.address],
    [
      incubator.address,
      String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
      payments.address,
      hounds.address,
      hounds.address,
      hounds.address,
      shop.address,
      houndracePotions.address
    ],[
      '0xB1A2BC2EC50000',
      '0x2386F26FC10000',
      '0x2386F26FC10000',
      '0x2386F26FC10000',
      '0x2386F26FC10000'
    ]
  ]);

  await houndsModifier.setGlobalParameters([
    'HoundRace',
    'HR',
    [houndsMinter.address,houndsModifier.address,houndsRestricted.address,hounds.address],
    [
      incubator.address,
      String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
      payments.address,
      hounds.address,
      hounds.address,
      hounds.address,
      shop.address,
      houndracePotions.address
    ],[
      '0xB1A2BC2EC50000',
      '0x2386F26FC10000',
      '0x2386F26FC10000',
      '0x2386F26FC10000',
      '0x2386F26FC10000'
    ]
  ]);

  await houndsMinter.setGlobalParameters([
    'HoundRace',
    'HR',
    [houndsMinter.address,houndsModifier.address,houndsRestricted.address,hounds.address],
    [
      incubator.address,
      String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
      payments.address,
      hounds.address,
      hounds.address,
      hounds.address,
      shop.address,
      houndracePotions.address
    ],[
      '0xB1A2BC2EC50000',
      '0x2386F26FC10000',
      '0x2386F26FC10000',
      '0x2386F26FC10000',
      '0x2386F26FC10000'
    ]
  ]);

  const RacesRestricted = await hre.ethers.getContractFactory('RacesRestricted');
  const racesRestricted = await RacesRestricted.deploy([
    randomness.address,
    arenas.address,
    hounds.address,
    address0,
    address0,
    payments.address,
    address0,
    500000000,
    true
  ]);
  await racesRestricted.deployed();
  console.log('RacesRestricted deployed to: ', racesRestricted.address);

  const RacesMethods = await hre.ethers.getContractFactory('RacesMethods');
  const racesMethods = await RacesMethods.deploy([
    randomness.address,
    arenas.address,
    hounds.address,
    address0,
    address0,
    payments.address,
    address0,
    500000000,
    true
  ]);
  await racesMethods.deployed();
  console.log('RacesMethods deployed to: ', racesMethods.address);

  const Races = await hre.ethers.getContractFactory('Races');
  const races = await Races.deploy([
    randomness.address,
    arenas.address,
    hounds.address,
    racesMethods.address,
    address0,
    payments.address,
    racesRestricted.address,
    500000000,
    true
  ]);
  await races.deployed();
  console.log('Races deployed to: ', races.address);

  const GeneratorZerocost = await hre.ethers.getContractFactory('GeneratorZerocost', {
    libraries: {
      Sortings: sortings.address
    }
  });
  const generatorZerocost = await GeneratorZerocost.deploy([
    randomness.address,
    arenas.address,
    hounds.address,
    races.address,
    address0,
    payments.address,
    address0
  ]);
  await generatorZerocost.deployed();
  console.log('GeneratorZerocost deployed to: ', generatorZerocost.address);

  const GeneratorMethods = await hre.ethers.getContractFactory('GeneratorMethods', {
    libraries: {
      Converters: converters.address
    }
  });
  const generatorMethods = await GeneratorMethods.deploy([
    randomness.address,
    arenas.address,
    hounds.address,
    races.address,
    address0,
    payments.address,
    address0
  ]);
  await generatorMethods.deployed();
  console.log('GeneratorMethods deployed to: ', generatorMethods.address);

  const Generator = await hre.ethers.getContractFactory('Generator');
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
  console.log('Generator deployed to: ', generator.address);

  await generatorZerocost.setGlobalParameters([
    randomness.address,
    arenas.address,
    hounds.address,
    races.address,
    generatorMethods.address,
    payments.address,
    generatorZerocost.address
  ]);

  await generatorMethods.setGlobalParameters([
    randomness.address,
    arenas.address,
    hounds.address,
    races.address,
    generatorMethods.address,
    payments.address,
    generatorZerocost.address
  ]);

  await races.setGlobalParameters([
    randomness.address,
    arenas.address,
    hounds.address,
    racesMethods.address,
    generator.address,
    payments.address,
    racesRestricted.address,
    500000000,
    true
  ]);

  await racesMethods.setGlobalParameters([
    randomness.address,
    arenas.address,
    hounds.address,
    racesMethods.address,
    generator.address,
    payments.address,
    racesRestricted.address,
    500000000,
    true
  ]);

  await racesRestricted.setGlobalParameters([
    randomness.address,
    arenas.address,
    hounds.address,
    racesMethods.address,
    generator.address,
    payments.address,
    racesRestricted.address,
    500000000,
    true
  ]);
  console.log('races setGlobalParameters called successfully');

  await races.createQueues([
    [
      '0x0000000000000000000000000000000000000000',
      [],
      1,
      5000000000,
      0,
      0,
      1,
      10
    ]
  ]);
  console.log('races create queue called successfully');

  await hounds.initializeHound(0,defaultHound);
  console.log('hound initialize called successfully');

  await hounds.initializeHound(0,defaultHound);
  console.log('hound initialize called successfully');

  await hounds.initializeHound(0,defaultHound);
  console.log('hound initialize called successfully');

  await hounds.initializeHound(0,defaultHound);
  console.log('hound initialize called successfully');

  await hounds.breedHounds(1,2,{ value: '0xD529AE9E860000' });
  console.log('breed hounds called successfully');

  try {
    await hre.run('verify:verify', {
      address: converters.address
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run('verify:verify', {
      address: sortings.address
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run('verify:verify', {
      address: randomnessZerocost.address,
      constructorArguments: [address0]
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run('verify:verify', {
      address: randomness.address,
      constructorArguments: [randomnessZerocost.address]
    });
  } catch (err) {
    console.error(err);
  }
  
  try {
    await hre.run('verify:verify', {
      address: paymentsMethods.address,
      constructorArguments: [address0,[]]
    });
  } catch (err) {
    console.error(err);
  }
  
  try {
    await hre.run('verify:verify', {
      address: payments.address,
      constructorArguments: [paymentsMethods.address,[]]
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run('verify:verify', {
      address: houndracePotions.address,
      constructorArguments: [['HoundracePotions', 'HP']]
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run('verify:verify', {
      address: shopZerocost.address,
      constructorArguments: [address0,address0,address0]
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run('verify:verify', {
      address: shopRestricted.address,
      constructorArguments: [address0,address0,address0]
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run('verify:verify', {
      address: shopMethods.address,
      constructorArguments: [address0,address0,address0]
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run('verify:verify', {
      address: shop.address,
      constructorArguments: [shopMethods.address,shopZerocost.address,shopRestricted.address]
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run('verify:verify', {
      address: arenasRestricted.address,
      constructorArguments: [address0]
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run('verify:verify', {
      address: arenas.address,
      constructorArguments: [arenasRestricted.address]
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run('verify:verify', {
      address: geneticsZerocost.address,
      constructorArguments: [
        randomness.address,
        address0,
        maleBoilerplateGene,
        femaleBoilerplateGene,
        60,
        40,
        [2,6,10,14,18,22,26,30,34,38,42,46,50],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
      ]
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run('verify:verify', {
      address: genetics.address,
      constructorArguments: [
        randomness.address,
        geneticsZerocost.address,
        maleBoilerplateGene,
        femaleBoilerplateGene,
        60,
        40,
        [2,6,10,14,18,22,26,30,34,38,42,46,50],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
      ]
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run('verify:verify', {
      address: incubatorMethods.address,
      constructorArguments: [
        address0,
        randomness.address,
        genetics.address,
        0
      ]
    });
  } catch (err) {
    console.error(err);
  }
  
  try {
    await hre.run('verify:verify', {
      address: incubator.address,
      constructorArguments: [
        incubatorMethods.address,
        randomness.address,
        genetics.address,
        0
      ]
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run('verify:verify', {
      address: houndsRestricted.address,
      constructorArguments: [
        'HoundRace',
        'HR',
        [],
        [
          incubator.address,
          String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
          payments.address,
          address0,
          address0,
          address0,
          shop.address,
          houndracePotions.address
        ],[
          '0xB1A2BC2EC50000',
          '0x2386F26FC10000',
          '0x2386F26FC10000',
          '0x2386F26FC10000',
          '0x2386F26FC10000'
        ]
      ]
    });
  } catch (err) {
    console.error(err);
  }
  
  try {
    await hre.run('verify:verify', {
      address: houndsModifier.address,
      constructorArguments: [
        'HoundRace',
        'HR',
        [],
        [
          incubator.address,
          String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
          payments.address,
          address0,
          address0,
          address0,
          shop.address,
          houndracePotions.address
        ],[
          '0xB1A2BC2EC50000',
          '0x2386F26FC10000',
          '0x2386F26FC10000',
          '0x2386F26FC10000',
          '0x2386F26FC10000'
        ]
      ]
    });
  } catch (err) {
    console.error(err);
  }
  
  try {
    await hre.run('verify:verify', {
      address: houndsMinter.address,
      constructorArguments: [
        'HoundRace',
        'HR',
        [],
        [
          incubator.address,
          String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
          payments.address,
          address0,
          address0,
          address0,
          shop.address,
          houndracePotions.address
        ],[
          '0xB1A2BC2EC50000',
          '0x2386F26FC10000',
          '0x2386F26FC10000',
          '0x2386F26FC10000',
          '0x2386F26FC10000'
        ]
      ]
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run('verify:verify', {
      address: hounds.address,
      constructorArguments: [
        'HoundRace',
        'HR',
        [houndsMinter.address,houndsModifier.address,houndsRestricted.address],
        [
          incubator.address,
          String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
          payments.address,
          houndsRestricted.address,
          houndsMinter.address,
          houndsModifier.address,
          shop.address,
          houndracePotions.address
        ],[
          '0xB1A2BC2EC50000',
          '0x2386F26FC10000',
          '0x2386F26FC10000',
          '0x2386F26FC10000',
          '0x2386F26FC10000'
        ]
      ]
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run('verify:verify', {
      address: racesRestricted.address,
      constructorArguments: [
        randomness.address,
        arenas.address,
        hounds.address,
        address0,
        address0,
        payments.address,
        address0,
        500000000,
        true
      ]
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run('verify:verify', {
      address: racesMethods.address,
      constructorArguments: [
        randomness.address,
        arenas.address,
        hounds.address,
        address0,
        address0,
        payments.address,
        address0,
        500000000,
        true
      ]
    });
  } catch (err) {
    console.error(err);
  }
  
  try {
    await hre.run('verify:verify', {
      address: races.address,
      constructorArguments: [
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
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run('verify:verify', {
      address: generatorZerocost.address,
      constructorArguments: [
        randomness.address,
        arenas.address,
        hounds.address,
        races.address,
        address0,
        payments.address,
        address0
      ]
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run('verify:verify', {
      address: generatorMethods.address,
      constructorArguments: [
        randomness.address,
        arenas.address,
        hounds.address,
        races.address,
        address0,
        payments.address,
        address0
      ]
    });
  } catch (err) {
    console.error(err);
  }

  try {
    await hre.run('verify:verify', {
      address: generator.address,
      constructorArguments: [
        randomness.address,
        arenas.address,
        hounds.address,
        races.address,
        generatorMethods.address,
        payments.address,
        generatorZerocost.address
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