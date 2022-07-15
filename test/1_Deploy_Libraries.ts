import { ethers } from 'ethers';
import { DeployedLibraries } from '../common/dto/test/librariesDeployment.dto';
import { deployContract } from '../plugins/deployContract';

let convertersLibrary: ethers.Contract;
let sortingsLibrary: ethers.Contract;


export async function run(): Promise<DeployedLibraries> {
  return new Promise((resolve, reject) => {
    describe('Setting up the used libraries', () => {
      it('Deploy the Converters', async function () {
        convertersLibrary = await deployContract({
          name: 'Converters',
          constructor: [],
          props: {}
        });
      });
      it('Deploy the Sortings', async function () {
        sortingsLibrary = await deployContract({
          name: 'Sortings',
          constructor: [],
          props: {}
        });
        resolve({
          converters: convertersLibrary,
          sortings: sortingsLibrary
        });
      });
    });
  });
}