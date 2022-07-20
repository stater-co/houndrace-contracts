import { RacesExternalDependencies } from '../common/dto/test/racesExternalDependencies.dto';
import { RacesSystem } from '../common/dto/test/racesSystem.dto';
import { params } from '../common/params';
import { deployContract } from '../plugins/deployContract';
import { Races } from '../typechain-types/contracts/races/Index.sol/Races';
import { RacesMethods } from '../typechain-types/contracts/races/methods/Index.sol/RacesMethods';
import { RacesRestricted } from '../typechain-types/contracts/races/restricted/Index.sol/RacesRestricted';
const { ethers } = require("hardhat");


let racesRestricted: RacesRestricted;
let racesMethods: RacesMethods;
let races: Races;


export async function run(
  dependencies: RacesExternalDependencies
): Promise<RacesSystem> {
  return new Promise((resolve, ) => {
    describe('Setting up the Races Ecosystem', async function () {

      it("Deploy the races restricted contract", async function () {
        racesRestricted = await deployContract({
          name: 'RacesRestricted',
          constructor: [[
            params.address0,
            params.address0,
            params.address0,
            params.address0,
            params.address0,
            params.address0,
            params.address0,
            params.address0,
            [],
            500000000,
            true
          ]],
          props: {}
        }) as RacesRestricted;
      });

      it("Deploy the races methods contract", async function () {
        racesMethods = await deployContract({
          name: 'RacesMethods',
          constructor: [[
            params.address0,
            params.address0,
            params.address0,
            params.address0,
            params.address0,
            params.address0,
            params.address0,
            params.address0,
            [],
            500000000,
            true
          ]],
          props: {}
        }) as RacesMethods;
      });

      it("Deploy the races contract", async function () {
        const [, otherOwner] = await ethers.getSigners();
        races = await deployContract({
          name: 'Races',
          constructor: [[
            dependencies.randomnessAddress,
            dependencies.arenasAddress,
            dependencies.houndsAddress,
            racesMethods.address,
            params.address0,
            dependencies.paymentsAddress,
            racesRestricted.address,
            otherOwner.address,
            [],
            500000000,
            true
          ]],
          props: {}
        }) as Races;
        
        resolve({
          racesRestricted: racesRestricted,
          racesMethods: racesMethods,
          races: races
        });
      });

    });

  });
}