/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ICheckDiscount,
  ICheckDiscountInterface,
} from "../ICheckDiscount";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "requester",
        type: "address",
      },
    ],
    name: "checkDiscount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ICheckDiscount__factory {
  static readonly abi = _abi;
  static createInterface(): ICheckDiscountInterface {
    return new utils.Interface(_abi) as ICheckDiscountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICheckDiscount {
    return new Contract(address, _abi, signerOrProvider) as ICheckDiscount;
  }
}