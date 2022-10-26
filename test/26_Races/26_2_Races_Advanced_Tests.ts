import { RacesAdvancedTests } from "../../common/dto/test/racesAdvancedTests";
import { safeUploadRace } from "../../plugins/test/uploadRace";
const { ethers } = require('hardhat');


async function advancedTests(
  dependencies: RacesAdvancedTests
): Promise<void> {
  return new Promise((resolve, ) => {
    describe('Races Advanced Tests', async function () {

      it("Upload race", async function () {
        let [, , , , , , , , signer] = await ethers.getSigners();
        await safeUploadRace({
          contract: dependencies.contract,
          race: dependencies.race,
          onId: 100000,
          hounds: dependencies.hounds,
          queues: dependencies.queues,
          signer: signer
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