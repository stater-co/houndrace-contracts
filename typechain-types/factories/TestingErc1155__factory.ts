/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestingErc1155,
  TestingErc1155Interface,
} from "../TestingErc1155";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "uri_",
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
        name: "account",
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
        name: "operator",
        type: "address",
      },
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
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
        name: "id",
        type: "uint256",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
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
        internalType: "address",
        name: "account",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mintBatch",
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
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
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620018a1380380620018a183398101604081905262000034916200006e565b6200003f8162000046565b506200029e565b6002620000548282620001d2565b5050565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156200008257600080fd5b82516001600160401b03808211156200009a57600080fd5b818501915085601f830112620000af57600080fd5b815181811115620000c457620000c462000058565b604051601f8201601f19908116603f01168101908382118183101715620000ef57620000ef62000058565b8160405282815288868487010111156200010857600080fd5b600093505b828410156200012c57848401860151818501870152928501926200010d565b600086848301015280965050505050505092915050565b600181811c908216806200015857607f821691505b6020821081036200017957634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001cd57600081815260208120601f850160051c81016020861015620001a85750805b601f850160051c820191505b81811015620001c957828155600101620001b4565b5050505b505050565b81516001600160401b03811115620001ee57620001ee62000058565b6200020681620001ff845462000143565b846200017f565b602080601f8311600181146200023e5760008415620002255750858301515b600019600386901b1c1916600185901b178555620001c9565b600085815260208120601f198616915b828110156200026f578886015182559484019460019091019084016200024e565b50858210156200028e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6115f380620002ae6000396000f3fe608060405234801561001057600080fd5b50600436106100825760003560e01c8062fdd58e1461008757806301ffc9a7146100ad5780630e89341c146100d05780631f7fdffa146100f05780632eb2c2d6146101055780634e1273f414610118578063a22cb46514610138578063e985e9c51461014b578063f242432a14610187575b600080fd5b61009a610095366004610d0b565b61019a565b6040519081526020015b60405180910390f35b6100c06100bb366004610d4e565b610234565b60405190151581526020016100a4565b6100e36100de366004610d72565b610284565b6040516100a49190610dd1565b6101036100fe366004610f2d565b610318565b005b610103610113366004610fc5565b610492565b61012b61012636600461106e565b610522565b6040516100a49190611173565b610103610146366004611186565b61064b565b6100c06101593660046111c2565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b6101036101953660046111f5565b61065a565b60006001600160a01b03831661020b5760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201526a65726f206164647265737360a81b60648201526084015b60405180910390fd5b506000818152602081815260408083206001600160a01b03861684529091529020545b92915050565b60006001600160e01b03198216636cdb3d1360e11b148061026557506001600160e01b031982166303a24d0760e21b145b8061022e57506301ffc9a760e01b6001600160e01b031983161461022e565b60606002805461029390611259565b80601f01602080910402602001604051908101604052809291908181526020018280546102bf90611259565b801561030c5780601f106102e15761010080835404028352916020019161030c565b820191906000526020600020905b8154815290600101906020018083116102ef57829003601f168201915b50505050509050919050565b6001600160a01b0384166103785760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736044820152607360f81b6064820152608401610202565b81518351146103995760405162461bcd60e51b815260040161020290611293565b3360005b8451811015610435578381815181106103b8576103b86112db565b60200260200101516000808784815181106103d5576103d56112db565b602002602001015181526020019081526020016000206000886001600160a01b03166001600160a01b03168152602001908152602001600020600082825461041d9190611307565b9091555081905061042d8161131a565b91505061039d565b50846001600160a01b031660006001600160a01b0316826001600160a01b031660008051602061159e8339815191528787604051610474929190611333565b60405180910390a461048b816000878787876106e9565b5050505050565b6001600160a01b0385163314806104ae57506104ae8533610159565b6105155760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f74206044820152711bdddb995c881b9bdc88185c1c1c9bdd995960721b6064820152608401610202565b61048b8585858585610854565b606081518351146105875760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b6064820152608401610202565b600083516001600160401b038111156105a2576105a2610de4565b6040519080825280602002602001820160405280156105cb578160200160208202803683370190505b50905060005b8451811015610643576106168582815181106105ef576105ef6112db565b6020026020010151858381518110610609576106096112db565b602002602001015161019a565b828281518110610628576106286112db565b602090810291909101015261063c8161131a565b90506105d1565b509392505050565b6106563383836109d6565b5050565b6001600160a01b03851633148061067657506106768533610159565b6106d45760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201526808185c1c1c9bdd995960ba1b6064820152608401610202565b61048b8585858585610ab6565b505050505050565b6106fb846001600160a01b0316610bd3565b156106e15760405163bc197c8160e01b81526001600160a01b0385169063bc197c81906107349089908990889088908890600401611361565b6020604051808303816000875af192505050801561076f575060408051601f3d908101601f1916820190925261076c918101906113bf565b60015b61081b5761077b6113dc565b806308c379a0036107b4575061078f6113f8565b8061079a57506107b6565b8060405162461bcd60e51b81526004016102029190610dd1565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e20455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b6064820152608401610202565b6001600160e01b0319811663bc197c8160e01b1461084b5760405162461bcd60e51b815260040161020290611481565b50505050505050565b81518351146108755760405162461bcd60e51b815260040161020290611293565b6001600160a01b03841661089b5760405162461bcd60e51b8152600401610202906114c9565b3360005b84518110156109825760008582815181106108bc576108bc6112db565b6020026020010151905060008583815181106108da576108da6112db565b602090810291909101810151600084815280835260408082206001600160a01b038e16835290935291909120549091508181101561092a5760405162461bcd60e51b81526004016102029061150e565b6000838152602081815260408083206001600160a01b038e8116855292528083208585039055908b16825281208054849290610967908490611307565b925050819055505050508061097b9061131a565b905061089f565b50846001600160a01b0316866001600160a01b0316826001600160a01b031660008051602061159e83398151915287876040516109c0929190611333565b60405180910390a46106e18187878787876106e9565b816001600160a01b0316836001600160a01b031603610a495760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b6064820152608401610202565b6001600160a01b03838116600081815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b038416610adc5760405162461bcd60e51b8152600401610202906114c9565b33610af5818787610aec88610be2565b61048b88610be2565b6000848152602081815260408083206001600160a01b038a16845290915290205483811015610b365760405162461bcd60e51b81526004016102029061150e565b6000858152602081815260408083206001600160a01b038b8116855292528083208785039055908816825281208054869290610b73908490611307565b909155505060408051868152602081018690526001600160a01b03808916928a821692918616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a461084b828888888888610c2d565b6001600160a01b03163b151590565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110610c1c57610c1c6112db565b602090810291909101015292915050565b610c3f846001600160a01b0316610bd3565b156106e15760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190610c789089908990889088908890600401611558565b6020604051808303816000875af1925050508015610cb3575060408051601f3d908101601f19168201909252610cb0918101906113bf565b60015b610cbf5761077b6113dc565b6001600160e01b0319811663f23a6e6160e01b1461084b5760405162461bcd60e51b815260040161020290611481565b80356001600160a01b0381168114610d0657600080fd5b919050565b60008060408385031215610d1e57600080fd5b610d2783610cef565b946020939093013593505050565b6001600160e01b031981168114610d4b57600080fd5b50565b600060208284031215610d6057600080fd5b8135610d6b81610d35565b9392505050565b600060208284031215610d8457600080fd5b5035919050565b6000815180845260005b81811015610db157602081850181015186830182015201610d95565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610d6b6020830184610d8b565b634e487b7160e01b600052604160045260246000fd5b601f8201601f191681016001600160401b0381118282101715610e1f57610e1f610de4565b6040525050565b60006001600160401b03821115610e3f57610e3f610de4565b5060051b60200190565b600082601f830112610e5a57600080fd5b81356020610e6782610e26565b604051610e748282610dfa565b83815260059390931b8501820192828101915086841115610e9457600080fd5b8286015b84811015610eaf5780358352918301918301610e98565b509695505050505050565b600082601f830112610ecb57600080fd5b81356001600160401b03811115610ee457610ee4610de4565b604051610efb601f8301601f191660200182610dfa565b818152846020838601011115610f1057600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060808587031215610f4357600080fd5b610f4c85610cef565b935060208501356001600160401b0380821115610f6857600080fd5b610f7488838901610e49565b94506040870135915080821115610f8a57600080fd5b610f9688838901610e49565b93506060870135915080821115610fac57600080fd5b50610fb987828801610eba565b91505092959194509250565b600080600080600060a08688031215610fdd57600080fd5b610fe686610cef565b9450610ff460208701610cef565b935060408601356001600160401b038082111561101057600080fd5b61101c89838a01610e49565b9450606088013591508082111561103257600080fd5b61103e89838a01610e49565b9350608088013591508082111561105457600080fd5b5061106188828901610eba565b9150509295509295909350565b6000806040838503121561108157600080fd5b82356001600160401b038082111561109857600080fd5b818501915085601f8301126110ac57600080fd5b813560206110b982610e26565b6040516110c68282610dfa565b83815260059390931b85018201928281019150898411156110e657600080fd5b948201945b8386101561110b576110fc86610cef565b825294820194908201906110eb565b9650508601359250508082111561112157600080fd5b5061112e85828601610e49565b9150509250929050565b600081518084526020808501945080840160005b838110156111685781518752958201959082019060010161114c565b509495945050505050565b602081526000610d6b6020830184611138565b6000806040838503121561119957600080fd5b6111a283610cef565b9150602083013580151581146111b757600080fd5b809150509250929050565b600080604083850312156111d557600080fd5b6111de83610cef565b91506111ec60208401610cef565b90509250929050565b600080600080600060a0868803121561120d57600080fd5b61121686610cef565b945061122460208701610cef565b9350604086013592506060860135915060808601356001600160401b0381111561124d57600080fd5b61106188828901610eba565b600181811c9082168061126d57607f821691505b60208210810361128d57634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526028908201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206040820152670dad2e6dac2e8c6d60c31b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082018082111561022e5761022e6112f1565b60006001820161132c5761132c6112f1565b5060010190565b6040815260006113466040830185611138565b82810360208401526113588185611138565b95945050505050565b6001600160a01b0386811682528516602082015260a06040820181905260009061138d90830186611138565b828103606084015261139f8186611138565b905082810360808401526113b38185610d8b565b98975050505050505050565b6000602082840312156113d157600080fd5b8151610d6b81610d35565b600060033d11156113f55760046000803e5060005160e01c5b90565b600060443d10156114065790565b6040516003193d81016004833e81513d6001600160401b03808311602484018310171561143557505050505090565b828501915081518181111561144d5750505050505090565b843d87010160208285010111156114675750505050505090565b61147660208286010187610dfa565b509095945050505050565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b6001600160a01b03868116825285166020820152604081018490526060810183905260a06080820181905260009061159290830184610d8b565b97965050505050505056fe4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fba26469706673582212205fc6f78b7b9946ad07426d233ad0c1c40ad40dd3f1f876e8a954471b1f1e727164736f6c63430008110033";

type TestingErc1155ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestingErc1155ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestingErc1155__factory extends ContractFactory {
  constructor(...args: TestingErc1155ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TestingErc1155";
  }

  deploy(
    uri_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestingErc1155> {
    return super.deploy(uri_, overrides || {}) as Promise<TestingErc1155>;
  }
  getDeployTransaction(
    uri_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri_, overrides || {});
  }
  attach(address: string): TestingErc1155 {
    return super.attach(address) as TestingErc1155;
  }
  connect(signer: Signer): TestingErc1155__factory {
    return super.connect(signer) as TestingErc1155__factory;
  }
  static readonly contractName: "TestingErc1155";
  public readonly contractName: "TestingErc1155";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestingErc1155Interface {
    return new utils.Interface(_abi) as TestingErc1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestingErc1155 {
    return new Contract(address, _abi, signerOrProvider) as TestingErc1155;
  }
}
