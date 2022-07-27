import { expect } from "chai";
import { MintArenaParams } from "../../common/dto/test/mintArenaParams.dto";

export async function mintArena(
  params: MintArenaParams
) {
  await params.contract.createArena(params.arena);
}

export async function safeMintArena(
  params: MintArenaParams
): Promise<string | number> {
  const before: string | number = await params.contract.id();
  await mintArena(params);
  const after: string | number = await params.contract.id();
  expect(before !== after && Number(before) === Number(after) - 1);
  return before;
}