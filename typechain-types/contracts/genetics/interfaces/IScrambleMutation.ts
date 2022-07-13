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

export interface IScrambleMutationInterface extends utils.Interface {
  functions: {
    "scrambleMutation(uint32[54],uint256)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "scrambleMutation"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "scrambleMutation",
    values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "scrambleMutation",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IScrambleMutation extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IScrambleMutationInterface;

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
    scrambleMutation(
      geneticSequence: PromiseOrValue<BigNumberish>[],
      randomness: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number[]]>;
  };

  scrambleMutation(
    geneticSequence: PromiseOrValue<BigNumberish>[],
    randomness: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number[]>;

  callStatic: {
    scrambleMutation(
      geneticSequence: PromiseOrValue<BigNumberish>[],
      randomness: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number[]>;
  };

  filters: {};

  estimateGas: {
    scrambleMutation(
      geneticSequence: PromiseOrValue<BigNumberish>[],
      randomness: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    scrambleMutation(
      geneticSequence: PromiseOrValue<BigNumberish>[],
      randomness: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}