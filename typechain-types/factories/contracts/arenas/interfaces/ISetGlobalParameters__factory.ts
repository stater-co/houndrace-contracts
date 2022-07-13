/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ISetGlobalParameters,
  ISetGlobalParametersInterface,
} from "../../../../contracts/arenas/interfaces/ISetGlobalParameters";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "address",
            name: "restricted",
            type: "address",
          },
          {
            internalType: "address",
            name: "methods",
            type: "address",
          },
          {
            internalType: "address",
            name: "payments",
            type: "address",
          },
          {
            internalType: "address",
            name: "alphadune",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "allowedCallers",
            type: "address[]",
          },
        ],
        internalType: "struct ArenasConstructor.Struct",
        name: "globalParameters",
        type: "tuple",
      },
    ],
    name: "setGlobalParameters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ISetGlobalParameters__factory {
  static readonly abi = _abi;
  static createInterface(): ISetGlobalParametersInterface {
    return new utils.Interface(_abi) as ISetGlobalParametersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISetGlobalParameters {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ISetGlobalParameters;
  }
}
