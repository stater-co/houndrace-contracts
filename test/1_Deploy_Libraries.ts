import { DeployedLibraries } from '../common/dto/test/librariesDeployment.dto';
import { deployContract } from '../plugins/test/deployContract';
import { Converters } from '../typechain-types/contracts/utils/Converters';
import { Sortings } from '../typechain-types/contracts/utils/Sortings';


let convertersLibrary: Converters;
let sortingsLibrary: Sortings;


export async function run(): Promise<DeployedLibraries> {
  return new Promise((resolve, ) => {
    describe('Setting up the used libraries', () => {
      it('Deploy the Converters', async function () {
        convertersLibrary = await deployContract({
          name: 'Converters',
          constructor: [],
          props: {}
        }) as Converters;
      });
      it('Deploy the Sortings', async function () {
        sortingsLibrary = await deployContract({
          name: 'Sortings',
          constructor: [],
          props: {}
        }) as Sortings;
        resolve({
          converters: convertersLibrary,
          sortings: sortingsLibrary
        });
      });
    });
  });
}