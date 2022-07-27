import { ArenasBasicTests } from "../../common/dto/test/arenasBasicTests";
import { safeEditArena } from "../../plugins/test/editArena";
import { safeMintArena } from "../../plugins/test/mintArena";


async function basicTest(
  dependencies: ArenasBasicTests
): Promise<void> {
  describe('Arenas Basic Tests', async function () {

    let createdArenaId: string | number;

    it("Mint", async function () {
      createdArenaId = await safeMintArena({
        contract: dependencies.arenas,
        arena: dependencies.arena
      });
    });
    
    it("Edit", async function () {
      await safeEditArena({
        contract: dependencies.arenas,
        arena: dependencies.arena,
        arenaId: createdArenaId
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