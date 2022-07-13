/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  Geyser,
  GeyserInterface,
} from "../../../../../contracts/shop/params/Index.sol/Geyser";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "totalStakedFor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class Geyser__factory {
  static readonly abi = _abi;
  static createInterface(): GeyserInterface {
    return new utils.Interface(_abi) as GeyserInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Geyser {
    return new Contract(address, _abi, signerOrProvider) as Geyser;
  }
}