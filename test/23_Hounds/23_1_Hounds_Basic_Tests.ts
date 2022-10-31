import { HoundsBasicTests } from "../../common/dto/test/houndsBasicTests.dto";
import { safeMintHound } from "../../plugins/test/mintHound";
import { checkHoundStructure } from "../../plugins/test/checkHoundStructure";
import { safeUpdateStamina } from "../../plugins/test/updateStamina";
import { Hound, Hounds } from "../../typechain-types/Hounds";
import { safeBreed } from "../../plugins/test/breed";
import { safeSetMatingSeason } from "../../plugins/test/setMatingSeason";
import { safeSetAvailableToBreed } from "../../plugins/test/setAvailableToBreed";
import { safeBoostHoundBreeding } from "../../plugins/test/boostBreeding";
import { safeBoostHoundStamina } from "../../plugins/test/boostStamina";
import { globalParams } from "../../common/params";
const { ethers } = require('hardhat');


async function basicTest(
  dependencies: HoundsBasicTests
): Promise<void> {
  describe('Hounds Basic Tests', async function () {

    let createdHoundId: string | number;

    it("Mint", async function () {
      let [sig] = await ethers.getSigners();
      createdHoundId = await safeMintHound({
        contract: dependencies.hounds,
        hound: globalParams.defaultHound,
        owner: sig.address,
        position: 0,
        signer: sig,
        races: dependencies.races
      });
    });
    
    it("Update hound stamina after creation", async function() {
      let [, sig] = await ethers.getSigners();
      await safeUpdateStamina({
        contract: dependencies.hounds,
        houndId: createdHoundId,
        signer: sig
      });
    });
    
    it("Verifying hound data", async function () {
      await checkHoundStructure(
        await dependencies.hounds.hound(createdHoundId)
      );
    });

    it("Set mating season true", async function () {
      let [, , signer] = await ethers.getSigners();
      await safeSetMatingSeason({
        season: true,
        contract: dependencies.hounds,
        signer: signer
      });
    });

    it("Mint 20x females", async function () {
      let [sig] = await ethers.getSigners();
      for ( let i = 0 ; i < 20 ; ++i ) {
        let houndToMint: Hound.StructStruct = globalParams.defaultHound;
        houndToMint.identity.geneticSequence[1] = 2;
        createdHoundId = await safeMintHound({
          contract: dependencies.hounds,
          hound: houndToMint as Hound.StructStructOutput,
          owner: sig.address,
          position: 0,
          signer: sig,
          races: dependencies.races
        });
      }
    });

    it("Mint 20x males", async function () {
      let [sig] = await ethers.getSigners();
      for ( let i = 0 ; i < 20 ; ++i ) {
        let houndToMint: Hound.StructStruct = globalParams.defaultHound;
        houndToMint.identity.geneticSequence[1] = 1;
        createdHoundId = await safeMintHound({
          contract: dependencies.hounds,
          hound: houndToMint as Hound.StructStructOutput,
          owner: sig.address,
          position: 0,
          signer: sig,
          races: dependencies.races
        });
      }
    });

    it("Mint & Breed", async function () {
      let femaleHound: Hound.StructStruct = globalParams.defaultHound;
      femaleHound.identity.geneticSequence[1] = 2;
      let [sig] = await ethers.getSigners();
      let newCreatedHoundId: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: femaleHound as Hound.StructStructOutput,
        owner: sig.address,
        position: 0,
        signer: sig,
        races: dependencies.races
      });

      await safeBreed({
        contract: dependencies.hounds,
        hound1: createdHoundId,
        hound2: newCreatedHoundId,
        signer: sig
      });

    });
    
    it("Boost hound breeding cooldown using ETH", async function () {

      const [sig] = await ethers.getSigners();
      await safeBoostHoundBreeding({
        contract: dependencies.hounds as Hounds,
        signer: sig
      });

    });

    it("Boost hound stamina cooldown using ETH", async function () {

      const [sig] = await ethers.getSigners();
      await safeBoostHoundStamina({
        contract: dependencies.hounds as Hounds,
        signer: sig
      });

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