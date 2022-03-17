const Tx = require('ethereumjs-tx');
const { ethers } = require('hardhat');
const provider = ethers.getDefaultProvider(process.env.URL);
const wallet = new ethers.Wallet(process.env.KEY).connect(provider);
const wallet1 = new ethers.Wallet(process.env.KEY1).connect(provider);
const wallet2 = new ethers.Wallet(process.env.KEY2).connect(provider);
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


async function run() {
   
    const accounts = await hre.ethers.getSigners();
    const Hounds = await ethers.getContractFactory("Hounds");
    const hounds = new ethers.Contract('0x04cE8cf56439aF2358a8b1F2EcDbF41e3cc9E03a', Hounds.interface, accounts[0]);
    
    /*
    const Hounds = await ethers.getContractFactory('Hounds');
    const hounds = await Hounds.attach('0x04cE8cf56439aF2358a8b1F2EcDbF41e3cc9E03a');
    */

    /*
    const id = await hounds.id();
    console.log('Starting from id: ' + id);

    await hounds.initializeHound(0,defaultHound);
    console.log('hound initialize called successfully');
    */

    const id1 = await hounds.id();
    console.log('After, id: ' + id1);
    
    /*
    await hounds.initializeHound(id1,defaultHound);
    console.log('hound initialize called successfully');
    */

    /*
    const hound1 = await hounds.hound(id1-3);
    const hound2 = await hounds.hound(id1-2);
    console.log("Hound 1: " + JSON.stringify(hound1));
    console.log("Hound 2: " + JSON.stringify(hound2));
    */

    console.log("From: " + accounts[0].address);
    const estimation = await hounds.getBreedCost(id1-3,id1-2,{ from : accounts[0].address });
    console.log("Estimation : " + estimation);
    

    /*
    await hounds.breedHounds(7,8,{ value : '0x58D15E176280000' });
    console.log('hound breed called successfully');
    */

}

run();
