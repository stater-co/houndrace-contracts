import { GeneticsExternalDependencies } from '../common/dto/test/geneticsExternalDependencies.dto';
import { GeneticsSystem } from '../common/dto/test/geneticsSystem.dto';
import { globalParams } from '../common/params';
import { deployContract } from '../plugins/test/deployContract';
import { Genetics } from '../typechain-types/Genetics';


let genetics: Genetics;


export async function run(
  dependencies: GeneticsExternalDependencies
): Promise<GeneticsSystem> {
  return new Promise((resolve, ) => {
    describe('Setting up the Genetics System', async function () {

      it("Deploy the genetics contracts", async function () {
        genetics = await deployContract({
          name: 'Genetics',
          constructor: [[
            60,
            40,
            [2,6,10,14,18,22,26,30,34,38,48,58,68],
            [0,2,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
          ]],
          props: {}
        }) as Genetics;

        resolve({
          genetics: genetics
        });

      });

    });

  });
}