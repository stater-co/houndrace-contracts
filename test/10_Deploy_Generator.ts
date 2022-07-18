import { Contract } from 'ethers';
import { GeneratorExternalDependencies } from '../common/dto/test/generatorExternalDependencies.dto';
import { GeneratorSystem } from '../common/dto/test/generatorSystem.dto';
import { params } from '../common/params';
import { deployContract } from '../plugins/deployContract';


let generatorMethods: Contract;
let generatorZerocost: Contract;
let generator: Contract;


export async function run(
  dependencies: GeneratorExternalDependencies
): Promise<GeneratorSystem> {
  return new Promise((resolve, ) => {
    describe('Setting up the Generator', async function () {

      it("Deploy the generator methods contract", async function () {
        generatorMethods = await deployContract({
          name: 'GeneratorMethods',
          constructor: [[
            params.address0,
            params.address0,
            params.address0,
            params.address0,
            params.address0,
            params.address0,
            params.address0
          ]],
          props: {}
        });
      });

      it("Deploy the generator zerocost contract", async function () {
        generatorZerocost = await deployContract({
          name: 'GeneratorZerocost',
          constructor: [[
            params.address0,
            params.address0,
            params.address0,
            params.address0,
            params.address0,
            params.address0,
            params.address0
          ]],
          props: {
            libraries: {
              Sortings: dependencies.sortingsLibraryAddress
            }
          }
        });
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
            generatorZerocost.address
          ]],
          props: {}
        });

        resolve({
          generatorZerocost: generatorZerocost,
          generatorMethods: generatorMethods,
          generator: generator
        });
      });

    });

  });
}