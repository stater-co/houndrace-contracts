import { expect } from "chai";
import { SetAvailableToBreedParams } from "../../common/dto/test/setAvailableToBreedParams";


export async function setAvailableToBreed(
  params: SetAvailableToBreedParams
) {
  await params.contract.putHoundForBreed(params.houndId,params.fee,params.status);
}

export async function safeSetAvailableToBreed(
  params: SetAvailableToBreedParams
) {
  const before: boolean = await params.contract.hound(params.houndId);
  await setAvailableToBreed(params);
  const after: boolean = await params.contract.hound(params.houndId);
  expect(JSON.stringify(before) !== JSON.stringify(after));
}