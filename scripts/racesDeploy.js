const { deployment, errors } = require("../plugins/logger.js");
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


const hre = require("hardhat");
const address0 = "0x0000000000000000000000000000000000000000";
const maleBoilerplateGene = [ 0, 1, 8, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 9, 8, 2, 1, 4, 2, 9, 8, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 7, 7, 0, 2, 9, 1, 0, 9, 1, 1, 2, 1, 9, 0, 2, 2, 8, 5, 2, 8, 1, 9 ];
const femaleBoilerplateGene = [ 0, 2, 6, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 3, 1, 9, 1, 4, 2, 4, 7, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 1, 7, 2, 7, 9, 1, 0, 9, 1, 1, 2, 1, 0, 7, 2, 2, 8, 5, 8, 7, 1, 3 ];
const defaultHound = [
  [ 0, 0, 0, 0],
  [ 10000000, 10000000, 100, 1, 100 ],
  [ 0, 100000, 1000, true ],
  [ 1, 1, 0, 0, maleBoilerplateGene ],
  "",
  "",
  true,
  false
];
const defaultQueues = [[
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
const defaultRace = [
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

    deployment('##############################################');
    const [owner] = await hre.ethers.getSigners();

    const RacesRestricted = await hre.ethers.getContractFactory("RacesRestricted");
    const racesRestricted = await RacesRestricted.deploy([
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
      false
    ]);
    await racesRestricted.deployed();
    deployment('export RACE_RESTRICTED=' + racesRestricted.address);
    deployments.update(19, {
      step: "Deploy races methods"
    });

    const RacesMethods = await hre.ethers.getContractFactory("RacesMethods");
    const racesMethods = await RacesMethods.deploy([
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
      false
    ]);
    await racesMethods.deployed();
    deployment('export RACE_METHODS=' + racesMethods.address);
    deployments.update(20, {
      step: "Deploy races"
    });


    const randomness = { address: "0xFD1f506D99Ee2a3e43BD341f7Ece597E113E1e8D" }
    const arenas = { address: "0xE932701c08031de66f7537e21c4BE5e291044cb1" }
    const hounds = { address: "0x4ff29379a5B5a234761EF022bbAd6a6224941C73" }
    const methods = { address: "0x71D7ecB3c3F2B0a50611E603767c6b0d166aB967" }
    const generator = { address: "0xc2cEF0D1f524A14CbBdB6EDc0C7cf987C73996B5" }
    const payments = { address: "0xD7Dd6CBd2BfCB9D262c669430454676199F64f78" }
    const restricted = { address: "0x1cCa75d6E1BE4339cBAd3980673073Fa0bf6D4A9" }
    const allowed = { address: "0xfb499624e4B7B356A2783d677e35594004c84333" }
    const staterApi = { address: "0xb051E12E7F71ECbBe8413A4121166A1B62Ab050B" }
    const queues = { address: "0xfb499624e4B7B356A2783d677e35594004c84333" }
    const raceFee = 500000000;
    const callable = false;

    const Races = await hre.ethers.getContractFactory("Races");
    const races = await Races.deploy([
      randomness.address,
      arenas.address,
      hounds.address,
      racesMethods.address,
      address0,
      payments.address,
      racesRestricted.address,
      address0,
      owner.address,
      address0,
      500000000,
      false
    ]);
    await races.deployed();
    deployment('export RACE=' + races.address);
    deployments.update(21, {
      step: "Deploy generator methods"
    });

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
        owner.address,
        queues.address,
        500000000,
        false
      ]);
      configurations.update(10, {
        step: "Set global parameters for races methods"
      });
    } catch(err) {
      errors(err);
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
        owner.address,
        queues.address,
        500000000,
        false
      ]);
      configurations.update(11, {
        step: "Set global parameters for races"
      });
    } catch(err) {
      errors(err);
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
        owner.address,
        queues.address,
        500000000,
        false
      ]);
      configurations.update(12, {
        step: "Set global parameters hounds"
      });
    } catch(err) {
      errors(err);
    }

    try {
      await hre.run("verify:verify", {
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
            address0,
            address0,
            500000000,
            false
          ]
        ]
      });
    } catch (err) {
      errors(err);
    }
    verifications.update(19, {
      step: "Verify races methods"
    });

    try {
      await hre.run("verify:verify", {
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
            address0,
            address0,
            500000000,
            false
          ]
        ]
      });
    } catch (err) {
      errors(err);
    }
    verifications.update(20, {
      step: "Verify races"
    });
    
    try {
      await hre.run("verify:verify", {
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
            owner.address,
            address0,
            500000000,
            false
          ]
        ]
      });
    } catch (err) {
      errors(err);
    }
    verifications.update(21, {
      step: "Verify generator methods"
    });

  } catch(err) {
    console.error(err);
    errors(err);
  }

}



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    errors(error);
    process.exit(1);
});