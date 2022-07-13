/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  Params,
  ParamsInterface,
  ShopConstructor,
} from "../../../../../contracts/shop/params/Index.sol/Params";

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
  "0x60806040526001805534801561001457600080fd5b50604051610511380380610511833981016040819052610033916100e0565b61003c33610074565b8051600280546001600160a01b03199081166001600160a01b0393841617909155602090920151600380549093169116179055610148565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146100db57600080fd5b919050565b6000604082840312156100f257600080fd5b604080519081016001600160401b038111828210171561012257634e487b7160e01b600052604160045260246000fd5b60405261012e836100c4565b815261013c602084016100c4565b60208201529392505050565b6103ba806101576000396000f3fe6080604052600436106100565760003560e01c8063299f9f0e1461005f578063715018a61461007f5780638da5cb5b14610094578063af640d0f146100c6578063d8de6587146100ea578063f2fde38b1461013157005b3661005d57005b005b34801561006b57600080fd5b5061005d61007a3660046102fa565b610151565b34801561008b57600080fd5b5061005d61018e565b3480156100a057600080fd5b506100a96101a2565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100d257600080fd5b506100dc60015481565b6040519081526020016100bd565b3480156100f657600080fd5b50600254600354610111916001600160a01b03908116911682565b604080516001600160a01b039384168152929091166020830152016100bd565b34801561013d57600080fd5b5061005d61014c366004610362565b6101b1565b61015961022f565b8051600280546001600160a01b03199081166001600160a01b0393841617909155602090920151600380549093169116179055565b61019661022f565b6101a0600061028e565b565b6000546001600160a01b031690565b6101b961022f565b6001600160a01b0381166102235760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61022c8161028e565b50565b336102386101a2565b6001600160a01b0316146101a05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161021a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b03811681146102f557600080fd5b919050565b60006040828403121561030c57600080fd5b604080519081016001600160401b038111828210171561033c57634e487b7160e01b600052604160045260246000fd5b604052610348836102de565b8152610356602084016102de565b60208201529392505050565b60006020828403121561037457600080fd5b61037d826102de565b939250505056fea264697066735822122003a3d0a595c8406217e6c3ef102f36e0cea5208126305e1e6de2586d45c286a564736f6c634300080f0033";

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
  }

  override deploy(
    input: ShopConstructor.StructStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Params> {
    return super.deploy(input, overrides || {}) as Promise<Params>;
  }
  override getDeployTransaction(
    input: ShopConstructor.StructStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(input, overrides || {});
  }
  override attach(address: string): Params {
    return super.attach(address) as Params;
  }
  override connect(signer: Signer): Params__factory {
    return super.connect(signer) as Params__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ParamsInterface {
    return new utils.Interface(_abi) as ParamsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Params {
    return new Contract(address, _abi, signerOrProvider) as Params;
  }
}
