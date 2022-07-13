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
  PayableOverrides,
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
} from "../../../common";

export declare namespace Payment {
  export type StructStruct = {
    from: PromiseOrValue<string>[];
    to: PromiseOrValue<string>[];
    currency: PromiseOrValue<string>[];
    ids: PromiseOrValue<BigNumberish>[][];
    amounts: PromiseOrValue<BigNumberish>[][];
    paymentType: PromiseOrValue<BigNumberish>[];
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

export interface IHandleRaceLootInterface extends utils.Interface {
  functions: {
    "handleRaceLoot((address[],address[],address[],uint256[][],uint256[][],uint32[]))": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "handleRaceLoot"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "handleRaceLoot",
    values: [Payment.StructStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "handleRaceLoot",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IHandleRaceLoot extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IHandleRaceLootInterface;

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
    handleRaceLoot(
      payment: Payment.StructStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  handleRaceLoot(
    payment: Payment.StructStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    handleRaceLoot(
      payment: Payment.StructStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    handleRaceLoot(
      payment: Payment.StructStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    handleRaceLoot(
      payment: Payment.StructStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
