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

export interface IPayInterface extends utils.Interface {
  contractName: "IPay";
  functions: {
    "pay(address,address,address,uint256[],uint256[],uint32)": FunctionFragment;
  };

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

  decodeFunctionResult(functionFragment: "pay", data: BytesLike): Result;

  events: {};
}

export interface IPay extends BaseContract {
  contractName: "IPay";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IPayInterface;

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
    pay(
      from: string,
      to: string,
      currency: string,
      id: BigNumberish[],
      amount: BigNumberish[],
      paymentType: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  pay(
    from: string,
    to: string,
    currency: string,
    id: BigNumberish[],
    amount: BigNumberish[],
    paymentType: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    pay(
      from: string,
      to: string,
      currency: string,
      id: BigNumberish[],
      amount: BigNumberish[],
      paymentType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    pay(
      from: string,
      to: string,
      currency: string,
      id: BigNumberish[],
      amount: BigNumberish[],
      paymentType: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    pay(
      from: string,
      to: string,
      currency: string,
      id: BigNumberish[],
      amount: BigNumberish[],
      paymentType: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
