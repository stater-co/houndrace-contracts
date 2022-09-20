import DeploymentError from '../../logs/deployment/printers/errors';
import { run, network } from "hardhat";
import { deployContract } from '../../plugins/test/deployContract';
import { RacesRestricted } from '../../typechain-types/RacesRestricted';
import { RacesMethods } from '../../typechain-types/RacesMethods';
import { Races, RacesConstructor } from '../../typechain-types/Races';
import { globalParams } from '../../common/params';
import DeploymentLogger from '../../logs/deployment/printers/deployment';


const arrayfy = (input: any): Array<any> => {
  return Object.keys(input).map((key) => input[key]);
}

async function main() {

  try {

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

    const racesMethods = await deployContract({
      name: 'RacesMethods',
      constructor: [arrayfy(racesConstructor)],
      props: {}
    }) as RacesMethods;
    DeploymentLogger('export RACE_METHODS=' + racesMethods.address);

    const races = await deployContract({
      name: 'Races',
      constructor: [arrayfy(racesConstructor)],
      props: {}
    }) as Races;
    DeploymentLogger('export RACE=' + races.address);








    if ( network.name !== "hardhat" ) {

      try {
        await run("verify:verify", {
          address: racesRestricted.address,
          constructorArguments: [arrayfy(racesConstructor)]
        });
      } catch (err) {
        DeploymentError((err as NodeJS.ErrnoException).message);
      }

      try {
        await run("verify:verify", {
          address: racesMethods.address,
          constructorArguments: [arrayfy(racesConstructor)]
        });
      } catch (err) {
        DeploymentError((err as NodeJS.ErrnoException).message);
      }
      
      try {
        await run("verify:verify", {
          address: races.address,
          constructorArguments: [arrayfy(racesConstructor)]
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