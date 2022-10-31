/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICreateQueues, ICreateQueuesInterface } from "../ICreateQueues";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "address",
                name: "feeCurrency",
                type: "address",
              },
              {
                internalType: "address",
                name: "entryFeeCurrency",
                type: "address",
              },
              {
                internalType: "uint256[]",
                name: "participants",
                type: "uint256[]",
              },
              {
                internalType: "uint256[]",
                name: "enqueueDates",
                type: "uint256[]",
              },
              {
                internalType: "uint256",
                name: "arena",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "entryFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "fee",
                type: "uint256",
              },
              {
                components: [
                  {
                    internalType: "address[]",
                    name: "from",
                    type: "address[]",
                  },
                  {
                    internalType: "address[]",
                    name: "to",
                    type: "address[]",
                  },
                  {
                    internalType: "address[]",
                    name: "currency",
                    type: "address[]",
                  },
                  {
                    internalType: "uint256[][]",
                    name: "ids",
                    type: "uint256[][]",
                  },
                  {
                    internalType: "uint256[][]",
                    name: "amounts",
                    type: "uint256[][]",
                  },
                  {
                    internalType: "enum Payment.PaymentTypes[]",
                    name: "paymentType",
                    type: "uint8[]",
                  },
                ],
                internalType: "struct Payment.Struct",
                name: "payments",
                type: "tuple",
              },
            ],
            internalType: "struct Core.Struct",
            name: "core",
            type: "tuple",
          },
          {
            internalType: "uint256[]",
            name: "speciesAllowed",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "startDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastCompletion",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "totalParticipants",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "cooldown",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "staminaCost",
            type: "uint32",
          },
          {
            internalType: "bool",
            name: "closed",
            type: "bool",
          },
        ],
        internalType: "struct Queue.Struct[]",
        name: "theQueues",
        type: "tuple[]",
      },
    ],
    name: "createQueues",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ICreateQueues__factory {
  static readonly abi = _abi;
  static createInterface(): ICreateQueuesInterface {
    return new utils.Interface(_abi) as ICreateQueuesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICreateQueues {
    return new Contract(address, _abi, signerOrProvider) as ICreateQueues;
  }
}
