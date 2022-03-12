const Tx = require("ethereumjs-tx");
const { ethers } = require("hardhat");
const provider = ethers.getDefaultProvider(process.env.URL);
const wallet = new ethers.Wallet(process.env.KEY).connect(provider);
const wallet1 = new ethers.Wallet(process.env.KEY1).connect(provider);
const wallet2 = new ethers.Wallet(process.env.KEY2).connect(provider);

const address0 = "0x0000000000000000000000000000000000000000";


async function run() {

    const HoundsData = await hre.ethers.getContractFactory("HoundsData");
    let houndsData = new ethers.Contract("0x51Ab98aDA64CB9473c33596070762B857C6a10c3", HoundsData.interface, wallet1);
    houndsData = await houndsData.deployed();

    const control = await houndsData.control();

    await houndsData.setGlobalParameters([
        control.name,
        control.symbol,
        control.allowedCallers,
        "0x3939Ac63351cb3bB5F64E1EB4C6eAf8F4BAA7580", // hound methods
        control.incubator,
        control.staterApi,
        control.shop,
        control.payments,
        control.breedCost,
        control.breedFee,
        control.refillCost,
        control.refillBreedingCooldownCost,
        control.refillStaminaCooldownCost
    ]);

}

run();
