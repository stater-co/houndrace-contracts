/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ShopMethods,
  ShopMethodsInterface,
  ShopConstructor,
} from "../ShopMethods";

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
  "0x60806040526001805534801561001457600080fd5b50604051611054380380611054833981016040819052610033916100e2565b8061003d33610076565b8051600280546001600160a01b03199081166001600160a01b03938416179091556020909201516003805490931691161790555061014a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146100dd57600080fd5b919050565b6000604082840312156100f457600080fd5b604080519081016001600160401b038111828210171561012457634e487b7160e01b600052604160045260246000fd5b604052610130836100c6565b815261013e602084016100c6565b60208201529392505050565b610efb806101596000396000f3fe60806040526004361061006e5760003560e01c8063ad6a87451161004b578063ad6a8745146100e6578063af640d0f14610114578063d8de65871461012a578063f2fde38b1461018b57005b8063299f9f0e14610077578063715018a6146100975780638da5cb5b146100ac57005b3661007557005b005b34801561008357600080fd5b50610075610092366004610d57565b6101ab565b3480156100a357600080fd5b5061007561020d565b3480156100b857600080fd5b5060005460405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156100f257600080fd5b50610106610101366004610ddd565b610221565b6040519081526020016100dd565b34801561012057600080fd5b5061010660015481565b34801561013657600080fd5b5060025460035461015e9173ffffffffffffffffffffffffffffffffffffffff908116911682565b6040805173ffffffffffffffffffffffffffffffffffffffff9384168152929091166020830152016100dd565b34801561019757600080fd5b506100756101a6366004610ddd565b610b83565b6101b3610c3f565b8051600280547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff93841617909155602090920151600380549093169116179055565b610215610c3f565b61021f6000610cc0565b565b60008060005b600154811015610b7c57600081815260056020526040902060040154640100000000900460ff166001036105f85760005b6000828152600560205260409020600101548110156105f65760008281526005602052604090206004015463ffffffff168311806102965750826001145b80156102bb5750600082815260056020526040902060040154600163ffffffff909116115b156105e657600082815260056020526040902080546001909101805473ffffffffffffffffffffffffffffffffffffffff9092169162fdd58e9188918590811061030757610307610e01565b6000918252602090912001546040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff90921660048301526024820152604401602060405180830381865afa9250505080156103bb575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526103b891810190610e30565b60015b6103f5573d8080156103e9576040519150601f19603f3d011682016040523d82523d6000602084013e6103ee565b606091505b50506105e6565b80156105e457600083815260056020526040902060020154421080159061042d57506000838152600560205260409020600301544211155b8061046157506000838152600560205260409020600201541580156104615750600083815260056020526040902060030154155b156105e45760008381526005602052604090206004015465010000000000900460ff16156105c957600083815260056020526040902080546001909101805473ffffffffffffffffffffffffffffffffffffffff9092169163f242432a918991309190879081106104d4576104d4610e01565b60009182526020909120015460405160e085901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff93841660048083019190915292909316602484015260448301526001606483015260a0608483015260a48201527f307830300000000000000000000000000000000000000000000000000000000060c482015260e401600060405180830381600087803b15801561059157600080fd5b505af11580156105a5573d6000803e3d6000fd5b50505060008481526005602052604090206004015463ffffffff1694506105e49050565b60008381526005602052604090206004015463ffffffff1693505b505b6105ef81610e49565b9050610258565b505b600081815260056020526040902060040154640100000000900460ff166002036107ea5760008181526005602052604090206004015463ffffffff168211806106415750816001145b80156106665750600081815260056020526040902060040154600163ffffffff909116115b156107ea57600081815260056020526040908190205490517f4b341aed00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff868116600483015290911690634b341aed90602401602060405180830381865afa925050508015610722575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261071f91810190610e30565b60015b61075c573d808015610750576040519150601f19603f3d011682016040523d82523d6000602084013e610755565b606091505b50506107ea565b80156107e857600082815260056020526040902060020154421080159061079457506000828152600560205260409020600301544211155b806107c857506000828152600560205260409020600201541580156107c85750600082815260056020526040902060030154155b156107e85760008281526005602052604090206004015463ffffffff1692505b505b600081815260056020526040812060040154640100000000900460ff169003610b6c5760005b600082815260056020526040902060010154811015610b6a5760008281526005602052604090206004015463ffffffff1683118061084e5750826001145b80156108735750600082815260056020526040902060040154600163ffffffff909116115b15610b5a57600082815260056020526040902080546001909101805473ffffffffffffffffffffffffffffffffffffffff90921691636352211e9190849081106108bf576108bf610e01565b90600052602060002001546040518263ffffffff1660e01b81526004016108e891815260200190565b602060405180830381865afa92505050801561093f575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261093c91810190610ea8565b60015b610979573d80801561096d576040519150601f19603f3d011682016040523d82523d6000602084013e610972565b606091505b5050610b5a565b8573ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610b585760008381526005602052604090206002015442108015906109de57506000838152600560205260409020600301544211155b80610a125750600083815260056020526040902060020154158015610a125750600083815260056020526040902060030154155b15610b585760008381526005602052604090206004015465010000000000900460ff1615610b3d57600083815260056020526040902080546001909101805473ffffffffffffffffffffffffffffffffffffffff909216916342842e0e91899130919087908110610a8557610a85610e01565b6000918252602090912001546040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b16815273ffffffffffffffffffffffffffffffffffffffff93841660048201529290911660248301526044820152606401600060405180830381600087803b158015610b0557600080fd5b505af1158015610b19573d6000803e3d6000fd5b50505060008481526005602052604090206004015463ffffffff169450610b589050565b60008381526005602052604090206004015463ffffffff1693505b505b610b6381610e49565b9050610810565b505b610b7581610e49565b9050610227565b5092915050565b610b8b610c3f565b73ffffffffffffffffffffffffffffffffffffffff8116610c33576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b610c3c81610cc0565b50565b60005473ffffffffffffffffffffffffffffffffffffffff16331461021f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610c2a565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b73ffffffffffffffffffffffffffffffffffffffff81168114610c3c57600080fd5b600060408284031215610d6957600080fd5b6040516040810181811067ffffffffffffffff82111715610db3577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040528235610dc181610d35565b81526020830135610dd181610d35565b60208201529392505050565b600060208284031215610def57600080fd5b8135610dfa81610d35565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215610e4257600080fd5b5051919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610ea1577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b600060208284031215610eba57600080fd5b8151610dfa81610d3556fea264697066735822122082a59b2c517526c5912a585900f086cbacf15e9bccd19105f53d542d568538b764736f6c63430008110033";

type ShopMethodsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ShopMethodsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ShopMethods__factory extends ContractFactory {
  constructor(...args: ShopMethodsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ShopMethods";
  }

  deploy(
    input: ShopConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ShopMethods> {
    return super.deploy(input, overrides || {}) as Promise<ShopMethods>;
  }
  getDeployTransaction(
    input: ShopConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(input, overrides || {});
  }
  attach(address: string): ShopMethods {
    return super.attach(address) as ShopMethods;
  }
  connect(signer: Signer): ShopMethods__factory {
    return super.connect(signer) as ShopMethods__factory;
  }
  static readonly contractName: "ShopMethods";
  public readonly contractName: "ShopMethods";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShopMethodsInterface {
    return new utils.Interface(_abi) as ShopMethodsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ShopMethods {
    return new Contract(address, _abi, signerOrProvider) as ShopMethods;
  }
}
