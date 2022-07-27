/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IBoostHoundBreeding,
  IBoostHoundBreedingInterface,
} from "../IBoostHoundBreeding";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "theId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "boostHoundBreeding",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export class IBoostHoundBreeding__factory {
  static readonly abi = _abi;
  static createInterface(): IBoostHoundBreedingInterface {
    return new utils.Interface(_abi) as IBoostHoundBreedingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBoostHoundBreeding {
    return new Contract(address, _abi, signerOrProvider) as IBoostHoundBreeding;
  }
}
