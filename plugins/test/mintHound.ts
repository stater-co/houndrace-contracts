import { MintHoundParams } from "../../common/dto/test/mintHoundsParams.dto";
import { expecting } from "../expecting";


export async function mintHound(
  params: MintHoundParams
) {
  await params.contract.connect(params.signer).initializeHound(params.position, params.owner, params.hound);
}

export async function safeMintHound(
  params: MintHoundParams
): Promise<string | number> {

  const before = await params.contract.id();
  await mintHound(params);
  const after = await params.contract.id();

  expecting(before !== after && Number(before) === Number(after) - 1, "Mint hound method bugged");

  const hound = await params.contract.hound(before);
  expecting(hound.stamina.staminaCap > 0 && hound.stamina.staminaPerTimeUnit > 0, "Bugged stamina setter");
  expecting(hound.profile.name.length > 0, "Bugged profile setter");
  expecting(hound.identity.geneticSequence[1] > 0, "Bugged incubator setter");

  return Number(before);
  
}