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

export type NewRace = ContractEventLog<{
  queue: [string, string[], string, string, string, string, string, string];
  race: [string, string[], string, string, string, string, string];
  0: [string, string[], string, string, string, string, string, string];
  1: [string, string[], string, string, string, string, string];
}>;
export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;

export interface RaceGeneratorData extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): RaceGeneratorData;
  clone(): RaceGeneratorData;
  methods: {
    control(): NonPayableTransactionObject<{
      randomness: string;
      terrains: string;
      hounds: string;
      allowed: string;
      methods: string;
      payments: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    }>;

    generate(
      queue: [
        string,
        (number | string | BN)[],
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN,
        string | number[]
      ]
    ): PayableTransactionObject<
      [string, string[], string, string, string, string, string]
    >;

    houndsContract(): NonPayableTransactionObject<string>;

    owner(): NonPayableTransactionObject<string>;

    renounceOwnership(): NonPayableTransactionObject<void>;

    setGlobalParameters(
      input: [string, string, string, string, string, string]
    ): NonPayableTransactionObject<void>;

    simulateClassicRace(
      participants: [
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
          (number | string | BN)[]
        ],
        string,
        string,
        boolean,
        boolean
      ][],
      terrain: number | string | BN,
      theRandomness: number | string | BN
    ): NonPayableTransactionObject<string>;

    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;
  };
  events: {
    NewRace(cb?: Callback<NewRace>): EventEmitter;
    NewRace(options?: EventOptions, cb?: Callback<NewRace>): EventEmitter;

    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "NewRace", cb: Callback<NewRace>): void;
  once(event: "NewRace", options: EventOptions, cb: Callback<NewRace>): void;

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;
}
