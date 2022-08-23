import { RacesAdvancedTests } from "../../common/dto/test/racesAdvancedTests";
import { safeUploadRace } from "../../plugins/test/uploadRace";


async function advancedTests(
  dependencies: RacesAdvancedTests
): Promise<void> {
  describe('Races Advanced Tests', async function () {

    it("Upload race", async function () {
      await safeUploadRace({
        contract: dependencies.contract,
        race: dependencies.race
      });
    });

  });

}

export interface TestInterface {
  advancedTests: Function;
}

export const test: TestInterface = {
  advancedTests: advancedTests
};