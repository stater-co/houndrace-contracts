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

export declare namespace HoundStamina {
  export type StructStruct = {
    staminaLastUpdate: BigNumberish;
    staminaRefill1x: BigNumberish;
    staminaValue: BigNumberish;
    staminaPerTimeUnit: BigNumberish;
    staminaCap: BigNumberish;
  };

  export type StructStructOutput = [
    BigNumber,
    BigNumber,
    number,
    number,
    number
  ] & {
    staminaLastUpdate: BigNumber;
    staminaRefill1x: BigNumber;
    staminaValue: number;
    staminaPerTimeUnit: number;
    staminaCap: number;
  };
}

export declare namespace HoundBreeding {
  export type StructStruct = {
    breedingFeeCurrency: string;
    lastBreed: BigNumberish;
    breedingCooldown: BigNumberish;
    breedingFee: BigNumberish;
    breedingCooldownTimeUnit: BigNumberish;
    availableToBreed: boolean;
  };

  export type StructStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean
  ] & {
    breedingFeeCurrency: string;
    lastBreed: BigNumber;
    breedingCooldown: BigNumber;
    breedingFee: BigNumber;
    breedingCooldownTimeUnit: BigNumber;
    availableToBreed: boolean;
  };
}

export interface IGetStaminaBreedingInterface extends utils.Interface {
  contractName: "IGetStaminaBreeding";
  functions: {
    "getStaminaBreeding(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getStaminaBreeding",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getStaminaBreeding",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IGetStaminaBreeding extends BaseContract {
  contractName: "IGetStaminaBreeding";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IGetStaminaBreedingInterface;

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
    getStaminaBreeding(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [HoundStamina.StructStructOutput, HoundBreeding.StructStructOutput]
    >;
  };

  getStaminaBreeding(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [HoundStamina.StructStructOutput, HoundBreeding.StructStructOutput]
  >;

  callStatic: {
    getStaminaBreeding(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [HoundStamina.StructStructOutput, HoundBreeding.StructStructOutput]
    >;
  };

  filters: {};

  estimateGas: {
    getStaminaBreeding(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getStaminaBreeding(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
