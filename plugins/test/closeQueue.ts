import { CloseQueueParams } from "../../common/dto/test/closeQueueParams.dto";
import { expecting } from "../expecting";


export async function closeQueue(
  params: CloseQueueParams
) {
  await params.contract.connect(params.signer).closeQueue(params.queueId);
}

export async function safeCloseQueue(
  params: CloseQueueParams
): Promise<void> {
  const before: string | number = await params.contract.queue(params.queueId);
  await closeQueue(params);
  const after: string | number = await params.contract.queue(params.queueId);
  expecting(JSON.stringify(before) !== JSON.stringify(after), "Close queue method bugged");
}