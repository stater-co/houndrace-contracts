import { expect } from "chai";
import { UploadRaceParams } from "../../common/dto/test/uploadRaceParams.dto";

export async function uploadRace(
  params: UploadRaceParams
) {
  await params.contract.uploadRace(1,params.race);
}

export async function safeUploadRace(
  params: UploadRaceParams
): Promise<void> {
  const before: string | number = await params.contract.id();
  await uploadRace(params);
  const after: string | number = await params.contract.id();
  expect(before !== after && Number(before) === Number(after) - 1);
}