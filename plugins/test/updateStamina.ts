import { UpdateHoundStaminaParams } from "../../common/dto/test/updateHoundStaminaParams";
import { HoundStamina } from "../../typechain-types/Gamification";
import { Hound } from '../../typechain-types/Hounds';
import { expecting } from "../expecting";

export async function updateStamina(
  params: UpdateHoundStaminaParams
) {
  await params.contract.updateHoundStamina(params.houndId);
}

export async function safeUpdateStamina(
  params: UpdateHoundStaminaParams
) {
  console.log("ok 1");
  const id = await params.contract.id();
  expecting(Number(id) > params.houndId, "Hound doesn't exist");
  const before: Hound.StructStructOutput = await params.contract.hound(params.houndId);
  console.log("ok 2");
  const houndStamina: HoundStamina.StructStruct = await params.gamification.houndsStamina(params.houndId);
  console.log("ok 3", houndStamina);
  await updateStamina(params);
  console.log("ok 4");
  const after: Hound.StructStructOutput = await params.contract.hound(params.houndId);
  console.log(before);
  console.log(after);
  expecting(JSON.stringify(before) !== JSON.stringify(after), "Update stamina method bugged");
}