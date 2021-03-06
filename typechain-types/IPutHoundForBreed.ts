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

export interface IPutHoundForBreedInterface extends utils.Interface {
  contractName: "IPutHoundForBreed";
  functions: {
    "putHoundForBreed(uint256,uint256,bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "putHoundForBreed",
    values: [BigNumberish, BigNumberish, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "putHoundForBreed",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IPutHoundForBreed extends BaseContract {
  contractName: "IPutHoundForBreed";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IPutHoundForBreedInterface;

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
    putHoundForBreed(
      theId: BigNumberish,
      fee: BigNumberish,
      status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  putHoundForBreed(
    theId: BigNumberish,
    fee: BigNumberish,
    status: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    putHoundForBreed(
      theId: BigNumberish,
      fee: BigNumberish,
      status: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    putHoundForBreed(
      theId: BigNumberish,
      fee: BigNumberish,
      status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    putHoundForBreed(
      theId: BigNumberish,
      fee: BigNumberish,
      status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
