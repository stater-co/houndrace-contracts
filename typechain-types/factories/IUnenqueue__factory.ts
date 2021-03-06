/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IUnenqueue, IUnenqueueInterface } from "../IUnenqueue";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "theId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "hound",
        type: "uint256",
      },
    ],
    name: "unenqueue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IUnenqueue__factory {
  static readonly abi = _abi;
  static createInterface(): IUnenqueueInterface {
    return new utils.Interface(_abi) as IUnenqueueInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUnenqueue {
    return new Contract(address, _abi, signerOrProvider) as IUnenqueue;
  }
}
