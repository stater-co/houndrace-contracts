/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Lootboxes, LootboxesInterface, Constructor } from "../Lootboxes";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "hounds",
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
            internalType: "bool",
            name: "canBeOpened",
            type: "bool",
          },
        ],
        internalType: "struct Constructor.Struct",
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
        components: [
          {
            internalType: "address[]",
            name: "rewardContracts",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "tokenIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "amounts",
            type: "uint256[]",
          },
          {
            internalType: "enum Payment.PaymentTypes[]",
            name: "rewardTypes",
            type: "uint8[]",
          },
          {
            internalType: "bool",
            name: "generated",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct Box.Struct",
        name: "box",
        type: "tuple",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "LootboxOpened",
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
        name: "idFinish",
        type: "uint256",
      },
    ],
    name: "NewLootboxes",
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
        internalType: "address",
        name: "hounds",
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
        internalType: "bool",
        name: "canBeOpened",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "token_uri",
        type: "string",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "uint256",
        name: "boxId",
        type: "uint256",
      },
    ],
    name: "open",
    outputs: [],
    stateMutability: "payable",
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
            internalType: "address",
            name: "hounds",
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
            internalType: "bool",
            name: "canBeOpened",
            type: "bool",
          },
        ],
        internalType: "struct Constructor.Struct",
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
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "setOpenStatus",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002e1f38038062002e1f8339810160408190526200003491620001a5565b60405180604001604052806011815260200170090deeadcc8a4c2c6ca4098dedee8c4def607b1b815250604051806040016040528060048152602001632429262160e11b815250620000956200008f6200011e60201b60201c565b62000122565b6001620000a38382620002c2565b506002620000b28282620002c2565b50508151600980546001600160a01b039283166001600160a01b0319918216179091556020840151600a8054918416919092161790556040830151600b80546060909501511515600160a01b026001600160a81b0319909516919092161792909217909155506200038e565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620001a057600080fd5b919050565b600060808284031215620001b857600080fd5b604051608081016001600160401b0381118282101715620001dd57620001dd62000172565b604052620001eb8362000188565b8152620001fb6020840162000188565b60208201526200020e6040840162000188565b6040820152606083015180151581146200022757600080fd5b60608201529392505050565b600181811c908216806200024857607f821691505b6020821081036200026957634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002bd57600081815260208120601f850160051c81016020861015620002985750805b601f850160051c820191505b81811015620002b957828155600101620002a4565b5050505b505050565b81516001600160401b03811115620002de57620002de62000172565b620002f681620002ef845462000233565b846200026f565b602080601f8311600181146200032e5760008415620003155750858301515b600019600386901b1c1916600185901b178555620002b9565b600085815260208120601f198616915b828110156200035f578886015182559484019460019091019084016200033e565b50858210156200037e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b612a81806200039e6000396000f3fe6080604052600436106101805760003560e01c8063715018a6116100d6578063af640d0f1161007f578063d8de658711610059578063d8de658714610446578063e985e9c5146104c6578063f2fde38b1461050f57600080fd5b8063af640d0f146103f0578063b88d4fde14610406578063c87b56dd1461042657600080fd5b80638da5cb5b116100b05780638da5cb5b1461039d57806395d89b41146103bb578063a22cb465146103d057600080fd5b8063715018a61461034857806377097fc81461035d5780637c46a44b1461037d57600080fd5b806319e78d08116101385780636352211e116101125780636352211e146102e7578063690e7c091461030757806370a082311461031a57600080fd5b806319e78d081461028757806323b872dd146102a757806342842e0e146102c757600080fd5b8063081812fc11610169578063081812fc146101dc578063095ea7b314610214578063150b7a021461023657600080fd5b806301ffc9a71461018557806306fdde03146101ba575b600080fd5b34801561019157600080fd5b506101a56101a0366004611ab2565b61052f565b60405190151581526020015b60405180910390f35b3480156101c657600080fd5b506101cf610614565b6040516101b19190611b3d565b3480156101e857600080fd5b506101fc6101f7366004611b50565b6106a6565b6040516001600160a01b0390911681526020016101b1565b34801561022057600080fd5b5061023461022f366004611b85565b6106cd565b005b34801561024257600080fd5b50610256610251366004611c72565b610821565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016101b1565b34801561029357600080fd5b506102346102a2366004611cfe565b61084b565b3480156102b357600080fd5b506102346102c2366004611d7b565b6108f8565b3480156102d357600080fd5b506102346102e2366004611d7b565b61097f565b3480156102f357600080fd5b506101fc610302366004611b50565b61099a565b610234610315366004611b50565b6109ff565b34801561032657600080fd5b5061033a610335366004611db7565b610a98565b6040519081526020016101b1565b34801561035457600080fd5b50610234610b32565b34801561036957600080fd5b50610234610378366004611dd2565b610b46565b34801561038957600080fd5b50610234610398366004611e2d565b610bcb565b3480156103a957600080fd5b506000546001600160a01b03166101fc565b3480156103c757600080fd5b506101cf610c1d565b3480156103dc57600080fd5b506102346103eb366004611e48565b610c2c565b3480156103fc57600080fd5b5061033a60085481565b34801561041257600080fd5b50610234610421366004611c72565b610c3b565b34801561043257600080fd5b506101cf610441366004611b50565b610cc9565b34801561045257600080fd5b50600954600a54600b54610491926001600160a01b03908116928116919081169074010000000000000000000000000000000000000000900460ff1684565b6040516101b194939291906001600160a01b039485168152928416602084015292166040820152901515606082015260800190565b3480156104d257600080fd5b506101a56104e1366004611e7b565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b34801561051b57600080fd5b5061023461052a366004611db7565b610dd1565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd0000000000000000000000000000000000000000000000000000000014806105c257507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061060e57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b60606001805461062390611ea5565b80601f016020809104026020016040519081016040528092919081815260200182805461064f90611ea5565b801561069c5780601f106106715761010080835404028352916020019161069c565b820191906000526020600020905b81548152906001019060200180831161067f57829003601f168201915b5050505050905090565b60006106b182610e5e565b506000908152600560205260409020546001600160a01b031690565b60006106d88261099a565b9050806001600160a01b0316836001600160a01b0316036107665760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b336001600160a01b03821614806107a057506001600160a01b038116600090815260066020908152604080832033845290915290205460ff165b6108125760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000606482015260840161075d565b61081c8383610ec2565b505050565b7f150b7a02000000000000000000000000000000000000000000000000000000005b949350505050565b610853610f48565b8051600980546001600160a01b039283167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091556020830151600a8054918416919092161790556040820151600b8054606090940151151574010000000000000000000000000000000000000000027fffffffffffffffffffffff0000000000000000000000000000000000000000009094169190921617919091179055565b6109023382610fa2565b6109745760405162461bcd60e51b815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206e6f7220617070726f766564000000000000000000000000000000000000606482015260840161075d565b61081c838383611020565b61081c83838360405180602001604052806000815250610c3b565b6000818152600360205260408120546001600160a01b03168061060e5760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e2049440000000000000000604482015260640161075d565b600b5474010000000000000000000000000000000000000000900460ff16610a2657600080fd5b33610a308261099a565b6001600160a01b031614610a4357600080fd5b6000818152600c6020526040908190209051339183917f27391ec415d85088ffd20ad5068567ee61306cf14e3cb02f1a709f43e6e1fdcf91610a849161266d565b60405180910390a3610a9581611205565b50565b60006001600160a01b038216610b165760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e65720000000000000000000000000000000000000000000000606482015260840161075d565b506001600160a01b031660009081526004602052604090205490565b610b3a610f48565b610b446000611245565b565b610b4e610f48565b60085460005b83811015610b9757610b68336008546112ad565b610b7460085484611407565b600860008154610b8390612777565b90915550610b9081612777565b9050610b54565b5060085460405182907fe929bb466f0257bc8400388f631be46b0a21b612148f8e8df8b8651a9c67ded690600090a3505050565b610bd3610f48565b600b805491151574010000000000000000000000000000000000000000027fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff909216919091179055565b60606002805461062390611ea5565b610c373383836114a9565b5050565b610c453383610fa2565b610cb75760405162461bcd60e51b815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206e6f7220617070726f766564000000000000000000000000000000000000606482015260840161075d565b610cc384848484611595565b50505050565b6060610cd482610e5e565b60008281526007602052604081208054610ced90611ea5565b80601f0160208091040260200160405190810160405280929190818152602001828054610d1990611ea5565b8015610d665780601f10610d3b57610100808354040283529160200191610d66565b820191906000526020600020905b815481529060010190602001808311610d4957829003601f168201915b505050505090506000610d8460408051602081019091526000815290565b90508051600003610d96575092915050565b815115610dc8578082604051602001610db09291906127af565b60405160208183030381529060405292505050919050565b6108438461161e565b610dd9610f48565b6001600160a01b038116610e555760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161075d565b610a9581611245565b6000818152600360205260409020546001600160a01b0316610a955760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e2049440000000000000000604482015260640161075d565b600081815260056020526040902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0384169081179091558190610f0f8261099a565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000546001600160a01b03163314610b445760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161075d565b600080610fae8361099a565b9050806001600160a01b0316846001600160a01b03161480610ff557506001600160a01b0380821660009081526006602090815260408083209388168352929052205460ff165b806108435750836001600160a01b031661100e846106a6565b6001600160a01b031614949350505050565b826001600160a01b03166110338261099a565b6001600160a01b0316146110af5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e6572000000000000000000000000000000000000000000000000000000606482015260840161075d565b6001600160a01b03821661112a5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161075d565b611135600082610ec2565b6001600160a01b038316600090815260046020526040812080546001929061115e9084906127de565b90915550506001600160a01b038216600090815260046020526040812080546001929061118c9084906127f1565b909155505060008181526003602052604080822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b61120e81611692565b6000818152600760205260409020805461122790611ea5565b159050610a95576000818152600760205260408120610a9591611a36565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0382166113035760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161075d565b6000818152600360205260409020546001600160a01b0316156113685760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161075d565b6001600160a01b03821660009081526004602052604081208054600192906113919084906127f1565b909155505060008181526003602052604080822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000828152600360205260409020546001600160a01b03166114915760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201527f6578697374656e7420746f6b656e000000000000000000000000000000000000606482015260840161075d565b600082815260076020526040902061081c8282612852565b816001600160a01b0316836001600160a01b03160361150a5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161075d565b6001600160a01b0383811660008181526006602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6115a0848484611020565b6115ac84848484611745565b610cc35760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161075d565b606061162982610e5e565b600061164060408051602081019091526000815290565b90506000815111611660576040518060200160405280600081525061168b565b8061166a84611901565b60405160200161167b9291906127af565b6040516020818303038152906040525b9392505050565b600061169d8261099a565b90506116aa600083610ec2565b6001600160a01b03811660009081526004602052604081208054600192906116d39084906127de565b909155505060008281526003602052604080822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60006001600160a01b0384163b156118f9576040517f150b7a020000000000000000000000000000000000000000000000000000000081526001600160a01b0385169063150b7a02906117a290339089908890889060040161296c565b6020604051808303816000875af19250505080156117fb575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526117f8918101906129a8565b60015b6118ae573d808015611829576040519150601f19603f3d011682016040523d82523d6000602084013e61182e565b606091505b5080516000036118a65760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161075d565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050610843565b506001610843565b60608160000361194457505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b811561196e578061195881612777565b91506119679050600a836129f4565b9150611948565b60008167ffffffffffffffff81111561198957611989611baf565b6040519080825280601f01601f1916602001820160405280156119b3576020820181803683370190505b5090505b8415610843576119c86001836127de565b91506119d5600a86612a08565b6119e09060306127f1565b60f81b8183815181106119f5576119f5612a1c565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611a2f600a866129f4565b94506119b7565b508054611a4290611ea5565b6000825580601f10611a52575050565b601f016020900490600052602060002090810190610a9591905b80821115611a805760008155600101611a6c565b5090565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114610a9557600080fd5b600060208284031215611ac457600080fd5b813561168b81611a84565b60005b83811015611aea578181015183820152602001611ad2565b50506000910152565b60008151808452611b0b816020860160208601611acf565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061168b6020830184611af3565b600060208284031215611b6257600080fd5b5035919050565b80356001600160a01b0381168114611b8057600080fd5b919050565b60008060408385031215611b9857600080fd5b611ba183611b69565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600067ffffffffffffffff80841115611bf957611bf9611baf565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611c3f57611c3f611baf565b81604052809350858152868686011115611c5857600080fd5b858560208301376000602087830101525050509392505050565b60008060008060808587031215611c8857600080fd5b611c9185611b69565b9350611c9f60208601611b69565b925060408501359150606085013567ffffffffffffffff811115611cc257600080fd5b8501601f81018713611cd357600080fd5b611ce287823560208401611bde565b91505092959194509250565b80358015158114611b8057600080fd5b600060808284031215611d1057600080fd5b6040516080810181811067ffffffffffffffff82111715611d3357611d33611baf565b604052611d3f83611b69565b8152611d4d60208401611b69565b6020820152611d5e60408401611b69565b6040820152611d6f60608401611cee565b60608201529392505050565b600080600060608486031215611d9057600080fd5b611d9984611b69565b9250611da760208501611b69565b9150604084013590509250925092565b600060208284031215611dc957600080fd5b61168b82611b69565b60008060408385031215611de557600080fd5b82359150602083013567ffffffffffffffff811115611e0357600080fd5b8301601f81018513611e1457600080fd5b611e2385823560208401611bde565b9150509250929050565b600060208284031215611e3f57600080fd5b61168b82611cee565b60008060408385031215611e5b57600080fd5b611e6483611b69565b9150611e7260208401611cee565b90509250929050565b60008060408385031215611e8e57600080fd5b611e9783611b69565b9150611e7260208401611b69565b600181811c90821680611eb957607f821691505b602082108103611ef2577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b6000815480845260208085019450836000528060002060005b83811015611f2d57815487529582019560019182019101611f11565b509495945050505050565b60048110611f6f577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b805480835260008281526020808220940193909190825b82601f8201101561220a57815460ff611fa588828416611f38565b6020611fb8818a01838560081c16611f38565b6040611fcb818b01848660101c16611f38565b6060611fde818c01858760181c16611f38565b6080611ff0818d018688871c16611f38565b60a09350612005848d01868860281c16611f38565b60c0612018818e01878960301c16611f38565b60e061202b818f01888a60381c16611f38565b61203d6101008f01888a881c16611f38565b6120506101208f01888a60481c16611f38565b6120636101408f01888a60501c16611f38565b6120766101608f01888a60581c16611f38565b6120886101808f01888a871c16611f38565b61209b6101a08f01888a60681c16611f38565b6120ae6101c08f01888a60701c16611f38565b6120c16101e08f01888a60781c16611f38565b6120d36102008f01888a861c16611f38565b6120e66102208f01888a60881c16611f38565b6120f96102408f01888a60901c16611f38565b61210c6102608f01888a60981c16611f38565b61211e6102808f01888a891c16611f38565b6121316102a08f01888a60a81c16611f38565b6121446102c08f01888a60b01c16611f38565b6121576102e08f01888a60b81c16611f38565b6121696103008f01888a851c16611f38565b61217c6103208f01888a60c81c16611f38565b61218f6103408f01888a60d01c16611f38565b6121a26103608f01888a60d81c16611f38565b6121b46103808f01888a841c16611f38565b5050505050506121cd6103a08901828460e81c16611f38565b6121e06103c08901828460f01c16611f38565b506121f26103e088018260f81c611f38565b50610400959095019460019190910190602001611f8a565b9054908281101561222d576122228660ff8416611f38565b602095909501946001015b82811015612250576122458660ff8460081c16611f38565b602095909501946001015b82811015612273576122688660ff8460101c16611f38565b602095909501946001015b828110156122965761228b8660ff8460181c16611f38565b602095909501946001015b828110156122b9576122ae8660ff8460201c16611f38565b602095909501946001015b828110156122dc576122d18660ff8460281c16611f38565b602095909501946001015b828110156122ff576122f48660ff8460301c16611f38565b602095909501946001015b82811015612322576123178660ff8460381c16611f38565b602095909501946001015b828110156123455761233a8660ff8460401c16611f38565b602095909501946001015b828110156123685761235d8660ff8460481c16611f38565b602095909501946001015b8281101561238b576123808660ff8460501c16611f38565b602095909501946001015b828110156123ae576123a38660ff8460581c16611f38565b602095909501946001015b828110156123d1576123c68660ff8460601c16611f38565b602095909501946001015b828110156123f4576123e98660ff8460681c16611f38565b602095909501946001015b828110156124175761240c8660ff8460701c16611f38565b602095909501946001015b8281101561243a5761242f8660ff8460781c16611f38565b602095909501946001015b8281101561245d576124528660ff8460801c16611f38565b602095909501946001015b82811015612480576124758660ff8460881c16611f38565b602095909501946001015b828110156124a3576124988660ff8460901c16611f38565b602095909501946001015b828110156124c6576124bb8660ff8460981c16611f38565b602095909501946001015b828110156124e9576124de8660ff8460a01c16611f38565b602095909501946001015b8281101561250c576125018660ff8460a81c16611f38565b602095909501946001015b8281101561252f576125248660ff8460b01c16611f38565b602095909501946001015b82811015612552576125478660ff8460b81c16611f38565b602095909501946001015b828110156125755761256a8660ff8460c01c16611f38565b602095909501946001015b828110156125985761258d8660ff8460c81c16611f38565b602095909501946001015b828110156125bb576125b08660ff8460d01c16611f38565b602095909501946001015b828110156125de576125d38660ff8460d81c16611f38565b602095909501946001015b82811015612601576125f68660ff8460e01c16611f38565b602095909501946001015b82811015612624576126198660ff8460e81c16611f38565b602095909501946001015b828110156126475761263c8660ff8460f01c16611f38565b602095909501946001015b828110156126635761265c868360f81c611f38565b6020860195505b5093949350505050565b602080825260a082820152825460c08301819052600084815282812090929160e0850190845b818110156126b85783546001600160a01b031683526001938401939285019201612693565b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09250828582030160408601526126f48160018801611ef8565b9150508184820301606085015261270e8160028701611ef8565b9050818482030160808501526127278160038701611f73565b915050612738600485015460ff1690565b80151560a0850152509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036127a8576127a8612748565b5060010190565b600083516127c1818460208801611acf565b8351908301906127d5818360208801611acf565b01949350505050565b8181038181111561060e5761060e612748565b8082018082111561060e5761060e612748565b601f82111561081c57600081815260208120601f850160051c8101602086101561282b5750805b601f850160051c820191505b8181101561284a57828155600101612837565b505050505050565b815167ffffffffffffffff81111561286c5761286c611baf565b6128808161287a8454611ea5565b84612804565b602080601f8311600181146128d3576000841561289d5750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b17855561284a565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b8281101561292057888601518255948401946001909101908401612901565b508582101561295c57878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b60006001600160a01b0380871683528086166020840152508360408301526080606083015261299e6080830184611af3565b9695505050505050565b6000602082840312156129ba57600080fd5b815161168b81611a84565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082612a0357612a036129c5565b500490565b600082612a1757612a176129c5565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea2646970667358221220d0c8236aef2f5fca86982c00531ba354d3cbc6b5e0c8bd713720f47c431812db64736f6c63430008110033";

type LootboxesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LootboxesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Lootboxes__factory extends ContractFactory {
  constructor(...args: LootboxesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Lootboxes";
  }

  deploy(
    input: Constructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Lootboxes> {
    return super.deploy(input, overrides || {}) as Promise<Lootboxes>;
  }
  getDeployTransaction(
    input: Constructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(input, overrides || {});
  }
  attach(address: string): Lootboxes {
    return super.attach(address) as Lootboxes;
  }
  connect(signer: Signer): Lootboxes__factory {
    return super.connect(signer) as Lootboxes__factory;
  }
  static readonly contractName: "Lootboxes";
  public readonly contractName: "Lootboxes";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LootboxesInterface {
    return new utils.Interface(_abi) as LootboxesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Lootboxes {
    return new Contract(address, _abi, signerOrProvider) as Lootboxes;
  }
}
