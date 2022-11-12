import DeploymentError from '../../logs/deployment/printers/errors';
import { run, network } from "hardhat";
import { deployContract } from '../../plugins/test/deployContract';
import { Deployer } from '../../typechain-types/Deployer';


async function main() {

  try {

    /*
    const gnosisDeployer = await deployContract({
      name: 'Deployer',
      constructor: [],
      props: {}
    }) as Deployer;
    */

    if ( network.name !== "hardhat" ) {

      /*
      try {
        await run("verify:verify", {
          address: gnosisDeployer.address,
          constructorArguments: []
        });
      } catch (err) {
        DeploymentError((err as NodeJS.ErrnoException).message);
      }
      */
      
      try {
        await run("verify:verify", {
          address: "0xE81F39c31053d10bd45AE2B59308a771F207D683",
          constructorArguments: [8]
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