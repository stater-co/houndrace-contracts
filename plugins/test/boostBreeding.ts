import { BoostBreedingParams } from "../../common/dto/test/boostBreedingParams";
import { globalParams } from "../../common/params";
import { Hound } from '../../typechain-types/Hounds';
import { expecting } from "../expecting";

export async function boostHoundBreeding(
  params: BoostBreedingParams
) {
  const totalHounds: number = Number(await params.contract.id());
  let hound: Hound.StructStructOutput = globalParams.defaultHound;
  let exists: boolean = false;
  let i = 1;
  for ( ; i < totalHounds ; ++i ) {
    hound = await params.contract.hound(i);
    if ( Number(hound.breeding.lastBreed) > 0 && Number(hound.breeding.lastBreed) > new Date(new Date().getTime() - Number(hound.breeding.breedingCooldown)).getTime() ) {
      exists = true;
      break;
    }
  }

  if ( exists ) { 
    await params.contract.boostHoundBreeding(
      i, 
      await params.contract.signer.getAddress(), 
      hound.breeding.breedingCooldownCurrency === globalParams.address0 ? 0 : hound.breeding.breedingFee,{
        value: hound.breeding.breedingCooldownCurrency === globalParams.address0 ? hound.breeding.breedingFee : 0
      }
    );
  }
}

export async function safeBoostHoundBreeding(
  params: BoostBreedingParams
) {
  await boostHoundBreeding(params);
}