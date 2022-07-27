import { IncubatorExternalDependencies } from '../common/dto/test/incubatorExternalDependencies.dto';
import { IncubatorSystem } from '../common/dto/test/incubatorSystem.dto';
import { globalParams } from '../common/params';
import { deployContract } from '../plugins/test/deployContract';
import { Incubator } from '../typechain-types/Incubator';
import { IncubatorMethods } from '../typechain-types/IncubatorMethods';


let incubatorMethods: IncubatorMethods;
let incubator: Incubator;


export async function run(
  dependencies: IncubatorExternalDependencies
): Promise<IncubatorSystem> {
  return new Promise((resolve, ) => {
    describe('Setting up the Incubator System', async function () {

      it("Deploy the incubator contracts", async function () {
        incubatorMethods = await deployContract({
          name: 'IncubatorMethods',
          constructor: [[
            globalParams.address0,
            dependencies.randomnessAddress,
            dependencies.geneticsAddress,
            "0x67657452",
            1800,
            2419200,
            '300000000000000000'
          ]],
          props: {}
        }) as IncubatorMethods;

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
        }) as Incubator;

        resolve({
          incubatorMethods: incubatorMethods,
          incubator: incubator
        });

      });

    });

  });
}