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

export declare namespace IncubatorConstructor {
  export type StructStruct = {
    methods: string;
    genetics: string;
    gamification: string;
    races: string;
    allowed: string[];
    secondsToMaturity: BigNumberish;
  };

  export type StructStructOutput = [
    string,
    string,
    string,
    string,
    string[],
    number
  ] & {
    methods: string;
    genetics: string;
    gamification: string;
    races: string;
    allowed: string[];
    secondsToMaturity: number;
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

export interface IncubatorMethodsInterface extends utils.Interface {
  contractName: "IncubatorMethods";
  functions: {
    "allowed(address)": FunctionFragment;
    "breedHounds(uint256,(uint256,uint256,uint256,uint256,uint32[54],string,uint8),uint256,(uint256,uint256,uint256,uint256,uint32[54],string,uint8),uint256)": FunctionFragment;
    "control()": FunctionFragment;
    "getIdentity(uint256)": FunctionFragment;
    "houndsIdentity(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setGlobalParameters((address,address,address,address,address[],uint32))": FunctionFragment;
    "setIdentity(uint256,(uint256,uint256,uint256,uint256,uint32[54],string,uint8))": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "allowed", values: [string]): string;
  encodeFunctionData(
    functionFragment: "breedHounds",
    values: [
      BigNumberish,
      HoundIdentity.StructStruct,
      BigNumberish,
      HoundIdentity.StructStruct,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "control", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getIdentity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "houndsIdentity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setGlobalParameters",
    values: [IncubatorConstructor.StructStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setIdentity",
    values: [BigNumberish, HoundIdentity.StructStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "allowed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "breedHounds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "control", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getIdentity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "houndsIdentity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGlobalParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setIdentity",
    data: BytesLike
  ): Result;
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

export interface IncubatorMethods extends BaseContract {
  contractName: "IncubatorMethods";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IncubatorMethodsInterface;

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

    breedHounds(
      hound1Id: BigNumberish,
      hound1: HoundIdentity.StructStruct,
      hound2Id: BigNumberish,
      hound2: HoundIdentity.StructStruct,
      theId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    control(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, number] & {
        methods: string;
        genetics: string;
        gamification: string;
        races: string;
        secondsToMaturity: number;
      }
    >;

    getIdentity(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[HoundIdentity.StructStructOutput]>;

    houndsIdentity(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, string, number] & {
        maleParent: BigNumber;
        femaleParent: BigNumber;
        generation: BigNumber;
        birthDate: BigNumber;
        extensionTraits: string;
        specie: number;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGlobalParameters(
      globalParameters: IncubatorConstructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setIdentity(
      theId: BigNumberish,
      identity: HoundIdentity.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  allowed(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  breedHounds(
    hound1Id: BigNumberish,
    hound1: HoundIdentity.StructStruct,
    hound2Id: BigNumberish,
    hound2: HoundIdentity.StructStruct,
    theId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  control(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, number] & {
      methods: string;
      genetics: string;
      gamification: string;
      races: string;
      secondsToMaturity: number;
    }
  >;

  getIdentity(
    theId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<HoundIdentity.StructStructOutput>;

  houndsIdentity(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, string, number] & {
      maleParent: BigNumber;
      femaleParent: BigNumber;
      generation: BigNumber;
      birthDate: BigNumber;
      extensionTraits: string;
      specie: number;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGlobalParameters(
    globalParameters: IncubatorConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setIdentity(
    theId: BigNumberish,
    identity: HoundIdentity.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allowed(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    breedHounds(
      hound1Id: BigNumberish,
      hound1: HoundIdentity.StructStruct,
      hound2Id: BigNumberish,
      hound2: HoundIdentity.StructStruct,
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    control(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, number] & {
        methods: string;
        genetics: string;
        gamification: string;
        races: string;
        secondsToMaturity: number;
      }
    >;

    getIdentity(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<HoundIdentity.StructStructOutput>;

    houndsIdentity(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, string, number] & {
        maleParent: BigNumber;
        femaleParent: BigNumber;
        generation: BigNumber;
        birthDate: BigNumber;
        extensionTraits: string;
        specie: number;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setGlobalParameters(
      globalParameters: IncubatorConstructor.StructStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    setIdentity(
      theId: BigNumberish,
      identity: HoundIdentity.StructStruct,
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

    breedHounds(
      hound1Id: BigNumberish,
      hound1: HoundIdentity.StructStruct,
      hound2Id: BigNumberish,
      hound2: HoundIdentity.StructStruct,
      theId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    control(overrides?: CallOverrides): Promise<BigNumber>;

    getIdentity(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    houndsIdentity(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGlobalParameters(
      globalParameters: IncubatorConstructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setIdentity(
      theId: BigNumberish,
      identity: HoundIdentity.StructStruct,
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

    breedHounds(
      hound1Id: BigNumberish,
      hound1: HoundIdentity.StructStruct,
      hound2Id: BigNumberish,
      hound2: HoundIdentity.StructStruct,
      theId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    control(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getIdentity(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    houndsIdentity(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGlobalParameters(
      globalParameters: IncubatorConstructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setIdentity(
      theId: BigNumberish,
      identity: HoundIdentity.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
