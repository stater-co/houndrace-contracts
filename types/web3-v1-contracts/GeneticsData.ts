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

export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;

export interface GeneticsData extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): GeneticsData;
  clone(): GeneticsData;
  methods: {
    arithmeticMutation(
      geneticSequence: (number | string | BN)[],
      randomness: number | string | BN
    ): NonPayableTransactionObject<string[]>;

    control(): NonPayableTransactionObject<{
      randomness: string;
      methods: string;
      terrains: string;
      maleGenesProbability: string;
      femaleGenesProbability: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
    }>;

    inversionMutation(
      geneticSequence: (number | string | BN)[],
      randomness: number | string | BN
    ): NonPayableTransactionObject<string[]>;

    mixGenes(
      geneticSequence1: (number | string | BN)[],
      geneticSequence2: (number | string | BN)[],
      randomness: number | string | BN
    ): NonPayableTransactionObject<string[]>;

    owner(): NonPayableTransactionObject<string>;

    renounceOwnership(): NonPayableTransactionObject<void>;

    scrambleMutation(
      geneticSequence: (number | string | BN)[],
      randomness: number | string | BN
    ): NonPayableTransactionObject<string[]>;

    setGlobalParameters(
      input: [
        string,
        string,
        string,
        (number | string | BN)[],
        (number | string | BN)[],
        number | string | BN,
        number | string | BN,
        (number | string | BN)[],
        (number | string | BN)[]
      ]
    ): NonPayableTransactionObject<void>;

    swapMutation(
      geneticSequence: (number | string | BN)[],
      randomness: number | string | BN
    ): NonPayableTransactionObject<string[]>;

    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;

    uniformCrossover(
      geneticSequence1: (number | string | BN)[],
      geneticSequence2: (number | string | BN)[],
      randomness: number | string | BN
    ): NonPayableTransactionObject<string[]>;

    wholeArithmeticRecombination(
      geneticSequence1: (number | string | BN)[],
      geneticSequence2: (number | string | BN)[]
    ): NonPayableTransactionObject<string[]>;
  };
  events: {
    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;
}
