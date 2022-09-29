import { EditArenaParams } from "../../common/dto/test/editArenaParams.dto";
import { Arena } from "../../typechain-types/Arenas";
import { expecting } from "../expecting";
const { ethers } = require('hardhat');


export async function editArena(
  params: EditArenaParams
) {
  const [ , sig2 ] = await ethers.getSigners();
  await params.contract.connect(sig2).editArena(params.arenaId,{
    ...params.arena,
    name: params.arena.name + ", upated on " + new Date()
  });
}

export async function safeEditArena(
  params: EditArenaParams
): Promise<void> {
  const before: Arena.StructStructOutput = await params.contract.arena(params.arenaId);
  await editArena(params);
  const after: Arena.StructStructOutput = await params.contract.arena(params.arenaId);
  expecting(JSON.stringify(before) !== JSON.stringify(after), "Edit arena method bugged");
}