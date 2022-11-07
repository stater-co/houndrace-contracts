import { JoinQueueParams } from "../../common/dto/test/joinQueueParams.dto";
import { globalParams } from "../../common/params";
import { Arena } from "../../typechain-types/Arenas";
import { Hound, MicroPayment } from "../../typechain-types/Hounds";
import { Queue } from "../../typechain-types/Queues";
import { expecting } from "../expecting";
import { BigNumber } from 'ethers';


export async function joinQueue(
  params: JoinQueueParams
) {
  let queue: Queue.StructStruct = await params.contract.queue(params.queueId);
  let arena: Arena.StructStruct = await params.arenasContract.arena(queue.core.arena);
  let enqueueCost: MicroPayment.StructStructOutput[] = await params.contract.getEnqueueCost(params.queueId);

  let totalValueToPay: number = 0;
  for ( let i = 0 , l = enqueueCost.length ; i < l ; ++i ) {
    totalValueToPay += Number(enqueueCost[i].amount);
  }

  await params.contract.connect(params.sender).enqueue(params.queueId,params.houndId,{
    value: arena.platformAndArenaFeeCurrency === globalParams.address0 ? totalValueToPay : 0
  });
}

export async function safeJoinQueue(
  params: JoinQueueParams
): Promise<void> {
  const before: Hound.StructStructOutput = await params.houndsContract.hound(params.houndId);

  const queue: any = await params.contract.queues(params.queueId);

  const arena: Arena.StructStruct = await params.arenasContract.arenas(queue.core.arena);

  const senderAddress = await params.sender.getAddress();

  const enqueueCost: MicroPayment.StructStructOutput[] = await params.contract.getEnqueueCost(params.queueId);

  let totalValueToPay: BigNumber = BigNumber.from(0);
  for ( let i = 0 , l = enqueueCost.length ; i < l ; ++i ) {
    totalValueToPay = totalValueToPay.add(enqueueCost[i].amount);
  }

  if ( arena.platformAndArenaFeeCurrency !== globalParams.address0 ) {
    await params.erc20.mint(senderAddress, totalValueToPay);
    await params.erc20.approve(params.paymentsContract.address, totalValueToPay);
  }

  await joinQueue(params);

  const after: Hound.StructStructOutput = await params.houndsContract.hound(params.houndId);
  expecting(Number(before.profile.runningOn) !== Number(after.profile.runningOn), "Join Queue method bugged");
}