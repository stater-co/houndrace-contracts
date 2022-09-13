import { Hound } from '../../typechain-types/Hounds';
import { globalParams } from '../../common/params';
import { BoostStaminaParams } from "../../common/dto/test/boostStaminaParams";
import { expecting } from '../expecting';

export async function boostHoundStamina(
  params: BoostStaminaParams
) {
  const totalHounds: number = Number(await params.contract.id());
  let hound: Hound.StructStructOutput = globalParams.defaultHound;
  let exists: boolean = false;
  let i = 1;
  for (  ; i < totalHounds ; ++i ) {
    hound = await params.contract.hound(i);
    if ( Number(hound.stamina.staminaValue) < Number(hound.stamina.staminaCap) ) {
      exists = true;
      break;
    }
  }

  if ( exists ) {
    await params.contract.boostHoundStamina(
      i, 
      await params.contract.signer.getAddress(), 
      hound.stamina.staminaRefillCurrency === globalParams.address0 ? 0 : hound.breeding.breedingFee,{
        value: hound.stamina.staminaRefillCurrency === globalParams.address0 ? hound.stamina.staminaRefill1x : 0
      }
    );
  }
}

export async function safeBoostHoundStamina(
  params: BoostStaminaParams
) {
  await boostHoundStamina(params);
}