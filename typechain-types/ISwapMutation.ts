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

export interface ISwapMutationInterface extends utils.Interface {
  contractName: "ISwapMutation";
  functions: {
    "swapMutation(uint32[54],uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "swapMutation",
    values: [BigNumberish[], BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "swapMutation",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ISwapMutation extends BaseContract {
  contractName: "ISwapMutation";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISwapMutationInterface;

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
    swapMutation(
      geneticSequence: BigNumberish[],
      randomness: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number[]]>;
  };

  swapMutation(
    geneticSequence: BigNumberish[],
    randomness: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number[]>;

  callStatic: {
    swapMutation(
      geneticSequence: BigNumberish[],
      randomness: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number[]>;
  };

  filters: {};

  estimateGas: {
    swapMutation(
      geneticSequence: BigNumberish[],
      randomness: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    swapMutation(
      geneticSequence: BigNumberish[],
      randomness: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}