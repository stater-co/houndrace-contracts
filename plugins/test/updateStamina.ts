import { expect } from "chai";
import { UpdateHoundStaminaParams } from "../../common/dto/test/updateHoundStaminaParams";
import { Hound } from '../../typechain-types/Hounds';

export async function updateStamina(
  params: UpdateHoundStaminaParams
) {
  await params.contract.updateHoundStamina(params.houndId);
}

export async function safeUpdateStamina(
  params: UpdateHoundStaminaParams
) {
  const before: Hound.StructStructOutput = await params.contract.hound(params.houndId);
  await updateStamina(params);
  const after: string | number = await params.contract.id();
  expect(JSON.stringify(before) !== JSON.stringify(after));
}