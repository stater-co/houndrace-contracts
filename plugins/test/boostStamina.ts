import { Hound } from '../../typechain-types/Hounds';
import { globalParams } from '../../common/params';
import { BoostStaminaParams } from "../../common/dto/test/boostStaminaParams";
import { expecting } from '../expecting';

export async function boostHoundStamina(
  params: BoostStaminaParams
): Promise<[Hound.StructStructOutput,Hound.StructStructOutput]> {
  const totalHounds: number = Number(await params.contract.id());
  let exists: boolean = false;
  let i = 1;
  let hound: Hound.StructStructOutput = await params.contract.hound(i);
  let constructor = await params.contract.control();

  for (  ; i < totalHounds ; ++i ) {
    hound = await params.contract.hound(i);
    if ( Number(hound.stamina.staminaValue) < Number(constructor.stamina.staminaCap) ) {
      exists = true;
      break;
    }
  }

  if ( exists ) {
    await params.contract.boostHoundStamina(
      i, 
      await params.contract.signer.getAddress(), 
      constructor.stamina.staminaRefillCurrency === globalParams.address0 ? 0 : constructor.stamina.staminaRefill1x,{
        value: constructor.stamina.staminaRefillCurrency === globalParams.address0 ? constructor.stamina.staminaRefill1x : 0
      }
    );
  }

  return [hound, await params.contract.hound(i)];
}

export async function safeBoostHoundStamina(
  params: BoostStaminaParams
) {
  const boostedHound: [Hound.StructStructOutput,Hound.StructStructOutput] = await boostHoundStamina(params);
  expecting(JSON.stringify(boostedHound[0]) !== JSON.stringify(boostedHound[1]),  "Boost hound stamina method bugged");
}