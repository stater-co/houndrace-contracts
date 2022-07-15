import { Contract } from 'ethers';
import { IncubatorExternalDependencies } from '../common/dto/test/incubatorExternalDependencies.dto';
import { IncubatorSystem } from '../common/dto/test/incubatorSystem.dto';
import { params } from '../common/params';
import { deployContract } from '../plugins/deployContract';


let incubatorMethods: Contract;
let incubator: Contract;


export async function run(
  dependencies: IncubatorExternalDependencies
): Promise<IncubatorSystem> {
  return new Promise((resolve, ) => {
    describe('Setting up the Incubator System', async function () {

      it("Deploy the incubator contracts", async function () {
        incubatorMethods = await deployContract({
          name: 'IncubatorMethods',
          constructor: [[
            params.address0,
            dependencies.randomnessAddress,
            dependencies.geneticsAddress,
            "0x67657452",
            1800,
            2419200,
            '300000000000000000'
          ]],
          props: {}
        });

      });

      it("Deploy the incubator contracts", async function () {
        incubator = await deployContract({
          name: 'Incubator',
          constructor: [[
            incubatorMethods.address,
            dependencies.randomnessAddress,
            dependencies.geneticsAddress,
            "0x67657452",
            1800,
            2419200,
            '300000000000000000'
          ]],
          props: {}
        });

        resolve({
          incubatorMethods: incubatorMethods,
          incubator: incubator
        });

      });

    });

  });
}