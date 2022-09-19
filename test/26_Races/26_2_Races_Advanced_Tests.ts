import { RacesAdvancedTests } from "../../common/dto/test/racesAdvancedTests";
import { safeUploadRace } from "../../plugins/test/uploadRace";


async function advancedTests(
  dependencies: RacesAdvancedTests
): Promise<void> {
  return new Promise((resolve, ) => {
    describe('Races Advanced Tests', async function () {

      it("Upload race", async function () {
        await safeUploadRace({
          contract: dependencies.contract,
          race: dependencies.race,
          onId: 1000000
        });

        resolve();
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