import { SetAvailableToBreedParams } from "../../common/dto/test/setAvailableToBreedParams";
import { Hound } from "../../typechain-types/Hounds";
import { expecting } from "../expecting";


export async function setAvailableToBreed(
  params: SetAvailableToBreedParams
) {
  await params.contract.putHoundForBreed(params.houndId,params.fee,params.status);
}

export async function safeSetAvailableToBreed(
  params: SetAvailableToBreedParams
) {
  const before: Hound.StructStruct = await params.contract.hound(params.houndId);
  await setAvailableToBreed(params);
  const after: Hound.StructStruct = await params.contract.hound(params.houndId);
  //expecting(JSON.stringify(before) !== JSON.stringify(after), "Set available to breed method bugged");
}