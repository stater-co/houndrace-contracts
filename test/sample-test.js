const { expect } = require('chai');
const { ethers } = require('hardhat');
const isGithubAutomation = false;
const address0 = '0x0000000000000000000000000000000000000000';
const maleBoilerplateGene = [ 0, 1, 8, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 9, 8, 2, 1, 4, 2, 9, 8, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 7, 7, 0, 2, 9, 1, 0, 9, 1, 1, 2, 1, 9, 0, 2, 2, 8, 5, 2, 8, 1, 9 ];
const femaleBoilerplateGene = [ 0, 2, 6, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 3, 1, 9, 1, 4, 2, 4, 7, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 1, 7, 2, 7, 9, 1, 0, 9, 1, 1, 2, 1, 0, 7, 2, 2, 8, 5, 8, 7, 1, 3 ];
const defaultHound = [
  [ 0, 0, 0, 0],
  [ address0, 10000000, 10000000, 100, 1, 100 ],
  [ address0, 0, 100000, 1000, true ],
  [ 1, 1, 0, 0, maleBoilerplateGene ],
  '',
  '',
  false,
  false
];
const defaultRace = [
  "race name",
  address0,
  [1,2,3,4,5,6,7,8,9,10],
  1,
  500,
  55,
  1,
  1,
  1,
  '0x00'
];
const payment = [
  address0,
  address0,
  address0,
  [],
  [],
  0,
  1,
  3,
  5,
  1
];
const queue = [
  'Test queue',
  '0x0000000000000000000000000000000000000000',
  [],
  1, // terrain
  5000000000,
  address0,
  0,
  0,
  1,
  1,
  10,
  0
];
const arena = [
  address0,
  'token_url',
  address0,
  10000,
  1,
  1000,
  3
];
let currentDiscountId = 1;
let payments;
let shopRestricted;
let directivesRestricted;
let directives;
let shopMethods;
let shop;
let randomness;
let arenas;
let arenasRestricted;
let genetics;
let incubator;
let incubatorMethods;
let hounds;
let houndsModifier;
let houndsRestricted;
let houndsMinter;
let generator;
let generatorMethods;
let generatorZerocost;
let races;
let racesRestricted;
let racesMethods;
let queues;
let queuesMethods;
let queuesRestricted;

function deploymentMessage(name,address) {
  console.log(name + ' deployed at: ' + address);
}

// @DIIMIIM: Get smart contract instance
async function getContractInstance(name,constructor,props) {
  let Contract;
  if ( props ) {
    Contract = await hre.ethers.getContractFactory(name,props);
  } else {
    Contract = await hre.ethers.getContractFactory(name);
  }
   
  let contract = constructor ? await Contract.deploy(...constructor) : await Contract.deploy();
  await contract.deployed();
  deploymentMessage(name,contract.address);
  return contract;
}

// @DIIMIIM: Admin mint hound, no safety checks
async function mintHoundByAdmin(hound,isFemale) {
  let houndToMint;
  if ( hound ) {
    houndToMint = hound;
  } else {
    houndToMint = defaultHound;
    if ( isFemale ) {
      houndToMint[3][4][1] = 2;
    }
  }
  const [owner] = await ethers.getSigners();
  const contractOwner = await hounds.owner();
  expect(owner.address === contractOwner, 'You\'re not the owner of the hounds data contract');
  let houndIdBefore = await hounds.id();
  await hounds.initializeHound(0,houndToMint);
  let houndIdAfter = await hounds.id();
  expect(Number(houndIdBefore) < Number(houndIdAfter));
}

async function safelyMintHoundByAdmin(hound,isFemale) {
  const houndIdBefore = await hounds.id();
  await mintHoundByAdmin(hound,isFemale);
  const houndIdAfter = await hounds.id();
  expect(houndIdBefore !== houndIdAfter, 'Hound creation problem');
  await safelyUpdateHoundBreeding(houndIdBefore);
}

