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
  PayableOverrides,
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
    randomness: string;
    arenas: string;
    hounds: string;
    methods: string;
    generator: string;
    payments: string;
    restricted: string;
    queues: string;
    allowedCallers: string[];
    raceFee: BigNumberish;
    callable: boolean;
  };

  export type StructStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string[],
    BigNumber,
    boolean
  ] & {
    randomness: string;
    arenas: string;
    hounds: string;
    methods: string;
    generator: string;
    payments: string;
    restricted: string;
    queues: string;
    allowedCallers: string[];
    raceFee: BigNumber;
    callable: boolean;
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

export declare namespace Race {
  export type StructStruct = {
    name: string;
    currency: string;
    participants: BigNumberish[];
    arena: BigNumberish;
    entryFee: BigNumberish;
    randomness: BigNumberish;
    payments: Payment.StructStruct;
    queueId: BigNumberish;
    seed: BytesLike;
  };

  export type StructStructOutput = [
    string,
    string,
    BigNumber[],
    BigNumber,
    BigNumber,
    BigNumber,
    Payment.StructStructOutput,
    BigNumber,
    string
  ] & {
    name: string;
    currency: string;
    participants: BigNumber[];
    arena: BigNumber;
    entryFee: BigNumber;
    randomness: BigNumber;
    payments: Payment.StructStructOutput;
    queueId: BigNumber;
    seed: string;
  };
}

export declare namespace Queue {
  export type StructStruct = {
    name: string;
    participants: BigNumberish[];
    enqueueDates: BigNumberish[];
    arena: BigNumberish;
    entryFee: BigNumberish;
    startDate: BigNumberish;
    endDate: BigNumberish;
    lastCompletion: BigNumberish;
    payments: Payment.StructStruct;
    totalParticipants: BigNumberish;
    cooldown: BigNumberish;
    closed: boolean;
  };

  export type StructStructOutput = [
    string,
    BigNumber[],
    BigNumber[],
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    Payment.StructStructOutput,
    number,
    number,
    boolean
  ] & {
    name: string;
    participants: BigNumber[];
    enqueueDates: BigNumber[];
    arena: BigNumber;
    entryFee: BigNumber;
    startDate: BigNumber;
    endDate: BigNumber;
    lastCompletion: BigNumber;
    payments: Payment.StructStructOutput;
    totalParticipants: number;
    cooldown: number;
    closed: boolean;
  };
}

export interface RacesMethodsInterface extends utils.Interface {
  contractName: "RacesMethods";
  functions: {
    "allowed(address)": FunctionFragment;
    "control()": FunctionFragment;
    "handleRaceLoot((address[],address[],address[],uint256[][],uint256[][],uint32[]))": FunctionFragment;
    "id()": FunctionFragment;
    "owner()": FunctionFragment;
    "participantsOf(uint256)": FunctionFragment;
    "payout(uint256)": FunctionFragment;
    "race(uint256)": FunctionFragment;
    "raceStart((string,uint256[],uint256[],uint256,uint256,uint256,uint256,uint256,(address[],address[],address[],uint256[][],uint256[][],uint32[]),uint32,uint32,bool),uint256)": FunctionFragment;
    "races(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setGlobalParameters((address,address,address,address,address,address,address,address,address[],uint256,bool))": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "allowed", values: [string]): string;
  encodeFunctionData(functionFragment: "control", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "handleRaceLoot",
    values: [Payment.StructStruct]
  ): string;
  encodeFunctionData(functionFragment: "id", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "participantsOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "payout",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "race", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "raceStart",
    values: [Queue.StructStruct, BigNumberish]
  ): string;
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

  decodeFunctionResult(functionFragment: "allowed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "control", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "handleRaceLoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "id", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "participantsOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "payout", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "race", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "raceStart", data: BytesLike): Result;
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

  events: {
    "NewFinishedRace(uint256,tuple)": EventFragment;
    "NewRace(uint256,tuple)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "UploadRace(uint256,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewFinishedRace"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewRace"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UploadRace"): EventFragment;
}

export type NewFinishedRaceEvent = TypedEvent<
  [BigNumber, Race.StructStructOutput],
  { id: BigNumber; race: Race.StructStructOutput }
>;

export type NewFinishedRaceEventFilter = TypedEventFilter<NewFinishedRaceEvent>;

export type NewRaceEvent = TypedEvent<
  [BigNumber, Race.StructStructOutput],
  { id: BigNumber; race: Race.StructStructOutput }
>;

export type NewRaceEventFilter = TypedEventFilter<NewRaceEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type UploadRaceEvent = TypedEvent<
  [BigNumber, Race.StructStructOutput],
  { id: BigNumber; race: Race.StructStructOutput }
>;

export type UploadRaceEventFilter = TypedEventFilter<UploadRaceEvent>;

export interface RacesMethods extends BaseContract {
  contractName: "RacesMethods";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RacesMethodsInterface;

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
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        boolean
      ] & {
        randomness: string;
        arenas: string;
        hounds: string;
        methods: string;
        generator: string;
        payments: string;
        restricted: string;
        queues: string;
        raceFee: BigNumber;
        callable: boolean;
      }
    >;

    handleRaceLoot(
      payment: Payment.StructStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    id(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    participantsOf(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    payout(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    race(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[Race.StructStructOutput]>;

    raceStart(
      queue: Queue.StructStruct,
      theId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    races(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        Payment.StructStructOutput,
        BigNumber,
        string
      ] & {
        name: string;
        currency: string;
        arena: BigNumber;
        entryFee: BigNumber;
        randomness: BigNumber;
        payments: Payment.StructStructOutput;
        queueId: BigNumber;
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
  };

  allowed(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  control(
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      BigNumber,
      boolean
    ] & {
      randomness: string;
      arenas: string;
      hounds: string;
      methods: string;
      generator: string;
      payments: string;
      restricted: string;
      queues: string;
      raceFee: BigNumber;
      callable: boolean;
    }
  >;

  handleRaceLoot(
    payment: Payment.StructStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  id(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  participantsOf(
    theId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  payout(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  race(
    theId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<Race.StructStructOutput>;

  raceStart(
    queue: Queue.StructStruct,
    theId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  races(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      Payment.StructStructOutput,
      BigNumber,
      string
    ] & {
      name: string;
      currency: string;
      arena: BigNumber;
      entryFee: BigNumber;
      randomness: BigNumber;
      payments: Payment.StructStructOutput;
      queueId: BigNumber;
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

  callStatic: {
    allowed(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    control(
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        boolean
      ] & {
        randomness: string;
        arenas: string;
        hounds: string;
        methods: string;
        generator: string;
        payments: string;
        restricted: string;
        queues: string;
        raceFee: BigNumber;
        callable: boolean;
      }
    >;

    handleRaceLoot(
      payment: Payment.StructStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    id(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    participantsOf(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    payout(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    race(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<Race.StructStructOutput>;

    raceStart(
      queue: Queue.StructStruct,
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    races(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        Payment.StructStructOutput,
        BigNumber,
        string
      ] & {
        name: string;
        currency: string;
        arena: BigNumber;
        entryFee: BigNumber;
        randomness: BigNumber;
        payments: Payment.StructStructOutput;
        queueId: BigNumber;
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
  };

  filters: {
    "NewFinishedRace(uint256,tuple)"(
      id?: BigNumberish | null,
      race?: null
    ): NewFinishedRaceEventFilter;
    NewFinishedRace(
      id?: BigNumberish | null,
      race?: null
    ): NewFinishedRaceEventFilter;

    "NewRace(uint256,tuple)"(
      id?: BigNumberish | null,
      race?: null
    ): NewRaceEventFilter;
    NewRace(id?: BigNumberish | null, race?: null): NewRaceEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "UploadRace(uint256,tuple)"(
      id?: BigNumberish | null,
      race?: null
    ): UploadRaceEventFilter;
    UploadRace(id?: BigNumberish | null, race?: null): UploadRaceEventFilter;
  };

  estimateGas: {
    allowed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    control(overrides?: CallOverrides): Promise<BigNumber>;

    handleRaceLoot(
      payment: Payment.StructStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    id(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    participantsOf(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    payout(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    race(theId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    raceStart(
      queue: Queue.StructStruct,
      theId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

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
  };

  populateTransaction: {
    allowed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    control(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    handleRaceLoot(
      payment: Payment.StructStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    id(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    participantsOf(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    payout(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    race(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    raceStart(
      queue: Queue.StructStruct,
      theId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
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
  };
}
