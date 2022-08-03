import { globalParams, hound } from "../../common/params";
import { safeMintHound } from "../../plugins/test/mintHound";
import { checkHoundStructure } from "../../plugins/test/checkHoundStructure";
import { safeUpdateStamina } from "../../plugins/test/updateStamina";
import { Hound, Hounds } from "../../typechain-types/Hounds";
import { safeBreed } from "../../plugins/test/breed";
import { safeSetMatingSeason } from "../../plugins/test/setMatingSeason";
import { HoundsAdvancedTests } from "../../common/dto/test/houndsAdvancedTests.dto";
import { safeBoostHoundBreeding } from "../../plugins/test/boostBreeding";
import { safeBoostHoundStamina } from "../../plugins/test/boostStamina";
const { ethers } = require('hardhat');


async function advancedTests(
  dependencies: HoundsAdvancedTests
): Promise<void> {
  describe('Hounds Basic Tests', async function () {

    let createdHoundId: string | number;

    it("Mint", async function () {
      let customERC20Hound = hound;
      customERC20Hound.stamina.staminaRefill1xCurrency = dependencies.erc20.address;
      customERC20Hound.breeding.breedingcurrency = dependencies.erc20.address;

      createdHoundId = await safeMintHound({
        contract: dependencies.hounds,
        hound: customERC20Hound as Hound.StructStructOutput
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
    
    it("Mint & Breed 2 hounds using custom tokens for both", async function () {
      let femaleHound: Hound.StructStruct = hound;
      femaleHound.identity.geneticSequence[1] = 2;
      femaleHound.breeding.breedingcurrency = dependencies.erc20.address;
      femaleHound.stamina.staminaRefill1xCurrency = dependencies.erc20.address;

      let hound1Id: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: femaleHound as Hound.StructStructOutput
      });

      let maleHound: Hound.StructStruct = femaleHound;
      maleHound.identity.geneticSequence[1] = 1;

      let hound2Id: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: maleHound as Hound.StructStructOutput
      });

      const breedCost = await dependencies.hounds.getBreedCost(hound1Id, hound2Id);

      const [sig1] = await ethers.getSigners();

      await dependencies.erc20.mint(sig1.address,breedCost);

      await dependencies.erc20
      .approve(dependencies.payments.address, breedCost);

      await safeBreed({
        contract: dependencies.hounds,
        hound1: hound1Id,
        hound2: hound2Id,
        signer: sig1
      });

    });

    it("Mint & Breed 2 hounds using custom tokens for first and ETH for second", async function () {
      let femaleHound: Hound.StructStruct = hound;
      femaleHound.identity.geneticSequence[1] = 2;
      femaleHound.breeding.breedingcurrency = dependencies.erc20.address;
      femaleHound.stamina.staminaRefill1xCurrency = dependencies.erc20.address;

      let hound1Id: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: femaleHound as Hound.StructStructOutput
      });

      let maleHound: Hound.StructStruct = femaleHound;
      maleHound.identity.geneticSequence[1] = 1;
      maleHound.breeding.breedingcurrency = globalParams.address0;
      maleHound.stamina.staminaRefill1xCurrency = globalParams.address0;

      let hound2Id: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: maleHound as Hound.StructStructOutput
      });

      const breedCost = await dependencies.hounds.getBreedCost(hound1Id, hound2Id);

      const [sig1] = await ethers.getSigners();

      await dependencies.erc20.mint(sig1.address,breedCost);

      await dependencies.erc20
      .approve(dependencies.payments.address, breedCost);

      await safeBreed({
        contract: dependencies.hounds,
        hound1: hound1Id,
        hound2: hound2Id,
        signer: sig1
      });

    });

    it("Mint & Breed 2 female hounds using ETH for first and custom token for second", async function () {
      let femaleHound: Hound.StructStruct = hound;
      femaleHound.identity.geneticSequence[1] = 2;
      femaleHound.breeding.breedingcurrency = globalParams.address0;
      femaleHound.stamina.staminaRefill1xCurrency = globalParams.address0;

      let hound1Id: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: femaleHound as Hound.StructStructOutput
      });

      let maleHound: Hound.StructStruct = femaleHound;
      maleHound.identity.geneticSequence[1] = 1;
      maleHound.breeding.breedingcurrency = dependencies.erc20.address;
      maleHound.stamina.staminaRefill1xCurrency = dependencies.erc20.address;

      let hound2Id: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: maleHound as Hound.StructStructOutput
      });

      const breedCost = await dependencies.hounds.getBreedCost(hound1Id, hound2Id);

      const [sig1] = await ethers.getSigners();

      await dependencies.erc20.mint(sig1.address,breedCost);

      await dependencies.erc20
      .approve(dependencies.payments.address, breedCost);

      await safeBreed({
        contract: dependencies.hounds,
        hound1: hound1Id,
        hound2: hound2Id,
        signer: sig1
      });

    });

    it("Mint & Breed 2 male hounds using custom tokens for both", async function () {
      let maleHound: Hound.StructStruct = hound;
      maleHound.identity.geneticSequence[1] = 1;
      maleHound.breeding.breedingcurrency = dependencies.erc20.address;
      maleHound.stamina.staminaRefill1xCurrency = dependencies.erc20.address;

      let hound1Id: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: maleHound as Hound.StructStructOutput
      });

      let femaleHound: Hound.StructStruct = maleHound;
      femaleHound.identity.geneticSequence[1] = 2;

      let hound2Id: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: femaleHound as Hound.StructStructOutput
      });

      const breedCost = await dependencies.hounds.getBreedCost(hound1Id, hound2Id);

      const [sig1] = await ethers.getSigners();

      await dependencies.erc20.mint(sig1.address,breedCost);

      await dependencies.erc20
      .approve(dependencies.payments.address, breedCost);

      await safeBreed({
        contract: dependencies.hounds,
        hound1: hound1Id,
        hound2: hound2Id,
        signer: sig1
      });

    });

    it("Mint & Breed 2 male hounds using custom tokens for first and ETH for second", async function () {
      let maleHound: Hound.StructStruct = hound;
      maleHound.identity.geneticSequence[1] = 1;
      maleHound.breeding.breedingcurrency = dependencies.erc20.address;
      maleHound.stamina.staminaRefill1xCurrency = dependencies.erc20.address;

      let hound1Id: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: maleHound as Hound.StructStructOutput
      });

      let femaleHound: Hound.StructStruct = maleHound;
      femaleHound.identity.geneticSequence[1] = 2;
      femaleHound.breeding.breedingcurrency = globalParams.address0;
      femaleHound.stamina.staminaRefill1xCurrency = globalParams.address0;

      let hound2Id: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: femaleHound as Hound.StructStructOutput
      });

      const breedCost = await dependencies.hounds.getBreedCost(hound1Id, hound2Id);

      const [sig1] = await ethers.getSigners();

      await dependencies.erc20.mint(sig1.address,breedCost);

      await dependencies.erc20
      .approve(dependencies.payments.address, breedCost);

      await safeBreed({
        contract: dependencies.hounds,
        hound1: hound1Id,
        hound2: hound2Id,
        signer: sig1
      });

    });

    it("Mint & Breed 2 male hounds using ETH for first and custom token for second", async function () {
      let maleHound: Hound.StructStruct = hound;
      maleHound.identity.geneticSequence[1] = 1;
      maleHound.breeding.breedingcurrency = globalParams.address0;
      maleHound.stamina.staminaRefill1xCurrency = globalParams.address0;

      let hound1Id: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: maleHound as Hound.StructStructOutput
      });

      let femaleHound: Hound.StructStruct = maleHound;
      femaleHound.identity.geneticSequence[1] = 2;
      femaleHound.breeding.breedingcurrency = dependencies.erc20.address;
      femaleHound.stamina.staminaRefill1xCurrency = dependencies.erc20.address;

      let hound2Id: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: femaleHound as Hound.StructStructOutput
      });

      const breedCost = await dependencies.hounds.getBreedCost(hound1Id, hound2Id);

      const [sig1] = await ethers.getSigners();

      await dependencies.erc20.mint(sig1.address,breedCost);

      await dependencies.erc20
      .approve(dependencies.payments.address, breedCost);

      await safeBreed({
        contract: dependencies.hounds,
        hound1: hound1Id,
        hound2: hound2Id,
        signer: sig1
      });

    });

    /*
    // @DIIMIIM: For some reason Hardhat ethers doesn't seem to be able to find the .transfer() method inherited in the hounds contract
    it("Mint & Breed 2 male hounds using custom tokens for both, second one being external", async function () {
      let maleHound: Hound.StructStruct = hound;
      maleHound.identity.geneticSequence[1] = 1;
      maleHound.breeding.breedingcurrency = dependencies.erc20.address;
      maleHound.stamina.staminaRefill1xCurrency = dependencies.erc20.address;

      let hound1Id: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: maleHound as Hound.StructStructOutput
      });

      let hound2Id: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: maleHound as Hound.StructStructOutput
      });

      const [sig1, sig2] = await ethers.getSigners();

      await dependencies.transferableHounds.transfer(sig2.address,hound2Id);

      await dependencies.hounds.connect(sig2).putHoundForBreed(hound2Id, 10000000, true);

      const breedCost = await dependencies.hounds.getBreedCost(hound1Id, hound2Id);

      await dependencies.erc20.mint(sig1.address,breedCost);

      await dependencies.erc20
      .approve(dependencies.payments.address, breedCost);

      await safeBreed({
        contract: dependencies.hounds,
        hound1: hound1Id,
        hound2: hound2Id,
        signer: sig1
      });

    });
    */

    it("Boost hound breeding cooldown using custom tokens", async function () {

      const [sig1] = await ethers.getSigners();

      const hound: Hound.StructStructOutput = await (dependencies.hounds as Hounds).hound(createdHoundId);

      await dependencies.erc20.mint(sig1.address,hound.breeding.breedingFee);

      await dependencies.erc20
      .approve(dependencies.payments.address, hound.breeding.breedingFee);

      await safeBoostHoundBreeding({
        contract: dependencies.hounds as Hounds,
        hound1: createdHoundId,
        signer: sig1
      });

    });

    it("Boost hound stamina cooldown using custom tokens", async function () {

      const [sig1] = await ethers.getSigners();

      const hound: Hound.StructStructOutput = await (dependencies.hounds as Hounds).hound(createdHoundId);

      await dependencies.erc20.mint(sig1.address,hound.breeding.breedingFee);

      await dependencies.erc20
      .approve(dependencies.payments.address, hound.breeding.breedingFee);

      await safeBoostHoundStamina({
        contract: dependencies.hounds as Hounds,
        hound1: createdHoundId,
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