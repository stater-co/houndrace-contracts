/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
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
  };

  export type StructStructOutput = [
    string,
    string,
    string,
    BigNumber[],
    BigNumber[],
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    name: string;
    feeCurrency: string;
    entryFeeCurrency: string;
    participants: BigNumber[];
    enqueueDates: BigNumber[];
    arena: BigNumber;
    entryFee: BigNumber;
    fee: BigNumber;
  };
}

export declare namespace Queue {
  export type StructStruct = {
    core: Core.StructStruct;
    speciesAllowed: BigNumberish[];
    startDate: BigNumberish;
    endDate: BigNumberish;
    lastCompletion: BigNumberish;
    totalParticipants: BigNumberish;
    cooldown: BigNumberish;
    staminaCost: BigNumberish;
    closed: boolean;
  };

  export type StructStructOutput = [
    Core.StructStructOutput,
    BigNumber[],
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    number,
    number,
    boolean
  ] & {
    core: Core.StructStructOutput;
    speciesAllowed: BigNumber[];
    startDate: BigNumber;
    endDate: BigNumber;
    lastCompletion: BigNumber;
    totalParticipants: number;
    cooldown: number;
    staminaCost: number;
    closed: boolean;
  };
}

export interface IQueueInterface extends utils.Interface {
  contractName: "IQueue";
  functions: {
    "queue(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "queue", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "queue", data: BytesLike): Result;

  events: {};
}

export interface IQueue extends BaseContract {
  contractName: "IQueue";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IQueueInterface;

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
    queue(
      queueId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[Queue.StructStructOutput]>;
  };

  queue(
    queueId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<Queue.StructStructOutput>;

  callStatic: {
    queue(
      queueId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<Queue.StructStructOutput>;
  };

  filters: {};

  estimateGas: {
    queue(queueId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    queue(
      queueId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