async function safelyUpdateHoundStamina(houndId) {
  let houndIdBefore;
  let houndToWorkWith;
  if ( houndId ) {
    houndToWorkWith = houndId;
  } else {
    houndIdBefore = await hounds.id();
    houndToWorkWith = Number(houndIdBefore)-1;
  }
  const houndBefore = await hounds.hound(houndToWorkWith);
  await hounds.updateHoundStamina(houndToWorkWith);
  const houndAfter = await hounds.hound(houndToWorkWith);
  expect(JSON.stringify(houndBefore) === JSON.stringify(houndAfter), 'Hound stamin update on creation problem');
}

async function safelyUpdateHoundBreeding(houndId) {
  let houndIdBefore;
  let houndToWorkWith;
  if ( houndId ) {
    houndToWorkWith = houndId;
  } else {
    houndIdBefore = await hounds.id();
    houndToWorkWith = Number(houndIdBefore)-1;
  }
  const houndBefore = await hounds.hound(houndToWorkWith);
  await hounds.updateHoundBreeding(houndToWorkWith,houndToWorkWith);
  const houndAfter = await hounds.hound(houndToWorkWith);
  expect(JSON.stringify(houndBefore) === JSON.stringify(houndAfter), 'Hound stamin update on creation problem');
}

async function checkHoundsStamina() {
  let queue = await queues.queues(1);
  for ( let i = 1 ; i <= queue.totalParticipants ; ++i ) {
    let hound = await hounds.hound(i);
    expect(hound !== undefined, 'Hound getter problem');
    expect(houndsStamina[i] < hound[1][2], 'Hound stamina not consumed');
    houndsStamina[i] = hound[1][2];
  }
}

async function checkHoundStructure(houndId) {
  const hound = await hounds.hound(houndId ? houndId : 1);

  // Check the hound statistics field
  expect(hound[0] && hound[0].length === defaultHound[0].length, 'Not all hound statistics are received from contract');

  // Check the hound stamina field
  expect(hound[1] && hound[1].length === defaultHound[1].length, 'Not all hound stamina data has been received from contract');

  // Check the hound breeding field
  expect(hound[2] && hound[2].length === defaultHound[2].length, 'Not all hound breeding data has been received from contract');

  // Check the hound identity field
  expect(hound[3] && hound[3].length === defaultHound[3].length, 'Not all hound identity data has been received from contract');

  // Check the hound total fields
  expect(hound.length === defaultHound.length, 'Hound has been partially received from contract');

  const houndGene = hound[3][4];
  expect(houndGene.length === defaultHound[3][4].length, 'Hound getter mechanism problems');
}

async function findMaleAndFemaleAvailableForBreed() {
  const houndIdBefore = await hounds.id();

  let maleId , femaleId ;
  for ( let i = 1 , l = houndIdBefore ; i < l ; ++i ) {

    const hound = await hounds.hound(i);
    const houndGene = hound[3][4];

    expect(houndGene.length > 0, 'Getting hounds gender problem');

    if ( houndGene[1] === 1 && !maleId && hound[2][3] && hound[2][1]*1000 <= new Date().getTime() && !hound[7] ) {
      maleId = i;
    }

    if ( houndGene[1] === 2 && !femaleId && hound[2][3] && hound[2][1]*1000 <= new Date().getTime() && !hound[7] ) {
      femaleId = i;
    }

  }

  expect(maleId && femaleId, 'No partners found for breeding');
  return { maleId, femaleId };
}

