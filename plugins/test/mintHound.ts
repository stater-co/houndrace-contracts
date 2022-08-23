import { MintHoundParams } from "../../common/dto/test/mintHoundsParams.dto";
import { expecting } from "../expecting";

export async function mintHound(
  params: MintHoundParams
) {
  await params.contract.initializeHound(params.position, params.owner, params.hound);
}

export async function safeMintHound(
  params: MintHoundParams
): Promise<string | number> {
  const before: string | number = await params.contract.id();
  await mintHound(params);
  const after: string | number = await params.contract.id();
  expecting(before !== after && Number(before) === Number(after) - 1, "Mint hound method bugged");
  return before;
}