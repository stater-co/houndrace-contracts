/*
const Tx = require("ethereumjs-tx");
const { ethers } = require("hardhat");
const provider = ethers.getDefaultProvider(process.env.URL);
const wallet = new ethers.Wallet(process.env.KEY).connect(provider);
const wallet1 = new ethers.Wallet(process.env.KEY1).connect(provider);
const wallet2 = new ethers.Wallet(process.env.KEY2).connect(provider);

const address0 = "0x0000000000000000000000000000000000000000";


async function run() {
   
    const PaperSafetyVRFMethods = await ethers.getContractFactory("RandomnessVanillaMethods");
    let paperSafetyVRFMethods = new ethers.Contract("0x7C1beEfB5f14640591DDa349582fC4B4c0231Fb8", PaperSafetyVRFMethods.interface, wallet1);
    paperSafetyVRFMethods = await paperSafetyVRFMethods.deployed();


    const PaperSafetyVRFData = await hre.ethers.getContractFactory("RandomnessVanillaData");
    let paperSafetyVRFData = new ethers.Contract("0xeC594817c2A09dd28aE2F7F8f4107e0b597Fa4C7", PaperSafetyVRFData.interface, wallet1);
    paperSafetyVRFData = await paperSafetyVRFData.deployed();


    const Ogars = await hre.ethers.getContractFactory("Ogars");
    let ogars = new ethers.Contract("0x0303E0eDC626Bf0baecDf504169954693dBA0A1C", Ogars.interface, wallet1);
    ogars = await ogars.deployed();

    
    const TerrainsContractMethods = await hre.ethers.getContractFactory("ArenasMethods");
    let terrainsContractMethods = new ethers.Contract("0xb148107E80C899bc129581C1D6238592ac1CC59c", TerrainsContractMethods.interface, wallet1);
    terrainsContractMethods = await terrainsContractMethods.deployed();

    
    const TerrainsContractData = await hre.ethers.getContractFactory("ArenasData");
    let terrainsContractData = new ethers.Contract("0x696b71b986e75b2Fe1035ED64CB2d7057387cC20", TerrainsContractData.interface, wallet1);
    terrainsContractData = await terrainsContractData.deployed();


    const GeneticsMethods = await hre.ethers.getContractFactory("GeneticsMethods");
    let geneticsMethods = new ethers.Contract("0x2CebD0E66a747Ef0b68f0E5C119F05b17F35266e", GeneticsMethods.interface, wallet1);
    geneticsMethods = await geneticsMethods.deployed();


    const GeneticsData = await hre.ethers.getContractFactory("GeneticsData");
    let geneticsData = new ethers.Contract("0xc9947b3ac5966D4f15C5970cE4A6A0783d0B8cF8", GeneticsData.interface, wallet1);
    geneticsData = await geneticsData.deployed();


    const IncubatorMethods = await hre.ethers.getContractFactory("IncubatorMethods");
    let incubatorMethods = new ethers.Contract("0xA83f8ee18AA763A2615d4Fea6356BEbA81F11Eb1", IncubatorMethods.interface, wallet1);
    incubatorMethods = await incubatorMethods.deployed();


    const IncubatorData = await hre.ethers.getContractFactory("IncubatorData");
    let incubatorData = new ethers.Contract("0x81A69Ee3F43AF8193B45bE12707085b4bA8C868e", IncubatorData.interface, wallet1);
    incubatorData = await incubatorData.deployed();


    const HoundsMethods = await hre.ethers.getContractFactory("HoundsMethods");
    let houndsMethods = new ethers.Contract("0xf95229d577c66C7d239d5aBaf1b22624392C1a7f", HoundsMethods.interface, wallet1);
    houndsMethods = await houndsMethods.deployed();


    const HoundsData = await hre.ethers.getContractFactory("HoundsData");
    let houndsData = new ethers.Contract("0xA86e122327c8c06DD02989ded4fa727F916e8D0A", HoundsData.interface, wallet1);
    houndsData = await houndsData.deployed();


    const RaceGeneratorMethods = await hre.ethers.getContractFactory("RaceGeneratorMethods");
    let raceGeneratorMethods = new ethers.Contract("0xc1eFB0f27B073f03B49721ae748340872d555DFa", RaceGeneratorMethods.interface, wallet1);
    raceGeneratorMethods = await raceGeneratorMethods.deployed();


    const RaceGeneratorData = await hre.ethers.getContractFactory("RaceGeneratorData");
    let raceGeneratorData = new ethers.Contract("0x9C9d0452A15B96822fb708ad562665D785c16119", RaceGeneratorData.interface, wallet1);
    raceGeneratorData = await raceGeneratorData.deployed();


    const RacesMethods = await hre.ethers.getContractFactory("RacesMethods");
    let racesMethods = new ethers.Contract("0x159Db78Af50FB95209ffDdAcE1C21B5421e55efe", RacesMethods.interface, wallet1);
    racesMethods = await racesMethods.deployed();


    const RacesData = await hre.ethers.getContractFactory("RacesData");
    let racesData = new ethers.Contract("0x7595672259Ba958afB6c079286543F1F17B7F9B7", RacesData.interface, wallet1);
    racesData = await racesData.deployed();

    await terrainsContractData.createArena([1,1000,3]);

    const totalArenas = await terrainsContractData.id();
    let createdArenas = Array.from(Array(totalArenas).keys());

    const randomArenaToUse = Math.floor(Math.random() * createdArenas.length - 1) + 1;
    await racesData.createQueues([
        [address0,[],1,50000000,0,10]
    ]);

    await houndsData.adminCreateHound([[0,0,0,0],[0,100000000,100,1,100],[0,10000000,264000,false],[[ 1, 2, 8, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 9, 8, 2, 1, 4, 2, 9, 8, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 7, 7, 0, 2, 9, 1, 0, 9, 1, 1, 2, 1, 9, 0, 2, 2, 8, 5 ],0,[ 1, 2, 8, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 9, 8, 2, 1, 4, 2, 9, 8, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 7, 7, 0, 2, 9, 1, 0, 9, 1, 1, 2, 1, 9, 0, 2, 2, 8, 5 ],[ 2, 1, 6, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 3, 1, 9, 1, 4, 2, 4, 7, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 1, 7, 2, 7, 9, 1, 0, 9, 1, 1, 2, 1, 0, 7, 2, 2, 8, 5 ]],"Hound #1","Hound #1 Description",true,false]);

}

run();


*/