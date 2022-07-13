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

export interface ISwapMutationInterface extends utils.Interface {
  functions: {
    "swapMutation(uint32[54],uint256)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "swapMutation"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "swapMutation",
    values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "swapMutation",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ISwapMutation extends BaseContract {
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
      geneticSequence: PromiseOrValue<BigNumberish>[],
      randomness: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number[]]>;
  };

  swapMutation(
    geneticSequence: PromiseOrValue<BigNumberish>[],
    randomness: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number[]>;

  callStatic: {
    swapMutation(
      geneticSequence: PromiseOrValue<BigNumberish>[],
      randomness: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number[]>;
  };

  filters: {};

  estimateGas: {
    swapMutation(
      geneticSequence: PromiseOrValue<BigNumberish>[],
      randomness: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    swapMutation(
      geneticSequence: PromiseOrValue<BigNumberish>[],
      randomness: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}