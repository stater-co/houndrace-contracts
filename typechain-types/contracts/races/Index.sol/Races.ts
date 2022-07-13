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

export declare namespace RacesConstructor {
  export type StructStruct = {
    randomness: PromiseOrValue<string>;
    arenas: PromiseOrValue<string>;
    hounds: PromiseOrValue<string>;
    methods: PromiseOrValue<string>;
    generator: PromiseOrValue<string>;
    payments: PromiseOrValue<string>;
    restricted: PromiseOrValue<string>;
    queues: PromiseOrValue<string>;
    allowedCallers: PromiseOrValue<string>[];
    raceFee: PromiseOrValue<BigNumberish>;
    callable: PromiseOrValue<boolean>;
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

export declare namespace Queue {
  export type StructStruct = {
    name: PromiseOrValue<string>;
    currency: PromiseOrValue<string>;
    participants: PromiseOrValue<BigNumberish>[];
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

export interface RacesInterface extends utils.Interface {
  functions: {
    "allowed(address)": FunctionFragment;
    "control()": FunctionFragment;
    "handleRaceLoot((address[],address[],address[],uint256[][],uint256[][],uint32[]))": FunctionFragment;
    "id()": FunctionFragment;
    "owner()": FunctionFragment;
    "participantsOf(uint256)": FunctionFragment;
    "payout(uint256)": FunctionFragment;
    "race(uint256)": FunctionFragment;
    "raceStart((string,address,uint256[],uint256,uint256,uint256,uint256,uint256,(address[],address[],address[],uint256[][],uint256[][],uint32[]),uint32,uint32,bool),uint256)": FunctionFragment;
    "races(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setGlobalParameters((address,address,address,address,address,address,address,address,address[],uint256,bool))": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "uploadRace(uint256,(string,address,uint256[],uint256,uint256,uint256,(address[],address[],address[],uint256[][],uint256[][],uint32[]),uint256,bytes))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "allowed"
      | "control"
      | "handleRaceLoot"
      | "id"
      | "owner"
      | "participantsOf"
      | "payout"
      | "race"
      | "raceStart"
      | "races"
      | "renounceOwnership"
      | "setGlobalParameters"
      | "transferOwnership"
      | "uploadRace"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "allowed",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "control", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "handleRaceLoot",
    values: [Payment.StructStruct]
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
    functionFragment: "race",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "raceStart",
    values: [Queue.StructStruct, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "races",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
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
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "uploadRace",
    values: [PromiseOrValue<BigNumberish>, Race.StructStruct]
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
  decodeFunctionResult(functionFragment: "uploadRace", data: BytesLike): Result;

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

export interface NewFinishedRaceEventObject {
  id: BigNumber;
  race: Race.StructStructOutput;
}
export type NewFinishedRaceEvent = TypedEvent<
  [BigNumber, Race.StructStructOutput],
  NewFinishedRaceEventObject
>;

export type NewFinishedRaceEventFilter = TypedEventFilter<NewFinishedRaceEvent>;

export interface NewRaceEventObject {
  id: BigNumber;
  race: Race.StructStructOutput;
}
export type NewRaceEvent = TypedEvent<
  [BigNumber, Race.StructStructOutput],
  NewRaceEventObject
>;

export type NewRaceEventFilter = TypedEventFilter<NewRaceEvent>;

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

export interface UploadRaceEventObject {
  id: BigNumber;
  race: Race.StructStructOutput;
}
export type UploadRaceEvent = TypedEvent<
  [BigNumber, Race.StructStructOutput],
  UploadRaceEventObject
>;

export type UploadRaceEventFilter = TypedEventFilter<UploadRaceEvent>;

export interface Races extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RacesInterface;

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
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

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

    race(
      theId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[Race.StructStructOutput]>;

    raceStart(
      queue: Queue.StructStruct,
      theId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    races(
      arg0: PromiseOrValue<BigNumberish>,
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
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setGlobalParameters(
      globalParameters: RacesConstructor.StructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    uploadRace(
      theId: PromiseOrValue<BigNumberish>,
      race: Race.StructStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  allowed(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

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
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

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

  race(
    theId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<Race.StructStructOutput>;

  raceStart(
    queue: Queue.StructStruct,
    theId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  races(
    arg0: PromiseOrValue<BigNumberish>,
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
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setGlobalParameters(
    globalParameters: RacesConstructor.StructStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  uploadRace(
    theId: PromiseOrValue<BigNumberish>,
    race: Race.StructStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allowed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

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
      theId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    payout(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    race(
      theId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<Race.StructStructOutput>;

    raceStart(
      queue: Queue.StructStruct,
      theId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    races(
      arg0: PromiseOrValue<BigNumberish>,
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
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    uploadRace(
      theId: PromiseOrValue<BigNumberish>,
      race: Race.StructStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "NewFinishedRace(uint256,tuple)"(
      id?: PromiseOrValue<BigNumberish> | null,
      race?: null
    ): NewFinishedRaceEventFilter;
    NewFinishedRace(
      id?: PromiseOrValue<BigNumberish> | null,
      race?: null
    ): NewFinishedRaceEventFilter;

    "NewRace(uint256,tuple)"(
      id?: PromiseOrValue<BigNumberish> | null,
      race?: null
    ): NewRaceEventFilter;
    NewRace(
      id?: PromiseOrValue<BigNumberish> | null,
      race?: null
    ): NewRaceEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "UploadRace(uint256,tuple)"(
      id?: PromiseOrValue<BigNumberish> | null,
      race?: null
    ): UploadRaceEventFilter;
    UploadRace(
      id?: PromiseOrValue<BigNumberish> | null,
      race?: null
    ): UploadRaceEventFilter;
  };

  estimateGas: {
    allowed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    control(overrides?: CallOverrides): Promise<BigNumber>;

    handleRaceLoot(
      payment: Payment.StructStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
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

    race(
      theId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    raceStart(
      queue: Queue.StructStruct,
      theId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    races(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setGlobalParameters(
      globalParameters: RacesConstructor.StructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    uploadRace(
      theId: PromiseOrValue<BigNumberish>,
      race: Race.StructStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    control(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    handleRaceLoot(
      payment: Payment.StructStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
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

    race(
      theId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    raceStart(
      queue: Queue.StructStruct,
      theId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    races(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setGlobalParameters(
      globalParameters: RacesConstructor.StructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    uploadRace(
      theId: PromiseOrValue<BigNumberish>,
      race: Race.StructStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
