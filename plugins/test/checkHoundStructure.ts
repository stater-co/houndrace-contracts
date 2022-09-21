import { Hound } from '../../typechain-types/Hounds';
import { expecting } from "../expecting";

export function checkHoundStructure(
  hound: Hound.StructStruct
): boolean {

  expecting(
    ( hound.breeding.availableToBreed === false || hound.breeding.availableToBreed === true ) && 
    ( hound.breeding.breedingCooldown >= 0 ) && 
    ( hound.breeding.breedingFee >= 0 ) && 
    ( hound.breeding.lastBreed >= 0 ) && 
    ( hound.profile.custom === true || hound.profile.custom === false ) && 
    ( String(hound.profile.name).length > 0 ) && 
    ( String(hound.profile.token_uri).length > 0 ) && 
    ( hound.identity.birthDate >= 0 ) && 
    ( hound.identity.femaleParent >= 0 ) && 
    ( hound.identity.maleParent >= 0 ) && 
    ( hound.identity.generation >= 0 ) && 
    ( hound.identity.geneticSequence.length > 0 ) && 
    ( hound.profile.queueId >= 0 ) && 
    ( hound.statistics.firstPlace >= 0 ) && 
    ( hound.statistics.secondPlace >= 0 ) && 
    ( hound.statistics.thirdPlace >= 0 ) && 
    ( hound.statistics.totalRuns >= 0 ) && 
    ( hound.stamina.staminaCap > 0 ) && 
    ( hound.stamina.staminaLastUpdate >= 0 ) && 
    ( hound.stamina.staminaPerTimeUnit >= 0 ) && 
    ( hound.stamina.staminaRefill1x >= 0 ) && 
    ( hound.stamina.staminaValue >= 0 ),
    "Hound structure has not been entirely retreiven from contract"
  );

  return true;
}