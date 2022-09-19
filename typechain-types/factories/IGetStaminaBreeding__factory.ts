/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IGetStaminaBreeding,
  IGetStaminaBreedingInterface,
} from "../IGetStaminaBreeding";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getStaminaBreeding",
    outputs: [
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
        name: "",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "breedingFeeCurrency",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "lastBreed",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "breedingCooldown",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "breedingFee",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "availableToBreed",
            type: "bool",
          },
        ],
        internalType: "struct HoundBreeding.Struct",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IGetStaminaBreeding__factory {
  static readonly abi = _abi;
  static createInterface(): IGetStaminaBreedingInterface {
    return new utils.Interface(_abi) as IGetStaminaBreedingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGetStaminaBreeding {
    return new Contract(address, _abi, signerOrProvider) as IGetStaminaBreeding;
  }
}
