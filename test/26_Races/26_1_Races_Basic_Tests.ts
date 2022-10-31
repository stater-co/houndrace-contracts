import { RacesBasicTests } from "../../common/dto/test/racesBasicTests";
import { safeUploadRace } from "../../plugins/test/uploadRace";
const { ethers } = require('hardhat');


async function basicTest(
  dependencies: RacesBasicTests
): Promise<void> {
  describe('Races Basic Tests', async function () {

    it("Upload race", async function () {
      let [, , , , , , , , signer] = await ethers.getSigners();
      await safeUploadRace({
        contract: dependencies.contract,
        race: dependencies.race,
        onId: 99999,
        hounds: dependencies.hounds,
        queues: dependencies.queues,
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