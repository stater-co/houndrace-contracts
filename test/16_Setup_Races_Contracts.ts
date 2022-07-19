import { RacesSystemController } from '../common/dto/test/racesSystemController.dto';


export async function set(
  dependencies: RacesSystemController
): Promise<void> {
  describe('Setting up the Races Contracts Controller', async function () {

    it("Setup races restricted controller", async function () {
    
      await dependencies.racesRestricted.setGlobalParameters(dependencies.constructor);
    
    });

    it("Setup races methods controller", async function () {
    
      await dependencies.racesMethods.setGlobalParameters(dependencies.constructor);

    });

    it("Setup races controller", async function () {
    
      await dependencies.races.setGlobalParameters(dependencies.constructor);

    });

  });
}