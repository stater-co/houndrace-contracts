import { UploadRaceParams } from '../../common/dto/test/uploadRaceParams.dto';
import { Hound } from '../../typechain-types/Hounds';
import { Queue } from '../../typechain-types/Queues';
import { expecting } from '../expecting';
import { BigNumber } from 'ethers';

export async function uploadRace(
  params: UploadRaceParams
) {
  await params.contract.connect(params.signer).uploadRace(params.onId, params.race.queueId, params.race);
}

export async function safeUploadRace(
  params: UploadRaceParams
): Promise<void> {
  const before = await params.contract.races(params.onId);
  
  
  const queue: Queue.StructStructOutput = await params.queues.queue(params.race.queueId);
  const totalHounds = Number(await params.hounds.id());
  for ( let i = 1 ; i < totalHounds && params.race.core.participants.length < queue.totalParticipants ; ++i ) {
    let hound: Hound.StructStructOutput = await params.hounds.hound(i);
    if ( Number(hound.profile.runningOn) > 0 ) {
      params.race.core.participants.push(BigNumber.from(i));
    }
  }

  await uploadRace(params);
  const after = await params.contract.races(params.onId);
  expecting(JSON.stringify(before) !== JSON.stringify(after), 'Upload race method bugged');
}