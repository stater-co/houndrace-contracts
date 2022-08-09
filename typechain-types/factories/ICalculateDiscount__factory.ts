/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ICalculateDiscount,
  ICalculateDiscountInterface,
} from "../ICalculateDiscount";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "requester",
        type: "address",
      },
    ],
    name: "calculateDiscount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ICalculateDiscount__factory {
  static readonly abi = _abi;
  static createInterface(): ICalculateDiscountInterface {
    return new utils.Interface(_abi) as ICalculateDiscountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICalculateDiscount {
    return new Contract(address, _abi, signerOrProvider) as ICalculateDiscount;
  }
}