/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  Generator,
  GeneratorInterface,
  GeneratorConstructor,
} from "../../../../contracts/generator/Index.sol/Generator";

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
  "0x60806040523480156200001157600080fd5b50604051620016093803806200160983398101604081905262000034916200014b565b806200004033620000de565b8051600180546001600160a01b03199081166001600160a01b0393841617909155602083015160028054831691841691909117905560408301516003805483169184169190911790556060830151600480548316918416919091179055608083015160058054831691841691909117905560a083015160068054831691841691909117905560c0909201516007805490931691161790555062000218565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146200014657600080fd5b919050565b600060e082840312156200015e57600080fd5b60405160e081016001600160401b03811182821017156200018f57634e487b7160e01b600052604160045260246000fd5b6040526200019d836200012e565b8152620001ad602084016200012e565b6020820152620001c0604084016200012e565b6040820152620001d3606084016200012e565b6060820152620001e6608084016200012e565b6080820152620001f960a084016200012e565b60a08201526200020c60c084016200012e565b60c08201529392505050565b6113e180620002286000396000f3fe6080604052600436106100615760003560e01c8063715018a61461006a5780637feaa6d31461007f5780638da5cb5b1461009f57806393380e78146100d1578063c5d642d4146100ff578063d8de65871461012c578063f2fde38b146101ba57005b3661006857005b005b34801561007657600080fd5b506100686101da565b34801561008b57600080fd5b5061006861009a366004610652565b6101ee565b3480156100ab57600080fd5b506100b461028f565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100dd57600080fd5b506100f16100ec366004610797565b61029e565b6040516100c892919061081f565b34801561010b57600080fd5b5061011f61011a366004610b32565b610328565b6040516100c89190610e21565b34801561013857600080fd5b50600154600254600354600454600554600654600754610171966001600160a01b03908116968116958116948116938116928116911687565b604080516001600160a01b039889168152968816602088015294871694860194909452918516606085015284166080840152831660a083015290911660c082015260e0016100c8565b3480156101c657600080fd5b506100686101d5366004610ee8565b6103c0565b6101e261043e565b6101ec600061049d565b565b6101f661043e565b8051600180546001600160a01b03199081166001600160a01b0393841617909155602083015160028054831691841691909117905560408301516003805483169184169190911790556060830151600480548316918416919091179055608083015160058054831691841691909117905560a083015160068054831691841691909117905560c090920151600780549093169116179055565b6000546001600160a01b031690565b60075460405163126701cf60e31b815260609182916001600160a01b03909116906393380e78906102d790889088908890600401610f0c565b600060405180830381865afa1580156102f4573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261031c9190810190610f8c565b91509150935093915050565b6103306104ed565b60055460405160009182916001600160a01b03909116906103549083903690610fef565b600060405180830381855af49150503d806000811461038f576040519150601f19603f3d011682016040523d82523d6000602084013e610394565b606091505b5091509150816103a357600080fd5b808060200190518101906103b79190611295565b95945050505050565b6103c861043e565b6001600160a01b0381166104325760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61043b8161049d565b50565b3361044761028f565b6001600160a01b0316146101ec5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610429565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040518061012001604052806060815260200160006001600160a01b03168152602001606081526020016000815260200160008152602001600081526020016105656040518060c001604052806060815260200160608152602001606081526020016060815260200160608152602001606081525090565b815260200160008152602001606081525090565b634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b03811182821017156105b1576105b1610579565b60405290565b60405161018081016001600160401b03811182821017156105b1576105b1610579565b60405161012081016001600160401b03811182821017156105b1576105b1610579565b604051601f8201601f191681016001600160401b038111828210171561062557610625610579565b604052919050565b6001600160a01b038116811461043b57600080fd5b803561064d8161062d565b919050565b600060e0828403121561066457600080fd5b60405160e081016001600160401b038111828210171561068657610686610579565b60405282356106948161062d565b815260208301356106a48161062d565b602082015260408301356106b78161062d565b604082015260608301356106ca8161062d565b60608201526106db60808401610642565b60808201526106ec60a08401610642565b60a08201526106fd60c08401610642565b60c08201529392505050565b60006001600160401b0382111561072257610722610579565b5060051b60200190565b600082601f83011261073d57600080fd5b8135602061075261074d83610709565b6105fd565b82815260059290921b8401810191818101908684111561077157600080fd5b8286015b8481101561078c5780358352918301918301610775565b509695505050505050565b6000806000606084860312156107ac57600080fd5b83356001600160401b038111156107c257600080fd5b6107ce8682870161072c565b9660208601359650604090950135949350505050565b600081518084526020808501945080840160005b83811015610814578151875295820195908201906001016107f8565b509495945050505050565b60408152600061083260408301856107e4565b82810360208401526103b781856107e4565b60006001600160401b0382111561085d5761085d610579565b50601f01601f191660200190565b600082601f83011261087c57600080fd5b813561088a61074d82610844565b81815284602083860101111561089f57600080fd5b816020850160208301376000918101602001919091529392505050565b600082601f8301126108cd57600080fd5b813560206108dd61074d83610709565b82815260059290921b840181019181810190868411156108fc57600080fd5b8286015b8481101561078c5780356109138161062d565b8352918301918301610900565b600082601f83011261093157600080fd5b8135602061094161074d83610709565b82815260059290921b8401810191818101908684111561096057600080fd5b8286015b8481101561078c5780356001600160401b038111156109835760008081fd5b6109918986838b010161072c565b845250918301918301610964565b63ffffffff8116811461043b57600080fd5b803561064d8161099f565b600082601f8301126109cd57600080fd5b813560206109dd61074d83610709565b82815260059290921b840181019181810190868411156109fc57600080fd5b8286015b8481101561078c578035610a138161099f565b8352918301918301610a00565b600060c08284031215610a3257600080fd5b610a3a61058f565b905081356001600160401b0380821115610a5357600080fd5b610a5f858386016108bc565b83526020840135915080821115610a7557600080fd5b610a81858386016108bc565b60208401526040840135915080821115610a9a57600080fd5b610aa6858386016108bc565b60408401526060840135915080821115610abf57600080fd5b610acb85838601610920565b60608401526080840135915080821115610ae457600080fd5b610af085838601610920565b608084015260a0840135915080821115610b0957600080fd5b50610b16848285016109bc565b60a08301525092915050565b8035801515811461064d57600080fd5b60008060408385031215610b4557600080fd5b82356001600160401b0380821115610b5c57600080fd5b908401906101808287031215610b7157600080fd5b610b796105b7565b823582811115610b8857600080fd5b610b948882860161086b565b825250610ba360208401610642565b6020820152604083013582811115610bba57600080fd5b610bc68882860161072c565b604083015250606083013560608201526080830135608082015260a083013560a082015260c083013560c082015260e083013560e08201526101008084013583811115610c1257600080fd5b610c1e89828701610a20565b8284015250506101209150610c348284016109b1565b828201526101409150610c488284016109b1565b828201526101609150610c5c828401610b22565b9181019190915295602094909401359450505050565b60005b83811015610c8d578181015183820152602001610c75565b83811115610c9c576000848401525b50505050565b60008151808452610cba816020860160208601610c72565b601f01601f19169290920160200192915050565b600081518084526020808501945080840160005b838110156108145781516001600160a01b031687529582019590820190600101610ce2565b600081518084526020808501808196508360051b8101915082860160005b85811015610d4f578284038952610d3d8483516107e4565b98850198935090840190600101610d25565b5091979650505050505050565b6000815160c08452610d7160c0850182610cce565b905060208084015185830382870152610d8a8382610cce565b92505060408401518583036040870152610da48382610cce565b92505060608401518583036060870152610dbe8382610d07565b92505060808401518583036080870152610dd88382610d07565b60a086810151888303918901919091528051808352908401945060009250908301905b8083101561078c57845163ffffffff168252938301936001929092019190830190610dfb565b6020815260008251610120806020850152610e40610140850183610ca2565b91506020850151610e5c60408601826001600160a01b03169052565b506040850151601f1980868503016060870152610e7984836107e4565b935060608701516080870152608087015160a087015260a087015160c087015260c08701519150808685030160e0870152610eb48483610d5c565b60e0880151610100888101919091528801518782039092018488015293509050610ede8382610ca2565b9695505050505050565b600060208284031215610efa57600080fd5b8135610f058161062d565b9392505050565b606081526000610f1f60608301866107e4565b60208301949094525060400152919050565b600082601f830112610f4257600080fd5b81516020610f5261074d83610709565b82815260059290921b84018101918181019086841115610f7157600080fd5b8286015b8481101561078c5780518352918301918301610f75565b60008060408385031215610f9f57600080fd5b82516001600160401b0380821115610fb657600080fd5b610fc286838701610f31565b93506020850151915080821115610fd857600080fd5b50610fe585828601610f31565b9150509250929050565b8183823760009101908152919050565b600082601f83011261101057600080fd5b815161101e61074d82610844565b81815284602083860101111561103357600080fd5b611044826020830160208701610c72565b949350505050565b805161064d8161062d565b600082601f83011261106857600080fd5b8151602061107861074d83610709565b82815260059290921b8401810191818101908684111561109757600080fd5b8286015b8481101561078c5780516110ae8161062d565b835291830191830161109b565b600082601f8301126110cc57600080fd5b815160206110dc61074d83610709565b82815260059290921b840181019181810190868411156110fb57600080fd5b8286015b8481101561078c5780516001600160401b0381111561111e5760008081fd5b61112c8986838b0101610f31565b8452509183019183016110ff565b600082601f83011261114b57600080fd5b8151602061115b61074d83610709565b82815260059290921b8401810191818101908684111561117a57600080fd5b8286015b8481101561078c5780516111918161099f565b835291830191830161117e565b600060c082840312156111b057600080fd5b6111b861058f565b82519091506001600160401b03808211156111d257600080fd5b6111de85838601611057565b835260208401519150808211156111f457600080fd5b61120085838601611057565b6020840152604084015191508082111561121957600080fd5b61122585838601611057565b6040840152606084015191508082111561123e57600080fd5b61124a858386016110bb565b6060840152608084015191508082111561126357600080fd5b61126f858386016110bb565b608084015260a084015191508082111561128857600080fd5b50610b168482850161113a565b6000602082840312156112a757600080fd5b81516001600160401b03808211156112be57600080fd5b9083019061012082860312156112d357600080fd5b6112db6105da565b8251828111156112ea57600080fd5b6112f687828601610fff565b8252506113056020840161104c565b602082015260408301518281111561131c57600080fd5b61132887828601610f31565b604083015250606083015160608201526080830151608082015260a083015160a082015260c08301518281111561135e57600080fd5b61136a8782860161119e565b60c08301525060e083015160e0820152610100808401518381111561138e57600080fd5b61139a88828701610fff565b91830191909152509594505050505056fea2646970667358221220e6d44bdee82335e336fb8e1a9e4b1030754d3374548e7b733c2813afd6ac1f3b64736f6c634300080f0033";

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
  }

  override deploy(
    input: GeneratorConstructor.StructStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Generator> {
    return super.deploy(input, overrides || {}) as Promise<Generator>;
  }
  override getDeployTransaction(
    input: GeneratorConstructor.StructStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(input, overrides || {});
  }
  override attach(address: string): Generator {
    return super.attach(address) as Generator;
  }
  override connect(signer: Signer): Generator__factory {
    return super.connect(signer) as Generator__factory;
  }

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