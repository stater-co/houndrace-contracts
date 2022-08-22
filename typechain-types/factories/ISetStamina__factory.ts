/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISetStamina, ISetStaminaInterface } from "../ISetStamina";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "staminaLastUpdate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "staminaRefill1x",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "staminaValue",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "staminaPerHour",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "staminaCap",
            type: "uint32",
          },
        ],
        internalType: "struct HoundStamina.Struct",
        name: "stamina",
        type: "tuple",
      },
    ],
    name: "setStamina",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ISetStamina__factory {
  static readonly abi = _abi;
  static createInterface(): ISetStaminaInterface {
    return new utils.Interface(_abi) as ISetStaminaInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISetStamina {
    return new Contract(address, _abi, signerOrProvider) as ISetStamina;
  }
}
