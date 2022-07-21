import { expect } from "chai";
import { SetMatingSeasonParams } from "../../common/dto/test/setMatingSeasonParams";


export async function setMatingSeason(
  params: SetMatingSeasonParams
) {
  await params.contract.setMatingSeason(params.season);
}

export async function safeSetMatingSeason(
  params: SetMatingSeasonParams
) {
  const before: boolean = await params.contract.matingSeason();
  await setMatingSeason(params);
  const after: boolean = await params.contract.matingSeason();
  expect(before !== after);
}