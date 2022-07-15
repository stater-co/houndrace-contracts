import { Contract } from 'ethers';
import { GeneticsExternalDependencies } from '../common/dto/test/geneticsExternalDependencies.dto';
import { GeneticsSystem } from '../common/dto/test/geneticsSystem.dto';
import { params } from '../common/params';
import { deployContract } from '../plugins/deployContract';


let genetics: Contract;


export async function run(
  dependencies: GeneticsExternalDependencies
): Promise<GeneticsSystem> {
  return new Promise((resolve, ) => {
    describe('Setting up the Genetics System', async function () {

      it("Deploy the genetics contracts", async function () {
        genetics = await deployContract({
          name: 'Genetics',
          constructor: [[
            dependencies.randomnessAddress,
            dependencies.arenasAddress,
            params.maleBoilerplateGene,
            params.femaleBoilerplateGene,
            60,
            40,
            [2,6,10,14,18,22,26,30,34,38,42,46,50],
            [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
          ]],
          props: {}
        });

        resolve({
          genetics: genetics
        });

      });

    });

  });
}