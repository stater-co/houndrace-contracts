import { LootboxesBasicTests } from "../../common/dto/test/lootboxesBasicTests";
import { globalParams } from "../../common/params";
import { expecting } from "../../plugins/expecting";
const { ethers } = require('hardhat');


async function basicTest(
  dependencies: LootboxesBasicTests
): Promise<void> {
  return new Promise((resolve, ) => {
    describe('HoundraceMysteryBoxes Basic Tests', async function () {

      const totalLootboxesToCreate: number = 20;
      const tokenId: number = 1;

      it("Create hounds for lootbox", async function () {
        let [, , , , , , , , , signer] = await ethers.getSigners();
        let houndsBalanceBefore = await dependencies.lootboxesContract.balanceOf(signer.address, tokenId);
        await dependencies.lootboxesContract.connect(signer).mint(totalLootboxesToCreate, tokenId, "token_uri");
        let houndsBalanceAfter = await dependencies.lootboxesContract.balanceOf(signer.address, tokenId);
        expecting(Number(houndsBalanceBefore) < Number(houndsBalanceAfter), "HoundraceMysteryBoxes creation bugged");
      });

      it("Set open status to true", async function () {
        let [, , , , , , , , , , signer] = await ethers.getSigners();
        const controlBefore: any = await dependencies.lootboxesContract.control();
        await dependencies.lootboxesContract.connect(signer).setOpenStatus(true);
        const controlAfter: any = await dependencies.lootboxesContract.control();
        expecting(JSON.stringify(controlBefore) !== JSON.stringify(controlAfter), "Set open status method bugged");
      })

      it("Open lootbox", async function() {
        let [, , , , , , , , , signer, , signer2] = await ethers.getSigners();
        await dependencies.lootboxesContract.connect(signer).open(1,1);
        await dependencies.lootboxesContract.connect(signer2).opened(1,signer.address,[globalParams.defaultLootbox]);
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