/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Payments,
  PaymentsInterface,
  PaymentsConstructor,
} from "../Payments";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "alphadune",
            type: "address",
          },
          {
            internalType: "address",
            name: "restricted",
            type: "address",
          },
          {
            internalType: "address",
            name: "methods",
            type: "address",
          },
        ],
        internalType: "struct PaymentsConstructor.Struct",
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
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "enum Payment.PaymentTypes",
        name: "",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "alphaduneReservoirs",
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
        name: "alphadune",
        type: "address",
      },
      {
        internalType: "address",
        name: "restricted",
        type: "address",
      },
      {
        internalType: "address",
        name: "methods",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "currency",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "enum Payment.PaymentTypes",
        name: "paymentType",
        type: "uint8",
      },
    ],
    name: "fillRewardsReservoir",
    outputs: [],
    stateMutability: "payable",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "address",
        name: "currency",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "enum Payment.PaymentTypes",
        name: "paymentType",
        type: "uint8",
      },
    ],
    name: "pay",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "enum Payment.PaymentTypes",
        name: "",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewardsReservoirs",
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
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "alphadune",
            type: "address",
          },
          {
            internalType: "address",
            name: "restricted",
            type: "address",
          },
          {
            internalType: "address",
            name: "methods",
            type: "address",
          },
        ],
        internalType: "struct PaymentsConstructor.Struct",
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
  "0x608060405234801561001057600080fd5b5060405161098e38038061098e83398101604081905261002f916100f6565b806100393361008a565b600180558051600480546001600160a01b03199081166001600160a01b039384161790915560208301516005805483169184169190911790556040909201516006805490931691161790555061016f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146100f157600080fd5b919050565b60006060828403121561010857600080fd5b604051606081016001600160401b038111828210171561013857634e487b7160e01b600052604160045260246000fd5b604052610144836100da565b8152610152602084016100da565b6020820152610163604084016100da565b60408201529392505050565b6108108061017e6000396000f3fe6080604052600436106100775760003560e01c8063715018a6146100805780638da5cb5b1461009557806398f66e3f146100c7578063a1575fe214610113578063c01f59c214610151578063d6dc0dfd14610164578063d8de658714610184578063edcfb3f3146101db578063f2fde38b146101ee57005b3661007e57005b005b34801561008c57600080fd5b5061007e61020e565b3480156100a157600080fd5b506100aa610222565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100d357600080fd5b506101056100e2366004610529565b600360209081526000938452604080852082529284528284209052825290205481565b6040519081526020016100be565b34801561011f57600080fd5b5061010561012e366004610529565b600260209081526000938452604080852082529284528284209052825290205481565b61007e61015f366004610615565b610231565b34801561017057600080fd5b5061007e61017f3660046106b9565b610308565b34801561019057600080fd5b506004546005546006546101b1926001600160a01b03908116928116911683565b604080516001600160a01b03948516815292841660208401529216918101919091526060016100be565b61007e6101e9366004610724565b610359565b3480156101fa57600080fd5b5061007e6102093660046107a8565b6103d6565b61021661044f565b61022060006104ae565b565b6000546001600160a01b031690565b6002600154036102885760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b60026001556006546040516000916001600160a01b0316906102ad90839036906107ca565b600060405180830381855af49150503d80600081146102e8576040519150601f19603f3d011682016040523d82523d6000602084013e6102ed565b606091505b50509050806102fb57600080fd5b5050600180555050505050565b61031061044f565b8051600480546001600160a01b03199081166001600160a01b03938416179091556020830151600580548316918416919091179055604090920151600680549093169116179055565b61036161044f565b6005546040516000916001600160a01b03169061038190839036906107ca565b600060405180830381855af49150503d80600081146103bc576040519150601f19603f3d011682016040523d82523d6000602084013e6103c1565b606091505b50509050806103cf57600080fd5b5050505050565b6103de61044f565b6001600160a01b0381166104435760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161027f565b61044c816104ae565b50565b33610458610222565b6001600160a01b0316146102205760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161027f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356004811061050d57600080fd5b919050565b80356001600160a01b038116811461050d57600080fd5b60008060006060848603121561053e57600080fd5b610547846104fe565b925061055560208501610512565b9150604084013590509250925092565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261058c57600080fd5b813560206001600160401b03808311156105a8576105a8610565565b8260051b604051601f19603f830116810181811084821117156105cd576105cd610565565b6040529384528581018301938381019250878511156105eb57600080fd5b83870191505b8482101561060a578135835291830191908301906105f1565b979650505050505050565b60008060008060008060c0878903121561062e57600080fd5b61063787610512565b955061064560208801610512565b945061065360408801610512565b935060608701356001600160401b038082111561066f57600080fd5b61067b8a838b0161057b565b9450608089013591508082111561069157600080fd5b5061069e89828a0161057b565b9250506106ad60a088016104fe565b90509295509295509295565b6000606082840312156106cb57600080fd5b604051606081016001600160401b03811182821017156106ed576106ed610565565b6040526106f983610512565b815261070760208401610512565b602082015261071860408401610512565b60408201529392505050565b6000806000806080858703121561073a57600080fd5b61074385610512565b935060208501356001600160401b038082111561075f57600080fd5b61076b8883890161057b565b9450604087013591508082111561078157600080fd5b5061078e8782880161057b565b92505061079d606086016104fe565b905092959194509250565b6000602082840312156107ba57600080fd5b6107c382610512565b9392505050565b818382376000910190815291905056fea264697066735822122018ba4897c641a575be1051345d23944f8d11edf649da2152c0e17d6201071ef164736f6c63430008110033";

type PaymentsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PaymentsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Payments__factory extends ContractFactory {
  constructor(...args: PaymentsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Payments";
  }

  deploy(
    input: PaymentsConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Payments> {
    return super.deploy(input, overrides || {}) as Promise<Payments>;
  }
  getDeployTransaction(
    input: PaymentsConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(input, overrides || {});
  }
  attach(address: string): Payments {
    return super.attach(address) as Payments;
  }
  connect(signer: Signer): Payments__factory {
    return super.connect(signer) as Payments__factory;
  }
  static readonly contractName: "Payments";
  public readonly contractName: "Payments";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PaymentsInterface {
    return new utils.Interface(_abi) as PaymentsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Payments {
    return new Contract(address, _abi, signerOrProvider) as Payments;
  }
}
