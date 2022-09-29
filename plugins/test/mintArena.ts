import { MintArenaParams } from "../../common/dto/test/mintArenaParams.dto";
import { expecting } from "../expecting";
const { ethers } = require('hardhat');


export async function mintArena(
  params: MintArenaParams
) {
  const [ sig1 ] = await ethers.getSigners();
  await params.contract.connect(sig1).createArena(params.arena);
}

export async function safeMintArena(
  params: MintArenaParams
): Promise<string | number> {
  const before: string | number = await params.contract.id();
  await mintArena(params);
  const after: string | number = await params.contract.id();
  expecting(before !== after && Number(before) === Number(after) - 1, "Mint arena method bugged");
  return before;
}