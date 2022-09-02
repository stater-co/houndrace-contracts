import { expect } from "chai";
import { LootboxesBasicTests } from "../../common/dto/test/lootboxesBasicTests";
import { globalParams } from "../../common/params";
import { expecting } from "../../plugins/expecting";
import { safeMintHound } from "../../plugins/test/mintHound";
import { Constructor } from '../../typechain-types/Lootboxes';
const { ethers } = require('hardhat');


async function basicTest(
  dependencies: LootboxesBasicTests
): Promise<void> {
  return new Promise((resolve, ) => {
    describe('Lootboxes Basic Tests', async function () {

      let houndIdToUse: string | number;
      let lootboxId: string | number;

      it("Create hounds for lootbox", async function () {
        const [sig1] = await ethers.getSigners();

        houndIdToUse = Number(await dependencies.houndsContract.id()); 

        await safeMintHound({
          contract: dependencies.houndsContract,
          hound: globalParams.defaultHound,
          owner: sig1.address,
          position: 0,
          signer: sig1.address,
          gamification: dependencies.gamification,
          races: dependencies.races
        });

        await dependencies.houndsContract.approve(dependencies.lootboxesContract.address, houndIdToUse);

        let houndsBalanceBefore = await dependencies.houndsContract.balanceOf(sig1.address);

        lootboxId = Number(await dependencies.lootboxesContract.id());

        const purchasePrice: number = 0;

        await dependencies.lootboxesContract.mint([
          {
            currency: globalParams.address0,
            hound: houndIdToUse,
            purchasePrice: purchasePrice,
            token_uri: "token_uri"
          }
        ]);

        let houndsBalanceAfter = await dependencies.houndsContract.balanceOf(sig1.address);

        expecting(purchasePrice === 0 || ( purchasePrice > 0 && Number(houndsBalanceBefore) === Number(houndsBalanceAfter) - 1 ), "Lootboxes creation bugged");

      });

      it("Set open status to true", async function () {
        const controlBefore: Constructor.StructStruct = await dependencies.lootboxesContract.control();
        await dependencies.lootboxesContract.setOpenStatus(true);
        const controlAfter: Constructor.StructStruct = await dependencies.lootboxesContract.control();
        expecting(JSON.stringify(controlBefore) !== JSON.stringify(controlAfter), "Set open status method bugged");
      })

      it("Open lootbox ", async function() {
        await dependencies.lootboxesContract.open(lootboxId);
        resolve();
      });

    });

  });

}

export interface TestInterface {
    basicTest: Function;
}

export const test: TestInterface = {
    basicTest: basicTest
};