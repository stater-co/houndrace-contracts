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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export declare namespace PaymentsConstructor {
  export type StructStruct = {
    alphadune: string;
    restricted: string;
    methods: string;
  };

  export type StructStructOutput = [string, string, string] & {
    alphadune: string;
    restricted: string;
    methods: string;
  };
}

export interface PaymentsInterface extends utils.Interface {
  contractName: "Payments";
  functions: {
    "alphaduneReservoirs(uint8,address,uint256)": FunctionFragment;
    "control()": FunctionFragment;
    "fillRewardsReservoir(address,uint256[],uint256[],uint8)": FunctionFragment;
    "owner()": FunctionFragment;
    "pay(address,address,address,uint256[],uint256[],uint8)": FunctionFragment;
    "payout(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rewardsReservoirs(uint8,address,uint256)": FunctionFragment;
    "setGlobalParameters((address,address,address))": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "alphaduneReservoirs",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "control", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fillRewardsReservoir",
    values: [string, BigNumberish[], BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pay",
    values: [
      string,
      string,
      string,
      BigNumberish[],
      BigNumberish[],
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "payout",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardsReservoirs",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setGlobalParameters",
    values: [PaymentsConstructor.StructStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "alphaduneReservoirs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "control", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fillRewardsReservoir",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pay", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payout", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardsReservoirs",
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
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Payments extends BaseContract {
  contractName: "Payments";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PaymentsInterface;

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
    alphaduneReservoirs(
      arg0: BigNumberish,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    control(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        alphadune: string;
        restricted: string;
        methods: string;
      }
    >;

    fillRewardsReservoir(
      currency: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      paymentType: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pay(
      from: string,
      to: string,
      currency: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      paymentType: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    payout(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rewardsReservoirs(
      arg0: BigNumberish,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setGlobalParameters(
      globalParameters: PaymentsConstructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  alphaduneReservoirs(
    arg0: BigNumberish,
    arg1: string,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  control(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string] & {
      alphadune: string;
      restricted: string;
      methods: string;
    }
  >;

  fillRewardsReservoir(
    currency: string,
    ids: BigNumberish[],
    amounts: BigNumberish[],
    paymentType: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  pay(
    from: string,
    to: string,
    currency: string,
    ids: BigNumberish[],
    amounts: BigNumberish[],
    paymentType: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  payout(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rewardsReservoirs(
    arg0: BigNumberish,
    arg1: string,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setGlobalParameters(
    globalParameters: PaymentsConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    alphaduneReservoirs(
      arg0: BigNumberish,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    control(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        alphadune: string;
        restricted: string;
        methods: string;
      }
    >;

    fillRewardsReservoir(
      currency: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      paymentType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    pay(
      from: string,
      to: string,
      currency: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      paymentType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    payout(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rewardsReservoirs(
      arg0: BigNumberish,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setGlobalParameters(
      globalParameters: PaymentsConstructor.StructStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    alphaduneReservoirs(
      arg0: BigNumberish,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    control(overrides?: CallOverrides): Promise<BigNumber>;

    fillRewardsReservoir(
      currency: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      paymentType: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pay(
      from: string,
      to: string,
      currency: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      paymentType: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    payout(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rewardsReservoirs(
      arg0: BigNumberish,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setGlobalParameters(
      globalParameters: PaymentsConstructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    alphaduneReservoirs(
      arg0: BigNumberish,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    control(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fillRewardsReservoir(
      currency: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      paymentType: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pay(
      from: string,
      to: string,
      currency: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      paymentType: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    payout(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rewardsReservoirs(
      arg0: BigNumberish,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setGlobalParameters(
      globalParameters: PaymentsConstructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
