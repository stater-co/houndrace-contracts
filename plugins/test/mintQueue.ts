import { expect } from "chai";
import { MintQueueParams } from "../../common/dto/test/mintQueueParams.dto";

export async function mintQueue(
  params: MintQueueParams
) {
  await params.contract.createQueues([params.queue]);
}

export async function safeMintQueue(
  params: MintQueueParams
): Promise<string | number> {
  const before: string | number = await params.contract.id();
  await mintQueue(params);
  const after: string | number = await params.contract.id();
  expect(before !== after && Number(before) === Number(after) - 1);
  return before;
}