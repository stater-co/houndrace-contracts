import { expect } from "chai";
import { BreedHoundsParams } from "../../common/dto/test/breedHoundsParams";
import { Hound } from '../../typechain-types/contracts/hounds/params/Index.sol/Params';

export async function breed(
  params: BreedHoundsParams
) {
  await params.contract.boostHoundBreeding(params.houndId, await params.contract.signer.getAddress());
}

export async function safeBreed(
  params: BreedHoundsParams
) {
  const before: number = Number(await params.contract.id());
  let houndMaleBefore: number;
  let houndFemaleBefore: number;

  let maleId: number = 0;
  let femaleId: number = 0;

  for ( let i = 1 , l = Number(before) ; i < l ; ++i ) {

    const hound: Hound.StructStructOutput = await params.contract.hound(i);

    if ( hound.identity.geneticSequence[1] === 1 && maleId === 0 && (Number(hound.breeding.lastBreed) + Number(hound.breeding.breedingCooldown)) * 1000 < new Date().getTime() ) {
      maleId = i;
    }

    if ( hound.identity.geneticSequence[1] === 2 && femaleId === 0 && (Number(hound.breeding.lastBreed) + Number(hound.breeding.breedingCooldown)) * 1000 < new Date().getTime() ) {
      femaleId = i;
    }

  }

  expect(maleId > 0 && femaleId > 0);

  if ( maleId > 0 && femaleId > 0 ) {

    houndMaleBefore = Number(await params.contract.hound(maleId));
    houndFemaleBefore = Number(await params.contract.hound(femaleId));

    const ownerOfMale = await params.contract.ownerOf(maleId);
    const ownerOfFemale = await params.contract.ownerOf(femaleId);

    let hound1 = maleId , hound2 = femaleId;
    if ( ownerOfFemale !== params.signer && ownerOfMale === owner ) {
      hound1 = maleId;
      hound2 = femaleId;
    } else if ( ownerOfMale !== owner && ownerOfFemale === owner ) {
      hound1 = femaleId;
      hound2 = maleId;
    }

    const totalToPay = await hounds.getBreedCost(hound1,hound2);
    let houndToFillUp = await hounds.id();
    await hounds.breedHounds(hound1, hound2, { value : totalToPay });
    await hounds.initializeHound(houndToFillUp,defaultHound);

    const houndMaleAfter = await hounds.hound(maleId);
    const houndFemaleAfter = await hounds.hound(femaleId);
    expect(JSON.stringify(houndMaleBefore) !== JSON.stringify(houndMaleAfter), "Hound male breeding status should be changed after breeding");
    expect(JSON.stringify(houndFemaleBefore) !== JSON.stringify(houndFemaleAfter), "Hound female breeding status should be changed after breeding");
}