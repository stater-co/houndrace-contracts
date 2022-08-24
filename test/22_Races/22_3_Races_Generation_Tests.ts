import { RacesAdvancedTests } from "../../common/dto/test/racesAdvancedTests";
import { safeUploadRace } from "../../plugins/test/uploadRace";


async function advancedTests(
  dependencies: RacesAdvancedTests
): Promise<void> {
  const initialDummyGenerations: number = 1000;
  describe('Races Generation: ' + initialDummyGenerations + ' dummy races', async function () {

    for ( let i = 0 ; i < initialDummyGenerations ; ++i ) {
    
      it("Generate race " + i, async function () {
        await safeUploadRace({
          contract: dependencies.contract,
          race: dependencies.race
        });
      });

    }

  });

}

export interface TestInterface {
  advancedTests: Function;
}

export const test: TestInterface = {
  advancedTests: advancedTests
};