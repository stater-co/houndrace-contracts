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

export declare namespace Arena {
  export type StructStruct = {
    name: string;
    token_uri: string;
    currency: string;
    fee: BigNumberish;
    surface: BigNumberish;
    distance: BigNumberish;
    weather: BigNumberish;
  };

  export type StructStructOutput = [
    string,
    string,
    string,
    BigNumber,
    number,
    number,
    number
  ] & {
    name: string;
    token_uri: string;
    currency: string;
    fee: BigNumber;
    surface: number;
    distance: number;
    weather: number;
  };
}

export interface ICreateArenaInterface extends utils.Interface {
  contractName: "ICreateArena";
  functions: {
    "createArena((string,string,address,uint256,uint32,uint32,uint32))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createArena",
    values: [Arena.StructStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "createArena",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ICreateArena extends BaseContract {
  contractName: "ICreateArena";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ICreateArenaInterface;

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
    createArena(
      arena: Arena.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  createArena(
    arena: Arena.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createArena(
      arena: Arena.StructStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    createArena(
      arena: Arena.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createArena(
      arena: Arena.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
