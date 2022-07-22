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
  PayableOverrides,
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

export declare namespace QueuesConstructor {
  export type StructStruct = {
    arenas: PromiseOrValue<string>;
    hounds: PromiseOrValue<string>;
    methods: PromiseOrValue<string>;
    payments: PromiseOrValue<string>;
    restricted: PromiseOrValue<string>;
    races: PromiseOrValue<string>;
    allowedCallers: PromiseOrValue<string>[];
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

export interface QueuesInterface extends utils.Interface {
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

  getFunction(
    nameOrSignatureOrTopic:
      | "allowed"
      | "closeQueue"
      | "control"
      | "createQueues"
      | "editQueue"
      | "enqueue"
      | "enqueueCost"
      | "id"
      | "owner"
      | "participantsOf"
      | "payout"
      | "queue"
      | "queues"
      | "renounceOwnership"
      | "setGlobalParameters"
      | "transferOwnership"
      | "unenqueue"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "allowed",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "closeQueue",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "control", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createQueues",
    values: [Queue.StructStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "editQueue",
    values: [PromiseOrValue<BigNumberish>, Queue.StructStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "enqueue",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "enqueueCost",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "id", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "participantsOf",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "payout",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "queue",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "queues",
    values: [PromiseOrValue<BigNumberish>]
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
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "unenqueue",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
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

export interface DeleteQueueEventObject {
  id: BigNumber;
}
export type DeleteQueueEvent = TypedEvent<[BigNumber], DeleteQueueEventObject>;

export type DeleteQueueEventFilter = TypedEventFilter<DeleteQueueEvent>;

export interface EditQueueEventObject {
  id: BigNumber;
  queue: Queue.StructStructOutput;
}
export type EditQueueEvent = TypedEvent<
  [BigNumber, Queue.StructStructOutput],
  EditQueueEventObject
>;

export type EditQueueEventFilter = TypedEventFilter<EditQueueEvent>;

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

export interface PlayerEnqueueEventObject {
  id: BigNumber;
  hound: BigNumber;
  player: string;
}
export type PlayerEnqueueEvent = TypedEvent<
  [BigNumber, BigNumber, string],
  PlayerEnqueueEventObject
>;

export type PlayerEnqueueEventFilter = TypedEventFilter<PlayerEnqueueEvent>;

export interface QueueClosedEventObject {
  id: BigNumber;
}
export type QueueClosedEvent = TypedEvent<[BigNumber], QueueClosedEventObject>;

export type QueueClosedEventFilter = TypedEventFilter<QueueClosedEvent>;

export interface QueuesCreationEventObject {
  idStart: BigNumber;
  idStop: BigNumber;
  newQueues: Queue.StructStructOutput[];
}
export type QueuesCreationEvent = TypedEvent<
  [BigNumber, BigNumber, Queue.StructStructOutput[]],
  QueuesCreationEventObject
>;

export type QueuesCreationEventFilter = TypedEventFilter<QueuesCreationEvent>;

export interface UnenqueueEventObject {
  id: BigNumber;
  hound: BigNumber;
}
export type UnenqueueEvent = TypedEvent<
  [BigNumber, BigNumber],
  UnenqueueEventObject
>;

export type UnenqueueEventFilter = TypedEventFilter<UnenqueueEvent>;

export interface Queues extends BaseContract {
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
    allowed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    closeQueue(
      theId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
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
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    editQueue(
      theId: PromiseOrValue<BigNumberish>,
      queue: Queue.StructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    enqueue(
      theId: PromiseOrValue<BigNumberish>,
      hound: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    enqueueCost(
      theId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    id(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    participantsOf(
      theId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    payout(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    queue(
      theId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[Queue.StructStructOutput]>;

    queues(
      arg0: PromiseOrValue<BigNumberish>,
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
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setGlobalParameters(
      globalParameters: QueuesConstructor.StructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unenqueue(
      theId: PromiseOrValue<BigNumberish>,
      hound: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  allowed(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  closeQueue(
    theId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
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
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  editQueue(
    theId: PromiseOrValue<BigNumberish>,
    queue: Queue.StructStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  enqueue(
    theId: PromiseOrValue<BigNumberish>,
    hound: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  enqueueCost(
    theId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  id(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  participantsOf(
    theId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  payout(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  queue(
    theId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<Queue.StructStructOutput>;

  queues(
    arg0: PromiseOrValue<BigNumberish>,
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
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setGlobalParameters(
    globalParameters: QueuesConstructor.StructStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unenqueue(
    theId: PromiseOrValue<BigNumberish>,
    hound: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allowed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    closeQueue(
      theId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

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
      theId: PromiseOrValue<BigNumberish>,
      queue: Queue.StructStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    enqueue(
      theId: PromiseOrValue<BigNumberish>,
      hound: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    enqueueCost(
      theId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    id(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    participantsOf(
      theId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    payout(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    queue(
      theId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<Queue.StructStructOutput>;

    queues(
      arg0: PromiseOrValue<BigNumberish>,
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
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unenqueue(
      theId: PromiseOrValue<BigNumberish>,
      hound: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DeleteQueue(uint256)"(
      id?: PromiseOrValue<BigNumberish> | null
    ): DeleteQueueEventFilter;
    DeleteQueue(
      id?: PromiseOrValue<BigNumberish> | null
    ): DeleteQueueEventFilter;

    "EditQueue(uint256,tuple)"(
      id?: PromiseOrValue<BigNumberish> | null,
      queue?: null
    ): EditQueueEventFilter;
    EditQueue(
      id?: PromiseOrValue<BigNumberish> | null,
      queue?: null
    ): EditQueueEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "PlayerEnqueue(uint256,uint256,address)"(
      id?: PromiseOrValue<BigNumberish> | null,
      hound?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null
    ): PlayerEnqueueEventFilter;
    PlayerEnqueue(
      id?: PromiseOrValue<BigNumberish> | null,
      hound?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null
    ): PlayerEnqueueEventFilter;

    "QueueClosed(uint256)"(
      id?: PromiseOrValue<BigNumberish> | null
    ): QueueClosedEventFilter;
    QueueClosed(
      id?: PromiseOrValue<BigNumberish> | null
    ): QueueClosedEventFilter;

    "QueuesCreation(uint256,uint256,tuple[])"(
      idStart?: PromiseOrValue<BigNumberish> | null,
      idStop?: PromiseOrValue<BigNumberish> | null,
      newQueues?: null
    ): QueuesCreationEventFilter;
    QueuesCreation(
      idStart?: PromiseOrValue<BigNumberish> | null,
      idStop?: PromiseOrValue<BigNumberish> | null,
      newQueues?: null
    ): QueuesCreationEventFilter;

    "Unenqueue(uint256,uint256)"(
      id?: PromiseOrValue<BigNumberish> | null,
      hound?: PromiseOrValue<BigNumberish> | null
    ): UnenqueueEventFilter;
    Unenqueue(
      id?: PromiseOrValue<BigNumberish> | null,
      hound?: PromiseOrValue<BigNumberish> | null
    ): UnenqueueEventFilter;
  };

  estimateGas: {
    allowed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    closeQueue(
      theId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    control(overrides?: CallOverrides): Promise<BigNumber>;

    createQueues(
      theQueues: Queue.StructStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    editQueue(
      theId: PromiseOrValue<BigNumberish>,
      queue: Queue.StructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    enqueue(
      theId: PromiseOrValue<BigNumberish>,
      hound: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    enqueueCost(
      theId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    id(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    participantsOf(
      theId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    payout(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    queue(
      theId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    queues(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setGlobalParameters(
      globalParameters: QueuesConstructor.StructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unenqueue(
      theId: PromiseOrValue<BigNumberish>,
      hound: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    closeQueue(
      theId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    control(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createQueues(
      theQueues: Queue.StructStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    editQueue(
      theId: PromiseOrValue<BigNumberish>,
      queue: Queue.StructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    enqueue(
      theId: PromiseOrValue<BigNumberish>,
      hound: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    enqueueCost(
      theId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    id(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    participantsOf(
      theId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    payout(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    queue(
      theId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    queues(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setGlobalParameters(
      globalParameters: QueuesConstructor.StructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unenqueue(
      theId: PromiseOrValue<BigNumberish>,
      hound: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
