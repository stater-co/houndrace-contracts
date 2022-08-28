import { JoinQueueParams } from "../../common/dto/test/joinQueueParams.dto";
import { globalParams } from "../../common/params";
import { Arena } from "../../typechain-types/Arenas";
import { Hound } from "../../typechain-types/Hounds";
import { Queue } from "../../typechain-types/Queues";
import { expecting } from "../expecting";
import { BigNumber } from 'ethers';


export async function joinQueue(
  params: JoinQueueParams
) {
  let queue: Queue.StructStruct = await params.contract.queue(params.queueId);
  let arena: Arena.StructStruct = await params.arenasContract.arena(queue.arena);
  let enqueueCost: BigNumber = await params.contract.enqueueCost(params.queueId);

  await params.contract.connect(params.sender).enqueue(params.queueId,params.houndId,{
    value: arena.currency === globalParams.address0 ? enqueueCost : 0
  });
}

export async function safeJoinQueue(
  params: JoinQueueParams
): Promise<void> {
  const before: Hound.StructStructOutput = await params.houndsContract.hound(params.houndId);
  const queue: any = await params.contract.queues(params.queueId);
  const arena: Arena.StructStruct = await params.arenasContract.arenas(queue.arena);
  const senderAddress = await params.sender.getAddress();
  const enqueueCost: BigNumber = await params.contract.enqueueCost(params.queueId);

  if ( arena.currency !== globalParams.address0 ) {
    await params.erc20.mint(senderAddress, enqueueCost);
    await params.erc20.approve(params.paymentsContract.address, enqueueCost);
  }

  await joinQueue(params);

  const after: Hound.StructStructOutput = await params.houndsContract.hound(params.houndId);
  expecting(Number(before.profile.queueId) !== Number(after.profile.queueId), "Join Queue method bugged");
}