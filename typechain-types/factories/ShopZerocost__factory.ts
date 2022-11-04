/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ShopZerocost,
  ShopZerocostInterface,
  ShopConstructor,
} from "../ShopZerocost";

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
            name: "alphadune",
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
    name: "checkDiscount",
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
        name: "alphadune",
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
            name: "alphadune",
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
  "0x608060405260016002553480156200001657600080fd5b50604051620026ab380380620026ab83398181016040528101906200003c919062000abb565b8080600001518160800151620000676200005b620002d960201b60201c565b620002e160201b60201c565b80518251146200007657600080fd5b60005b8251811015620001b55760005b8282815181106200009c576200009b62000b0c565b5b602002602001015151811015620001a05760016000858481518110620000c757620000c662000b0c565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208383815181106200011f576200011e62000b0c565b5b602002602001015182815181106200013c576200013b62000b0c565b5b602002602001015190806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908360e01c021790555080620001989062000b74565b905062000086565b5080620001ad9062000b74565b905062000079565b5050508060036000820151816000019080519060200190620001d9929190620003a5565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506080820151816004019080519060200190620002cd92919062000434565b50905050505062000bc1565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b82805482825590600052602060002090810192821562000421579160200282015b82811115620004205782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190620003c6565b5b5090506200043091906200049b565b5090565b82805482825590600052602060002090810192821562000488579160200282015b828111156200048757825182908051906020019062000476929190620004ba565b509160200191906001019062000455565b5b5090506200049791906200056e565b5090565b5b80821115620004b65760008160009055506001016200049c565b5090565b828054828255906000526020600020906007016008900481019282156200055b5791602002820160005b838211156200052757835183826101000a81548163ffffffff021916908360e01c02179055509260200192600401602081600301049283019260010302620004e4565b8015620005595782816101000a81549063ffffffff021916905560040160208160030104928301926001030262000527565b505b5090506200056a91906200049b565b5090565b5b8082111562000592576000818162000588919062000596565b506001016200056f565b5090565b508054600082556007016008900490600052602060002090810190620005bd91906200049b565b50565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200062482620005d9565b810181811067ffffffffffffffff82111715620006465762000645620005ea565b5b80604052505050565b60006200065b620005c0565b905062000669828262000619565b919050565b600080fd5b600080fd5b600067ffffffffffffffff821115620006965762000695620005ea565b5b602082029050602081019050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620006d982620006ac565b9050919050565b620006eb81620006cc565b8114620006f757600080fd5b50565b6000815190506200070b81620006e0565b92915050565b600062000728620007228462000678565b6200064f565b905080838252602082019050602084028301858111156200074e576200074d620006a7565b5b835b818110156200077b5780620007668882620006fa565b84526020840193505060208101905062000750565b5050509392505050565b600082601f8301126200079d576200079c62000673565b5b8151620007af84826020860162000711565b91505092915050565b600067ffffffffffffffff821115620007d657620007d5620005ea565b5b602082029050602081019050919050565b600067ffffffffffffffff821115620008055762000804620005ea565b5b602082029050602081019050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6200084d8162000816565b81146200085957600080fd5b50565b6000815190506200086d8162000842565b92915050565b60006200088a6200088484620007e7565b6200064f565b90508083825260208201905060208402830185811115620008b057620008af620006a7565b5b835b81811015620008dd5780620008c888826200085c565b845260208401935050602081019050620008b2565b5050509392505050565b600082601f830112620008ff57620008fe62000673565b5b81516200091184826020860162000873565b91505092915050565b6000620009316200092b84620007b8565b6200064f565b90508083825260208201905060208402830185811115620009575762000956620006a7565b5b835b81811015620009a557805167ffffffffffffffff81111562000980576200097f62000673565b5b8086016200098f8982620008e7565b8552602085019450505060208101905062000959565b5050509392505050565b600082601f830112620009c757620009c662000673565b5b8151620009d98482602086016200091a565b91505092915050565b600060a08284031215620009fb57620009fa620005d4565b5b62000a0760a06200064f565b9050600082015167ffffffffffffffff81111562000a2a5762000a296200066e565b5b62000a388482850162000785565b600083015250602062000a4e84828501620006fa565b602083015250604062000a6484828501620006fa565b604083015250606062000a7a84828501620006fa565b606083015250608082015167ffffffffffffffff81111562000aa15762000aa06200066e565b5b62000aaf84828501620009af565b60808301525092915050565b60006020828403121562000ad45762000ad3620005ca565b5b600082015167ffffffffffffffff81111562000af55762000af4620005cf565b5b62000b0384828501620009e2565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b600062000b818262000b6a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820362000bb65762000bb562000b3b565b5b600182019050919050565b611ada8062000bd16000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063af640d0f1161005b578063af640d0f14610115578063c0d94d1a14610133578063d8de65871461014f578063f2fde38b1461016f57610088565b80635b19e2941461008d578063715018a6146100bd57806385e87de2146100c75780638da5cb5b146100f7575b600080fd5b6100a760048036038101906100a291906112b4565b61018b565b6040516100b4919061132f565b60405180910390f35b6100c56101d1565b005b6100e160048036038101906100dc919061134a565b6101e5565b6040516100ee9190611386565b60405180910390f35b6100ff6109ef565b60405161010c91906113b0565b60405180910390f35b61011d610a18565b60405161012a9190611386565b60405180910390f35b61014d600480360381019061014891906117c2565b610a1e565b005b610157610b50565b6040516101669392919061180b565b60405180910390f35b6101896004803603810190610184919061134a565b610bc8565b005b600160205281600052604060002081815481106101a757600080fd5b9060005260206000209060089182820401919006600402915091509054906101000a900460e01b81565b6101d9610c4b565b6101e36000610cc9565b565b60008060005b6002548110156109e55760016009600083815260200190815260200160002060040160049054906101000a900460ff1660ff16036104aa5760005b60096000838152602001908152602001600020600101805490508110156104a8576009600083815260200190815260200160002060040160009054906101000a900463ffffffff1663ffffffff168311806102815750600183145b80156102b9575060016009600084815260200190815260200160002060040160009054906101000a900463ffffffff1663ffffffff16115b15610497576009600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1662fdd58e8660096000868152602001908152602001600020600101848154811061033857610337611842565b5b90600052602060002001546040518363ffffffff1660e01b8152600401610360929190611871565b602060405180830381865afa92505050801561039a57506040513d601f19601f8201168201806040525081019061039791906118af565b60015b6103d6573d80600081146103ca576040519150601f19603f3d011682016040523d82523d6000602084013e6103cf565b606091505b5050610496565b6000811115610494574260096000858152602001908152602001600020600201541115801561041b575042600960008581526020019081526020016000206003015410155b8061045e57506000600960008581526020019081526020016000206002015414801561045d575060006009600085815260200190815260200160002060030154145b5b15610493576009600084815260200190815260200160002060040160009054906101000a900463ffffffff1663ffffffff1693505b5b505b5b806104a19061190b565b9050610226565b505b60026009600083815260200190815260200160002060040160049054906101000a900460ff1660ff16036106f6576009600082815260200190815260200160002060040160009054906101000a900463ffffffff1663ffffffff168211806105125750600182145b801561054a575060016009600083815260200190815260200160002060040160009054906101000a900463ffffffff1663ffffffff16115b156106f5576009600082815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634b341aed856040518263ffffffff1660e01b81526004016105be91906113b0565b602060405180830381865afa9250505080156105f857506040513d601f19601f820116820180604052508101906105f591906118af565b60015b610634573d8060008114610628576040519150601f19603f3d011682016040523d82523d6000602084013e61062d565b606091505b50506106f4565b60008111156106f25742600960008481526020019081526020016000206002015411158015610679575042600960008481526020019081526020016000206003015410155b806106bc5750600060096000848152602001908152602001600020600201541480156106bb575060006009600084815260200190815260200160002060030154145b5b156106f1576009600083815260200190815260200160002060040160009054906101000a900463ffffffff1663ffffffff1692505b5b505b5b5b60006009600083815260200190815260200160002060040160049054906101000a900460ff1660ff16036109d45760005b60096000838152602001908152602001600020600101805490508110156109d2576009600083815260200190815260200160002060040160009054906101000a900463ffffffff1663ffffffff168311806107825750600183145b80156107ba575060016009600084815260200190815260200160002060040160009054906101000a900463ffffffff1663ffffffff16115b156109c1576009600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e60096000858152602001908152602001600020600101838154811061083957610838611842565b5b90600052602060002001546040518263ffffffff1660e01b81526004016108609190611386565b602060405180830381865afa92505050801561089a57506040513d601f19601f820116820180604052508101906108979190611968565b60015b6108d6573d80600081146108ca576040519150601f19603f3d011682016040523d82523d6000602084013e6108cf565b606091505b50506109c0565b8573ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036109be5742600960008581526020019081526020016000206002015411158015610945575042600960008581526020019081526020016000206003015410155b80610988575060006009600085815260200190815260200160002060020154148015610987575060006009600085815260200190815260200160002060030154145b5b156109bd576009600084815260200190815260200160002060040160009054906101000a900463ffffffff1663ffffffff1693505b5b505b5b806109cb9061190b565b9050610727565b505b806109de9061190b565b90506101eb565b5080915050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60025481565b610a26610c4b565b8060036000820151816000019080519060200190610a4592919061100c565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506080820151816004019080519060200190610b37929190611096565b50905050610b4d81600001518260800151610d8d565b50565b60038060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905083565b610bd0610c4b565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610c3f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3690611a18565b60405180910390fd5b610c4881610cc9565b50565b610c53611004565b73ffffffffffffffffffffffffffffffffffffffff16610c716109ef565b73ffffffffffffffffffffffffffffffffffffffff1614610cc7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cbe90611a84565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8051825114610d9b57600080fd5b60005b8251811015610fff5760005b828281518110610dbd57610dbc611842565b5b602002602001015151811015610fed5760016000858481518110610de457610de3611842565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490508110610f0b5760016000858481518110610e4757610e46611842565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020838381518110610e9c57610e9b611842565b5b60200260200101518281518110610eb657610eb5611842565b5b602002602001015190806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908360e01c0217905550610fdc565b828281518110610f1e57610f1d611842565b5b60200260200101518181518110610f3857610f37611842565b5b602002602001015160016000868581518110610f5757610f56611842565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610fab57610faa611842565b5b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908360e01c02179055505b80610fe69061190b565b9050610daa565b5080610ff89061190b565b9050610d9e565b505050565b600033905090565b828054828255906000526020600020908101928215611085579160200282015b828111156110845782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509160200191906001019061102c565b5b50905061109291906110f6565b5090565b8280548282559060005260206000209081019282156110e5579160200282015b828111156110e45782518290805190602001906110d4929190611113565b50916020019190600101906110b6565b5b5090506110f291906111c0565b5090565b5b8082111561110f5760008160009055506001016110f7565b5090565b828054828255906000526020600020906007016008900481019282156111af5791602002820160005b8382111561117d57835183826101000a81548163ffffffff021916908360e01c0217905550926020019260040160208160030104928301926001030261113c565b80156111ad5782816101000a81549063ffffffff021916905560040160208160030104928301926001030261117d565b505b5090506111bc91906110f6565b5090565b5b808211156111e057600081816111d791906111e4565b506001016111c1565b5090565b50805460008255600701600890049060005260206000209081019061120991906110f6565b50565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061124b82611220565b9050919050565b61125b81611240565b811461126657600080fd5b50565b60008135905061127881611252565b92915050565b6000819050919050565b6112918161127e565b811461129c57600080fd5b50565b6000813590506112ae81611288565b92915050565b600080604083850312156112cb576112ca611216565b5b60006112d985828601611269565b92505060206112ea8582860161129f565b9150509250929050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611329816112f4565b82525050565b60006020820190506113446000830184611320565b92915050565b6000602082840312156113605761135f611216565b5b600061136e84828501611269565b91505092915050565b6113808161127e565b82525050565b600060208201905061139b6000830184611377565b92915050565b6113aa81611240565b82525050565b60006020820190506113c560008301846113a1565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611419826113d0565b810181811067ffffffffffffffff82111715611438576114376113e1565b5b80604052505050565b600061144b61120c565b90506114578282611410565b919050565b600080fd5b600080fd5b600067ffffffffffffffff821115611481576114806113e1565b5b602082029050602081019050919050565b600080fd5b60006114aa6114a584611466565b611441565b905080838252602082019050602084028301858111156114cd576114cc611492565b5b835b818110156114f657806114e28882611269565b8452602084019350506020810190506114cf565b5050509392505050565b600082601f83011261151557611514611461565b5b8135611525848260208601611497565b91505092915050565b600067ffffffffffffffff821115611549576115486113e1565b5b602082029050602081019050919050565b600067ffffffffffffffff821115611575576115746113e1565b5b602082029050602081019050919050565b61158f816112f4565b811461159a57600080fd5b50565b6000813590506115ac81611586565b92915050565b60006115c56115c08461155a565b611441565b905080838252602082019050602084028301858111156115e8576115e7611492565b5b835b8181101561161157806115fd888261159d565b8452602084019350506020810190506115ea565b5050509392505050565b600082601f8301126116305761162f611461565b5b81356116408482602086016115b2565b91505092915050565b600061165c6116578461152e565b611441565b9050808382526020820190506020840283018581111561167f5761167e611492565b5b835b818110156116c657803567ffffffffffffffff8111156116a4576116a3611461565b5b8086016116b1898261161b565b85526020850194505050602081019050611681565b5050509392505050565b600082601f8301126116e5576116e4611461565b5b81356116f5848260208601611649565b91505092915050565b600060a08284031215611714576117136113cb565b5b61171e60a0611441565b9050600082013567ffffffffffffffff81111561173e5761173d61145c565b5b61174a84828501611500565b600083015250602061175e84828501611269565b602083015250604061177284828501611269565b604083015250606061178684828501611269565b606083015250608082013567ffffffffffffffff8111156117aa576117a961145c565b5b6117b6848285016116d0565b60808301525092915050565b6000602082840312156117d8576117d7611216565b5b600082013567ffffffffffffffff8111156117f6576117f561121b565b5b611802848285016116fe565b91505092915050565b600060608201905061182060008301866113a1565b61182d60208301856113a1565b61183a60408301846113a1565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060408201905061188660008301856113a1565b6118936020830184611377565b9392505050565b6000815190506118a981611288565b92915050565b6000602082840312156118c5576118c4611216565b5b60006118d38482850161189a565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006119168261127e565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611948576119476118dc565b5b600182019050919050565b60008151905061196281611252565b92915050565b60006020828403121561197e5761197d611216565b5b600061198c84828501611953565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611a02602683611995565b9150611a0d826119a6565b604082019050919050565b60006020820190508181036000830152611a31816119f5565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611a6e602083611995565b9150611a7982611a38565b602082019050919050565b60006020820190508181036000830152611a9d81611a61565b905091905056fea26469706673582212200696c010cce909483e866a7145a3846a046209ad7a26771a2289bcf4d82cea3364736f6c63430008110033";

type ShopZerocostConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ShopZerocostConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ShopZerocost__factory extends ContractFactory {
  constructor(...args: ShopZerocostConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ShopZerocost";
  }

  deploy(
    input: ShopConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ShopZerocost> {
    return super.deploy(input, overrides || {}) as Promise<ShopZerocost>;
  }
  getDeployTransaction(
    input: ShopConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(input, overrides || {});
  }
  attach(address: string): ShopZerocost {
    return super.attach(address) as ShopZerocost;
  }
  connect(signer: Signer): ShopZerocost__factory {
    return super.connect(signer) as ShopZerocost__factory;
  }
  static readonly contractName: "ShopZerocost";
  public readonly contractName: "ShopZerocost";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShopZerocostInterface {
    return new utils.Interface(_abi) as ShopZerocostInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ShopZerocost {
    return new Contract(address, _abi, signerOrProvider) as ShopZerocost;
  }
}
