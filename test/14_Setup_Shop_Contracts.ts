import { ShopSystemController } from '../common/dto/test/shopSystemController.dto';
import { expecting } from '../plugins/expecting';


export async function set(
  dependencies: ShopSystemController
): Promise<void> {
  describe('Setting up the Shop Contracts Controller', async function () {

    it("Setup shop restricted contract controller", async function () {
      const before = await dependencies.shopRestricted.control();
      await dependencies.shopRestricted.setGlobalParameters({
        ...dependencies.constructor,
        targets: [['0xad6a8745']],
        operators: [...dependencies.constructor.operators, dependencies.houndsAddress]
      });
      const after = await dependencies.shopRestricted.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Shop Restricted global params setter bugged");
    });

    it("Setup shop methods contract controller", async function () {
      const before = await dependencies.shopMethods.control();
      await dependencies.shopMethods.setGlobalParameters({
        ...dependencies.constructor,
        targets: [['0xad6a8745']],
        operators: [...dependencies.constructor.operators, dependencies.houndsAddress]
      });
      const after = await dependencies.shopMethods.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Shop Methods global params setter bugged");
    });

    it("Setup shop contract controller", async function () {
      const before = await dependencies.shop.control();
      await dependencies.shop.setGlobalParameters({
        ...dependencies.constructor,
        targets: [['0xad6a8745']],
        operators: [...dependencies.constructor.operators, dependencies.houndsAddress]
      });
      const after = await dependencies.shop.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Shop global params setter bugged");
    });

  });
}