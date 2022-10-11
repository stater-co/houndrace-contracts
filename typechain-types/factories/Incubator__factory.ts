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
          {
            internalType: "enum Specie.Enum",
            name: "specie",
            type: "uint8",
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
          {
            internalType: "enum Specie.Enum",
            name: "specie",
            type: "uint8",
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
          {
            internalType: "enum Specie.Enum",
            name: "specie",
            type: "uint8",
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
      {
        internalType: "enum Specie.Enum",
        name: "specie",
        type: "uint8",
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
          {
            internalType: "enum Specie.Enum",
            name: "specie",
            type: "uint8",
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
  "0x60806040523480156200001157600080fd5b50604051620018e3380380620018e3833981016040819052620000349162000329565b806200004033620000f3565b8051600180546001600160a01b03199081166001600160a01b0393841617825560208085015160028054841691861691909117905560408501516003805484169186169190911790556060850151600480549093169416939093179055608083015180518493620000b79260059291019062000202565b5060a091909101516005909101805463ffffffff191663ffffffff9092169190911790556080810151620000eb9062000143565b5050620004ad565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60005b8151811015620001fe57600760008383815181106200016957620001696200046f565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060009054906101000a900460ff161560076000848481518110620001b957620001b96200046f565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916911515919091179055620001f68162000485565b905062000146565b5050565b8280548282559060005260206000209081019282156200025a579160200282015b828111156200025a57825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062000223565b50620002689291506200026c565b5090565b5b808211156200026857600081556001016200026d565b634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b0381118282101715620002be57620002be62000283565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620002ef57620002ef62000283565b604052919050565b80516001600160a01b03811681146200030f57600080fd5b919050565b805163ffffffff811681146200030f57600080fd5b600060208083850312156200033d57600080fd5b82516001600160401b03808211156200035557600080fd5b9084019060c082870312156200036a57600080fd5b6200037462000299565b6200037f83620002f7565b81526200038e848401620002f7565b84820152620003a060408401620002f7565b6040820152620003b360608401620002f7565b6060820152608083015182811115620003cb57600080fd5b8301601f81018813620003dd57600080fd5b805183811115620003f257620003f262000283565b8060051b935062000405868501620002c4565b818152938201860193868101908a8611156200042057600080fd5b928701925b8584101562000449576200043984620002f7565b8252928701929087019062000425565b6080850152506200046091505060a0840162000314565b60a08201529695505050505050565b634e487b7160e01b600052603260045260246000fd5b600060018201620004a657634e487b7160e01b600052601160045260246000fd5b5060010190565b61142680620004bd6000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c80638da5cb5b11610076578063d8de65871161005b578063d8de65871461018a578063e0eb2c5614610214578063f2fde38b1461023957600080fd5b80638da5cb5b1461012f578063d63a8e111461015757600080fd5b8063715018a6116100a7578063715018a6146100eb5780637f1f59bf146100f357806385e3f0581461010657600080fd5b806307b371c7146100c357806314dc490c146100d8575b600080fd5b6100d66100d1366004610d9f565b61024c565b005b6100d66100e6366004610e42565b6102cf565b6100d66103c1565b6100d6610101366004610f6e565b6103d5565b610119610114366004610fb5565b61049d565b604051610126919061109c565b60405180910390f35b60005460405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610126565b61017a610165366004611133565b60076020526000908152604090205460ff1681565b6040519015158152602001610126565b6001546002546003546004546006546101c79473ffffffffffffffffffffffffffffffffffffffff90811694811693811692169063ffffffff1685565b6040805173ffffffffffffffffffffffffffffffffffffffff9687168152948616602086015292851692840192909252909216606082015263ffffffff909116608082015260a001610126565b610227610222366004610fb5565b610612565b60405161012696959493929190611155565b6100d6610247366004611133565b6106d4565b60015460405160009173ffffffffffffffffffffffffffffffffffffffff1690610279908390369061119a565b600060405180830381855af49150503d80600081146102b4576040519150601f19603f3d011682016040523d82523d6000602084013e6102b9565b606091505b50509050806102c757600080fd5b505050505050565b6102d761078d565b8051600180547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff938416178255602080850151600280548416918616919091179055604085015160038054841691861691909117905560608501516004805490931694169390931790556080830151805184936103719260059291019061097d565b5060a09190910151600590910180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff90921691909117905560808101516103be9061080e565b50565b6103c961078d565b6103d36000610908565b565b3360009081526007602052604090205460ff166103f157600080fd5b6000828152600860209081526040918290208351815590830151600182015590820151600282015560608201516003820155608082015182919061043b9060048301906036610a07565b5060a0820151600b8201906104509082611248565b5060c0820151600c820180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600183600781111561049257610492611032565b021790555050505050565b6104a5610a9e565b6000828152600860209081526040808320815160e081018352815481526001820154938101939093526002810154838301526003810154606084015281516106c0810192839052929390926080850192909160048501916036918390855b82829054906101000a900463ffffffff1663ffffffff168152602001906004019060208260030104928301926001038202915080841161050357905050505050508152602001600b82018054610558906111aa565b80601f0160208091040260200160405190810160405280929190818152602001828054610584906111aa565b80156105d15780601f106105a6576101008083540402835291602001916105d1565b820191906000526020600020905b8154815290600101906020018083116105b457829003601f168201915b5050509183525050600c82015460209091019060ff1660078111156105f8576105f8611032565b600781111561060957610609611032565b90525092915050565b60086020526000908152604090208054600182015460028301546003840154600b850180549495939492939192610648906111aa565b80601f0160208091040260200160405190810160405280929190818152602001828054610674906111aa565b80156106c15780601f10610696576101008083540402835291602001916106c1565b820191906000526020600020905b8154815290600101906020018083116106a457829003601f168201915b505050600c909301549192505060ff1686565b6106dc61078d565b73ffffffffffffffffffffffffffffffffffffffff8116610784576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6103be81610908565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103d3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161077b565b60005b8151811015610904576007600083838151811061083057610830611362565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156007600084848151811061089757610897611362565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff16825281019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169115159190911790556108fd81611391565b9050610811565b5050565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8280548282559060005260206000209081019282156109f7579160200282015b828111156109f757825182547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff90911617825560209092019160019091019061099d565b50610a03929150610ae0565b5090565b6007830191839082156109f75791602002820160005b83821115610a6157835183826101000a81548163ffffffff021916908363ffffffff1602179055509260200192600401602081600301049283019260010302610a1d565b8015610a915782816101000a81549063ffffffff0219169055600401602081600301049283019260010302610a61565b5050610a03929150610ae0565b6040518060e0016040528060008152602001600081526020016000815260200160008152602001610acd610af5565b8152606060208201526040016000905290565b5b80821115610a035760008155600101610ae1565b604051806106c001604052806036906020820280368337509192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715610b6657610b66610b14565b60405290565b60405160c0810167ffffffffffffffff81118282101715610b6657610b66610b14565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610bd657610bd6610b14565b604052919050565b803563ffffffff81168114610bf257600080fd5b919050565b600082601f830112610c0857600080fd5b6040516106c080820182811067ffffffffffffffff82111715610c2d57610c2d610b14565b60405283018185821115610c4057600080fd5b845b82811015610c6157610c5381610bde565b825260209182019101610c42565b509195945050505050565b600082601f830112610c7d57600080fd5b813567ffffffffffffffff811115610c9757610c97610b14565b610cc860207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610b8f565b818152846020838601011115610cdd57600080fd5b816020850160208301376000918101602001919091529392505050565b803560088110610bf257600080fd5b60006107808284031215610d1c57600080fd5b610d24610b43565b905081358152602082013560208201526040820135604082015260608201356060820152610d558360808401610bf7565b608082015261074082013567ffffffffffffffff811115610d7557600080fd5b610d8184828501610c6c565b60a083015250610d946107608301610cfa565b60c082015292915050565b600080600080600060a08688031215610db757600080fd5b85359450602086013567ffffffffffffffff80821115610dd657600080fd5b610de289838a01610d09565b9550604088013594506060880135915080821115610dff57600080fd5b50610e0c88828901610d09565b95989497509295608001359392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610bf257600080fd5b60006020808385031215610e5557600080fd5b823567ffffffffffffffff80821115610e6d57600080fd5b9084019060c08287031215610e8157600080fd5b610e89610b6c565b610e9283610e1e565b8152610e9f848401610e1e565b84820152610eaf60408401610e1e565b6040820152610ec060608401610e1e565b6060820152608083013582811115610ed757600080fd5b8301601f81018813610ee857600080fd5b803583811115610efa57610efa610b14565b8060051b9350610f0b868501610b8f565b818152938201860193868101908a861115610f2557600080fd5b928701925b85841015610f4a57610f3b84610e1e565b82529287019290870190610f2a565b608085015250610f5f91505060a08401610bde565b60a08201529695505050505050565b60008060408385031215610f8157600080fd5b82359150602083013567ffffffffffffffff811115610f9f57600080fd5b610fab85828601610d09565b9150509250929050565b600060208284031215610fc757600080fd5b5035919050565b6000815180845260005b81811015610ff457602081850181015186830182015201610fd8565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60088110611098577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b600060208083528351818401528084015160408401526040840151606084015260608401516080840152608084015160a0840160005b60368110156110f557825163ffffffff16825291830191908301906001016110d2565b5050505060a0830151610780806107608501526111166107a0850183610fce565b915060c085015161112982860182611061565b5090949350505050565b60006020828403121561114557600080fd5b61114e82610e1e565b9392505050565b86815285602082015284604082015283606082015260c06080820152600061118060c0830185610fce565b905061118f60a0830184611061565b979650505050505050565b8183823760009101908152919050565b600181811c908216806111be57607f821691505b6020821081036111f7577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f82111561124357600081815260208120601f850160051c810160208610156112245750805b601f850160051c820191505b818110156102c757828155600101611230565b505050565b815167ffffffffffffffff81111561126257611262610b14565b6112768161127084546111aa565b846111fd565b602080601f8311600181146112c957600084156112935750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b1785556102c7565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b82811015611316578886015182559484019460019091019084016112f7565b508582101561135257878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036113e9577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b506001019056fea26469706673582212205fc875ff74cd0a94f22fdba1a7ff8ace3395775ba4e72816d541996991d1d20264736f6c63430008110033";

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
