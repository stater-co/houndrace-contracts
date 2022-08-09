/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Generator,
  GeneratorInterface,
  GeneratorConstructor,
} from "../Generator";

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
    stateMutability: "nonpayable",
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
        internalType: "uint256[]",
        name: "participants",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "terrain",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "theRandomness",
        type: "uint256",
      },
    ],
    name: "simulateClassicRace",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
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
  "0x60806040523480156200001157600080fd5b506040516200161f3803806200161f83398101604081905262000034916200014b565b806200004033620000de565b8051600180546001600160a01b03199081166001600160a01b0393841617909155602083015160028054831691841691909117905560408301516003805483169184169190911790556060830151600480548316918416919091179055608083015160058054831691841691909117905560a083015160068054831691841691909117905560c0909201516007805490931691161790555062000218565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146200014657600080fd5b919050565b600060e082840312156200015e57600080fd5b60405160e081016001600160401b03811182821017156200018f57634e487b7160e01b600052604160045260246000fd5b6040526200019d836200012e565b8152620001ad602084016200012e565b6020820152620001c0604084016200012e565b6040820152620001d3606084016200012e565b6060820152620001e6608084016200012e565b6080820152620001f960a084016200012e565b60a08201526200020c60c084016200012e565b60c08201529392505050565b6113f780620002286000396000f3fe6080604052600436106100615760003560e01c8063715018a61461006a5780637feaa6d31461007f5780638da5cb5b1461009f57806393380e78146100d1578063d8c521bf146100ff578063d8de65871461012c578063f2fde38b146101ba57005b3661006857005b005b34801561007657600080fd5b506100686101da565b34801561008b57600080fd5b5061006861009a366004610652565b6101ee565b3480156100ab57600080fd5b506100b461028f565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100dd57600080fd5b506100f16100ec366004610797565b61029e565b6040516100c892919061081f565b34801561010b57600080fd5b5061011f61011a366004610b32565b610328565b6040516100c89190610e37565b34801561013857600080fd5b50600154600254600354600454600554600654600754610171966001600160a01b03908116968116958116948116938116928116911687565b604080516001600160a01b039889168152968816602088015294871694860194909452918516606085015284166080840152831660a083015290911660c082015260e0016100c8565b3480156101c657600080fd5b506100686101d5366004610efe565b6103c0565b6101e261043e565b6101ec600061049d565b565b6101f661043e565b8051600180546001600160a01b03199081166001600160a01b0393841617909155602083015160028054831691841691909117905560408301516003805483169184169190911790556060830151600480548316918416919091179055608083015160058054831691841691909117905560a083015160068054831691841691909117905560c090920151600780549093169116179055565b6000546001600160a01b031690565b60075460405163126701cf60e31b815260609182916001600160a01b03909116906393380e78906102d790889088908890600401610f22565b600060405180830381865afa1580156102f4573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261031c9190810190610fa2565b91509150935093915050565b6103306104ed565b60055460405160009182916001600160a01b03909116906103549083903690611005565b600060405180830381855af49150503d806000811461038f576040519150601f19603f3d011682016040523d82523d6000602084013e610394565b606091505b5091509150816103a357600080fd5b808060200190518101906103b791906112ab565b95945050505050565b6103c861043e565b6001600160a01b0381166104325760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61043b8161049d565b50565b3361044761028f565b6001600160a01b0316146101ec5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610429565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040518061012001604052806060815260200160006001600160a01b03168152602001606081526020016000815260200160008152602001600081526020016105656040518060c001604052806060815260200160608152602001606081526020016060815260200160608152602001606081525090565b815260200160008152602001606081525090565b634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b03811182821017156105b1576105b1610579565b60405290565b60405161018081016001600160401b03811182821017156105b1576105b1610579565b60405161012081016001600160401b03811182821017156105b1576105b1610579565b604051601f8201601f191681016001600160401b038111828210171561062557610625610579565b604052919050565b6001600160a01b038116811461043b57600080fd5b803561064d8161062d565b919050565b600060e0828403121561066457600080fd5b60405160e081016001600160401b038111828210171561068657610686610579565b60405282356106948161062d565b815260208301356106a48161062d565b602082015260408301356106b78161062d565b604082015260608301356106ca8161062d565b60608201526106db60808401610642565b60808201526106ec60a08401610642565b60a08201526106fd60c08401610642565b60c08201529392505050565b60006001600160401b0382111561072257610722610579565b5060051b60200190565b600082601f83011261073d57600080fd5b8135602061075261074d83610709565b6105fd565b82815260059290921b8401810191818101908684111561077157600080fd5b8286015b8481101561078c5780358352918301918301610775565b509695505050505050565b6000806000606084860312156107ac57600080fd5b83356001600160401b038111156107c257600080fd5b6107ce8682870161072c565b9660208601359650604090950135949350505050565b600081518084526020808501945080840160005b83811015610814578151875295820195908201906001016107f8565b509495945050505050565b60408152600061083260408301856107e4565b82810360208401526103b781856107e4565b60006001600160401b0382111561085d5761085d610579565b50601f01601f191660200190565b600082601f83011261087c57600080fd5b813561088a61074d82610844565b81815284602083860101111561089f57600080fd5b816020850160208301376000918101602001919091529392505050565b600082601f8301126108cd57600080fd5b813560206108dd61074d83610709565b82815260059290921b840181019181810190868411156108fc57600080fd5b8286015b8481101561078c5780356109138161062d565b8352918301918301610900565b600082601f83011261093157600080fd5b8135602061094161074d83610709565b82815260059290921b8401810191818101908684111561096057600080fd5b8286015b8481101561078c5780356001600160401b038111156109835760008081fd5b6109918986838b010161072c565b845250918301918301610964565b63ffffffff8116811461043b57600080fd5b803561064d8161099f565b600082601f8301126109cd57600080fd5b813560206109dd61074d83610709565b82815260059290921b840181019181810190868411156109fc57600080fd5b8286015b8481101561078c578035610a138161099f565b8352918301918301610a00565b600060c08284031215610a3257600080fd5b610a3a61058f565b905081356001600160401b0380821115610a5357600080fd5b610a5f858386016108bc565b83526020840135915080821115610a7557600080fd5b610a81858386016108bc565b60208401526040840135915080821115610a9a57600080fd5b610aa6858386016108bc565b60408401526060840135915080821115610abf57600080fd5b610acb85838601610920565b60608401526080840135915080821115610ae457600080fd5b610af085838601610920565b608084015260a0840135915080821115610b0957600080fd5b50610b16848285016109bc565b60a08301525092915050565b8035801515811461064d57600080fd5b60008060408385031215610b4557600080fd5b82356001600160401b0380821115610b5c57600080fd5b908401906101808287031215610b7157600080fd5b610b796105b7565b823582811115610b8857600080fd5b610b948882860161086b565b825250602083013582811115610ba957600080fd5b610bb58882860161072c565b602083015250604083013582811115610bcd57600080fd5b610bd98882860161072c565b604083015250606083013560608201526080830135608082015260a083013560a082015260c083013560c082015260e083013560e08201526101008084013583811115610c2557600080fd5b610c3189828701610a20565b8284015250506101209150610c478284016109b1565b828201526101409150610c5b8284016109b1565b828201526101609150610c6f828401610b22565b9181019190915295602094909401359450505050565b60005b83811015610ca0578181015183820152602001610c88565b83811115610caf576000848401525b50505050565b60008151808452610ccd816020860160208601610c85565b601f01601f19169290920160200192915050565b600081518084526020808501945080840160005b838110156108145781516001600160a01b031687529582019590820190600101610cf5565b600082825180855260208086019550808260051b84010181860160005b84811015610d6557601f19868403018952610d538383516107e4565b98840198925090830190600101610d37565b5090979650505050505050565b6000815160c08452610d8760c0850182610ce1565b905060208084015185830382870152610da08382610ce1565b92505060408401518583036040870152610dba8382610ce1565b92505060608401518583036060870152610dd48382610d1a565b92505060808401518583036080870152610dee8382610d1a565b60a086810151888303918901919091528051808352908401945060009250908301905b8083101561078c57845163ffffffff168252938301936001929092019190830190610e11565b6020815260008251610120806020850152610e56610140850183610cb5565b91506020850151610e7260408601826001600160a01b03169052565b506040850151601f1980868503016060870152610e8f84836107e4565b935060608701516080870152608087015160a087015260a087015160c087015260c08701519150808685030160e0870152610eca8483610d72565b60e0880151610100888101919091528801518782039092018488015293509050610ef48382610cb5565b9695505050505050565b600060208284031215610f1057600080fd5b8135610f1b8161062d565b9392505050565b606081526000610f3560608301866107e4565b60208301949094525060400152919050565b600082601f830112610f5857600080fd5b81516020610f6861074d83610709565b82815260059290921b84018101918181019086841115610f8757600080fd5b8286015b8481101561078c5780518352918301918301610f8b565b60008060408385031215610fb557600080fd5b82516001600160401b0380821115610fcc57600080fd5b610fd886838701610f47565b93506020850151915080821115610fee57600080fd5b50610ffb85828601610f47565b9150509250929050565b8183823760009101908152919050565b600082601f83011261102657600080fd5b815161103461074d82610844565b81815284602083860101111561104957600080fd5b61105a826020830160208701610c85565b949350505050565b805161064d8161062d565b600082601f83011261107e57600080fd5b8151602061108e61074d83610709565b82815260059290921b840181019181810190868411156110ad57600080fd5b8286015b8481101561078c5780516110c48161062d565b83529183019183016110b1565b600082601f8301126110e257600080fd5b815160206110f261074d83610709565b82815260059290921b8401810191818101908684111561111157600080fd5b8286015b8481101561078c5780516001600160401b038111156111345760008081fd5b6111428986838b0101610f47565b845250918301918301611115565b600082601f83011261116157600080fd5b8151602061117161074d83610709565b82815260059290921b8401810191818101908684111561119057600080fd5b8286015b8481101561078c5780516111a78161099f565b8352918301918301611194565b600060c082840312156111c657600080fd5b6111ce61058f565b82519091506001600160401b03808211156111e857600080fd5b6111f48583860161106d565b8352602084015191508082111561120a57600080fd5b6112168583860161106d565b6020840152604084015191508082111561122f57600080fd5b61123b8583860161106d565b6040840152606084015191508082111561125457600080fd5b611260858386016110d1565b6060840152608084015191508082111561127957600080fd5b611285858386016110d1565b608084015260a084015191508082111561129e57600080fd5b50610b1684828501611150565b6000602082840312156112bd57600080fd5b81516001600160401b03808211156112d457600080fd5b9083019061012082860312156112e957600080fd5b6112f16105da565b82518281111561130057600080fd5b61130c87828601611015565b82525061131b60208401611062565b602082015260408301518281111561133257600080fd5b61133e87828601610f47565b604083015250606083015160608201526080830151608082015260a083015160a082015260c08301518281111561137457600080fd5b611380878286016111b4565b60c08301525060e083015160e082015261010080840151838111156113a457600080fd5b6113b088828701611015565b91830191909152509594505050505056fea2646970667358221220d6679b9b100a986f2decf2ca8f0861cd96fb45306bd5152a3ec5a7dffae3601064736f6c634300080f0033";

type GeneratorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GeneratorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Generator__factory extends ContractFactory {
  constructor(...args: GeneratorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Generator";
  }

  deploy(
    input: GeneratorConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Generator> {
    return super.deploy(input, overrides || {}) as Promise<Generator>;
  }
  getDeployTransaction(
    input: GeneratorConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(input, overrides || {});
  }
  attach(address: string): Generator {
    return super.attach(address) as Generator;
  }
  connect(signer: Signer): Generator__factory {
    return super.connect(signer) as Generator__factory;
  }
  static readonly contractName: "Generator";
  public readonly contractName: "Generator";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GeneratorInterface {
    return new utils.Interface(_abi) as GeneratorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Generator {
    return new Contract(address, _abi, signerOrProvider) as Generator;
  }
}