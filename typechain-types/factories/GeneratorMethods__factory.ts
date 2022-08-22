/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GeneratorMethods,
  GeneratorMethodsInterface,
  GeneratorConstructor,
} from "../GeneratorMethods";

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
          {
            internalType: "address",
            name: "incubator",
            type: "address",
          },
          {
            internalType: "address",
            name: "gamification",
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
      {
        internalType: "address",
        name: "incubator",
        type: "address",
      },
      {
        internalType: "address",
        name: "gamification",
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
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256[]",
            name: "participants",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "enqueueDates",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "arena",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "entryFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastCompletion",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address[]",
                name: "from",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "to",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "currency",
                type: "address[]",
              },
              {
                internalType: "uint256[][]",
                name: "ids",
                type: "uint256[][]",
              },
              {
                internalType: "uint256[][]",
                name: "amounts",
                type: "uint256[][]",
              },
              {
                internalType: "uint32[]",
                name: "paymentType",
                type: "uint32[]",
              },
            ],
            internalType: "struct Payment.Struct",
            name: "payments",
            type: "tuple",
          },
          {
            internalType: "uint32",
            name: "totalParticipants",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "cooldown",
            type: "uint32",
          },
          {
            internalType: "bool",
            name: "closed",
            type: "bool",
          },
        ],
        internalType: "struct Queue.Struct",
        name: "queue",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "queueId",
        type: "uint256",
      },
    ],
    name: "generate",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "participants",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "arena",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "entryFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "randomness",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address[]",
                name: "from",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "to",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "currency",
                type: "address[]",
              },
              {
                internalType: "uint256[][]",
                name: "ids",
                type: "uint256[][]",
              },
              {
                internalType: "uint256[][]",
                name: "amounts",
                type: "uint256[][]",
              },
              {
                internalType: "uint32[]",
                name: "paymentType",
                type: "uint32[]",
              },
            ],
            internalType: "struct Payment.Struct",
            name: "payments",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "queueId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "seed",
            type: "bytes",
          },
        ],
        internalType: "struct Race.Struct",
        name: "",
        type: "tuple",
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
          {
            internalType: "address",
            name: "incubator",
            type: "address",
          },
          {
            internalType: "address",
            name: "gamification",
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
  "0x60806040523480156200001157600080fd5b50604051620013b6380380620013b68339810160408190526200003491620001ac565b80620000403362000107565b8051600180546001600160a01b03199081166001600160a01b0393841617909155602083015160028054831691841691909117905560408301516003805483169184169190911790556060830151600480548316918416919091179055608083015160058054831691841691909117905560a083015160068054831691841691909117905560c083015160078054831691841691909117905560e0830151600880548316918416919091179055610100909201516009805490931691161790555062000277565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60405161012081016001600160401b03811182821017156200018957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114620001a757600080fd5b919050565b60006101208284031215620001c057600080fd5b620001ca62000157565b620001d5836200018f565b8152620001e5602084016200018f565b6020820152620001f8604084016200018f565b60408201526200020b606084016200018f565b60608201526200021e608084016200018f565b60808201526200023160a084016200018f565b60a08201526200024460c084016200018f565b60c08201526200025760e084016200018f565b60e08201526101006200026c8185016200018f565b908201529392505050565b61112f80620002876000396000f3fe6080604052600436106100565760003560e01c8063715018a61461005f57806377479c9c146100745780638da5cb5b14610094578063d8c521bf146100c6578063d8de6587146100f3578063f2fde38b1461019e57005b3661005d57005b005b34801561006b57600080fd5b5061005d6101be565b34801561008057600080fd5b5061005d61008f366004610787565b6101d2565b3480156100a057600080fd5b506100a961029c565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100d257600080fd5b506100e66100e1366004610ba5565b6102ab565b6040516100bd9190610ecf565b3480156100ff57600080fd5b50600154600254600354600454600554600654600754600854600954610144986001600160a01b03908116988116978116968116958116948116938116928116911689565b604080516001600160a01b039a8b168152988a1660208a01529689169688019690965293871660608701529186166080860152851660a0850152841660c0840152831660e0830152909116610100820152610120016100bd565b3480156101aa57600080fd5b5061005d6101b9366004610f96565b6104f5565b6101c6610573565b6101d060006105d2565b565b6101da610573565b8051600180546001600160a01b03199081166001600160a01b0393841617909155602083015160028054831691841691909117905560408301516003805483169184169190911790556060830151600480548316918416919091179055608083015160058054831691841691909117905560a083015160068054831691841691909117905560c083015160078054831691841691909117905560e083015160088054831691841691909117905561010090920151600980549093169116179055565b6000546001600160a01b031690565b6102b3610622565b6004546001600160a01b031633146102ca57600080fd5b82610120015163ffffffff16836020015151146102e657600080fd5b600154604080514260208201526000926001600160a01b03169163abaa08b391016040516020818303038152906040526040518263ffffffff1660e01b81526004016103329190610fba565b602060405180830381865afa15801561034f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103739190610fcd565b6007546020860151606087015160405163126701cf60e31b815293945060009384936001600160a01b0316926393380e78926103b3928890600401610fe6565b600060405180830381865afa1580156103d0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103f89190810190611066565b60408051610120810182528951815260025460608b0151925163666d638d60e11b81529496509294509260208401926001600160a01b03169163ccdac71a91610448919060040190815260200190565b602060405180830381865afa158015610465573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061048991906110c9565b6001600160a01b0316815260200183815260200187606001518152602001876080015181526020018481526020018761010001518152602001868152602001826040516020016104d991906110e6565b60408051601f1981840301815291905290529695505050505050565b6104fd610573565b6001600160a01b0381166105675760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b610570816105d2565b50565b3361057c61029c565b6001600160a01b0316146101d05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161055e565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040518061012001604052806060815260200160006001600160a01b031681526020016060815260200160008152602001600081526020016000815260200161069a6040518060c001604052806060815260200160608152602001606081526020016060815260200160608152602001606081525090565b815260200160008152602001606081525090565b634e487b7160e01b600052604160045260246000fd5b60405161012081016001600160401b03811182821017156106e7576106e76106ae565b60405290565b60405160c081016001600160401b03811182821017156106e7576106e76106ae565b60405161018081016001600160401b03811182821017156106e7576106e76106ae565b604051601f8201601f191681016001600160401b038111828210171561075a5761075a6106ae565b604052919050565b6001600160a01b038116811461057057600080fd5b803561078281610762565b919050565b6000610120828403121561079a57600080fd5b6107a26106c4565b6107ab83610777565b81526107b960208401610777565b60208201526107ca60408401610777565b60408201526107db60608401610777565b60608201526107ec60808401610777565b60808201526107fd60a08401610777565b60a082015261080e60c08401610777565b60c082015261081f60e08401610777565b60e0820152610100610832818501610777565b908201529392505050565b600082601f83011261084e57600080fd5b81356001600160401b03811115610867576108676106ae565b61087a601f8201601f1916602001610732565b81815284602083860101111561088f57600080fd5b816020850160208301376000918101602001919091529392505050565b60006001600160401b038211156108c5576108c56106ae565b5060051b60200190565b600082601f8301126108e057600080fd5b813560206108f56108f0836108ac565b610732565b82815260059290921b8401810191818101908684111561091457600080fd5b8286015b8481101561092f5780358352918301918301610918565b509695505050505050565b600082601f83011261094b57600080fd5b8135602061095b6108f0836108ac565b82815260059290921b8401810191818101908684111561097a57600080fd5b8286015b8481101561092f57803561099181610762565b835291830191830161097e565b600082601f8301126109af57600080fd5b813560206109bf6108f0836108ac565b82815260059290921b840181019181810190868411156109de57600080fd5b8286015b8481101561092f5780356001600160401b03811115610a015760008081fd5b610a0f8986838b01016108cf565b8452509183019183016109e2565b803563ffffffff8116811461078257600080fd5b600082601f830112610a4257600080fd5b81356020610a526108f0836108ac565b82815260059290921b84018101918181019086841115610a7157600080fd5b8286015b8481101561092f57610a8681610a1d565b8352918301918301610a75565b600060c08284031215610aa557600080fd5b610aad6106ed565b905081356001600160401b0380821115610ac657600080fd5b610ad28583860161093a565b83526020840135915080821115610ae857600080fd5b610af48583860161093a565b60208401526040840135915080821115610b0d57600080fd5b610b198583860161093a565b60408401526060840135915080821115610b3257600080fd5b610b3e8583860161099e565b60608401526080840135915080821115610b5757600080fd5b610b638583860161099e565b608084015260a0840135915080821115610b7c57600080fd5b50610b8984828501610a31565b60a08301525092915050565b8035801515811461078257600080fd5b60008060408385031215610bb857600080fd5b82356001600160401b0380821115610bcf57600080fd5b908401906101808287031215610be457600080fd5b610bec61070f565b823582811115610bfb57600080fd5b610c078882860161083d565b825250602083013582811115610c1c57600080fd5b610c28888286016108cf565b602083015250604083013582811115610c4057600080fd5b610c4c888286016108cf565b604083015250606083013560608201526080830135608082015260a083013560a082015260c083013560c082015260e083013560e08201526101008084013583811115610c9857600080fd5b610ca489828701610a93565b8284015250506101209150610cba828401610a1d565b828201526101409150610cce828401610a1d565b828201526101609150610ce2828401610b95565b9181019190915295602094909401359450505050565b6000815180845260005b81811015610d1e57602081850181015186830182015201610d02565b506000602082860101526020601f19601f83011685010191505092915050565b600081518084526020808501945080840160005b83811015610d6e57815187529582019590820190600101610d52565b509495945050505050565b600081518084526020808501945080840160005b83811015610d6e5781516001600160a01b031687529582019590820190600101610d8d565b600082825180855260208086019550808260051b84010181860160005b84811015610dfd57601f19868403018952610deb838351610d3e565b98840198925090830190600101610dcf565b5090979650505050505050565b6000815160c08452610e1f60c0850182610d79565b905060208084015185830382870152610e388382610d79565b92505060408401518583036040870152610e528382610d79565b92505060608401518583036060870152610e6c8382610db2565b92505060808401518583036080870152610e868382610db2565b60a086810151888303918901919091528051808352908401945060009250908301905b8083101561092f57845163ffffffff168252938301936001929092019190830190610ea9565b6020815260008251610120806020850152610eee610140850183610cf8565b91506020850151610f0a60408601826001600160a01b03169052565b506040850151601f1980868503016060870152610f278483610d3e565b935060608701516080870152608087015160a087015260a087015160c087015260c08701519150808685030160e0870152610f628483610e0a565b60e0880151610100888101919091528801518782039092018488015293509050610f8c8382610cf8565b9695505050505050565b600060208284031215610fa857600080fd5b8135610fb381610762565b9392505050565b602081526000610fb36020830184610cf8565b600060208284031215610fdf57600080fd5b5051919050565b606081526000610ff96060830186610d3e565b60208301949094525060400152919050565b600082601f83011261101c57600080fd5b8151602061102c6108f0836108ac565b82815260059290921b8401810191818101908684111561104b57600080fd5b8286015b8481101561092f578051835291830191830161104f565b6000806040838503121561107957600080fd5b82516001600160401b038082111561109057600080fd5b61109c8683870161100b565b935060208501519150808211156110b257600080fd5b506110bf8582860161100b565b9150509250929050565b6000602082840312156110db57600080fd5b8151610fb381610762565b602081526000610fb36020830184610d3e56fea2646970667358221220e66b540144fb194c8588c060150769bf13a66514bfea3437d10ada9a89e0694c64736f6c63430008100033";

type GeneratorMethodsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GeneratorMethodsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GeneratorMethods__factory extends ContractFactory {
  constructor(...args: GeneratorMethodsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "GeneratorMethods";
  }

  deploy(
    input: GeneratorConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GeneratorMethods> {
    return super.deploy(input, overrides || {}) as Promise<GeneratorMethods>;
  }
  getDeployTransaction(
    input: GeneratorConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(input, overrides || {});
  }
  attach(address: string): GeneratorMethods {
    return super.attach(address) as GeneratorMethods;
  }
  connect(signer: Signer): GeneratorMethods__factory {
    return super.connect(signer) as GeneratorMethods__factory;
  }
  static readonly contractName: "GeneratorMethods";
  public readonly contractName: "GeneratorMethods";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GeneratorMethodsInterface {
    return new utils.Interface(_abi) as GeneratorMethodsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GeneratorMethods {
    return new Contract(address, _abi, signerOrProvider) as GeneratorMethods;
  }
}
