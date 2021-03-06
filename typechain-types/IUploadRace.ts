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
  PayableOverrides,
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

export declare namespace Payment {
  export type StructStruct = {
    from: string[];
    to: string[];
    currency: string[];
    ids: BigNumberish[][];
    amounts: BigNumberish[][];
    paymentType: BigNumberish[];
  };

  export type StructStructOutput = [
    string[],
    string[],
    string[],
    BigNumber[][],
    BigNumber[][],
    number[]
  ] & {
    from: string[];
    to: string[];
    currency: string[];
    ids: BigNumber[][];
    amounts: BigNumber[][];
    paymentType: number[];
  };
}

export declare namespace Race {
  export type StructStruct = {
    name: string;
    currency: string;
    participants: BigNumberish[];
    arena: BigNumberish;
    entryFee: BigNumberish;
    randomness: BigNumberish;
    payments: Payment.StructStruct;
    queueId: BigNumberish;
    seed: BytesLike;
  };

  export type StructStructOutput = [
    string,
    string,
    BigNumber[],
    BigNumber,
    BigNumber,
    BigNumber,
    Payment.StructStructOutput,
    BigNumber,
    string
  ] & {
    name: string;
    currency: string;
    participants: BigNumber[];
    arena: BigNumber;
    entryFee: BigNumber;
    randomness: BigNumber;
    payments: Payment.StructStructOutput;
    queueId: BigNumber;
    seed: string;
  };
}

export interface IUploadRaceInterface extends utils.Interface {
  contractName: "IUploadRace";
  functions: {
    "uploadRace(uint256,(string,address,uint256[],uint256,uint256,uint256,(address[],address[],address[],uint256[][],uint256[][],uint32[]),uint256,bytes))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "uploadRace",
    values: [BigNumberish, Race.StructStruct]
  ): string;

  decodeFunctionResult(functionFragment: "uploadRace", data: BytesLike): Result;

  events: {};
}

export interface IUploadRace extends BaseContract {
  contractName: "IUploadRace";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IUploadRaceInterface;

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
    uploadRace(
      theId: BigNumberish,
      race: Race.StructStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  uploadRace(
    theId: BigNumberish,
    race: Race.StructStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    uploadRace(
      theId: BigNumberish,
      race: Race.StructStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    uploadRace(
      theId: BigNumberish,
      race: Race.StructStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    uploadRace(
      theId: BigNumberish,
      race: Race.StructStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
