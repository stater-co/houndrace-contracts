/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IHandleArenaUsage,
  IHandleArenaUsageInterface,
} from "../IHandleArenaUsage";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "arenaId",
        type: "uint256",
      },
    ],
    name: "handleArenaUsage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IHandleArenaUsage__factory {
  static readonly abi = _abi;
  static createInterface(): IHandleArenaUsageInterface {
    return new utils.Interface(_abi) as IHandleArenaUsageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IHandleArenaUsage {
    return new Contract(address, _abi, signerOrProvider) as IHandleArenaUsage;
  }
}
