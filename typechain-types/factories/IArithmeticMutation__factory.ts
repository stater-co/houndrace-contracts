/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IArithmeticMutation,
  IArithmeticMutationInterface,
} from "../IArithmeticMutation";

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
    name: "arithmeticMutation",
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

export class IArithmeticMutation__factory {
  static readonly abi = _abi;
  static createInterface(): IArithmeticMutationInterface {
    return new utils.Interface(_abi) as IArithmeticMutationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IArithmeticMutation {
    return new Contract(address, _abi, signerOrProvider) as IArithmeticMutation;
  }
}
