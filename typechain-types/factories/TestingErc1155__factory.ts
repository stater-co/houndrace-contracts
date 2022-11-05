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
  "0x60806040523480156200001157600080fd5b5060405162001ee538038062001ee583398101604081905262000034916200006e565b6200003f8162000046565b506200029e565b6002620000548282620001d2565b5050565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156200008257600080fd5b82516001600160401b03808211156200009a57600080fd5b818501915085601f830112620000af57600080fd5b815181811115620000c457620000c462000058565b604051601f8201601f19908116603f01168101908382118183101715620000ef57620000ef62000058565b8160405282815288868487010111156200010857600080fd5b600093505b828410156200012c57848401860151818501870152928501926200010d565b600086848301015280965050505050505092915050565b600181811c908216806200015857607f821691505b6020821081036200017957634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001cd57600081815260208120601f850160051c81016020861015620001a85750805b601f850160051c820191505b81811015620001c957828155600101620001b4565b5050505b505050565b81516001600160401b03811115620001ee57620001ee62000058565b6200020681620001ff845462000143565b846200017f565b602080601f8311600181146200023e5760008415620002255750858301515b600019600386901b1c1916600185901b178555620001c9565b600085815260208120601f198616915b828110156200026f578886015182559484019460019091019084016200024e565b50858210156200028e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b611c3780620002ae6000396000f3fe608060405234801561001057600080fd5b50600436106100a25760003560e01c80632eb2c2d611610076578063a22cb4651161005b578063a22cb46514610158578063e985e9c51461016b578063f242432a146101b457600080fd5b80632eb2c2d6146101255780634e1273f41461013857600080fd5b8062fdd58e146100a757806301ffc9a7146100cd5780630e89341c146100f05780631f7fdffa14610110575b600080fd5b6100ba6100b536600461135b565b6101c7565b6040519081526020015b60405180910390f35b6100e06100db3660046113b6565b61028d565b60405190151581526020016100c4565b6101036100fe3660046113da565b610370565b6040516100c49190611457565b61012361011e36600461160b565b610404565b005b6101236101333660046116a4565b610650565b61014b61014636600461174e565b6106f8565b6040516100c49190611854565b610123610166366004611867565b610836565b6100e06101793660046118a3565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205460ff1690565b6101236101c23660046118d6565b610845565b600073ffffffffffffffffffffffffffffffffffffffff83166102575760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201527f65726f206164647265737300000000000000000000000000000000000000000060648201526084015b60405180910390fd5b5060008181526020818152604080832073ffffffffffffffffffffffffffffffffffffffff861684529091529020545b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fd9b67a2600000000000000000000000000000000000000000000000000000000148061032057507fffffffff0000000000000000000000000000000000000000000000000000000082167f0e89341c00000000000000000000000000000000000000000000000000000000145b8061028757507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610287565b60606002805461037f9061193b565b80601f01602080910402602001604051908101604052809291908181526020018280546103ab9061193b565b80156103f85780601f106103cd576101008083540402835291602001916103f8565b820191906000526020600020905b8154815290600101906020018083116103db57829003601f168201915b50505050509050919050565b73ffffffffffffffffffffffffffffffffffffffff841661048d5760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015260840161024e565b81518351146105045760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d61746368000000000000000000000000000000000000000000000000606482015260840161024e565b3360005b84518110156105ba578381815181106105235761052361198e565b60200260200101516000808784815181106105405761054061198e565b6020026020010151815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546105a291906119ec565b909155508190506105b2816119ff565b915050610508565b508473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610632929190611a37565b60405180910390a4610649816000878787876108f5565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff851633148061067957506106798533610179565b6106eb5760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f742060448201527f6f776e6572206e6f7220617070726f7665640000000000000000000000000000606482015260840161024e565b6106498585858585610b3a565b606081518351146107715760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e67746860448201527f206d69736d617463680000000000000000000000000000000000000000000000606482015260840161024e565b6000835167ffffffffffffffff81111561078d5761078d61146a565b6040519080825280602002602001820160405280156107b6578160200160208202803683370190505b50905060005b845181101561082e576108018582815181106107da576107da61198e565b60200260200101518583815181106107f4576107f461198e565b60200260200101516101c7565b8282815181106108135761081361198e565b6020908102919091010152610827816119ff565b90506107bc565b509392505050565b610841338383610e1e565b5050565b73ffffffffffffffffffffffffffffffffffffffff851633148061086e575061086e8533610179565b6108e05760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201527f20617070726f7665640000000000000000000000000000000000000000000000606482015260840161024e565b6106498585858585610f57565b505050505050565b73ffffffffffffffffffffffffffffffffffffffff84163b156108ed576040517fbc197c8100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063bc197c819061096c9089908990889088908890600401611a65565b6020604051808303816000875af19250505080156109c5575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526109c291810190611ad0565b60015b610a7a576109d1611aed565b806308c379a003610a0a57506109e5611b09565b806109f05750610a0c565b8060405162461bcd60e51b815260040161024e9190611457565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e204552433131353560448201527f526563656976657220696d706c656d656e746572000000000000000000000000606482015260840161024e565b7fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c810000000000000000000000000000000000000000000000000000000014610b315760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a6563746560448201527f6420746f6b656e73000000000000000000000000000000000000000000000000606482015260840161024e565b50505050505050565b8151835114610bb15760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d61746368000000000000000000000000000000000000000000000000606482015260840161024e565b73ffffffffffffffffffffffffffffffffffffffff8416610c3a5760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161024e565b3360005b8451811015610d91576000858281518110610c5b57610c5b61198e565b602002602001015190506000858381518110610c7957610c7961198e565b6020908102919091018101516000848152808352604080822073ffffffffffffffffffffffffffffffffffffffff8e168352909352919091205490915081811015610d2c5760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e7366657200000000000000000000000000000000000000000000606482015260840161024e565b60008381526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8e8116855292528083208585039055908b16825281208054849290610d769084906119ec565b9250508190555050505080610d8a906119ff565b9050610c3e565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610e08929190611a37565b60405180910390a46108ed8187878787876108f5565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610ebf5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c2073746174757360448201527f20666f722073656c660000000000000000000000000000000000000000000000606482015260840161024e565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8416610fe05760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161024e565b33610ff9818787610ff088611154565b61064988611154565b60008481526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8a1684529091529020548381101561109d5760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e7366657200000000000000000000000000000000000000000000606482015260840161024e565b60008581526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8b81168552925280832087850390559088168252812080548692906110e79084906119ec565b9091555050604080518681526020810186905273ffffffffffffffffffffffffffffffffffffffff808916928a821692918616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610b3182888888888861119f565b6040805160018082528183019092526060916000919060208083019080368337019050509050828160008151811061118e5761118e61198e565b602090810291909101015292915050565b73ffffffffffffffffffffffffffffffffffffffff84163b156108ed576040517ff23a6e6100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063f23a6e61906112169089908990889088908890600401611bb1565b6020604051808303816000875af192505050801561126f575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261126c91810190611ad0565b60015b61127b576109d1611aed565b7fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e610000000000000000000000000000000000000000000000000000000014610b315760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a6563746560448201527f6420746f6b656e73000000000000000000000000000000000000000000000000606482015260840161024e565b803573ffffffffffffffffffffffffffffffffffffffff8116811461135657600080fd5b919050565b6000806040838503121561136e57600080fd5b61137783611332565b946020939093013593505050565b7fffffffff00000000000000000000000000000000000000000000000000000000811681146113b357600080fd5b50565b6000602082840312156113c857600080fd5b81356113d381611385565b9392505050565b6000602082840312156113ec57600080fd5b5035919050565b6000815180845260005b81811015611419576020818501810151868301820152016113fd565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b6020815260006113d360208301846113f3565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116810181811067ffffffffffffffff821117156114dd576114dd61146a565b6040525050565b600067ffffffffffffffff8211156114fe576114fe61146a565b5060051b60200190565b600082601f83011261151957600080fd5b81356020611526826114e4565b6040516115338282611499565b83815260059390931b850182019282810191508684111561155357600080fd5b8286015b8481101561156e5780358352918301918301611557565b509695505050505050565b600082601f83011261158a57600080fd5b813567ffffffffffffffff8111156115a4576115a461146a565b6040516115d960207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501160182611499565b8181528460208386010111156115ee57600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000806080858703121561162157600080fd5b61162a85611332565b9350602085013567ffffffffffffffff8082111561164757600080fd5b61165388838901611508565b9450604087013591508082111561166957600080fd5b61167588838901611508565b9350606087013591508082111561168b57600080fd5b5061169887828801611579565b91505092959194509250565b600080600080600060a086880312156116bc57600080fd5b6116c586611332565b94506116d360208701611332565b9350604086013567ffffffffffffffff808211156116f057600080fd5b6116fc89838a01611508565b9450606088013591508082111561171257600080fd5b61171e89838a01611508565b9350608088013591508082111561173457600080fd5b5061174188828901611579565b9150509295509295909350565b6000806040838503121561176157600080fd5b823567ffffffffffffffff8082111561177957600080fd5b818501915085601f83011261178d57600080fd5b8135602061179a826114e4565b6040516117a78282611499565b83815260059390931b85018201928281019150898411156117c757600080fd5b948201945b838610156117ec576117dd86611332565b825294820194908201906117cc565b9650508601359250508082111561180257600080fd5b5061180f85828601611508565b9150509250929050565b600081518084526020808501945080840160005b838110156118495781518752958201959082019060010161182d565b509495945050505050565b6020815260006113d36020830184611819565b6000806040838503121561187a57600080fd5b61188383611332565b91506020830135801515811461189857600080fd5b809150509250929050565b600080604083850312156118b657600080fd5b6118bf83611332565b91506118cd60208401611332565b90509250929050565b600080600080600060a086880312156118ee57600080fd5b6118f786611332565b945061190560208701611332565b93506040860135925060608601359150608086013567ffffffffffffffff81111561192f57600080fd5b61174188828901611579565b600181811c9082168061194f57607f821691505b602082108103611988577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b80820180821115610287576102876119bd565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611a3057611a306119bd565b5060010190565b604081526000611a4a6040830185611819565b8281036020840152611a5c8185611819565b95945050505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525060a06040830152611a9e60a0830186611819565b8281036060840152611ab08186611819565b90508281036080840152611ac481856113f3565b98975050505050505050565b600060208284031215611ae257600080fd5b81516113d381611385565b600060033d1115611b065760046000803e5060005160e01c5b90565b600060443d1015611b175790565b6040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc803d016004833e81513d67ffffffffffffffff8160248401118184111715611b6557505050505090565b8285019150815181811115611b7d5750505050505090565b843d8701016020828501011115611b975750505050505090565b611ba660208286010187611499565b509095945050505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525084604083015283606083015260a06080830152611bf660a08301846113f3565b97965050505050505056fea2646970667358221220d8982b7ed459dba8fb09444ef9eb47ae26a2a221f7fabb8d065637646d8998c064736f6c63430008110033";

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
