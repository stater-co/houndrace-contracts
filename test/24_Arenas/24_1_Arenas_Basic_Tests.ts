import { ArenasBasicTests } from "../../common/dto/test/arenasBasicTests";
import { safeEditArena } from "../../plugins/test/editArena";
import { safeMintArena } from "../../plugins/test/mintArena";
const { ethers } = require('hardhat');


async function basicTest(
  dependencies: ArenasBasicTests
): Promise<void> {
  describe('Arenas Basic Tests', async function () {

    let createdArenaId: string | number;

    it("Mint", async function () {
      let [, , , signer] = await ethers.getSigners();
      createdArenaId = await safeMintArena({
        contract: dependencies.arenas,
        arena: dependencies.arena,
        signer: signer
      });
    });
    
    it("Edit", async function () {
      let [, , , , signer] = await ethers.getSigners();
      await safeEditArena({
        contract: dependencies.arenas,
        arena: dependencies.arena,
        arenaId: createdArenaId,
        signer: signer
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