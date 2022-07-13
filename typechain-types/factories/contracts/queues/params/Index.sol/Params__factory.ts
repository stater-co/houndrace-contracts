/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  Params,
  ParamsInterface,
  QueuesConstructor,
} from "../../../../../contracts/queues/params/Index.sol/Params";

const _abi = [
  {
    inputs: [
      {
        components: [
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
            name: "restricted",
            type: "address",
          },
          {
            internalType: "address",
            name: "races",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "allowedCallers",
            type: "address[]",
          },
        ],
        internalType: "struct QueuesConstructor.Struct",
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
    ],
    name: "DeleteQueue",
    type: "event",
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
        indexed: false,
        internalType: "struct Queue.Struct",
        name: "queue",
        type: "tuple",
      },
    ],
    name: "EditQueue",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "hound",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "PlayerEnqueue",
    type: "event",
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
    ],
    name: "QueueClosed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "idStart",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "idStop",
        type: "uint256",
      },
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
        indexed: false,
        internalType: "struct Queue.Struct[]",
        name: "newQueues",
        type: "tuple[]",
      },
    ],
    name: "QueuesCreation",
    type: "event",
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
        indexed: true,
        internalType: "uint256",
        name: "hound",
        type: "uint256",
      },
    ],
    name: "Unenqueue",
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
    inputs: [],
    name: "control",
    outputs: [
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
        name: "restricted",
        type: "address",
      },
      {
        internalType: "address",
        name: "races",
        type: "address",
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
    name: "enqueueCost",
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
    inputs: [
      {
        internalType: "uint256",
        name: "theId",
        type: "uint256",
      },
    ],
    name: "participantsOf",
    outputs: [
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "payout",
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
    ],
    name: "queue",
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
    name: "queues",
    outputs: [
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
            name: "restricted",
            type: "address",
          },
          {
            internalType: "address",
            name: "races",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "allowedCallers",
            type: "address[]",
          },
        ],
        internalType: "struct QueuesConstructor.Struct",
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
  "0x6080604052600180553480156200001557600080fd5b5060405162001e1b38038062001e1b833981016040819052620000389162000397565b6200004333620000fc565b8051600280546001600160a01b03199081166001600160a01b0393841617825560208085015160038054841691861691909117905560408501516004805484169186169190911790556060850151600580548416918616919091179055608085015160068054841691861691909117905560a085015160078054909316941693909317905560c083015180518493620000e2926008929101906200020b565b50505060c0810151620000f5906200014c565b50620004bb565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60005b81518110156200020757600a60008383815181106200017257620001726200047d565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060009054906101000a900460ff1615600a6000848481518110620001c257620001c26200047d565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916911515919091179055620001ff8162000493565b90506200014f565b5050565b82805482825590600052602060002090810192821562000263579160200282015b828111156200026357825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906200022c565b506200027192915062000275565b5090565b5b8082111562000271576000815560010162000276565b634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b0381118282101715620002c757620002c76200028c565b60405290565b80516001600160a01b0381168114620002e557600080fd5b919050565b600082601f830112620002fc57600080fd5b815160206001600160401b03808311156200031b576200031b6200028c565b8260051b604051601f19603f830116810181811084821117156200034357620003436200028c565b6040529384528581018301938381019250878511156200036257600080fd5b83870191505b848210156200038c576200037c82620002cd565b8352918301919083019062000368565b979650505050505050565b600060208284031215620003aa57600080fd5b81516001600160401b0380821115620003c257600080fd5b9083019060e08286031215620003d757600080fd5b620003e1620002a2565b620003ec83620002cd565b8152620003fc60208401620002cd565b60208201526200040f60408401620002cd565b60408201526200042260608401620002cd565b60608201526200043560808401620002cd565b60808201526200044860a08401620002cd565b60a082015260c0830151828111156200046057600080fd5b6200046e87828601620002ea565b60c08301525095945050505050565b634e487b7160e01b600052603260045260246000fd5b600060018201620004b457634e487b7160e01b600052601160045260246000fd5b5060010190565b61195080620004cb6000396000f3fe6080604052600436106100985760003560e01c80630f7921ed146100a1578063715018a6146100e15780638da5cb5b146100f6578063af640d0f14610123578063b3aa39b614610147578063d63a8e1114610167578063d8de6587146101a7578063ddf0b00914610228578063e115234314610255578063e200c85714610275578063e8ee0e3b146102a2578063f2fde38b146102c257005b3661009f57005b005b3480156100ad57600080fd5b506100c16100bc36600461111e565b6102e2565b6040516100d89b9a99989796959493929190611329565b60405180910390f35b3480156100ed57600080fd5b5061009f6106c7565b34801561010257600080fd5b5061010b6106db565b6040516001600160a01b0390911681526020016100d8565b34801561012f57600080fd5b5061013960015481565b6040519081526020016100d8565b34801561015357600080fd5b5061013961016236600461111e565b6106ea565b34801561017357600080fd5b506101976101823660046113d2565b600a6020526000908152604090205460ff1681565b60405190151581526020016100d8565b3480156101b357600080fd5b506002546003546004546005546006546007546101e6956001600160a01b03908116958116948116938116928116911686565b604080516001600160a01b03978816815295871660208701529386169385019390935290841660608401528316608083015290911660a082015260c0016100d8565b34801561023457600080fd5b5061024861024336600461111e565b6107a9565b6040516100d891906113f6565b34801561026157600080fd5b5061009f61027036600461111e565b610c1e565b34801561028157600080fd5b5061029561029036600461111e565b610d0e565b6040516100d891906114ed565b3480156102ae57600080fd5b5061009f6102bd366004611627565b610d73565b3480156102ce57600080fd5b5061009f6102dd3660046113d2565b610e29565b6009602052600090815260409020805481906102fd906116f9565b80601f0160208091040260200160405190810160405280929190818152602001828054610329906116f9565b80156103765780601f1061034b57610100808354040283529160200191610376565b820191906000526020600020905b81548152906001019060200180831161035957829003601f168201915b5050505050908060010160009054906101000a90046001600160a01b031690806003015490806004015490806005015490806006015490806007015490806008016040518060c00160405290816000820180548060200260200160405190810160405280929190818152602001828054801561041b57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116103fd575b505050505081526020016001820180548060200260200160405190810160405280929190818152602001828054801561047d57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161045f575b50505050508152602001600282018054806020026020016040519081016040528092919081815260200182805480156104df57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116104c1575b5050505050815260200160038201805480602002602001604051908101604052809291908181526020016000905b828210156105795760008481526020908190208301805460408051828502810185019091528181529283018282801561056557602002820191906000526020600020905b815481526020019060010190808311610551575b50505050508152602001906001019061050d565b50505050815260200160048201805480602002602001604051908101604052809291908181526020016000905b82821015610612576000848152602090819020830180546040805182850281018501909152818152928301828280156105fe57602002820191906000526020600020905b8154815260200190600101908083116105ea575b5050505050815260200190600101906105a6565b5050505081526020016005820180548060200260200160405190810160405280929190818152602001828054801561069557602002820191906000526020600020906000905b82829054906101000a900463ffffffff1663ffffffff16815260200190600401906020826003010492830192600103820291508084116106585790505b50505091909252505050600e9091015463ffffffff80821691600160201b81049091169060ff600160401b909104168b565b6106cf610e9f565b6106d96000610efe565b565b6000546001600160a01b031690565b600081815260096020526040808220600480820154600e8301546002546003909401549451635ba52fdf60e11b8152928301949094529263ffffffff16916001600160a01b03169063b74a5fbe90602401600060405180830381865afa158015610758573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261078091908101906117bd565b6060015161078e91906118b1565b61079891906118d3565b6107a39060016118d3565b92915050565b6107b1611003565b60008281526009602052604090819020815161018081019092528054829082906107da906116f9565b80601f0160208091040260200160405190810160405280929190818152602001828054610806906116f9565b80156108535780601f1061082857610100808354040283529160200191610853565b820191906000526020600020905b81548152906001019060200180831161083657829003601f168201915b505050918352505060018201546001600160a01b031660208083019190915260028301805460408051828502810185018252828152940193928301828280156108bb57602002820191906000526020600020905b8154815260200190600101908083116108a7575b505050505081526020016003820154815260200160048201548152602001600582015481526020016006820154815260200160078201548152602001600882016040518060c00160405290816000820180548060200260200160405190810160405280929190818152602001828054801561095f57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610941575b50505050508152602001600182018054806020026020016040519081016040528092919081815260200182805480156109c157602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116109a3575b5050505050815260200160028201805480602002602001604051908101604052809291908181526020018280548015610a2357602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610a05575b5050505050815260200160038201805480602002602001604051908101604052809291908181526020016000905b82821015610abd57600084815260209081902083018054604080518285028101850190915281815292830182828015610aa957602002820191906000526020600020905b815481526020019060010190808311610a95575b505050505081526020019060010190610a51565b50505050815260200160048201805480602002602001604051908101604052809291908181526020016000905b82821015610b5657600084815260209081902083018054604080518285028101850190915281815292830182828015610b4257602002820191906000526020600020905b815481526020019060010190808311610b2e575b505050505081526020019060010190610aea565b50505050815260200160058201805480602002602001604051908101604052809291908181526020018280548015610bd957602002820191906000526020600020906000905b82829054906101000a900463ffffffff1663ffffffff1681526020019060040190602082600301049283019260010382029150808411610b9c5790505b505050919092525050508152600e919091015463ffffffff8082166020840152600160201b8204166040830152600160401b900460ff16151560609091015292915050565b610c26610e9f565b47811115610c935760405162461bcd60e51b815260206004820152602f60248201527f5061796f75743a2052657175657374656420616d6f756e7420746f207769746860448201526e6472617720697320746f6f2062696760881b60648201526084015b60405180910390fd5b610c9b6106db565b6001600160a01b03166108fc829081150290604051600060405180830381858888f19350505050610d0b5760405162461bcd60e51b815260206004820152601a6024820152795061796f75743a204661696c656420746f20776974686472617760301b6044820152606401610c8a565b50565b600081815260096020908152604091829020600201805483518184028101840190945280845260609392830182828015610d6757602002820191906000526020600020905b815481526020019060010190808311610d53575b50505050509050919050565b610d7b610e9f565b8051600280546001600160a01b03199081166001600160a01b0393841617825560208085015160038054841691861691909117905560408501516004805484169186169190911790556060850151600580548416918616919091179055608085015160068054841691861691909117905560a085015160078054909316941693909317905560c083015180518493610e18926008929101906110a4565b50905050610d0b8160c00151610f4e565b610e31610e9f565b6001600160a01b038116610e965760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610c8a565b610d0b81610efe565b33610ea86106db565b6001600160a01b0316146106d95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610c8a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60005b8151811015610fff57600a6000838381518110610f7057610f706118eb565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060009054906101000a900460ff1615600a6000848481518110610fbd57610fbd6118eb565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916911515919091179055610ff881611901565b9050610f51565b5050565b6040518061018001604052806060815260200160006001600160a01b031681526020016060815260200160008152602001600081526020016000815260200160008152602001600081526020016110896040518060c001604052806060815260200160608152602001606081526020016060815260200160608152602001606081525090565b81526000602082018190526040820181905260609091015290565b8280548282559060005260206000209081019282156110f9579160200282015b828111156110f957825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906110c4565b50611105929150611109565b5090565b5b80821115611105576000815560010161110a565b60006020828403121561113057600080fd5b5035919050565b60005b8381101561115257818101518382015260200161113a565b83811115611161576000848401525b50505050565b6000815180845261117f816020860160208601611137565b601f01601f19169290920160200192915050565b600081518084526020808501945080840160005b838110156111cc5781516001600160a01b0316875295820195908201906001016111a7565b509495945050505050565b600081518084526020808501945080840160005b838110156111cc578151875295820195908201906001016111eb565b6000815180845260208085019450848260051b860182860160005b8581101561124c57838303895261123a8383516111d7565b98850198925090840190600101611222565b5090979650505050505050565b6000815160c0845261126e60c0850182611193565b9050602080840151858303828701526112878382611193565b925050604084015185830360408701526112a18382611193565b925050606084015185830360608701526112bb8382611207565b925050608084015185830360808701526112d58382611207565b60a086810151888303918901919091528051808352908401945060009250908301905b8083101561131e57845163ffffffff1682529383019360019290920191908301906112f8565b509695505050505050565b600061016080835261133d8184018f611167565b905060018060a01b038d1660208401528b60408401528a60608401528960808401528860a08401528760c084015282810360e084015261137d8188611259565b63ffffffff9687166101008501529490951661012083015250901515610140909101529998505050505050505050565b6001600160a01b0381168114610d0b57600080fd5b80356113cd816113ad565b919050565b6000602082840312156113e457600080fd5b81356113ef816113ad565b9392505050565b60208152600082516101808060208501526114156101a0850183611167565b9150602085015161143160408601826001600160a01b03169052565b506040850151601f198086850301606087015261144e84836111d7565b935060608701516080870152608087015160a087015260a087015160c087015260c087015160e087015260e087015191506101008281880152808801519250506101208187860301818801526114a48584611259565b945080880151925050506101406114c28187018363ffffffff169052565b86015190506101606114db8682018363ffffffff169052565b90950151151593019290925250919050565b6020808252825182820181905260009190848201906040850190845b8181101561152557835183529284019291840191600101611509565b50909695505050505050565b634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b038111828210171561156957611569611531565b60405290565b604051601f8201601f191681016001600160401b038111828210171561159757611597611531565b604052919050565b600082601f8301126115b057600080fd5b813560206001600160401b038211156115cb576115cb611531565b8160051b6115da82820161156f565b92835284810182019282810190878511156115f457600080fd5b83870192505b8483101561161c57823561160d816113ad565b825291830191908301906115fa565b979650505050505050565b60006020828403121561163957600080fd5b81356001600160401b038082111561165057600080fd5b9083019060e0828603121561166457600080fd5b61166c611547565b611675836113c2565b8152611683602084016113c2565b6020820152611694604084016113c2565b60408201526116a5606084016113c2565b60608201526116b6608084016113c2565b60808201526116c760a084016113c2565b60a082015260c0830135828111156116de57600080fd5b6116ea8782860161159f565b60c08301525095945050505050565b600181811c9082168061170d57607f821691505b60208210810361172d57634e487b7160e01b600052602260045260246000fd5b50919050565b600082601f83011261174457600080fd5b81516001600160401b0381111561175d5761175d611531565b611770601f8201601f191660200161156f565b81815284602083860101111561178557600080fd5b611796826020830160208701611137565b949350505050565b80516113cd816113ad565b805163ffffffff811681146113cd57600080fd5b6000602082840312156117cf57600080fd5b81516001600160401b03808211156117e657600080fd5b9083019060e082860312156117fa57600080fd5b611802611547565b82518281111561181157600080fd5b61181d87828601611733565b82525060208301518281111561183257600080fd5b61183e87828601611733565b6020830152506118506040840161179e565b60408201526060830151606082015261186b608084016117a9565b608082015261187c60a084016117a9565b60a082015261188d60c084016117a9565b60c082015295945050505050565b634e487b7160e01b600052601160045260246000fd5b6000826118ce57634e487b7160e01b600052601260045260246000fd5b500490565b600082198211156118e6576118e661189b565b500190565b634e487b7160e01b600052603260045260246000fd5b6000600182016119135761191361189b565b506001019056fea2646970667358221220da26037beee9c20f6e66e3a494e328bdbc694b01205d7adc2653105683e7675d64736f6c634300080f0033";

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
    input: QueuesConstructor.StructStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Params> {
    return super.deploy(input, overrides || {}) as Promise<Params>;
  }
  override getDeployTransaction(
    input: QueuesConstructor.StructStruct,
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