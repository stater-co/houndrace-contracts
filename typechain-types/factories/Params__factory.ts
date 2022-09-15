/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Params, ParamsInterface, GeneticsConstructor } from "../Params";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "randomness",
            type: "address",
          },
          {
            internalType: "address",
            name: "terrains",
            type: "address",
          },
          {
            internalType: "uint32[54]",
            name: "male",
            type: "uint32[54]",
          },
          {
            internalType: "uint32[54]",
            name: "female",
            type: "uint32[54]",
          },
          {
            internalType: "uint32",
            name: "maleGenesProbability",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "femaleGenesProbability",
            type: "uint32",
          },
          {
            internalType: "uint32[13]",
            name: "geneticSequenceSignature",
            type: "uint32[13]",
          },
          {
            internalType: "uint32[54]",
            name: "maxValues",
            type: "uint32[54]",
          },
        ],
        internalType: "struct GeneticsConstructor.Struct",
        name: "input",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "control",
    outputs: [
      {
        internalType: "address",
        name: "randomness",
        type: "address",
      },
      {
        internalType: "address",
        name: "terrains",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "maleGenesProbability",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "femaleGenesProbability",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "randomness",
            type: "address",
          },
          {
            internalType: "address",
            name: "terrains",
            type: "address",
          },
          {
            internalType: "uint32[54]",
            name: "male",
            type: "uint32[54]",
          },
          {
            internalType: "uint32[54]",
            name: "female",
            type: "uint32[54]",
          },
          {
            internalType: "uint32",
            name: "maleGenesProbability",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "femaleGenesProbability",
            type: "uint32",
          },
          {
            internalType: "uint32[13]",
            name: "geneticSequenceSignature",
            type: "uint32[13]",
          },
          {
            internalType: "uint32[54]",
            name: "maxValues",
            type: "uint32[54]",
          },
        ],
        internalType: "struct GeneticsConstructor.Struct",
        name: "globalParameters",
        type: "tuple",
      },
    ],
    name: "setGlobalParameters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200138f3803806200138f8339818101604052810190620000379190620007ac565b620000576200004b620001a860201b60201c565b620001b060201b60201c565b80600160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002019060366200010192919062000274565b506060820151816009019060366200011b92919062000274565b5060808201518160100160006101000a81548163ffffffff021916908363ffffffff16021790555060a08201518160100160046101000a81548163ffffffff021916908363ffffffff16021790555060c08201518160110190600d620001839291906200031e565b5060e0820151816013019060366200019d92919062000274565b5090505050620007df565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8260366007016008900481019282156200030b5791602002820160005b83821115620002d757835183826101000a81548163ffffffff021916908363ffffffff160217905550926020019260040160208160030104928301926001030262000291565b8015620003095782816101000a81549063ffffffff0219169055600401602081600301049283019260010302620002d7565b505b5090506200031a9190620003c8565b5090565b82600d600701600890048101928215620003b55791602002820160005b838211156200038157835183826101000a81548163ffffffff021916908363ffffffff16021790555092602001926004016020816003010492830192600103026200033b565b8015620003b35782816101000a81549063ffffffff021916905560040160208160030104928301926001030262000381565b505b509050620003c49190620003c8565b5090565b5b80821115620003e3576000816000905550600101620003c9565b5090565b6000604051905090565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200044682620003fb565b810181811067ffffffffffffffff821117156200046857620004676200040c565b5b80604052505050565b60006200047d620003e7565b90506200048b82826200043b565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620004bd8262000490565b9050919050565b620004cf81620004b0565b8114620004db57600080fd5b50565b600081519050620004ef81620004c4565b92915050565b600080fd5b600067ffffffffffffffff8211156200051857620005176200040c565b5b602082029050919050565b600080fd5b600063ffffffff82169050919050565b620005438162000528565b81146200054f57600080fd5b50565b600081519050620005638162000538565b92915050565b6000620005806200057a84620004fa565b62000471565b905080602084028301858111156200059d576200059c62000523565b5b835b81811015620005ca5780620005b5888262000552565b8452602084019350506020810190506200059f565b5050509392505050565b600082601f830112620005ec57620005eb620004f5565b5b6036620005fb84828562000569565b91505092915050565b600067ffffffffffffffff8211156200062257620006216200040c565b5b602082029050919050565b6000620006446200063e8462000604565b62000471565b9050806020840283018581111562000661576200066062000523565b5b835b818110156200068e578062000679888262000552565b84526020840193505060208101905062000663565b5050509392505050565b600082601f830112620006b057620006af620004f5565b5b600d620006bf8482856200062d565b91505092915050565b60006116608284031215620006e257620006e1620003f6565b5b620006ef61010062000471565b905060006200070184828501620004de565b60008301525060206200071784828501620004de565b60208301525060406200072d84828501620005d4565b6040830152506107006200074484828501620005d4565b606083015250610dc06200075b8482850162000552565b608083015250610de0620007728482850162000552565b60a083015250610e00620007898482850162000698565b60c083015250610fa0620007a084828501620005d4565b60e08301525092915050565b60006116608284031215620007c657620007c5620003f1565b5b6000620007d684828501620006c8565b91505092915050565b610ba080620007ef6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806356967ca81461005c578063715018a6146100785780638da5cb5b14610082578063d8de6587146100a0578063f2fde38b146100c1575b600080fd5b61007660048036038101906100719190610982565b6100dd565b005b610080610222565b005b61008a610236565b60405161009791906109bf565b60405180910390f35b6100a861025f565b6040516100b894939291906109e9565b60405180910390f35b6100db60048036038101906100d69190610a2e565b6102dd565b005b80600160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002019060366101859291906104aa565b5060608201518160090190603661019d9291906104aa565b5060808201518160100160006101000a81548163ffffffff021916908363ffffffff16021790555060a08201518160100160046101000a81548163ffffffff021916908363ffffffff16021790555060c08201518160110190600d61020392919061054d565b5060e08201518160130190603661021b9291906104aa565b5090505050565b61022a610360565b61023460006103de565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60018060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060100160009054906101000a900463ffffffff16908060100160049054906101000a900463ffffffff16905084565b6102e5610360565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610354576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034b90610ade565b60405180910390fd5b61035d816103de565b50565b6103686104a2565b73ffffffffffffffffffffffffffffffffffffffff16610386610236565b73ffffffffffffffffffffffffffffffffffffffff16146103dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d390610b4a565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b82603660070160089004810192821561053c5791602002820160005b8382111561050a57835183826101000a81548163ffffffff021916908363ffffffff16021790555092602001926004016020816003010492830192600103026104c6565b801561053a5782816101000a81549063ffffffff021916905560040160208160030104928301926001030261050a565b505b50905061054991906105f0565b5090565b82600d6007016008900481019282156105df5791602002820160005b838211156105ad57835183826101000a81548163ffffffff021916908363ffffffff1602179055509260200192600401602081600301049283019260010302610569565b80156105dd5782816101000a81549063ffffffff02191690556004016020816003010492830192600103026105ad565b505b5090506105ec91906105f0565b5090565b5b808211156106095760008160009055506001016105f1565b5090565b6000604051905090565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61066a82610621565b810181811067ffffffffffffffff8211171561068957610688610632565b5b80604052505050565b600061069c61060d565b90506106a88282610661565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106d8826106ad565b9050919050565b6106e8816106cd565b81146106f357600080fd5b50565b600081359050610705816106df565b92915050565b600080fd5b600067ffffffffffffffff82111561072b5761072a610632565b5b602082029050919050565b600080fd5b600063ffffffff82169050919050565b6107548161073b565b811461075f57600080fd5b50565b6000813590506107718161074b565b92915050565b600061078a61078584610710565b610692565b905080602084028301858111156107a4576107a3610736565b5b835b818110156107cd57806107b98882610762565b8452602084019350506020810190506107a6565b5050509392505050565b600082601f8301126107ec576107eb61070b565b5b60366107f9848285610777565b91505092915050565b600067ffffffffffffffff82111561081d5761081c610632565b5b602082029050919050565b600061083b61083684610802565b610692565b9050806020840283018581111561085557610854610736565b5b835b8181101561087e578061086a8882610762565b845260208401935050602081019050610857565b5050509392505050565b600082601f83011261089d5761089c61070b565b5b600d6108aa848285610828565b91505092915050565b600061166082840312156108ca576108c961061c565b5b6108d5610100610692565b905060006108e5848285016106f6565b60008301525060206108f9848285016106f6565b602083015250604061090d848285016107d7565b604083015250610700610922848285016107d7565b606083015250610dc061093784828501610762565b608083015250610de061094c84828501610762565b60a083015250610e0061096184828501610888565b60c083015250610fa0610976848285016107d7565b60e08301525092915050565b6000611660828403121561099957610998610617565b5b60006109a7848285016108b3565b91505092915050565b6109b9816106cd565b82525050565b60006020820190506109d460008301846109b0565b92915050565b6109e38161073b565b82525050565b60006080820190506109fe60008301876109b0565b610a0b60208301866109b0565b610a1860408301856109da565b610a2560608301846109da565b95945050505050565b600060208284031215610a4457610a43610617565b5b6000610a52848285016106f6565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000610ac8602683610a5b565b9150610ad382610a6c565b604082019050919050565b60006020820190508181036000830152610af781610abb565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000610b34602083610a5b565b9150610b3f82610afe565b602082019050919050565b60006020820190508181036000830152610b6381610b27565b905091905056fea264697066735822122064cb670830c6c9fe9ad5f8bc28b8767f14f71e335b7b43dba9c40c90d56c06b164736f6c63430008110033";

type ParamsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ParamsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Params__factory extends ContractFactory {
  constructor(...args: ParamsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Params";
  }

  deploy(
    input: GeneticsConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Params> {
    return super.deploy(input, overrides || {}) as Promise<Params>;
  }
  getDeployTransaction(
    input: GeneticsConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(input, overrides || {});
  }
  attach(address: string): Params {
    return super.attach(address) as Params;
  }
  connect(signer: Signer): Params__factory {
    return super.connect(signer) as Params__factory;
  }
  static readonly contractName: "Params";
  public readonly contractName: "Params";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ParamsInterface {
    return new utils.Interface(_abi) as ParamsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Params {
    return new Contract(address, _abi, signerOrProvider) as Params;
  }
}
