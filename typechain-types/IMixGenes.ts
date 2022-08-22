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

export interface IMixGenesInterface extends utils.Interface {
  contractName: "IMixGenes";
  functions: {
    "mixGenes(uint32[54],uint32[54],uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "mixGenes",
    values: [BigNumberish[], BigNumberish[], BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "mixGenes", data: BytesLike): Result;

  events: {};
}

export interface IMixGenes extends BaseContract {
  contractName: "IMixGenes";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IMixGenesInterface;

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
    mixGenes(
      geneticSequence1: BigNumberish[],
      geneticSequence2: BigNumberish[],
      randomness: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number[]]>;
  };

  mixGenes(
    geneticSequence1: BigNumberish[],
    geneticSequence2: BigNumberish[],
    randomness: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number[]>;

  callStatic: {
    mixGenes(
      geneticSequence1: BigNumberish[],
      geneticSequence2: BigNumberish[],
      randomness: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number[]>;
  };

  filters: {};

  estimateGas: {
    mixGenes(
      geneticSequence1: BigNumberish[],
      geneticSequence2: BigNumberish[],
      randomness: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    mixGenes(
      geneticSequence1: BigNumberish[],
      geneticSequence2: BigNumberish[],
      randomness: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
