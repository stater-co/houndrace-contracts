import { JoinQueueParams } from "../../common/dto/test/joinQueueParams.dto";
import { Hound } from "../../typechain-types/Hounds";
import { expecting } from "../expecting";


export async function joinQueue(
  params: JoinQueueParams
) {
  await params.contract.connect(params.sender).enqueue(params.queueId,params.houndId,{
    value: await (await params.contract.queue(params.queueId)).entryFee
  });
}

export async function safeJoinQueue(
  params: JoinQueueParams
): Promise<void> {
  const before: Hound.StructStructOutput = await params.houndsContract.hound(params.houndId);
  await joinQueue(params);
  const after: Hound.StructStructOutput = await params.houndsContract.hound(params.houndId);
  expecting(Number(before.profile.queueId) !== Number(after.profile.queueId), "Join Queue method bugged");
}