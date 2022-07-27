import { HoundsSystemController } from '../common/dto/test/houndsSystemController.dto';


export async function set(
  dependencies: HoundsSystemController
): Promise<void> {
  describe('Setting up the Hounds Contracts Controller', async function () {

    it("Setup hounds minter controller", async function () {
    
      await dependencies.houndsMinter.setGlobalParameters(dependencies.constructor);
    
    });

    it("Setup hounds modifier controller", async function () {
    
      await dependencies.houndsModifier.setGlobalParameters(dependencies.constructor);

    });

    it("Setup hounds restricted controller", async function () {
    
      await dependencies.houndsRestricted.setGlobalParameters(dependencies.constructor);

    });

    it("Setup hounds controller", async function () {
    
      await dependencies.hounds.setGlobalParameters(dependencies.constructor);

    });

  });
}