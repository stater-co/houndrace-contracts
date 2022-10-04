import { LootboxesBasicTests } from "../../common/dto/test/lootboxesBasicTests";
import { globalParams } from "../../common/params";
import { expecting } from "../../plugins/expecting";
const { ethers } = require('hardhat');


async function basicTest(
  dependencies: LootboxesBasicTests
): Promise<void> {
  return new Promise((resolve, ) => {
    describe('Lootboxes Basic Tests', async function () {

      const totalLootboxesToCreate: number = 20;
      const tokenId: number = 1;

      it("Create hounds for lootbox", async function () {
        const [sig1] = await ethers.getSigners();

        let houndsBalanceBefore = await dependencies.lootboxesContract.balanceOf(sig1.address, tokenId);

        await dependencies.lootboxesContract.mint(totalLootboxesToCreate, tokenId, "token_uri");

        let houndsBalanceAfter = await dependencies.lootboxesContract.balanceOf(sig1.address, tokenId);

        expecting(Number(houndsBalanceBefore) < Number(houndsBalanceAfter), "Lootboxes creation bugged");

      });

      it("Set open status to true", async function () {
        const controlBefore: any = await dependencies.lootboxesContract.control();
        await dependencies.lootboxesContract.setOpenStatus(true);
        const controlAfter: any = await dependencies.lootboxesContract.control();
        expecting(JSON.stringify(controlBefore) !== JSON.stringify(controlAfter), "Set open status method bugged");
      })

      it("Open lootbox", async function() {
        await dependencies.lootboxesContract.open(1);
        const [sig] = await ethers.getSigners();
        await dependencies.lootboxesContract.opened(1,sig.address,globalParams.defaultLootbox);
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