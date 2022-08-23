/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  IncubatorMethods,
  IncubatorMethodsInterface,
  IncubatorConstructor,
} from "../IncubatorMethods";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "methods",
            type: "address",
          },
          {
            internalType: "address",
            name: "randomness",
            type: "address",
          },
          {
            internalType: "address",
            name: "genetics",
            type: "address",
          },
          {
            internalType: "address",
            name: "gamification",
            type: "address",
          },
          {
            internalType: "address",
            name: "races",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "allowed",
            type: "address[]",
          },
          {
            internalType: "uint32",
            name: "secondsToMaturity",
            type: "uint32",
          },
        ],
        internalType: "struct IncubatorConstructor.Struct",
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
        name: "",
        type: "address",
      },
    ],
    name: "allowed",
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
        name: "hound1Id",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "maleParent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "femaleParent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "generation",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "birthDate",
            type: "uint256",
          },
          {
            internalType: "uint32[54]",
            name: "geneticSequence",
            type: "uint32[54]",
          },
          {
            internalType: "string",
            name: "extensionTraits",
            type: "string",
          },
        ],
        internalType: "struct HoundIdentity.Struct",
        name: "hound1",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "hound2Id",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "maleParent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "femaleParent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "generation",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "birthDate",
            type: "uint256",
          },
          {
            internalType: "uint32[54]",
            name: "geneticSequence",
            type: "uint32[54]",
          },
          {
            internalType: "string",
            name: "extensionTraits",
            type: "string",
          },
        ],
        internalType: "struct HoundIdentity.Struct",
        name: "hound2",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "theId",
        type: "uint256",
      },
    ],
    name: "breedHounds",
    outputs: [],
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
        name: "randomness",
        type: "address",
      },
      {
        internalType: "address",
        name: "genetics",
        type: "address",
      },
      {
        internalType: "address",
        name: "gamification",
        type: "address",
      },
      {
        internalType: "address",
        name: "races",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "secondsToMaturity",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "theId",
        type: "uint256",
      },
    ],
    name: "getIdentity",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "maleParent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "femaleParent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "generation",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "birthDate",
            type: "uint256",
          },
          {
            internalType: "uint32[54]",
            name: "geneticSequence",
            type: "uint32[54]",
          },
          {
            internalType: "string",
            name: "extensionTraits",
            type: "string",
          },
        ],
        internalType: "struct HoundIdentity.Struct",
        name: "",
        type: "tuple",
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
    name: "houndsIdentity",
    outputs: [
      {
        internalType: "uint256",
        name: "maleParent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "femaleParent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "generation",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "birthDate",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "extensionTraits",
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
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "methods",
            type: "address",
          },
          {
            internalType: "address",
            name: "randomness",
            type: "address",
          },
          {
            internalType: "address",
            name: "genetics",
            type: "address",
          },
          {
            internalType: "address",
            name: "gamification",
            type: "address",
          },
          {
            internalType: "address",
            name: "races",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "allowed",
            type: "address[]",
          },
          {
            internalType: "uint32",
            name: "secondsToMaturity",
            type: "uint32",
          },
        ],
        internalType: "struct IncubatorConstructor.Struct",
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
        internalType: "uint256",
        name: "theId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "maleParent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "femaleParent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "generation",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "birthDate",
            type: "uint256",
          },
          {
            internalType: "uint32[54]",
            name: "geneticSequence",
            type: "uint32[54]",
          },
          {
            internalType: "string",
            name: "extensionTraits",
            type: "string",
          },
        ],
        internalType: "struct HoundIdentity.Struct",
        name: "identity",
        type: "tuple",
      },
    ],
    name: "setIdentity",
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
  "0x60806040523480156200001157600080fd5b506040516200199d3803806200199d8339810160408190526200003491620003b7565b80620000403362000107565b8051600180546001600160a01b03199081166001600160a01b0393841617825560208085015160028054841691861691909117905560408501516003805484169186169190911790556060850151600480548416918616919091179055608085015160058054909316941693909317905560a083015180518493620000cb9260069291019062000216565b5060c091909101516006909101805463ffffffff191663ffffffff90921691909117905560a0810151620000ff9062000157565b5050620004db565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60005b81518110156200021257600860008383815181106200017d576200017d6200049d565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060009054906101000a900460ff161560086000848481518110620001cd57620001cd6200049d565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff19169115159190911790556200020a81620004b3565b90506200015a565b5050565b8280548282559060005260206000209081019282156200026e579160200282015b828111156200026e57825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062000237565b506200027c92915062000280565b5090565b5b808211156200027c576000815560010162000281565b634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b0381118282101715620002d257620002d262000297565b60405290565b80516001600160a01b0381168114620002f057600080fd5b919050565b600082601f8301126200030757600080fd5b815160206001600160401b038083111562000326576200032662000297565b8260051b604051601f19603f830116810181811084821117156200034e576200034e62000297565b6040529384528581018301938381019250878511156200036d57600080fd5b83870191505b8482101562000397576200038782620002d8565b8352918301919083019062000373565b979650505050505050565b805163ffffffff81168114620002f057600080fd5b600060208284031215620003ca57600080fd5b81516001600160401b0380821115620003e257600080fd5b9083019060e08286031215620003f757600080fd5b62000401620002ad565b6200040c83620002d8565b81526200041c60208401620002d8565b60208201526200042f60408401620002d8565b60408201526200044260608401620002d8565b60608201526200045560808401620002d8565b608082015260a0830151828111156200046d57600080fd5b6200047b87828601620002f5565b60a0830152506200048f60c08401620003a2565b60c082015295945050505050565b634e487b7160e01b600052603260045260246000fd5b600060018201620004d457634e487b7160e01b600052601160045260246000fd5b5060010190565b6114b280620004eb6000396000f3fe608060405234801561001057600080fd5b506004361061008e5760003560e01c8063715018a61461009357806385e3f0581461009d5780638da5cb5b146100c65780639033586a146100db578063bcb515ea146100ee578063c2115d4d14610101578063d63a8e1114610114578063d8de658714610147578063e0eb2c56146101c5578063f2fde38b146101e9575b600080fd5b61009b6101fc565b005b6100b06100ab366004610c44565b610210565b6040516100bd9190610ca3565b60405180910390f35b6100ce610354565b6040516100bd9190610d22565b61009b6100e9366004610f41565b610363565b61009b6100fc366004610fbf565b6105c0565b61009b61010f3660046110a2565b61069d565b610137610122366004611174565b60086020526000908152604090205460ff1681565b60405190151581526020016100bd565b60015460025460035460045460055460075461017d956001600160a01b0390811695811694811693811692169063ffffffff1686565b604080516001600160a01b0397881681529587166020870152938616938501939093529084166060840152909216608082015263ffffffff90911660a082015260c0016100bd565b6101d86101d3366004610c44565b610763565b6040516100bd959493929190611196565b61009b6101f7366004611174565b61081c565b610204610897565b61020e60006108f6565b565b610218610ae3565b6000828152600960209081526040808320815160c081018352815481526001820154938101939093526002810154838301526003810154606084015281516106c0810192839052929390926080850192909160048501916036918390855b82829054906101000a900463ffffffff1663ffffffff168152602001906004019060208260030104928301926001038202915080841161027657905050505050508152602001600b820180546102cb906111c1565b80601f01602080910402602001604051908101604052809291908181526020018280546102f7906111c1565b80156103445780601f1061031957610100808354040283529160200191610344565b820191906000526020600020905b81548152906001019060200180831161032757829003601f168201915b5050505050815250509050919050565b6000546001600160a01b031690565b3360009081526008602052604090205460ff1661037f57600080fd5b6002546000906001600160a01b031663abaa08b38588116103a45784608001516103aa565b86608001515b6040516020016103ba919061122a565b6040516020818303038152906040526040518263ffffffff1660e01b81526004016103e5919061123f565b602060405180830381865afa158015610402573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104269190611252565b60035460808088015190860151604051631f59d3b960e01b81529394506000936001600160a01b0390931692631f59d3b992610468929091879060040161126b565b6106c060405180830381865afa158015610486573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104aa9190611297565b6004805460405163056a3f0f60e11b81529293506001600160a01b031691630ad47e1e916104dc918791869101611301565b600060405180830381600087803b1580156104f657600080fd5b505af115801561050a573d6000803e3d6000fd5b505050506040518060c0016040528088815260200186815260200185604001518860400151610539919061132c565b815242602080830191909152604080830185905280518083018252600080825260609485019190915287815260098352819020845181559184015160018301558301516002820155908201516003820155608082015161059f9060048301906036610b1f565b5060a0820151600b8201906105b4908261138e565b50505050505050505050565b6105f660405180604001604052806015815260200174029b2ba1034b232b73a34ba3c9610333937b6901d1605d1b815250610946565b6105ff33610989565b3360009081526008602052604090205461061b9060ff166109cc565b3360009081526008602052604090205460ff1661063757600080fd5b600082815260096020908152604091829020835181559083015160018201559082015160028201556060820151600382015560808201518291906106819060048301906036610b1f565b5060a0820151600b820190610696908261138e565b5050505050565b6106a5610897565b8051600180546001600160a01b03199081166001600160a01b0393841617825560208085015160028054841691861691909117905560408501516003805484169186169190911790556060850151600480548416918616919091179055608085015160058054909316941693909317905560a08301518051849361072e92600692910190610bbb565b5060c091909101516006909101805463ffffffff191663ffffffff90921691909117905560a081015161076090610a0d565b50565b60096020526000908152604090208054600182015460028301546003840154600b850180549495939492939192610799906111c1565b80601f01602080910402602001604051908101604052809291908181526020018280546107c5906111c1565b80156108125780601f106107e757610100808354040283529160200191610812565b820191906000526020600020905b8154815290600101906020018083116107f557829003601f168201915b5050505050905085565b610824610897565b6001600160a01b03811661088e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b610760816108f6565b336108a0610354565b6001600160a01b03161461020e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610885565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6107608160405160240161095a919061123f565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b179052610ac2565b6107608160405160240161099d9190610d22565b60408051601f198184030181529190526020810180516001600160e01b031663161765e160e11b179052610ac2565b60405181151560248201526107609060440160408051601f198184030181529190526020810180516001600160e01b03166332458eed60e01b179052610ac2565b60005b8151811015610abe5760086000838381518110610a2f57610a2f61144d565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060009054906101000a900460ff161560086000848481518110610a7c57610a7c61144d565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916911515919091179055610ab781611463565b9050610a10565b5050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6040518060c0016040528060008152602001600081526020016000815260200160008152602001610b12610c10565b8152602001606081525090565b600783019183908215610bab5791602002820160005b83821115610b7957835183826101000a81548163ffffffff021916908363ffffffff1602179055509260200192600401602081600301049283019260010302610b35565b8015610ba95782816101000a81549063ffffffff0219169055600401602081600301049283019260010302610b79565b505b50610bb7929150610c2f565b5090565b828054828255906000526020600020908101928215610bab579160200282015b82811115610bab57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190610bdb565b604051806106c001604052806036906020820280368337509192915050565b5b80821115610bb75760008155600101610c30565b600060208284031215610c5657600080fd5b5035919050565b6000815180845260005b81811015610c8357602081850181015186830182015201610c67565b506000602082860101526020601f19601f83011685010191505092915050565b600060208083528351818401528084015160408401526040840151606084015260608401516080840152608084015160a0840160005b6036811015610cfc57825163ffffffff1682529183019190830190600101610cd9565b5050505060a083015161076083810152610d1a610780840182610c5d565b949350505050565b6001600160a01b0391909116815260200190565b634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b0381118282101715610d6e57610d6e610d36565b60405290565b60405160e081016001600160401b0381118282101715610d6e57610d6e610d36565b6040516106c081016001600160401b0381118282101715610d6e57610d6e610d36565b604051601f8201601f191681016001600160401b0381118282101715610de157610de1610d36565b604052919050565b63ffffffff8116811461076057600080fd5b8035610e0681610de9565b919050565b600082601f830112610e1c57600080fd5b81356001600160401b03811115610e3557610e35610d36565b610e48601f8201601f1916602001610db9565b818152846020838601011115610e5d57600080fd5b816020850160208301376000918101602001919091529392505050565b60006107608284031215610e8d57600080fd5b610e95610d4c565b90508135815260208083013581830152604083013560408301526060830135606083015283609f840112610ec857600080fd5b610ed0610d96565b80610740850186811115610ee357600080fd5b608086015b81811015610f08578035610efb81610de9565b8452928401928401610ee8565b506080850191909152359150506001600160401b03811115610f2957600080fd5b610f3584828501610e0b565b60a08301525092915050565b600080600080600060a08688031215610f5957600080fd5b8535945060208601356001600160401b0380821115610f7757600080fd5b610f8389838a01610e7a565b9550604088013594506060880135915080821115610fa057600080fd5b50610fad88828901610e7a565b95989497509295608001359392505050565b60008060408385031215610fd257600080fd5b8235915060208301356001600160401b03811115610fef57600080fd5b610ffb85828601610e7a565b9150509250929050565b80356001600160a01b0381168114610e0657600080fd5b600082601f83011261102d57600080fd5b813560206001600160401b0382111561104857611048610d36565b8160051b611057828201610db9565b928352848101820192828101908785111561107157600080fd5b83870192505b848310156110975761108883611005565b82529183019190830190611077565b979650505050505050565b6000602082840312156110b457600080fd5b81356001600160401b03808211156110cb57600080fd5b9083019060e082860312156110df57600080fd5b6110e7610d74565b6110f083611005565b81526110fe60208401611005565b602082015261110f60408401611005565b604082015261112060608401611005565b606082015261113160808401611005565b608082015260a08301358281111561114857600080fd5b6111548782860161101c565b60a08301525061116660c08401610dfb565b60c082015295945050505050565b60006020828403121561118657600080fd5b61118f82611005565b9392505050565b85815284602082015283604082015282606082015260a06080820152600061109760a0830184610c5d565b600181811c908216806111d557607f821691505b6020821081036111f557634e487b7160e01b600052602260045260246000fd5b50919050565b8060005b603681101561122457815163ffffffff168452602093840193909101906001016111ff565b50505050565b6106c0810161123982846111fb565b92915050565b60208152600061118f6020830184610c5d565b60006020828403121561126457600080fd5b5051919050565b610da0810161127a82866111fb565b6112886106c08301856111fb565b82610d80830152949350505050565b60006106c08083850312156112ab57600080fd5b83601f8401126112ba57600080fd5b6112c2610d96565b9083019080858311156112d457600080fd5b845b838110156112f75780516112e981610de9565b8352602092830192016112d6565b5095945050505050565b8281526106e0810161118f60208301846111fb565b634e487b7160e01b600052601160045260246000fd5b8082018082111561123957611239611316565b601f82111561138957600081815260208120601f850160051c810160208610156113665750805b601f850160051c820191505b8181101561138557828155600101611372565b5050505b505050565b81516001600160401b038111156113a7576113a7610d36565b6113bb816113b584546111c1565b8461133f565b602080601f8311600181146113f057600084156113d85750858301515b600019600386901b1c1916600185901b178555611385565b600085815260208120601f198616915b8281101561141f57888601518255948401946001909101908401611400565b508582101561143d5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052603260045260246000fd5b60006001820161147557611475611316565b506001019056fea2646970667358221220b1f4eb1e2ee15910e3c669250997ddca092265c14031965f5451ba41264dcb3664736f6c63430008100033";

type IncubatorMethodsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IncubatorMethodsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class IncubatorMethods__factory extends ContractFactory {
  constructor(...args: IncubatorMethodsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "IncubatorMethods";
  }

  deploy(
    input: IncubatorConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<IncubatorMethods> {
    return super.deploy(input, overrides || {}) as Promise<IncubatorMethods>;
  }
  getDeployTransaction(
    input: IncubatorConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(input, overrides || {});
  }
  attach(address: string): IncubatorMethods {
    return super.attach(address) as IncubatorMethods;
  }
  connect(signer: Signer): IncubatorMethods__factory {
    return super.connect(signer) as IncubatorMethods__factory;
  }
  static readonly contractName: "IncubatorMethods";
  public readonly contractName: "IncubatorMethods";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IncubatorMethodsInterface {
    return new utils.Interface(_abi) as IncubatorMethodsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IncubatorMethods {
    return new Contract(address, _abi, signerOrProvider) as IncubatorMethods;
  }
}
