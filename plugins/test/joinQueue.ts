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
  let enqueueCost: MicroPayment.StructStructOutput[] = await params.contract.enqueueCost(params.queueId);

  let totalValueToPay: number = 0;
  for ( let i = 0 , l = enqueueCost.length ; i < l ; ++i ) {
    totalValueToPay += Number(enqueueCost[i].amount);
  }

  await params.contract.connect(params.sender).enqueue(params.queueId,params.houndId,{
    value: arena.currency === globalParams.address0 ? totalValueToPay : 0
  });
}

export async function safeJoinQueue(
  params: JoinQueueParams
): Promise<void> {
  console.log("enqueue x1");
  const before: Hound.StructStructOutput = await params.houndsContract.hound(params.houndId);

  console.log("enqueue x2");
  const queue: any = await params.contract.queues(params.queueId);

  console.log("enqueue x3 ", queue.core.arena);
  const arena: Arena.StructStruct = await params.arenasContract.arenas(queue.core.arena);

  console.log("enqueue x4");
  const senderAddress = await params.sender.getAddress();

  console.log("enqueue x5");
  const enqueueCost: MicroPayment.StructStructOutput[] = await params.contract.enqueueCost(params.queueId);

  console.log("enqueue x6");
  let totalValueToPay: BigNumber = BigNumber.from(0);
  for ( let i = 0 , l = enqueueCost.length ; i < l ; ++i ) {
    totalValueToPay = totalValueToPay.add(enqueueCost[i].amount);
  }

  console.log("enqueue x7");
  if ( arena.currency !== globalParams.address0 ) {
    await params.erc20.mint(senderAddress, totalValueToPay);
    await params.erc20.approve(params.paymentsContract.address, totalValueToPay);
  }

  console.log("joining queue here ...");
  await joinQueue(params);

  const after: Hound.StructStructOutput = await params.houndsContract.hound(params.houndId);
  expecting(Number(before.profile.queueId) !== Number(after.profile.queueId), "Join Queue method bugged");
}