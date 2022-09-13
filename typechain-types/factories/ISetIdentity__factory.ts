/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISetIdentity, ISetIdentityInterface } from "../ISetIdentity";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "theId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "maleParent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "femaleParent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "generation",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "birthDate",
            type: "uint256",
          },
          {
            internalType: "uint32[54]",
            name: "geneticSequence",
            type: "uint32[54]",
          },
          {
            internalType: "string",
            name: "extensionTraits",
            type: "string",
          },
          {
            internalType: "enum Specie.Enum",
            name: "specie",
            type: "uint8",
          },
        ],
        internalType: "struct HoundIdentity.Struct",
        name: "identity",
        type: "tuple",
      },
    ],
    name: "setIdentity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ISetIdentity__factory {
  static readonly abi = _abi;
  static createInterface(): ISetIdentityInterface {
    return new utils.Interface(_abi) as ISetIdentityInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISetIdentity {
    return new Contract(address, _abi, signerOrProvider) as ISetIdentity;
  }
}
