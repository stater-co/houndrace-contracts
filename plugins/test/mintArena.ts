import { MintArenaParams } from '../../common/dto/test/mintArenaParams.dto';
import { expecting } from '../expecting';
import { BigNumber } from 'ethers';

export async function mintArena(
  params: MintArenaParams
) {
  await params.contract.connect(params.signer).createArena(params.arena);
}

export async function safeMintArena(
  params: MintArenaParams
): Promise<string | number> {
  const before: BigNumber = await params.contract.id();
  await mintArena(params);
  const after: BigNumber = await params.contract.id();
  expecting(before !== after && Number(before) === Number(after) - 1, 'Mint arena method bugged');
  return Number(before);
}