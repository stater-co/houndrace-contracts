import { HoundExternalDependencies } from '../common/dto/test/houndsExternalDependencies.dto';
import { HoundsSystem } from '../common/dto/test/houndsSystem.dto';
import { globalParams } from '../common/params';
import { deployContract } from '../plugins/test/deployContract';
import { Hounds } from '../typechain-types/contracts/hounds/Index.sol/Hounds';
import { HoundsMinter } from '../typechain-types/contracts/hounds/minter/Index.sol/HoundsMinter';
import { HoundsModifier } from '../typechain-types/contracts/hounds/modifier/Index.sol/HoundsModifier';
import { HoundsRestricted } from '../typechain-types/contracts/hounds/restricted/Index.sol/HoundsRestricted';
const { ethers } = require("hardhat");


let houndsRestricted: HoundsRestricted;
let houndsModifier: HoundsModifier;
let houndsMinter: HoundsMinter;
let hounds: Hounds;


export async function run(
  dependencies: HoundExternalDependencies
): Promise<HoundsSystem> {
  return new Promise((resolve, ) => {
    describe('Setting up the Hounds Ecosystem', async function () {

      it("Deploy the hounds restricted contract", async function () {
        const [owner, otherOwner] = await ethers.getSigners();
        houndsRestricted = await deployContract({
          name: 'HoundsRestricted',
          constructor: [[
            "HoundRace",
            "HR",
            [owner.address],
            [
              globalParams.address0,
              otherOwner.address,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0
            ],[
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              "0xB1A2BC2EC50000",
              "0x2386F26FC10000",
              "0x2386F26FC10000",
              "0x2386F26FC10000",
              "0x2386F26FC10000"
            ]
          ]],
          props: {}
        }) as HoundsRestricted;
      });

      it("Deploy the hounds modifier contract", async function () {
        const [owner, otherOwner] = await ethers.getSigners();
        houndsModifier = await deployContract({
          name: 'HoundsModifier',
          constructor: [[
            "HoundRace",
            "HR",
            [owner.address],
            [
              globalParams.address0,
              otherOwner.address,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0
            ],[
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              "0xB1A2BC2EC50000",
              "0x2386F26FC10000",
              "0x2386F26FC10000",
              "0x2386F26FC10000",
              "0x2386F26FC10000"
            ]
          ]],
          props: {}
        }) as HoundsModifier;
      });
    
      it("Deploy the hounds minter contract", async function () {
        const [owner, otherOwner] = await ethers.getSigners();
        houndsMinter = await deployContract({
          name: 'HoundsMinter',
          constructor: [[
            "HoundRace",
            "HR",
            [owner.address],
            [
              globalParams.address0,
              otherOwner.address,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0
            ],[
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              "0xB1A2BC2EC50000",
              "0x2386F26FC10000",
              "0x2386F26FC10000",
              "0x2386F26FC10000",
              "0x2386F26FC10000"
            ]
          ]],
          props: {}
        }) as HoundsMinter;
      });

      it("Deploy the hounds contract", async function () {
        const [owner, otherOwner] = await ethers.getSigners();
        hounds = await deployContract({
          name: 'Hounds',
          constructor: [[
            "HoundRace",
            "HR",
            [owner.address],
            [
              dependencies.incubatorAddress,
              otherOwner.address,
              dependencies.paymentsAddress,
              houndsRestricted.address,
              houndsMinter.address,
              globalParams.address0,
              houndsModifier.address,
              dependencies.shopsAddress
            ],[
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              "0xB1A2BC2EC50000",
              "0x2386F26FC10000",
              "0x2386F26FC10000",
              "0x2386F26FC10000",
              "0x2386F26FC10000"
            ]
          ]],
          props: {}
        }) as Hounds;

        resolve({
          houndsRestricted: houndsRestricted,
          houndsModifier: houndsModifier,
          houndsMinter: houndsMinter,
          hounds: hounds
        });
      });

    });

  });
}