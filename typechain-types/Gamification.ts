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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

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

export declare namespace HoundStamina {
  export type StructStruct = {
    staminaRefillCurrency: string;
    staminaLastUpdate: BigNumberish;
    staminaRefill1x: BigNumberish;
    staminaValue: BigNumberish;
    staminaPerTimeUnit: BigNumberish;
    staminaCap: BigNumberish;
  };

  export type StructStructOutput = [
    string,
    BigNumber,
    BigNumber,
    number,
    number,
    number
  ] & {
    staminaRefillCurrency: string;
    staminaLastUpdate: BigNumber;
    staminaRefill1x: BigNumber;
    staminaValue: number;
    staminaPerTimeUnit: number;
    staminaCap: number;
  };
}

export declare namespace Constructor {
  export type StructStruct = {
    defaultBreeding: HoundBreeding.StructStruct;
    defaultStamina: HoundStamina.StructStruct;
    allowed: string[];
    restricted: string;
    methods: string;
  };

  export type StructStructOutput = [
    HoundBreeding.StructStructOutput,
    HoundStamina.StructStructOutput,
    string[],
    string,
    string
  ] & {
    defaultBreeding: HoundBreeding.StructStructOutput;
    defaultStamina: HoundStamina.StructStructOutput;
    allowed: string[];
    restricted: string;
    methods: string;
  };
}

export interface GamificationInterface extends utils.Interface {
  contractName: "Gamification";
  functions: {
    "allowed(address)": FunctionFragment;
    "control()": FunctionFragment;
    "getBreeding(uint256)": FunctionFragment;
    "getStamina(uint256)": FunctionFragment;
    "getStaminaBreeding(uint256)": FunctionFragment;
    "houndsBreeding(uint256)": FunctionFragment;
    "houndsStamina(uint256)": FunctionFragment;
    "initializeHoundGamingStats(uint256,uint32[54])": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setBreeding(uint256,(address,address,uint256,uint256,uint256,uint256,uint256,bool))": FunctionFragment;
    "setGlobalParameters(((address,address,uint256,uint256,uint256,uint256,uint256,bool),(address,uint256,uint256,uint32,uint32,uint32),address[],address,address))": FunctionFragment;
    "setStamina(uint256,(address,uint256,uint256,uint32,uint32,uint32))": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "allowed", values: [string]): string;
  encodeFunctionData(functionFragment: "control", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getBreeding",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getStamina",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getStaminaBreeding",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "houndsBreeding",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "houndsStamina",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeHoundGamingStats",
    values: [BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBreeding",
    values: [BigNumberish, HoundBreeding.StructStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setGlobalParameters",
    values: [Constructor.StructStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setStamina",
    values: [BigNumberish, HoundStamina.StructStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "allowed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "control", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getBreeding",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getStamina", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getStaminaBreeding",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "houndsBreeding",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "houndsStamina",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeHoundGamingStats",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBreeding",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGlobalParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setStamina", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Gamification extends BaseContract {
  contractName: "Gamification";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GamificationInterface;

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
    allowed(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    control(
      overrides?: CallOverrides
    ): Promise<
      [
        HoundBreeding.StructStructOutput,
        HoundStamina.StructStructOutput,
        string,
        string
      ] & {
        defaultBreeding: HoundBreeding.StructStructOutput;
        defaultStamina: HoundStamina.StructStructOutput;
        restricted: string;
        methods: string;
      }
    >;

    getBreeding(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[HoundBreeding.StructStructOutput]>;

    getStamina(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[HoundStamina.StructStructOutput]>;

    getStaminaBreeding(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [HoundStamina.StructStructOutput, HoundBreeding.StructStructOutput]
    >;

    houndsBreeding(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
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
      }
    >;

    houndsStamina(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, number, number, number] & {
        staminaRefillCurrency: string;
        staminaLastUpdate: BigNumber;
        staminaRefill1x: BigNumber;
        staminaValue: number;
        staminaPerTimeUnit: number;
        staminaCap: number;
      }
    >;

    initializeHoundGamingStats(
      id: BigNumberish,
      genetics: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBreeding(
      id: BigNumberish,
      breeding: HoundBreeding.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGlobalParameters(
      globalParameters: Constructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setStamina(
      id: BigNumberish,
      stamina: HoundStamina.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  allowed(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  control(
    overrides?: CallOverrides
  ): Promise<
    [
      HoundBreeding.StructStructOutput,
      HoundStamina.StructStructOutput,
      string,
      string
    ] & {
      defaultBreeding: HoundBreeding.StructStructOutput;
      defaultStamina: HoundStamina.StructStructOutput;
      restricted: string;
      methods: string;
    }
  >;

  getBreeding(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<HoundBreeding.StructStructOutput>;

  getStamina(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<HoundStamina.StructStructOutput>;

  getStaminaBreeding(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [HoundStamina.StructStructOutput, HoundBreeding.StructStructOutput]
  >;

  houndsBreeding(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
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
    }
  >;

  houndsStamina(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, number, number, number] & {
      staminaRefillCurrency: string;
      staminaLastUpdate: BigNumber;
      staminaRefill1x: BigNumber;
      staminaValue: number;
      staminaPerTimeUnit: number;
      staminaCap: number;
    }
  >;

  initializeHoundGamingStats(
    id: BigNumberish,
    genetics: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBreeding(
    id: BigNumberish,
    breeding: HoundBreeding.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGlobalParameters(
    globalParameters: Constructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setStamina(
    id: BigNumberish,
    stamina: HoundStamina.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allowed(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    control(
      overrides?: CallOverrides
    ): Promise<
      [
        HoundBreeding.StructStructOutput,
        HoundStamina.StructStructOutput,
        string,
        string
      ] & {
        defaultBreeding: HoundBreeding.StructStructOutput;
        defaultStamina: HoundStamina.StructStructOutput;
        restricted: string;
        methods: string;
      }
    >;

    getBreeding(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<HoundBreeding.StructStructOutput>;

    getStamina(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<HoundStamina.StructStructOutput>;

    getStaminaBreeding(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [HoundStamina.StructStructOutput, HoundBreeding.StructStructOutput]
    >;

    houndsBreeding(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
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
      }
    >;

    houndsStamina(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, number, number, number] & {
        staminaRefillCurrency: string;
        staminaLastUpdate: BigNumber;
        staminaRefill1x: BigNumber;
        staminaValue: number;
        staminaPerTimeUnit: number;
        staminaCap: number;
      }
    >;

    initializeHoundGamingStats(
      id: BigNumberish,
      genetics: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setBreeding(
      id: BigNumberish,
      breeding: HoundBreeding.StructStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    setGlobalParameters(
      globalParameters: Constructor.StructStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    setStamina(
      id: BigNumberish,
      stamina: HoundStamina.StructStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    allowed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    control(overrides?: CallOverrides): Promise<BigNumber>;

    getBreeding(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStamina(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getStaminaBreeding(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    houndsBreeding(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    houndsStamina(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initializeHoundGamingStats(
      id: BigNumberish,
      genetics: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBreeding(
      id: BigNumberish,
      breeding: HoundBreeding.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGlobalParameters(
      globalParameters: Constructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setStamina(
      id: BigNumberish,
      stamina: HoundStamina.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    control(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBreeding(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStamina(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStaminaBreeding(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    houndsBreeding(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    houndsStamina(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initializeHoundGamingStats(
      id: BigNumberish,
      genetics: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBreeding(
      id: BigNumberish,
      breeding: HoundBreeding.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGlobalParameters(
      globalParameters: Constructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setStamina(
      id: BigNumberish,
      stamina: HoundStamina.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
