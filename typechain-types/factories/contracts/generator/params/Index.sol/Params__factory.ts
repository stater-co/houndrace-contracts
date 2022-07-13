/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  Params,
  ParamsInterface,
  GeneratorConstructor,
} from "../../../../../contracts/generator/params/Index.sol/Params";

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
            name: "arenas",
            type: "address",
          },
          {
            internalType: "address",
            name: "hounds",
            type: "address",
          },
          {
            internalType: "address",
            name: "allowed",
            type: "address",
          },
          {
            internalType: "address",
            name: "methods",
            type: "address",
          },
          {
            internalType: "address",
            name: "payments",
            type: "address",
          },
          {
            internalType: "address",
            name: "zerocost",
            type: "address",
          },
        ],
        internalType: "struct GeneratorConstructor.Struct",
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
        name: "arenas",
        type: "address",
      },
      {
        internalType: "address",
        name: "hounds",
        type: "address",
      },
      {
        internalType: "address",
        name: "allowed",
        type: "address",
      },
      {
        internalType: "address",
        name: "methods",
        type: "address",
      },
      {
        internalType: "address",
        name: "payments",
        type: "address",
      },
      {
        internalType: "address",
        name: "zerocost",
        type: "address",
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
            name: "arenas",
            type: "address",
          },
          {
            internalType: "address",
            name: "hounds",
            type: "address",
          },
          {
            internalType: "address",
            name: "allowed",
            type: "address",
          },
          {
            internalType: "address",
            name: "methods",
            type: "address",
          },
          {
            internalType: "address",
            name: "payments",
            type: "address",
          },
          {
            internalType: "address",
            name: "zerocost",
            type: "address",
          },
        ],
        internalType: "struct GeneratorConstructor.Struct",
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
  "0x608060405234801561001057600080fd5b5060405161069738038061069783398101604081905261002f91610140565b610038336100d4565b8051600180546001600160a01b03199081166001600160a01b0393841617909155602083015160028054831691841691909117905560408301516003805483169184169190911790556060830151600480548316918416919091179055608083015160058054831691841691909117905560a083015160068054831691841691909117905560c0909201516007805490931691161790556101fd565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b038116811461013b57600080fd5b919050565b600060e0828403121561015257600080fd5b60405160e081016001600160401b038111828210171561018257634e487b7160e01b600052604160045260246000fd5b60405261018e83610124565b815261019c60208401610124565b60208201526101ad60408401610124565b60408201526101be60608401610124565b60608201526101cf60808401610124565b60808201526101e060a08401610124565b60a08201526101f160c08401610124565b60c08201529392505050565b61048b8061020c6000396000f3fe60806040526004361061004b5760003560e01c8063715018a6146100545780637feaa6d3146100695780638da5cb5b14610089578063d8de6587146100bb578063f2fde38b1461014957005b3661005257005b005b34801561006057600080fd5b50610052610169565b34801561007557600080fd5b50610052610084366004610376565b61017d565b34801561009557600080fd5b5061009e61021e565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100c757600080fd5b50600154600254600354600454600554600654600754610100966001600160a01b03908116968116958116948116938116928116911687565b604080516001600160a01b039889168152968816602088015294871694860194909452918516606085015284166080840152831660a083015290911660c082015260e0016100b2565b34801561015557600080fd5b50610052610164366004610433565b61022d565b6101716102ab565b61017b600061030a565b565b6101856102ab565b8051600180546001600160a01b03199081166001600160a01b0393841617909155602083015160028054831691841691909117905560408301516003805483169184169190911790556060830151600480548316918416919091179055608083015160058054831691841691909117905560a083015160068054831691841691909117905560c090920151600780549093169116179055565b6000546001600160a01b031690565b6102356102ab565b6001600160a01b03811661029f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6102a88161030a565b50565b336102b461021e565b6001600160a01b03161461017b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610296565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b038116811461037157600080fd5b919050565b600060e0828403121561038857600080fd5b60405160e081016001600160401b03811182821017156103b857634e487b7160e01b600052604160045260246000fd5b6040526103c48361035a565b81526103d26020840161035a565b60208201526103e36040840161035a565b60408201526103f46060840161035a565b60608201526104056080840161035a565b608082015261041660a0840161035a565b60a082015261042760c0840161035a565b60c08201529392505050565b60006020828403121561044557600080fd5b61044e8261035a565b939250505056fea2646970667358221220fbc5022ef46e15e3f2f43126f44f686bd88fbb1e8b97750ff7f729ecee38359864736f6c634300080f0033";

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
    input: GeneratorConstructor.StructStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Params> {
    return super.deploy(input, overrides || {}) as Promise<Params>;
  }
  override getDeployTransaction(
    input: GeneratorConstructor.StructStruct,
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