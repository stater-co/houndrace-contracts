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
import { expecting } from "../../plugins/expecting";
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

    it("Boost hound stamina cooldown using discount", async function () {
      await dependencies.shops.createDiscount({
        ...globalParams.defaultDiscount,
        tokenContract: dependencies.erc20.address
      });

      const [sig1] = await ethers.getSigners();

      const control = await dependencies.hounds.control();

      await dependencies.erc20.mint(sig1.address, control.breeding.refillBreedingCooldownCost);

      await dependencies.erc20
      .approve(dependencies.payments.address, control.breeding.refillBreedingCooldownCost);

      const discountTokensBefore = await dependencies.erc20.balanceOf(sig1.address);

      await safeBoostHoundStamina({
        contract: dependencies.hounds as Hounds,
        signer: sig1
      });

      const discountTokensAfter = await dependencies.erc20.balanceOf(sig1.address);

      expecting(String(discountTokensBefore) === String(discountTokensAfter), "Static discount tokens bugged on boost stamina");

    });

    it("Boost hound breeding cooldown using discount", async function () {

      const [sig1] = await ethers.getSigners();

      const control = await dependencies.hounds.control();

      await dependencies.erc20.mint(sig1.address,control.breeding.refillBreedingCooldownCost);

      await dependencies.erc20
      .approve(dependencies.payments.address, control.breeding.refillBreedingCooldownCost);

      const discountTokensBefore = await dependencies.erc20.balanceOf(sig1.address);

      await safeBoostHoundBreeding({
        contract: dependencies.hounds as Hounds,
        signer: sig1
      });

      const discountTokensAfter = await dependencies.erc20.balanceOf(sig1.address);

      expecting(String(discountTokensBefore) === String(discountTokensAfter), "Static discount tokens bugged on boost breeding");

    });

    it("Boost hound stamina cooldown using usable discount", async function () {
      const discountId: number = Number(await dependencies.shops.id()) - 1;
      const [sig1] = await ethers.getSigners();

      const erc1155BalanceBeforeMint = await dependencies.erc1155.balanceOf(sig1.address,1);

      await dependencies.erc1155.mintBatch(sig1.address, [1], [1], '0x00');

      const erc1155BalanceAfterMint = await dependencies.erc1155.balanceOf(sig1.address,1);

      expecting(String(erc1155BalanceBeforeMint) !== String(erc1155BalanceAfterMint), "Test ERC1155 mint for creating erc1155 usable discount bugged");

      const discountBeforeEdit = await dependencies.shops.discounts(discountId);

      await dependencies.shops.editDiscount({
        ...globalParams.defaultDiscount,
        tokenContract: dependencies.erc1155.address,
        tokenIds: [1],
        tokenType: 1,
        amountToUsePerUsableDiscount: 1,
        usable: true
      }, discountId);

      const discountAfterEdit = await dependencies.shops.discounts(discountId);

      expecting(String(discountBeforeEdit) !== String(discountAfterEdit), "Edit discount bugged on boosting hound stamina using usable discount");

      const control = await dependencies.hounds.control();

      await dependencies.erc20.mint(sig1.address, control.breeding.refillBreedingCooldownCost);

      await dependencies.erc20
      .approve(dependencies.payments.address, control.breeding.refillBreedingCooldownCost);

      await dependencies.erc1155.setApprovalForAll(dependencies.hounds.address, true);

      const discountTokensBefore = await dependencies.erc1155.balanceOf(sig1.address,1);

      await safeBoostHoundStamina({
        contract: dependencies.hounds as Hounds,
        signer: sig1
      });

      const discountTokensAfter = await dependencies.erc1155.balanceOf(sig1.address,1);

      expecting(String(discountTokensBefore) === String(discountTokensAfter), "Usable discount tokens bugged on boost stamina");

    });

  });
}

export interface TestInterface {
  advancedTests: Function;
}

export const test: TestInterface = {
  advancedTests: advancedTests
};