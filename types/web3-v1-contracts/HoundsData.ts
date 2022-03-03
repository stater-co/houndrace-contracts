/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type Approval = ContractEventLog<{
  owner: string;
  approved: string;
  tokenId: string;
  0: string;
  1: string;
  2: string;
}>;
export type ApprovalForAll = ContractEventLog<{
  owner: string;
  operator: string;
  approved: boolean;
  0: string;
  1: string;
  2: boolean;
}>;
export type BreedHound = ContractEventLog<{
  id: string;
  owner: string;
  hound: [
    [string, string, string, string],
    [string, string, string, string, string],
    [string, string, string, boolean],
    [string, string, string, string, string[]],
    string,
    string,
    boolean,
    boolean
  ];
  0: string;
  1: string;
  2: [
    [string, string, string, string],
    [string, string, string, string, string],
    [string, string, string, boolean],
    [string, string, string, string, string[]],
    string,
    string,
    boolean,
    boolean
  ];
}>;
export type HoundBreedable = ContractEventLog<{
  id: string;
  price: string;
  0: string;
  1: string;
}>;
export type HoundBreedingStatusUpdate = ContractEventLog<{
  id: string;
  status: boolean;
  0: string;
  1: boolean;
}>;
export type HoundNameChanded = ContractEventLog<{
  id: string;
  name: string;
  0: string;
  1: string;
}>;
export type HoundStaminaUpdate = ContractEventLog<{
  id: string;
  stamina: string;
  0: string;
  1: string;
}>;
export type NewHound = ContractEventLog<{
  id: string;
  owner: string;
  hound: [
    [string, string, string, string],
    [string, string, string, string, string],
    [string, string, string, boolean],
    [string, string, string, string, string[]],
    string,
    string,
    boolean,
    boolean
  ];
  0: string;
  1: string;
  2: [
    [string, string, string, string],
    [string, string, string, string, string],
    [string, string, string, boolean],
    [string, string, string, string, string[]],
    string,
    string,
    boolean,
    boolean
  ];
}>;
export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;
export type Transfer = ContractEventLog<{
  from: string;
  to: string;
  tokenId: string;
  0: string;
  1: string;
  2: string;
}>;