async function breed2Hounds(hardcodedMaleId, hardcodedFemaleId) {
  const houndIdBefore = await hounds.id();
  let availableHounds;
  if ( !hardcodedMaleId && ! hardcodedFemaleId ) {
    availableHounds = await findMaleAndFemaleAvailableForBreed();
  }

  const maleId = hardcodedMaleId ? hardcodedMaleId : availableHounds.maleId;
  const femaleId = hardcodedFemaleId ? hardcodedFemaleId : availableHounds.femaleId; 

  if ( maleId && femaleId ) {

    const houndMaleBefore = await hounds.hound(maleId);
    const houndFemaleBefore = await hounds.hound(femaleId);

    const [owner] = await ethers.getSigners();
    const ownerOfMale = await hounds.ownerOf(maleId);
    const ownerOfFemale = await hounds.ownerOf(femaleId);

    let hound1 = maleId , hound2 = femaleId;
    if ( ownerOfFemale !== owner && ownerOfMale === owner ) {
      hound1 = maleId;
      hound2 = femaleId;
    } else if ( ownerOfMale !== owner && ownerOfFemale === owner ) {
      hound1 = femaleId;
      hound2 = maleId;
    }

    const totalToPay = await hounds.getBreedCost(hound1,hound2);
    console.log("Total to pay: " + totalToPay);
    let houndIdToFill = Number(await hounds.id()) - 1;
    await hounds.breedHounds(hound1, hound2, { value : totalToPay });
    //await hounds.initializeHound(houndIdToFill,defaultHound);

    const houndMaleAfter = await hounds.hound(maleId);
    const houndFemaleAfter = await hounds.hound(femaleId);
    expect(JSON.stringify(houndMaleBefore) !== JSON.stringify(houndMaleAfter), 'Hound male breeding status should be changed after breeding');
    expect(JSON.stringify(houndFemaleBefore) !== JSON.stringify(houndFemaleAfter), 'Hound female breeding status should be changed after breeding');
    
  }

  const houndIdAfter = await hounds.id();
  expect(houndIdBefore !== houndIdAfter, 'Owned hound breeding problem');

}

async function createDiscount(erc721Address, ids, dateStart, dateStop, discount, tokenType, usable) {
  const shopOwner = await shop.owner();
  const [owner] = await ethers.getSigners();
  if ( owner.address === shopOwner ) {
    await shop.createDiscount([
      erc721Address ? erc721Address : testErc721.address,
      ids ? ids : [currentDiscountId - 1],
      dateStart ? dateStart : 0,
      dateStop ? dateStop : 0,
      discount ? discount : 5,
      tokenType ? tokenType : 0,
      usable ? usable : false
    ]);
  }
}

async function editDiscount(id, erc721Address, ids, dateStart, dateStop, discount, tokenType, usable) {
  const shopOwner = await shop.owner();
  const [owner] = await ethers.getSigners();
  if ( owner.address === shopOwner ) {
    await shop.editDiscount([
      erc721Address ? erc721Address : testErc721.address,
      ids ? ids : [1],
      dateStart ? dateStart : 0,
      dateStop ? dateStop : 0,
      discount ? discount : 5,
      tokenType ? tokenType : 0,
      usable ? usable : false
    ],id);
  }
}

async function mintERC1155Batch(receiver, ids, amounts, data) {
  const [owner] = await ethers.getSigners();
  await testErc1155.mintBatch(
    receiver ? receiver : owner.address,
    ids ? ids : Array.from(Array(100).keys()),
    amounts ? amounts : Array(100).fill(5000),
    data ? data : '0x00'
  );
}

async function mintERC721(receiver, id, data) {
  const [owner] = await ethers.getSigners();
  await testErc721.safeMint(
    receiver ? receiver : owner.address,
    id ? id : currentDiscountId,
    data ? data : '0x00'
  );
  if ( !id )
    ++currentDiscountId;
}

async function joinQueueAutomatically(queueId, totalJoins) {
  let queue = await queues.queues(queueId);
  let participating = 0;
  let houndsId = Number(await hounds.id()) - 1;
  let joins = totalJoins ? totalJoins : queue.totalParticipants;
  let raceIdBefore = await races.id();
  while ( participating < joins && houndsId >= 1 ) {
    let houndToEnqueue = await hounds.hound(houndsId);
    if ( !houndToEnqueue.running ) {
      await queues.enqueue(queueId, houndsId, { value : queue.entryFee });
      ++participating;
    } else {
      --houndsId;
    }
  }
  let raceIdAfter = await races.id();
  expect(Number(raceIdBefore) < Number(raceIdAfter));
}






describe('Setting up the used libraries', function () {
  
  it('Deploy the Converters', async function () {
    convertersLibrary = await getContractInstance('Converters');
  });

  it('Deploy the Sortings', async function () {
    sortingsLibrary = await getContractInstance('Sortings');
  });

});






