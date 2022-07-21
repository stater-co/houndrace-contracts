import { expect } from "chai";
import { EditArenaParams } from "../../common/dto/test/editArenaParams.dto";
import { Arena } from "../../typechain-types/contracts/arenas/Index.sol/Arenas";

export async function editArena(
  params: EditArenaParams
) {
  await params.contract.editArena(params.arenaId,params.arena);
}

export async function safeEditArena(
  params: EditArenaParams
): Promise<void> {
  const before: Arena.StructStructOutput = await params.contract.arena(params.arenaId);
  await editArena(params);
  const after: Arena.StructStructOutput = await params.contract.arena(params.arenaId);
  expect(JSON.stringify(before) !== JSON.stringify(after));
}