/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export declare namespace GeneratorConstructor {
  export type StructStruct = {
    randomness: PromiseOrValue<string>;
    arenas: PromiseOrValue<string>;
    hounds: PromiseOrValue<string>;
    allowed: PromiseOrValue<string>;
    methods: PromiseOrValue<string>;
    payments: PromiseOrValue<string>;
    zerocost: PromiseOrValue<string>;
  };

  export type StructStructOutput = [
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
  };
}

export declare namespace Payment {
  export type StructStruct = {
    from: PromiseOrValue<string>[];
    to: PromiseOrValue<string>[];
    currency: PromiseOrValue<string>[];
    ids: PromiseOrValue<BigNumberish>[][];
    amounts: PromiseOrValue<BigNumberish>[][];
    paymentType: PromiseOrValue<BigNumberish>[];
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

export declare namespace Queue {
  export type StructStruct = {
    name: PromiseOrValue<string>;
    currency: PromiseOrValue<string>;
    participants: PromiseOrValue<BigNumberish>[];
    enqueueDates: PromiseOrValue<BigNumberish>[];
    arena: PromiseOrValue<BigNumberish>;
    entryFee: PromiseOrValue<BigNumberish>;
    startDate: PromiseOrValue<BigNumberish>;
    endDate: PromiseOrValue<BigNumberish>;
    lastCompletion: PromiseOrValue<BigNumberish>;
    payments: Payment.StructStruct;
    totalParticipants: PromiseOrValue<BigNumberish>;
    cooldown: PromiseOrValue<BigNumberish>;
    closed: PromiseOrValue<boolean>;
  };

  export type StructStructOutput = [
    string,
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
    currency: string;
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

export declare namespace Race {
  export type StructStruct = {
    name: PromiseOrValue<string>;
    currency: PromiseOrValue<string>;
    participants: PromiseOrValue<BigNumberish>[];
    arena: PromiseOrValue<BigNumberish>;
    entryFee: PromiseOrValue<BigNumberish>;
    randomness: PromiseOrValue<BigNumberish>;
    payments: Payment.StructStruct;
    queueId: PromiseOrValue<BigNumberish>;
    seed: PromiseOrValue<BytesLike>;
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

export interface GeneratorInterface extends utils.Interface {
  functions: {
    "control()": FunctionFragment;
    "generate((string,address,uint256[],uint256[],uint256,uint256,uint256,uint256,uint256,(address[],address[],address[],uint256[][],uint256[][],uint32[]),uint32,uint32,bool),uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setGlobalParameters((address,address,address,address,address,address,address))": FunctionFragment;
    "simulateClassicRace(uint256[],uint256,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "control"
      | "generate"
      | "owner"
      | "renounceOwnership"
      | "setGlobalParameters"
      | "simulateClassicRace"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "control", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "generate",
    values: [Queue.StructStruct, PromiseOrValue<BigNumberish>]
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
    values: [
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
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

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Generator extends BaseContract {
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
      [string, string, string, string, string, string, string] & {
        randomness: string;
        arenas: string;
        hounds: string;
        allowed: string;
        methods: string;
        payments: string;
        zerocost: string;
      }
    >;

    generate(
      queue: Queue.StructStruct,
      queueId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setGlobalParameters(
      globalParameters: GeneratorConstructor.StructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    simulateClassicRace(
      participants: PromiseOrValue<BigNumberish>[],
      terrain: PromiseOrValue<BigNumberish>,
      theRandomness: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[], BigNumber[]]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  control(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, string, string, string] & {
      randomness: string;
      arenas: string;
      hounds: string;
      allowed: string;
      methods: string;
      payments: string;
      zerocost: string;
    }
  >;

  generate(
    queue: Queue.StructStruct,
    queueId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setGlobalParameters(
    globalParameters: GeneratorConstructor.StructStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  simulateClassicRace(
    participants: PromiseOrValue<BigNumberish>[],
    terrain: PromiseOrValue<BigNumberish>,
    theRandomness: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber[], BigNumber[]]>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    control(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string, string, string] & {
        randomness: string;
        arenas: string;
        hounds: string;
        allowed: string;
        methods: string;
        payments: string;
        zerocost: string;
      }
    >;

    generate(
      queue: Queue.StructStruct,
      queueId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<Race.StructStructOutput>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setGlobalParameters(
      globalParameters: GeneratorConstructor.StructStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    simulateClassicRace(
      participants: PromiseOrValue<BigNumberish>[],
      terrain: PromiseOrValue<BigNumberish>,
      theRandomness: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[], BigNumber[]]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    control(overrides?: CallOverrides): Promise<BigNumber>;

    generate(
      queue: Queue.StructStruct,
      queueId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setGlobalParameters(
      globalParameters: GeneratorConstructor.StructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    simulateClassicRace(
      participants: PromiseOrValue<BigNumberish>[],
      terrain: PromiseOrValue<BigNumberish>,
      theRandomness: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    control(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    generate(
      queue: Queue.StructStruct,
      queueId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setGlobalParameters(
      globalParameters: GeneratorConstructor.StructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    simulateClassicRace(
      participants: PromiseOrValue<BigNumberish>[],
      terrain: PromiseOrValue<BigNumberish>,
      theRandomness: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