describe('Setting up the Payments System', function () {
  
  it('Deploy the HoundRace Potions contract', async function () {
    const HoundracePotions = await hre.ethers.getContractFactory('HoundracePotions');
    houndracePotions = await HoundracePotions.deploy('Ogars','OG');
    await houndracePotions.deployed();
    deploymentMessage('HoundracePotions',houndracePotions.address);
  });

  it('Deploy the payments contract', async function () {
    payments = await getContractInstance('Payments');
    deploymentMessage('Payments',payments.address);
  });

  it('Deploy the erc721 test contract', async function () {
    testErc721 = await getContractInstance('TestingErc721',['test','t']);
    deploymentMessage('TestingErc721',testErc721.address);
  });

  it('Mint erc721 nfts', async function () {
    for ( let i = 0 ; i < 100 ; ++i ) {
      await mintERC721(undefined,undefined,'0x00');
    }
  });

  it('Deploy the erc1155 test contract', async function () {
    testErc1155 = await getContractInstance('TestingErc1155',['test']);
  });

  it('Mint erc1155 nfts', async function () {
    await mintERC1155Batch(undefined,Array.from(Array(100).keys()),Array(100).fill(5000),'0x00');
  });

  it('Deploy the Payments methods contract', async function () {
    shopRestricted = await getContractInstance('ShopRestricted',[[address0,address0,address0]]);
    shopMethods = await getContractInstance('ShopMethods',[[address0,address0,address0]]);
    shop = await getContractInstance('Shop',[[shopMethods.address,shopRestricted.address]]);
  });

  it('Add discounts', async function () {

    // Add erc721 nfts
    for ( let i = 1 ; i < 100 ; ++i ) {
      await createDiscount(testErc721.address,[i],0,0,5,0,false);
    }

    // Add erc1155 nfts
    for ( let i = 1 ; i < 100 ; ++i ) {
      await createDiscount(testErc1155.address,[i],0,0,10,1,false);
    }

    // Edit erc721 nfts
    for ( let i = 1 ; i < 100 ; ++i ) {
      await editDiscount(i,
        testErc721.address,
        [i],
        0,
        0,
        5,
        0,
        false
      );
    }

    // Edit erc1155 nfts
    for ( let i = 1 ; i < 100 ; ++i ) {
      await editDiscount(i,
        testErc1155.address,
        [i],
        0,
        0,
        10,
        1,
        false
      );
    }

  });

});






