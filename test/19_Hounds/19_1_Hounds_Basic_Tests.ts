import { HoundsBasicTests } from "../../common/dto/test/houndsBasicTests.dto";
import { hound } from "../../common/params";
import { safeMintHound } from "../../plugins/test/mintHound";
import { checkHoundStructure } from "../../plugins/test/checkHoundStructure";
import { safeUpdateStamina } from "../../plugins/test/updateStamina";
import { Hound } from "../../typechain-types/contracts/hounds/Index.sol/Hounds";


async function basicTest(
  dependencies: HoundsBasicTests
): Promise<void> {
  describe('Hounds Basic Tests', async function () {

    let createdHoundId: string | number;

    it("Mint", async function () {
      createdHoundId = await safeMintHound({
        contract: dependencies.hounds,
        hound: hound as Hound.StructStructOutput
      });
    });
    
    it("Update hound stamina after creation", async function() {
      await safeUpdateStamina({
        contract: dependencies.hounds,
        houndId: createdHoundId
      });
    });
    
    it("Verifying hound data", async function () {
      await checkHoundStructure(
        await dependencies.hounds.hound(createdHoundId)
      );
    });

      /*
    
      it("Breed", async function () {
        await breed2Hounds();
      });
    
      it("Breed again", async function () {
        await breed2Hounds();
      });
    */
    
  });
}

export interface TestInterface {
    basicTest: Function;
}

export const test: TestInterface = {
    basicTest: basicTest
};