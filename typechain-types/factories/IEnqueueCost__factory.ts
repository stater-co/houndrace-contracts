/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IEnqueueCost, IEnqueueCostInterface } from "../IEnqueueCost";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "queueId",
        type: "uint256",
      },
    ],
    name: "enqueueCost",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct MicroPayment.Struct",
        name: "",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct MicroPayment.Struct",
        name: "",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct MicroPayment.Struct",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IEnqueueCost__factory {
  static readonly abi = _abi;
  static createInterface(): IEnqueueCostInterface {
    return new utils.Interface(_abi) as IEnqueueCostInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IEnqueueCost {
    return new Contract(address, _abi, signerOrProvider) as IEnqueueCost;
  }
}
