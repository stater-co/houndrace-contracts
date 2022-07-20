import { RandomnessSystem } from '../common/dto/test/randomnessSystem.dto';
import { deployContract } from '../plugins/test/deployContract';
import { Randomness } from '../typechain-types/contracts/randomness/Index.sol/Randomness';


let randomness: Randomness;


export async function run(): Promise<RandomnessSystem> {
  return new Promise((resolve, ) => {
    describe('Setting up the Randomness System', function () {
      
      it('Deploy the randomness contracts', async function () {
        randomness = await deployContract({
          name: 'Randomness',
          constructor: [],
          props: {}
        }) as Randomness;

        resolve({
          randomness: randomness
        });

      });

    });

  });
}