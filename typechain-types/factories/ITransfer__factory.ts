/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITransfer, ITransferInterface } from "../ITransfer";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ITransfer__factory {
  static readonly abi = _abi;
  static createInterface(): ITransferInterface {
    return new utils.Interface(_abi) as ITransferInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITransfer {
    return new Contract(address, _abi, signerOrProvider) as ITransfer;
  }
}
