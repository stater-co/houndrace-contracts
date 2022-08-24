import { SetAvailableToBreedParams } from "../../common/dto/test/setAvailableToBreedParams";
import { Hound } from "../../typechain-types/Hounds";
import { expecting } from "../expecting";


export async function setAvailableToBreed(
  params: SetAvailableToBreedParams
) {
  console.log(params.houndId,params.fee,params.status);
  await params.contract.putHoundForBreed(params.houndId,params.fee,params.status);
}

export async function safeSetAvailableToBreed(
  params: SetAvailableToBreedParams
) {
  const before: Hound.StructStruct = await params.contract.hound(params.houndId);
  await setAvailableToBreed(params);
  const after: Hound.StructStruct = await params.contract.hound(params.houndId);
  console.log("####");
  console.log(before.breeding);
  console.log("#### x2");
  console.log(after.breeding);
  //expecting(JSON.stringify(before) !== JSON.stringify(after), "Set available to breed method bugged");
}