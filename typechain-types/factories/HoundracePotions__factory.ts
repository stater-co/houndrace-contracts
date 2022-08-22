/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  HoundracePotions,
  HoundracePotionsInterface,
} from "../HoundracePotions";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
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
    inputs: [],
    name: "totalSupply",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
  "0x60806040523480156200001157600080fd5b5060405162000ea138038062000ea183398101604081905262000034916200017a565b6200003f3362000065565b60046200004d838262000273565b5060056200005c828262000273565b5050506200033f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620000dd57600080fd5b81516001600160401b0380821115620000fa57620000fa620000b5565b604051601f8301601f19908116603f01168101908282118183101715620001255762000125620000b5565b816040528381526020925086838588010111156200014257600080fd5b600091505b8382101562000166578582018301518183018401529082019062000147565b600093810190920192909252949350505050565b600080604083850312156200018e57600080fd5b82516001600160401b0380821115620001a657600080fd5b620001b486838701620000cb565b93506020850151915080821115620001cb57600080fd5b50620001da85828601620000cb565b9150509250929050565b600181811c90821680620001f957607f821691505b6020821081036200021a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200026e57600081815260208120601f850160051c81016020861015620002495750805b601f850160051c820191505b818110156200026a5782815560010162000255565b5050505b505050565b81516001600160401b038111156200028f576200028f620000b5565b620002a781620002a08454620001e4565b8462000220565b602080601f831160018114620002df5760008415620002c65750858301515b600019600386901b1c1916600185901b1785556200026a565b600085815260208120601f198616915b828110156200031057888601518255948401946001909101908401620002ef565b50858210156200032f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610b52806200034f6000396000f3fe608060405234801561001057600080fd5b50600436106100c55760003560e01c806306fdde03146100ca578063095ea7b3146100e857806318160ddd1461010b57806323b872dd1461011d578063313ce56714610130578063395093511461013f57806340c10f191461015257806370a0823114610167578063715018a6146101905780638da5cb5b1461019857806395d89b41146101b8578063a457c2d7146101c0578063a9059cbb146101d3578063dd62ed3e146101e6578063f2fde38b1461021f575b600080fd5b6100d2610232565b6040516100df919061097c565b60405180910390f35b6100fb6100f63660046109e6565b6102c4565b60405190151581526020016100df565b6003545b6040519081526020016100df565b6100fb61012b366004610a10565b6102db565b604051601281526020016100df565b6100fb61014d3660046109e6565b61038a565b6101656101603660046109e6565b6103c6565b005b61010f610175366004610a4c565b6001600160a01b031660009081526001602052604090205490565b61016561049b565b6101a06104af565b6040516001600160a01b0390911681526020016100df565b6100d26104be565b6100fb6101ce3660046109e6565b6104cd565b6100fb6101e13660046109e6565b610566565b61010f6101f4366004610a6e565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b61016561022d366004610a4c565b610573565b60606004805461024190610aa1565b80601f016020809104026020016040519081016040528092919081815260200182805461026d90610aa1565b80156102ba5780601f1061028f576101008083540402835291602001916102ba565b820191906000526020600020905b81548152906001019060200180831161029d57829003601f168201915b5050505050905090565b60006102d13384846105ec565b5060015b92915050565b60006102e8848484610710565b6001600160a01b0384166000908152600260209081526040808320338452909152902054828110156103725760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61037f85338584036105ec565b506001949350505050565b3360008181526002602090815260408083206001600160a01b038716845290915281205490916102d19185906103c1908690610adb565b6105ec565b6103ce6108cd565b6001600160a01b0382166104245760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610369565b80600360008282546104369190610adb565b90915550506001600160a01b03821660009081526001602052604081208054839290610463908490610adb565b90915550506040518181526001600160a01b03831690600090600080516020610afd8339815191529060200160405180910390a35050565b6104a36108cd565b6104ad600061092c565b565b6000546001600160a01b031690565b60606005805461024190610aa1565b3360009081526002602090815260408083206001600160a01b03861684529091528120548281101561054f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610369565b61055c33858584036105ec565b5060019392505050565b60006102d1338484610710565b61057b6108cd565b6001600160a01b0381166105e05760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610369565b6105e98161092c565b50565b6001600160a01b03831661064e5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610369565b6001600160a01b0382166106af5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610369565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166107745760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610369565b6001600160a01b0382166107d65760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610369565b6001600160a01b0383166000908152600160205260409020548181101561084e5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610369565b6001600160a01b03808516600090815260016020526040808220858503905591851681529081208054849290610885908490610adb565b92505081905550826001600160a01b0316846001600160a01b0316600080516020610afd833981519152846040516108bf91815260200190565b60405180910390a350505050565b336108d66104af565b6001600160a01b0316146104ad5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610369565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208083528351808285015260005b818110156109a95785810183015185820160400152820161098d565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146109e157600080fd5b919050565b600080604083850312156109f957600080fd5b610a02836109ca565b946020939093013593505050565b600080600060608486031215610a2557600080fd5b610a2e846109ca565b9250610a3c602085016109ca565b9150604084013590509250925092565b600060208284031215610a5e57600080fd5b610a67826109ca565b9392505050565b60008060408385031215610a8157600080fd5b610a8a836109ca565b9150610a98602084016109ca565b90509250929050565b600181811c90821680610ab557607f821691505b602082108103610ad557634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156102d557634e487b7160e01b600052601160045260246000fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122067758526ad3b015c3afd0e2521a3e8e36231d0a09e7d7c3f63c52c6b898fb13264736f6c63430008100033";

type HoundracePotionsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HoundracePotionsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HoundracePotions__factory extends ContractFactory {
  constructor(...args: HoundracePotionsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "HoundracePotions";
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<HoundracePotions> {
    return super.deploy(
      name_,
      symbol_,
      overrides || {}
    ) as Promise<HoundracePotions>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): HoundracePotions {
    return super.attach(address) as HoundracePotions;
  }
  connect(signer: Signer): HoundracePotions__factory {
    return super.connect(signer) as HoundracePotions__factory;
  }
  static readonly contractName: "HoundracePotions";
  public readonly contractName: "HoundracePotions";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HoundracePotionsInterface {
    return new utils.Interface(_abi) as HoundracePotionsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HoundracePotions {
    return new Contract(address, _abi, signerOrProvider) as HoundracePotions;
  }
}
