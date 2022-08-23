import { IncubatorSystemController } from '../common/dto/test/incubatorSystemController.dto';
import { expecting } from '../plugins/expecting';


export async function set(
  dependencies: IncubatorSystemController
): Promise<void> {
  describe('Setting up the Incubator Contracts Controller', async function () {

    it("Setup incubator methods controller", async function () {
      const before = await dependencies.incubatorMethods.control();
      await dependencies.incubatorMethods.setGlobalParameters(dependencies.constructor);
      const after = await dependencies.incubatorMethods.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Incubator Methods global params setter bugged");
    });

    it("Setup incubator controller", async function () {
      const before = await dependencies.incubator.control();
      await dependencies.incubator.setGlobalParameters(dependencies.constructor);
      const after = await dependencies.incubator.control();
      expecting(JSON.stringify(before) !== JSON.stringify(after), "Incubator global params setter bugged");
    });

  });
}