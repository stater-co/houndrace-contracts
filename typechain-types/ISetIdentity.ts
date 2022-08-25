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
  };

  export type StructStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number[],
    string
  ] & {
    maleParent: BigNumber;
    femaleParent: BigNumber;
    generation: BigNumber;
    birthDate: BigNumber;
    geneticSequence: number[];
    extensionTraits: string;
  };
}

export interface ISetIdentityInterface extends utils.Interface {
  contractName: "ISetIdentity";
  functions: {
    "setIdentity(uint256,(uint256,uint256,uint256,uint256,uint32[54],string))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "setIdentity",
    values: [BigNumberish, HoundIdentity.StructStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "setIdentity",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ISetIdentity extends BaseContract {
  contractName: "ISetIdentity";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISetIdentityInterface;

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
    setIdentity(
      theId: BigNumberish,
      identity: HoundIdentity.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  setIdentity(
    theId: BigNumberish,
    identity: HoundIdentity.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    setIdentity(
      theId: BigNumberish,
      identity: HoundIdentity.StructStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    setIdentity(
      theId: BigNumberish,
      identity: HoundIdentity.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    setIdentity(
      theId: BigNumberish,
      identity: HoundIdentity.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}