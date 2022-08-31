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
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

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
    closed: boolean;
  };

  export type StructStructOutput = [
    Core.StructStructOutput,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    number,
    boolean
  ] & {
    core: Core.StructStructOutput;
    startDate: BigNumber;
    endDate: BigNumber;
    lastCompletion: BigNumber;
    totalParticipants: number;
    cooldown: number;
    closed: boolean;
  };
}

export interface ICreateQueuesInterface extends utils.Interface {
  contractName: "ICreateQueues";
  functions: {
    "createQueues(((string,address,address,uint256[],uint256[],uint256,uint256,uint256,(address[],address[],address[],uint256[][],uint256[][],uint32[])),uint256,uint256,uint256,uint32,uint32,bool)[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createQueues",
    values: [Queue.StructStruct[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "createQueues",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ICreateQueues extends BaseContract {
  contractName: "ICreateQueues";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ICreateQueuesInterface;

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
    createQueues(
      theQueues: Queue.StructStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  createQueues(
    theQueues: Queue.StructStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createQueues(
      theQueues: Queue.StructStruct[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    createQueues(
      theQueues: Queue.StructStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createQueues(
      theQueues: Queue.StructStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
