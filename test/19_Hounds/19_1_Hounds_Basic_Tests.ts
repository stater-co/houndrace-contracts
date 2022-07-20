import { HoundsBasicTests } from "../../common/dto/test/houndsBasicTests.dto";
import { hound } from "../../common/params";
import { safeMintHound } from "../../plugins/mintHound";
import { Hound } from "../../typechain-types/contracts/hounds/Index.sol/Hounds";


async function basicTest(
  dependencies: HoundsBasicTests
): Promise<void> {
  describe('Hounds Basic Tests', async function () {

    it("Mint", async function () {
      await safeMintHound({
        contract: dependencies.hounds,
        hound: hound as Hound.StructStructOutput
      });
    });
    
    /*
      it("Update hound stamina after creation", async function() {
        await safelyUpdateHoundStamina();
      });
    
      it("Update hound breeding status after creation", async function() {
        await safelyUpdateHoundBreeding();
      });
    
      it("Mint again", async function () {
        await safelyMintHoundByAdmin(undefined,false);
      });
    
      it("Mint 10x hounds", async function () {
        for ( let i = 0 ; i < 10 ; ++i ) {
          await safelyMintHoundByAdmin(undefined,i % 2 === 1);
        }
      });
    
      it("Mint 40x hounds", async function () {
        for ( let i = 0 ; i < 40 ; ++i ) {
          await safelyMintHoundByAdmin(undefined,i % 2 === 1);
        }
      });
    
      it("Mint 100x hounds", async function () {
        for ( let i = 0 ; i < 100 ; ++i ) {
          await safelyMintHoundByAdmin(undefined,i % 2 === 1);
        }
      });
    
      it("Receiving hound data", async function () {
        await checkHoundStructure();
      });
    
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