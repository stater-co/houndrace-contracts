import { ethers } from 'ethers';
import { DeployedLibraries } from '../common/dto/test/librariesDeployment.dto';
import { SignerDependency } from '../common/dto/test/raw/signerDependency.dto';
import { deployContract } from '../plugins/deployContract';
import { Converters__factory } from '../typechain-types/factories/contracts/utils/Converters__factory';
import { Sortings__factory } from '../typechain-types/factories/contracts/utils/Sortings__factory';


let convertersLibrary: ethers.Contract;
let sortingsLibrary: ethers.Contract;


export async function run(
  dependencies: SignerDependency
): Promise<DeployedLibraries> {
  return new Promise((resolve, ) => {
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
          converters: Converters__factory.connect(convertersLibrary.address,dependencies.signer),
          sortings: Sortings__factory.connect(sortingsLibrary.address,dependencies.signer)
        });
      });
    });
  });
}