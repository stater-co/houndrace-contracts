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

export declare namespace QueuesConstructor {
  export type StructStruct = {
    arenas: string;
    hounds: string;
    methods: string;
    payments: string;
    restricted: string;
    races: string;
    allowedCallers: string[];
  };

  export type StructStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    string[]
  ] & {
    arenas: string;
    hounds: string;
    methods: string;
    payments: string;
    restricted: string;
    races: string;
    allowedCallers: string[];
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

export declare namespace Queue {
  export type StructStruct = {
    name: string;
    currency: string;
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

export interface QueuesInterface extends utils.Interface {
  contractName: "Queues";
  functions: {
    "allowed(address)": FunctionFragment;
    "closeQueue(uint256)": FunctionFragment;
    "control()": FunctionFragment;
    "createQueues((string,address,uint256[],uint256[],uint256,uint256,uint256,uint256,uint256,(address[],address[],address[],uint256[][],uint256[][],uint32[]),uint32,uint32,bool)[])": FunctionFragment;
    "editQueue(uint256,(string,address,uint256[],uint256[],uint256,uint256,uint256,uint256,uint256,(address[],address[],address[],uint256[][],uint256[][],uint32[]),uint32,uint32,bool))": FunctionFragment;
    "enqueue(uint256,uint256)": FunctionFragment;
    "enqueueCost(uint256)": FunctionFragment;
    "id()": FunctionFragment;
    "owner()": FunctionFragment;
    "participantsOf(uint256)": FunctionFragment;
    "payout(uint256)": FunctionFragment;
    "queue(uint256)": FunctionFragment;
    "queues(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setGlobalParameters((address,address,address,address,address,address,address[]))": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unenqueue(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "allowed", values: [string]): string;
  encodeFunctionData(
    functionFragment: "closeQueue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "control", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createQueues",
    values: [Queue.StructStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "editQueue",
    values: [BigNumberish, Queue.StructStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "enqueue",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "enqueueCost",
    values: [BigNumberish]
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
  encodeFunctionData(functionFragment: "queue", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "queues",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setGlobalParameters",
    values: [QueuesConstructor.StructStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unenqueue",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "allowed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "closeQueue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "control", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createQueues",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "editQueue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "enqueue", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "enqueueCost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "id", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "participantsOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "payout", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "queue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "queues", data: BytesLike): Result;
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
  decodeFunctionResult(functionFragment: "unenqueue", data: BytesLike): Result;

  events: {
    "DeleteQueue(uint256)": EventFragment;
    "EditQueue(uint256,tuple)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "PlayerEnqueue(uint256,uint256,address)": EventFragment;
    "QueueClosed(uint256)": EventFragment;
    "QueuesCreation(uint256,uint256,tuple[])": EventFragment;
    "Unenqueue(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DeleteQueue"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EditQueue"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PlayerEnqueue"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "QueueClosed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "QueuesCreation"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unenqueue"): EventFragment;
}

export type DeleteQueueEvent = TypedEvent<[BigNumber], { id: BigNumber }>;

export type DeleteQueueEventFilter = TypedEventFilter<DeleteQueueEvent>;

export type EditQueueEvent = TypedEvent<
  [BigNumber, Queue.StructStructOutput],
  { id: BigNumber; queue: Queue.StructStructOutput }
>;

export type EditQueueEventFilter = TypedEventFilter<EditQueueEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type PlayerEnqueueEvent = TypedEvent<
  [BigNumber, BigNumber, string],
  { id: BigNumber; hound: BigNumber; player: string }
>;

export type PlayerEnqueueEventFilter = TypedEventFilter<PlayerEnqueueEvent>;

export type QueueClosedEvent = TypedEvent<[BigNumber], { id: BigNumber }>;

export type QueueClosedEventFilter = TypedEventFilter<QueueClosedEvent>;

export type QueuesCreationEvent = TypedEvent<
  [BigNumber, BigNumber, Queue.StructStructOutput[]],
  {
    idStart: BigNumber;
    idStop: BigNumber;
    newQueues: Queue.StructStructOutput[];
  }
>;

export type QueuesCreationEventFilter = TypedEventFilter<QueuesCreationEvent>;

export type UnenqueueEvent = TypedEvent<
  [BigNumber, BigNumber],
  { id: BigNumber; hound: BigNumber }
>;

export type UnenqueueEventFilter = TypedEventFilter<UnenqueueEvent>;

export interface Queues extends BaseContract {
  contractName: "Queues";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: QueuesInterface;

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

    closeQueue(
      theId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    control(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string, string] & {
        arenas: string;
        hounds: string;
        methods: string;
        payments: string;
        restricted: string;
        races: string;
      }
    >;

    createQueues(
      theQueues: Queue.StructStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    editQueue(
      theId: BigNumberish,
      queue: Queue.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    enqueue(
      theId: BigNumberish,
      hound: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    enqueueCost(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

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

    queue(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[Queue.StructStructOutput]>;

    queues(
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
        Payment.StructStructOutput,
        number,
        number,
        boolean
      ] & {
        name: string;
        currency: string;
        arena: BigNumber;
        entryFee: BigNumber;
        startDate: BigNumber;
        endDate: BigNumber;
        lastCompletion: BigNumber;
        payments: Payment.StructStructOutput;
        totalParticipants: number;
        cooldown: number;
        closed: boolean;
      }
    >;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGlobalParameters(
      globalParameters: QueuesConstructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unenqueue(
      theId: BigNumberish,
      hound: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  allowed(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  closeQueue(
    theId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  control(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, string, string] & {
      arenas: string;
      hounds: string;
      methods: string;
      payments: string;
      restricted: string;
      races: string;
    }
  >;

  createQueues(
    theQueues: Queue.StructStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  editQueue(
    theId: BigNumberish,
    queue: Queue.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  enqueue(
    theId: BigNumberish,
    hound: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  enqueueCost(
    theId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

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

  queue(
    theId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<Queue.StructStructOutput>;

  queues(
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
      Payment.StructStructOutput,
      number,
      number,
      boolean
    ] & {
      name: string;
      currency: string;
      arena: BigNumber;
      entryFee: BigNumber;
      startDate: BigNumber;
      endDate: BigNumber;
      lastCompletion: BigNumber;
      payments: Payment.StructStructOutput;
      totalParticipants: number;
      cooldown: number;
      closed: boolean;
    }
  >;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGlobalParameters(
    globalParameters: QueuesConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unenqueue(
    theId: BigNumberish,
    hound: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allowed(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    closeQueue(theId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    control(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string, string] & {
        arenas: string;
        hounds: string;
        methods: string;
        payments: string;
        restricted: string;
        races: string;
      }
    >;

    createQueues(
      theQueues: Queue.StructStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    editQueue(
      theId: BigNumberish,
      queue: Queue.StructStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    enqueue(
      theId: BigNumberish,
      hound: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    enqueueCost(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    id(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    participantsOf(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    payout(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    queue(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<Queue.StructStructOutput>;

    queues(
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
        Payment.StructStructOutput,
        number,
        number,
        boolean
      ] & {
        name: string;
        currency: string;
        arena: BigNumber;
        entryFee: BigNumber;
        startDate: BigNumber;
        endDate: BigNumber;
        lastCompletion: BigNumber;
        payments: Payment.StructStructOutput;
        totalParticipants: number;
        cooldown: number;
        closed: boolean;
      }
    >;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setGlobalParameters(
      globalParameters: QueuesConstructor.StructStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unenqueue(
      theId: BigNumberish,
      hound: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DeleteQueue(uint256)"(id?: BigNumberish | null): DeleteQueueEventFilter;
    DeleteQueue(id?: BigNumberish | null): DeleteQueueEventFilter;

    "EditQueue(uint256,tuple)"(
      id?: BigNumberish | null,
      queue?: null
    ): EditQueueEventFilter;
    EditQueue(id?: BigNumberish | null, queue?: null): EditQueueEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "PlayerEnqueue(uint256,uint256,address)"(
      id?: BigNumberish | null,
      hound?: BigNumberish | null,
      player?: string | null
    ): PlayerEnqueueEventFilter;
    PlayerEnqueue(
      id?: BigNumberish | null,
      hound?: BigNumberish | null,
      player?: string | null
    ): PlayerEnqueueEventFilter;

    "QueueClosed(uint256)"(id?: BigNumberish | null): QueueClosedEventFilter;
    QueueClosed(id?: BigNumberish | null): QueueClosedEventFilter;

    "QueuesCreation(uint256,uint256,tuple[])"(
      idStart?: BigNumberish | null,
      idStop?: BigNumberish | null,
      newQueues?: null
    ): QueuesCreationEventFilter;
    QueuesCreation(
      idStart?: BigNumberish | null,
      idStop?: BigNumberish | null,
      newQueues?: null
    ): QueuesCreationEventFilter;

    "Unenqueue(uint256,uint256)"(
      id?: BigNumberish | null,
      hound?: BigNumberish | null
    ): UnenqueueEventFilter;
    Unenqueue(
      id?: BigNumberish | null,
      hound?: BigNumberish | null
    ): UnenqueueEventFilter;
  };

  estimateGas: {
    allowed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    closeQueue(
      theId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    control(overrides?: CallOverrides): Promise<BigNumber>;

    createQueues(
      theQueues: Queue.StructStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    editQueue(
      theId: BigNumberish,
      queue: Queue.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    enqueue(
      theId: BigNumberish,
      hound: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    enqueueCost(
      theId: BigNumberish,
      overrides?: CallOverrides
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

    queue(theId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    queues(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGlobalParameters(
      globalParameters: QueuesConstructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unenqueue(
      theId: BigNumberish,
      hound: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    closeQueue(
      theId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    control(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createQueues(
      theQueues: Queue.StructStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    editQueue(
      theId: BigNumberish,
      queue: Queue.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    enqueue(
      theId: BigNumberish,
      hound: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    enqueueCost(
      theId: BigNumberish,
      overrides?: CallOverrides
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

    queue(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    queues(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGlobalParameters(
      globalParameters: QueuesConstructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unenqueue(
      theId: BigNumberish,
      hound: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
