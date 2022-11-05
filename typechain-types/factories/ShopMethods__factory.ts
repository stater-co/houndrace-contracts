/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ShopMethods,
  ShopMethodsInterface,
  ShopConstructor,
} from "../ShopMethods";

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
  "0x608060405260016002553480156200001657600080fd5b5060405162002225380380620022258339810160408190526200003991620005fc565b805160808201518291906200004e336200020b565b80518251146200005d57600080fd5b60005b8251811015620001765760005b82828151811062000082576200008262000732565b602002602001015151811015620001625760016000858481518110620000ac57620000ac62000732565b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020838381518110620000e957620000e962000732565b6020026020010151828151811062000105576200010562000732565b60209081029190910181015182546001810184556000938452919092206008820401805463ffffffff60079093166004026101000a928302191660e09390931c919091029190911790556200015a8162000748565b90506200006d565b506200016e8162000748565b905062000060565b50508151805183925060039162000193918391602001906200025b565b506020828101516001830180546001600160a01b039283166001600160a01b0319918216179091556040850151600285018054918416918316919091179055606085015160038501805491909316911617905560808301518051620001ff9260048501920190620002c5565b50905050505062000770565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054828255906000526020600020908101928215620002b3579160200282015b82811115620002b357825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906200027c565b50620002c192915062000325565b5090565b82805482825590600052602060002090810192821562000317579160200282015b82811115620003175782518051620003069184916020909101906200033c565b5091602001919060010190620002e6565b50620002c1929150620003ea565b5b80821115620002c1576000815560010162000326565b82805482825590600052602060002090600701600890048101928215620002b35791602002820160005b83821115620003a957835183826101000a81548163ffffffff021916908360e01c0217905550926020019260040160208160030104928301926001030262000366565b8015620003db5782816101000a81549063ffffffff0219169055600401602081600301049283019260010302620003a9565b5050620002c192915062000325565b80821115620002c15760006200040182826200040b565b50600101620003ea565b50805460008255600701600890049060005260206000209081019062000432919062000325565b50565b634e487b7160e01b600052604160045260246000fd5b60405160a081016001600160401b038111828210171562000470576200047062000435565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620004a157620004a162000435565b604052919050565b60006001600160401b03821115620004c557620004c562000435565b5060051b60200190565b80516001600160a01b0381168114620004e757600080fd5b919050565b600082601f830112620004fe57600080fd5b81516020620005176200051183620004a9565b62000476565b828152600592831b85018201928282019190878511156200053757600080fd5b8387015b85811015620005ef5780516001600160401b038111156200055c5760008081fd5b8801603f81018a136200056f5760008081fd5b858101516040620005846200051183620004a9565b82815291851b8301810191888101908d841115620005a25760008081fd5b938201935b83851015620005dd57845192506001600160e01b031983168314620005cc5760008081fd5b8282529389019390890190620005a7565b8852505050938501935084016200053b565b5090979650505050505050565b600060208083850312156200061057600080fd5b82516001600160401b03808211156200062857600080fd5b9084019060a082870312156200063d57600080fd5b620006476200044b565b8251828111156200065757600080fd5b8301601f810188136200066957600080fd5b80516200067a6200051182620004a9565b81815260059190911b8201860190868101908a8311156200069a57600080fd5b928701925b82841015620006c357620006b384620004cf565b825292870192908701906200069f565b845250620006d6915050838501620004cf565b84820152620006e860408401620004cf565b6040820152620006fb60608401620004cf565b606082015260808301519350818411156200071557600080fd5b6200072387858501620004ec565b60808201529695505050505050565b634e487b7160e01b600052603260045260246000fd5b6000600182016200076957634e487b7160e01b600052601160045260246000fd5b5060010190565b611aa580620007806000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063af640d0f1161005b578063af640d0f14610129578063c0d94d1a14610132578063d8de658714610145578063f2fde38b146101a957600080fd5b80635b19e2941461008d578063715018a6146100d65780638da5cb5b146100e0578063ad6a874514610108575b600080fd5b6100a061009b366004611635565b6101bc565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020015b60405180910390f35b6100de610202565b005b60005460405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100cd565b61011b610116366004611661565b610216565b6040519081526020016100cd565b61011b60025481565b6100de610140366004611868565b610f46565b6004546005546006546101729273ffffffffffffffffffffffffffffffffffffffff908116928116911683565b6040805173ffffffffffffffffffffffffffffffffffffffff948516815292841660208401529216918101919091526060016100cd565b6100de6101b7366004611661565b61100d565b600160205281600052604060002081815481106101d857600080fd5b9060005260206000209060089182820401919006600402915091509054906101000a900460e01b81565b61020a6110c6565b6102146000611147565b565b600080805b336000908152600160205260409020548110156102d457336000908152600160205260408120805491357fffffffff0000000000000000000000000000000000000000000000000000000016918390811061027857610278611989565b90600052602060002090600891828204019190066004029054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916036102c457600191505b6102cd816119b8565b905061021b565b50806102df57600080fd5b6000805b600254811015610f3e57600081815260096020526040902060050154640100000000900460ff166001036106c55760005b6000828152600960205260409020600101548110156106c35760008281526009602052604090206005015463ffffffff168311806103525750826001145b80156103775750600082815260096020526040902060050154600163ffffffff909116115b156106b35760008281526009602052604090206002015442108015906103ae57506000828152600960205260409020600301544211155b806103e257506000828152600960205260409020600201541580156103e25750600082815260096020526040902060030154155b156106b357600082815260096020526040902080546001909101805473ffffffffffffffffffffffffffffffffffffffff9092169162fdd58e9189918590811061042e5761042e611989565b6000918252602090912001546040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff90921660048301526024820152604401602060405180830381865afa9250505080156104e2575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526104df91810190611a17565b60015b61051c573d808015610510576040519150601f19603f3d011682016040523d82523d6000602084013e610515565b606091505b50506106b3565b80156106b15760008381526009602052604090206005015465010000000000900460ff161561069657600083815260096020526040902080546006546001909201805473ffffffffffffffffffffffffffffffffffffffff9283169363f242432a938c939116918790811061059357610593611989565b6000918252602080832090910154898352600990915260409182902060049081015492517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b16815273ffffffffffffffffffffffffffffffffffffffff958616818301529490931660248501526044840152606483015260a0608483015260a48201527f307830300000000000000000000000000000000000000000000000000000000060c482015260e401600060405180830381600087803b15801561065e57600080fd5b505af1158015610672573d6000803e3d6000fd5b50505060008481526009602052604090206005015463ffffffff1694506106b19050565b60008381526009602052604090206005015463ffffffff1693505b505b6106bc816119b8565b9050610314565b505b600081815260096020526040902060050154640100000000900460ff166002036108b75760008181526009602052604090206005015463ffffffff1682118061070e5750816001145b80156107335750600081815260096020526040902060050154600163ffffffff909116115b156108b757600081815260096020526040902060020154421080159061076a57506000818152600960205260409020600301544211155b8061079e575060008181526009602052604090206002015415801561079e5750600081815260096020526040902060030154155b156108b757600081815260096020526040908190205490517f4b341aed00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff878116600483015290911690634b341aed90602401602060405180830381865afa92505050801561085a575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261085791810190611a17565b60015b610894573d808015610888576040519150601f19603f3d011682016040523d82523d6000602084013e61088d565b606091505b50506108b7565b80156108b55760008281526009602052604090206005015463ffffffff1692505b505b600081815260096020526040902060050154640100000000900460ff16600303610ba95760008181526009602052604090206005015463ffffffff168211806109005750816001145b80156109255750600081815260096020526040902060050154600163ffffffff909116115b15610ba957600081815260096020526040902060020154421080159061095c57506000818152600960205260409020600301544211155b8061099057506000818152600960205260409020600201541580156109905750600081815260096020526040902060030154155b15610ba957600081815260096020526040908190205490517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8781166004830152909116906370a0823190602401602060405180830381865afa925050508015610a4c575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610a4991810190611a17565b60015b610a86573d808015610a7a576040519150601f19603f3d011682016040523d82523d6000602084013e610a7f565b606091505b5050610ba9565b8015610ba75760008281526009602052604090206005015465010000000000900460ff1615610b8c5760008281526009602052604090819020805460065460049283015493517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8b8116948201949094529083166024820152604481019390935216906323b872dd906064016020604051808303816000875af1158015610b48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6c9190611a30565b5060008281526009602052604090206005015463ffffffff169250610ba7565b60008281526009602052604090206005015463ffffffff1692505b505b600081815260096020526040812060050154640100000000900460ff169003610f2e5760005b600082815260096020526040902060010154811015610f2c5760008281526009602052604090206005015463ffffffff16831180610c0d5750826001145b8015610c325750600082815260096020526040902060050154600163ffffffff909116115b15610f1c576000828152600960205260409020600201544210801590610c6957506000828152600960205260409020600301544211155b80610c9d5750600082815260096020526040902060020154158015610c9d5750600082815260096020526040902060030154155b15610f1c57600082815260096020526040902080546001909101805473ffffffffffffffffffffffffffffffffffffffff90921691636352211e919084908110610ce957610ce9611989565b90600052602060002001546040518263ffffffff1660e01b8152600401610d1291815260200190565b602060405180830381865afa925050508015610d69575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610d6691810190611a52565b60015b610da3573d808015610d97576040519150601f19603f3d011682016040523d82523d6000602084013e610d9c565b606091505b5050610f1c565b8673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610f1a5760008381526009602052604090206005015465010000000000900460ff1615610eff57600083815260096020526040902080546006546001909201805473ffffffffffffffffffffffffffffffffffffffff928316936342842e0e938c9391169187908110610e4757610e47611989565b6000918252602090912001546040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b16815273ffffffffffffffffffffffffffffffffffffffff93841660048201529290911660248301526044820152606401600060405180830381600087803b158015610ec757600080fd5b505af1158015610edb573d6000803e3d6000fd5b50505060008481526009602052604090206005015463ffffffff169450610f1a9050565b60008381526009602052604090206005015463ffffffff1693505b505b610f25816119b8565b9050610bcf565b505b610f37816119b8565b90506102e3565b509392505050565b610f4e6110c6565b805180518291600391610f68918391602090910190611422565b5060208281015160018301805473ffffffffffffffffffffffffffffffffffffffff9283167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091556040850151600285018054918416918316919091179055606085015160038501805491909316911617905560808301518051610ff792600485019201906114ac565b50508151608083015161100a92506111bc565b50565b6110156110c6565b73ffffffffffffffffffffffffffffffffffffffff81166110bd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61100a81611147565b60005473ffffffffffffffffffffffffffffffffffffffff163314610214576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016110b4565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80518251146111ca57600080fd5b60005b825181101561141d5760005b8282815181106111eb576111eb611989565b60200260200101515181101561140c576001600085848151811061121157611211611989565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050811061132f576001600085848151811061127357611273611989565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208383815181106112c7576112c7611989565b602002602001015182815181106112e0576112e0611989565b60209081029190910181015182546001810184556000938452919092206008820401805463ffffffff60079093166004026101000a928302191660e09390931c919091029190911790556113fc565b82828151811061134157611341611989565b6020026020010151818151811061135a5761135a611989565b60200260200101516001600086858151811061137857611378611989565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481106113cb576113cb611989565b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908360e01c02179055505b611405816119b8565b90506111d9565b50611416816119b8565b90506111cd565b505050565b82805482825590600052602060002090810192821561149c579160200282015b8281111561149c57825182547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909116178255602090920191600190910190611442565b506114a8929150611505565b5090565b8280548282559060005260206000209081019282156114f9579160200282015b828111156114f957825180516114e991849160209091019061151a565b50916020019190600101906114cc565b506114a89291506115c1565b5b808211156114a85760008155600101611506565b8280548282559060005260206000209060070160089004810192821561149c5791602002820160005b8382111561158457835183826101000a81548163ffffffff021916908360e01c02179055509260200192600401602081600301049283019260010302611543565b80156115b45782816101000a81549063ffffffff0219169055600401602081600301049283019260010302611584565b50506114a8929150611505565b808211156114a85760006115d582826115de565b506001016115c1565b50805460008255600701600890049060005260206000209081019061100a9190611505565b73ffffffffffffffffffffffffffffffffffffffff8116811461100a57600080fd5b803561163081611603565b919050565b6000806040838503121561164857600080fd5b823561165381611603565b946020939093013593505050565b60006020828403121561167357600080fd5b813561167e81611603565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160a0810167ffffffffffffffff811182821017156116d7576116d7611685565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561172457611724611685565b604052919050565b600067ffffffffffffffff82111561174657611746611685565b5060051b60200190565b600082601f83011261176157600080fd5b813560206117766117718361172c565b6116dd565b828152600592831b850182019282820191908785111561179557600080fd5b8387015b8581101561185b57803567ffffffffffffffff8111156117b95760008081fd5b8801603f81018a136117cb5760008081fd5b8581013560406117dd6117718361172c565b82815291851b8301810191888101908d8411156117fa5760008081fd5b938201935b8385101561184a57843592507fffffffff000000000000000000000000000000000000000000000000000000008316831461183a5760008081fd5b82825293890193908901906117ff565b885250505093850193508401611799565b5090979650505050505050565b6000602080838503121561187b57600080fd5b823567ffffffffffffffff8082111561189357600080fd5b9084019060a082870312156118a757600080fd5b6118af6116b4565b8235828111156118be57600080fd5b8301601f810188136118cf57600080fd5b80356118dd6117718261172c565b81815260059190911b8201860190868101908a8311156118fc57600080fd5b928701925b8284101561192357833561191481611603565b82529287019290870190611901565b845250611934915050838501611625565b8482015261194460408401611625565b604082015261195560608401611625565b6060820152608083013593508184111561196e57600080fd5b61197a87858501611750565b60808201529695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611a10577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b600060208284031215611a2957600080fd5b5051919050565b600060208284031215611a4257600080fd5b8151801515811461167e57600080fd5b600060208284031215611a6457600080fd5b815161167e8161160356fea2646970667358221220e07cff4a55cefe58c3fe8d458a3fa8553d1ad8da802120b604b62ff35c312aa664736f6c63430008110033";

type ShopMethodsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ShopMethodsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ShopMethods__factory extends ContractFactory {
  constructor(...args: ShopMethodsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ShopMethods";
  }

  deploy(
    input: ShopConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ShopMethods> {
    return super.deploy(input, overrides || {}) as Promise<ShopMethods>;
  }
  getDeployTransaction(
    input: ShopConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(input, overrides || {});
  }
  attach(address: string): ShopMethods {
    return super.attach(address) as ShopMethods;
  }
  connect(signer: Signer): ShopMethods__factory {
    return super.connect(signer) as ShopMethods__factory;
  }
  static readonly contractName: "ShopMethods";
  public readonly contractName: "ShopMethods";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShopMethodsInterface {
    return new utils.Interface(_abi) as ShopMethodsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ShopMethods {
    return new Contract(address, _abi, signerOrProvider) as ShopMethods;
  }
}
