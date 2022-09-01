/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IUploadRace, IUploadRaceInterface } from "../IUploadRace";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "theId",
        type: "uint256",
      },
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
            internalType: "uint256",
            name: "randomness",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "queueId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "seed",
            type: "bytes",
          },
        ],
        internalType: "struct Race.Struct",
        name: "race",
        type: "tuple",
      },
    ],
    name: "uploadRace",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export class IUploadRace__factory {
  static readonly abi = _abi;
  static createInterface(): IUploadRaceInterface {
    return new utils.Interface(_abi) as IUploadRaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUploadRace {
    return new Contract(address, _abi, signerOrProvider) as IUploadRace;
  }
}