describe('Setting up the Houndrace contracts', function () {
  
  it('Deploy the randomness contracts', async function () {
    randomness = await getContractInstance('Randomness',[[]]);
  });

  it('Deploy the arenas contracts', async function () {
    arenasRestricted = await getContractInstance('ArenasRestricted', [['HoundRace Arenas', 'HRA', address0, address0]]);
    arenas = await getContractInstance('Arenas',[['HoundRace Arenas', 'HRA', arenasRestricted.address]]);
  });

  it('Genetics methods', async function () {
    genetics = await getContractInstance('Genetics',[[
      randomness.address,
      arenas.address,
      maleBoilerplateGene,
      femaleBoilerplateGene,
      60,
      40,
      [2,6,10,14,18,22,26,30,34,38,42,46,50],
      [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
    ]]);
  });

  it('Deploy the directives contracts', async function () {
    directivesRestricted = await getContractInstance('DirectivesRestricted',[[
      address0
    ]]);
    directives = await getContractInstance('Directives',[[
      directivesRestricted.address
    ]]);
  });

  it('Deploy the incubator contracts', async function () {
    incubatorMethods = await getContractInstance('IncubatorMethods');
    incubator = await getContractInstance('Incubator');
  });

  it('Deploy the hounds contract', async function () {

    houndsRestricted = await getContractInstance('HoundsRestricted',['HoundRace','HR']);

    houndsModifier = await getContractInstance('HoundsModifier');

    houndsMinter = await getContractInstance('HoundsMinter');

    hounds = await getContractInstance('Hounds',['HoundRace','HR']);
  });

  it('Deploy the race contracts', async function () {
    const [,otherOwner] = await ethers.getSigners();
    racesRestricted = await getContractInstance('RacesRestricted',[[
      address0,
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
    ]]);
    racesMethods = await getContractInstance('RacesMethods',[[
      address0,
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
    ]]);
    races = await getContractInstance('Races',[[
      randomness.address,
      arenas.address,
      hounds.address,
      racesMethods.address,
      address0,
      payments.address,
      racesRestricted.address,
      address0,
      otherOwner.address,
      address0,
      500000000,
      true
    ]]);
  });

  it('Deploy the queues contracts', async function () {
    queuesRestricted = await hre.ethers.getContractFactory('QueuesRestricted');
    queuesRestricted = await queuesRestricted.deploy([
      address0,
      address0,
      address0,
      address0,
      address0,
      address0,
      address0
    ],[races.address,racesMethods.address,racesRestricted.address]);
    await queuesRestricted.deployed();
    deploymentMessage('QueuesRestricted',queuesRestricted.address);
    queuesMethods = await hre.ethers.getContractFactory('QueuesMethods');
    queuesMethods = await queuesMethods.deploy([
      address0,
      address0,
      address0,
      address0,
      address0,
      address0,
      address0
    ],[races.address,racesMethods.address,racesRestricted.address]);
    await queuesMethods.deployed();
    deploymentMessage('QueuesMethods',queuesMethods.address);
    queues = await hre.ethers.getContractFactory('Queues');
    queues = await queues.deploy([
      arenas.address,
      hounds.address,
      queuesMethods.address,
      payments.address,
      queuesRestricted.address,
      races.address,
      directives.address
    ],[races.address,racesMethods.address,racesRestricted.address,queuesRestricted.address,queuesMethods.address]);
    await queues.deployed();
    deploymentMessage('Queues',queues.address);
    await queuesRestricted.setGlobalParameters([
      arenas.address,
      hounds.address,
      queuesMethods.address,
      payments.address,
      queuesRestricted.address,
      races.address,
      directives.address
    ],[races.address,racesMethods.address,racesRestricted.address,queues.address,queuesMethods.address,queuesRestricted.address]);
    await queuesMethods.setGlobalParameters([
      arenas.address,
      hounds.address,
      queuesMethods.address,
      payments.address,
      queuesRestricted.address,
      races.address,
      directives.address
    ],[races.address,racesMethods.address,racesRestricted.address,queues.address,queuesMethods.address,queuesRestricted.address]);
    await queues.setGlobalParameters([
      arenas.address,
      hounds.address,
      queuesMethods.address,
      payments.address,
      queuesRestricted.address,
      races.address,
      directives.address
    ],[queues.address]);
  });

  it('Deploy the generator contracts', async function () {

    generatorMethods = await getContractInstance('GeneratorMethods',[[
      address0,
      address0,
      address0,
      address0,
      address0,
      address0,
      address0
    ]]);

    generatorZerocost = await getContractInstance('GeneratorZerocost',[[
      address0,
      address0,
      address0,
      address0,
      address0,
      address0,
      address0
    ]],{
      libraries: {
        Sortings: sortingsLibrary.address
      }
    });

    generator = await getContractInstance('Generator',[[
      randomness.address,
      arenas.address,
      hounds.address,
      races.address,
      generatorMethods.address,
      payments.address,
      generatorZerocost.address
    ]]);

  });

});







describe('Setting up the Houndrace contracts global parameters', function () {

  it('Setting up shop contracts dependencies', async function () {

    await shopRestricted.setGlobalParameters([shopMethods.address,shopRestricted.address]);
  
    await shopMethods.setGlobalParameters([shopMethods.address,shopRestricted.address]);

  });

  it('Setting up arenas contracts dependencies', async function () {

    await arenasRestricted.setGlobalParameters(['HoundRace Arenas', 'HRA', arenasRestricted.address]);

  });

  it('Setting up incubator contracts dependencies', async function () {
    
    await incubatorMethods.setGlobalParameters([
      incubatorMethods.address,
      randomness.address,
      genetics.address,
      0
    ]);

  });

  it('Setting up hounds contracts dependencies', async function () {
    
    const [owner,otherOwner] = await ethers.getSigners();
  
    await houndsMinter.setGlobalParameters([
      'HoundRace',
      'HR',
      [owner.address],[
        incubator.address,
        otherOwner.address,
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
      [
        hounds.address,
        houndsRestricted.address,
        houndsMinter.address,
        races.address,
        racesRestricted.address,
        queues.address,
        queuesMethods.address,
        queuesRestricted.address,
        owner.address
      ],[
        incubator.address,
        otherOwner.address,
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
        '0xB1A2BC2EC50000',
        '0x2386F26FC10000',
        '0x2386F26FC10000',
        '0x2386F26FC10000',
        '0x2386F26FC10000'
      ]
    ]);
  
    await houndsRestricted.setGlobalParameters([
      'HoundRace',
      'HR',
      [
        hounds.address,
        houndsRestricted.address,
        houndsMinter.address,
        races.address,
        racesRestricted.address,
        queues.address,
        queuesMethods.address,
        queuesRestricted.address,
        owner.address
      ],
      [
        incubator.address,
        otherOwner.address,
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
        '0xB1A2BC2EC50000',
        '0x2386F26FC10000',
        '0x2386F26FC10000',
        '0x2386F26FC10000',
        '0x2386F26FC10000'
      ]
    ]);

    await hounds.setGlobalParameters([
      'HoundRace',
      'HR',
      [
        hounds.address,
        houndsRestricted.address,
        houndsMinter.address,
        races.address,
        racesRestricted.address,
        queues.address,
        queuesMethods.address,
        queuesRestricted.address,
        owner.address
      ],
      [
        incubator.address,
        otherOwner.address,
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
        '0xB1A2BC2EC50000',
        '0x2386F26FC10000',
        '0x2386F26FC10000',
        '0x2386F26FC10000',
        '0x2386F26FC10000'
      ]
    ]);

  });
  
  it('Setting up races contracts dependencies', async function () {
    const [,otherOwner] = await ethers.getSigners();

    await racesRestricted.setGlobalParameters([
      randomness.address,
      arenas.address,
      hounds.address,
      racesMethods.address,
      generator.address,
      payments.address,
      racesRestricted.address,
      queues.address,
      otherOwner.address,
      queues.address,
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
      queues.address,
      otherOwner.address,
      queues.address,
      500000000,
      true
    ]);

    await races.setGlobalParameters([
      randomness.address,
      arenas.address,
      hounds.address,
      racesMethods.address,
      generator.address,
      payments.address,
      racesRestricted.address,
      queues.address,
      otherOwner.address,
      queues.address,
      500000000,
      true
    ]);

  });

  it('Setting up generator contracts dependencies', async function () {
  
    await generatorMethods.setGlobalParameters([
      randomness.address,
      arenas.address,
      hounds.address,
      races.address,
      generatorMethods.address,
      payments.address,
      generatorZerocost.address
    ]);

    await generatorZerocost.setGlobalParameters([
      randomness.address,
      arenas.address,
      hounds.address,
      races.address,
      generatorMethods.address,
      payments.address,
      generatorZerocost.address
    ]);

  });

});












describe('Genetics methods', function () {

  it('Genetics - wholeArithmeticRecombination', async function () {
    let newGeneticSequence = await genetics.wholeArithmeticRecombination(maleBoilerplateGene,femaleBoilerplateGene);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, 'Failed to generate a valid genetic sequence via whole arithmetic recombination');
  });

  it('Genetics - swapMutation', async function () {
    let newGeneticSequence = await genetics.swapMutation(maleBoilerplateGene,5);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, 'Failed to generate a valid genetic sequence via whole arithmetic recombination');
  });

  it('Genetics - inversionMutation', async function () {
    let newGeneticSequence = await genetics.inversionMutation(maleBoilerplateGene,5);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, 'Failed to generate a valid genetic sequence via whole arithmetic recombination');
  });

  it('Genetics - scrambleMutation', async function () {
    let newGeneticSequence = await genetics.scrambleMutation(maleBoilerplateGene,9);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, 'Failed to generate a valid genetic sequence via whole arithmetic recombination');
  });

  it('Genetics - arithmeticMutation', async function () {
    let newGeneticSequence = await genetics.arithmeticMutation(maleBoilerplateGene,9);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, 'Failed to generate a valid genetic sequence via whole arithmetic recombination');
  });

  it('Genetics - uniformCrossover', async function () {
    let newGeneticSequence = await genetics.uniformCrossover(maleBoilerplateGene,femaleBoilerplateGene,9);
    expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, 'Failed to generate a valid genetic sequence via whole arithmetic recombination');
  });
  
  it('Genetics - mixGenes 100x', async function () {
    for ( let i = 0 ; i < 100 ; ++i ) {
      let newGeneticSequence = await genetics.mixGenes(maleBoilerplateGene,femaleBoilerplateGene,i);
      expect(maleBoilerplateGene !== newGeneticSequence && femaleBoilerplateGene !== newGeneticSequence, 'Failed to generate a valid genetic sequence via whole arithmetic recombination');
    }
  });

});







