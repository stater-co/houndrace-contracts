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

export declare namespace Hound {
  export type StaminaStruct = {
    staminaRefillCurrency: string;
    staminaLastUpdate: BigNumberish;
    staminaRefill1x: BigNumberish;
    staminaValue: BigNumberish;
    staminaPerTimeUnit: BigNumberish;
    staminaCap: BigNumberish;
  };

  export type StaminaStructOutput = [
    string,
    BigNumber,
    BigNumber,
    number,
    number,
    number
  ] & {
    staminaRefillCurrency: string;
    staminaLastUpdate: BigNumber;
    staminaRefill1x: BigNumber;
    staminaValue: number;
    staminaPerTimeUnit: number;
    staminaCap: number;
  };

  export type BreedingStruct = {
    breedingFeeCurrency: string;
    breedingCooldownCurrency: string;
    lastBreed: BigNumberish;
    breedingCooldown: BigNumberish;
    breedingFee: BigNumberish;
    breedingCooldownTimeUnit: BigNumberish;
    refillBreedingCooldownCost: BigNumberish;
    availableToBreed: boolean;
  };

  export type BreedingStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean
  ] & {
    breedingFeeCurrency: string;
    breedingCooldownCurrency: string;
    lastBreed: BigNumber;
    breedingCooldown: BigNumber;
    breedingFee: BigNumber;
    breedingCooldownTimeUnit: BigNumber;
    refillBreedingCooldownCost: BigNumber;
    availableToBreed: boolean;
  };

  export type IdentityStruct = {
    maleParent: BigNumberish;
    femaleParent: BigNumberish;
    generation: BigNumberish;
    birthDate: BigNumberish;
    geneticSequence: BigNumberish[];
    extensionTraits: string;
    specie: BigNumberish;
  };

  export type IdentityStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number[],
    string,
    number
  ] & {
    maleParent: BigNumber;
    femaleParent: BigNumber;
    generation: BigNumber;
    birthDate: BigNumber;
    geneticSequence: number[];
    extensionTraits: string;
    specie: number;
  };

  export type ProfileStruct = {
    name: string;
    token_uri: string;
    runningOn: BigNumberish;
    custom: boolean;
  };

  export type ProfileStructOutput = [string, string, BigNumber, boolean] & {
    name: string;
    token_uri: string;
    runningOn: BigNumber;
    custom: boolean;
  };

  export type StructStruct = {
    stamina: Hound.StaminaStruct;
    breeding: Hound.BreedingStruct;
    identity: Hound.IdentityStruct;
    profile: Hound.ProfileStruct;
  };

  export type StructStructOutput = [
    Hound.StaminaStructOutput,
    Hound.BreedingStructOutput,
    Hound.IdentityStructOutput,
    Hound.ProfileStructOutput
  ] & {
    stamina: Hound.StaminaStructOutput;
    breeding: Hound.BreedingStructOutput;
    identity: Hound.IdentityStructOutput;
    profile: Hound.ProfileStructOutput;
  };
}

export interface IHoundInterface extends utils.Interface {
  contractName: "IHound";
  functions: {
    "hound(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "hound", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "hound", data: BytesLike): Result;

  events: {};
}

export interface IHound extends BaseContract {
  contractName: "IHound";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IHoundInterface;

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
    hound(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[Hound.StructStructOutput]>;
  };

  hound(
    theId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<Hound.StructStructOutput>;

  callStatic: {
    hound(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<Hound.StructStructOutput>;
  };

  filters: {};

  estimateGas: {
    hound(theId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    hound(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
