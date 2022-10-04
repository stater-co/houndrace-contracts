import { Hound, HoundProfile } from '../typechain-types/Hounds';
import { BigNumber } from 'ethers';
import { Queue } from '../typechain-types/Queues';
import { Payment } from '../typechain-types/Queues';
import { Arena } from '../typechain-types/Arenas';
import { Race, HoundStatistics } from '../typechain-types/Races';
import { HoundStamina, HoundBreeding } from '../typechain-types/Gamification';
import { HoundIdentity } from '../typechain-types/Incubator';
import { Box } from '../typechain-types/Lootboxes';


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

const defaultLootbox: Box.StructStruct = {
    amounts: [1],
    generated: true,
    rewardContracts: [address0],
    rewardTypes: [0],
    tokenIds: [1]
}

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
    core: {
        arena: 1,
        participants: [],
        entryFee: 0,
        enqueueDates: [],
        feeCurrency: address0,
        entryFeeCurrency: address0,
        fee: 0,
        name: "Race #",
        payments: defaultQueuePayment
    },
    queueId: 1,
    seed: "0x00",
    randomness: 5
};

const houndStamina: HoundStamina.StructStruct = {
    staminaRefillCurrency: address0,
    staminaLastUpdate: 0,
    staminaRefill1x: 100_000,
    staminaValue: 100,
    staminaPerTimeUnit: 86_400,
    staminaCap: 100
};

const houndStatistics: HoundStatistics.StructStruct = {
    firstPlace: 0,
    secondPlace: 0,
    thirdPlace: 0,
    totalRuns: 0
};

const houndBreeding: HoundBreeding.StructStruct = {
    breedingCooldownCurrency: address0,
    breedingFeeCurrency: address0,
    lastBreed: 0,
    breedingCooldown: 345_600,
    breedingFee: 100_000,
    breedingCooldownTimeUnit: 3600,
    refillBreedingCooldownCost: 100_000,
    availableToBreed: false
};

const houndIdentity: HoundIdentity.StructStruct = {
    birthDate: 0,
    femaleParent: 0,
    generation: 1,
    geneticSequence: maleBoilerplateGene,
    maleParent: 0,
    extensionTraits: "",
    specie: 0
};

const houndProfile: HoundProfile.StructStruct = {
    name: "Hound #1",
    custom: true,
    queueId: BigNumber.from(0),
    token_uri: "hound_token_uri"
};

const defaultHound: Hound.StructStruct = {
    statistics: houndStatistics,
    breeding: houndBreeding,
    identity: houndIdentity,
    profile: houndProfile,
    stamina: houndStamina
};

const defaultQueue: Queue.StructStruct = {
    core: {
        name: "Queue #",
        arena: BigNumber.from(1),
        participants: [],
        enqueueDates: [],
        entryFee: BigNumber.from(10000),
        entryFeeCurrency: address0,
        fee: BigNumber.from(10000),
        feeCurrency: address0,
        payments: defaultQueuePayment as Payment.StructStructOutput
    },
    startDate: BigNumber.from(0),
    endDate: BigNumber.from(0),
    lastCompletion: BigNumber.from(0),
    totalParticipants: 3,
    cooldown: 0,
    speciesAllowed: [0,1],
    closed: false,
    staminaCost: 5
};

interface GlobalParams {
    address0: string;
    maleBoilerplateGene: Array<number>;
    femaleBoilerplateGene: Array<number>;
    defaultQueue: Queue.StructStructOutput;
    defaultHound: Hound.StructStructOutput;
    defaultArena: Arena.StructStructOutput;
    defaultRace: Race.StructStructOutput;
    houndBreeding: HoundBreeding.StructStruct;
    houndStamina: HoundStamina.StructStruct;
    defaultLootbox: Box.StructStruct;
};

export const globalParams: GlobalParams = {
    address0: address0,
    maleBoilerplateGene: maleBoilerplateGene,
    femaleBoilerplateGene: [ 2, 2, 6, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 3, 1, 9, 1, 4, 2, 4, 7, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 1, 7, 2, 7, 9, 1, 0, 9, 1, 1, 2, 1, 0, 7, 2, 2, 8, 5, 8, 7, 1, 3 ],
    defaultQueue: defaultQueue as Queue.StructStructOutput,
    defaultHound: defaultHound as Hound.StructStructOutput,
    defaultArena: defaultArena as Arena.StructStructOutput,
    defaultRace: defaultRace as Race.StructStructOutput,
    houndBreeding: houndBreeding,
    houndStamina: houndStamina,
    defaultLootbox: defaultLootbox
};