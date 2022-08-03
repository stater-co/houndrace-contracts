import { Hound } from '../typechain-types/Hounds';
import { BigNumber } from 'ethers';

interface GlobalParams {
    address0: string;
    maleBoilerplateGene: Array<number>;
    femaleBoilerplateGene: Array<number>;
}

export const globalParams: GlobalParams = {
    address0: '0x0000000000000000000000000000000000000000',
    maleBoilerplateGene: [ 1, 1, 8, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 9, 8, 2, 1, 4, 2, 9, 8, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 7, 7, 0, 2, 9, 1, 0, 9, 1, 1, 2, 1, 9, 0, 2, 2, 8, 5, 2, 8, 1, 9 ],
    femaleBoilerplateGene: [ 2, 2, 6, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 3, 1, 9, 1, 4, 2, 4, 7, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 1, 7, 2, 7, 9, 1, 0, 9, 1, 1, 2, 1, 0, 7, 2, 2, 8, 5, 8, 7, 1, 3 ]
}

export const houndStamina: Hound.StaminaStruct = {
    staminaCap: 100,
    staminaLastUpdate: 0,
    staminaPerHour: 1,
    staminaRefill1x: 100000,
    staminaRefill1xCurrency: globalParams.address0,
    staminaValue: 100
}

export const houndStatistics: Hound.StatisticsStruct = {
    firstPlace: 0,
    secondPlace: 0,
    thirdPlace: 0,
    totalRuns: 0
}

export const houndBreeding: Hound.BreedingStruct = {
    availableToBreed: false,
    breedingCooldown: 0,
    breedingFee: 100000,
    breedingcurrency: globalParams.address0,
    lastBreed: 0
}

export const houndIdentity: Hound.IdentityStruct = {
    birthDate: 0,
    femaleParent: 0,
    generation: 1,
    geneticSequence: globalParams.maleBoilerplateGene,
    maleParent: 0,
    extensionTraits: ""
}

export const hound: Hound.StructStruct = {
    title: "Hound #1",
    custom: true,
    queueId: BigNumber.from(0),
    token_uri: "hound_token_uri",
    statistics: houndStatistics,
    breeding: houndBreeding,
    identity: houndIdentity,
    stamina: houndStamina
};