import { LootboxesBasicTests } from "../../common/dto/test/lootboxesBasicTests";
import { expecting } from "../../plugins/expecting";
import { LootboxesConstructor } from '../../typechain-types/Lootboxes';
const { ethers } = require('hardhat');


async function basicTest(
  dependencies: LootboxesBasicTests
): Promise<void> {
  return new Promise((resolve, ) => {
    describe('Lootboxes Basic Tests', async function () {

      const totalLootboxesToCreate: number = 20;

      it("Create hounds for lootbox", async function () {
        const [ , , , , , , , , , , , , , , , , , , , sig20 ] = await ethers.getSigners();

        let houndsBalanceBefore = await dependencies.lootboxesContract.balanceOf(sig20.address,1);

        await dependencies.lootboxesContract.connect(sig20).mint(totalLootboxesToCreate, 1, "token_uri");

        let houndsBalanceAfter = await dependencies.lootboxesContract.balanceOf(sig20.address,1);

        expecting(Number(houndsBalanceBefore) < Number(houndsBalanceAfter), "Lootboxes creation bugged");

      });

      it("Set open status to true", async function () {
        const controlBefore: any = await dependencies.lootboxesContract.control();
        await dependencies.lootboxesContract.setOpenStatus(true);
        const controlAfter: any = await dependencies.lootboxesContract.control();
        expecting(JSON.stringify(controlBefore) !== JSON.stringify(controlAfter), "Set open status method bugged");
      })

      it("Open lootbox ", async function() {
        const [ , , , , , , , , , , , , , , , , , , , sig20 ] = await ethers.getSigners();
        await dependencies.lootboxesContract.connect(sig20).open(1);
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