describe('Hounds', function () {
  
  it('Mint', async function () {
    await safelyMintHoundByAdmin(undefined,false);
  });

  it('Update hound stamina after creation', async function() {
    await safelyUpdateHoundStamina();
  });

  it('Update hound breeding status after creation', async function() {
    await safelyUpdateHoundBreeding();
  });

  it('Mint again', async function () {
    await safelyMintHoundByAdmin(undefined,false);
  });

  it('Mint 10x hounds', async function () {
    for ( let i = 0 ; i < 10 ; ++i ) {
      await safelyMintHoundByAdmin(undefined,i % 2 === 1);
    }
  });

  it('Mint 40x hounds', async function () {
    for ( let i = 0 ; i < 40 ; ++i ) {
      await safelyMintHoundByAdmin(undefined,i % 2 === 1);
    }
  });

  it('Receiving hound data', async function () {
    await checkHoundStructure();
  });

  it('Breed', async function () {
    await breed2Hounds();
  });

  it('Bad update hound stamina', async function () {
    try {
      await safelyUpdateHoundStamina(99999);
    } catch(err) {
      expect(true);
    }
    expect(false);
  });

  it('Bad update hound breeding', async function () {
    try {
      await safelyUpdateHoundBreeding(99999);
    } catch(err) {
      expect(true);
    }
    expect(false);
  });

});


