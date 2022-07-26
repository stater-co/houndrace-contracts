import { expect } from "chai";
import { BreedHoundsParams } from "../../common/dto/test/breedHoundsParams";
import { Hound } from '../../typechain-types/Hounds';
import { hound } from '../../common/params';

export async function breed(
  params: BreedHoundsParams
) {
  await params.contract.breedHounds(params.hound1,params.hound2);
}

export async function safeBreed(
  params: BreedHoundsParams
) {
  const before: number = Number(await params.contract.id());
  let houndMaleBefore: Hound.StructStructOutput;
  let houndFemaleBefore: Hound.StructStructOutput;

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

  houndMaleBefore = await params.contract.hound(maleId);
  houndFemaleBefore = await params.contract.hound(femaleId);

  const ownerOfMale: string = await params.contract.ownerOf(maleId);
  const ownerOfFemale: string = await params.contract.ownerOf(femaleId);
  const signer = await params.signer.getAddress();

  let hound1 = maleId , hound2 = femaleId;
  if ( ownerOfFemale !== signer && ownerOfMale === signer ) {
    hound1 = maleId;
    hound2 = femaleId;
  } else if ( ownerOfMale !== signer && ownerOfFemale === signer ) {
    hound1 = femaleId;
    hound2 = maleId;
  }

    const totalToPay = await params.contract.getBreedCost(hound1,hound2);
    const houndToFillUp = await params.contract.id();

    await params.contract.breedHounds(hound1, hound2, { value : totalToPay });
    await params.contract.initializeHound(houndToFillUp,hound);

    const houndMaleAfter = await params.contract.hound(maleId);
    const houndFemaleAfter = await params.contract.hound(femaleId);
    expect(JSON.stringify(houndMaleBefore) !== JSON.stringify(houndMaleAfter));
    expect(JSON.stringify(houndFemaleBefore) !== JSON.stringify(houndFemaleAfter));
}