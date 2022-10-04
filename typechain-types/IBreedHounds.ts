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

export declare namespace HoundIdentity {
  export type StructStruct = {
    maleParent: BigNumberish;
    femaleParent: BigNumberish;
    generation: BigNumberish;
    birthDate: BigNumberish;
    geneticSequence: BigNumberish[];
    extensionTraits: string;
    specie: BigNumberish;
  };

  export type StructStructOutput = [
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
}

export interface IBreedHoundsInterface extends utils.Interface {
  contractName: "IBreedHounds";
  functions: {
    "breedHounds(uint256,(uint256,uint256,uint256,uint256,uint32[54],string,uint8),uint256,(uint256,uint256,uint256,uint256,uint32[54],string,uint8),uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "breedHounds",
    values: [
      BigNumberish,
      HoundIdentity.StructStruct,
      BigNumberish,
      HoundIdentity.StructStruct,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "breedHounds",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IBreedHounds extends BaseContract {
  contractName: "IBreedHounds";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBreedHoundsInterface;

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
    breedHounds(
      hound1Id: BigNumberish,
      hound1: HoundIdentity.StructStruct,
      hound2Id: BigNumberish,
      hound2: HoundIdentity.StructStruct,
      onId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  breedHounds(
    hound1Id: BigNumberish,
    hound1: HoundIdentity.StructStruct,
    hound2Id: BigNumberish,
    hound2: HoundIdentity.StructStruct,
    onId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    breedHounds(
      hound1Id: BigNumberish,
      hound1: HoundIdentity.StructStruct,
      hound2Id: BigNumberish,
      hound2: HoundIdentity.StructStruct,
      onId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    breedHounds(
      hound1Id: BigNumberish,
      hound1: HoundIdentity.StructStruct,
      hound2Id: BigNumberish,
      hound2: HoundIdentity.StructStruct,
      onId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    breedHounds(
      hound1Id: BigNumberish,
      hound1: HoundIdentity.StructStruct,
      hound2Id: BigNumberish,
      hound2: HoundIdentity.StructStruct,
      onId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
