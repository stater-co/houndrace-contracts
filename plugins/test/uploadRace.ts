import { expect } from "chai";
import { UploadRaceParams } from "../../common/dto/test/uploadRaceParams.dto";
import { expecting } from "../expecting";

export async function uploadRace(
  params: UploadRaceParams
) {
  await params.contract.uploadRace(params.onId,params.race);
}

export async function safeUploadRace(
  params: UploadRaceParams
): Promise<void> {
  const before = await params.contract.races(params.onId);
  await uploadRace(params);
  const after = await params.contract.races(params.onId);
  //expecting(JSON.stringify(before) !== JSON.stringify(after), "Upload race method bugged");
}