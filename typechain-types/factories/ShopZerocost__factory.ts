/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ShopZerocost,
  ShopZerocostInterface,
  ShopConstructor,
} from "../ShopZerocost";

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
          {
            internalType: "address",
            name: "alphadune",
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
    inputs: [
      {
        internalType: "address",
        name: "requester",
        type: "address",
      },
    ],
    name: "checkDiscount",
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
      {
        internalType: "address",
        name: "alphadune",
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
          {
            internalType: "address",
            name: "alphadune",
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
];

const _bytecode =
  "0x60806040526001805534801561001457600080fd5b50604051610dd9380380610dd9833981016040819052610033916100f6565b8061003d3361008a565b8051600280546001600160a01b03199081166001600160a01b039384161790915560208301516003805483169184169190911790556040909201516004805490931691161790555061016f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146100f157600080fd5b919050565b60006060828403121561010857600080fd5b604051606081016001600160401b038111828210171561013857634e487b7160e01b600052604160045260246000fd5b604052610144836100da565b8152610152602084016100da565b6020820152610163604084016100da565b60408201529392505050565b610c5b8061017e6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063af640d0f1161005b578063af640d0f146100da578063d6dc0dfd146100e3578063d8de6587146100f6578063f2fde38b1461015a57600080fd5b8063715018a61461008257806385e87de21461008c5780638da5cb5b146100b2575b600080fd5b61008a61016d565b005b61009f61009a366004610aa4565b610181565b6040519081526020015b60405180910390f35b60005460405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100a9565b61009f60015481565b61008a6100f1366004610ac8565b61085a565b6002546003546004546101239273ffffffffffffffffffffffffffffffffffffffff908116928116911683565b6040805173ffffffffffffffffffffffffffffffffffffffff948516815292841660208401529216918101919091526060016100a9565b61008a610168366004610aa4565b6108d0565b61017561098c565b61017f6000610a0d565b565b60008060005b60015481101561085357600081815260056020526040902060040154640100000000900460ff166001036103f55760005b6000828152600560205260409020600101548110156103f35760008281526005602052604090206004015463ffffffff168311806101f65750826001145b801561021b5750600082815260056020526040902060040154600163ffffffff909116115b156103e357600082815260056020526040902080546001909101805473ffffffffffffffffffffffffffffffffffffffff9092169162fdd58e9188918590811061026757610267610b61565b6000918252602090912001546040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff90921660048301526024820152604401602060405180830381865afa92505050801561031b575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261031891810190610b90565b60015b610355573d808015610349576040519150601f19603f3d011682016040523d82523d6000602084013e61034e565b606091505b50506103e3565b80156103e157600083815260056020526040902060020154421080159061038d57506000838152600560205260409020600301544211155b806103c157506000838152600560205260409020600201541580156103c15750600083815260056020526040902060030154155b156103e15760008381526005602052604090206004015463ffffffff1693505b505b6103ec81610ba9565b90506101b8565b505b600081815260056020526040902060040154640100000000900460ff166002036105e75760008181526005602052604090206004015463ffffffff1682118061043e5750816001145b80156104635750600081815260056020526040902060040154600163ffffffff909116115b156105e757600081815260056020526040908190205490517f4b341aed00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff868116600483015290911690634b341aed90602401602060405180830381865afa92505050801561051f575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261051c91810190610b90565b60015b610559573d80801561054d576040519150601f19603f3d011682016040523d82523d6000602084013e610552565b606091505b50506105e7565b80156105e557600082815260056020526040902060020154421080159061059157506000828152600560205260409020600301544211155b806105c557506000828152600560205260409020600201541580156105c55750600082815260056020526040902060030154155b156105e55760008281526005602052604090206004015463ffffffff1692505b505b600081815260056020526040812060040154640100000000900460ff1690036108435760005b6000828152600560205260409020600101548110156108415760008281526005602052604090206004015463ffffffff1683118061064b5750826001145b80156106705750600082815260056020526040902060040154600163ffffffff909116115b1561083157600082815260056020526040902080546001909101805473ffffffffffffffffffffffffffffffffffffffff90921691636352211e9190849081106106bc576106bc610b61565b90600052602060002001546040518263ffffffff1660e01b81526004016106e591815260200190565b602060405180830381865afa92505050801561073c575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261073991810190610c08565b60015b610776573d80801561076a576040519150601f19603f3d011682016040523d82523d6000602084013e61076f565b606091505b5050610831565b8573ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361082f5760008381526005602052604090206002015442108015906107db57506000838152600560205260409020600301544211155b8061080f575060008381526005602052604090206002015415801561080f5750600083815260056020526040902060030154155b1561082f5760008381526005602052604090206004015463ffffffff1693505b505b61083a81610ba9565b905061060d565b505b61084c81610ba9565b9050610187565b5092915050565b61086261098c565b8051600280547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff938416179091556020830151600380548316918416919091179055604090920151600480549093169116179055565b6108d861098c565b73ffffffffffffffffffffffffffffffffffffffff8116610980576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61098981610a0d565b50565b60005473ffffffffffffffffffffffffffffffffffffffff16331461017f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610977565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b73ffffffffffffffffffffffffffffffffffffffff8116811461098957600080fd5b600060208284031215610ab657600080fd5b8135610ac181610a82565b9392505050565b600060608284031215610ada57600080fd5b6040516060810181811067ffffffffffffffff82111715610b24577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040528235610b3281610a82565b81526020830135610b4281610a82565b60208201526040830135610b5581610a82565b60408201529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215610ba257600080fd5b5051919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610c01577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b600060208284031215610c1a57600080fd5b8151610ac181610a8256fea264697066735822122065d69670cc3dbce1172bf044488e2e53dca8ffdf6be92b21b9e2fcc551e434f164736f6c63430008110033";

type ShopZerocostConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ShopZerocostConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ShopZerocost__factory extends ContractFactory {
  constructor(...args: ShopZerocostConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ShopZerocost";
  }

  deploy(
    input: ShopConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ShopZerocost> {
    return super.deploy(input, overrides || {}) as Promise<ShopZerocost>;
  }
  getDeployTransaction(
    input: ShopConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(input, overrides || {});
  }
  attach(address: string): ShopZerocost {
    return super.attach(address) as ShopZerocost;
  }
  connect(signer: Signer): ShopZerocost__factory {
    return super.connect(signer) as ShopZerocost__factory;
  }
  static readonly contractName: "ShopZerocost";
  public readonly contractName: "ShopZerocost";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShopZerocostInterface {
    return new utils.Interface(_abi) as ShopZerocostInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ShopZerocost {
    return new Contract(address, _abi, signerOrProvider) as ShopZerocost;
  }
}
