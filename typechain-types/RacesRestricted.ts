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

export declare namespace RacesConstructor {
  export type StructStruct = {
    operators: string[];
    arenas: string;
    hounds: string;
    methods: string;
    payments: string;
    restricted: string;
    queues: string;
    races: string;
    targets: BytesLike[][];
  };

  export type StructStructOutput = [
    string[],
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string[][]
  ] & {
    operators: string[];
    arenas: string;
    hounds: string;
    methods: string;
    payments: string;
    restricted: string;
    queues: string;
    races: string;
    targets: string[][];
  };
}

export declare namespace Payment {
  export type StructStruct = {
    from: string[];
    to: string[];
    currency: string[];
    ids: BigNumberish[][];
    amounts: BigNumberish[][];
    paymentType: BigNumberish[];
  };

  export type StructStructOutput = [
    string[],
    string[],
    string[],
    BigNumber[][],
    BigNumber[][],
    number[]
  ] & {
    from: string[];
    to: string[];
    currency: string[];
    ids: BigNumber[][];
    amounts: BigNumber[][];
    paymentType: number[];
  };
}

export declare namespace Core {
  export type StructStruct = {
    name: string;
    feeCurrency: string;
    entryFeeCurrency: string;
    participants: BigNumberish[];
    enqueueDates: BigNumberish[];
    arena: BigNumberish;
    entryFee: BigNumberish;
    fee: BigNumberish;
    payments: Payment.StructStruct;
  };

  export type StructStructOutput = [
    string,
    string,
    string,
    BigNumber[],
    BigNumber[],
    BigNumber,
    BigNumber,
    BigNumber,
    Payment.StructStructOutput
  ] & {
    name: string;
    feeCurrency: string;
    entryFeeCurrency: string;
    participants: BigNumber[];
    enqueueDates: BigNumber[];
    arena: BigNumber;
    entryFee: BigNumber;
    fee: BigNumber;
    payments: Payment.StructStructOutput;
  };
}

export declare namespace Race {
  export type StructStruct = {
    core: Core.StructStruct;
    queueId: BigNumberish;
    randomness: BigNumberish;
    seed: BytesLike;
  };

  export type StructStructOutput = [
    Core.StructStructOutput,
    BigNumber,
    BigNumber,
    string
  ] & {
    core: Core.StructStructOutput;
    queueId: BigNumber;
    randomness: BigNumber;
    seed: string;
  };
}

export interface RacesRestrictedInterface extends utils.Interface {
  contractName: "RacesRestricted";
  functions: {
    "control()": FunctionFragment;
    "id()": FunctionFragment;
    "owner()": FunctionFragment;
    "participantsOf(uint256)": FunctionFragment;
    "race(uint256)": FunctionFragment;
    "races(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setGlobalParameters((address[],address,address,address,address,address,address,address,bytes4[][]))": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "uploadRace(uint256,uint256,((string,address,address,uint256[],uint256[],uint256,uint256,uint256,(address[],address[],address[],uint256[][],uint256[][],uint8[])),uint256,uint256,bytes))": FunctionFragment;
    "whitelists(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "control", values?: undefined): string;
  encodeFunctionData(functionFragment: "id", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "participantsOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "race", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "races", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setGlobalParameters",
    values: [RacesConstructor.StructStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "uploadRace",
    values: [BigNumberish, BigNumberish, Race.StructStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelists",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "control", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "id", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "participantsOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "race", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "races", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGlobalParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "uploadRace", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "whitelists", data: BytesLike): Result;

  events: {
    "NewRace(uint256,uint256,tuple)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "UploadRace(uint256,uint256,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewRace"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UploadRace"): EventFragment;
}

export type NewRaceEvent = TypedEvent<
  [BigNumber, BigNumber, Race.StructStructOutput],
  { id: BigNumber; queueId: BigNumber; race: Race.StructStructOutput }
>;

export type NewRaceEventFilter = TypedEventFilter<NewRaceEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type UploadRaceEvent = TypedEvent<
  [BigNumber, BigNumber, Race.StructStructOutput],
  { id: BigNumber; queueId: BigNumber; race: Race.StructStructOutput }
>;

export type UploadRaceEventFilter = TypedEventFilter<UploadRaceEvent>;

export interface RacesRestricted extends BaseContract {
  contractName: "RacesRestricted";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RacesRestrictedInterface;

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
    control(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string, string, string] & {
        arenas: string;
        hounds: string;
        methods: string;
        payments: string;
        restricted: string;
        queues: string;
        races: string;
      }
    >;

    id(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    participantsOf(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    race(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[Race.StructStructOutput]>;

    races(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [Core.StructStructOutput, BigNumber, BigNumber, string] & {
        core: Core.StructStructOutput;
        queueId: BigNumber;
        randomness: BigNumber;
        seed: string;
      }
    >;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGlobalParameters(
      globalParameters: RacesConstructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uploadRace(
      theId: BigNumberish,
      queueId: BigNumberish,
      race: Race.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    whitelists(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  control(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, string, string, string] & {
      arenas: string;
      hounds: string;
      methods: string;
      payments: string;
      restricted: string;
      queues: string;
      races: string;
    }
  >;

  id(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  participantsOf(
    theId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  race(
    theId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<Race.StructStructOutput>;

  races(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [Core.StructStructOutput, BigNumber, BigNumber, string] & {
      core: Core.StructStructOutput;
      queueId: BigNumber;
      randomness: BigNumber;
      seed: string;
    }
  >;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGlobalParameters(
    globalParameters: RacesConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uploadRace(
    theId: BigNumberish,
    queueId: BigNumberish,
    race: Race.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  whitelists(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    control(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string, string, string] & {
        arenas: string;
        hounds: string;
        methods: string;
        payments: string;
        restricted: string;
        queues: string;
        races: string;
      }
    >;

    id(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    participantsOf(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    race(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<Race.StructStructOutput>;

    races(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [Core.StructStructOutput, BigNumber, BigNumber, string] & {
        core: Core.StructStructOutput;
        queueId: BigNumber;
        randomness: BigNumber;
        seed: string;
      }
    >;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setGlobalParameters(
      globalParameters: RacesConstructor.StructStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    uploadRace(
      theId: BigNumberish,
      queueId: BigNumberish,
      race: Race.StructStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    whitelists(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "NewRace(uint256,uint256,tuple)"(
      id?: BigNumberish | null,
      queueId?: BigNumberish | null,
      race?: null
    ): NewRaceEventFilter;
    NewRace(
      id?: BigNumberish | null,
      queueId?: BigNumberish | null,
      race?: null
    ): NewRaceEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "UploadRace(uint256,uint256,tuple)"(
      id?: BigNumberish | null,
      queueId?: BigNumberish | null,
      race?: null
    ): UploadRaceEventFilter;
    UploadRace(
      id?: BigNumberish | null,
      queueId?: BigNumberish | null,
      race?: null
    ): UploadRaceEventFilter;
  };

  estimateGas: {
    control(overrides?: CallOverrides): Promise<BigNumber>;

    id(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    participantsOf(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    race(theId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    races(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGlobalParameters(
      globalParameters: RacesConstructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uploadRace(
      theId: BigNumberish,
      queueId: BigNumberish,
      race: Race.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    whitelists(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    control(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    id(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    participantsOf(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    race(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    races(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGlobalParameters(
      globalParameters: RacesConstructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uploadRace(
      theId: BigNumberish,
      queueId: BigNumberish,
      race: Race.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    whitelists(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
