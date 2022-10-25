/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
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

export declare namespace QueuesConstructor {
  export type StructStruct = {
    operators: string[];
    methods: string;
    restricted: string;
    queues: string;
    zerocost: string;
    arenas: string;
    hounds: string;
    payments: string;
    races: string;
    targets: BytesLike[];
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
    string,
    string[]
  ] & {
    operators: string[];
    methods: string;
    restricted: string;
    queues: string;
    zerocost: string;
    arenas: string;
    hounds: string;
    payments: string;
    races: string;
    targets: string[];
  };
}

export interface ISetGlobalParametersInterface extends utils.Interface {
  contractName: "ISetGlobalParameters";
  functions: {
    "setGlobalParameters((address[],address,address,address,address,address,address,address,address,bytes4[]))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "setGlobalParameters",
    values: [QueuesConstructor.StructStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "setGlobalParameters",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ISetGlobalParameters extends BaseContract {
  contractName: "ISetGlobalParameters";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISetGlobalParametersInterface;

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
    setGlobalParameters(
      input: QueuesConstructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  setGlobalParameters(
    input: QueuesConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    setGlobalParameters(
      input: QueuesConstructor.StructStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    setGlobalParameters(
      input: QueuesConstructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    setGlobalParameters(
      input: QueuesConstructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
