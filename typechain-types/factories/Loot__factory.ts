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
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "lootBoxURI",
            type: "string",
          },
          {
            internalType: "string",
            name: "secondLootBoxURI",
            type: "string",
          },
          {
            internalType: "address",
            name: "hounds",
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
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "lootBoxURI",
        type: "string",
      },
      {
        internalType: "string",
        name: "secondLootBoxURI",
        type: "string",
      },
      {
        internalType: "address",
        name: "hounds",
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
        internalType: "uint256",
        name: "cost",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "currency",
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
            internalType: "uint256",
            name: "cost",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "hounds",
            type: "uint256[]",
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
  "0x60806040523480156200001157600080fd5b50604051620025b7380380620025b78339810160408190526200003491620001f4565b8051602082015162000046336200006d565b600162000054838262000392565b50600262000063828262000392565b505050506200045e565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b0381118282101715620000f857620000f8620000bd565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620001295762000129620000bd565b604052919050565b600082601f8301126200014357600080fd5b81516001600160401b038111156200015f576200015f620000bd565b602062000175601f8301601f19168201620000fe565b82815285828487010111156200018a57600080fd5b60005b83811015620001aa5785810183015182820184015282016200018d565b83811115620001bc5760008385840101525b5095945050505050565b80516001600160a01b0381168114620001de57600080fd5b919050565b80518015158114620001de57600080fd5b6000602082840312156200020757600080fd5b81516001600160401b03808211156200021f57600080fd5b9083019060c082860312156200023457600080fd5b6200023e620000d3565b8251828111156200024e57600080fd5b6200025c8782860162000131565b8252506020830151828111156200027257600080fd5b620002808782860162000131565b6020830152506040830151828111156200029957600080fd5b620002a78782860162000131565b604083015250606083015182811115620002c057600080fd5b620002ce8782860162000131565b606083015250620002e260808401620001c6565b6080820152620002f560a08401620001e3565b60a082015295945050505050565b600181811c908216806200031857607f821691505b6020821081036200033957634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200038d57600081815260208120601f850160051c81016020861015620003685750805b601f850160051c820191505b81811015620003895782815560010162000374565b5050505b505050565b81516001600160401b03811115620003ae57620003ae620000bd565b620003c681620003bf845462000303565b846200033f565b602080601f831160018114620003fe5760008415620003e55750858301515b600019600386901b1c1916600185901b17855562000389565b600085815260208120601f198616915b828110156200042f578886015182559484019460019091019084016200040e565b50858210156200044e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b612149806200046e6000396000f3fe6080604052600436106100fa5760003560e01c806301ffc9a7146100ff57806306fdde0314610134578063081812fc14610156578063095ea7b31461018e57806323b872dd146101b05780632a24e177146101d057806342842e0e1461022a5780636352211e1461024a578063690e7c091461026a57806370a082311461027d578063715018a6146102ab57806389da60bc146102c05780638da5cb5b146102e057806395d89b41146102f5578063a22cb4651461030a578063af640d0f1461032a578063b88d4fde14610340578063c87b56dd14610360578063d8de658714610380578063e985e9c5146103a7578063f2fde38b146103c7575b600080fd5b34801561010b57600080fd5b5061011f61011a366004611886565b6103e7565b60405190151581526020015b60405180910390f35b34801561014057600080fd5b50610149610439565b60405161012b91906118fb565b34801561016257600080fd5b5061017661017136600461190e565b6104cb565b6040516001600160a01b03909116815260200161012b565b34801561019a57600080fd5b506101ae6101a9366004611943565b6104f2565b005b3480156101bc57600080fd5b506101ae6101cb36600461196d565b61060c565b3480156101dc57600080fd5b5061020d6101eb36600461190e565b600e60205260009081526040902080546001909101546001600160a01b031682565b604080519283526001600160a01b0390911660208301520161012b565b34801561023657600080fd5b506101ae61024536600461196d565b61063d565b34801561025657600080fd5b5061017661026536600461190e565b610658565b6101ae61027836600461190e565b61068d565b34801561028957600080fd5b5061029d6102983660046119a9565b610954565b60405190815260200161012b565b3480156102b757600080fd5b506101ae6109da565b3480156102cc57600080fd5b506101ae6102db366004611a55565b6109ee565b3480156102ec57600080fd5b50610176610a34565b34801561030157600080fd5b50610149610a43565b34801561031657600080fd5b506101ae610325366004611bc4565b610a52565b34801561033657600080fd5b5061029d60085481565b34801561034c57600080fd5b506101ae61035b366004611bfb565b610a5d565b34801561036c57600080fd5b5061014961037b36600461190e565b610a95565b34801561038c57600080fd5b50610395610ba5565b60405161012b96959493929190611cba565b3480156103b357600080fd5b5061011f6103c2366004611d2b565b610dfd565b3480156103d357600080fd5b506101ae6103e23660046119a9565b610e2b565b60006001600160e01b031982166380ac58cd60e01b148061041857506001600160e01b03198216635b5e139f60e01b145b8061043357506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606001805461044890611d5e565b80601f016020809104026020016040519081016040528092919081815260200182805461047490611d5e565b80156104c15780601f10610496576101008083540402835291602001916104c1565b820191906000526020600020905b8154815290600101906020018083116104a457829003601f168201915b5050505050905090565b60006104d682610ea4565b506000908152600560205260409020546001600160a01b031690565b60006104fd82610658565b9050806001600160a01b0316836001600160a01b03160361056f5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061058b575061058b8133610dfd565b6105fd5760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610566565b6106078383610ec9565b505050565b6106163382610f37565b6106325760405162461bcd60e51b815260040161056690611d98565b610607838383610f95565b61060783838360405180602001604052806000815250610a5d565b6000818152600360205260408120546001600160a01b0316806104335760405162461bcd60e51b815260040161056690611de6565b600d54600160a01b900460ff1680156106b657506000818152600e602052604090206002015415155b6106bf57600080fd5b6000818152600e60205260409020600101546001600160a01b03161561076d576000818152600e6020526040908190206001810154905491516323b872dd60e01b81526001600160a01b03909116916323b872dd91610725913391309190600401611e18565b6020604051808303816000875af1158015610744573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107689190611e3c565b610780565b6000818152600e60205260409020543410155b61078957600080fd5b600d546000828152600e6020526040902060020180546001600160a01b03909216916342842e0e9130913391906107c290600190611e6f565b815481106107d2576107d2611e86565b90600052602060002001546040518463ffffffff1660e01b81526004016107fb93929190611e18565b600060405180830381600087803b15801561081557600080fd5b505af1158015610829573d6000803e3d6000fd5b5050506000828152600e602052604081206002015490915061084d90600190611e6f565b6001600160401b03811115610864576108646119c4565b60405190808252806020026020018201604052801561088d578160200160208202803683370190505b506000838152600e6020908152604090912082519293506108b692600290910191840190611810565b50610950600854600960030180546108cd90611d5e565b80601f01602080910402602001604051908101604052809291908181526020018280546108f990611d5e565b80156109465780601f1061091b57610100808354040283529160200191610946565b820191906000526020600020905b81548152906001019060200180831161092957829003601f168201915b505050505061111f565b5050565b60006001600160a01b0382166109be5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610566565b506001600160a01b031660009081526004602052604090205490565b6109e26111a3565b6109ec6000611202565b565b6109f66111a3565b60005b815181101561095057610a24828281518110610a1757610a17611e86565b6020026020010151611252565b610a2d81611e9c565b90506109f9565b6000546001600160a01b031690565b60606002805461044890611d5e565b610950338383611361565b610a673383610f37565b610a835760405162461bcd60e51b815260040161056690611d98565b610a8f8484848461142b565b50505050565b6060610aa082610ea4565b60008281526007602052604081208054610ab990611d5e565b80601f0160208091040260200160405190810160405280929190818152602001828054610ae590611d5e565b8015610b325780601f10610b0757610100808354040283529160200191610b32565b820191906000526020600020905b815481529060010190602001808311610b1557829003601f168201915b505050505090506000610b5060408051602081019091526000815290565b90508051600003610b62575092915050565b815115610b94578082604051602001610b7c929190611eb5565b60405160208183030381529060405292505050919050565b610b9d8461145e565b949350505050565b600980548190610bb490611d5e565b80601f0160208091040260200160405190810160405280929190818152602001828054610be090611d5e565b8015610c2d5780601f10610c0257610100808354040283529160200191610c2d565b820191906000526020600020905b815481529060010190602001808311610c1057829003601f168201915b505050505090806001018054610c4290611d5e565b80601f0160208091040260200160405190810160405280929190818152602001828054610c6e90611d5e565b8015610cbb5780601f10610c9057610100808354040283529160200191610cbb565b820191906000526020600020905b815481529060010190602001808311610c9e57829003601f168201915b505050505090806002018054610cd090611d5e565b80601f0160208091040260200160405190810160405280929190818152602001828054610cfc90611d5e565b8015610d495780601f10610d1e57610100808354040283529160200191610d49565b820191906000526020600020905b815481529060010190602001808311610d2c57829003601f168201915b505050505090806003018054610d5e90611d5e565b80601f0160208091040260200160405190810160405280929190818152602001828054610d8a90611d5e565b8015610dd75780601f10610dac57610100808354040283529160200191610dd7565b820191906000526020600020905b815481529060010190602001808311610dba57829003601f168201915b505050600490930154919250506001600160a01b0381169060ff600160a01b9091041686565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b610e336111a3565b6001600160a01b038116610e985760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610566565b610ea181611202565b50565b610ead816114d2565b610ea15760405162461bcd60e51b815260040161056690611de6565b600081815260056020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610efe82610658565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610f4383610658565b9050806001600160a01b0316846001600160a01b03161480610f6a5750610f6a8185610dfd565b80610b9d5750836001600160a01b0316610f83846104cb565b6001600160a01b031614949350505050565b826001600160a01b0316610fa882610658565b6001600160a01b03161461100c5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610566565b6001600160a01b03821661106e5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610566565b611079600082610ec9565b6001600160a01b03831660009081526004602052604081208054600192906110a2908490611e6f565b90915550506001600160a01b03821660009081526004602052604081208054600192906110d0908490611ee4565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716916000805160206120f483398151915291a4505050565b611128826114d2565b61118b5760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b6064820152608401610566565b60008281526007602052604090206106078282611f4a565b336111ac610a34565b6001600160a01b0316146109ec5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610566565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60005b8160400151518110156112fc57600d54604083015180516001600160a01b03909216916342842e0e9133913091908690811061129357611293611e86565b60200260200101516040518463ffffffff1660e01b81526004016112b993929190611e18565b600060405180830381600087803b1580156112d357600080fd5b505af11580156112e7573d6000803e3d6000fd5b50505050806112f590611e9c565b9050611255565b50611309336008546114ef565b61131f600854600960020180546108cd90611d5e565b6008546040517f1259f6622fe1924279f68a86e3357c7eacbdd119671aa96e56817afa0a75659590600090a260086000815461135a90611e9c565b9091555050565b816001600160a01b0316836001600160a01b0316036113be5760405162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b6044820152606401610566565b6001600160a01b03838116600081815260066020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611436848484610f95565b6114428484848461160f565b610a8f5760405162461bcd60e51b815260040161056690612009565b606061146982610ea4565b600061148060408051602081019091526000815290565b905060008151116114a057604051806020016040528060008152506114cb565b806114aa84611710565b6040516020016114bb929190611eb5565b6040516020818303038152906040525b9392505050565b6000908152600360205260409020546001600160a01b0316151590565b6001600160a01b0382166115455760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610566565b61154e816114d2565b1561159a5760405162461bcd60e51b815260206004820152601c60248201527b115490cdcc8c4e881d1bdad95b88185b1c9958591e481b5a5b9d195960221b6044820152606401610566565b6001600160a01b03821660009081526004602052604081208054600192906115c3908490611ee4565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392906000805160206120f4833981519152908290a45050565b60006001600160a01b0384163b1561170557604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061165390339089908890889060040161205b565b6020604051808303816000875af192505050801561168e575060408051601f3d908101601f1916820190925261168b91810190612098565b60015b6116eb573d8080156116bc576040519150601f19603f3d011682016040523d82523d6000602084013e6116c1565b606091505b5080516000036116e35760405162461bcd60e51b815260040161056690612009565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610b9d565b506001949350505050565b6060816000036117375750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611761578061174b81611e9c565b915061175a9050600a836120cb565b915061173b565b6000816001600160401b0381111561177b5761177b6119c4565b6040519080825280601f01601f1916602001820160405280156117a5576020820181803683370190505b5090505b8415610b9d576117ba600183611e6f565b91506117c7600a866120df565b6117d2906030611ee4565b60f81b8183815181106117e7576117e7611e86565b60200101906001600160f81b031916908160001a905350611809600a866120cb565b94506117a9565b82805482825590600052602060002090810192821561184b579160200282015b8281111561184b578251825591602001919060010190611830565b5061185792915061185b565b5090565b5b80821115611857576000815560010161185c565b6001600160e01b031981168114610ea157600080fd5b60006020828403121561189857600080fd5b81356114cb81611870565b60005b838110156118be5781810151838201526020016118a6565b83811115610a8f5750506000910152565b600081518084526118e78160208601602086016118a3565b601f01601f19169290920160200192915050565b6020815260006114cb60208301846118cf565b60006020828403121561192057600080fd5b5035919050565b80356001600160a01b038116811461193e57600080fd5b919050565b6000806040838503121561195657600080fd5b61195f83611927565b946020939093013593505050565b60008060006060848603121561198257600080fd5b61198b84611927565b925061199960208501611927565b9150604084013590509250925092565b6000602082840312156119bb57600080fd5b6114cb82611927565b634e487b7160e01b600052604160045260246000fd5b604051606081016001600160401b03811182821017156119fc576119fc6119c4565b60405290565b604051601f8201601f191681016001600160401b0381118282101715611a2a57611a2a6119c4565b604052919050565b60006001600160401b03821115611a4b57611a4b6119c4565b5060051b60200190565b60006020808385031215611a6857600080fd5b82356001600160401b0380821115611a7f57600080fd5b818501915085601f830112611a9357600080fd5b8135611aa6611aa182611a32565b611a02565b81815260059190911b83018401908481019088831115611ac557600080fd5b8585015b83811015611ba957803585811115611ae15760008081fd5b86016060818c03601f1901811315611af95760008081fd5b611b016119da565b8983013581526040611b14818501611927565b828c0152918301359188831115611b2b5760008081fd5b82840193508d603f850112611b4257600092508283fd5b8a8401359250611b54611aa184611a32565b83815260059390931b84018101928b8101908f851115611b745760008081fd5b948201945b84861015611b925785358252948c0194908c0190611b79565b918301919091525085525050918601918601611ac9565b5098975050505050505050565b8015158114610ea157600080fd5b60008060408385031215611bd757600080fd5b611be083611927565b91506020830135611bf081611bb6565b809150509250929050565b60008060008060808587031215611c1157600080fd5b611c1a85611927565b93506020611c29818701611927565b93506040860135925060608601356001600160401b0380821115611c4c57600080fd5b818801915088601f830112611c6057600080fd5b813581811115611c7257611c726119c4565b611c84601f8201601f19168501611a02565b91508082528984828501011115611c9a57600080fd5b808484018584013760008482840101525080935050505092959194509250565b60c081526000611ccd60c08301896118cf565b8281036020840152611cdf81896118cf565b90508281036040840152611cf381886118cf565b90508281036060840152611d0781876118cf565b6001600160a01b03959095166080840152505090151560a090910152949350505050565b60008060408385031215611d3e57600080fd5b611d4783611927565b9150611d5560208401611927565b90509250929050565b600181811c90821680611d7257607f821691505b602082108103611d9257634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b602080825260189082015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604082015260600190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b600060208284031215611e4e57600080fd5b81516114cb81611bb6565b634e487b7160e01b600052601160045260246000fd5b600082821015611e8157611e81611e59565b500390565b634e487b7160e01b600052603260045260246000fd5b600060018201611eae57611eae611e59565b5060010190565b60008351611ec78184602088016118a3565b835190830190611edb8183602088016118a3565b01949350505050565b60008219821115611ef757611ef7611e59565b500190565b601f82111561060757600081815260208120601f850160051c81016020861015611f235750805b601f850160051c820191505b81811015611f4257828155600101611f2f565b505050505050565b81516001600160401b03811115611f6357611f636119c4565b611f7781611f718454611d5e565b84611efc565b602080601f831160018114611fac5760008415611f945750858301515b600019600386901b1c1916600185901b178555611f42565b600085815260208120601f198616915b82811015611fdb57888601518255948401946001909101908401611fbc565b5085821015611ff95787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061208e908301846118cf565b9695505050505050565b6000602082840312156120aa57600080fd5b81516114cb81611870565b634e487b7160e01b600052601260045260246000fd5b6000826120da576120da6120b5565b500490565b6000826120ee576120ee6120b5565b50069056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122012988c8974d14cf3647c78e3d997556d28eaeba06675e9834e7554fc87903bc764736f6c634300080f0033";

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
