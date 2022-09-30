import { GeneratorExternalDependencies } from '../common/dto/test/generatorExternalDependencies.dto';
import { GeneratorSystem } from '../common/dto/test/generatorSystem.dto';
import { globalParams } from '../common/params';
import { deployContract } from '../plugins/test/deployContract';
import { Generator } from '../typechain-types/Generator';
import { GeneratorMethods } from '../typechain-types/GeneratorMethods';
import { GeneratorZerocost } from '../typechain-types/GeneratorZerocost';


let generatorMethods: GeneratorMethods;
let generatorZerocost: GeneratorZerocost;
let generator: Generator;


export async function run(
  dependencies: GeneratorExternalDependencies
): Promise<GeneratorSystem> {
  return new Promise((resolve, ) => {
    describe('Setting up the Generator', async function () {

      it("Deploy the generator methods contract", async function () {
        generatorMethods = await deployContract({
          name: 'GeneratorMethods',
          constructor: [[
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            dependencies.firewallAddress
          ]],
          props: {}
        }) as GeneratorMethods;
      });

      it("Deploy the generator zerocost contract", async function () {
        generatorZerocost = await deployContract({
          name: 'GeneratorZerocost',
          constructor: [[
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            dependencies.firewallAddress
          ]],
          props: {
            libraries: {
              Sortings: dependencies.sortingsLibraryAddress
            }
          }
        }) as GeneratorZerocost;
      });

      it("Deploy the generator contract", async function () {
        generator = await deployContract({
          name: 'Generator',
          constructor: [[
            dependencies.randomnessAddress,
            dependencies.arenasAddress,
            dependencies.houndsAddress,
            dependencies.racesAddress,
            generatorMethods.address,
            dependencies.paymentsAddress,
            generatorZerocost.address,
            dependencies.incubatorAddress,
            dependencies.firewallAddress
          ]],
          props: {}
        }) as Generator;

        resolve({
          generatorZerocost: generatorZerocost,
          generatorMethods: generatorMethods,
          generator: generator
        });
      });

    });

  });
}