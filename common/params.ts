import { Hound } from '../typechain-types/Hounds';
import { BigNumber } from 'ethers';
import { Queue } from '../typechain-types/Queues';
import { Payment } from '../typechain-types/Queues';
import { Arena } from '../typechain-types/Arenas';
import { Race } from '../typechain-types/Races';


const address0: string = '0x0000000000000000000000000000000000000000';
const maleBoilerplateGene = [ 1, 1, 8, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 9, 8, 2, 1, 4, 2, 9, 8, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 7, 7, 0, 2, 9, 1, 0, 9, 1, 1, 2, 1, 9, 0, 2, 2, 8, 5, 2, 8, 1, 9 ];

const defaultQueuePayment: Payment.StructStruct = {
    from: [],
    to: [],
    currency: [],
    ids: [[]],
    amounts: [[]],
    paymentType: []
};

const defaultArena: Arena.StructStruct = {
    name: "Arena #",
    token_uri: "arena_token_uri",
    currency: address0,
    fee: BigNumber.from(100),
    surface: 1,
    distance: 1,
    weather: 1
};

const defaultRace: Race.StructStruct = {
    name: "Race #",
    currency: address0,
    participants: [],
    arena: 1,
    entryFee: 0,
    randomness: 34,
    payments: defaultQueuePayment,
    queueId: 1,
    seed: "0x00"
};

const houndStamina: Hound.StaminaStruct = {
    staminaCap: 100,
    staminaLastUpdate: 0,
    staminaPerHour: 1,
    staminaRefill1x: 100000,
    staminaValue: 100
};

const houndStatistics: Hound.StatisticsStruct = {
    firstPlace: 0,
    secondPlace: 0,
    thirdPlace: 0,
    totalRuns: 0
};

const houndBreeding: Hound.BreedingStruct = {
    availableToBreed: false,
    breedingCooldown: 0,
    breedingFee: 100000,
    lastBreed: 0
};

const houndIdentity: Hound.IdentityStruct = {
    birthDate: 0,
    femaleParent: 0,
    generation: 1,
    geneticSequence: maleBoilerplateGene,
    maleParent: 0,
    extensionTraits: ""
};

const defaultHound: Hound.StructStruct = {
    title: "Hound #1",
    custom: true,
    queueId: BigNumber.from(0),
    token_uri: "hound_token_uri",
    statistics: houndStatistics,
    breeding: houndBreeding,
    identity: houndIdentity,
    stamina: houndStamina
};

const defaultQueue: Queue.StructStruct = {
    name: "Queue #",
    participants: [],
    enqueueDates: [],
    arena: BigNumber.from(1),
    entryFee: BigNumber.from(10000),
    startDate: BigNumber.from(0),
    endDate: BigNumber.from(0),
    lastCompletion: BigNumber.from(0),
    payments: defaultQueuePayment as Payment.StructStructOutput,
    totalParticipants: 3,
    cooldown: 0,
    closed: false
};

interface GlobalParams {
    address0: string;
    maleBoilerplateGene: Array<number>;
    femaleBoilerplateGene: Array<number>;
    defaultQueue: Queue.StructStructOutput;
    defaultHound: Hound.StructStructOutput;
    defaultArena: Arena.StructStructOutput;
    defaultRace: Race.StructStructOutput;
};

export const globalParams: GlobalParams = {
    address0: address0,
    maleBoilerplateGene: maleBoilerplateGene,
    femaleBoilerplateGene: [ 2, 2, 6, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 3, 1, 9, 1, 4, 2, 4, 7, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 1, 7, 2, 7, 9, 1, 0, 9, 1, 1, 2, 1, 0, 7, 2, 2, 8, 5, 8, 7, 1, 3 ],
    defaultQueue: defaultQueue as Queue.StructStructOutput,
    defaultHound: defaultHound as Hound.StructStructOutput,
    defaultArena: defaultArena as Arena.StructStructOutput,
    defaultRace: defaultRace as Race.StructStructOutput
};