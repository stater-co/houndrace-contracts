import DeploymentLogger from '../../logs/deployment/printers/deployment';
import DeploymentError from '../../logs/deployment/printers/errors';
import { run, network } from "hardhat";
import { deployContract } from '../../plugins/test/deployContract';
import { HoundraceMysteryBoxes, LootboxesConstructor } from '../../typechain-types/HoundraceMysteryBoxes';


const arrayfy = (input: any): Array<any> => {
  return Object.keys(input).map((key) => input[key]);
}

async function main() {

  try {

    const lootboxesConstructor: LootboxesConstructor.StructStruct = {
      name: "Houndrace Mystery Boxes",
      operators: [String(process.env.ETH_ACCOUNT_PUBLIC_KEY)],
      targets: [['0xc6e64e53','0x7c46a44b','0xedd0cb87']],
      canBeOpened: true
    };
    const lootboxes = await deployContract({
      name: 'HoundraceMysteryBoxes',
      constructor: [arrayfy(lootboxesConstructor)],
      props: {}
    }) as HoundraceMysteryBoxes;
    DeploymentLogger('export LOOTBOXES=' + lootboxes.address);



    const newLootboxesConstructor: LootboxesConstructor.StructStruct = {
      name: "Houndrace Mystery Boxes",
      operators: [String(process.env.ETH_ACCOUNT_PUBLIC_KEY)],
      targets: [['0xc6e64e53','0x7c46a44b','0xedd0cb87']],
      canBeOpened: false
    }

    try {
      await lootboxes.setGlobalParameters(newLootboxesConstructor);
    } catch(err) {
      DeploymentError((err as NodeJS.ErrnoException).message);
    }






    if ( network.name !== "hardhat" ) {

      try {
        await run("verify:verify", {
          address: lootboxes.address,
          constructorArguments: [arrayfy(lootboxesConstructor)]
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