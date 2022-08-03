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

  let maleId: string | number = params.hound1;
  let femaleId: string | number = params.hound2;

  houndMaleBefore = await params.contract.hound(maleId);
  houndFemaleBefore = await params.contract.hound(femaleId);

  console.log("OK 1 ... " + maleId, femaleId);

  const ownerOfMale: string = await params.contract.ownerOf(maleId);

  console.log("OK 2 ...");

  const ownerOfFemale: string = await params.contract.ownerOf(femaleId);

  console.log("OK 3 ...");

  const signer = await params.signer.getAddress();

  console.log("OK 4 ...");

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

}