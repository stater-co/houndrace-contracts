import { expect } from "chai";
import { UploadRaceParams } from "../../common/dto/test/uploadRaceParams.dto";
import { expecting } from "../expecting";

export async function uploadRace(
  params: UploadRaceParams
) {
  await params.contract.uploadRace(1,params.race);
}

export async function safeUploadRace(
  params: UploadRaceParams
): Promise<void> {
  const before = await params.contract.id();
  await uploadRace(params);
  const after = await params.contract.id();
  expecting(before !== after && Number(before) === Number(after) - 1, "Upload race method bugged");
}