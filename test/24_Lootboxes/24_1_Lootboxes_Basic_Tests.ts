import { expect } from "chai";
import { LootboxesBasicTests } from "../../common/dto/test/lootboxesBasicTests";
import { globalParams } from "../../common/params";
import { safeMintHound } from "../../plugins/test/mintHound";
const { ethers } = require('hardhat');


async function basicTest(
  dependencies: LootboxesBasicTests
): Promise<void> {
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

      await dependencies.lootboxesContract.mint([
        {
          currency: globalParams.address0,
          hound: houndIdToUse,
          purchasePrice: 10000000,
          token_uri: "token_uri"
        }
      ]);

      let houndsBalanceAfter = await dependencies.houndsContract.balanceOf(sig1.address);

      expect(Number(houndsBalanceBefore) === Number(houndsBalanceAfter) - 1);

    });

    it("Open lootbox ", async function() {
      await dependencies.lootboxesContract.open(lootboxId);
    });

  });

}

export interface TestInterface {
    basicTest: Function;
}

export const test: TestInterface = {
    basicTest: basicTest
};