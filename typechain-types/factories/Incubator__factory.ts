/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Incubator,
  IncubatorInterface,
  IncubatorConstructor,
} from "../Incubator";

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
            name: "randomness",
            type: "address",
          },
          {
            internalType: "address",
            name: "genetics",
            type: "address",
          },
          {
            internalType: "address",
            name: "gamification",
            type: "address",
          },
          {
            internalType: "address",
            name: "races",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "allowed",
            type: "address[]",
          },
          {
            internalType: "uint32",
            name: "secondsToMaturity",
            type: "uint32",
          },
        ],
        internalType: "struct IncubatorConstructor.Struct",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hound1Id",
        type: "uint256",
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
        name: "hound1",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "hound2Id",
        type: "uint256",
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
        name: "hound2",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "onId",
        type: "uint256",
      },
    ],
    name: "breedHounds",
    outputs: [],
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
        name: "randomness",
        type: "address",
      },
      {
        internalType: "address",
        name: "genetics",
        type: "address",
      },
      {
        internalType: "address",
        name: "gamification",
        type: "address",
      },
      {
        internalType: "address",
        name: "races",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "secondsToMaturity",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "theId",
        type: "uint256",
      },
    ],
    name: "getIdentity",
    outputs: [
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
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "houndsIdentity",
    outputs: [
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
        internalType: "string",
        name: "extensionTraits",
        type: "string",
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
            name: "randomness",
            type: "address",
          },
          {
            internalType: "address",
            name: "genetics",
            type: "address",
          },
          {
            internalType: "address",
            name: "gamification",
            type: "address",
          },
          {
            internalType: "address",
            name: "races",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "allowed",
            type: "address[]",
          },
          {
            internalType: "uint32",
            name: "secondsToMaturity",
            type: "uint32",
          },
        ],
        internalType: "struct IncubatorConstructor.Struct",
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
        internalType: "uint256",
        name: "theId",
        type: "uint256",
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
    ],
    name: "setIdentity",
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
  "0x60806040523480156200001157600080fd5b5060405162001535380380620015358339810160408190526200003491620003b7565b80620000403362000107565b8051600180546001600160a01b03199081166001600160a01b0393841617825560208085015160028054841691861691909117905560408501516003805484169186169190911790556060850151600480548416918616919091179055608085015160058054909316941693909317905560a083015180518493620000cb9260069291019062000216565b5060c091909101516006909101805463ffffffff191663ffffffff90921691909117905560a0810151620000ff9062000157565b5050620004db565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60005b81518110156200021257600860008383815181106200017d576200017d6200049d565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060009054906101000a900460ff161560086000848481518110620001cd57620001cd6200049d565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff19169115159190911790556200020a81620004b3565b90506200015a565b5050565b8280548282559060005260206000209081019282156200026e579160200282015b828111156200026e57825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062000237565b506200027c92915062000280565b5090565b5b808211156200027c576000815560010162000281565b634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b0381118282101715620002d257620002d262000297565b60405290565b80516001600160a01b0381168114620002f057600080fd5b919050565b600082601f8301126200030757600080fd5b815160206001600160401b038083111562000326576200032662000297565b8260051b604051601f19603f830116810181811084821117156200034e576200034e62000297565b6040529384528581018301938381019250878511156200036d57600080fd5b83870191505b8482101562000397576200038782620002d8565b8352918301919083019062000373565b979650505050505050565b805163ffffffff81168114620002f057600080fd5b600060208284031215620003ca57600080fd5b81516001600160401b0380821115620003e257600080fd5b9083019060e08286031215620003f757600080fd5b62000401620002ad565b6200040c83620002d8565b81526200041c60208401620002d8565b60208201526200042f60408401620002d8565b60408201526200044260608401620002d8565b60608201526200045560808401620002d8565b608082015260a0830151828111156200046d57600080fd5b6200047b87828601620002f5565b60a0830152506200048f60c08401620003a2565b60c082015295945050505050565b634e487b7160e01b600052603260045260246000fd5b600060018201620004d457634e487b7160e01b600052601160045260246000fd5b5060010190565b61104a80620004eb6000396000f3fe608060405234801561001057600080fd5b506004361061008e5760003560e01c8063715018a61461009357806385e3f0581461009d5780638da5cb5b146100c65780639033586a146100e6578063bcb515ea146100f9578063c2115d4d1461010c578063d63a8e111461011f578063d8de658714610152578063e0eb2c56146101d0578063f2fde38b146101f4575b600080fd5b61009b610207565b005b6100b06100ab366004610925565b61021b565b6040516100bd9190610984565b60405180910390f35b6100ce61035f565b6040516001600160a01b0390911681526020016100bd565b61009b6100f4366004610c03565b61036e565b61009b610107366004610c81565b6103e4565b61009b61011a366004610d64565b610466565b61014261012d366004610e36565b60086020526000908152604090205460ff1681565b60405190151581526020016100bd565b600154600254600354600454600554600754610188956001600160a01b0390811695811694811693811692169063ffffffff1686565b604080516001600160a01b0397881681529587166020870152938616938501939093529084166060840152909216608082015263ffffffff90911660a082015260c0016100bd565b6101e36101de366004610925565b61052c565b6040516100bd959493929190610e58565b61009b610202366004610e36565b6105e5565b61020f610660565b61021960006106bf565b565b6102236107c4565b6000828152600960209081526040808320815160c081018352815481526001820154938101939093526002810154838301526003810154606084015281516106c0810192839052929390926080850192909160048501916036918390855b82829054906101000a900463ffffffff1663ffffffff168152602001906004019060208260030104928301926001038202915080841161028157905050505050508152602001600b820180546102d690610e83565b80601f016020809104026020016040519081016040528092919081815260200182805461030290610e83565b801561034f5780601f106103245761010080835404028352916020019161034f565b820191906000526020600020905b81548152906001019060200180831161033257829003601f168201915b5050505050815250509050919050565b6000546001600160a01b031690565b6001546040516000916001600160a01b03169061038e9083903690610ebd565b600060405180830381855af49150503d80600081146103c9576040519150601f19603f3d011682016040523d82523d6000602084013e6103ce565b606091505b50509050806103dc57600080fd5b505050505050565b3360009081526008602052604090205460ff1661040057600080fd5b6000828152600960209081526040918290208351815590830151600182015590820151600282015560608201516003820155608082015182919061044a9060048301906036610800565b5060a0820151600b82019061045f9082610f18565b5050505050565b61046e610660565b8051600180546001600160a01b03199081166001600160a01b0393841617825560208085015160028054841691861691909117905560408501516003805484169186169190911790556060850151600480548416918616919091179055608085015160058054909316941693909317905560a0830151805184936104f79260069291019061089c565b5060c091909101516006909101805463ffffffff191663ffffffff90921691909117905560a08101516105299061070f565b50565b60096020526000908152604090208054600182015460028301546003840154600b85018054949593949293919261056290610e83565b80601f016020809104026020016040519081016040528092919081815260200182805461058e90610e83565b80156105db5780601f106105b0576101008083540402835291602001916105db565b820191906000526020600020905b8154815290600101906020018083116105be57829003601f168201915b5050505050905085565b6105ed610660565b6001600160a01b0381166106575760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b610529816106bf565b3361066961035f565b6001600160a01b0316146102195760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161064e565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60005b81518110156107c0576008600083838151811061073157610731610fd7565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060009054906101000a900460ff16156008600084848151811061077e5761077e610fd7565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff19169115159190911790556107b981610fed565b9050610712565b5050565b6040518060c00160405280600081526020016000815260200160008152602001600081526020016107f36108f1565b8152602001606081525090565b60078301918390821561088c5791602002820160005b8382111561085a57835183826101000a81548163ffffffff021916908363ffffffff1602179055509260200192600401602081600301049283019260010302610816565b801561088a5782816101000a81549063ffffffff021916905560040160208160030104928301926001030261085a565b505b50610898929150610910565b5090565b82805482825590600052602060002090810192821561088c579160200282015b8281111561088c57825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906108bc565b604051806106c001604052806036906020820280368337509192915050565b5b808211156108985760008155600101610911565b60006020828403121561093757600080fd5b5035919050565b6000815180845260005b8181101561096457602081850181015186830182015201610948565b506000602082860101526020601f19601f83011685010191505092915050565b600060208083528351818401528084015160408401526040840151606084015260608401516080840152608084015160a0840160005b60368110156109dd57825163ffffffff16825291830191908301906001016109ba565b5050505060a0830151610760838101526109fb61078084018261093e565b949350505050565b634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b0381118282101715610a3b57610a3b610a03565b60405290565b6040516106c081016001600160401b0381118282101715610a3b57610a3b610a03565b60405160e081016001600160401b0381118282101715610a3b57610a3b610a03565b604051601f8201601f191681016001600160401b0381118282101715610aae57610aae610a03565b604052919050565b803563ffffffff81168114610aca57600080fd5b919050565b600082601f830112610ae057600080fd5b81356001600160401b03811115610af957610af9610a03565b610b0c601f8201601f1916602001610a86565b818152846020838601011115610b2157600080fd5b816020850160208301376000918101602001919091529392505050565b60006107608284031215610b5157600080fd5b610b59610a19565b90508135815260208083013581830152604083013560408301526060830135606083015283609f840112610b8c57600080fd5b610b94610a41565b80610740850186811115610ba757600080fd5b608086015b81811015610bca57610bbd81610ab6565b8452928401928401610bac565b506080850191909152359150506001600160401b03811115610beb57600080fd5b610bf784828501610acf565b60a08301525092915050565b600080600080600060a08688031215610c1b57600080fd5b8535945060208601356001600160401b0380821115610c3957600080fd5b610c4589838a01610b3e565b9550604088013594506060880135915080821115610c6257600080fd5b50610c6f88828901610b3e565b95989497509295608001359392505050565b60008060408385031215610c9457600080fd5b8235915060208301356001600160401b03811115610cb157600080fd5b610cbd85828601610b3e565b9150509250929050565b80356001600160a01b0381168114610aca57600080fd5b600082601f830112610cef57600080fd5b813560206001600160401b03821115610d0a57610d0a610a03565b8160051b610d19828201610a86565b9283528481018201928281019087851115610d3357600080fd5b83870192505b84831015610d5957610d4a83610cc7565b82529183019190830190610d39565b979650505050505050565b600060208284031215610d7657600080fd5b81356001600160401b0380821115610d8d57600080fd5b9083019060e08286031215610da157600080fd5b610da9610a64565b610db283610cc7565b8152610dc060208401610cc7565b6020820152610dd160408401610cc7565b6040820152610de260608401610cc7565b6060820152610df360808401610cc7565b608082015260a083013582811115610e0a57600080fd5b610e1687828601610cde565b60a083015250610e2860c08401610ab6565b60c082015295945050505050565b600060208284031215610e4857600080fd5b610e5182610cc7565b9392505050565b85815284602082015283604082015282606082015260a060808201526000610d5960a083018461093e565b600181811c90821680610e9757607f821691505b602082108103610eb757634e487b7160e01b600052602260045260246000fd5b50919050565b8183823760009101908152919050565b601f821115610f1357600081815260208120601f850160051c81016020861015610ef45750805b601f850160051c820191505b818110156103dc57828155600101610f00565b505050565b81516001600160401b03811115610f3157610f31610a03565b610f4581610f3f8454610e83565b84610ecd565b602080601f831160018114610f7a5760008415610f625750858301515b600019600386901b1c1916600185901b1785556103dc565b600085815260208120601f198616915b82811015610fa957888601518255948401946001909101908401610f8a565b5085821015610fc75787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052603260045260246000fd5b60006001820161100d57634e487b7160e01b600052601160045260246000fd5b506001019056fea26469706673582212207fd6db299efecc67bfe3863647715eefa48319bb15f8f0f4ac6ed0ed12d68e6a64736f6c63430008100033";

type IncubatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IncubatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Incubator__factory extends ContractFactory {
  constructor(...args: IncubatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Incubator";
  }

  deploy(
    input: IncubatorConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Incubator> {
    return super.deploy(input, overrides || {}) as Promise<Incubator>;
  }
  getDeployTransaction(
    input: IncubatorConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(input, overrides || {});
  }
  attach(address: string): Incubator {
    return super.attach(address) as Incubator;
  }
  connect(signer: Signer): Incubator__factory {
    return super.connect(signer) as Incubator__factory;
  }
  static readonly contractName: "Incubator";
  public readonly contractName: "Incubator";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IncubatorInterface {
    return new utils.Interface(_abi) as IncubatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Incubator {
    return new Contract(address, _abi, signerOrProvider) as Incubator;
  }
}
