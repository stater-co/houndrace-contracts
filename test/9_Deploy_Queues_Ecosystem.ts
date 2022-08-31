import { QueuesExternalDependencies } from '../common/dto/test/queuesExternalDependencies.dto';
import { QueuesSystem } from '../common/dto/test/queuesSystem.dto';
import { globalParams } from '../common/params';
import { deployContract } from '../plugins/test/deployContract';
import { Queues } from '../typechain-types/Queues';
import { QueuesMethods } from '../typechain-types/QueuesMethods';
import { QueuesRestricted } from '../typechain-types/QueuesRestricted';
import { QueuesZerocost } from '../typechain-types/QueuesZerocost';


let queuesRestricted: QueuesRestricted;
let queuesMethods: QueuesMethods;
let queuesZerocost: QueuesZerocost;
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
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            [],
            5000000
          ]],
          props: {}
        }) as QueuesRestricted;
      });

      it("Deploy the queues zerocost contract", async function () {
        queuesZerocost = await deployContract({
          name: 'QueuesZerocost',
          constructor: [[
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            [],
            5000000
          ]],
          props: {}
        }) as QueuesZerocost;
      });

      it("Deploy the queues methods contract", async function () {
        queuesMethods = await deployContract({
          name: 'QueuesMethods',
          constructor: [[
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            [],
            5000000
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
            [],
            5000000
          ]],
          props: {}
        }) as Queues;

        resolve({
          queuesRestricted: queuesRestricted,
          queueMethods: queuesMethods,
          queueZerocost: queuesZerocost,
          queues: queues
        });
      });

    });

  });
}