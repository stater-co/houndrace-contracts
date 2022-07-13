/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  AlphaERC721,
  AlphaERC721Interface,
} from "../../../../contracts/erc721/Index.sol/AlphaERC721";

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
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeMint",
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
        name: "_data",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620016e7380380620016e7833981016040819052620000349162000127565b600062000042838262000220565b50600162000051828262000220565b505050620002ec565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200008257600080fd5b81516001600160401b03808211156200009f576200009f6200005a565b604051601f8301601f19908116603f01168101908282118183101715620000ca57620000ca6200005a565b81604052838152602092508683858801011115620000e757600080fd5b600091505b838210156200010b5785820183015181830184015290820190620000ec565b838211156200011d5760008385830101525b9695505050505050565b600080604083850312156200013b57600080fd5b82516001600160401b03808211156200015357600080fd5b620001618683870162000070565b935060208501519150808211156200017857600080fd5b50620001878582860162000070565b9150509250929050565b600181811c90821680620001a657607f821691505b602082108103620001c757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200021b57600081815260208120601f850160051c81016020861015620001f65750805b601f850160051c820191505b81811015620002175782815560010162000202565b5050505b505050565b81516001600160401b038111156200023c576200023c6200005a565b62000254816200024d845462000191565b84620001cd565b602080601f8311600181146200028c5760008415620002735750858301515b600019600386901b1c1916600185901b17855562000217565b600085815260208120601f198616915b82811015620002bd578886015182559484019460019091019084016200029c565b5085821015620002dc5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6113eb80620002fc6000396000f3fe608060405234801561001057600080fd5b50600436106100ba5760003560e01c806301ffc9a7146100bf57806306fdde03146100e7578063081812fc146100fc578063095ea7b31461012757806323b872dd1461013c57806342842e0e1461014f5780636352211e1461016257806370a08231146101755780638832e6e31461019657806395d89b41146101a9578063a22cb465146101b1578063b88d4fde146101c4578063c87b56dd146101d7578063e985e9c5146101ea575b600080fd5b6100d26100cd366004610e71565b6101fd565b60405190151581526020015b60405180910390f35b6100ef61024f565b6040516100de9190610ee6565b61010f61010a366004610ef9565b6102e1565b6040516001600160a01b0390911681526020016100de565b61013a610135366004610f2e565b61036e565b005b61013a61014a366004610f58565b61047e565b61013a61015d366004610f58565b6104af565b61010f610170366004610ef9565b6104ca565b610188610183366004610f94565b610541565b6040519081526020016100de565b61013a6101a4366004611051565b6105c8565b6100ef6105fb565b61013a6101bf3660046110a7565b61060a565b61013a6101d23660046110e3565b610619565b6100ef6101e5366004610ef9565b610651565b6100d26101f836600461114a565b610729565b60006001600160e01b031982166380ac58cd60e01b148061022e57506001600160e01b03198216635b5e139f60e01b145b8061024957506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606000805461025e9061117d565b80601f016020809104026020016040519081016040528092919081815260200182805461028a9061117d565b80156102d75780601f106102ac576101008083540402835291602001916102d7565b820191906000526020600020905b8154815290600101906020018083116102ba57829003601f168201915b5050505050905090565b60006102ec82610757565b6103525760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b6000610379826104ca565b9050806001600160a01b0316836001600160a01b0316036103e65760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610349565b336001600160a01b038216148061040257506104028133610729565b61046f5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776044820152771b995c881b9bdc88185c1c1c9bdd995908199bdc88185b1b60421b6064820152608401610349565b6104798383610774565b505050565b61048833826107e2565b6104a45760405162461bcd60e51b8152600401610349906111b7565b6104798383836108ac565b61047983838360405180602001604052806000815250610619565b6000818152600260205260408120546001600160a01b0316806102495760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610349565b60006001600160a01b0382166105ac5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610349565b506001600160a01b031660009081526003602052604090205490565b6105d28383610a3a565b6105df6000848484610b5a565b6104795760405162461bcd60e51b815260040161034990611208565b60606001805461025e9061117d565b610615338383610c5b565b5050565b61062333836107e2565b61063f5760405162461bcd60e51b8152600401610349906111b7565b61064b84848484610d25565b50505050565b606061065c82610757565b6106c05760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610349565b60006106d760408051602081019091526000815290565b905060008151116106f75760405180602001604052806000815250610722565b8061070184610d58565b60405160200161071292919061125a565b6040516020818303038152906040525b9392505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6000908152600260205260409020546001600160a01b0316151590565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906107a9826104ca565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006107ed82610757565b61084e5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610349565b6000610859836104ca565b9050806001600160a01b0316846001600160a01b031614806108945750836001600160a01b0316610889846102e1565b6001600160a01b0316145b806108a457506108a48185610729565b949350505050565b826001600160a01b03166108bf826104ca565b6001600160a01b0316146109275760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b6064820152608401610349565b6001600160a01b0382166109895760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610349565b610994600082610774565b6001600160a01b03831660009081526003602052604081208054600192906109bd90849061129f565b90915550506001600160a01b03821660009081526003602052604081208054600192906109eb9084906112b6565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03868116918217909255915184939187169160008051602061139683398151915291a4505050565b6001600160a01b038216610a905760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610349565b610a9981610757565b15610ae55760405162461bcd60e51b815260206004820152601c60248201527b115490cdcc8c4e881d1bdad95b88185b1c9958591e481b5a5b9d195960221b6044820152606401610349565b6001600160a01b0382166000908152600360205260408120805460019290610b0e9084906112b6565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386169081179091559051839290600080516020611396833981519152908290a45050565b60006001600160a01b0384163b15610c5057604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610b9e9033908990889088906004016112ce565b6020604051808303816000875af1925050508015610bd9575060408051601f3d908101601f19168201909252610bd69181019061130b565b60015b610c36573d808015610c07576040519150601f19603f3d011682016040523d82523d6000602084013e610c0c565b606091505b508051600003610c2e5760405162461bcd60e51b815260040161034990611208565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506108a4565b506001949350505050565b816001600160a01b0316836001600160a01b031603610cb85760405162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b6044820152606401610349565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610d308484846108ac565b610d3c84848484610b5a565b61064b5760405162461bcd60e51b815260040161034990611208565b606081600003610d7f5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610da95780610d9381611328565b9150610da29050600a83611357565b9150610d83565b6000816001600160401b03811115610dc357610dc3610faf565b6040519080825280601f01601f191660200182016040528015610ded576020820181803683370190505b5090505b84156108a457610e0260018361129f565b9150610e0f600a8661136b565b610e1a9060306112b6565b60f81b818381518110610e2f57610e2f61137f565b60200101906001600160f81b031916908160001a905350610e51600a86611357565b9450610df1565b6001600160e01b031981168114610e6e57600080fd5b50565b600060208284031215610e8357600080fd5b813561072281610e58565b60005b83811015610ea9578181015183820152602001610e91565b8381111561064b5750506000910152565b60008151808452610ed2816020860160208601610e8e565b601f01601f19169290920160200192915050565b6020815260006107226020830184610eba565b600060208284031215610f0b57600080fd5b5035919050565b80356001600160a01b0381168114610f2957600080fd5b919050565b60008060408385031215610f4157600080fd5b610f4a83610f12565b946020939093013593505050565b600080600060608486031215610f6d57600080fd5b610f7684610f12565b9250610f8460208501610f12565b9150604084013590509250925092565b600060208284031215610fa657600080fd5b61072282610f12565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610fd657600080fd5b81356001600160401b0380821115610ff057610ff0610faf565b604051601f8301601f19908116603f0116810190828211818310171561101857611018610faf565b8160405283815286602085880101111561103157600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060006060848603121561106657600080fd5b61106f84610f12565b92506020840135915060408401356001600160401b0381111561109157600080fd5b61109d86828701610fc5565b9150509250925092565b600080604083850312156110ba57600080fd5b6110c383610f12565b9150602083013580151581146110d857600080fd5b809150509250929050565b600080600080608085870312156110f957600080fd5b61110285610f12565b935061111060208601610f12565b92506040850135915060608501356001600160401b0381111561113257600080fd5b61113e87828801610fc5565b91505092959194509250565b6000806040838503121561115d57600080fd5b61116683610f12565b915061117460208401610f12565b90509250929050565b600181811c9082168061119157607f821691505b6020821081036111b157634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6000835161126c818460208801610e8e565b835190830190611280818360208801610e8e565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156112b1576112b1611289565b500390565b600082198211156112c9576112c9611289565b500190565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061130190830184610eba565b9695505050505050565b60006020828403121561131d57600080fd5b815161072281610e58565b60006001820161133a5761133a611289565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261136657611366611341565b500490565b60008261137a5761137a611341565b500690565b634e487b7160e01b600052603260045260246000fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220a8a846e3f457e739fa9cec888209441042d5f0cb16818739a871bdb07304457964736f6c634300080f0033";

type AlphaERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AlphaERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AlphaERC721__factory extends ContractFactory {
  constructor(...args: AlphaERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AlphaERC721> {
    return super.deploy(
      name_,
      symbol_,
      overrides || {}
    ) as Promise<AlphaERC721>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override attach(address: string): AlphaERC721 {
    return super.attach(address) as AlphaERC721;
  }
  override connect(signer: Signer): AlphaERC721__factory {
    return super.connect(signer) as AlphaERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AlphaERC721Interface {
    return new utils.Interface(_abi) as AlphaERC721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AlphaERC721 {
    return new Contract(address, _abi, signerOrProvider) as AlphaERC721;
  }
}
