/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export declare namespace ShopConstructor {
  export type StructStruct = {
    methods: PromiseOrValue<string>;
    restricted: PromiseOrValue<string>;
  };

  export type StructStructOutput = [string, string] & {
    methods: string;
    restricted: string;
  };
}

export declare namespace Discount {
  export type StructStruct = {
    tokenContract: PromiseOrValue<string>;
    tokenIds: PromiseOrValue<BigNumberish>[];
    dateStart: PromiseOrValue<BigNumberish>;
    dateStop: PromiseOrValue<BigNumberish>;
    discount: PromiseOrValue<BigNumberish>;
    tokenType: PromiseOrValue<BigNumberish>;
    usable: PromiseOrValue<boolean>;
  };

  export type StructStructOutput = [
    string,
    BigNumber[],
    BigNumber,
    BigNumber,
    number,
    number,
    boolean
  ] & {
    tokenContract: string;
    tokenIds: BigNumber[];
    dateStart: BigNumber;
    dateStop: BigNumber;
    discount: number;
    tokenType: number;
    usable: boolean;
  };
}

export interface ShopMethodsInterface extends utils.Interface {
  functions: {
    "calculateDiscount(address)": FunctionFragment;
    "control()": FunctionFragment;
    "id()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setGlobalParameters((address,address))": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "calculateDiscount"
      | "control"
      | "id"
      | "owner"
      | "renounceOwnership"
      | "setGlobalParameters"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "calculateDiscount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "control", values?: undefined): string;
  encodeFunctionData(functionFragment: "id", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setGlobalParameters",
    values: [ShopConstructor.StructStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "calculateDiscount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "control", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "id", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGlobalParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "NewDiscount(uint256,tuple)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewDiscount"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface NewDiscountEventObject {
  id: BigNumber;
  discount: Discount.StructStructOutput;
}
export type NewDiscountEvent = TypedEvent<
  [BigNumber, Discount.StructStructOutput],
  NewDiscountEventObject
>;

export type NewDiscountEventFilter = TypedEventFilter<NewDiscountEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface ShopMethods extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ShopMethodsInterface;

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
    calculateDiscount(
      requester: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    control(
      overrides?: CallOverrides
    ): Promise<[string, string] & { methods: string; restricted: string }>;

    id(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setGlobalParameters(
      globalParameters: ShopConstructor.StructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  calculateDiscount(
    requester: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  control(
    overrides?: CallOverrides
  ): Promise<[string, string] & { methods: string; restricted: string }>;

  id(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setGlobalParameters(
    globalParameters: ShopConstructor.StructStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    calculateDiscount(
      requester: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    control(
      overrides?: CallOverrides
    ): Promise<[string, string] & { methods: string; restricted: string }>;

    id(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setGlobalParameters(
      globalParameters: ShopConstructor.StructStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "NewDiscount(uint256,tuple)"(
      id?: PromiseOrValue<BigNumberish> | null,
      discount?: null
    ): NewDiscountEventFilter;
    NewDiscount(
      id?: PromiseOrValue<BigNumberish> | null,
      discount?: null
    ): NewDiscountEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    calculateDiscount(
      requester: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    control(overrides?: CallOverrides): Promise<BigNumber>;

    id(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setGlobalParameters(
      globalParameters: ShopConstructor.StructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calculateDiscount(
      requester: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    control(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    id(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setGlobalParameters(
      globalParameters: ShopConstructor.StructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
