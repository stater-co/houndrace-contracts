import { hound } from "../../common/params";
import { safeMintHound } from "../../plugins/test/mintHound";
import { checkHoundStructure } from "../../plugins/test/checkHoundStructure";
import { safeUpdateStamina } from "../../plugins/test/updateStamina";
import { Hound } from "../../typechain-types/Hounds";
import { safeBreed } from "../../plugins/test/breed";
import { safeSetMatingSeason } from "../../plugins/test/setMatingSeason";
import { safeSetAvailableToBreed } from "../../plugins/test/setAvailableToBreed";
import { HoundsAdvancedTests } from "../../common/dto/test/houndsAdvancedTests.dto";
const { ethers } = require('hardhat');


async function advancedTests(
  dependencies: HoundsAdvancedTests
): Promise<void> {
  describe('Hounds Basic Tests', async function () {

    let createdHoundId: string | number;

    it("Mint", async function () {
      let customERC20Hound = hound;
      customERC20Hound.stamina.staminaRefill1xCurrency = dependencies.erc20.address;
      customERC20Hound.breeding.breedingFeeCurrency = dependencies.erc20.address;

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

    it("Mint & Breed ETH hound with custom token hound", async function () {
      let femaleHound: Hound.StructStruct = hound;
      femaleHound.identity.geneticSequence[1] = 2;
      let newCreatedHoundId: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: femaleHound as Hound.StructStructOutput
      });

      console.log("Breed cost for: " + createdHoundId, newCreatedHoundId);
      const hound1 = await dependencies.hounds.hound(createdHoundId);
      const hound2 = await dependencies.hounds.hound(newCreatedHoundId);
      console.log(hound1);
      console.log(hound2);
      const breedCost = await dependencies.hounds.getBreedCost(createdHoundId, newCreatedHoundId);
      console.log("Breed cost: " + breedCost);

      const [sig1] = await ethers.getSigners();

      console.log("Getting ready to mint...");
      await dependencies.erc20.mint(sig1.address,breedCost);

      console.log("successfully minted");
      const balanceOf = await dependencies.erc20.balanceOf(sig1.address);
      console.log("Balance: " + balanceOf);

      console.log("Sending approve to: " + dependencies.erc20.address);
      await dependencies.erc20
      .approve(dependencies.payments.address, breedCost);

      
      console.log("Sender test unit: " + sig1.address);
      const allowed = await dependencies.erc20.allowance(sig1.address, dependencies.payments.address);
      console.log("Allowed: " + allowed);

      console.log("BEFORE SAFE BREED");
      await safeBreed({
        contract: dependencies.hounds,
        hound1: createdHoundId,
        hound2: newCreatedHoundId,
        signer: sig1
      });
      console.log("AFTER SAFE BREED");
    });

    /*
    it("Mint & Breed custom token hound with custom token hound", async function () {
      let femaleHound: Hound.StructStruct = hound;
      femaleHound.identity.geneticSequence[1] = 2;
      let newCreatedHoundId: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: femaleHound as Hound.StructStructOutput
      });
      await safeBreed({
        contract: dependencies.hounds,
        hound1: createdHoundId,
        hound2: newCreatedHoundId,
        signer: dependencies.signer
      });
    });

    it("Mint & Breed custom token hound with ETH hound", async function () {
      let femaleHound: Hound.StructStruct = hound;
      femaleHound.identity.geneticSequence[1] = 2;
      let newCreatedHoundId: string | number = await safeMintHound({
        contract: dependencies.hounds,
        hound: femaleHound as Hound.StructStructOutput
      });
      await safeBreed({
        contract: dependencies.hounds,
        hound1: createdHoundId,
        hound2: newCreatedHoundId,
        signer: dependencies.signer
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
    */

  });
}

export interface TestInterface {
  advancedTests: Function;
}

export const test: TestInterface = {
  advancedTests: advancedTests
};