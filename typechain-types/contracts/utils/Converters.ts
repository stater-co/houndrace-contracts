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
} from "../../common";

export interface ConvertersInterface extends utils.Interface {
  functions: {
    "erc721IdsToOwners(address,uint256[])": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "erc721IdsToOwners"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "erc721IdsToOwners",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "erc721IdsToOwners",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Converters extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ConvertersInterface;

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
    erc721IdsToOwners(
      erc721Contract: PromiseOrValue<string>,
      ids: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[string[]]>;
  };

  erc721IdsToOwners(
    erc721Contract: PromiseOrValue<string>,
    ids: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<string[]>;

  callStatic: {
    erc721IdsToOwners(
      erc721Contract: PromiseOrValue<string>,
      ids: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<string[]>;
  };

  filters: {};

  estimateGas: {
    erc721IdsToOwners(
      erc721Contract: PromiseOrValue<string>,
      ids: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    erc721IdsToOwners(
      erc721Contract: PromiseOrValue<string>,
      ids: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}