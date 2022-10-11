import { RacesExternalDependencies } from '../common/dto/test/racesExternalDependencies.dto';
import { RacesSystem } from '../common/dto/test/racesSystem.dto';
import { globalParams } from '../common/params';
import { deployContract } from '../plugins/test/deployContract';
import { Races } from '../typechain-types/Races';
import { RacesMethods } from '../typechain-types/RacesMethods';
import { RacesRestricted } from '../typechain-types/RacesRestricted';
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
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
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
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
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
            dependencies.arenasAddress,
            dependencies.houndsAddress,
            racesMethods.address,
            dependencies.paymentsAddress,
            racesRestricted.address,
            otherOwner.address,
            globalParams.address0,
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