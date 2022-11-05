import { HoundExternalDependencies } from '../common/dto/test/houndsExternalDependencies.dto';
import { HoundsSystem } from '../common/dto/test/houndsSystem.dto';
import { globalParams } from '../common/params';
import { deployContract } from '../plugins/test/deployContract';
import { Hounds } from '../typechain-types/Hounds';
import { HoundsMinter } from '../typechain-types/HoundsMinter';
import { HoundsModifier } from '../typechain-types/HoundsModifier';
import { HoundsRestricted } from '../typechain-types/HoundsRestricted';
import { AlphaERC721 } from '../typechain-types/AlphaERC721';
import { HoundsZerocost } from '../typechain-types/HoundsZerocost';
const { ethers } = require("hardhat");


let houndsRestricted: HoundsRestricted;
let houndsModifier: HoundsModifier;
let houndsMinter: HoundsMinter;
let houndsZerocost: HoundsZerocost;
let hounds: Hounds;


export async function run(
  dependencies: HoundExternalDependencies
): Promise<HoundsSystem> {
  return new Promise((resolve, ) => {
    describe('Setting up the Hounds Ecosystem', async function () {

      it("Deploy the hounds restricted contract", async function () {
        const [owner, signer2, signer3] = await ethers.getSigners();
        houndsRestricted = await deployContract({
          name: 'HoundsRestricted',
          constructor: [[
            "HoundRace",
            "HR",
            globalParams.defaultHound,
            globalParams.breedingConstructor,
            globalParams.staminaConstructor,
            [owner.address, signer2.address, signer3.address],
            [['0xd7016c7f'],['0xfbba82fc'],['0x5c80b448']],
            [
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              dependencies.paymentsAddress,
              dependencies.shopsAddress,
              globalParams.address0,
              dependencies.geneticsAddress,
              owner.address
            ],[
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
        const [owner, signer2, signer3] = await ethers.getSigners();
        houndsModifier = await deployContract({
          name: 'HoundsModifier',
          constructor: [[
            "HoundRace",
            "HR",
            globalParams.defaultHound,
            globalParams.breedingConstructor,
            globalParams.staminaConstructor,
            [owner.address, signer2.address, signer3.address],
            [['0xd7016c7f'],['0xfbba82fc'],['0x5c80b448']],
            [
              houndsRestricted.address,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              dependencies.paymentsAddress,
              dependencies.shopsAddress,
              globalParams.address0,
              dependencies.geneticsAddress,
              owner.address
            ],[
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

      it("Deploy the hounds zerocost contract", async function () {
        const [owner, signer2, signer3] = await ethers.getSigners();
        houndsZerocost = await deployContract({
          name: 'HoundsZerocost',
          constructor: [[
            "HoundRace",
            "HR",
            globalParams.defaultHound,
            globalParams.breedingConstructor,
            globalParams.staminaConstructor,
            [owner.address, signer2.address, signer3.address],
            [['0xd7016c7f'],['0xfbba82fc'],['0x5c80b448']],
            [
              houndsRestricted.address,
              globalParams.address0,
              houndsModifier.address,
              globalParams.address0,
              globalParams.address0,
              dependencies.paymentsAddress,
              dependencies.shopsAddress,
              globalParams.address0,
              dependencies.geneticsAddress,
              owner.address
            ],[
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
        }) as HoundsZerocost;
      });
    
      it("Deploy the hounds minter contract", async function () {
        const [owner, signer2, signer3] = await ethers.getSigners();
        houndsMinter = await deployContract({
          name: 'HoundsMinter',
          constructor: [[
            "HoundRace",
            "HR",
            globalParams.defaultHound,
            globalParams.breedingConstructor,
            globalParams.staminaConstructor,
            [owner.address, signer2.address, signer3.address],
            [['0xd7016c7f'],['0xfbba82fc'],['0x5c80b448']],
            [
              houndsRestricted.address,
              globalParams.address0,
              houndsModifier.address,
              houndsZerocost.address,
              globalParams.address0,
              dependencies.paymentsAddress,
              dependencies.shopsAddress,
              globalParams.address0,
              dependencies.geneticsAddress,
              owner.address
            ],[
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
        const [owner, signer2, signer3] = await ethers.getSigners();
        hounds = await deployContract({
          name: 'Hounds',
          constructor: [[
            "HoundRace",
            "HR",
            globalParams.defaultHound,
            globalParams.breedingConstructor,
            globalParams.staminaConstructor,
            [owner.address, signer2.address, signer3.address],
            [['0xd7016c7f'],['0xfbba82fc'],['0x5c80b448']],
            [
              houndsRestricted.address,
              houndsMinter.address,
              houndsModifier.address,
              houndsZerocost.address,
              globalParams.address0,
              dependencies.paymentsAddress,
              dependencies.shopsAddress,
              globalParams.address0,
              dependencies.geneticsAddress,
              owner.address
            ],[
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

        const transferrableRoot: AlphaERC721 = dependencies.transferrableRoot.attach(hounds.address);

        resolve({
          houndsRestricted: houndsRestricted,
          houndsModifier: houndsModifier,
          houndsMinter: houndsMinter,
          houndsZerocost: houndsZerocost,
          hounds: hounds,
          transferrableRoot: transferrableRoot
        });
      });

    });

  });
}