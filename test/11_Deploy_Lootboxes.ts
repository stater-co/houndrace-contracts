import { LootboxesExternalDependencies } from '../common/dto/test/lootboxesExternalDependencies.dto';
import { LootboxesSystem } from '../common/dto/test/lootboxesSystem.dto';
import { deployContract } from '../plugins/test/deployContract';
import { Lootboxes } from '../typechain-types/Lootboxes';
const { ethers } = require('hardhat');


let lootboxes: Lootboxes;


export async function run(
  dependencies: LootboxesExternalDependencies
): Promise<LootboxesSystem> {

  return new Promise((resolve, ) => {

    describe('Setting up the Lootboxes', async function () {

      it("Deploy the lootboxes contract", async function () {
        let [owner, , , , , , , , , signer, signer2, signer3] = await ethers.getSigners();
        lootboxes = await deployContract({
          name: 'Lootboxes',
          constructor: [[
            "HoundRace lootboxes",
            [signer.address, signer2.address, signer3.address],
            dependencies.houndsAddress,
            dependencies.paymentsAddress,
            owner.address,
            [['0xc6e64e53'],['0x7c46a44b'],['0xedd0cb87']],
            false
          ]],
          props: {}
        }) as Lootboxes;

        resolve({
          lootboxes: lootboxes
        });

      });

    });

  });

}