describe('Breed with other hounds', function () {

  it('Mint your hound', async function () {
    await safelyMintHoundByAdmin(undefined,false);
  });

  it('Mint another hound', async function () {
    await safelyMintHoundByAdmin(undefined,true);
  });

  it('Breed again', async function () {
    await breed2Hounds();
  });

  it('Make hound available to breed', async function () {
    const houndId = await hounds.id();
    await hounds.putHoundForBreed(houndId-2,0,true);
  });

});


describe('Races', function () {

  it('Create terrain', async function () {
    const [owner] = await ethers.getSigners();
    let arenaToUse = arena;
    arenaToUse[0] = owner.address;
    let createTerrain = await arenas.createArena(arenaToUse);

    expect(createTerrain !== undefined, 'Create terrain problem');
  });

  it('Create queue', async function () {

    await directives.createPaymentsBatch([
      payment
    ]);

    let queueToUse = queue;
    queueToUse[4] = 5000000000;
    await queues.createQueues([queueToUse]);

    queueToUse[4] = 3000000000;
    await queues.createQueues([queueToUse]);

    queueToUse[4] = 8000000000;
    await queues.createQueues([queueToUse]);

    let queueId = await queues.id();

    expect(Number(queueId) === 2, 'Queue has not been created');

  });

  let houndsStamina = [];

  it('Hounds stamina check x1', async function () {

    for ( let i = 1 ; i <= 10 ; ++i ) {
      let hound = await hounds.hound(i);
      expect(hound !== undefined, 'Hound getter problem');
      houndsStamina[i] = hound[1][2];
    }

  });

  it('Join queue x10', async function () {
    if ( !isGithubAutomation ) {
      await joinQueueAutomatically(1);
    }
  });

  it('Hounds stamina check x2', async function () {
    checkHoundsStamina();
  });

  it('Join queue x20', async function () {
    if ( !isGithubAutomation ) {
      await joinQueueAutomatically(1);
    }
  });

  it('Hounds stamina check x3', async function () {
    checkHoundsStamina();
  });

  it('Join queue x30', async function () {
    if ( !isGithubAutomation ) {
      await joinQueueAutomatically(1);
    }
  });

  it('Join queue and then delete it', async function () {
    if ( !isGithubAutomation ) {
      await joinQueueAutomatically(2,3);
      await queues.deleteQueue(2);
    }
  });

  it('Hounds stamina check x4', async function () {
    checkHoundsStamina();
  });

  it('Upload race', async function () {
    await races.uploadRace(defaultRace,{
      value: defaultRace[4] * defaultRace[2].length
    });
  });

});









