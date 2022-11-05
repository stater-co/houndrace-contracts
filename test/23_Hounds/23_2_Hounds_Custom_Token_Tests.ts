import { globalParams } from "../../common/params";
import { safeMintHound } from "../../plugins/test/mintHound";
import { checkHoundStructure } from "../../plugins/test/checkHoundStructure";
import { safeUpdateStamina } from "../../plugins/test/updateStamina";
import { Hound, Hounds } from "../../typechain-types/Hounds";
import { safeBreed } from "../../plugins/test/breed";
import { safeSetMatingSeason } from "../../plugins/test/setMatingSeason";
import { HoundsAdvancedTests } from "../../common/dto/test/houndsAdvancedTests.dto";
import { safeBoostHoundBreeding } from "../../plugins/test/boostBreeding";
import { safeBoostHoundStamina } from "../../plugins/test/boostStamina";
import { BigNumber } from 'ethers';
const { ethers } = require('hardhat');


async function advancedTests(
  dependencies: HoundsAdvancedTests
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
    
    it("Mint & Breed 2 hounds using custom tokens for both", async function () {
      let femaleHound: Hound.StructStruct = globalParams.defaultHound;
      femaleHound.identity.geneticSequence[1] = 2;

      const [sig] = await ethers.getSigners();

      let hound1Id: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: femaleHound as Hound.StructStructOutput,
        owner: sig.address,
        position: 0,
        signer: sig,
        races: dependencies.races
      });

      let maleHound: Hound.StructStruct = femaleHound;
      maleHound.identity.geneticSequence[1] = 1;

      let hound2Id: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: maleHound as Hound.StructStructOutput,
        owner: sig.address,
        position: 0,
        signer: sig,
        races: dependencies.races
      });

      const breedCost = await dependencies.hounds.getBreedCosts(hound2Id);
      let totalValueToPay: BigNumber = BigNumber.from(0);
      for ( let i = 0 , l = breedCost.length ; i < l ; ++i ) {
        totalValueToPay = totalValueToPay.add(breedCost[i].amount);
      }

      await dependencies.erc20.mint(sig.address,totalValueToPay);

      await dependencies.erc20
      .approve(dependencies.payments.address, totalValueToPay);

      await safeBreed({
        contract: dependencies.hounds,
        hound1: hound1Id,
        hound2: hound2Id,
        signer: sig
      });

    });

    it("Mint & Breed 2 hounds using custom tokens for first and ETH for second", async function () {
      let femaleHound: Hound.StructStruct = globalParams.defaultHound;
      femaleHound.identity.geneticSequence[1] = 2;

      const [sig] = await ethers.getSigners();

      let hound1Id: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: femaleHound as Hound.StructStructOutput,
        owner: sig.address,
        position: 0,
        signer: sig,
        races: dependencies.races
      });

      let maleHound: Hound.StructStruct = femaleHound;
      maleHound.identity.geneticSequence[1] = 1;

      let hound2Id: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: maleHound as Hound.StructStructOutput,
        owner: sig.address,
        position: 0,
        signer: sig,
        races: dependencies.races
      });

      const breedCost = await dependencies.hounds.getBreedCosts(hound2Id);
      let totalValueToPay: BigNumber = BigNumber.from(0);
      for ( let i = 0 , l = breedCost.length ; i < l ; ++i ) {
        totalValueToPay = totalValueToPay.add(breedCost[i].amount);
      }

      await dependencies.erc20.mint(sig.address,totalValueToPay);

      await dependencies.erc20
      .approve(dependencies.payments.address, totalValueToPay);

      await safeBreed({
        contract: dependencies.hounds,
        hound1: hound1Id,
        hound2: hound2Id,
        signer: sig
      });

    });

    it("Mint & Breed 2 female hounds using ETH for first and custom token for second", async function () {
      let femaleHound: Hound.StructStruct = globalParams.defaultHound;
      femaleHound.identity.geneticSequence[1] = 2;

      const [sig] = await ethers.getSigners();

      let hound1Id: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: femaleHound as Hound.StructStructOutput,
        owner: sig.address,
        position: 0,
        signer: sig,
        races: dependencies.races
      });

      let maleHound: Hound.StructStruct = femaleHound;
      maleHound.identity.geneticSequence[1] = 1;

      let hound2Id: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: maleHound as Hound.StructStructOutput,
        owner: sig.address,
        position: 0,
        signer: sig,
        races: dependencies.races
      });

      const breedCost = await dependencies.hounds.getBreedCosts(hound2Id);
      let totalValueToPay: BigNumber = BigNumber.from(0);
      for ( let i = 0 , l = breedCost.length ; i < l ; ++i ) {
        totalValueToPay = totalValueToPay.add(breedCost[i].amount);
      }

      await dependencies.erc20.mint(sig.address,totalValueToPay);

      await dependencies.erc20
      .approve(dependencies.payments.address, totalValueToPay);

      await safeBreed({
        contract: dependencies.hounds,
        hound1: hound1Id,
        hound2: hound2Id,
        signer: sig
      });

    });

    it("Mint & Breed 2 male hounds using custom tokens for both", async function () {
      let maleHound: Hound.StructStruct = globalParams.defaultHound;
      maleHound.identity.geneticSequence[1] = 1;

      const [sig] = await ethers.getSigners();

      let hound1Id: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: maleHound as Hound.StructStructOutput,
        owner: sig.address,
        position: 0,
        signer: sig,
        races: dependencies.races
      });

      let femaleHound: Hound.StructStruct = maleHound;
      femaleHound.identity.geneticSequence[1] = 2;

      let hound2Id: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: femaleHound as Hound.StructStructOutput,
        owner: sig.address,
        position: 0,
        signer: sig,
        races: dependencies.races
      });

      const breedCost = await dependencies.hounds.getBreedCosts(hound2Id);
      let totalValueToPay: BigNumber = BigNumber.from(0);
      for ( let i = 0 , l = breedCost.length ; i < l ; ++i ) {
        totalValueToPay = totalValueToPay.add(breedCost[i].amount);
      }

      await dependencies.erc20.mint(sig.address, totalValueToPay);

      await dependencies.erc20
      .approve(dependencies.payments.address, totalValueToPay);

      await safeBreed({
        contract: dependencies.hounds,
        hound1: hound1Id,
        hound2: hound2Id,
        signer: sig
      });

    });

    it("Mint & Breed 2 male hounds using custom tokens for first and ETH for second", async function () {
      let maleHound: Hound.StructStruct = globalParams.defaultHound;
      maleHound.identity.geneticSequence[1] = 1;

      const [sig] = await ethers.getSigners();

      let hound1Id: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: maleHound as Hound.StructStructOutput,
        owner: sig.address,
        position: 0,
        signer: sig,
        races: dependencies.races
      });

      let femaleHound: Hound.StructStruct = maleHound;
      femaleHound.identity.geneticSequence[1] = 2;

      let hound2Id: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: femaleHound as Hound.StructStructOutput,
        owner: sig.address,
        position: 0,
        signer: sig,
        races: dependencies.races
      });

      const breedCost = await dependencies.hounds.getBreedCosts(hound2Id);
      let totalValueToPay: BigNumber = BigNumber.from(0);
      for ( let i = 0 , l = breedCost.length ; i < l ; ++i ) {
        totalValueToPay = totalValueToPay.add(breedCost[i].amount);
      }

      await dependencies.erc20.mint(sig.address, totalValueToPay);

      await dependencies.erc20
      .approve(dependencies.payments.address, totalValueToPay);

      await safeBreed({
        contract: dependencies.hounds,
        hound1: hound1Id,
        hound2: hound2Id,
        signer: sig
      });

    });

    it("Mint & Breed 2 male hounds using ETH for first and custom token for second", async function () {
      let maleHound: Hound.StructStruct = globalParams.defaultHound;
      maleHound.identity.geneticSequence[1] = 1;

      const [sig] = await ethers.getSigners();

      let hound1Id: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: maleHound as Hound.StructStructOutput,
        owner: sig.address,
        position: 0,
        signer: sig,
        races: dependencies.races
      });

      let femaleHound: Hound.StructStruct = maleHound;
      femaleHound.identity.geneticSequence[1] = 2;

      let hound2Id: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: femaleHound as Hound.StructStructOutput,
        owner: sig.address,
        position: 0,
        signer: sig,
        races: dependencies.races
      });

      const breedCost = await dependencies.hounds.getBreedCosts(hound2Id);
      let totalValueToPay: BigNumber = BigNumber.from(0);
      for ( let i = 0 , l = breedCost.length ; i < l ; ++i ) {
        totalValueToPay = totalValueToPay.add(breedCost[i].amount);
      }

      await dependencies.erc20.mint(sig.address, totalValueToPay);

      await dependencies.erc20
      .approve(dependencies.payments.address, totalValueToPay);

      await safeBreed({
        contract: dependencies.hounds,
        hound1: hound1Id,
        hound2: hound2Id,
        signer: sig
      });

    });

    it("Boost hound breeding cooldown using custom tokens", async function () {

      const [sig1] = await ethers.getSigners();

      const control = await dependencies.hounds.control();

      await dependencies.erc20.mint(sig1.address,control.breeding.refillBreedingCooldownCost);

      await dependencies.erc20
      .approve(dependencies.payments.address, control.breeding.refillBreedingCooldownCost);

      await safeBoostHoundBreeding({
        contract: dependencies.hounds as Hounds,
        signer: sig1
      });

    });

    it("Boost hound stamina cooldown using custom tokens", async function () {

      const [sig1] = await ethers.getSigners();

      const control = await dependencies.hounds.control();

      await dependencies.erc20.mint(sig1.address, control.breeding.refillBreedingCooldownCost);

      await dependencies.erc20
      .approve(dependencies.payments.address, control.breeding.refillBreedingCooldownCost);

      await safeBoostHoundStamina({
        contract: dependencies.hounds as Hounds,
        signer: sig1
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