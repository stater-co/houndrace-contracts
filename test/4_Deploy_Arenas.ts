import { ethers } from 'ethers';
import { ArenasExternalDependencies } from '../common/dto/test/arenasExternalDependencies.dto';
import { ArenasSystem } from '../common/dto/test/arenasSystem.dto';
import { params } from '../common/params';
import { deployContract } from '../plugins/deployContract';


let arenasRestricted: ethers.Contract;
let arenasMethods: ethers.Contract;
let arenas: ethers.Contract;


export async function run(
  dependencies: ArenasExternalDependencies
): Promise<ArenasSystem> {
  return new Promise((resolve, ) => {
    describe('Setting up the Randomness System', function () {
      
      it("Deploy the arenas contracts", async function () {
        arenasRestricted = await deployContract({
          name: 'ArenasRestricted',
          constructor: [
            "HoundRace Arenas", 
            "HRA", 
            params.address0, 
            params.address0, 
            dependencies.paymentsAddress, 
            dependencies.alphaduneAccountAddress, 
            dependencies.allowedCallers
          ],
          props: {}
        });
      });

      it("Deploy the arenas contracts", async function () {
        arenasMethods = await deployContract({
          name: 'ArenasMethods',
          constructor: [
            "HoundRace Arenas", 
            "HRA", 
            params.address0, 
            params.address0, 
            dependencies.paymentsAddress, 
            dependencies.alphaduneAccountAddress, 
            dependencies.allowedCallers
          ],
          props: {}
        });
      });

      it("Deploy the arenas contracts", async function () {
        arenas = await deployContract({
          name: 'Arenas',
          constructor: [
            "HoundRace Arenas", 
            "HRA", 
            arenasRestricted.address, 
            arenasMethods.address, 
            dependencies.paymentsAddress, 
            dependencies.alphaduneAccountAddress, 
            dependencies.allowedCallers
          ],
          props: {}
        });

        resolve({
          arenasRestricted: arenasRestricted,
          arenasMethods: arenasMethods,
          arenas: arenas
        });

      });

    });

  });
}