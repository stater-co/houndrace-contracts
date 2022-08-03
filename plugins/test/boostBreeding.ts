import { expect } from "chai";
import { BoostBreedingParams } from "../../common/dto/test/boostBreedingParams";
import { globalParams } from "../../common/params";
import { Hound } from '../../typechain-types/Hounds';

export async function boostHoundBreeding(
  params: BoostBreedingParams
) {
  const hound: Hound.StructStructOutput = await params.contract.hound(params.hound1);
  console.log("Boost breeding for: " + hound.breeding.breedingFeeCurrency + " and " + hound.breeding.breedingFee);
  await params.contract.boostHoundBreeding(
    params.hound1, 
    await params.contract.signer.getAddress(), 
    hound.breeding.breedingFee,{
      value: hound.breeding.breedingFeeCurrency === globalParams.address0 ? hound.breeding.breedingFee : 0
    }
  );
}

export async function safeBoostHoundBreeding(
  params: BoostBreedingParams
) {
  const before: Hound.StructStructOutput = await params.contract.hound(params.hound1);
  await boostHoundBreeding(params);
  const after: Hound.StructStructOutput = await params.contract.hound(params.hound1);
  expect(before.breeding.lastBreed !== before.breeding.lastBreed);
}