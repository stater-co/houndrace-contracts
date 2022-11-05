import { HoundsSystemController } from '../common/dto/test/houndsSystemController.dto';
import { expecting } from '../plugins/expecting';
const { ethers } = require("hardhat");


export async function set(
  dependencies: HoundsSystemController
): Promise<void> {
  describe('Setting up the Hounds Contracts Controller', async function () {

    it("Setup hounds minter controller", async function () {
      const before = await dependencies.houndsMinter.control();
      const [owner, signer2, signer3] = await ethers.getSigners();
      await dependencies.houndsMinter.setGlobalParameters({
        ...dependencies.constructor,
        operators: [owner.address, signer2.address, signer3.address, dependencies.queuesAddress, dependencies.racesAddress],
        targets: [['0xd7016c7f'],['0xfbba82fc'],['0x5c80b448'], ['0x894f39fc'],['0x894f39fc','0xfbba82fc']]
      });
      const after = await dependencies.houndsMinter.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Hounds minter global params setter bugged");
    });

    it("Setup hounds modifier controller", async function () {
      const before = await dependencies.houndsModifier.control();
      const [owner, signer2, signer3] = await ethers.getSigners();
      await dependencies.houndsModifier.setGlobalParameters({
        ...dependencies.constructor,
        operators: [owner.address, signer2.address, signer3.address, dependencies.queuesAddress, dependencies.racesAddress],
        targets: [['0xd7016c7f'],['0xfbba82fc'],['0x5c80b448'], ['0x894f39fc'],['0x894f39fc','0xfbba82fc']]
      });
      const after = await dependencies.houndsModifier.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Hounds modifier global params setter bugged");
    });

    it("Setup hounds zerocost controller", async function () {
      const before = await dependencies.houndsZerocost.control();
      const [owner, signer2, signer3] = await ethers.getSigners();
      await dependencies.houndsZerocost.setGlobalParameters({
        ...dependencies.constructor,
        operators: [owner.address, signer2.address, signer3.address, dependencies.queuesAddress, dependencies.racesAddress],
        targets: [['0xd7016c7f'],['0xfbba82fc'],['0x5c80b448'], ['0x894f39fc'],['0x894f39fc','0xfbba82fc']]
      });
      const after = await dependencies.houndsZerocost.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Hounds zerocost global params setter bugged");
    });

    it("Setup hounds restricted controller", async function () {
      const before = await dependencies.houndsRestricted.control();
      const [owner, signer2, signer3] = await ethers.getSigners();
      await dependencies.houndsRestricted.setGlobalParameters({
        ...dependencies.constructor,
        operators: [owner.address, signer2.address, signer3.address, dependencies.queuesAddress, dependencies.racesAddress],
        targets: [['0xd7016c7f'],['0xfbba82fc'],['0x5c80b448'], ['0x894f39fc'],['0x894f39fc','0xfbba82fc']]
      });
      const after = await dependencies.houndsRestricted.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Hounds restricted global params setter bugged");
    });

    it("Setup hounds controller", async function () {
      const before = await dependencies.hounds.control();
      const [owner, signer2, signer3] = await ethers.getSigners();
      await dependencies.hounds.setGlobalParameters({
        ...dependencies.constructor,
        operators: [owner.address, signer2.address, signer3.address, dependencies.queuesAddress, dependencies.racesAddress],
        targets: [['0xd7016c7f'],['0xfbba82fc'],['0x5c80b448'], ['0x894f39fc'],['0x894f39fc','0xfbba82fc']]
      });
      const after = await dependencies.hounds.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Hounds global params setter bugged");
    });

  });
}