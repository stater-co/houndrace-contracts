import { HoundsBasicTests } from "../../common/dto/test/houndsBasicTests.dto";
import { globalParams, hound } from "../../common/params";
import { safeMintHound } from "../../plugins/test/mintHound";
import { checkHoundStructure } from "../../plugins/test/checkHoundStructure";
import { safeUpdateStamina } from "../../plugins/test/updateStamina";
import { Hound } from "../../typechain-types/Hounds";
import { safeBreed } from "../../plugins/test/breed";
import { safeSetMatingSeason } from "../../plugins/test/setMatingSeason";
import { safeSetAvailableToBreed } from "../../plugins/test/setAvailableToBreed";
import { expect } from "chai";
const { ethers } = require('hardhat');


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

    it("Set mating season true", async function () {
      await safeSetMatingSeason({
        season: true,
        contract: dependencies.hounds
      });
    });

    it("Mint 30x males", async function () {
      for ( let i = 0 ; i < 30 ; ++i ) {
        let houndToMint: Hound.StructStruct = hound;
        houndToMint.identity.geneticSequence[1] = 1;
        createdHoundId = await safeMintHound({
          contract: dependencies.hounds,
          hound: houndToMint as Hound.StructStructOutput
        });
      }
    });

    it("Mint 30x females", async function () {
      for ( let i = 0 ; i < 30 ; ++i ) {
        let houndToMint: Hound.StructStruct = hound;
        houndToMint.identity.geneticSequence[1] = 2;
        createdHoundId = await safeMintHound({
          contract: dependencies.hounds,
          hound: houndToMint as Hound.StructStructOutput
        });
      }
    });

    it("Mint & Breed", async function () {
      let femaleHound: Hound.StructStruct = hound;
      femaleHound.identity.geneticSequence[1] = 2;
      let newCreatedHoundId: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: femaleHound as Hound.StructStructOutput
      });
      let [sig1] = await ethers.getSigners();

      const hound1 = await dependencies.hounds.hound(createdHoundId);
      const hound2 = await dependencies.hounds.hound(newCreatedHoundId);

      console.log(hound1.breeding.breedingFeeCurrency + " == " + globalParams.address0);
      console.log(hound1.stamina.staminaRefill1xCurrency + " == " + globalParams.address0);
      console.log(hound2.breeding.breedingFeeCurrency + " == " + globalParams.address0);
      console.log(hound2.stamina.staminaRefill1xCurrency + " == " + globalParams.address0);
      expect(hound1.breeding.breedingFeeCurrency == globalParams.address0);
      expect(hound1.stamina.staminaRefill1xCurrency == globalParams.address0);
      expect(hound2.breeding.breedingFeeCurrency == globalParams.address0);
      expect(hound2.stamina.staminaRefill1xCurrency == globalParams.address0);

      let breeding: boolean = await safeBreed({
        contract: dependencies.hounds,
        hound1: createdHoundId,
        hound2: newCreatedHoundId,
        signer: sig1
      });

      expect(breeding);
    });
    
    it("Set hound available to breed externally", async function () {
      await safeSetAvailableToBreed({
        status: true,
        fee: 50000,
        houndId: createdHoundId,
        contract: dependencies.hounds
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