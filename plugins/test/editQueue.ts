import { EditQueueParams } from "../../common/dto/test/editQueueParams.dto";
import { expecting } from "../expecting";


export async function editQueue(
  params: EditQueueParams
) {
  await params.contract.editQueue(params.queueId,params.queue);
}

export async function safeEditQueue(
  params: EditQueueParams
): Promise<void> {
  const before: string | number = await params.contract.queue(params.queueId);
  await editQueue(params);
  const after: string | number = await params.contract.queue(params.queueId);
  expecting(JSON.stringify(before) !== JSON.stringify(after), "Edit queue method bugged");
}