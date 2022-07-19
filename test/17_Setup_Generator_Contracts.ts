import { GeneratorSystemController } from '../common/dto/test/generatorSystemController.dto';


export async function set(
  dependencies: GeneratorSystemController
): Promise<void> {
  describe('Setting up the Generator Contracts Controller', async function () {

    it("Setup generator zerocost controller", async function () {
    
      await dependencies.generatorZerocost.setGlobalParameters(dependencies.constructor);
    
    });

    it("Setup generator methods controller", async function () {
    
      await dependencies.generatorMethods.setGlobalParameters(dependencies.constructor);

    });

  });
}