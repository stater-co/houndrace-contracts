import { MintQueueParams } from "../../common/dto/test/mintQueueParams.dto";
import { expecting } from "../expecting";

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
  expecting(before !== after && Number(before) === Number(after) - 1, "Mint queue method bugged");
  return before;
}