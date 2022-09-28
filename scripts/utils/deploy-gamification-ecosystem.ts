import DeploymentLogger from '../../logs/deployment/printers/deployment';
import DeploymentError from '../../logs/deployment/printers/errors';
import { run, network } from "hardhat";
import { deployContract } from '../../plugins/test/deployContract';
import { globalParams } from '../../common/params';
import { Gamification, GamificationConstructor } from '../../typechain-types/Gamification';


const arrayfy = (input: any): Array<any> => {
  return Object.keys(input).map((key) => input[key]);
}

async function main() {

  try {






    const gamificationConstructor: GamificationConstructor.StructStruct = {
      defaultBreeding: globalParams.houndBreeding,
      defaultStamina: globalParams.houndStamina,
      methods: globalParams.address0,
      restricted: globalParams.address0,
      firewall: globalParams.address0
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





    const newGamificationConstructor: GamificationConstructor.StructStruct = {
      defaultBreeding: globalParams.houndBreeding,
      defaultStamina: globalParams.houndStamina,
      restricted: gamificationRestricted.address,
      methods: gamificationMethods.address,
      firewall: String(process.env.FIREWALL)
    }

    try {
      await gamificationRestricted.setGlobalParameters(newGamificationConstructor);
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await gamificationMethods.setGlobalParameters(newGamificationConstructor);
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }

    try {
      await gamification.setGlobalParameters(newGamificationConstructor);
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }






    if ( network.name !== "hardhat" ) {

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