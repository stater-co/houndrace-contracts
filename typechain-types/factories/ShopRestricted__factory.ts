/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ShopRestricted,
  ShopRestrictedInterface,
  ShopConstructor,
} from "../ShopRestricted";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address[]",
            name: "operators",
            type: "address[]",
          },
          {
            internalType: "address",
            name: "methods",
            type: "address",
          },
          {
            internalType: "address",
            name: "zerocost",
            type: "address",
          },
          {
            internalType: "address",
            name: "discounts",
            type: "address",
          },
          {
            internalType: "address",
            name: "restricted",
            type: "address",
          },
          {
            internalType: "address",
            name: "discountsReceiverWallet",
            type: "address",
          },
          {
            internalType: "bytes4[][]",
            name: "targets",
            type: "bytes4[][]",
          },
        ],
        internalType: "struct ShopConstructor.Struct",
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
      {
        components: [
          {
            internalType: "address",
            name: "tokenContract",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "tokenIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "dateStart",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dateStop",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountToUsePerUsableDiscount",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "discount",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "tokenType",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "usable",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct Discount.Struct",
        name: "discount",
        type: "tuple",
      },
    ],
    name: "NewDiscount",
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
    inputs: [],
    name: "control",
    outputs: [
      {
        internalType: "address",
        name: "methods",
        type: "address",
      },
      {
        internalType: "address",
        name: "zerocost",
        type: "address",
      },
      {
        internalType: "address",
        name: "discounts",
        type: "address",
      },
      {
        internalType: "address",
        name: "restricted",
        type: "address",
      },
      {
        internalType: "address",
        name: "discountsReceiverWallet",
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
            internalType: "address",
            name: "tokenContract",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "tokenIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "dateStart",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dateStop",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountToUsePerUsableDiscount",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "discount",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "tokenType",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "usable",
            type: "bool",
          },
        ],
        internalType: "struct Discount.Struct",
        name: "discount",
        type: "tuple",
      },
    ],
    name: "createDiscount",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "discounts",
    outputs: [
      {
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "dateStart",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dateStop",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountToUsePerUsableDiscount",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "discount",
        type: "uint32",
      },
      {
        internalType: "uint8",
        name: "tokenType",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "usable",
        type: "bool",
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
            internalType: "address",
            name: "tokenContract",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "tokenIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "dateStart",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dateStop",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountToUsePerUsableDiscount",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "discount",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "tokenType",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "usable",
            type: "bool",
          },
        ],
        internalType: "struct Discount.Struct",
        name: "discount",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "discountId",
        type: "uint256",
      },
    ],
    name: "editDiscount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "discountId",
        type: "uint256",
      },
    ],
    name: "getDiscount",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenContract",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "tokenIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "dateStart",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dateStop",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountToUsePerUsableDiscount",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "discount",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "tokenType",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "usable",
            type: "bool",
          },
        ],
        internalType: "struct Discount.Struct",
        name: "",
        type: "tuple",
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
            internalType: "address[]",
            name: "operators",
            type: "address[]",
          },
          {
            internalType: "address",
            name: "methods",
            type: "address",
          },
          {
            internalType: "address",
            name: "zerocost",
            type: "address",
          },
          {
            internalType: "address",
            name: "discounts",
            type: "address",
          },
          {
            internalType: "address",
            name: "restricted",
            type: "address",
          },
          {
            internalType: "address",
            name: "discountsReceiverWallet",
            type: "address",
          },
          {
            internalType: "bytes4[][]",
            name: "targets",
            type: "bytes4[][]",
          },
        ],
        internalType: "struct ShopConstructor.Struct",
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
    inputs: [],
    name: "totalDiscounts",
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
    inputs: [
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
    ],
    name: "whitelists",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260016002553480156200001657600080fd5b5060405162001f5a38038062001f5a83398101604081905262000039916200069f565b805160c08201518291906200004e3362000238565b80518251146200005d57600080fd5b60005b8251811015620001765760005b82828151811062000082576200008262000799565b602002602001015151811015620001625760016000858481518110620000ac57620000ac62000799565b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020838381518110620000e957620000e962000799565b6020026020010151828151811062000105576200010562000799565b60209081029190910181015182546001810184556000938452919092206008820401805463ffffffff60079093166004026101000a928302191660e09390931c919091029190911790556200015a81620007af565b90506200006d565b506200016e81620007af565b905062000060565b505081518051839250600391620001939183916020019062000288565b506020828101516001830180546001600160a01b03199081166001600160a01b039384161790915560408501516002850180548316918416919091179055606085015160038501805483169184169190911790556080850151600485018054831691841691909117905560a0850151600585018054909216921691909117905560c083015180516200022c9260068501920190620002f2565b509050505050620007d7565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054828255906000526020600020908101928215620002e0579160200282015b82811115620002e057825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190620002a9565b50620002ee92915062000352565b5090565b82805482825590600052602060002090810192821562000344579160200282015b828111156200034457825180516200033391849160209091019062000369565b509160200191906001019062000313565b50620002ee92915062000417565b5b80821115620002ee576000815560010162000353565b82805482825590600052602060002090600701600890048101928215620002e05791602002820160005b83821115620003d657835183826101000a81548163ffffffff021916908360e01c0217905550926020019260040160208160030104928301926001030262000393565b8015620004085782816101000a81549063ffffffff0219169055600401602081600301049283019260010302620003d6565b5050620002ee92915062000352565b80821115620002ee5760006200042e828262000438565b5060010162000417565b5080546000825560070160089004906000526020600020908101906200045f919062000352565b50565b634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b03811182821017156200049d576200049d62000462565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620004ce57620004ce62000462565b604052919050565b60006001600160401b03821115620004f257620004f262000462565b5060051b60200190565b80516001600160a01b03811681146200051457600080fd5b919050565b600082601f8301126200052b57600080fd5b81516020620005446200053e83620004d6565b620004a3565b82815260059290921b840181019181810190868411156200056457600080fd5b8286015b848110156200058a576200057c81620004fc565b835291830191830162000568565b509695505050505050565b600082601f830112620005a757600080fd5b81516020620005ba6200053e83620004d6565b828152600592831b8501820192828201919087851115620005da57600080fd5b8387015b85811015620006925780516001600160401b03811115620005ff5760008081fd5b8801603f81018a13620006125760008081fd5b858101516040620006276200053e83620004d6565b82815291851b8301810191888101908d841115620006455760008081fd5b938201935b838510156200068057845192506001600160e01b0319831683146200066f5760008081fd5b82825293890193908901906200064a565b885250505093850193508401620005de565b5090979650505050505050565b600060208284031215620006b257600080fd5b81516001600160401b0380821115620006ca57600080fd5b9083019060e08286031215620006df57600080fd5b620006e962000478565b825182811115620006f957600080fd5b620007078782860162000519565b8252506200071860208401620004fc565b60208201526200072b60408401620004fc565b60408201526200073e60608401620004fc565b60608201526200075160808401620004fc565b60808201526200076460a08401620004fc565b60a082015260c0830151828111156200077c57600080fd5b6200078a8782860162000595565b60c08301525095945050505050565b634e487b7160e01b600052603260045260246000fd5b600060018201620007d057634e487b7160e01b600052601160045260246000fd5b5060010190565b61177380620007e76000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c80639aca06dc11610081578063d4b1d7561161005b578063d4b1d75614610283578063d8de658714610296578063f2fde38b1461031657600080fd5b80639aca06dc1461019e578063af640d0f146101b0578063bae6a690146101b957600080fd5b8063715018a6116100b2578063715018a61461015b5780637c5ff21f146101635780638da5cb5b1461017657600080fd5b80632336dbe4146100d9578063507e3a27146101025780635b19e29414610117575b600080fd5b6100ec6100e7366004611043565b610329565b6040516100f9919061105c565b60405180910390f35b6101156101103660046113c0565b610477565b005b61012a6101253660046114a6565b61056b565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016100f9565b6101156105b1565b61011561017136600461160b565b6105c5565b60005460405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100f9565b6002545b6040519081526020016100f9565b6101a260025481565b61022c6101c7366004611043565b600b602052600090815260409020805460028201546003830154600484015460059094015473ffffffffffffffffffffffffffffffffffffffff90931693919290919063ffffffff81169060ff64010000000082048116916501000000000090041687565b6040805173ffffffffffffffffffffffffffffffffffffffff9098168852602088019690965294860193909352606085019190915263ffffffff16608084015260ff1660a0830152151560c082015260e0016100f9565b610115610291366004611648565b6107f8565b6004546005546006546007546008546102cf9473ffffffffffffffffffffffffffffffffffffffff908116948116938116928116911685565b6040805173ffffffffffffffffffffffffffffffffffffffff968716815294861660208601529285169284019290925283166060830152909116608082015260a0016100f9565b61011561032436600461168d565b610a12565b610392604051806101000160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001600081526020016000815260200160008152602001600063ffffffff168152602001600060ff1681526020016000151581525090565b6000828152600b6020908152604091829020825161010081018452815473ffffffffffffffffffffffffffffffffffffffff1681526001820180548551818602810186019096528086529194929385810193929083018282801561041557602002820191906000526020600020905b815481526020019060010190808311610401575b505050918352505060028201546020820152600382015460408201526004820154606082015260059091015463ffffffff8116608083015260ff6401000000008204811660a08401526501000000000090910416151560c09091015292915050565b61047f610acb565b805180518291600391610499918391602090910190610e27565b506020828101516001830180547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff9384161790915560408501516002850180548316918416919091179055606085015160038501805483169184169190911790556080850151600485018054831691841691909117905560a0850151600585018054909216921691909117905560c083015180516105559260068501920190610eb1565b5050815160c08301516105689250610b4c565b50565b6001602052816000526040600020818154811061058757600080fd5b9060005260206000209060089182820401919006600402915091509054906101000a900460e01b81565b6105b9610acb565b6105c36000610db2565b565b6000805b3360009081526001602052604090205481101561068257336000908152600160205260408120805491357fffffffff00000000000000000000000000000000000000000000000000000000169183908110610626576106266116af565b90600052602060002090600891828204019190066004029054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19160361067257600191505b61067b816116de565b90506105c9565b508061068d57600080fd5b6002546000908152600b60209081526040909120835181547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff90911617815583820151805185936106fb926001850192910190610f0a565b50604082810151600280840191909155606084015160038401556080840151600484015560a08401516005909301805460c086015160e090960151151565010000000000027fffffffffffffffffffffffffffffffffffffffffffffffffffff00ffffffffff60ff909716640100000000027fffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000090921663ffffffff909616959095171794909416929092179092555490517fa5f1b5792cc94eef52e9e4a2bbc989b31c5f63f771b2904f5cca7222ab2cc5d2906107d990859061105c565b60405180910390a26002600081546107f0906116de565b909155505050565b6000805b336000908152600160205260409020548110156108b557336000908152600160205260408120805491357fffffffff00000000000000000000000000000000000000000000000000000000169183908110610859576108596116af565b90600052602060002090600891828204019190066004029054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916036108a557600191505b6108ae816116de565b90506107fc565b50806108c057600080fd5b6000828152600b60209081526040909120845181547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909116178155848201518051869361092b926001850192910190610f0a565b506040828101516002830155606083015160038301556080830151600483015560a08301516005909201805460c085015160e090950151151565010000000000027fffffffffffffffffffffffffffffffffffffffffffffffffffff00ffffffffff60ff909616640100000000027fffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000090921663ffffffff909516949094171793909316919091179091555182907fa5f1b5792cc94eef52e9e4a2bbc989b31c5f63f771b2904f5cca7222ab2cc5d290610a0590869061105c565b60405180910390a2505050565b610a1a610acb565b73ffffffffffffffffffffffffffffffffffffffff8116610ac2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61056881610db2565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105c3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610ab9565b8051825114610b5a57600080fd5b60005b8251811015610dad5760005b828281518110610b7b57610b7b6116af565b602002602001015151811015610d9c5760016000858481518110610ba157610ba16116af565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490508110610cbf5760016000858481518110610c0357610c036116af565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020838381518110610c5757610c576116af565b60200260200101518281518110610c7057610c706116af565b60209081029190910181015182546001810184556000938452919092206008820401805463ffffffff60079093166004026101000a928302191660e09390931c91909102919091179055610d8c565b828281518110610cd157610cd16116af565b60200260200101518181518110610cea57610cea6116af565b602002602001015160016000868581518110610d0857610d086116af565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610d5b57610d5b6116af565b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908360e01c02179055505b610d95816116de565b9050610b69565b50610da6816116de565b9050610b5d565b505050565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054828255906000526020600020908101928215610ea1579160200282015b82811115610ea157825182547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909116178255602090920191600190910190610e47565b50610ead929150610f45565b5090565b828054828255906000526020600020908101928215610efe579160200282015b82811115610efe5782518051610eee918491602090910190610f5a565b5091602001919060010190610ed1565b50610ead929150611001565b828054828255906000526020600020908101928215610ea1579160200282015b82811115610ea1578251825591602001919060010190610f2a565b5b80821115610ead5760008155600101610f46565b82805482825590600052602060002090600701600890048101928215610ea15791602002820160005b83821115610fc457835183826101000a81548163ffffffff021916908360e01c02179055509260200192600401602081600301049283019260010302610f83565b8015610ff45782816101000a81549063ffffffff0219169055600401602081600301049283019260010302610fc4565b5050610ead929150610f45565b80821115610ead576000611015828261101e565b50600101611001565b5080546000825560070160089004906000526020600020908101906105689190610f45565b60006020828403121561105557600080fd5b5035919050565b6020808252825173ffffffffffffffffffffffffffffffffffffffff16828201528281015161010060408401819052815161012085018190526000939283019184916101408701905b808410156110c557845182529385019360019390930192908501906110a5565b506040880151606088015260608801516080880152608088015160a088015260a088015194506110fd60c088018663ffffffff169052565b60c088015160ff1660e08881019190915290970151151595019490945250929392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff8111828210171561117557611175611123565b60405290565b604051610100810167ffffffffffffffff8111828210171561117557611175611123565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156111e6576111e6611123565b604052919050565b600067ffffffffffffffff82111561120857611208611123565b5060051b60200190565b803573ffffffffffffffffffffffffffffffffffffffff8116811461123657600080fd5b919050565b600082601f83011261124c57600080fd5b8135602061126161125c836111ee565b61119f565b82815260059290921b8401810191818101908684111561128057600080fd5b8286015b848110156112a25761129581611212565b8352918301918301611284565b509695505050505050565b600082601f8301126112be57600080fd5b813560206112ce61125c836111ee565b828152600592831b85018201928282019190878511156112ed57600080fd5b8387015b858110156113b357803567ffffffffffffffff8111156113115760008081fd5b8801603f81018a136113235760008081fd5b85810135604061133561125c836111ee565b82815291851b8301810191888101908d8411156113525760008081fd5b938201935b838510156113a257843592507fffffffff00000000000000000000000000000000000000000000000000000000831683146113925760008081fd5b8282529389019390890190611357565b8852505050938501935084016112f1565b5090979650505050505050565b6000602082840312156113d257600080fd5b813567ffffffffffffffff808211156113ea57600080fd5b9083019060e082860312156113fe57600080fd5b611406611152565b82358281111561141557600080fd5b6114218782860161123b565b82525061143060208401611212565b602082015261144160408401611212565b604082015261145260608401611212565b606082015261146360808401611212565b608082015261147460a08401611212565b60a082015260c08301358281111561148b57600080fd5b611497878286016112ad565b60c08301525095945050505050565b600080604083850312156114b957600080fd5b6114c283611212565b946020939093013593505050565b600082601f8301126114e157600080fd5b813560206114f161125c836111ee565b82815260059290921b8401810191818101908684111561151057600080fd5b8286015b848110156112a25780358352918301918301611514565b803563ffffffff8116811461123657600080fd5b803560ff8116811461123657600080fd5b8035801515811461123657600080fd5b6000610100828403121561157357600080fd5b61157b61117b565b905061158682611212565b8152602082013567ffffffffffffffff8111156115a257600080fd5b6115ae848285016114d0565b6020830152506040820135604082015260608201356060820152608082013560808201526115de60a0830161152b565b60a08201526115ef60c0830161153f565b60c082015261160060e08301611550565b60e082015292915050565b60006020828403121561161d57600080fd5b813567ffffffffffffffff81111561163457600080fd5b61164084828501611560565b949350505050565b6000806040838503121561165b57600080fd5b823567ffffffffffffffff81111561167257600080fd5b61167e85828601611560565b95602094909401359450505050565b60006020828403121561169f57600080fd5b6116a882611212565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611736577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b506001019056fea264697066735822122074b67bc05643699e9be41a8f3da4a085f740109d02fb78a5bdf7adce4d395cc864736f6c63430008110033";

type ShopRestrictedConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ShopRestrictedConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ShopRestricted__factory extends ContractFactory {
  constructor(...args: ShopRestrictedConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ShopRestricted";
  }

  deploy(
    input: ShopConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ShopRestricted> {
    return super.deploy(input, overrides || {}) as Promise<ShopRestricted>;
  }
  getDeployTransaction(
    input: ShopConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(input, overrides || {});
  }
  attach(address: string): ShopRestricted {
    return super.attach(address) as ShopRestricted;
  }
  connect(signer: Signer): ShopRestricted__factory {
    return super.connect(signer) as ShopRestricted__factory;
  }
  static readonly contractName: "ShopRestricted";
  public readonly contractName: "ShopRestricted";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShopRestrictedInterface {
    return new utils.Interface(_abi) as ShopRestrictedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ShopRestricted {
    return new Contract(address, _abi, signerOrProvider) as ShopRestricted;
  }
}
