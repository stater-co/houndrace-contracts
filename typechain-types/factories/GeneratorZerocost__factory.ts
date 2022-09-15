/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GeneratorZerocost,
  GeneratorZerocostInterface,
  GeneratorConstructor,
} from "../GeneratorZerocost";

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
  "0x60806040523480156200001157600080fd5b5060405162002646380380620026468339818101604052810190620000379190620005b7565b80620000586200004c620002e660201b60201c565b620002ee60201b60201c565b80600160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c08201518160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060e08201518160070160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506101008201518160080160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050505050620005ea565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000604051905090565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200041182620003c6565b810181811067ffffffffffffffff82111715620004335762000432620003d7565b5b80604052505050565b600062000448620003b2565b905062000456828262000406565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000488826200045b565b9050919050565b6200049a816200047b565b8114620004a657600080fd5b50565b600081519050620004ba816200048f565b92915050565b60006101208284031215620004da57620004d9620003c1565b5b620004e76101206200043c565b90506000620004f984828501620004a9565b60008301525060206200050f84828501620004a9565b60208301525060406200052584828501620004a9565b60408301525060606200053b84828501620004a9565b60608301525060806200055184828501620004a9565b60808301525060a06200056784828501620004a9565b60a08301525060c06200057d84828501620004a9565b60c08301525060e06200059384828501620004a9565b60e083015250610100620005aa84828501620004a9565b6101008301525092915050565b60006101208284031215620005d157620005d0620003bc565b5b6000620005e184828501620004c0565b91505092915050565b61204c80620005fa6000396000f3fe6080604052600436106100595760003560e01c8063715018a61461006257806377479c9c146100795780638da5cb5b146100a257806393380e78146100cd578063d8de65871461010b578063f2fde38b1461013e57610060565b3661006057005b005b34801561006e57600080fd5b50610077610167565b005b34801561008557600080fd5b506100a0600480360381019061009b91906110fb565b61017b565b005b3480156100ae57600080fd5b506100b761040c565b6040516100c49190611138565b60405180910390f35b3480156100d957600080fd5b506100f460048036038101906100ef9190611256565b610435565b604051610102929190611383565b60405180910390f35b34801561011757600080fd5b5061012061065d565b604051610135999897969594939291906113ba565b60405180910390f35b34801561014a57600080fd5b5061016560048036038101906101609190611447565b6107b9565b005b61016f61083c565b61017960006108ba565b565b61018361083c565b80600160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c08201518160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060e08201518160070160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506101008201518160080160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555090505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60608060006001800160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b74a5fbe866040518263ffffffff1660e01b81526004016104979190611483565b600060405180830381865afa1580156104b4573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906104dd91906116c0565b905060006104eb878361097e565b90506000600f8644604051602001610504929190611709565b6040516020818303038152906040528051906020012060001c6105279190611761565b905060005b82518110156105bc5760648284838151811061054b5761054a611792565b5b602002602001015161055d91906117f0565b6105679190611832565b83828151811061057a57610579611792565b5b602002602001015161058c9190611863565b83828151811061059f5761059e611792565b5b602002602001018181525050806105b590611897565b905061052c565b5073__$13ac0bbe16ff54a473352cca36c2f6a8c7$__633e96a35b838a6000600187516105e991906118df565b6040518563ffffffff1660e01b815260040161060894939291906119fd565b600060405180830381865af4158015610625573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061064e9190611ae7565b94509450505050935093915050565b60018060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060070160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060080160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905089565b6107c161083c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610830576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082790611be2565b60405180910390fd5b610839816108ba565b50565b610844610e2e565b73ffffffffffffffffffffffffffffffffffffffff1661086261040c565b73ffffffffffffffffffffffffffffffffffffffff16146108b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108af90611c4e565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60606000835167ffffffffffffffff81111561099d5761099c610f3d565b5b6040519080825280602002602001820160405280156109cb5781602001602082028036833780820191505090505b5090506109d6610e36565b6109de610e8b565b60005b8651811015610e2157600160070160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166385e3f058888381518110610a3e57610a3d611792565b5b60200260200101516040518263ffffffff1660e01b8152600401610a629190611483565b600060405180830381865afa158015610a7f573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610aa89190611e17565b9250600160080160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e6225630888381518110610afe57610afd611792565b5b60200260200101516040518263ffffffff1660e01b8152600401610b229190611483565b60e060405180830381865afa158015610b3f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b639190611f14565b915060638360800151602160368110610b7f57610b7e611792565b5b60200201518460800151602060368110610b9c57610b9b611792565b5b60200201518560800151601f60368110610bb957610bb8611792565b5b60200201518660800151601e60368110610bd657610bd5611792565b5b6020020151610be59190611f41565b610bef9190611f41565b610bf99190611f41565b610c039190611f79565b63ffffffff16848281518110610c1c57610c1b611792565b5b6020026020010181815250506000848281518110610c3d57610c3c611792565b5b60200260200101519050866080015163ffffffff168460800151600960368110610c6a57610c69611792565b5b602002015163ffffffff1603610cb657601481610c879190611832565b858381518110610c9a57610c99611792565b5b60200260200101818151610cae9190611863565b915081815250505b8660a0015163ffffffff168460800151600a60368110610cd957610cd8611792565b5b602002015163ffffffff1603610d2557601481610cf69190611832565b858381518110610d0957610d08611792565b5b60200260200101818151610d1d9190611863565b915081815250505b8660c0015163ffffffff168460800151600b60368110610d4857610d47611792565b5b602002015163ffffffff1603610d9457601481610d659190611832565b858381518110610d7857610d77611792565b5b60200260200101818151610d8c9190611863565b915081815250505b826080015163ffffffff1660028460c00151610db09190611fb6565b63ffffffff161115610e0f576064605a868481518110610dd357610dd2611792565b5b6020026020010151610de591906117f0565b610def9190611832565b858381518110610e0257610e01611792565b5b6020026020010181815250505b5080610e1a90611897565b90506109e1565b5082935050505092915050565b600033905090565b6040518060e0016040528060008152602001600081526020016000815260200160008152602001610e65610ef0565b81526020016060815260200160006006811115610e8557610e84611fe7565b5b81525090565b6040518060e00160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160008152602001600063ffffffff168152602001600063ffffffff168152602001600063ffffffff1681525090565b604051806106c00160405280603690602082028036833780820191505090505090565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610f7582610f2c565b810181811067ffffffffffffffff82111715610f9457610f93610f3d565b5b80604052505050565b6000610fa7610f13565b9050610fb38282610f6c565b919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610fe882610fbd565b9050919050565b610ff881610fdd565b811461100357600080fd5b50565b60008135905061101581610fef565b92915050565b6000610120828403121561103257611031610f27565b5b61103d610120610f9d565b9050600061104d84828501611006565b600083015250602061106184828501611006565b602083015250604061107584828501611006565b604083015250606061108984828501611006565b606083015250608061109d84828501611006565b60808301525060a06110b184828501611006565b60a08301525060c06110c584828501611006565b60c08301525060e06110d984828501611006565b60e0830152506101006110ee84828501611006565b6101008301525092915050565b6000610120828403121561111257611111610f1d565b5b60006111208482850161101b565b91505092915050565b61113281610fdd565b82525050565b600060208201905061114d6000830184611129565b92915050565b600080fd5b600067ffffffffffffffff82111561117357611172610f3d565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b61119c81611189565b81146111a757600080fd5b50565b6000813590506111b981611193565b92915050565b60006111d26111cd84611158565b610f9d565b905080838252602082019050602084028301858111156111f5576111f4611184565b5b835b8181101561121e578061120a88826111aa565b8452602084019350506020810190506111f7565b5050509392505050565b600082601f83011261123d5761123c611153565b5b813561124d8482602086016111bf565b91505092915050565b60008060006060848603121561126f5761126e610f1d565b5b600084013567ffffffffffffffff81111561128d5761128c610f22565b5b61129986828701611228565b93505060206112aa868287016111aa565b92505060406112bb868287016111aa565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6112fa81611189565b82525050565b600061130c83836112f1565b60208301905092915050565b6000602082019050919050565b6000611330826112c5565b61133a81856112d0565b9350611345836112e1565b8060005b8381101561137657815161135d8882611300565b975061136883611318565b925050600181019050611349565b5085935050505092915050565b6000604082019050818103600083015261139d8185611325565b905081810360208301526113b18184611325565b90509392505050565b6000610120820190506113d0600083018c611129565b6113dd602083018b611129565b6113ea604083018a611129565b6113f76060830189611129565b6114046080830188611129565b61141160a0830187611129565b61141e60c0830186611129565b61142b60e0830185611129565b611439610100830184611129565b9a9950505050505050505050565b60006020828403121561145d5761145c610f1d565b5b600061146b84828501611006565b91505092915050565b61147d81611189565b82525050565b60006020820190506114986000830184611474565b92915050565b600080fd5b600067ffffffffffffffff8211156114be576114bd610f3d565b5b6114c782610f2c565b9050602081019050919050565b60005b838110156114f25780820151818401526020810190506114d7565b60008484015250505050565b600061151161150c846114a3565b610f9d565b90508281526020810184848401111561152d5761152c61149e565b5b6115388482856114d4565b509392505050565b600082601f83011261155557611554611153565b5b81516115658482602086016114fe565b91505092915050565b60008151905061157d81610fef565b92915050565b60008151905061159281611193565b92915050565b600063ffffffff82169050919050565b6115b181611598565b81146115bc57600080fd5b50565b6000815190506115ce816115a8565b92915050565b600060e082840312156115ea576115e9610f27565b5b6115f460e0610f9d565b9050600082015167ffffffffffffffff81111561161457611613610fb8565b5b61162084828501611540565b600083015250602082015167ffffffffffffffff81111561164457611643610fb8565b5b61165084828501611540565b60208301525060406116648482850161156e565b604083015250606061167884828501611583565b606083015250608061168c848285016115bf565b60808301525060a06116a0848285016115bf565b60a08301525060c06116b4848285016115bf565b60c08301525092915050565b6000602082840312156116d6576116d5610f1d565b5b600082015167ffffffffffffffff8111156116f4576116f3610f22565b5b611700848285016115d4565b91505092915050565b600060408201905061171e6000830185611474565b61172b6020830184611474565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061176c82611189565b915061177783611189565b92508261178757611786611732565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006117fb82611189565b915061180683611189565b925082820261181481611189565b9150828204841483151761182b5761182a6117c1565b5b5092915050565b600061183d82611189565b915061184883611189565b92508261185857611857611732565b5b828204905092915050565b600061186e82611189565b915061187983611189565b9250828201905080821115611891576118906117c1565b5b92915050565b60006118a282611189565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036118d4576118d36117c1565b5b600182019050919050565b60006118ea82611189565b91506118f583611189565b925082820390508181111561190d5761190c6117c1565b5b92915050565b600082825260208201905092915050565b61192d81611189565b82525050565b600061193f8383611924565b60208301905092915050565b6000611956826112c5565b6119608185611913565b935061196b836112e1565b8060005b8381101561199c5781516119838882611933565b975061198e83611318565b92505060018101905061196f565b5085935050505092915050565b6000819050919050565b6000819050919050565b60006119d86119d36119ce846119a9565b6119b3565b611189565b9050919050565b6119e8816119bd565b82525050565b6119f781611189565b82525050565b60006080820190508181036000830152611a17818761194b565b90508181036020830152611a2b818661194b565b9050611a3a60408301856119df565b611a4760608301846119ee565b95945050505050565b6000611a63611a5e84611158565b610f9d565b90508083825260208201905060208402830185811115611a8657611a85611184565b5b835b81811015611aaf5780611a9b8882611583565b845260208401935050602081019050611a88565b5050509392505050565b600082601f830112611ace57611acd611153565b5b8151611ade848260208601611a50565b91505092915050565b60008060408385031215611afe57611afd610f1d565b5b600083015167ffffffffffffffff811115611b1c57611b1b610f22565b5b611b2885828601611ab9565b925050602083015167ffffffffffffffff811115611b4957611b48610f22565b5b611b5585828601611ab9565b9150509250929050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611bcc602683611b5f565b9150611bd782611b70565b604082019050919050565b60006020820190508181036000830152611bfb81611bbf565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611c38602083611b5f565b9150611c4382611c02565b602082019050919050565b60006020820190508181036000830152611c6781611c2b565b9050919050565b600067ffffffffffffffff821115611c8957611c88610f3d565b5b602082029050919050565b6000611ca7611ca284611c6e565b610f9d565b90508060208402830185811115611cc157611cc0611184565b5b835b81811015611cea5780611cd688826115bf565b845260208401935050602081019050611cc3565b5050509392505050565b600082601f830112611d0957611d08611153565b5b6036611d16848285611c94565b91505092915050565b60078110611d2c57600080fd5b50565b600081519050611d3e81611d1f565b92915050565b60006107808284031215611d5b57611d5a610f27565b5b611d6560e0610f9d565b90506000611d7584828501611583565b6000830152506020611d8984828501611583565b6020830152506040611d9d84828501611583565b6040830152506060611db184828501611583565b6060830152506080611dc584828501611cf4565b60808301525061074082015167ffffffffffffffff811115611dea57611de9610fb8565b5b611df684828501611540565b60a083015250610760611e0b84828501611d2f565b60c08301525092915050565b600060208284031215611e2d57611e2c610f1d565b5b600082015167ffffffffffffffff811115611e4b57611e4a610f22565b5b611e5784828501611d44565b91505092915050565b600060e08284031215611e7657611e75610f27565b5b611e8060e0610f9d565b90506000611e908482850161156e565b6000830152506020611ea484828501611583565b6020830152506040611eb884828501611583565b6040830152506060611ecc84828501611583565b6060830152506080611ee0848285016115bf565b60808301525060a0611ef4848285016115bf565b60a08301525060c0611f08848285016115bf565b60c08301525092915050565b600060e08284031215611f2a57611f29610f1d565b5b6000611f3884828501611e60565b91505092915050565b6000611f4c82611598565b9150611f5783611598565b9250828201905063ffffffff811115611f7357611f726117c1565b5b92915050565b6000611f8482611598565b9150611f8f83611598565b9250828202611f9d81611598565b9150808214611faf57611fae6117c1565b5b5092915050565b6000611fc182611598565b9150611fcc83611598565b925082611fdc57611fdb611732565b5b828204905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea26469706673582212208f8e52a8e19e56d68c365c2513daece9330bc78a9e4de1dc0075a4b46ecd61a664736f6c63430008110033";

