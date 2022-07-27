/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
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

export declare namespace Hound {
  export type StatisticsStruct = {
    totalRuns: BigNumberish;
    firstPlace: BigNumberish;
    secondPlace: BigNumberish;
    thirdPlace: BigNumberish;
  };

  export type StatisticsStructOutput = [
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

  export type StaminaStruct = {
    staminaRefill1xCurrency: string;
    staminaLastUpdate: BigNumberish;
    staminaRefill1x: BigNumberish;
    staminaValue: BigNumberish;
    staminaPerHour: BigNumberish;
    staminaCap: BigNumberish;
  };

  export type StaminaStructOutput = [
    string,
    BigNumber,
    BigNumber,
    number,
    number,
    number
  ] & {
    staminaRefill1xCurrency: string;
    staminaLastUpdate: BigNumber;
    staminaRefill1x: BigNumber;
    staminaValue: number;
    staminaPerHour: number;
    staminaCap: number;
  };

  export type BreedingStruct = {
    lastBreed: BigNumberish;
    breedingCooldown: BigNumberish;
    breedingFeeCurrency: string;
    breedingFee: BigNumberish;
    availableToBreed: boolean;
  };

  export type BreedingStructOutput = [
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    boolean
  ] & {
    lastBreed: BigNumber;
    breedingCooldown: BigNumber;
    breedingFeeCurrency: string;
    breedingFee: BigNumber;
    availableToBreed: boolean;
  };

  export type IdentityStruct = {
    maleParent: BigNumberish;
    femaleParent: BigNumberish;
    generation: BigNumberish;
    birthDate: BigNumberish;
    geneticSequence: BigNumberish[];
    extensionTraits: string;
  };

  export type IdentityStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number[],
    string
  ] & {
    maleParent: BigNumber;
    femaleParent: BigNumber;
    generation: BigNumber;
    birthDate: BigNumber;
    geneticSequence: number[];
    extensionTraits: string;
  };

  export type StructStruct = {
    statistics: Hound.StatisticsStruct;
    stamina: Hound.StaminaStruct;
    breeding: Hound.BreedingStruct;
    identity: Hound.IdentityStruct;
    title: string;
    token_uri: string;
    queueId: BigNumberish;
    custom: boolean;
  };

  export type StructStructOutput = [
    Hound.StatisticsStructOutput,
    Hound.StaminaStructOutput,
    Hound.BreedingStructOutput,
    Hound.IdentityStructOutput,
    string,
    string,
    BigNumber,
    boolean
  ] & {
    statistics: Hound.StatisticsStructOutput;
    stamina: Hound.StaminaStructOutput;
    breeding: Hound.BreedingStructOutput;
    identity: Hound.IdentityStructOutput;
    title: string;
    token_uri: string;
    queueId: BigNumber;
    custom: boolean;
  };
}

export interface IHoundInterface extends utils.Interface {
  contractName: "IHound";
  functions: {
    "hound(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "hound", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "hound", data: BytesLike): Result;

  events: {};
}

export interface IHound extends BaseContract {
  contractName: "IHound";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IHoundInterface;

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
    hound(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[Hound.StructStructOutput]>;
  };

  hound(
    theId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<Hound.StructStructOutput>;

  callStatic: {
    hound(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<Hound.StructStructOutput>;
  };

  filters: {};

  estimateGas: {
    hound(theId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    hound(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
