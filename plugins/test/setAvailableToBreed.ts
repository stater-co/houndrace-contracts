import { SetAvailableToBreedParams } from "../../common/dto/test/setAvailableToBreedParams";
import { HoundBreeding } from "../../typechain-types/Gamification";
import { expecting } from "../expecting";


export async function setAvailableToBreed(
  params: SetAvailableToBreedParams
) {
  await params.contract.putHoundForBreed(params.houndId,params.fee,params.status);
}

export async function safeSetAvailableToBreed(
  params: SetAvailableToBreedParams
) {
  const before: HoundBreeding.StructStruct = await params.gamification.houndsBreeding(params.houndId);
  expecting(before.availableToBreed !== params.status && Number(before.breedingFee) !== params.fee, "Can't set the same parameters for hound breeding")
  await setAvailableToBreed(params);
  const after: HoundBreeding.StructStruct = await params.gamification.houndsBreeding(params.houndId);
  //expecting(JSON.stringify(before) !== JSON.stringify(after), "Set available to breed method bugged");
}