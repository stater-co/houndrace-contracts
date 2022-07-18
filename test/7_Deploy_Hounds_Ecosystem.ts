import { Contract } from 'ethers';
import { HoundExternalDependencies } from '../common/dto/test/houndsExternalDependencies.dto';
import { HoundsSystem } from '../common/dto/test/houndsSystem.dto';
import { params } from '../common/params';
import { deployContract } from '../plugins/deployContract';
const { ethers } = require("hardhat");


let houndsRestricted: Contract;
let houndsModifier: Contract;
let houndsMinter: Contract;
let hounds: Contract;


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
              params.address0,
              otherOwner.address,
              params.address0,
              params.address0,
              params.address0,
              params.address0,
              params.address0,
              params.address0
            ],[
              params.address0,
              params.address0,
              params.address0,
              params.address0,
              "0xB1A2BC2EC50000",
              "0x2386F26FC10000",
              "0x2386F26FC10000",
              "0x2386F26FC10000",
              "0x2386F26FC10000"
            ]
          ]],
          props: {}
        });
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
              params.address0,
              otherOwner.address,
              params.address0,
              params.address0,
              params.address0,
              params.address0,
              params.address0,
              params.address0
            ],[
              params.address0,
              params.address0,
              params.address0,
              params.address0,
              "0xB1A2BC2EC50000",
              "0x2386F26FC10000",
              "0x2386F26FC10000",
              "0x2386F26FC10000",
              "0x2386F26FC10000"
            ]
          ]],
          props: {}
        });
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
              params.address0,
              otherOwner.address,
              params.address0,
              params.address0,
              params.address0,
              params.address0,
              params.address0,
              params.address0
            ],[
              params.address0,
              params.address0,
              params.address0,
              params.address0,
              "0xB1A2BC2EC50000",
              "0x2386F26FC10000",
              "0x2386F26FC10000",
              "0x2386F26FC10000",
              "0x2386F26FC10000"
            ]
          ]],
          props: {}
        });
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
              params.address0,
              houndsModifier.address,
              dependencies.shopsAddress
            ],[
              params.address0,
              params.address0,
              params.address0,
              params.address0,
              "0xB1A2BC2EC50000",
              "0x2386F26FC10000",
              "0x2386F26FC10000",
              "0x2386F26FC10000",
              "0x2386F26FC10000"
            ]
          ]],
          props: {}
        });

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