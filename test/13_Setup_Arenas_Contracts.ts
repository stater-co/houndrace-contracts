import { ArenasSystemController } from '../common/dto/test/arenasSystemController.dto';
const { ethers } = require('hardhat');


export async function set(
  dependencies: ArenasSystemController
): Promise<void> {
  describe('Setting up the Arena Contracts Controller', async function () {

    it("Setup arena restricted contract controller", async function () {
      
      const [sig1] = await ethers.getSigners();

      await dependencies.arenasRestricted.setGlobalParameters({
        ...dependencies.constructor,
        alphadune: sig1.address
      });

    });

    it("Setup arena methods contract controller", async function () {
      
      const [sig1] = await ethers.getSigners();

      await dependencies.arenasMethods.setGlobalParameters({
        ...dependencies.constructor,
        alphadune: sig1.address
      });

    });

    it("Setup arena contract controller", async function () {
      
      const [sig1] = await ethers.getSigners();

      await dependencies.arenas.setGlobalParameters({
        ...dependencies.constructor,
        alphadune: sig1.address
      });

    });

  });
}