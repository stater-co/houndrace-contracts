import { expect } from "chai";
import { globalParams } from "../../common/params";
import { Hound } from '../../typechain-types/Hounds';

export function checkHoundStructure(
  hound: Hound.StructStruct
): boolean {

  expect(
    ( hound.breeding.availableToBreed === false || hound.breeding.availableToBreed === true ) && 
    ( hound.breeding.breedingCooldown >= 0 ) && 
    ( hound.breeding.breedingFee >= 0 ) && 
    ( hound.breeding.breedingFeeCurrency === globalParams.address0 || String(hound.breeding.breedingFeeCurrency).length > 0 ) && 
    ( hound.breeding.lastBreed >= 0 ) && 
    ( hound.custom === true || hound.custom === false ) && 
    ( String(hound.title).length > 0 ) && 
    ( String(hound.token_uri).length > 0 ) && 
    ( hound.identity.birthDate >= 0 ) && 
    ( hound.identity.femaleParent >= 0 ) && 
    ( hound.identity.maleParent >= 0 ) && 
    ( hound.identity.generation >= 0 ) && 
    ( hound.identity.geneticSequence.length > 0 ) && 
    ( hound.queueId >= 0 ) && 
    ( hound.statistics.firstPlace >= 0 ) && 
    ( hound.statistics.secondPlace >= 0 ) && 
    ( hound.statistics.thirdPlace >= 0 ) && 
    ( hound.statistics.totalRuns >= 0 ) && 
    ( hound.stamina.staminaCap > 0 ) && 
    ( hound.stamina.staminaLastUpdate >= 0 ) && 
    ( hound.stamina.staminaPerHour >= 0 ) && 
    ( hound.stamina.staminaRefill1x >= 0 ) && 
    ( hound.stamina.staminaRefill1xCurrency === globalParams.address0 || String(hound.stamina.staminaRefill1xCurrency).length > 0 ) && 
    ( hound.stamina.staminaValue >= 0 )
  );

  return true;
}