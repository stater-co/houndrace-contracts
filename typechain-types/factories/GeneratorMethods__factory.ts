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
  "0x60806040523480156200001157600080fd5b50604051620012f3380380620012f383398101604081905262000034916200014b565b806200004033620000de565b8051600180546001600160a01b03199081166001600160a01b0393841617909155602083015160028054831691841691909117905560408301516003805483169184169190911790556060830151600480548316918416919091179055608083015160058054831691841691909117905560a083015160068054831691841691909117905560c0909201516007805490931691161790555062000218565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146200014657600080fd5b919050565b600060e082840312156200015e57600080fd5b60405160e081016001600160401b03811182821017156200018f57634e487b7160e01b600052604160045260246000fd5b6040526200019d836200012e565b8152620001ad602084016200012e565b6020820152620001c0604084016200012e565b6040820152620001d3606084016200012e565b6060820152620001e6608084016200012e565b6080820152620001f960a084016200012e565b60a08201526200020c60c084016200012e565b60c08201529392505050565b6110cb80620002286000396000f3fe6080604052600436106100565760003560e01c8063715018a61461005f5780637feaa6d3146100745780638da5cb5b14610094578063d8c521bf146100c6578063d8de6587146100f3578063f2fde38b1461018157005b3661005d57005b005b34801561006b57600080fd5b5061005d6101a1565b34801561008057600080fd5b5061005d61008f36600461071e565b6101b5565b3480156100a057600080fd5b506100a9610256565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100d257600080fd5b506100e66100e1366004610b3d565b610265565b6040516100bd9190610e6b565b3480156100ff57600080fd5b50600154600254600354600454600554600654600754610138966001600160a01b03908116968116958116948116938116928116911687565b604080516001600160a01b039889168152968816602088015294871694860194909452918516606085015284166080840152831660a083015290911660c082015260e0016100bd565b34801561018d57600080fd5b5061005d61019c366004610f32565b6104af565b6101a961052d565b6101b3600061058c565b565b6101bd61052d565b8051600180546001600160a01b03199081166001600160a01b0393841617909155602083015160028054831691841691909117905560408301516003805483169184169190911790556060830151600480548316918416919091179055608083015160058054831691841691909117905560a083015160068054831691841691909117905560c090920151600780549093169116179055565b6000546001600160a01b031690565b61026d6105dc565b6004546001600160a01b0316331461028457600080fd5b82610120015163ffffffff16836020015151146102a057600080fd5b600154604080514260208201526000926001600160a01b03169163abaa08b391016040516020818303038152906040526040518263ffffffff1660e01b81526004016102ec9190610f56565b602060405180830381865afa158015610309573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061032d9190610f69565b6007546020860151606087015160405163126701cf60e31b815293945060009384936001600160a01b0316926393380e789261036d928890600401610f82565b600060405180830381865afa15801561038a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103b29190810190611002565b60408051610120810182528951815260025460608b0151925163666d638d60e11b81529496509294509260208401926001600160a01b03169163ccdac71a91610402919060040190815260200190565b602060405180830381865afa15801561041f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104439190611065565b6001600160a01b0316815260200183815260200187606001518152602001876080015181526020018481526020018761010001518152602001868152602001826040516020016104939190611082565b60408051601f1981840301815291905290529695505050505050565b6104b761052d565b6001600160a01b0381166105215760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61052a8161058c565b50565b33610536610256565b6001600160a01b0316146101b35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610518565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040518061012001604052806060815260200160006001600160a01b03168152602001606081526020016000815260200160008152602001600081526020016106546040518060c001604052806060815260200160608152602001606081526020016060815260200160608152602001606081525090565b815260200160008152602001606081525090565b634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b03811182821017156106a0576106a0610668565b60405290565b60405161018081016001600160401b03811182821017156106a0576106a0610668565b604051601f8201601f191681016001600160401b03811182821017156106f1576106f1610668565b604052919050565b6001600160a01b038116811461052a57600080fd5b8035610719816106f9565b919050565b600060e0828403121561073057600080fd5b60405160e081016001600160401b038111828210171561075257610752610668565b6040528235610760816106f9565b81526020830135610770816106f9565b60208201526040830135610783816106f9565b60408201526060830135610796816106f9565b60608201526107a76080840161070e565b60808201526107b860a0840161070e565b60a08201526107c960c0840161070e565b60c08201529392505050565b600082601f8301126107e657600080fd5b81356001600160401b038111156107ff576107ff610668565b610812601f8201601f19166020016106c9565b81815284602083860101111561082757600080fd5b816020850160208301376000918101602001919091529392505050565b60006001600160401b0382111561085d5761085d610668565b5060051b60200190565b600082601f83011261087857600080fd5b8135602061088d61088883610844565b6106c9565b82815260059290921b840181019181810190868411156108ac57600080fd5b8286015b848110156108c757803583529183019183016108b0565b509695505050505050565b600082601f8301126108e357600080fd5b813560206108f361088883610844565b82815260059290921b8401810191818101908684111561091257600080fd5b8286015b848110156108c7578035610929816106f9565b8352918301918301610916565b600082601f83011261094757600080fd5b8135602061095761088883610844565b82815260059290921b8401810191818101908684111561097657600080fd5b8286015b848110156108c75780356001600160401b038111156109995760008081fd5b6109a78986838b0101610867565b84525091830191830161097a565b803563ffffffff8116811461071957600080fd5b600082601f8301126109da57600080fd5b813560206109ea61088883610844565b82815260059290921b84018101918181019086841115610a0957600080fd5b8286015b848110156108c757610a1e816109b5565b8352918301918301610a0d565b600060c08284031215610a3d57600080fd5b610a4561067e565b905081356001600160401b0380821115610a5e57600080fd5b610a6a858386016108d2565b83526020840135915080821115610a8057600080fd5b610a8c858386016108d2565b60208401526040840135915080821115610aa557600080fd5b610ab1858386016108d2565b60408401526060840135915080821115610aca57600080fd5b610ad685838601610936565b60608401526080840135915080821115610aef57600080fd5b610afb85838601610936565b608084015260a0840135915080821115610b1457600080fd5b50610b21848285016109c9565b60a08301525092915050565b8035801515811461071957600080fd5b60008060408385031215610b5057600080fd5b82356001600160401b0380821115610b6757600080fd5b908401906101808287031215610b7c57600080fd5b610b846106a6565b823582811115610b9357600080fd5b610b9f888286016107d5565b825250602083013582811115610bb457600080fd5b610bc088828601610867565b602083015250604083013582811115610bd857600080fd5b610be488828601610867565b604083015250606083013560608201526080830135608082015260a083013560a082015260c083013560c082015260e083013560e08201526101008084013583811115610c3057600080fd5b610c3c89828701610a2b565b8284015250506101209150610c528284016109b5565b828201526101409150610c668284016109b5565b828201526101609150610c7a828401610b2d565b9181019190915295602094909401359450505050565b6000815180845260005b81811015610cb657602081850181015186830182015201610c9a565b81811115610cc8576000602083870101525b50601f01601f19169290920160200192915050565b600081518084526020808501945080840160005b83811015610d0d57815187529582019590820190600101610cf1565b509495945050505050565b600081518084526020808501945080840160005b83811015610d0d5781516001600160a01b031687529582019590820190600101610d2c565b600081518084526020808501808196508360051b8101915082860160005b85811015610d99578284038952610d87848351610cdd565b98850198935090840190600101610d6f565b5091979650505050505050565b6000815160c08452610dbb60c0850182610d18565b905060208084015185830382870152610dd48382610d18565b92505060408401518583036040870152610dee8382610d18565b92505060608401518583036060870152610e088382610d51565b92505060808401518583036080870152610e228382610d51565b60a086810151888303918901919091528051808352908401945060009250908301905b808310156108c757845163ffffffff168252938301936001929092019190830190610e45565b6020815260008251610120806020850152610e8a610140850183610c90565b91506020850151610ea660408601826001600160a01b03169052565b506040850151601f1980868503016060870152610ec38483610cdd565b935060608701516080870152608087015160a087015260a087015160c087015260c08701519150808685030160e0870152610efe8483610da6565b60e0880151610100888101919091528801518782039092018488015293509050610f288382610c90565b9695505050505050565b600060208284031215610f4457600080fd5b8135610f4f816106f9565b9392505050565b602081526000610f4f6020830184610c90565b600060208284031215610f7b57600080fd5b5051919050565b606081526000610f956060830186610cdd565b60208301949094525060400152919050565b600082601f830112610fb857600080fd5b81516020610fc861088883610844565b82815260059290921b84018101918181019086841115610fe757600080fd5b8286015b848110156108c75780518352918301918301610feb565b6000806040838503121561101557600080fd5b82516001600160401b038082111561102c57600080fd5b61103886838701610fa7565b9350602085015191508082111561104e57600080fd5b5061105b85828601610fa7565b9150509250929050565b60006020828403121561107757600080fd5b8151610f4f816106f9565b602081526000610f4f6020830184610cdd56fea26469706673582212209c97fdbac9d6c70e3f58f9a22f3b8d5796be5df9893ec5b262bed571d93feaeb64736f6c634300080f0033";

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
