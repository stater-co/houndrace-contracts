import { QueuesExternalDependencies } from '../common/dto/test/queuesExternalDependencies.dto';
import { QueuesSystem } from '../common/dto/test/queuesSystem.dto';
import { params } from '../common/params';
import { deployContract } from '../plugins/test/deployContract';
import { Queues } from '../typechain-types/contracts/queues/Index.sol/Queues';
import { QueuesMethods } from '../typechain-types/contracts/queues/methods/Index.sol/QueuesMethods';
import { QueuesRestricted } from '../typechain-types/contracts/queues/restricted/Index.sol/QueuesRestricted';


let queuesRestricted: QueuesRestricted;
let queuesMethods: QueuesMethods;
let queues: Queues;


export async function run(
  dependencies: QueuesExternalDependencies
): Promise<QueuesSystem> {
  return new Promise((resolve, ) => {
    describe('Setting up the Queues Ecosystem', async function () {

      it("Deploy the queues restricted contract", async function () {
        queuesRestricted = await deployContract({
          name: 'QueuesRestricted',
          constructor: [[
            params.address0,
            params.address0,
            params.address0,
            params.address0,
            params.address0,
            params.address0,
            []
          ]],
          props: {}
        }) as QueuesRestricted;
      });

      it("Deploy the queues methods contract", async function () {
        queuesMethods = await deployContract({
          name: 'QueuesMethods',
          constructor: [[
            params.address0,
            params.address0,
            params.address0,
            params.address0,
            params.address0,
            params.address0,
            []
          ]],
          props: {}
        }) as QueuesMethods;
      });

      it("Deploy the queues contract", async function () {
        queues = await deployContract({
          name: 'Queues',
          constructor: [[
            dependencies.arenasAddress,
            dependencies.houndsAddress,
            queuesMethods.address,
            dependencies.paymentsAddress,
            queuesRestricted.address,
            dependencies.racesAddress,
            []
          ]],
          props: {}
        }) as Queues;

        resolve({
          queuesRestricted: queuesRestricted,
          queueMethods: queuesMethods,
          queues: queues
        });
      });

    });

  });
}