describe('Complex tests', function () {

  let arenaId;
  let queueId;
  let paymentBatchId;
  let houndsId = [];

  it('Create terrain with custom fee token', async function () {
    const [owner] = await ethers.getSigners();
    let arenaToUse = arena;
    arenaToUse[0] = owner.address;
    arenaToUse[2] = houndracePotions.address;
    let createTerrain = await arenas.createArena(arenaToUse);
    let theArenaId = await arenas.id();
    arenaId = Number(theArenaId) - 1;
    expect(createTerrain !== undefined, 'Create terrain problem');
  });

  it('Create queue with custom token', async function () {

    let paymentToUse = payment;
    paymentToUse[2] = houndracePotions.address;
    await directives.createPaymentsBatch([
      paymentToUse
    ]);

    const paymentsId = await directives.paymentId();
    paymentBatchId = Number(paymentsId) - 1;

    let queueToUse = queue;
    queueToUse[3] = arenaId;
    queueToUse[4] = 5000000000;
    queueToUse[8] = paymentBatchId;
    queueToUse[1] = houndracePotions.address;
    queueToUse[5] = houndracePotions.address;
    await queues.createQueues([queueToUse]);

    queueToUse[4] = 3000000000;
    await queues.createQueues([queueToUse]);

    queueToUse[4] = 8000000000;
    await queues.createQueues([queueToUse]);

    let theQueueId = await queues.id();
    queueId = Number(theQueueId) - 1;

  });

  it('Mint hound with custom tokens', async function () {
    let houndToUse = defaultHound;
    houndToUse[1][0] = houndracePotions.address;
    houndToUse[2][0] = houndracePotions.address;
    for ( let i = 0 ; i < 30 ; ++i ) {
      await safelyMintHoundByAdmin(houndToUse,false);
      const houndId = await hounds.id();
      houndsId.push(Number(houndId)-1);
    }
  });

  /*
  it('Breed hounds with custom tokens', async function () {
    let houndId = await hounds.id();
    houndId = ( Number(houndId)-1 ) / 2;
    const [owner] = await ethers.getSigners();
    for ( i = 0 ; i < 4 ; ++i ) {
      await houndracePotions.mint(
        owner.address,
        99999999999999
      );
      let balance = await houndracePotions.balanceOf(owner.address);
      await houndracePotions.transferFrom(
        owner.address,
        owner.address,
        99999999999999
      );
      await houndracePotions.mint(
        queues.address,
        99999999999999
      );
      await houndracePotions.approve(queues.address,99999999999);
      await breed2Hounds(houndId - ( ( i * 2 ) + 1 ), houndId - ( ( i * 2 ) + 2 ) );
    }
  });
  */

  it('Update hound with custom tokens stamina', async function () {
    await safelyUpdateHoundStamina(houndsId[houndsId.length-1]);
  });

  it('Update hound with custom tokens breeding', async function () {
    await safelyUpdateHoundBreeding(houndsId[houndsId.length-1]);
  });

  /*
  it('Join queue with custom token x10', async function () {
    if ( !isGithubAutomation ) {
      await joinQueueAutomatically(queueId);
    }
  });

  it('Hounds stamina check for custome token', async function () {
    checkHoundsStamina();
  });

  it('Join queue with custom token x20', async function () {
    if ( !isGithubAutomation ) {
      await joinQueueAutomatically(queueId);
    }
  });
  */

});