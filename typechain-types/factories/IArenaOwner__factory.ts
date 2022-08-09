/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IArenaOwner, IArenaOwnerInterface } from "../IArenaOwner";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "arenaOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IArenaOwner__factory {
  static readonly abi = _abi;
  static createInterface(): IArenaOwnerInterface {
    return new utils.Interface(_abi) as IArenaOwnerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IArenaOwner {
    return new Contract(address, _abi, signerOrProvider) as IArenaOwner;
  }
}