/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IInversionMutation,
  IInversionMutationInterface,
} from "../../../../contracts/genetics/interfaces/IInversionMutation";

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
    name: "inversionMutation",
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

export class IInversionMutation__factory {
  static readonly abi = _abi;
  static createInterface(): IInversionMutationInterface {
    return new utils.Interface(_abi) as IInversionMutationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IInversionMutation {
    return new Contract(address, _abi, signerOrProvider) as IInversionMutation;
  }
}
