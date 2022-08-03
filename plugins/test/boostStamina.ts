import { BreedHoundsParams } from "../../common/dto/test/breedHoundsParams";
import { Hound } from '../../typechain-types/Hounds';
import { hound } from '../../common/params';
import { BoostStaminaParams } from "../../common/dto/test/boostStaminaParams";

export async function boostStamina(
  params: BoostStaminaParams
) {
  await params.contract.breedHounds(params.hound1,params.hound2);
}

export async function safeBoostStamina(
  params: BoostStaminaParams
) {
  const before: Hound.StructStructOutput = await params.contract.hound(params.hound1);

  //await params.contract.stami(params.hound1, await params.signer.getAddress(), );

}