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
            [],
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            []
          ]],
          props: {}
        }) as QueuesRestricted;
      });

      it("Deploy the queues zerocost contract", async function () {
        queuesZerocost = await deployContract({
          name: 'QueuesZerocost',
          constructor: [[
            [],
            globalParams.address0,
            queuesRestricted.address,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            []
          ]],
          props: {}
        }) as QueuesZerocost;
      });

      it("Deploy the queues methods contract", async function () {
        queuesMethods = await deployContract({
          name: 'QueuesMethods',
          constructor: [[
            [],
            globalParams.address0,
            queuesRestricted.address,
            globalParams.address0,
            queuesZerocost.address,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            globalParams.address0,
            []
          ]],
          props: {}
        }) as QueuesMethods;
      });

      it("Deploy the queues contract", async function () {
        queues = await deployContract({
          name: 'Queues',
          constructor: [[
            [],
            queuesMethods.address,
            queuesRestricted.address,
            globalParams.address0,
            queuesZerocost.address,
            dependencies.arenasAddress,
            dependencies.houndsAddress,
            dependencies.paymentsAddress,
            dependencies.racesAddress,
            String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
            []
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