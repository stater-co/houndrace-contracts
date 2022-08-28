import { RacesBasicTests } from "../../common/dto/test/racesBasicTests";
import { safeUploadRace } from "../../plugins/test/uploadRace";


async function basicTest(
  dependencies: RacesBasicTests
): Promise<void> {
  describe('Races Basic Tests', async function () {

    it("Upload race", async function () {
      await safeUploadRace({
        contract: dependencies.contract,
        race: dependencies.race,
        onId: 99999
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