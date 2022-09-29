import { ArenasSystemController } from '../common/dto/test/arenasSystemController.dto';
import { expecting } from '../plugins/expecting';
const { ethers } = require('hardhat');


export async function set(
  dependencies: ArenasSystemController
): Promise<void> {
  describe('Setting up the Arena Contracts Controller', async function () {

    it("Setup arena restricted contract controller", async function () {
      const [ , , sig3 ] = await ethers.getSigners();
      const before = await dependencies.arenasRestricted.control();
      await dependencies.arenasRestricted.connect(sig3).setGlobalParameters({
        ...dependencies.constructor,
        alphadune: String(process.env.ETH_ACCOUNT_PUBLIC_KEY)
      });
      const after = await dependencies.arenasRestricted.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Arenas Restricted global params setter bugged");
    });

    it("Setup arena methods contract controller", async function () {
      const [ , , sig3 ] = await ethers.getSigners();
      const before = await dependencies.arenasMethods.control();
      await dependencies.arenasMethods.connect(sig3).setGlobalParameters({
        ...dependencies.constructor,
        alphadune: String(process.env.ETH_ACCOUNT_PUBLIC_KEY)
      });
      const after = await dependencies.arenasMethods.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Arenas Methods global params setter bugged");
    });

    it("Setup arena contract controller", async function () {
      const [ , , sig3 ] = await ethers.getSigners();
      await dependencies.arenas.connect(sig3).setGlobalParameters({
        ...dependencies.constructor,
        alphadune: String(process.env.ETH_ACCOUNT_PUBLIC_KEY)
      });
    });

  });
}