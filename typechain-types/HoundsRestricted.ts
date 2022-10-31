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
    specie: BigNumberish;
    geneticSequence: BigNumberish[];
    extensionTraits: string;
  };

  export type IdentityStructOutput = [
    BigNumber,
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
    specie: BigNumber;
    geneticSequence: number[];
    extensionTraits: string;
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

export declare namespace ConstructorBoilerplate {
  export type StructStruct = {
    restricted: string;
    minter: string;
    houndsModifier: string;
    zerocost: string;
    hounds: string;
    payments: string;
    shop: string;
    races: string;
    genetics: string;
    alphadune: string;
  };

  export type StructStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ] & {
    restricted: string;
    minter: string;
    houndsModifier: string;
    zerocost: string;
    hounds: string;
    payments: string;
    shop: string;
    races: string;
    genetics: string;
    alphadune: string;
  };
}

export declare namespace ConstructorFees {
  export type StructStruct = {
    currency: string;
    breedCostCurrency: string;
    breedFeeCurrency: string;
    breedCost: BigNumberish;
    breedFee: BigNumberish;
  };

  export type StructStructOutput = [
    string,
    string,
    string,
    BigNumber,
    BigNumber
  ] & {
    currency: string;
    breedCostCurrency: string;
    breedFeeCurrency: string;
    breedCost: BigNumber;
    breedFee: BigNumber;
  };
}

export declare namespace Constructor {
  export type StructStruct = {
    name: string;
    symbol: string;
    defaultHound: Hound.StructStruct;
    operators: string[];
    targets: BytesLike[][];
    boilerplate: ConstructorBoilerplate.StructStruct;
    fees: ConstructorFees.StructStruct;
  };

  export type StructStructOutput = [
    string,
    string,
    Hound.StructStructOutput,
    string[],
    string[][],
    ConstructorBoilerplate.StructStructOutput,
    ConstructorFees.StructStructOutput
  ] & {
    name: string;
    symbol: string;
    defaultHound: Hound.StructStructOutput;
    operators: string[];
    targets: string[][];
    boilerplate: ConstructorBoilerplate.StructStructOutput;
    fees: ConstructorFees.StructStructOutput;
  };
}

