import { ShopSystemController } from '../common/dto/test/shopSystemController.dto';
import { expecting } from '../plugins/expecting';
const { ethers } = require('hardhat');

export async function set(
  dependencies: ShopSystemController
): Promise<void> {
  describe('Setting up the Shop Contracts Controller', async function () {

    it("Setup shop restricted contract controller", async function () {
      const before = await dependencies.shopRestricted.control();
      const [sig] = await ethers.getSigners();
      await dependencies.shopRestricted.setGlobalParameters({
        ...dependencies.constructor,
        targets: [['0xad6a8745'],['0x7c5ff21f','0xd4b1d756']],
        operators: [dependencies.houndsAddress, sig.address]
      });
      const after = await dependencies.shopRestricted.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Shop Restricted global params setter bugged");
    });

    it("Setup shop methods contract controller", async function () {
      const before = await dependencies.shopMethods.control();
      const [sig] = await ethers.getSigners();
      await dependencies.shopMethods.setGlobalParameters({
        ...dependencies.constructor,
        targets: [['0xad6a8745'],['0x7c5ff21f','0xd4b1d756']],
        operators: [dependencies.houndsAddress, sig.address]
      });
      const after = await dependencies.shopMethods.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Shop Methods global params setter bugged");
    });

    it("Setup shop zerocost contract controller", async function () {
      const before = await dependencies.shopZerocost.control();
      const [sig] = await ethers.getSigners();
      await dependencies.shopZerocost.setGlobalParameters({
        ...dependencies.constructor,
        targets: [['0xad6a8745'],['0x7c5ff21f','0xd4b1d756']],
        operators: [dependencies.houndsAddress, sig.address]
      });
      const after = await dependencies.shopZerocost.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Shop Restricted global params setter bugged");
    });

    it("Setup shop contract controller", async function () {
      const before = await dependencies.shop.control();
      const [sig] = await ethers.getSigners();
      await dependencies.shop.setGlobalParameters({
        ...dependencies.constructor,
        targets: [['0xad6a8745'],['0x7c5ff21f','0xd4b1d756']],
        operators: [dependencies.houndsAddress, sig.address]
      });
      const after = await dependencies.shop.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Shop global params setter bugged");
    });

  });
}