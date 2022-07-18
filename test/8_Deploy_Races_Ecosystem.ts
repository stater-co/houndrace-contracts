import { Contract } from 'ethers';
import { RacesExternalDependencies } from '../common/dto/test/racesExternalDependencies.dto';
import { RacesSystem } from '../common/dto/test/racesSystem.dto';
import { params } from '../common/params';
import { deployContract } from '../plugins/deployContract';
const { ethers } = require("hardhat");


let racesRestricted: Contract;
let racesMethods: Contract;
let races: Contract;


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
        });
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
        });
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
        });
      });

    });

  });
}