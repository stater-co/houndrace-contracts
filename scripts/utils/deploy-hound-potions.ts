import DeploymentError from '../../logs/deployment/printers/errors';
import { run, network } from "hardhat";
import { deployContract } from '../../plugins/test/deployContract';
import { HoundPotions } from '../../typechain-types/HoundPotions';


async function main() {

  try {

    const houndracePotionsConstructor: Array<string> = [
      "Hound Potions", "HPO", "500000000000000000000000000"
    ];
    const houndracePotions = await deployContract({
      name: 'HoundPotions',
      constructor: houndracePotionsConstructor,
      props: {}
    }) as HoundPotions;



    if ( network.name !== "hardhat" ) {

      try {
        await run("verify:verify", {
          address: houndracePotions.address,
          constructorArguments: houndracePotionsConstructor
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