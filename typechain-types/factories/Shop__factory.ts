/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Shop, ShopInterface, ShopConstructor } from "../Shop";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "methods",
            type: "address",
          },
          {
            internalType: "address",
            name: "restricted",
            type: "address",
          },
        ],
        internalType: "struct ShopConstructor.Struct",
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
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "tokenContract",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "tokenIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "dateStart",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dateStop",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "discount",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "tokenType",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "usable",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct Discount.Struct",
        name: "discount",
        type: "tuple",
      },
    ],
    name: "NewDiscount",
    type: "event",
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
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "requester",
        type: "address",
      },
    ],
    name: "calculateDiscount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "control",
    outputs: [
      {
        internalType: "address",
        name: "methods",
        type: "address",
      },
      {
        internalType: "address",
        name: "restricted",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenContract",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "tokenIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "dateStart",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dateStop",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "discount",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "tokenType",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "usable",
            type: "bool",
          },
        ],
        internalType: "struct Discount.Struct",
        name: "discount",
        type: "tuple",
      },
    ],
    name: "createDiscount",
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
            name: "tokenContract",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "tokenIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "dateStart",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dateStop",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "discount",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "tokenType",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "usable",
            type: "bool",
          },
        ],
        internalType: "struct Discount.Struct",
        name: "discount",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "theId",
        type: "uint256",
      },
    ],
    name: "editDiscount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "id",
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
            name: "methods",
            type: "address",
          },
          {
            internalType: "address",
            name: "restricted",
            type: "address",
          },
        ],
        internalType: "struct ShopConstructor.Struct",
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
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040526001805534801561001457600080fd5b50604051610957380380610957833981016040819052610033916100e2565b8061003d33610076565b8051600280546001600160a01b03199081166001600160a01b03938416179091556020909201516003805490931691161790555061014a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146100dd57600080fd5b919050565b6000604082840312156100f457600080fd5b604080519081016001600160401b038111828210171561012457634e487b7160e01b600052604160045260246000fd5b604052610130836100c6565b815261013e602084016100c6565b60208201529392505050565b6107fe806101596000396000f3fe6080604052600436106100775760003560e01c8063299f9f0e146100805780632a45ccb5146100a0578063715018a6146100c057806381c461ab146100d55780638da5cb5b146100f5578063ad6a874514610127578063af640d0f14610155578063d8de65871461016b578063f2fde38b146101b257005b3661007e57005b005b34801561008c57600080fd5b5061007e61009b36600461053d565b6101d2565b3480156100ac57600080fd5b5061007e6100bb366004610705565b61020f565b3480156100cc57600080fd5b5061007e61028a565b3480156100e157600080fd5b5061007e6100f0366004610749565b61029e565b34801561010157600080fd5b5061010a610318565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561013357600080fd5b5061014761014236600461077d565b610327565b60405190815260200161011e565b34801561016157600080fd5b5061014760015481565b34801561017757600080fd5b50600254600354610192916001600160a01b03908116911682565b604080516001600160a01b0393841681529290911660208301520161011e565b3480156101be57600080fd5b5061007e6101cd36600461077d565b6103b6565b6101da610434565b8051600280546001600160a01b03199081166001600160a01b0393841617909155602090920151600380549093169116179055565b610217610434565b6003546040516000916001600160a01b031690610237908390369061079f565b600060405180830381855af49150503d8060008114610272576040519150601f19603f3d011682016040523d82523d6000602084013e610277565b606091505b505090508061028557600080fd5b505050565b610292610434565b61029c6000610493565b565b6102a6610434565b6003546040516000916001600160a01b0316906102c6908390369061079f565b600060405180830381855af49150503d8060008114610301576040519150601f19603f3d011682016040523d82523d6000602084013e610306565b606091505b505090508061031457600080fd5b5050565b6000546001600160a01b031690565b600254604051600091829182916001600160a01b03169061034b908390369061079f565b600060405180830381855af49150503d8060008114610386576040519150601f19603f3d011682016040523d82523d6000602084013e61038b565b606091505b50915091508161039a57600080fd5b808060200190518101906103ae91906107af565b949350505050565b6103be610434565b6001600160a01b0381166104285760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61043181610493565b50565b3361043d610318565b6001600160a01b03161461029c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161041f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b038111828210171561051b5761051b6104e3565b60405290565b80356001600160a01b038116811461053857600080fd5b919050565b60006040828403121561054f57600080fd5b604080519081016001600160401b0381118282101715610571576105716104e3565b60405261057d83610521565b815261058b60208401610521565b60208201529392505050565b600082601f8301126105a857600080fd5b813560206001600160401b03808311156105c4576105c46104e3565b8260051b604051601f19603f830116810181811084821117156105e9576105e96104e3565b60405293845285810183019383810192508785111561060757600080fd5b83870191505b848210156106265781358352918301919083019061060d565b979650505050505050565b803563ffffffff8116811461053857600080fd5b803560ff8116811461053857600080fd5b8035801515811461053857600080fd5b600060e0828403121561067857600080fd5b6106806104f9565b905061068b82610521565b815260208201356001600160401b038111156106a657600080fd5b6106b284828501610597565b60208301525060408201356040820152606082013560608201526106d860808301610631565b60808201526106e960a08301610645565b60a08201526106fa60c08301610656565b60c082015292915050565b6000806040838503121561071857600080fd5b82356001600160401b0381111561072e57600080fd5b61073a85828601610666565b95602094909401359450505050565b60006020828403121561075b57600080fd5b81356001600160401b0381111561077157600080fd5b6103ae84828501610666565b60006020828403121561078f57600080fd5b61079882610521565b9392505050565b8183823760009101908152919050565b6000602082840312156107c157600080fd5b505191905056fea2646970667358221220009acceaa55052c55647e6dd8ebe3a8692bc10dc7decb63e799ae80acb1dbeb764736f6c63430008110033";

type ShopConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ShopConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Shop__factory extends ContractFactory {
  constructor(...args: ShopConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Shop";
  }

  deploy(
    input: ShopConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Shop> {
    return super.deploy(input, overrides || {}) as Promise<Shop>;
  }
  getDeployTransaction(
    input: ShopConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(input, overrides || {});
  }
  attach(address: string): Shop {
    return super.attach(address) as Shop;
  }
  connect(signer: Signer): Shop__factory {
    return super.connect(signer) as Shop__factory;
  }
  static readonly contractName: "Shop";
  public readonly contractName: "Shop";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShopInterface {
    return new utils.Interface(_abi) as ShopInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Shop {
    return new Contract(address, _abi, signerOrProvider) as Shop;
  }
}
