/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ShopRestricted,
  ShopRestrictedInterface,
  ShopConstructor,
} from "../ShopRestricted";

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
  "0x60806040526001805534801561001457600080fd5b50604051610cbc380380610cbc833981016040819052610033916100e2565b8061003d33610076565b8051600280546001600160a01b03199081166001600160a01b03938416179091556020909201516003805490931691161790555061014a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146100dd57600080fd5b919050565b6000604082840312156100f457600080fd5b604080519081016001600160401b038111828210171561012457634e487b7160e01b600052604160045260246000fd5b604052610130836100c6565b815261013e602084016100c6565b60208201529392505050565b610b63806101596000396000f3fe6080604052600436106100795760003560e01c80638da5cb5b1161004b5780638da5cb5b146100f7578063af640d0f14610131578063d8de658714610155578063f2fde38b146101b657005b8063299f9f0e146100825780632a45ccb5146100a2578063715018a6146100c257806381c461ab146100d757005b3661008057005b005b34801561008e57600080fd5b5061008061009d366004610784565b6101d6565b3480156100ae57600080fd5b506100806100bd36600461096d565b610238565b3480156100ce57600080fd5b5061008061037f565b3480156100e357600080fd5b506100806100f23660046109b2565b610393565b34801561010357600080fd5b5060005460405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561013d57600080fd5b5061014760015481565b604051908152602001610128565b34801561016157600080fd5b506002546003546101899173ffffffffffffffffffffffffffffffffffffffff908116911682565b6040805173ffffffffffffffffffffffffffffffffffffffff938416815292909116602083015201610128565b3480156101c257600080fd5b506100806101d13660046109ef565b6104f1565b6101de6105ad565b8051600280547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff93841617909155602090920151600380549093169116179055565b6000818152600560209081526040909120835181547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff90911617815583820151805185936102a39260018501929101906106a3565b5060408281015160028301556060830151600383015560808301516004909201805460a085015160c090950151151565010000000000027fffffffffffffffffffffffffffffffffffffffffffffffffffff00ffffffffff60ff909616640100000000027fffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000090921663ffffffff909516949094171793909316919091179091555181907f1205e0a4f1c12aa126732b10943265e2b38d1bd3862cbe7d571d936baae630f690610373908590610a11565b60405180910390a25050565b6103876105ad565b610391600061062e565b565b600180546000908152600560209081526040909120835181547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909116178155838201518051859492936104019385019201906106a3565b5060408281015160028301556060830151600383015560808301516004909201805460a085015160c090950151151565010000000000027fffffffffffffffffffffffffffffffffffffffffffffffffffff00ffffffffff60ff909616640100000000027fffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000090921663ffffffff9095169490941717939093169190911790915560015490517f1205e0a4f1c12aa126732b10943265e2b38d1bd3862cbe7d571d936baae630f6906104d3908490610a11565b60405180910390a26001600081546104ea90610ace565b9091555050565b6104f96105ad565b73ffffffffffffffffffffffffffffffffffffffff81166105a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6105aa8161062e565b50565b60005473ffffffffffffffffffffffffffffffffffffffff163314610391576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610598565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8280548282559060005260206000209081019282156106de579160200282015b828111156106de5782518255916020019190600101906106c3565b506106ea9291506106ee565b5090565b5b808211156106ea57600081556001016106ef565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff8111828210171561075557610755610703565b60405290565b803573ffffffffffffffffffffffffffffffffffffffff8116811461077f57600080fd5b919050565b60006040828403121561079657600080fd5b6040516040810181811067ffffffffffffffff821117156107b9576107b9610703565b6040526107c58361075b565b81526107d36020840161075b565b60208201529392505050565b600082601f8301126107f057600080fd5b8135602067ffffffffffffffff8083111561080d5761080d610703565b8260051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f8301168101818110848211171561085057610850610703565b60405293845285810183019383810192508785111561086e57600080fd5b83870191505b8482101561088d57813583529183019190830190610874565b979650505050505050565b803563ffffffff8116811461077f57600080fd5b803560ff8116811461077f57600080fd5b8035801515811461077f57600080fd5b600060e082840312156108df57600080fd5b6108e7610732565b90506108f28261075b565b8152602082013567ffffffffffffffff81111561090e57600080fd5b61091a848285016107df565b602083015250604082013560408201526060820135606082015261094060808301610898565b608082015261095160a083016108ac565b60a082015261096260c083016108bd565b60c082015292915050565b6000806040838503121561098057600080fd5b823567ffffffffffffffff81111561099757600080fd5b6109a3858286016108cd565b95602094909401359450505050565b6000602082840312156109c457600080fd5b813567ffffffffffffffff8111156109db57600080fd5b6109e7848285016108cd565b949350505050565b600060208284031215610a0157600080fd5b610a0a8261075b565b9392505050565b6020808252825173ffffffffffffffffffffffffffffffffffffffff16828201528281015160e06040840152805161010084018190526000929182019083906101208601905b80831015610a775783518252928401926001929092019190840190610a57565b50604087015160608701526060870151608087015260808701519350610aa560a087018563ffffffff169052565b60a087015160ff811660c0880152935060c087015180151560e088015293509695505050505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610b26577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b506001019056fea26469706673582212206b953c1aeb05a6c65d00c2166344549db77f464a06062eaf88382c6f015800da64736f6c63430008110033";

type ShopRestrictedConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ShopRestrictedConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ShopRestricted__factory extends ContractFactory {
  constructor(...args: ShopRestrictedConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ShopRestricted";
  }

  deploy(
    input: ShopConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ShopRestricted> {
    return super.deploy(input, overrides || {}) as Promise<ShopRestricted>;
  }
  getDeployTransaction(
    input: ShopConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(input, overrides || {});
  }
  attach(address: string): ShopRestricted {
    return super.attach(address) as ShopRestricted;
  }
  connect(signer: Signer): ShopRestricted__factory {
    return super.connect(signer) as ShopRestricted__factory;
  }
  static readonly contractName: "ShopRestricted";
  public readonly contractName: "ShopRestricted";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShopRestrictedInterface {
    return new utils.Interface(_abi) as ShopRestrictedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ShopRestricted {
    return new Contract(address, _abi, signerOrProvider) as ShopRestricted;
  }
}
