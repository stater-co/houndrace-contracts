/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IBreedHounds, IBreedHoundsInterface } from "../IBreedHounds";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hound1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "hound2",
        type: "uint256",
      },
    ],
    name: "breedHounds",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export class IBreedHounds__factory {
  static readonly abi = _abi;
  static createInterface(): IBreedHoundsInterface {
    return new utils.Interface(_abi) as IBreedHoundsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBreedHounds {
    return new Contract(address, _abi, signerOrProvider) as IBreedHounds;
  }
}