export interface HoundsData extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): HoundsData;
  clone(): HoundsData;
  methods: {
    adminCreateHound(
      theHound: [
        [
          number | string | BN,
          number | string | BN,
          number | string | BN,
          number | string | BN
        ],
        [
          number | string | BN,
          number | string | BN,
          number | string | BN,
          number | string | BN,
          number | string | BN
        ],
        [
          number | string | BN,
          number | string | BN,
          number | string | BN,
          boolean
        ],
        [
          number | string | BN,
          number | string | BN,
          number | string | BN,
          number | string | BN,
          (number | string | BN)[]
        ],
        string,
        string,
        boolean,
        boolean
      ]
    ): NonPayableTransactionObject<void>;

    allowed(arg0: string): NonPayableTransactionObject<boolean>;

    approve(
      to: string,
      tokenId: number | string | BN
    ): NonPayableTransactionObject<void>;

    balanceOf(owner: string): NonPayableTransactionObject<string>;

    breedHounds(
      hound1: number | string | BN,
      hound2: number | string | BN
    ): PayableTransactionObject<void>;

    control(): NonPayableTransactionObject<{
      name: string;
      symbol: string;
      methods: string;
      incubator: string;
      staterApi: string;
      shop: string;
      payments: string;
      breedCost: string;
      breedFee: string;
      refillCost: string;
      refillBreedingCooldownCost: string;
      refillStaminaCooldownCost: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      10: string;
      11: string;
    }>;

    getApproved(
      tokenId: number | string | BN
    ): NonPayableTransactionObject<string>;

    hound(
      theId: number | string | BN
    ): NonPayableTransactionObject<
      [
        [string, string, string, string],
        [string, string, string, string, string],
        [string, string, string, boolean],
        [string, string, string, string, string[]],
        string,
        string,
        boolean,
        boolean
      ]
    >;

    id(): NonPayableTransactionObject<string>;

    isApprovedForAll(
      owner: string,
      operator: string
    ): NonPayableTransactionObject<boolean>;

    name(): NonPayableTransactionObject<string>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: number | string | BN,
      arg3: string | number[]
    ): NonPayableTransactionObject<string>;

    owner(): NonPayableTransactionObject<string>;

    ownerOf(tokenId: number | string | BN): NonPayableTransactionObject<string>;

    putHoundForBreed(
      theId: number | string | BN,
      fee: number | string | BN,
      status: boolean
    ): NonPayableTransactionObject<void>;

    renounceOwnership(): NonPayableTransactionObject<void>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: number | string | BN
    ): NonPayableTransactionObject<void>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: number | string | BN,
      _data: string | number[]
    ): NonPayableTransactionObject<void>;

    setApprovalForAll(
      operator: string,
      approved: boolean
    ): NonPayableTransactionObject<void>;

    setGlobalParameters(
      input: [
        string[],
        string,
        string,
        string,
        string,
        string,
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN,
        boolean[]
      ]
    ): NonPayableTransactionObject<void>;

    setTokenURI(
      _tokenId: number | string | BN,
      token_url: string
    ): NonPayableTransactionObject<void>;

    supportsInterface(
      interfaceId: string | number[]
    ): NonPayableTransactionObject<boolean>;

    symbol(): NonPayableTransactionObject<string>;

    tokenURI(
      _tokenId: number | string | BN
    ): NonPayableTransactionObject<string>;

    transferFrom(
      from: string,
      to: string,
      tokenId: number | string | BN
    ): NonPayableTransactionObject<void>;

    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;

    updateHound(
      theId: number | string | BN,
      houndName: string
    ): NonPayableTransactionObject<void>;

    updateHoundBreeding(
      theId: number | string | BN,
      breedingCooldownToConsume: number | string | BN
    ): PayableTransactionObject<void>;

    updateHoundStamina(
      theId: number | string | BN
    ): PayableTransactionObject<void>;
  };
  events: {
    Approval(cb?: Callback<Approval>): EventEmitter;
    Approval(options?: EventOptions, cb?: Callback<Approval>): EventEmitter;

    ApprovalForAll(cb?: Callback<ApprovalForAll>): EventEmitter;
    ApprovalForAll(
      options?: EventOptions,
      cb?: Callback<ApprovalForAll>
    ): EventEmitter;

    BreedHound(cb?: Callback<BreedHound>): EventEmitter;
    BreedHound(options?: EventOptions, cb?: Callback<BreedHound>): EventEmitter;

    HoundBreedable(cb?: Callback<HoundBreedable>): EventEmitter;
    HoundBreedable(
      options?: EventOptions,
      cb?: Callback<HoundBreedable>
    ): EventEmitter;

    HoundBreedingStatusUpdate(
      cb?: Callback<HoundBreedingStatusUpdate>
    ): EventEmitter;
    HoundBreedingStatusUpdate(
      options?: EventOptions,
      cb?: Callback<HoundBreedingStatusUpdate>
    ): EventEmitter;

    HoundNameChanded(cb?: Callback<HoundNameChanded>): EventEmitter;
    HoundNameChanded(
      options?: EventOptions,
      cb?: Callback<HoundNameChanded>
    ): EventEmitter;

    HoundStaminaUpdate(cb?: Callback<HoundStaminaUpdate>): EventEmitter;
    HoundStaminaUpdate(
      options?: EventOptions,
      cb?: Callback<HoundStaminaUpdate>
    ): EventEmitter;

    NewHound(cb?: Callback<NewHound>): EventEmitter;
    NewHound(options?: EventOptions, cb?: Callback<NewHound>): EventEmitter;

    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    Transfer(cb?: Callback<Transfer>): EventEmitter;
    Transfer(options?: EventOptions, cb?: Callback<Transfer>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Approval", cb: Callback<Approval>): void;
  once(event: "Approval", options: EventOptions, cb: Callback<Approval>): void;

  once(event: "ApprovalForAll", cb: Callback<ApprovalForAll>): void;
  once(
    event: "ApprovalForAll",
    options: EventOptions,
    cb: Callback<ApprovalForAll>
  ): void;

  once(event: "BreedHound", cb: Callback<BreedHound>): void;
  once(
    event: "BreedHound",
    options: EventOptions,
    cb: Callback<BreedHound>
  ): void;

  once(event: "HoundBreedable", cb: Callback<HoundBreedable>): void;
  once(
    event: "HoundBreedable",
    options: EventOptions,
    cb: Callback<HoundBreedable>
  ): void;

  once(
    event: "HoundBreedingStatusUpdate",
    cb: Callback<HoundBreedingStatusUpdate>
  ): void;
  once(
    event: "HoundBreedingStatusUpdate",
    options: EventOptions,
    cb: Callback<HoundBreedingStatusUpdate>
  ): void;

  once(event: "HoundNameChanded", cb: Callback<HoundNameChanded>): void;
  once(
    event: "HoundNameChanded",
    options: EventOptions,
    cb: Callback<HoundNameChanded>
  ): void;

  once(event: "HoundStaminaUpdate", cb: Callback<HoundStaminaUpdate>): void;
  once(
    event: "HoundStaminaUpdate",
    options: EventOptions,
    cb: Callback<HoundStaminaUpdate>
  ): void;

  once(event: "NewHound", cb: Callback<NewHound>): void;
  once(event: "NewHound", options: EventOptions, cb: Callback<NewHound>): void;

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;

  once(event: "Transfer", cb: Callback<Transfer>): void;
  once(event: "Transfer", options: EventOptions, cb: Callback<Transfer>): void;
}
