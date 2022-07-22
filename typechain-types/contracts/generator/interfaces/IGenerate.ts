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

export interface IGenerateInterface extends utils.Interface {
  functions: {
    "generate((string,address,uint256[],uint256[],uint256,uint256,uint256,uint256,uint256,(address[],address[],address[],uint256[][],uint256[][],uint32[]),uint32,uint32,bool),uint256)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "generate"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "generate",
    values: [Queue.StructStruct, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "generate", data: BytesLike): Result;

  events: {};
}

export interface IGenerate extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IGenerateInterface;

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
    generate(
      queue: Queue.StructStruct,
      queueId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[Race.StructStructOutput]>;
  };

  generate(
    queue: Queue.StructStruct,
    queueId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<Race.StructStructOutput>;

  callStatic: {
    generate(
      queue: Queue.StructStruct,
      queueId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<Race.StructStructOutput>;
  };

  filters: {};

  estimateGas: {
    generate(
      queue: Queue.StructStruct,
      queueId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    generate(
      queue: Queue.StructStruct,
      queueId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
