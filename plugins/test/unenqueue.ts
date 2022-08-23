import { UnenqueueParams } from "../../common/dto/test/unenqueueParams.dto";
import { expecting } from "../expecting";


export async function unenqueue(
  params: UnenqueueParams
) {
  await params.contract.unenqueue(params.queueId,params.houndId);
}

export async function safeUnenqueue(
  params: UnenqueueParams
): Promise<void> {
  const before: string | number = await params.contract.queue(params.queueId);
  await unenqueue(params);
  const after: string | number = await params.contract.queue(params.queueId);
  expecting(JSON.stringify(before) === JSON.stringify(after), "Unenqueue method bugged");
}