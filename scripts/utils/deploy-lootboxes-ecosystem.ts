import DeploymentLogger from '../../logs/deployment/printers/deployment';
import DeploymentError from '../../logs/deployment/printers/errors';
import { run, network } from "hardhat";
import { deployContract } from '../../plugins/test/deployContract';
import { Lootboxes, Constructor as LootboxesConstructor } from '../../typechain-types/Lootboxes';
import { globalParams } from '../../common/params';


const arrayfy = (input: any): Array<any> => {
  return Object.keys(input).map((key) => input[key]);
}

async function main() {

  try {

    const lootboxesConstructor: LootboxesConstructor.StructStruct = {
      name: "HoundRace Lootboxes",
      allowedApprovals: [],
      hounds: globalParams.address0,
      payments: globalParams.address0,
      alphadune: globalParams.address0,
      canBeOpened: true
    }
    const lootboxes = await deployContract({
      name: 'Lootboxes',
      constructor: [arrayfy(lootboxesConstructor)],
      props: {}
    }) as Lootboxes;
    DeploymentLogger('export LOOTBOXES=' + lootboxes.address);



    const newLootboxesConstructor: LootboxesConstructor.StructStruct = {
      name: "HoundRace Lootboxes",
      allowedApprovals: [],
      hounds: String(process.env.HOUNDS),
      payments: String(process.env.PAYMENTS),
      alphadune: String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
      canBeOpened: true
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