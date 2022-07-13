/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export declare namespace Hound {
  export type StatisticsStruct = {
    totalRuns: PromiseOrValue<BigNumberish>;
    firstPlace: PromiseOrValue<BigNumberish>;
    secondPlace: PromiseOrValue<BigNumberish>;
    thirdPlace: PromiseOrValue<BigNumberish>;
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
    staminaRefill1xCurrency: PromiseOrValue<string>;
    staminaLastUpdate: PromiseOrValue<BigNumberish>;
    staminaRefill1x: PromiseOrValue<BigNumberish>;
    staminaValue: PromiseOrValue<BigNumberish>;
    staminaPerHour: PromiseOrValue<BigNumberish>;
    staminaCap: PromiseOrValue<BigNumberish>;
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
    lastBreed: PromiseOrValue<BigNumberish>;
    breedingCooldown: PromiseOrValue<BigNumberish>;
    breedingFeeCurrency: PromiseOrValue<string>;
    breedingFee: PromiseOrValue<BigNumberish>;
    availableToBreed: PromiseOrValue<boolean>;
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
    maleParent: PromiseOrValue<BigNumberish>;
    femaleParent: PromiseOrValue<BigNumberish>;
    generation: PromiseOrValue<BigNumberish>;
    birthDate: PromiseOrValue<BigNumberish>;
    geneticSequence: PromiseOrValue<BigNumberish>[];
  };

  export type IdentityStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number[]
  ] & {
    maleParent: BigNumber;
    femaleParent: BigNumber;
    generation: BigNumber;
    birthDate: BigNumber;
    geneticSequence: number[];
  };

  export type StructStruct = {
    statistics: Hound.StatisticsStruct;
    stamina: Hound.StaminaStruct;
    breeding: Hound.BreedingStruct;
    identity: Hound.IdentityStruct;
    title: PromiseOrValue<string>;
    token_uri: PromiseOrValue<string>;
    queueId: PromiseOrValue<BigNumberish>;
    custom: PromiseOrValue<boolean>;
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
  functions: {
    "hound(uint256)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "hound"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "hound",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "hound", data: BytesLike): Result;

  events: {};
}

export interface IHound extends BaseContract {
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
      theId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[Hound.StructStructOutput]>;
  };

  hound(
    theId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<Hound.StructStructOutput>;

  callStatic: {
    hound(
      theId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<Hound.StructStructOutput>;
  };

  filters: {};

  estimateGas: {
    hound(
      theId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    hound(
      theId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