export interface HoundsRestrictedInterface extends utils.Interface {
  contractName: "HoundsRestricted";
  functions: {
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "control()": FunctionFragment;
    "getApproved(uint256)": FunctionFragment;
    "hound(uint256)": FunctionFragment;
    "houndOwner(uint256)": FunctionFragment;
    "hounds(uint256)": FunctionFragment;
    "id()": FunctionFragment;
    "initializeHound(uint256,address,((address,uint256,uint256,uint32,uint32,uint32),(address,address,uint256,uint256,uint256,uint256,uint256,bool),(uint256,uint256,uint256,uint256,uint256,uint32[72],string),(string,string,uint256,bool)))": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "matingSeason()": FunctionFragment;
    "name()": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "safeTransferFrom(address,address,uint256)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "setGlobalParameters((string,string,((address,uint256,uint256,uint32,uint32,uint32),(address,address,uint256,uint256,uint256,uint256,uint256,bool),(uint256,uint256,uint256,uint256,uint256,uint32[72],string),(string,string,uint256,bool)),address[],bytes4[][],(address,address,address,address,address,address,address,address,address,address),(address,address,address,uint256,uint256)))": FunctionFragment;
    "setMatingSeason(bool)": FunctionFragment;
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
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "control", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "hound", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "houndOwner",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hounds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "id", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initializeHound",
    values: [BigNumberish, string, Hound.StructStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "matingSeason",
    values?: undefined
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
    values: [Constructor.StructStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setMatingSeason",
    values: [boolean]
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
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "control", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hound", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "houndOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hounds", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "id", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeHound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "matingSeason",
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
    functionFragment: "setMatingSeason",
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
    "BreedHound(uint256,uint256,uint256,tuple,address)": EventFragment;
    "HoundBreedable(uint256,uint256,bool)": EventFragment;
    "HoundBreedingStatusUpdate(uint256,bool)": EventFragment;
    "HoundQueueStatusUpdate(uint256,uint256)": EventFragment;
    "HoundStaminaUpdate(uint256,uint32)": EventFragment;
    "NewHound(uint256,address,tuple)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BreedHound"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "HoundBreedable"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "HoundBreedingStatusUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "HoundQueueStatusUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "HoundStaminaUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewHound"): EventFragment;
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

export type BreedHoundEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, Hound.StructStructOutput, string],
  {
    parent1: BigNumber;
    parent2: BigNumber;
    id: BigNumber;
    offspring: Hound.StructStructOutput;
    owner: string;
  }
>;

export type BreedHoundEventFilter = TypedEventFilter<BreedHoundEvent>;

export type HoundBreedableEvent = TypedEvent<
  [BigNumber, BigNumber, boolean],
  { id: BigNumber; price: BigNumber; status: boolean }
>;

export type HoundBreedableEventFilter = TypedEventFilter<HoundBreedableEvent>;

export type HoundBreedingStatusUpdateEvent = TypedEvent<
  [BigNumber, boolean],
  { id: BigNumber; status: boolean }
>;

export type HoundBreedingStatusUpdateEventFilter =
  TypedEventFilter<HoundBreedingStatusUpdateEvent>;

export type HoundQueueStatusUpdateEvent = TypedEvent<
  [BigNumber, BigNumber],
  { id: BigNumber; queueId: BigNumber }
>;

export type HoundQueueStatusUpdateEventFilter =
  TypedEventFilter<HoundQueueStatusUpdateEvent>;

export type HoundStaminaUpdateEvent = TypedEvent<
  [BigNumber, number],
  { id: BigNumber; stamina: number }
>;

export type HoundStaminaUpdateEventFilter =
  TypedEventFilter<HoundStaminaUpdateEvent>;

export type NewHoundEvent = TypedEvent<
  [BigNumber, string, Hound.StructStructOutput],
  { id: BigNumber; owner: string; hound: Hound.StructStructOutput }
>;

export type NewHoundEventFilter = TypedEventFilter<NewHoundEvent>;

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

export interface HoundsRestricted extends BaseContract {
  contractName: "HoundsRestricted";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HoundsRestrictedInterface;

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

    balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    control(
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        Hound.StructStructOutput,
        ConstructorBoilerplate.StructStructOutput,
        ConstructorFees.StructStructOutput
      ] & {
        name: string;
        symbol: string;
        defaultHound: Hound.StructStructOutput;
        boilerplate: ConstructorBoilerplate.StructStructOutput;
        fees: ConstructorFees.StructStructOutput;
      }
    >;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    hound(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[Hound.StructStructOutput]>;

    houndOwner(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    hounds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        Hound.StaminaStructOutput,
        Hound.BreedingStructOutput,
        Hound.IdentityStructOutput,
        Hound.ProfileStructOutput
      ] & {
        stamina: Hound.StaminaStructOutput;
        breeding: Hound.BreedingStructOutput;
        identity: Hound.IdentityStructOutput;
        profile: Hound.ProfileStructOutput;
      }
    >;

    id(overrides?: CallOverrides): Promise<[BigNumber]>;

    initializeHound(
      onId: BigNumberish,
      owner: string,
      theHound: Hound.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    matingSeason(overrides?: CallOverrides): Promise<[boolean]>;

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
      globalParameters: Constructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMatingSeason(
      _matingSeason: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    tokenURI(
      _tokenId: BigNumberish,
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

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  control(
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      Hound.StructStructOutput,
      ConstructorBoilerplate.StructStructOutput,
      ConstructorFees.StructStructOutput
    ] & {
      name: string;
      symbol: string;
      defaultHound: Hound.StructStructOutput;
      boilerplate: ConstructorBoilerplate.StructStructOutput;
      fees: ConstructorFees.StructStructOutput;
    }
  >;

  getApproved(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  hound(
    theId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<Hound.StructStructOutput>;

  houndOwner(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  hounds(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      Hound.StaminaStructOutput,
      Hound.BreedingStructOutput,
      Hound.IdentityStructOutput,
      Hound.ProfileStructOutput
    ] & {
      stamina: Hound.StaminaStructOutput;
      breeding: Hound.BreedingStructOutput;
      identity: Hound.IdentityStructOutput;
      profile: Hound.ProfileStructOutput;
    }
  >;

  id(overrides?: CallOverrides): Promise<BigNumber>;

  initializeHound(
    onId: BigNumberish,
    owner: string,
    theHound: Hound.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isApprovedForAll(
    owner: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  matingSeason(overrides?: CallOverrides): Promise<boolean>;

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
    globalParameters: Constructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMatingSeason(
    _matingSeason: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  symbol(overrides?: CallOverrides): Promise<string>;

  tokenURI(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

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

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    control(
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        Hound.StructStructOutput,
        ConstructorBoilerplate.StructStructOutput,
        ConstructorFees.StructStructOutput
      ] & {
        name: string;
        symbol: string;
        defaultHound: Hound.StructStructOutput;
        boilerplate: ConstructorBoilerplate.StructStructOutput;
        fees: ConstructorFees.StructStructOutput;
      }
    >;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    hound(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<Hound.StructStructOutput>;

    houndOwner(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    hounds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        Hound.StaminaStructOutput,
        Hound.BreedingStructOutput,
        Hound.IdentityStructOutput,
        Hound.ProfileStructOutput
      ] & {
        stamina: Hound.StaminaStructOutput;
        breeding: Hound.BreedingStructOutput;
        identity: Hound.IdentityStructOutput;
        profile: Hound.ProfileStructOutput;
      }
    >;

    id(overrides?: CallOverrides): Promise<BigNumber>;

    initializeHound(
      onId: BigNumberish,
      owner: string,
      theHound: Hound.StructStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    matingSeason(overrides?: CallOverrides): Promise<boolean>;

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
      globalParameters: Constructor.StructStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    setMatingSeason(
      _matingSeason: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    symbol(overrides?: CallOverrides): Promise<string>;

    tokenURI(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

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

    "BreedHound(uint256,uint256,uint256,tuple,address)"(
      parent1?: null,
      parent2?: null,
      id?: BigNumberish | null,
      offspring?: null,
      owner?: string | null
    ): BreedHoundEventFilter;
    BreedHound(
      parent1?: null,
      parent2?: null,
      id?: BigNumberish | null,
      offspring?: null,
      owner?: string | null
    ): BreedHoundEventFilter;

    "HoundBreedable(uint256,uint256,bool)"(
      id?: BigNumberish | null,
      price?: null,
      status?: null
    ): HoundBreedableEventFilter;
    HoundBreedable(
      id?: BigNumberish | null,
      price?: null,
      status?: null
    ): HoundBreedableEventFilter;

    "HoundBreedingStatusUpdate(uint256,bool)"(
      id?: BigNumberish | null,
      status?: null
    ): HoundBreedingStatusUpdateEventFilter;
    HoundBreedingStatusUpdate(
      id?: BigNumberish | null,
      status?: null
    ): HoundBreedingStatusUpdateEventFilter;

    "HoundQueueStatusUpdate(uint256,uint256)"(
      id?: BigNumberish | null,
      queueId?: BigNumberish | null
    ): HoundQueueStatusUpdateEventFilter;
    HoundQueueStatusUpdate(
      id?: BigNumberish | null,
      queueId?: BigNumberish | null
    ): HoundQueueStatusUpdateEventFilter;

    "HoundStaminaUpdate(uint256,uint32)"(
      id?: BigNumberish | null,
      stamina?: null
    ): HoundStaminaUpdateEventFilter;
    HoundStaminaUpdate(
      id?: BigNumberish | null,
      stamina?: null
    ): HoundStaminaUpdateEventFilter;

    "NewHound(uint256,address,tuple)"(
      id?: BigNumberish | null,
      owner?: string | null,
      hound?: null
    ): NewHoundEventFilter;
    NewHound(
      id?: BigNumberish | null,
      owner?: string | null,
      hound?: null
    ): NewHoundEventFilter;

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

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    control(overrides?: CallOverrides): Promise<BigNumber>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hound(theId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    houndOwner(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hounds(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    id(overrides?: CallOverrides): Promise<BigNumber>;

    initializeHound(
      onId: BigNumberish,
      owner: string,
      theHound: Hound.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    matingSeason(overrides?: CallOverrides): Promise<BigNumber>;

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
      globalParameters: Constructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMatingSeason(
      _matingSeason: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    tokenURI(
      _tokenId: BigNumberish,
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

    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    control(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hound(
      theId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    houndOwner(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hounds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    id(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initializeHound(
      onId: BigNumberish,
      owner: string,
      theHound: Hound.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    matingSeason(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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
      globalParameters: Constructor.StructStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMatingSeason(
      _matingSeason: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenURI(
      _tokenId: BigNumberish,
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
