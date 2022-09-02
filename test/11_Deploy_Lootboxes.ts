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

        const [sig1] = await ethers.getSigners();

        lootboxes = await deployContract({
          name: 'Lootboxes',
          constructor: [[
            "token_uri",
            dependencies.houndsAddress,
            dependencies.paymentsAddress,
            sig1.address,
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