/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IInitializeHound,
  IInitializeHoundInterface,
} from "../IInitializeHound";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "onId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        components: [
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
            name: "statistics",
            type: "tuple",
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
            name: "breeding",
            type: "tuple",
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
            ],
            internalType: "struct HoundIdentity.Struct",
            name: "identity",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "string",
                name: "token_uri",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "queueId",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "custom",
                type: "bool",
              },
            ],
            internalType: "struct HoundProfile.Struct",
            name: "profile",
            type: "tuple",
          },
        ],
        internalType: "struct Hound.Struct",
        name: "theHound",
        type: "tuple",
      },
    ],
    name: "initializeHound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IInitializeHound__factory {
  static readonly abi = _abi;
  static createInterface(): IInitializeHoundInterface {
    return new utils.Interface(_abi) as IInitializeHoundInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IInitializeHound {
    return new Contract(address, _abi, signerOrProvider) as IInitializeHound;
  }
}
