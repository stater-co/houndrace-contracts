import { GeneratorSystemController } from '../common/dto/test/generatorSystemController.dto';


export async function set(
  dependencies: GeneratorSystemController
): Promise<void> {
  describe('Setting up the Queues Contracts Controller', async function () {

    it("Setup queues restricted contract controller", async function () {
      await dependencies.queuesRestricted.setGlobalParameters([
        dependencies.arenasAddress,
        dependencies.houndsAddress,
        dependencies.queuesMethods.address,
        dependencies.paymentsAddress,
        dependencies.queuesRestricted.address,
        dependencies.racesAddress,
        dependencies.allowed
      ]);
    });

    it("Setup queues methods contract controller", async function () {
      await dependencies.queuesMethods.setGlobalParameters([
        dependencies.arenasAddress,
        dependencies.houndsAddress,
        dependencies.queuesMethods.address,
        dependencies.paymentsAddress,
        dependencies.queuesRestricted.address,
        dependencies.racesAddress,
        dependencies.allowed
      ]);
    });

  });
}