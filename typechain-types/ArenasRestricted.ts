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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export declare namespace ArenasConstructor {
  export type StructStruct = {
    name: string;
    symbol: string;
    operators: string[];
    restricted: string;
    methods: string;
    payments: string;
    alphadune: string;
    targets: BytesLike[][];
    alphadunePercentage: BigNumberish;
  };

  export type StructStructOutput = [
    string,
    string,
    string[],
    string,
    string,
    string,
    string,
    string[][],
    BigNumber
  ] & {
    name: string;
    symbol: string;
    operators: string[];
    restricted: string;
    methods: string;
    payments: string;
    alphadune: string;
    targets: string[][];
    alphadunePercentage: BigNumber;
  };
}

export declare namespace Arena {
  export type StructStruct = {
    name: string;
    token_uri: string;
    platformAndArenaFeeCurrency: string;
    platformAndArenaFee: BigNumberish;
    surface: BigNumberish;
    distance: BigNumberish;
    weather: BigNumberish;
  };

  export type StructStructOutput = [
    string,
    string,
    string,
    BigNumber,
    number,
    number,
    number
  ] & {
    name: string;
    token_uri: string;
    platformAndArenaFeeCurrency: string;
    platformAndArenaFee: BigNumber;
    surface: number;
    distance: number;
    weather: number;
  };
}

