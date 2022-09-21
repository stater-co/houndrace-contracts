/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export declare namespace HoundStatistics {
  export type StructStruct = {
    totalRuns: BigNumberish;
    firstPlace: BigNumberish;
    secondPlace: BigNumberish;
    thirdPlace: BigNumberish;
  };

  export type StructStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    totalRuns: BigNumber;
    firstPlace: BigNumber;
    secondPlace: BigNumber;
    thirdPlace: BigNumber;
  };
}

export declare namespace HoundStamina {
  export type StructStruct = {
    staminaRefillCurrency: string;
    staminaLastUpdate: BigNumberish;
    staminaRefill1x: BigNumberish;
    refillStaminaCooldownCost: BigNumberish;
    staminaValue: BigNumberish;
    staminaPerTimeUnit: BigNumberish;
    staminaCap: BigNumberish;
  };

  export type StructStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    number,
    number
  ] & {
    staminaRefillCurrency: string;
    staminaLastUpdate: BigNumber;
    staminaRefill1x: BigNumber;
    refillStaminaCooldownCost: BigNumber;
    staminaValue: number;
    staminaPerTimeUnit: number;
    staminaCap: number;
  };
}

export declare namespace HoundBreeding {
  export type StructStruct = {
    breedingFeeCurrency: string;
    breedingCooldownCurrency: string;
    lastBreed: BigNumberish;
    breedingCooldown: BigNumberish;
    breedingFee: BigNumberish;
    breedingCooldownTimeUnit: BigNumberish;
    refillBreedingCooldownCost: BigNumberish;
    availableToBreed: boolean;
  };

  export type StructStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean
  ] & {
    breedingFeeCurrency: string;
    breedingCooldownCurrency: string;
    lastBreed: BigNumber;
    breedingCooldown: BigNumber;
    breedingFee: BigNumber;
    breedingCooldownTimeUnit: BigNumber;
    refillBreedingCooldownCost: BigNumber;
    availableToBreed: boolean;
  };
}

export declare namespace HoundIdentity {
  export type StructStruct = {
    maleParent: BigNumberish;
    femaleParent: BigNumberish;
    generation: BigNumberish;
    birthDate: BigNumberish;
    geneticSequence: BigNumberish[];
    extensionTraits: string;
    specie: BigNumberish;
  };

  export type StructStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number[],
    string,
    number
  ] & {
    maleParent: BigNumber;
    femaleParent: BigNumber;
    generation: BigNumber;
    birthDate: BigNumber;
    geneticSequence: number[];
    extensionTraits: string;
    specie: number;
  };
}

export declare namespace HoundProfile {
  export type StructStruct = {
    name: string;
    token_uri: string;
    queueId: BigNumberish;
    custom: boolean;
  };

  export type StructStructOutput = [string, string, BigNumber, boolean] & {
    name: string;
    token_uri: string;
    queueId: BigNumber;
    custom: boolean;
  };
}

export declare namespace Hound {
  export type StructStruct = {
    statistics: HoundStatistics.StructStruct;
    stamina: HoundStamina.StructStruct;
    breeding: HoundBreeding.StructStruct;
    identity: HoundIdentity.StructStruct;
    profile: HoundProfile.StructStruct;
  };

  export type StructStructOutput = [
    HoundStatistics.StructStructOutput,
    HoundStamina.StructStructOutput,
    HoundBreeding.StructStructOutput,
    HoundIdentity.StructStructOutput,
    HoundProfile.StructStructOutput
  ] & {
    statistics: HoundStatistics.StructStructOutput;
    stamina: HoundStamina.StructStructOutput;
    breeding: HoundBreeding.StructStructOutput;
    identity: HoundIdentity.StructStructOutput;
    profile: HoundProfile.StructStructOutput;
  };
}

export interface IInitializeHoundInterface extends utils.Interface {
  contractName: "IInitializeHound";
  functions: {
    "initializeHound(uint256,address,((uint64,uint64,uint64,uint64),(address,uint256,uint256,uint256,uint32,uint32,uint32),(address,address,uint256,uint256,uint256,uint256,uint256,bool),(uint256,uint256,uint256,uint256,uint32[54],string,uint8),(string,string,uint256,bool)))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "initializeHound",
    values: [BigNumberish, string, Hound.StructStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "initializeHound",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IInitializeHound extends BaseContract {
  contractName: "IInitializeHound";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IInitializeHoundInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    initializeHound(
      onId: BigNumberish,
      owner: string,
      theHound: Hound.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  initializeHound(
    onId: BigNumberish,
    owner: string,
    theHound: Hound.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    initializeHound(
      onId: BigNumberish,
      owner: string,
      theHound: Hound.StructStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    initializeHound(
      onId: BigNumberish,
      owner: string,
      theHound: Hound.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    initializeHound(
      onId: BigNumberish,
      owner: string,
      theHound: Hound.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
