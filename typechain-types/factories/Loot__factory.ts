/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Loot, LootInterface, Constructor } from "../Loot";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "token_uri",
            type: "string",
          },
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
    ],
    name: "NewLootBox",
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
        internalType: "string",
        name: "token_uri",
        type: "string",
      },
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
        name: "",
        type: "uint256",
      },
    ],
    name: "lootboxes",
    outputs: [
      {
        internalType: "string",
        name: "token_uri",
        type: "string",
      },
      {
        internalType: "address",
        name: "currency",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "hound",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "purchasePrice",
        type: "uint256",
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
            name: "token_uri",
            type: "string",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "hound",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "purchasePrice",
            type: "uint256",
          },
        ],
        internalType: "struct Box.Struct[]",
        name: "boxes",
        type: "tuple[]",
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
  "0x60806040523480156200001157600080fd5b50604051620024fe380380620024fe833981016040819052620000349162000243565b6040518060400160405280601381526020017f486f756e6452616365204c6f6f74626f78657300000000000000000000000000815250604051806040016040528060048152602001632429262160e11b815250620000a16200009b6200014d60201b60201c565b62000151565b6001620000af83826200040b565b506002620000be82826200040b565b505081518291506009908190620000d690826200040b565b5060208201516001820180546001600160a01b039283166001600160a01b0319918216179091556040840151600284018054918416919092161790556060830151600390920180546080909401511515600160a01b026001600160a81b0319909416929091169190911791909117905550620004d7565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b634e487b7160e01b600052604160045260246000fd5b60405160a081016001600160401b0381118282101715620001dc57620001dc620001a1565b60405290565b604051601f8201601f191681016001600160401b03811182821017156200020d576200020d620001a1565b604052919050565b80516001600160a01b03811681146200022d57600080fd5b919050565b805180151581146200022d57600080fd5b600060208083850312156200025757600080fd5b82516001600160401b03808211156200026f57600080fd5b9084019060a082870312156200028457600080fd5b6200028e620001b7565b8251828111156200029e57600080fd5b8301601f81018813620002b057600080fd5b805183811115620002c557620002c5620001a1565b620002d9601f8201601f19168701620001e2565b93508084528886828401011115620002f057600080fd5b60005b8181101562000310578281018701518582018801528601620002f3565b81811115620003225760008783870101525b5050508181526200033584840162000215565b84820152620003476040840162000215565b60408201526200035a6060840162000215565b60608201526200036d6080840162000232565b60808201529695505050505050565b600181811c908216806200039157607f821691505b602082108103620003b257634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200040657600081815260208120601f850160051c81016020861015620003e15750805b601f850160051c820191505b818110156200040257828155600101620003ed565b5050505b505050565b81516001600160401b03811115620004275762000427620001a1565b6200043f816200043884546200037c565b84620003b8565b602080601f8311600181146200047757600084156200045e5750858301515b600019600386901b1c1916600185901b17855562000402565b600085815260208120601f198616915b82811015620004a85788860151825594840194600190910190840162000487565b5085821015620004c75787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61201780620004e76000396000f3fe6080604052600436106101055760003560e01c806301ffc9a71461010a57806306fdde031461013f578063081812fc14610161578063095ea7b314610199578063150b7a02146101bb57806323b872dd146101f45780632a24e1771461021457806342842e0e146102445780636352211e14610264578063690e7c091461028457806370a0823114610297578063715018a6146102c55780638da5cb5b146102da57806395d89b41146102ef578063a22cb46514610304578063af640d0f14610324578063b88d4fde1461033a578063c87b56dd1461035a578063d8de65871461037a578063db60fc92146103a0578063e985e9c5146103c0578063f2fde38b146103e0575b600080fd5b34801561011657600080fd5b5061012a61012536600461171a565b610400565b60405190151581526020015b60405180910390f35b34801561014b57600080fd5b50610154610452565b604051610136919061178f565b34801561016d57600080fd5b5061018161017c3660046117a2565b6104e4565b6040516001600160a01b039091168152602001610136565b3480156101a557600080fd5b506101b96101b43660046117d7565b61050b565b005b3480156101c757600080fd5b506101db6101d63660046118c6565b610625565b6040516001600160e01b03199091168152602001610136565b34801561020057600080fd5b506101b961020f366004611941565b610636565b34801561022057600080fd5b5061023461022f3660046117a2565b610667565b604051610136949392919061197d565b34801561025057600080fd5b506101b961025f366004611941565b610723565b34801561027057600080fd5b5061018161027f3660046117a2565b61073e565b6101b96102923660046117a2565b610773565b3480156102a357600080fd5b506102b76102b23660046119b5565b610947565b604051908152602001610136565b3480156102d157600080fd5b506101b96109cd565b3480156102e657600080fd5b506101816109e1565b3480156102fb57600080fd5b506101546109f0565b34801561031057600080fd5b506101b961031f3660046119d0565b6109ff565b34801561033057600080fd5b506102b760085481565b34801561034657600080fd5b506101b96103553660046118c6565b610a0e565b34801561036657600080fd5b506101546103753660046117a2565b610a46565b34801561038657600080fd5b5061038f610b4e565b604051610136959493929190611a0c565b3480156103ac57600080fd5b506101b96103bb366004611a52565b610c0e565b3480156103cc57600080fd5b5061012a6103db366004611b86565b610c54565b3480156103ec57600080fd5b506101b96103fb3660046119b5565b610c82565b60006001600160e01b031982166380ac58cd60e01b148061043157506001600160e01b03198216635b5e139f60e01b145b8061044c57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606001805461046190611bb9565b80601f016020809104026020016040519081016040528092919081815260200182805461048d90611bb9565b80156104da5780601f106104af576101008083540402835291602001916104da565b820191906000526020600020905b8154815290600101906020018083116104bd57829003601f168201915b5050505050905090565b60006104ef82610cfb565b506000908152600560205260409020546001600160a01b031690565b60006105168261073e565b9050806001600160a01b0316836001600160a01b0316036105885760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b03821614806105a457506105a48133610c54565b6106165760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000606482015260840161057f565b6106208383610d20565b505050565b630a85bd0160e11b5b949350505050565b6106403382610d8e565b61065c5760405162461bcd60e51b815260040161057f90611bf3565b610620838383610dec565b600d6020526000908152604090208054819061068290611bb9565b80601f01602080910402602001604051908101604052809291908181526020018280546106ae90611bb9565b80156106fb5780601f106106d0576101008083540402835291602001916106fb565b820191906000526020600020905b8154815290600101906020018083116106de57829003601f168201915b505050506001830154600284015460039094015492936001600160a01b039091169290915084565b61062083838360405180602001604052806000815250610a0e565b6000818152600360205260408120546001600160a01b03168061044c5760405162461bcd60e51b815260040161057f90611c41565b600c54600160a01b900460ff1661078957600080fd5b604080516001808252818301909252600091602080830190803683375050506000838152600d60205260408120600301548251929350918391906107cf576107cf611c73565b602090810291909101810191909152600b546000848152600d9092526040909120600101546001600160a01b039182169163400f959f911615610813576000610826565b6000848152600d60205260409020600301545b600b54600c546000878152600d60208181526040808420600101548151858152808401909252938b90529190526001600160a01b03938416939283169290911690878215610875576002610878565b60035b6040518863ffffffff1660e01b815260040161089996959493929190611cc4565b6000604051808303818588803b1580156108b257600080fd5b505af11580156108c6573d6000803e3d6000fd5b5050600a546000868152600d6020526040908190206002015490516323b872dd60e01b81526001600160a01b0390921694506323b872dd935061091192503091339190600401611d21565b600060405180830381600087803b15801561092b57600080fd5b505af115801561093f573d6000803e3d6000fd5b505050505050565b60006001600160a01b0382166109b15760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b606482015260840161057f565b506001600160a01b031660009081526004602052604090205490565b6109d5610f76565b6109df6000610fd5565b565b6000546001600160a01b031690565b60606002805461046190611bb9565b610a0a338383611025565b5050565b610a183383610d8e565b610a345760405162461bcd60e51b815260040161057f90611bf3565b610a40848484846110ef565b50505050565b6060610a5182610cfb565b60008281526007602052604081208054610a6a90611bb9565b80601f0160208091040260200160405190810160405280929190818152602001828054610a9690611bb9565b8015610ae35780601f10610ab857610100808354040283529160200191610ae3565b820191906000526020600020905b815481529060010190602001808311610ac657829003601f168201915b505050505090506000610b0160408051602081019091526000815290565b90508051600003610b13575092915050565b815115610b45578082604051602001610b2d929190611d45565b60405160208183030381529060405292505050919050565b61062e84611122565b600980548190610b5d90611bb9565b80601f0160208091040260200160405190810160405280929190818152602001828054610b8990611bb9565b8015610bd65780601f10610bab57610100808354040283529160200191610bd6565b820191906000526020600020905b815481529060010190602001808311610bb957829003601f168201915b505050506001830154600284015460039094015492936001600160a01b0391821693908216925090811690600160a01b900460ff1685565b610c16610f76565b60005b8151811015610a0a57610c44828281518110610c3757610c37611c73565b6020026020010151611196565b610c4d81611d8a565b9050610c19565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b610c8a610f76565b6001600160a01b038116610cef5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161057f565b610cf881610fd5565b50565b610d0481611345565b610cf85760405162461bcd60e51b815260040161057f90611c41565b600081815260056020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610d558261073e565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610d9a8361073e565b9050806001600160a01b0316846001600160a01b03161480610dc15750610dc18185610c54565b8061062e5750836001600160a01b0316610dda846104e4565b6001600160a01b031614949350505050565b826001600160a01b0316610dff8261073e565b6001600160a01b031614610e635760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b606482015260840161057f565b6001600160a01b038216610ec55760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161057f565b610ed0600082610d20565b6001600160a01b0383166000908152600460205260408120805460019290610ef9908490611da3565b90915550506001600160a01b0382166000908152600460205260408120805460019290610f27908490611dba565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b038681169182179092559151849391871691600080516020611fc283398151915291a4505050565b33610f7f6109e1565b6001600160a01b0316146109df5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161057f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b816001600160a01b0316836001600160a01b0316036110825760405162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b604482015260640161057f565b6001600160a01b03838116600081815260066020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6110fa848484610dec565b61110684848484611362565b610a405760405162461bcd60e51b815260040161057f90611dd2565b606061112d82610cfb565b600061114460408051602081019091526000815290565b90506000815111611164576040518060200160405280600081525061118f565b8061116e84611460565b60405160200161117f929190611d45565b6040516020818303038152906040525b9392505050565b600a546040808301519051632142170760e11b81526001600160a01b03909216916342842e0e916111cd9133913091600401611d21565b600060405180830381600087803b1580156111e757600080fd5b505af11580156111fb573d6000803e3d6000fd5b5050505061120b33600854611560565b6112a46008546009600001805461122190611bb9565b80601f016020809104026020016040519081016040528092919081815260200182805461124d90611bb9565b801561129a5780601f1061126f5761010080835404028352916020019161129a565b820191906000526020600020905b81548152906001019060200180831161127d57829003601f168201915b5050505050611680565b6008546000908152600d60205260409020815182919081906112c69082611e6a565b5060208201516001820180546001600160a01b0319166001600160a01b03909216919091179055604080830151600283015560609092015160039091015560085490517f1259f6622fe1924279f68a86e3357c7eacbdd119671aa96e56817afa0a75659590600090a260086000815461133e90611d8a565b9091555050565b6000908152600360205260409020546001600160a01b0316151590565b60006001600160a01b0384163b1561145857604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906113a6903390899088908890600401611f29565b6020604051808303816000875af19250505080156113e1575060408051601f3d908101601f191682019092526113de91810190611f66565b60015b61143e573d80801561140f576040519150601f19603f3d011682016040523d82523d6000602084013e611414565b606091505b5080516000036114365760405162461bcd60e51b815260040161057f90611dd2565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061062e565b50600161062e565b6060816000036114875750506040805180820190915260018152600360fc1b602082015290565b8160005b81156114b1578061149b81611d8a565b91506114aa9050600a83611f99565b915061148b565b6000816001600160401b038111156114cb576114cb611801565b6040519080825280601f01601f1916602001820160405280156114f5576020820181803683370190505b5090505b841561062e5761150a600183611da3565b9150611517600a86611fad565b611522906030611dba565b60f81b81838151811061153757611537611c73565b60200101906001600160f81b031916908160001a905350611559600a86611f99565b94506114f9565b6001600160a01b0382166115b65760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161057f565b6115bf81611345565b1561160b5760405162461bcd60e51b815260206004820152601c60248201527b115490cdcc8c4e881d1bdad95b88185b1c9958591e481b5a5b9d195960221b604482015260640161057f565b6001600160a01b0382166000908152600460205260408120805460019290611634908490611dba565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b0386169081179091559051839290600080516020611fc2833981519152908290a45050565b61168982611345565b6116ec5760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b606482015260840161057f565b60008281526007602052604090206106208282611e6a565b6001600160e01b031981168114610cf857600080fd5b60006020828403121561172c57600080fd5b813561118f81611704565b60005b8381101561175257818101518382015260200161173a565b83811115610a405750506000910152565b6000815180845261177b816020860160208601611737565b601f01601f19169290920160200192915050565b60208152600061118f6020830184611763565b6000602082840312156117b457600080fd5b5035919050565b80356001600160a01b03811681146117d257600080fd5b919050565b600080604083850312156117ea57600080fd5b6117f3836117bb565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b038111828210171561183957611839611801565b60405290565b604051601f8201601f191681016001600160401b038111828210171561186757611867611801565b604052919050565b60006001600160401b0383111561188857611888611801565b61189b601f8401601f191660200161183f565b90508281528383830111156118af57600080fd5b828260208301376000602084830101529392505050565b600080600080608085870312156118dc57600080fd5b6118e5856117bb565b93506118f3602086016117bb565b92506040850135915060608501356001600160401b0381111561191557600080fd5b8501601f8101871361192657600080fd5b6119358782356020840161186f565b91505092959194509250565b60008060006060848603121561195657600080fd5b61195f846117bb565b925061196d602085016117bb565b9150604084013590509250925092565b6080815260006119906080830187611763565b6001600160a01b03959095166020830152506040810192909252606090910152919050565b6000602082840312156119c757600080fd5b61118f826117bb565b600080604083850312156119e357600080fd5b6119ec836117bb565b915060208301358015158114611a0157600080fd5b809150509250929050565b60a081526000611a1f60a0830188611763565b6001600160a01b039687166020840152948616604083015250919093166060820152911515608090920191909152919050565b60006020808385031215611a6557600080fd5b82356001600160401b0380821115611a7c57600080fd5b818501915085601f830112611a9057600080fd5b813581811115611aa257611aa2611801565b8060051b611ab185820161183f565b9182528381018501918581019089841115611acb57600080fd5b86860192505b83831015611b7957823585811115611ae95760008081fd5b86016080818c03601f1901811315611b015760008081fd5b611b09611817565b8983013588811115611b1b5760008081fd5b8301603f81018e13611b2d5760008081fd5b6040611b3f8f8d84013583850161186f565b8352611b4c8186016117bb565b838d0152606085810135918401919091529290930135918101919091528352509186019190860190611ad1565b9998505050505050505050565b60008060408385031215611b9957600080fd5b611ba2836117bb565b9150611bb0602084016117bb565b90509250929050565b600181811c90821680611bcd57607f821691505b602082108103611bed57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b602080825260189082015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604082015260600190565b634e487b7160e01b600052603260045260246000fd5b600081518084526020808501945080840160005b83811015611cb957815187529582019590820190600101611c9d565b509495945050505050565b6001600160a01b03878116825286811660208301528516604082015260c060608201819052600090611cf890830186611c89565b8281036080840152611d0a8186611c89565b91505060ff831660a0830152979650505050505050565b6001600160a01b039384168152919092166020820152604081019190915260600190565b60008351611d57818460208801611737565b835190830190611d6b818360208801611737565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b600060018201611d9c57611d9c611d74565b5060010190565b600082821015611db557611db5611d74565b500390565b60008219821115611dcd57611dcd611d74565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b601f82111561062057600081815260208120601f850160051c81016020861015611e4b5750805b601f850160051c820191505b8181101561093f57828155600101611e57565b81516001600160401b03811115611e8357611e83611801565b611e9781611e918454611bb9565b84611e24565b602080601f831160018114611ecc5760008415611eb45750858301515b600019600386901b1c1916600185901b17855561093f565b600085815260208120601f198616915b82811015611efb57888601518255948401946001909101908401611edc565b5085821015611f195787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611f5c90830184611763565b9695505050505050565b600060208284031215611f7857600080fd5b815161118f81611704565b634e487b7160e01b600052601260045260246000fd5b600082611fa857611fa8611f83565b500490565b600082611fbc57611fbc611f83565b50069056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220af632d98f02dccb333c599e55939557d49dc9d2d16b01f313f23df1e3af3127564736f6c634300080f0033";

type LootConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LootConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Loot__factory extends ContractFactory {
  constructor(...args: LootConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Loot";
  }

  deploy(
    input: Constructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Loot> {
    return super.deploy(input, overrides || {}) as Promise<Loot>;
  }
  getDeployTransaction(
    input: Constructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(input, overrides || {});
  }
  attach(address: string): Loot {
    return super.attach(address) as Loot;
  }
  connect(signer: Signer): Loot__factory {
    return super.connect(signer) as Loot__factory;
  }
  static readonly contractName: "Loot";
  public readonly contractName: "Loot";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LootInterface {
    return new utils.Interface(_abi) as LootInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Loot {
    return new Contract(address, _abi, signerOrProvider) as Loot;
  }
}
