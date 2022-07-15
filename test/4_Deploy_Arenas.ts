import { Contract } from 'ethers';
import { ArenasExternalDependencies } from '../common/dto/test/arenasExternalDependencies.dto';
import { ArenasSystem } from '../common/dto/test/arenasSystem.dto';
import { params } from '../common/params';
import { deployContract } from '../plugins/deployContract';
const { ethers } = require("hardhat");

let arenasRestricted: Contract;
let arenasMethods: Contract;
let arenas: Contract;


export async function run(
  dependencies: ArenasExternalDependencies
): Promise<ArenasSystem> {
  return new Promise((resolve, ) => {
    describe('Setting up the Arenas System', async function () {

      it("Deploy the arenas contracts", async function () {
        const [deployer] = await ethers.getSigners();
        arenasRestricted = await deployContract({
          name: 'ArenasRestricted',
          constructor: [[
            "HoundRace Arenas", 
            "HRA", 
            params.address0, 
            params.address0, 
            dependencies.paymentsAddress, 
            deployer.address, 
            dependencies.allowedCallers
          ]],
          props: {}
        });
      });

      it("Deploy the arenas contracts", async function () {
        const [deployer] = await ethers.getSigners();
        arenasMethods = await deployContract({
          name: 'ArenasMethods',
          constructor: [[
            "HoundRace Arenas", 
            "HRA", 
            params.address0, 
            params.address0, 
            dependencies.paymentsAddress, 
            deployer.address, 
            dependencies.allowedCallers
          ]],
          props: {}
        });
      });

      it("Deploy the arenas contracts", async function () {
        const [deployer] = await ethers.getSigners();
        arenas = await deployContract({
          name: 'Arenas',
          constructor: [[
            "HoundRace Arenas", 
            "HRA", 
            arenasRestricted.address, 
            arenasMethods.address, 
            dependencies.paymentsAddress, 
            deployer.address, 
            dependencies.allowedCallers
          ]],
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