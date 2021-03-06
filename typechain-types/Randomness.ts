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

export interface RandomnessInterface extends utils.Interface {
  contractName: "Randomness";
  functions: {
    "getRandomNumber(bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getRandomNumber",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getRandomNumber",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Randomness extends BaseContract {
  contractName: "Randomness";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RandomnessInterface;

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
    getRandomNumber(
      input: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  getRandomNumber(
    input: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    getRandomNumber(
      input: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getRandomNumber(
      input: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getRandomNumber(
      input: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
