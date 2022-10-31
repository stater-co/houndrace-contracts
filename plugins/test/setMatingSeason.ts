import { SetMatingSeasonParams } from "../../common/dto/test/setMatingSeasonParams";
import { expecting } from "../expecting";


export async function setMatingSeason(
  params: SetMatingSeasonParams
) {
  await params.contract.connect(params.signer).setMatingSeason(params.season);
}

export async function safeSetMatingSeason(
  params: SetMatingSeasonParams
) {
  await setMatingSeason({
    ...params,
    season: false
  });
  const before: boolean = await params.contract.matingSeason();
  await setMatingSeason(params);
  const after: boolean = await params.contract.matingSeason();
  expecting(before !== after, "Set mating season method bugged");
}