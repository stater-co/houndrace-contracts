import { LootboxesExternalDependencies } from '../common/dto/test/lootboxesExternalDependencies.dto';
import { LootboxesSystem } from '../common/dto/test/lootboxesSystem.dto';
import { deployContract } from '../plugins/test/deployContract';
import { HoundraceMysteryBoxes } from '../typechain-types/HoundraceMysteryBoxes';
const { ethers } = require('hardhat');


let lootboxes: HoundraceMysteryBoxes;


export async function run(
  dependencies: LootboxesExternalDependencies
): Promise<LootboxesSystem> {

  return new Promise((resolve, ) => {

    describe('Setting up the HoundraceMysteryBoxes', async function () {

      it("Deploy the lootboxes contract", async function () {
        let [owner, , , , , , , , , signer, signer2, signer3] = await ethers.getSigners();
        lootboxes = await deployContract({
          name: 'HoundraceMysteryBoxes',
          constructor: [[
            "Houndrace Mystery Boxes",
            [signer.address, signer2.address, signer3.address],
            [['0xc6e64e53'],['0x7c46a44b'],['0xedd0cb87']],
            false
          ]],
          props: {}
        }) as HoundraceMysteryBoxes;

        resolve({
          lootboxes: lootboxes
        });

      });

    });

  });

}