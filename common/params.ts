import { Hound } from '../typechain-types/Hounds';
import { BigNumber } from 'ethers';
import { network } from 'hardhat';
import { Queue } from '../typechain-types/Queues';
import { Arena } from '../typechain-types/Arenas';
import { Payment, Race } from '../typechain-types/Races';
import { Box } from '../typechain-types/HoundraceMysteryBoxes';
import { Discount } from '../typechain-types/Shop';

const POLYGON_MAINNET_OPENSEA_CONTRACT_ADDRESS = "0x58807baD0B376efc12F5AD86aAc70E78ed67deaE";
const POLYGON_MUMBAI_OPENSEA_CONTRACT_ADDRESS = "0xff7Ca10aF37178BdD056628eF42fD7F799fAc77c";
const address0: string = '0x0000000000000000000000000000000000000000';
const maleBoilerplateGene = [ 0, 1, 6, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 3, 1, 9, 1, 4, 2, 4, 7, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 1, 7, 2, 7, 9, 1, 0, 9, 1, 1, 2, 1, 0, 7, 2, 2, 8, 5, 8, 7, 1, 3, 0, 9, 4, 1, 7, 4, 5, 8, 1, 3, 7, 2, 5, 9, 7, 3, 5, 0];

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
    rewardContracts: [address0],
    rewardTypes: [0],
    tokenIds: [1]
}

const defaultArena: Arena.StructStruct = {
    name: "Arena #",
    token_uri: "arena_token_uri",
    platformAndArenaFeeCurrency: address0,
    platformAndArenaFee: BigNumber.from(100),
    arenaMap: 1,
    surface: 1,
    distance: 1,
    weather: 1
};

const defaultDiscount: Discount.StructStruct = {
    amountToUsePerUsableDiscount: 0,
    dateStart: 0,
    dateStop: 999999999999,
    discount: 5,
    tokenContract: address0,
    tokenIds: [],
    tokenType: 3,
    usable: false
};

const defaultRace: Race.StructStruct = {
    core: {
        arena: 1,
        participants: [],
        raceEntryTicket: 0,
        enqueueDates: [],
        feeCurrency: address0,
        raceEntryTicketCurrency: address0,
        fee: 0,
        name: "Race #"
    },
    queueId: 1,
    randomness: 0,
    seed: "0x00",
    payments: defaultQueuePayment
};

const staminaConstructor: Hound.ConstructorStaminaStruct = {
    staminaRefillCurrency: address0,
    staminaRefill1x: "500000000000000",
    staminaPerTimeUnit: 1440,
    staminaCap: 100
};

const houndStamina: Hound.StaminaStruct = {
    staminaLastUpdate: Number((Date.now() / 1000).toFixed(0)),
    staminaValue: 100,
};

const breedingConstructor: Hound.ConstructorBreedingStruct = {
    externalBreedingFeeCurrency: address0,
    breedingCooldownCurrency: address0,
    breedingCooldown: 259200,
    breedingCooldownTimeUnit: 3600,
    refillBreedingCooldownCost: 0
}

const houndBreeding: Hound.BreedingStruct = {
    lastBreed: 0,
    externalBreedingFee: 0,
    availableToBreed: false
};

const houndIdentity: Hound.IdentityStruct = {
    birthDate: Number((Date.now() / 1000).toFixed(0)),
    femaleParent: 1,
    generation: 1,
    geneticSequence: maleBoilerplateGene,
    maleParent: 1,
    extensionTraits: "",
    specie: 0
};

const houndProfile: Hound.ProfileStruct = {
    name: "Hound #1",
    custom: true,
    runningOn: BigNumber.from(0),
    token_uri: "hound_token_uri"
};

const defaultHound: Hound.StructStruct = {
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
        raceEntryTicket: BigNumber.from(10000),
        raceEntryTicketCurrency: address0,
        fee: BigNumber.from(10000),
        feeCurrency: address0
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
    houndBreeding: Hound.BreedingStruct;
    houndStamina: Hound.StaminaStruct;
    defaultLootbox: Box.StructStruct;
    OPENSEA_CONTRACT_ADDRESS: string;
    staminaConstructor: Hound.ConstructorStaminaStruct;
    breedingConstructor: Hound.ConstructorBreedingStruct;
    defaultDiscount: Discount.StructStruct;
};

const getOpenseaContractAddress = (): string => {
    switch ( network.name ) {
        case "polygonMumbai": 
            return POLYGON_MUMBAI_OPENSEA_CONTRACT_ADDRESS;
        case "polygonMainnet":
            return POLYGON_MAINNET_OPENSEA_CONTRACT_ADDRESS;
        default:
            return address0;
    }
}

export const globalParams: GlobalParams = {
    address0: address0,
    maleBoilerplateGene: maleBoilerplateGene,
    femaleBoilerplateGene: [ 0, 2, 6, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 3, 1, 9, 1, 4, 2, 4, 7, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 1, 7, 2, 7, 9, 1, 0, 9, 1, 1, 2, 1, 0, 7, 2, 2, 8, 5, 8, 7, 1, 3, 0, 9, 4, 1, 7, 4, 5, 8, 1, 3, 7, 2, 5, 9, 7, 3, 5, 0],
    defaultQueue: defaultQueue as Queue.StructStructOutput,
    defaultHound: defaultHound as Hound.StructStructOutput,
    defaultArena: defaultArena as Arena.StructStructOutput,
    defaultRace: defaultRace as Race.StructStructOutput,
    houndBreeding: houndBreeding,
    houndStamina: houndStamina,
    defaultLootbox: defaultLootbox,
    OPENSEA_CONTRACT_ADDRESS: getOpenseaContractAddress(),
    staminaConstructor: staminaConstructor,
    breedingConstructor: breedingConstructor,
    defaultDiscount: defaultDiscount
};