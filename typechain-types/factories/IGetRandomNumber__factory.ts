/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IGetRandomNumber,
  IGetRandomNumberInterface,
} from "../IGetRandomNumber";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "input",
        type: "bytes",
      },
    ],
    name: "getRandomNumber",
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

export class IGetRandomNumber__factory {
  static readonly abi = _abi;
  static createInterface(): IGetRandomNumberInterface {
    return new utils.Interface(_abi) as IGetRandomNumberInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGetRandomNumber {
    return new Contract(address, _abi, signerOrProvider) as IGetRandomNumber;
  }
}
