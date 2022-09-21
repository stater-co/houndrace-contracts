import { UpdateHoundStaminaParams } from "../../common/dto/test/updateHoundStaminaParams";
import { Hound } from '../../typechain-types/Hounds';
import { expecting } from "../expecting";

export async function updateStamina(
  params: UpdateHoundStaminaParams
) {
  await params.contract.updateHoundStamina(params.houndId, 3);
}

export async function safeUpdateStamina(
  params: UpdateHoundStaminaParams
) {
  const id = await params.contract.id();
  expecting(Number(id) > params.houndId, "Hound doesn't exist");
  const before: Hound.StructStructOutput = await params.contract.hound(params.houndId);
  await updateStamina(params);
  const after: Hound.StructStructOutput = await params.contract.hound(params.houndId);
  expecting(JSON.stringify(before) !== JSON.stringify(after), "Update stamina method bugged");
}