/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPutHoundForBreed,
  IPutHoundForBreedInterface,
} from "../../../../contracts/hounds/interfaces/IPutHoundForBreed";

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
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "putHoundForBreed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IPutHoundForBreed__factory {
  static readonly abi = _abi;
  static createInterface(): IPutHoundForBreedInterface {
    return new utils.Interface(_abi) as IPutHoundForBreedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPutHoundForBreed {
    return new Contract(address, _abi, signerOrProvider) as IPutHoundForBreed;
  }
}