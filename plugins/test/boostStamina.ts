import { Hound } from '../../typechain-types/Hounds';
import { globalParams } from '../../common/params';
import { BoostStaminaParams } from "../../common/dto/test/boostStaminaParams";
import { expect } from "chai";

export async function boostHoundStamina(
  params: BoostStaminaParams
) {
  const hound: Hound.StructStructOutput = await params.contract.hound(params.hound1);
  await params.contract.boostHoundStamina(
    params.hound1, 
    await params.contract.signer.getAddress(), 
    hound.breeding.breedingFee,{
      value: await (await params.contract.control()).fees.currency === globalParams.address0 ? hound.stamina.staminaRefill1x : 0
    }
  );
}

export async function safeBoostHoundStamina(
  params: BoostStaminaParams
) {
  const before: Hound.StructStructOutput = await params.contract.hound(params.hound1);
  await boostHoundStamina(params);
  const after: Hound.StructStructOutput = await params.contract.hound(params.hound1);
  expect(before.breeding.lastBreed !== after.breeding.lastBreed);

}