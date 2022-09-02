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

      const totalLootboxesToCreate: number = 20;

      it("Create hounds for lootbox", async function () {
        const [sig1] = await ethers.getSigners();

        let houndsBalanceBefore = await dependencies.lootboxesContract.balanceOf(sig1.address);

        await dependencies.lootboxesContract.mint(globalParams.address0, 5000, totalLootboxesToCreate);

        let houndsBalanceAfter = await dependencies.lootboxesContract.balanceOf(sig1.address);

        expecting(Number(houndsBalanceBefore) < Number(houndsBalanceAfter), "Lootboxes creation bugged");

      });

      it("Set open status to true", async function () {
        const controlBefore: Constructor.StructStruct = await dependencies.lootboxesContract.control();
        await dependencies.lootboxesContract.setOpenStatus(true);
        const controlAfter: Constructor.StructStruct = await dependencies.lootboxesContract.control();
        expecting(JSON.stringify(controlBefore) !== JSON.stringify(controlAfter), "Set open status method bugged");
      })

      it("Open lootbox ", async function() {
        await dependencies.lootboxesContract.open(Math.floor(Math.random() * totalLootboxesToCreate) + 1,{
          value: 5000
        });
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