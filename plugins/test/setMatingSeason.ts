import { SetMatingSeasonParams } from "../../common/dto/test/setMatingSeasonParams";
import { expecting } from "../expecting";


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
  expecting(before !== after, "Set mating season method bugged");
}