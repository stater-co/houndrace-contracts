import { ArenasSystemController } from '../common/dto/test/arenasSystemController.dto';


export async function set(
  dependencies: ArenasSystemController
): Promise<void> {
  describe('Setting up the Arena Contracts Controller', async function () {

    it("Setup arena restricted contract controller", async function () {
      
      await dependencies.arenasRestricted.setGlobalParameters(dependencies.constructor);

    });

    it("Setup arena methods contract controller", async function () {
      
      await dependencies.arenasMethods.setGlobalParameters(dependencies.constructor);

    });

    it("Setup arena contract controller", async function () {
      
      await dependencies.arenas.setGlobalParameters(dependencies.constructor);

    });

  });
}