import { EditQueueParams } from "../../common/dto/test/editQueueParams.dto";
import { Queue } from "../../typechain-types/Queues";
import { expecting } from "../expecting";


export async function editQueue(
  params: EditQueueParams
) {
  await params.contract.connect(params.signer).editQueue(params.queueId,params.queue);
}

export async function safeEditQueue(
  params: EditQueueParams
): Promise<void> {
  const before: Queue.StructStructOutput = await params.contract.queue(params.queueId);
  await editQueue(params);
  const after: Queue.StructStructOutput = await params.contract.queue(params.queueId);
  expecting(JSON.stringify(before) !== JSON.stringify(after), "Edit queue method bugged");
}