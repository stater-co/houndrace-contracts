/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IUpdateHoundRunning,
  IUpdateHoundRunningInterface,
} from "../../../../contracts/hounds/interfaces/IUpdateHoundRunning";

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
        name: "queueId",
        type: "uint256",
      },
    ],
    name: "updateHoundRunning",
    outputs: [
      {
        internalType: "uint256",
        name: "oldQueueId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IUpdateHoundRunning__factory {
  static readonly abi = _abi;
  static createInterface(): IUpdateHoundRunningInterface {
    return new utils.Interface(_abi) as IUpdateHoundRunningInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUpdateHoundRunning {
    return new Contract(address, _abi, signerOrProvider) as IUpdateHoundRunning;
  }
}
