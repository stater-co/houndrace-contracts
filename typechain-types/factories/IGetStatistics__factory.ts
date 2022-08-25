/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IGetStatistics,
  IGetStatisticsInterface,
} from "../IGetStatistics";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "theId",
        type: "uint256",
      },
    ],
    name: "getStatistics",
    outputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "totalRuns",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "firstPlace",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "secondPlace",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "thirdPlace",
            type: "uint64",
          },
        ],
        internalType: "struct HoundStatistics.Struct",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IGetStatistics__factory {
  static readonly abi = _abi;
  static createInterface(): IGetStatisticsInterface {
    return new utils.Interface(_abi) as IGetStatisticsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGetStatistics {
    return new Contract(address, _abi, signerOrProvider) as IGetStatistics;
  }
}