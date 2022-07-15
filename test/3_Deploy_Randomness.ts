import { ethers } from 'ethers';
import { RandomnessSystem } from '../common/dto/test/randomnessSystem.dto';
import { deployContract } from '../plugins/deployContract';


let randomness: ethers.Contract;


export async function run(): Promise<RandomnessSystem> {
  return new Promise((resolve, ) => {
    describe('Setting up the Randomness System', function () {
      
      it('Deploy the randomness contracts', async function () {
        randomness = await deployContract({
          name: 'Randomness',
          constructor: [],
          props: {}
        });

        resolve({
          randomness: randomness
        });

      });

    });

  });
}