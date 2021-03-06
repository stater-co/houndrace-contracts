/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
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

export interface GeyserInterface extends utils.Interface {
  contractName: "Geyser";
  functions: {
    "totalStakedFor(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "totalStakedFor",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "totalStakedFor",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Geyser extends BaseContract {
  contractName: "Geyser";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GeyserInterface;

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
    totalStakedFor(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  totalStakedFor(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    totalStakedFor(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    totalStakedFor(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    totalStakedFor(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
