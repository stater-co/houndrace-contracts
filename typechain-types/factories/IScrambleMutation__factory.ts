/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IScrambleMutation,
  IScrambleMutationInterface,
} from "../IScrambleMutation";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32[54]",
        name: "geneticSequence",
        type: "uint32[54]",
      },
      {
        internalType: "uint256",
        name: "randomness",
        type: "uint256",
      },
    ],
    name: "scrambleMutation",
    outputs: [
      {
        internalType: "uint32[54]",
        name: "",
        type: "uint32[54]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IScrambleMutation__factory {
  static readonly abi = _abi;
  static createInterface(): IScrambleMutationInterface {
    return new utils.Interface(_abi) as IScrambleMutationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IScrambleMutation {
    return new Contract(address, _abi, signerOrProvider) as IScrambleMutation;
  }
}
