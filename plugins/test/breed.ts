import { BreedHoundsParams } from "../../common/dto/test/breedHoundsParams";
import { globalParams } from "../../common/params";
import { Hound, MicroPayment } from '../../typechain-types/Hounds';
import { expecting } from "../expecting";
import { BigNumber } from 'ethers';


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
  let houndMaleAfter: Hound.StructStructOutput;
  let houndFemaleAfter: Hound.StructStructOutput;

  let maleId: string | number = params.hound1;
  let femaleId: string | number = params.hound2;

  console.log("===== ok2");
  houndMaleBefore = await params.contract.hound(maleId);
  houndFemaleBefore = await params.contract.hound(femaleId);

  console.log("===== ok3");
  const ownerOfMale: string = await params.contract.ownerOf(maleId);

  const ownerOfFemale: string = await params.contract.ownerOf(femaleId);

  console.log("===== ok4");
  const signer = await params.signer.getAddress();

  console.log("===== ok5");
  let hound1 = maleId , hound2 = femaleId;
  if ( ownerOfFemale !== signer && ownerOfMale === signer ) {
    hound1 = maleId;
    hound2 = femaleId;
  } else if ( ownerOfMale !== signer && ownerOfFemale === signer ) {
    hound1 = femaleId;
    hound2 = maleId;
  }

  console.log("ok x1 Get breed cost: ", hound2);
  const totalToPay: MicroPayment.StructStructOutput[] = await params.contract.getBreedCost(hound2);
  console.log("ok x2");
  const houndToFillUp = await params.contract.id();
  let totalValueToPay: BigNumber = BigNumber.from(0);
  for ( let i = 0 , l = totalToPay.length ; i < l ; ++i ) {
    totalValueToPay = totalValueToPay.add(totalToPay[i].amount);
  }

  console.log("ok x3 ", hound1, hound2);
  console.log("ok x3 ", totalValueToPay);
  console.log("to >>> ", params.contract.address);
  await params.contract.breedHounds(hound1, hound2, { value : totalValueToPay });

  console.log("ok x4");
  await params.contract.initializeHound(houndToFillUp, signer, globalParams.defaultHound);

  console.log("ok x5");
  houndMaleAfter = await params.contract.hound(maleId);
  houndFemaleAfter = await params.contract.hound(femaleId);

  const after: number = Number(await params.contract.id());

  expecting(JSON.stringify(houndMaleBefore) !== JSON.stringify(houndMaleAfter), "Breed hounds methods bugged");
  expecting(JSON.stringify(houndFemaleBefore) !== JSON.stringify(houndFemaleAfter), "Breed hounds methods bugged");
  expecting(before === after - 1, "Breed hounds methods bugged");

}