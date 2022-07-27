/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IBoostHoundStamina,
  IBoostHoundStaminaInterface,
} from "../IBoostHoundStamina";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "theId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "boostHoundStamina",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export class IBoostHoundStamina__factory {
  static readonly abi = _abi;
  static createInterface(): IBoostHoundStaminaInterface {
    return new utils.Interface(_abi) as IBoostHoundStaminaInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBoostHoundStamina {
    return new Contract(address, _abi, signerOrProvider) as IBoostHoundStamina;
  }
}
