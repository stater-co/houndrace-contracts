/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  Params,
  ParamsInterface,
  ArenasConstructor,
} from "../../../../../contracts/arenas/params/Index.sol/Params";

const _abi = [
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
            internalType: "string",
            name: "symbol",
            type: "string",
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
          {
            internalType: "address",
            name: "payments",
            type: "address",
          },
          {
            internalType: "address",
            name: "alphadune",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "allowedCallers",
            type: "address[]",
          },
        ],
        internalType: "struct ArenasConstructor.Struct",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "token_uri",
            type: "string",
          },
          {
            internalType: "address",
            name: "feeCurrency",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "surface",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "distance",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "weather",
            type: "uint32",
          },
        ],
        indexed: false,
        internalType: "struct Arena.Struct",
        name: "arena",
        type: "tuple",
      },
    ],
    name: "EditArena",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "token_uri",
            type: "string",
          },
          {
            internalType: "address",
            name: "feeCurrency",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "surface",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "distance",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "weather",
            type: "uint32",
          },
        ],
        indexed: false,
        internalType: "struct Arena.Struct",
        name: "arena",
        type: "tuple",
      },
    ],
    name: "NewArena",
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
        indexed: false,
        internalType: "string",
        name: "token_uri",
        type: "string",
      },
    ],
    name: "NewTokenUri",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
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
    name: "arena",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "token_uri",
            type: "string",
          },
          {
            internalType: "address",
            name: "feeCurrency",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "surface",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "distance",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "weather",
            type: "uint32",
          },
        ],
        internalType: "struct Arena.Struct",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "arenaOwner",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "arenas",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "token_uri",
        type: "string",
      },
      {
        internalType: "address",
        name: "feeCurrency",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "surface",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "distance",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "weather",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
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
      {
        internalType: "address",
        name: "payments",
        type: "address",
      },
      {
        internalType: "address",
        name: "alphadune",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
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
            internalType: "string",
            name: "symbol",
            type: "string",
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
          {
            internalType: "address",
            name: "payments",
            type: "address",
          },
          {
            internalType: "address",
            name: "alphadune",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "allowedCallers",
            type: "address[]",
          },
        ],
        internalType: "struct ArenasConstructor.Struct",
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
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
  "0x60806040526001600e553480156200001657600080fd5b50604051620027d4380380620027d483398101604081905262000039916200047e565b805160208201516200004b3362000137565b60016200005983826200061b565b5060026200006882826200061b565b5050815182915060079081906200008090826200061b565b50602082015160018201906200009790826200061b565b5060408201516002820180546001600160a01b039283166001600160a01b0319918216179091556060840151600384018054918416918316919091179055608084015160048401805491841691831691909117905560a084015160058401805491909316911617905560c082015180516200011d91600684019160209091019062000246565b50505060c0810151620001309062000187565b5062000725565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60005b8151811015620002425760106000838381518110620001ad57620001ad620006e7565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060009054906101000a900460ff161560106000848481518110620001fd57620001fd620006e7565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff19169115159190911790556200023a81620006fd565b90506200018a565b5050565b8280548282559060005260206000209081019282156200029e579160200282015b828111156200029e57825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062000267565b50620002ac929150620002b0565b5090565b5b80821115620002ac5760008155600101620002b1565b634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b0381118282101715620003025762000302620002c7565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620003335762000333620002c7565b604052919050565b600082601f8301126200034d57600080fd5b81516001600160401b03811115620003695762000369620002c7565b60206200037f601f8301601f1916820162000308565b82815285828487010111156200039457600080fd5b60005b83811015620003b457858101830151828201840152820162000397565b83811115620003c65760008385840101525b5095945050505050565b80516001600160a01b0381168114620003e857600080fd5b919050565b600082601f830112620003ff57600080fd5b815160206001600160401b038211156200041d576200041d620002c7565b8160051b6200042e82820162000308565b92835284810182019282810190878511156200044957600080fd5b83870192505b8483101562000473576200046383620003d0565b825291830191908301906200044f565b979650505050505050565b6000602082840312156200049157600080fd5b81516001600160401b0380821115620004a957600080fd5b9083019060e08286031215620004be57600080fd5b620004c8620002dd565b825182811115620004d857600080fd5b620004e6878286016200033b565b825250602083015182811115620004fc57600080fd5b6200050a878286016200033b565b6020830152506200051e60408401620003d0565b60408201526200053160608401620003d0565b60608201526200054460808401620003d0565b60808201526200055760a08401620003d0565b60a082015260c0830151828111156200056f57600080fd5b6200057d87828601620003ed565b60c08301525095945050505050565b600181811c90821680620005a157607f821691505b602082108103620005c257634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200061657600081815260208120601f850160051c81016020861015620005f15750805b601f850160051c820191505b818110156200061257828155600101620005fd565b5050505b505050565b81516001600160401b03811115620006375762000637620002c7565b6200064f816200064884546200058c565b84620005c8565b602080601f8311600181146200068757600084156200066e5750858301515b600019600386901b1c1916600185901b17855562000612565b600085815260208120601f198616915b82811015620006b85788860151825594840194600190910190840162000697565b5085821015620006d75787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052603260045260246000fd5b6000600182016200071e57634e487b7160e01b600052601160045260246000fd5b5060010190565b61209f80620007356000396000f3fe6080604052600436106101275760003560e01c806301ffc9a71461013057806306fdde0314610165578063081812fc14610187578063095ea7b3146101bf578063150b7a02146101df57806323b872dd1461021857806342842e0e146102385780636352211e1461025857806370a0823114610278578063715018a6146102a657806384f4319c146102bb5780638da5cb5b146102ee57806395d89b4114610303578063a22cb46514610318578063af640d0f14610338578063b0e1c19d1461034e578063b74a5fbe1461036e578063b88d4fde1461039b578063c87b56dd146103bb578063d63a8e11146103db578063d8de65871461040b578063e115234314610432578063e985e9c514610452578063eb67344314610472578063f2fde38b1461049257005b3661012e57005b005b34801561013c57600080fd5b5061015061014b366004611737565b6104b2565b60405190151581526020015b60405180910390f35b34801561017157600080fd5b5061017a610504565b60405161015c91906117ac565b34801561019357600080fd5b506101a76101a23660046117bf565b610596565b6040516001600160a01b03909116815260200161015c565b3480156101cb57600080fd5b5061012e6101da3660046117f4565b6105bd565b3480156101eb57600080fd5b506101ff6101fa3660046118e3565b6106d7565b6040516001600160e01b0319909116815260200161015c565b34801561022457600080fd5b5061012e61023336600461195e565b6106e8565b34801561024457600080fd5b5061012e61025336600461195e565b610719565b34801561026457600080fd5b506101a76102733660046117bf565b610734565b34801561028457600080fd5b5061029861029336600461199a565b610769565b60405190815260200161015c565b3480156102b257600080fd5b5061012e6107ef565b3480156102c757600080fd5b506102db6102d63660046117bf565b610803565b60405161015c97969594939291906119b5565b3480156102fa57600080fd5b506101a7610968565b34801561030f57600080fd5b5061017a610977565b34801561032457600080fd5b5061012e610333366004611a17565b610986565b34801561034457600080fd5b50610298600e5481565b34801561035a57600080fd5b506101a76103693660046117bf565b610995565b34801561037a57600080fd5b5061038e6103893660046117bf565b6109a0565b60405161015c9190611a53565b3480156103a757600080fd5b5061012e6103b63660046118e3565b610b67565b3480156103c757600080fd5b5061017a6103d63660046117bf565b610b9f565b3480156103e757600080fd5b506101506103f636600461199a565b60106020526000908152604090205460ff1681565b34801561041757600080fd5b50610420610c13565b60405161015c96959493929190611aeb565b34801561043e57600080fd5b5061012e61044d3660046117bf565b610d5c565b34801561045e57600080fd5b5061015061046d366004611b44565b610e47565b34801561047e57600080fd5b5061012e61048d366004611c1d565b610e75565b34801561049e57600080fd5b5061012e6104ad36600461199a565b610f3a565b60006001600160e01b031982166380ac58cd60e01b14806104e357506001600160e01b03198216635b5e139f60e01b145b806104fe57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606001805461051390611d15565b80601f016020809104026020016040519081016040528092919081815260200182805461053f90611d15565b801561058c5780601f106105615761010080835404028352916020019161058c565b820191906000526020600020905b81548152906001019060200180831161056f57829003601f168201915b5050505050905090565b60006105a182610fb0565b506000908152600560205260409020546001600160a01b031690565b60006105c882610734565b9050806001600160a01b0316836001600160a01b03160361063a5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061065657506106568133610e47565b6106c85760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610631565b6106d28383610fe4565b505050565b630a85bd0160e11b5b949350505050565b6106f23382611052565b61070e5760405162461bcd60e51b815260040161063190611d4f565b6106d28383836110b0565b6106d283838360405180602001604052806000815250610b67565b6000818152600360205260408120546001600160a01b0316806104fe5760405162461bcd60e51b815260040161063190611d9d565b60006001600160a01b0382166107d35760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610631565b506001600160a01b031660009081526004602052604090205490565b6107f761124c565b61080160006112ab565b565b600f6020526000908152604090208054819061081e90611d15565b80601f016020809104026020016040519081016040528092919081815260200182805461084a90611d15565b80156108975780601f1061086c57610100808354040283529160200191610897565b820191906000526020600020905b81548152906001019060200180831161087a57829003601f168201915b5050505050908060010180546108ac90611d15565b80601f01602080910402602001604051908101604052809291908181526020018280546108d890611d15565b80156109255780601f106108fa57610100808354040283529160200191610925565b820191906000526020600020905b81548152906001019060200180831161090857829003601f168201915b5050506002840154600385015460049095015493946001600160a01b039091169390925063ffffffff8082169250600160201b8204811691600160401b90041687565b6000546001600160a01b031690565b60606002805461051390611d15565b6109913383836112fb565b5050565b60006104fe82610734565b6040805160e081018252606080825260208201819052600092820183905281018290526080810182905260a0810182905260c08101919091526000828152600f602052604090819020815160e08101909252805482908290610a0190611d15565b80601f0160208091040260200160405190810160405280929190818152602001828054610a2d90611d15565b8015610a7a5780601f10610a4f57610100808354040283529160200191610a7a565b820191906000526020600020905b815481529060010190602001808311610a5d57829003601f168201915b50505050508152602001600182018054610a9390611d15565b80601f0160208091040260200160405190810160405280929190818152602001828054610abf90611d15565b8015610b0c5780601f10610ae157610100808354040283529160200191610b0c565b820191906000526020600020905b815481529060010190602001808311610aef57829003601f168201915b505050918352505060028201546001600160a01b031660208201526003820154604082015260049091015463ffffffff8082166060840152600160201b820481166080840152600160401b9091041660a09091015292915050565b610b713383611052565b610b8d5760405162461bcd60e51b815260040161063190611d4f565b610b99848484846113c5565b50505050565b6060610baa82610fb0565b6000610bc160408051602081019091526000815290565b90506000815111610be15760405180602001604052806000815250610c0c565b80610beb846113f8565b604051602001610bfc929190611dcf565b6040516020818303038152906040525b9392505050565b600780548190610c2290611d15565b80601f0160208091040260200160405190810160405280929190818152602001828054610c4e90611d15565b8015610c9b5780601f10610c7057610100808354040283529160200191610c9b565b820191906000526020600020905b815481529060010190602001808311610c7e57829003601f168201915b505050505090806001018054610cb090611d15565b80601f0160208091040260200160405190810160405280929190818152602001828054610cdc90611d15565b8015610d295780601f10610cfe57610100808354040283529160200191610d29565b820191906000526020600020905b815481529060010190602001808311610d0c57829003601f168201915b50505060028401546003850154600486015460059096015494956001600160a01b03928316959183169450821692501686565b610d6461124c565b47811115610dcc5760405162461bcd60e51b815260206004820152602f60248201527f5061796f75743a2052657175657374656420616d6f756e7420746f207769746860448201526e6472617720697320746f6f2062696760881b6064820152608401610631565b610dd4610968565b6001600160a01b03166108fc829081150290604051600060405180830381858888f19350505050610e445760405162461bcd60e51b815260206004820152601a6024820152795061796f75743a204661696c656420746f20776974686472617760301b6044820152606401610631565b50565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b610e7d61124c565b805181906007908190610e909082611e4c565b5060208201516001820190610ea59082611e4c565b5060408201516002820180546001600160a01b039283166001600160a01b0319918216179091556060840151600384018054918416918316919091179055608084015160048401805491841691831691909117905560a084015160058401805491909316911617905560c08201518051610f299160068401916020909101906116a7565b50905050610e448160c001516114f8565b610f4261124c565b6001600160a01b038116610fa75760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610631565b610e44816112ab565b6000818152600360205260409020546001600160a01b0316610e445760405162461bcd60e51b815260040161063190611d9d565b600081815260056020526040902080546001600160a01b0319166001600160a01b038416908117909155819061101982610734565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061105e83610734565b9050806001600160a01b0316846001600160a01b0316148061108557506110858185610e47565b806106e05750836001600160a01b031661109e84610596565b6001600160a01b031614949350505050565b826001600160a01b03166110c382610734565b6001600160a01b0316146111275760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610631565b6001600160a01b0382166111895760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610631565b611194600082610fe4565b6001600160a01b03831660009081526004602052604081208054600192906111bd908490611f21565b90915550506001600160a01b03821660009081526004602052604081208054600192906111eb908490611f38565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b33611255610968565b6001600160a01b0316146108015760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610631565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b816001600160a01b0316836001600160a01b0316036113585760405162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b6044820152606401610631565b6001600160a01b03838116600081815260066020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6113d08484846110b0565b6113dc848484846115a9565b610b995760405162461bcd60e51b815260040161063190611f50565b60608160000361141f5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611449578061143381611fa2565b91506114429050600a83611fd1565b9150611423565b6000816001600160401b038111156114635761146361181e565b6040519080825280601f01601f19166020018201604052801561148d576020820181803683370190505b5090505b84156106e0576114a2600183611f21565b91506114af600a86611fe5565b6114ba906030611f38565b60f81b8183815181106114cf576114cf611ff9565b60200101906001600160f81b031916908160001a9053506114f1600a86611fd1565b9450611491565b60005b8151811015610991576010600083838151811061151a5761151a611ff9565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060009054906101000a900460ff16156010600084848151811061156757611567611ff9565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff19169115159190911790556115a281611fa2565b90506114fb565b60006001600160a01b0384163b1561169f57604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906115ed90339089908890889060040161200f565b6020604051808303816000875af1925050508015611628575060408051601f3d908101601f191682019092526116259181019061204c565b60015b611685573d808015611656576040519150601f19603f3d011682016040523d82523d6000602084013e61165b565b606091505b50805160000361167d5760405162461bcd60e51b815260040161063190611f50565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506106e0565b5060016106e0565b8280548282559060005260206000209081019282156116fc579160200282015b828111156116fc57825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906116c7565b5061170892915061170c565b5090565b5b80821115611708576000815560010161170d565b6001600160e01b031981168114610e4457600080fd5b60006020828403121561174957600080fd5b8135610c0c81611721565b60005b8381101561176f578181015183820152602001611757565b83811115610b995750506000910152565b60008151808452611798816020860160208601611754565b601f01601f19169290920160200192915050565b602081526000610c0c6020830184611780565b6000602082840312156117d157600080fd5b5035919050565b80356001600160a01b03811681146117ef57600080fd5b919050565b6000806040838503121561180757600080fd5b611810836117d8565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b03811182821017156118565761185661181e565b60405290565b604051601f8201601f191681016001600160401b03811182821017156118845761188461181e565b604052919050565b60006001600160401b038311156118a5576118a561181e565b6118b8601f8401601f191660200161185c565b90508281528383830111156118cc57600080fd5b828260208301376000602084830101529392505050565b600080600080608085870312156118f957600080fd5b611902856117d8565b9350611910602086016117d8565b92506040850135915060608501356001600160401b0381111561193257600080fd5b8501601f8101871361194357600080fd5b6119528782356020840161188c565b91505092959194509250565b60008060006060848603121561197357600080fd5b61197c846117d8565b925061198a602085016117d8565b9150604084013590509250925092565b6000602082840312156119ac57600080fd5b610c0c826117d8565b60e0815260006119c860e083018a611780565b82810360208401526119da818a611780565b6001600160a01b039890981660408401525050606081019490945263ffffffff928316608085015290821660a08401521660c09091015292915050565b60008060408385031215611a2a57600080fd5b611a33836117d8565b915060208301358015158114611a4857600080fd5b809150509250929050565b602081526000825160e06020840152611a70610100840182611780565b90506020840151601f19848303016040850152611a8d8282611780565b91505060018060a01b03604085015116606084015260608401516080840152608084015163ffffffff80821660a08601528060a08701511660c0860152505060c0840151611ae360e085018263ffffffff169052565b509392505050565b60c081526000611afe60c0830189611780565b8281036020840152611b108189611780565b6001600160a01b03978816604085015295871660608401525050918416608083015290921660a09092019190915292915050565b60008060408385031215611b5757600080fd5b611b60836117d8565b9150611b6e602084016117d8565b90509250929050565b600082601f830112611b8857600080fd5b610c0c8383356020850161188c565b600082601f830112611ba857600080fd5b813560206001600160401b03821115611bc357611bc361181e565b8160051b611bd282820161185c565b9283528481018201928281019087851115611bec57600080fd5b83870192505b84831015611c1257611c03836117d8565b82529183019190830190611bf2565b979650505050505050565b600060208284031215611c2f57600080fd5b81356001600160401b0380821115611c4657600080fd5b9083019060e08286031215611c5a57600080fd5b611c62611834565b823582811115611c7157600080fd5b611c7d87828601611b77565b825250602083013582811115611c9257600080fd5b611c9e87828601611b77565b602083015250611cb0604084016117d8565b6040820152611cc1606084016117d8565b6060820152611cd2608084016117d8565b6080820152611ce360a084016117d8565b60a082015260c083013582811115611cfa57600080fd5b611d0687828601611b97565b60c08301525095945050505050565b600181811c90821680611d2957607f821691505b602082108103611d4957634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b602080825260189082015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604082015260600190565b60008351611de1818460208801611754565b835190830190611df5818360208801611754565b01949350505050565b601f8211156106d257600081815260208120601f850160051c81016020861015611e255750805b601f850160051c820191505b81811015611e4457828155600101611e31565b505050505050565b81516001600160401b03811115611e6557611e6561181e565b611e7981611e738454611d15565b84611dfe565b602080601f831160018114611eae5760008415611e965750858301515b600019600386901b1c1916600185901b178555611e44565b600085815260208120601f198616915b82811015611edd57888601518255948401946001909101908401611ebe565b5085821015611efb5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b600082821015611f3357611f33611f0b565b500390565b60008219821115611f4b57611f4b611f0b565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b600060018201611fb457611fb4611f0b565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082611fe057611fe0611fbb565b500490565b600082611ff457611ff4611fbb565b500690565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061204290830184611780565b9695505050505050565b60006020828403121561205e57600080fd5b8151610c0c8161172156fea26469706673582212209a487744a69057b497eca4895850e59a9bebe0684a1b609a7a4d25284fb9278a64736f6c634300080f0033";

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
    input: ArenasConstructor.StructStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Params> {
    return super.deploy(input, overrides || {}) as Promise<Params>;
  }
  override getDeployTransaction(
    input: ArenasConstructor.StructStruct,
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