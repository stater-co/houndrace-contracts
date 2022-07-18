import { Contract } from 'ethers';
import { QueuesExternalDependencies } from '../common/dto/test/queuesExternalDependencies.dto';
import { QueuesSystem } from '../common/dto/test/queuesSystem.dto';
import { params } from '../common/params';
import { deployContract } from '../plugins/deployContract';


let queuesRestricted: Contract;
let queuesMethods: Contract;
let queues: Contract;


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
        });
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
        });
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
        });

        resolve({
          queuesRestricted: queuesRestricted,
          queueMethods: queuesMethods,
          queues: queues
        });
      });

    });

  });
}