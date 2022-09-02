import { GeneratorSystemController } from '../common/dto/test/generatorSystemController.dto';
import { expecting } from '../plugins/expecting';


export async function set(
  dependencies: GeneratorSystemController
): Promise<void> {
  describe('Setting up the Generator Contracts Controller', async function () {

    it("Setup generator zerocost controller", async function () {
    
      const before = await dependencies.generatorZerocost.control();
      await dependencies.generatorZerocost.setGlobalParameters(dependencies.constructor);
      const after = await dependencies.generatorZerocost.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Generator zerocost params setter bugged");

    });

    it("Setup generator methods controller", async function () {
    
      const before = await dependencies.generatorMethods.control();
      await dependencies.generatorMethods.setGlobalParameters(dependencies.constructor);
      const after = await dependencies.generatorMethods.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Generator methods params setter bugged");

    });

  });
}