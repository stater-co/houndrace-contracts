import { IncubatorSystemController } from '../common/dto/test/incubatorSystemController.dto';


export async function set(
  dependencies: IncubatorSystemController
): Promise<void> {
  describe('Setting up the Incubator Contracts Controller', async function () {

    it("Setup incubator methods controller", async function () {
    
      await dependencies.incubatorMethods.setGlobalParameters(dependencies.constructor);
  
    });

  });
}