type GeneratorZerocostConstructorParams =
  | [linkLibraryAddresses: GeneratorZerocostLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GeneratorZerocostConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class GeneratorZerocost__factory extends ContractFactory {
  constructor(...args: GeneratorZerocostConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        GeneratorZerocost__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
    this.contractName = "GeneratorZerocost";
  }

  static linkBytecode(
    linkLibraryAddresses: GeneratorZerocostLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$13ac0bbe16ff54a473352cca36c2f6a8c7\\$__", "g"),
      linkLibraryAddresses["contracts/utils/Sortings.sol:Sortings"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    input: GeneratorConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GeneratorZerocost> {
    return super.deploy(input, overrides || {}) as Promise<GeneratorZerocost>;
  }
  getDeployTransaction(
    input: GeneratorConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(input, overrides || {});
  }
  attach(address: string): GeneratorZerocost {
    return super.attach(address) as GeneratorZerocost;
  }
  connect(signer: Signer): GeneratorZerocost__factory {
    return super.connect(signer) as GeneratorZerocost__factory;
  }
  static readonly contractName: "GeneratorZerocost";
  public readonly contractName: "GeneratorZerocost";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GeneratorZerocostInterface {
    return new utils.Interface(_abi) as GeneratorZerocostInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GeneratorZerocost {
    return new Contract(address, _abi, signerOrProvider) as GeneratorZerocost;
  }
}

export interface GeneratorZerocostLibraryAddresses {
  ["contracts/utils/Sortings.sol:Sortings"]: string;
}