export interface ArenasRestrictedInterface extends utils.Interface {
  contractName: "ArenasRestricted";
  functions: {
    "approve(address,uint256)": FunctionFragment;
    "arena(uint256)": FunctionFragment;
    "arenaOwner(uint256)": FunctionFragment;
    "arenas(uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "control()": FunctionFragment;
    "createArena((string,string,address,uint256,uint32,uint32,uint32))": FunctionFragment;
    "editArena(uint256,(string,string,address,uint256,uint32,uint32,uint32))": FunctionFragment;
    "getApproved(uint256)": FunctionFragment;
    "id()": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "name()": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "platformAndArenaFee(uint256)": FunctionFragment;
    "platformAndArenaFeeCurrency(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "safeTransferFrom(address,address,uint256)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "setGlobalParameters((string,string,address[],address,address,address,address,bytes4[][],uint256))": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "symbol()": FunctionFragment;
    "tokenURI(uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "whitelists(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "arena", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "arenaOwner",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "arenas",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "control", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createArena",
    values: [Arena.StructStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "editArena",
    values: [BigNumberish, Arena.StructStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "id", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "platformAndArenaFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "platformAndArenaFeeCurrency",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setGlobalParameters",
    values: [ArenasConstructor.StructStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelists",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "arena", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "arenaOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "arenas", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "control", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createArena",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "editArena", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "id", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "platformAndArenaFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "platformAndArenaFeeCurrency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGlobalParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "whitelists", data: BytesLike): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
    "EditArena(uint256,address,tuple)": EventFragment;
    "NewArena(uint256,address,tuple)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EditArena"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewArena"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  { owner: string; approved: string; tokenId: BigNumber }
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  { owner: string; operator: string; approved: boolean }
>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export type EditArenaEvent = TypedEvent<
  [BigNumber, string, Arena.StructStructOutput],
  { id: BigNumber; owner: string; arena: Arena.StructStructOutput }
>;

export type EditArenaEventFilter = TypedEventFilter<EditArenaEvent>;

export type NewArenaEvent = TypedEvent<
  [BigNumber, string, Arena.StructStructOutput],
  { id: BigNumber; owner: string; arena: Arena.StructStructOutput }
>;

export type NewArenaEventFilter = TypedEventFilter<NewArenaEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  { from: string; to: string; tokenId: BigNumber }
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface ArenasRestricted extends BaseContract {
  contractName: "ArenasRestricted";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ArenasRestrictedInterface;

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
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    arena(
      arenaId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[Arena.StructStructOutput]>;

    arenaOwner(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    arenas(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, number, number, number] & {
        name: string;
        token_uri: string;
        platformAndArenaFeeCurrency: string;
        platformAndArenaFee: BigNumber;
        surface: number;
        distance: number;
        weather: number;
      }
    >;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    control(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string, string, BigNumber] & {
        name: string;
        symbol: string;
        restricted: string;
        methods: string;
        payments: string;
        alphadune: string;
        alphadunePercentage: BigNumber;
      }
    >;

    createArena(
      arena: Arena.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    editArena(
      arenaId: BigNumberish,
      arena: Arena.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    id(overrides?: CallOverrides): Promise<[BigNumber]>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    platformAndArenaFee(
      arenaId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    platformAndArenaFeeCurrency(
      arenaId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGlobalParameters(
      globalParameters: ArenasConstructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    whitelists(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  approve(
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  arena(
    arenaId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<Arena.StructStructOutput>;

  arenaOwner(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  arenas(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber, number, number, number] & {
      name: string;
      token_uri: string;
      platformAndArenaFeeCurrency: string;
      platformAndArenaFee: BigNumber;
      surface: number;
      distance: number;
      weather: number;
    }
  >;

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  control(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, string, string, BigNumber] & {
      name: string;
      symbol: string;
      restricted: string;
      methods: string;
      payments: string;
      alphadune: string;
      alphadunePercentage: BigNumber;
    }
  >;

  createArena(
    arena: Arena.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  editArena(
    arenaId: BigNumberish,
    arena: Arena.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getApproved(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  id(overrides?: CallOverrides): Promise<BigNumber>;

  isApprovedForAll(
    owner: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  name(overrides?: CallOverrides): Promise<string>;

  onERC721Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  platformAndArenaFee(
    arenaId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  platformAndArenaFeeCurrency(
    arenaId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256,bytes)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGlobalParameters(
    globalParameters: ArenasConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  symbol(overrides?: CallOverrides): Promise<string>;

  tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  whitelists(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    arena(
      arenaId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<Arena.StructStructOutput>;

    arenaOwner(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    arenas(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, number, number, number] & {
        name: string;
        token_uri: string;
        platformAndArenaFeeCurrency: string;
        platformAndArenaFee: BigNumber;
        surface: number;
        distance: number;
        weather: number;
      }
    >;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    control(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string, string, BigNumber] & {
        name: string;
        symbol: string;
        restricted: string;
        methods: string;
        payments: string;
        alphadune: string;
        alphadunePercentage: BigNumber;
      }
    >;

    createArena(
      arena: Arena.StructStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    editArena(
      arenaId: BigNumberish,
      arena: Arena.StructStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    id(overrides?: CallOverrides): Promise<BigNumber>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    name(overrides?: CallOverrides): Promise<string>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    platformAndArenaFee(
      arenaId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    platformAndArenaFeeCurrency(
      arenaId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setGlobalParameters(
      globalParameters: ArenasConstructor.StructStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    symbol(overrides?: CallOverrides): Promise<string>;

    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    whitelists(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null
    ): ApprovalEventFilter;

    "ApprovalForAll(address,address,bool)"(
      owner?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      owner?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;

    "EditArena(uint256,address,tuple)"(
      id?: BigNumberish | null,
      owner?: string | null,
      arena?: null
    ): EditArenaEventFilter;
    EditArena(
      id?: BigNumberish | null,
      owner?: string | null,
      arena?: null
    ): EditArenaEventFilter;

    "NewArena(uint256,address,tuple)"(
      id?: BigNumberish | null,
      owner?: string | null,
      arena?: null
    ): NewArenaEventFilter;
    NewArena(
      id?: BigNumberish | null,
      owner?: string | null,
      arena?: null
    ): NewArenaEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null
    ): TransferEventFilter;
    Transfer(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null
    ): TransferEventFilter;
  };

  estimateGas: {
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    arena(arenaId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    arenaOwner(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    arenas(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    control(overrides?: CallOverrides): Promise<BigNumber>;

    createArena(
      arena: Arena.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    editArena(
      arenaId: BigNumberish,
      arena: Arena.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    id(overrides?: CallOverrides): Promise<BigNumber>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    platformAndArenaFee(
      arenaId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    platformAndArenaFeeCurrency(
      arenaId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGlobalParameters(
      globalParameters: ArenasConstructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    whitelists(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    arena(
      arenaId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    arenaOwner(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    arenas(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    control(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createArena(
      arena: Arena.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    editArena(
      arenaId: BigNumberish,
      arena: Arena.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    id(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    platformAndArenaFee(
      arenaId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    platformAndArenaFeeCurrency(
      arenaId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGlobalParameters(
      globalParameters: ArenasConstructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    whitelists(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
