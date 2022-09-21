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

export declare namespace GeneratorConstructor {
  export type StructStruct = {
    randomness: string;
    arenas: string;
    hounds: string;
    allowed: string;
    methods: string;
    payments: string;
    zerocost: string;
    incubator: string;
    gamification: string;
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
    string
  ] & {
    randomness: string;
    arenas: string;
    hounds: string;
    allowed: string;
    methods: string;
    payments: string;
    zerocost: string;
    incubator: string;
    gamification: string;
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

export declare namespace Queue {
  export type StructStruct = {
    core: Core.StructStruct;
    startDate: BigNumberish;
    endDate: BigNumberish;
    lastCompletion: BigNumberish;
    totalParticipants: BigNumberish;
    cooldown: BigNumberish;
    staminaCost: BigNumberish;
    speciesAllowed: BigNumberish[];
    closed: boolean;
  };

  export type StructStructOutput = [
    Core.StructStructOutput,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    number,
    number,
    number[],
    boolean
  ] & {
    core: Core.StructStructOutput;
    startDate: BigNumber;
    endDate: BigNumber;
    lastCompletion: BigNumber;
    totalParticipants: number;
    cooldown: number;
    staminaCost: number;
    speciesAllowed: number[];
    closed: boolean;
  };
}

export declare namespace Race {
  export type StructStruct = {
    core: Core.StructStruct;
    randomness: BigNumberish;
    queueId: BigNumberish;
    seed: BytesLike;
  };

  export type StructStructOutput = [
    Core.StructStructOutput,
    BigNumber,
    BigNumber,
    string
  ] & {
    core: Core.StructStructOutput;
    randomness: BigNumber;
    queueId: BigNumber;
    seed: string;
  };
}

export interface GeneratorInterface extends utils.Interface {
  contractName: "Generator";
  functions: {
    "control()": FunctionFragment;
    "generate(((string,address,address,uint256[],uint256[],uint256,uint256,uint256,(address[],address[],address[],uint256[][],uint256[][],uint8[])),uint256,uint256,uint256,uint32,uint32,uint32,uint8[],bool),uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setGlobalParameters((address,address,address,address,address,address,address,address,address))": FunctionFragment;
    "simulateClassicRace(uint256[],uint256,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "control", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "generate",
    values: [Queue.StructStruct, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setGlobalParameters",
    values: [GeneratorConstructor.StructStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "simulateClassicRace",
    values: [BigNumberish[], BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "control", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "generate", data: BytesLike): Result;
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
    functionFragment: "simulateClassicRace",
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

export interface Generator extends BaseContract {
  contractName: "Generator";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GeneratorInterface;

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
      [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ] & {
        randomness: string;
        arenas: string;
        hounds: string;
        allowed: string;
        methods: string;
        payments: string;
        zerocost: string;
        incubator: string;
        gamification: string;
      }
    >;

    generate(
      queue: Queue.StructStruct,
      queueId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGlobalParameters(
      globalParameters: GeneratorConstructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    simulateClassicRace(
      participants: BigNumberish[],
      terrain: BigNumberish,
      theRandomness: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[], BigNumber[]]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  control(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, string, string, string, string, string] & {
      randomness: string;
      arenas: string;
      hounds: string;
      allowed: string;
      methods: string;
      payments: string;
      zerocost: string;
      incubator: string;
      gamification: string;
    }
  >;

  generate(
    queue: Queue.StructStruct,
    queueId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGlobalParameters(
    globalParameters: GeneratorConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  simulateClassicRace(
    participants: BigNumberish[],
    terrain: BigNumberish,
    theRandomness: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber[], BigNumber[]]>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
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
        string
      ] & {
        randomness: string;
        arenas: string;
        hounds: string;
        allowed: string;
        methods: string;
        payments: string;
        zerocost: string;
        incubator: string;
        gamification: string;
      }
    >;

    generate(
      queue: Queue.StructStruct,
      queueId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<Race.StructStructOutput>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setGlobalParameters(
      globalParameters: GeneratorConstructor.StructStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    simulateClassicRace(
      participants: BigNumberish[],
      terrain: BigNumberish,
      theRandomness: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[], BigNumber[]]>;

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
    control(overrides?: CallOverrides): Promise<BigNumber>;

    generate(
      queue: Queue.StructStruct,
      queueId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGlobalParameters(
      globalParameters: GeneratorConstructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    simulateClassicRace(
      participants: BigNumberish[],
      terrain: BigNumberish,
      theRandomness: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    control(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    generate(
      queue: Queue.StructStruct,
      queueId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGlobalParameters(
      globalParameters: GeneratorConstructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    simulateClassicRace(
      participants: BigNumberish[],
      terrain: BigNumberish,
      theRandomness: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
