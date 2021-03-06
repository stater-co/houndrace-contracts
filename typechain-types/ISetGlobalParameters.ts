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

export declare namespace ArenasConstructor {
  export type StructStruct = {
    name: string;
    symbol: string;
    restricted: string;
    methods: string;
    payments: string;
    alphadune: string;
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
    name: string;
    symbol: string;
    restricted: string;
    methods: string;
    payments: string;
    alphadune: string;
    allowedCallers: string[];
  };
}

export interface ISetGlobalParametersInterface extends utils.Interface {
  contractName: "ISetGlobalParameters";
  functions: {
    "setGlobalParameters((string,string,address,address,address,address,address[]))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "setGlobalParameters",
    values: [ArenasConstructor.StructStruct]
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
      globalParameters: ArenasConstructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  setGlobalParameters(
    globalParameters: ArenasConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    setGlobalParameters(
      globalParameters: ArenasConstructor.StructStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    setGlobalParameters(
      globalParameters: ArenasConstructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    setGlobalParameters(
      globalParameters: ArenasConstructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
