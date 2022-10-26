import { ArenasExternalDependencies } from '../common/dto/test/arenasExternalDependencies.dto';
import { ArenasSystem } from '../common/dto/test/arenasSystem.dto';
import { globalParams } from '../common/params';
import { deployContract } from '../plugins/test/deployContract';
import { ArenasRestricted } from '../typechain-types/ArenasRestricted';
import { ArenasMethods } from '../typechain-types/ArenasMethods';
import { Arenas } from '../typechain-types/Arenas';
const { ethers } = require('hardhat');

let arenasRestricted: ArenasRestricted;
let arenasMethods: ArenasMethods;
let arenas: Arenas;


export async function run(
  dependencies: ArenasExternalDependencies
): Promise<ArenasSystem> {
  return new Promise((resolve, ) => {
    describe('Setting up the Arenas System', async function () {

      it('Deploy the arenas contracts', async function () {
        const [owner] = await ethers.getSigners();
        arenasRestricted = await deployContract({
          name: 'ArenasRestricted',
          constructor: [[
            'HoundRace Arenas', 
            'HRA', 
            [owner.address],
            globalParams.address0, 
            globalParams.address0, 
            dependencies.paymentsAddress, 
            owner.address, 
            [['0xe195c287']],
            60
          ]],
          props: {}
        }) as ArenasRestricted;
      });

      it('Deploy the arenas contracts', async function () {
        const [owner] = await ethers.getSigners();
        arenasMethods = await deployContract({
          name: 'ArenasMethods',
          constructor: [[
            'HoundRace Arenas', 
            'HRA', 
            [owner.address],
            globalParams.address0, 
            globalParams.address0, 
            dependencies.paymentsAddress, 
            owner.address, 
            [['0xe195c287']],
            60
          ]],
          props: {}
        }) as ArenasMethods;
      });

      it('Deploy the arenas contracts', async function () {
        const [owner] = await ethers.getSigners();
        arenas = await deployContract({
          name: 'Arenas',
          constructor: [[
            'HoundRace Arenas', 
            'HRA', 
            [owner.address], 
            arenasRestricted.address, 
            arenasMethods.address, 
            dependencies.paymentsAddress, 
            owner.address, 
            [['0xe195c287']],
            60
          ]],
          props: {}
        }) as Arenas;

        resolve({
          arenasRestricted: arenasRestricted,
          arenasMethods: arenasMethods,
          arenas: arenas
        });

      });

    });

  });
}