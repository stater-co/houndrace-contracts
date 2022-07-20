import { expect } from "chai";
import { MintHoundParams } from "../common/dto/test/mintHoundsParams.dto";

export async function mintHound(
  params: MintHoundParams
) {
  await params.contract.initializeHound(0, params.hound);
}

export async function safeMintHound(
  params: MintHoundParams
): Promise<string | number> {
  const before: string | number = await params.contract.id();
  await mintHound(params);
  const after: string | number = await params.contract.id();
  expect(before !== after && Number(before) === Number(after) - 1);
  return before;
}