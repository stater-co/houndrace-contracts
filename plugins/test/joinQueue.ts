import { expect } from "chai";
import { JoinQueueParams } from "../../common/dto/test/joinQueueParams.dto";
import { Queue } from "../../typechain-types/contracts/generator/Index.sol/Generator";


export async function joinQueue(
  params: JoinQueueParams
) {
  await params.contract.enqueue(params.queueId,params.houndId,{
    value: params.entryFee
  });
}

export async function safeJoinQueue(
  params: JoinQueueParams
): Promise<void> {
  const before: string | number = await params.houndsContract.hound(params.houndId);
  //await joinQueue(params);
  //const after: string | number = await params.houndsContract.hound(params.houndId);
  //expect(Number(before) === Number(after) - 1);
}