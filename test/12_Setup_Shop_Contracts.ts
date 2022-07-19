import { ShopSystemController } from '../common/dto/test/shopSystemController.dto';


export async function set(
  dependencies: ShopSystemController
): Promise<void> {
  describe('Setting up the Shop Contracts Controller', async function () {

    it("Setup shop restricted contract controller", async function () {

      await dependencies.shopRestricted.connect(dependencies.signer).setGlobalParameters(dependencies.constructor);
  
    });

    it("Setup shop methods contract controller", async function () {

      await dependencies.shopMethods.connect(dependencies.signer).setGlobalParameters(dependencies.constructor);
  
    });

  });
}