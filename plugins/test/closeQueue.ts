import { expect } from "chai";
import { CloseQueueParams } from "../../common/dto/test/closeQueueParams.dto";


export async function closeQueue(
  params: CloseQueueParams
) {
  await params.contract.closeQueue(params.queueId);
}

export async function safeCloseQueue(
  params: CloseQueueParams
): Promise<void> {
  const before: string | number = await params.contract.queue(params.queueId);
  await closeQueue(params);
  const after: string | number = await params.contract.queue(params.queueId);
  expect(JSON.stringify(before) !== JSON.stringify(after));
}