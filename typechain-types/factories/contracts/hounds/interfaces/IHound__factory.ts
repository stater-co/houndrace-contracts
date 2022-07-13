/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IHound,
  IHoundInterface,
} from "../../../../contracts/hounds/interfaces/IHound";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "theId",
        type: "uint256",
      },
    ],
    name: "hound",
    outputs: [
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
            internalType: "struct Hound.Statistics",
            name: "statistics",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "staminaRefill1xCurrency",
                type: "address",
              },
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
            internalType: "struct Hound.Stamina",
            name: "stamina",
            type: "tuple",
          },
          {
            components: [
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
                internalType: "address",
                name: "breedingFeeCurrency",
                type: "address",
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
            internalType: "struct Hound.Breeding",
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
            ],
            internalType: "struct Hound.Identity",
            name: "identity",
            type: "tuple",
          },
          {
            internalType: "string",
            name: "title",
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
        internalType: "struct Hound.Struct",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IHound__factory {
  static readonly abi = _abi;
  static createInterface(): IHoundInterface {
    return new utils.Interface(_abi) as IHoundInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IHound {
    return new Contract(address, _abi, signerOrProvider) as IHound;
  }
}
