import { MintHoundParams } from "../../common/dto/test/mintHoundsParams.dto";
import { expecting } from "../expecting";

export async function mintHound(
  params: MintHoundParams
) {
  console.log("Initialize hound: ", params.position, params.owner, params.hound);
  await params.contract.initializeHound(params.position, params.owner, params.hound);
}

export async function safeMintHound(
  params: MintHoundParams
): Promise<string | number> {
  const before = await params.contract.id();
  await mintHound(params);
  const after = await params.contract.id();
  expecting(before !== after && Number(before) === Number(after) - 1, "Mint hound method bugged");
  const stamina = await params.gamification.houndsStamina(before);
  const breeding = await params.gamification.houndsBreeding(before);
  const statistics = await params.races.houndsStatistic(before);
  const hound = await params.contract.hound(before);
  const profile = await params.contract.hounds(before);
  console.log("Breeding: ", breeding);
  expecting(stamina.staminaCap > 0 && stamina.staminaPerHour > 0, "Bugged stamina setter");
  expecting(Number(breeding.breedingFee) > 0, "Bugged breeding setter")
  expecting(Number(statistics.firstPlace) === 0 && Number(statistics.totalRuns) === 0, "Bugged statistics setter");
  expecting(profile.title.length > 0, "Bugged profile setter");
  expecting(hound.identity.geneticSequence[1] > 0, "Bugged incubator setter");
  return Number(before);
}