/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Shop, ShopInterface, ShopConstructor } from "../Shop";

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
    inputs: [
      {
        internalType: "address",
        name: "requester",
        type: "address",
      },
    ],
    name: "calculateDiscount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
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
        name: "requester",
        type: "address",
      },
    ],
    name: "viewDiscount",
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
  "0x608060405260016002553480156200001657600080fd5b5060405162001d6438038062001d6483398101604081905262000039916200069f565b805160c08201518291906200004e3362000238565b80518251146200005d57600080fd5b60005b8251811015620001765760005b82828151811062000082576200008262000799565b602002602001015151811015620001625760016000858481518110620000ac57620000ac62000799565b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020838381518110620000e957620000e962000799565b6020026020010151828151811062000105576200010562000799565b60209081029190910181015182546001810184556000938452919092206008820401805463ffffffff60079093166004026101000a928302191660e09390931c919091029190911790556200015a81620007af565b90506200006d565b506200016e81620007af565b905062000060565b505081518051839250600391620001939183916020019062000288565b506020828101516001830180546001600160a01b03199081166001600160a01b039384161790915560408501516002850180548316918416919091179055606085015160038501805483169184169190911790556080850151600485018054831691841691909117905560a0850151600585018054909216921691909117905560c083015180516200022c9260068501920190620002f2565b509050505050620007d7565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054828255906000526020600020908101928215620002e0579160200282015b82811115620002e057825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190620002a9565b50620002ee92915062000352565b5090565b82805482825590600052602060002090810192821562000344579160200282015b828111156200034457825180516200033391849160209091019062000369565b509160200191906001019062000313565b50620002ee92915062000417565b5b80821115620002ee576000815560010162000353565b82805482825590600052602060002090600701600890048101928215620002e05791602002820160005b83821115620003d657835183826101000a81548163ffffffff021916908360e01c0217905550926020019260040160208160030104928301926001030262000393565b8015620004085782816101000a81549063ffffffff0219169055600401602081600301049283019260010302620003d6565b5050620002ee92915062000352565b80821115620002ee5760006200042e828262000438565b5060010162000417565b5080546000825560070160089004906000526020600020908101906200045f919062000352565b50565b634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b03811182821017156200049d576200049d62000462565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620004ce57620004ce62000462565b604052919050565b60006001600160401b03821115620004f257620004f262000462565b5060051b60200190565b80516001600160a01b03811681146200051457600080fd5b919050565b600082601f8301126200052b57600080fd5b81516020620005446200053e83620004d6565b620004a3565b82815260059290921b840181019181810190868411156200056457600080fd5b8286015b848110156200058a576200057c81620004fc565b835291830191830162000568565b509695505050505050565b600082601f830112620005a757600080fd5b81516020620005ba6200053e83620004d6565b828152600592831b8501820192828201919087851115620005da57600080fd5b8387015b85811015620006925780516001600160401b03811115620005ff5760008081fd5b8801603f81018a13620006125760008081fd5b858101516040620006276200053e83620004d6565b82815291851b8301810191888101908d841115620006455760008081fd5b938201935b838510156200068057845192506001600160e01b0319831683146200066f5760008081fd5b82825293890193908901906200064a565b885250505093850193508401620005de565b5090979650505050505050565b600060208284031215620006b257600080fd5b81516001600160401b0380821115620006ca57600080fd5b9083019060e08286031215620006df57600080fd5b620006e962000478565b825182811115620006f957600080fd5b620007078782860162000519565b8252506200071860208401620004fc565b60208201526200072b60408401620004fc565b60408201526200073e60608401620004fc565b60608201526200075160808401620004fc565b60808201526200076460a08401620004fc565b60a082015260c0830151828111156200077c57600080fd5b6200078a8782860162000595565b60c08301525095945050505050565b634e487b7160e01b600052603260045260246000fd5b600060018201620007d057634e487b7160e01b600052601160045260246000fd5b5060010190565b61157d80620007e76000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80639aca06dc1161008c578063bae6a69011610066578063bae6a690146101f9578063d4b1d756146102c3578063d8de6587146102d6578063f2fde38b1461035657600080fd5b80639aca06dc146101d5578063ad6a8745146101dd578063af640d0f146101f057600080fd5b80635b19e294116100c85780635b19e2941461014e578063715018a6146101925780637c5ff21f1461019a5780638da5cb5b146101ad57600080fd5b80632336dbe4146100ef578063426b40cc14610118578063507e3a2714610139575b600080fd5b6101026100fd366004610e2c565b610369565b60405161010f9190610e45565b60405180910390f35b61012b610126366004610f35565b6104b7565b60405190815260200161010f565b61014c6101473660046111cb565b610552565b005b61016161015c3660046112b1565b610646565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200161010f565b61014c61068c565b61014c6101a8366004611416565b6106a0565b60005460405173ffffffffffffffffffffffffffffffffffffffff909116815260200161010f565b60025461012b565b61012b6101eb366004610f35565b61071f565b61012b60025481565b61026c610207366004610e2c565b600b602052600090815260409020805460028201546003830154600484015460059094015473ffffffffffffffffffffffffffffffffffffffff90931693919290919063ffffffff81169060ff64010000000082048116916501000000000090041687565b6040805173ffffffffffffffffffffffffffffffffffffffff9098168852602088019690965294860193909352606085019190915263ffffffff16608084015260ff1660a0830152151560c082015260e00161010f565b61014c6102d136600461144b565b6107bb565b60045460055460065460075460085461030f9473ffffffffffffffffffffffffffffffffffffffff908116948116938116928116911685565b6040805173ffffffffffffffffffffffffffffffffffffffff968716815294861660208601529285169284019290925283166060830152909116608082015260a00161010f565b61014c610364366004610f35565b61083b565b6103d2604051806101000160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001600081526020016000815260200160008152602001600063ffffffff168152602001600060ff1681526020016000151581525090565b6000828152600b6020908152604091829020825161010081018452815473ffffffffffffffffffffffffffffffffffffffff1681526001820180548551818602810186019096528086529194929385810193929083018282801561045557602002820191906000526020600020905b815481526020019060010190808311610441575b505050918352505060028201546020820152600382015460408201526004820154606082015260059091015463ffffffff8116608083015260ff6401000000008204811660a08401526501000000000090910416151560c09091015292915050565b6005546040517f426b40cc00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8381166004830152600092169063426b40cc90602401602060405180830381865afa158015610528573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061054c9190611490565b92915050565b61055a6108f4565b805180518291600391610574918391602090910190610c4b565b506020828101516001830180547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff9384161790915560408501516002850180548316918416919091179055606085015160038501805483169184169190911790556080850151600485018054831691841691909117905560a0850151600585018054909216921691909117905560c083015180516106309260068501920190610cd5565b5050815160c08301516106439250610975565b50565b6001602052816000526040600020818154811061066257600080fd5b9060005260206000209060089182820401919006600402915091509054906101000a900460e01b81565b6106946108f4565b61069e6000610bd6565b565b60075460405160009173ffffffffffffffffffffffffffffffffffffffff16906106cd90839036906114a9565b600060405180830381855af49150503d8060008114610708576040519150601f19603f3d011682016040523d82523d6000602084013e61070d565b606091505b505090508061071b57600080fd5b5050565b6004546040516000918291829173ffffffffffffffffffffffffffffffffffffffff169061075090839036906114a9565b600060405180830381855af49150503d806000811461078b576040519150601f19603f3d011682016040523d82523d6000602084013e610790565b606091505b50915091508161079f57600080fd5b808060200190518101906107b39190611490565b949350505050565b60075460405160009173ffffffffffffffffffffffffffffffffffffffff16906107e890839036906114a9565b600060405180830381855af49150503d8060008114610823576040519150601f19603f3d011682016040523d82523d6000602084013e610828565b606091505b505090508061083657600080fd5b505050565b6108436108f4565b73ffffffffffffffffffffffffffffffffffffffff81166108eb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61064381610bd6565b60005473ffffffffffffffffffffffffffffffffffffffff16331461069e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016108e2565b805182511461098357600080fd5b60005b82518110156108365760005b8282815181106109a4576109a46114b9565b602002602001015151811015610bc557600160008584815181106109ca576109ca6114b9565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490508110610ae85760016000858481518110610a2c57610a2c6114b9565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020838381518110610a8057610a806114b9565b60200260200101518281518110610a9957610a996114b9565b60209081029190910181015182546001810184556000938452919092206008820401805463ffffffff60079093166004026101000a928302191660e09390931c91909102919091179055610bb5565b828281518110610afa57610afa6114b9565b60200260200101518181518110610b1357610b136114b9565b602002602001015160016000868581518110610b3157610b316114b9565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610b8457610b846114b9565b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908360e01c02179055505b610bbe816114e8565b9050610992565b50610bcf816114e8565b9050610986565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054828255906000526020600020908101928215610cc5579160200282015b82811115610cc557825182547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909116178255602090920191600190910190610c6b565b50610cd1929150610d2e565b5090565b828054828255906000526020600020908101928215610d22579160200282015b82811115610d225782518051610d12918491602090910190610d43565b5091602001919060010190610cf5565b50610cd1929150610dea565b5b80821115610cd15760008155600101610d2f565b82805482825590600052602060002090600701600890048101928215610cc55791602002820160005b83821115610dad57835183826101000a81548163ffffffff021916908360e01c02179055509260200192600401602081600301049283019260010302610d6c565b8015610ddd5782816101000a81549063ffffffff0219169055600401602081600301049283019260010302610dad565b5050610cd1929150610d2e565b80821115610cd1576000610dfe8282610e07565b50600101610dea565b5080546000825560070160089004906000526020600020908101906106439190610d2e565b600060208284031215610e3e57600080fd5b5035919050565b6020808252825173ffffffffffffffffffffffffffffffffffffffff16828201528281015161010060408401819052815161012085018190526000939283019184916101408701905b80841015610eae5784518252938501936001939093019290850190610e8e565b506040880151606088015260608801516080880152608088015160a088015260a08801519450610ee660c088018663ffffffff169052565b60c088015160ff1660e08881019190915290970151151595019490945250929392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610f3057600080fd5b919050565b600060208284031215610f4757600080fd5b610f5082610f0c565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715610fa957610fa9610f57565b60405290565b604051610100810167ffffffffffffffff81118282101715610fa957610fa9610f57565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561101a5761101a610f57565b604052919050565b600067ffffffffffffffff82111561103c5761103c610f57565b5060051b60200190565b600082601f83011261105757600080fd5b8135602061106c61106783611022565b610fd3565b82815260059290921b8401810191818101908684111561108b57600080fd5b8286015b848110156110ad576110a081610f0c565b835291830191830161108f565b509695505050505050565b600082601f8301126110c957600080fd5b813560206110d961106783611022565b828152600592831b85018201928282019190878511156110f857600080fd5b8387015b858110156111be57803567ffffffffffffffff81111561111c5760008081fd5b8801603f81018a1361112e5760008081fd5b85810135604061114061106783611022565b82815291851b8301810191888101908d84111561115d5760008081fd5b938201935b838510156111ad57843592507fffffffff000000000000000000000000000000000000000000000000000000008316831461119d5760008081fd5b8282529389019390890190611162565b8852505050938501935084016110fc565b5090979650505050505050565b6000602082840312156111dd57600080fd5b813567ffffffffffffffff808211156111f557600080fd5b9083019060e0828603121561120957600080fd5b611211610f86565b82358281111561122057600080fd5b61122c87828601611046565b82525061123b60208401610f0c565b602082015261124c60408401610f0c565b604082015261125d60608401610f0c565b606082015261126e60808401610f0c565b608082015261127f60a08401610f0c565b60a082015260c08301358281111561129657600080fd5b6112a2878286016110b8565b60c08301525095945050505050565b600080604083850312156112c457600080fd5b6112cd83610f0c565b946020939093013593505050565b600082601f8301126112ec57600080fd5b813560206112fc61106783611022565b82815260059290921b8401810191818101908684111561131b57600080fd5b8286015b848110156110ad578035835291830191830161131f565b803563ffffffff81168114610f3057600080fd5b803560ff81168114610f3057600080fd5b80358015158114610f3057600080fd5b6000610100828403121561137e57600080fd5b611386610faf565b905061139182610f0c565b8152602082013567ffffffffffffffff8111156113ad57600080fd5b6113b9848285016112db565b6020830152506040820135604082015260608201356060820152608082013560808201526113e960a08301611336565b60a08201526113fa60c0830161134a565b60c082015261140b60e0830161135b565b60e082015292915050565b60006020828403121561142857600080fd5b813567ffffffffffffffff81111561143f57600080fd5b6107b38482850161136b565b6000806040838503121561145e57600080fd5b823567ffffffffffffffff81111561147557600080fd5b6114818582860161136b565b95602094909401359450505050565b6000602082840312156114a257600080fd5b5051919050565b8183823760009101908152919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611540577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b506001019056fea26469706673582212204ff72c9506379b365f60e5d867f6c461ba30a9740fe129ec5f120ebfd05d922764736f6c63430008110033";

type ShopConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ShopConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Shop__factory extends ContractFactory {
  constructor(...args: ShopConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Shop";
  }

  deploy(
    input: ShopConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Shop> {
    return super.deploy(input, overrides || {}) as Promise<Shop>;
  }
  getDeployTransaction(
    input: ShopConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(input, overrides || {});
  }
  attach(address: string): Shop {
    return super.attach(address) as Shop;
  }
  connect(signer: Signer): Shop__factory {
    return super.connect(signer) as Shop__factory;
  }
  static readonly contractName: "Shop";
  public readonly contractName: "Shop";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShopInterface {
    return new utils.Interface(_abi) as ShopInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Shop {
    return new Contract(address, _abi, signerOrProvider) as Shop;
  }
}
