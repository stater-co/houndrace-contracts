import { expect } from "chai";
import { UpdateHoundStaminaParams } from "../../common/dto/test/updateHoundStaminaParams";
import { Hound } from '../../typechain-types/contracts/hounds/params/Index.sol/Params';

export async function boostHoundBreeding(
  params: UpdateHoundStaminaParams
) {
  await params.contract.boostHoundBreeding(params.houndId, await params.contract.signer.getAddress());
}

export async function safeBoostHoundBreeding(
  params: UpdateHoundStaminaParams
) {
  const before: Hound.StructStructOutput = await params.contract.hound(params.houndId);
  await boostHoundBreeding(params);
  const after: string | number = await params.contract.id();
  expect(JSON.stringify(before) !== JSON.stringify(after));
}