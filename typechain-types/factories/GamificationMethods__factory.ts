/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GamificationMethods,
  GamificationMethodsInterface,
  Constructor,
} from "../GamificationMethods";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "breedingFeeCurrency",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "lastBreed",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "breedingCooldown",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "breedingFee",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "availableToBreed",
                type: "bool",
              },
            ],
            internalType: "struct HoundBreeding.Struct",
            name: "defaultBreeding",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "staminaLastUpdate",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "staminaRefill1x",
                type: "uint256",
              },
              {
                internalType: "uint32",
                name: "staminaValue",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "staminaPerHour",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "staminaCap",
                type: "uint32",
              },
            ],
            internalType: "struct HoundStamina.Struct",
            name: "defaultStamina",
            type: "tuple",
          },
          {
            internalType: "address[]",
            name: "allowed",
            type: "address[]",
          },
          {
            internalType: "address",
            name: "restricted",
            type: "address",
          },
          {
            internalType: "address",
            name: "methods",
            type: "address",
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
    inputs: [],
    name: "control",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "breedingFeeCurrency",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "lastBreed",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "breedingCooldown",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "breedingFee",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "availableToBreed",
            type: "bool",
          },
        ],
        internalType: "struct HoundBreeding.Struct",
        name: "defaultBreeding",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "staminaLastUpdate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "staminaRefill1x",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "staminaValue",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "staminaPerHour",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "staminaCap",
            type: "uint32",
          },
        ],
        internalType: "struct HoundStamina.Struct",
        name: "defaultStamina",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "restricted",
        type: "address",
      },
      {
        internalType: "address",
        name: "methods",
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
        name: "id",
        type: "uint256",
      },
    ],
    name: "getBreeding",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "breedingFeeCurrency",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "lastBreed",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "breedingCooldown",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "breedingFee",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "availableToBreed",
            type: "bool",
          },
        ],
        internalType: "struct HoundBreeding.Struct",
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
        name: "id",
        type: "uint256",
      },
    ],
    name: "getStamina",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "staminaLastUpdate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "staminaRefill1x",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "staminaValue",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "staminaPerHour",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "staminaCap",
            type: "uint32",
          },
        ],
        internalType: "struct HoundStamina.Struct",
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
        name: "id",
        type: "uint256",
      },
    ],
    name: "getStaminaBreeding",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "staminaLastUpdate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "staminaRefill1x",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "staminaValue",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "staminaPerHour",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "staminaCap",
            type: "uint32",
          },
        ],
        internalType: "struct HoundStamina.Struct",
        name: "",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "breedingFeeCurrency",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "lastBreed",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "breedingCooldown",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "breedingFee",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "availableToBreed",
            type: "bool",
          },
        ],
        internalType: "struct HoundBreeding.Struct",
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
    name: "houndsBreeding",
    outputs: [
      {
        internalType: "address",
        name: "breedingFeeCurrency",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "lastBreed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "breedingCooldown",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "breedingFee",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "availableToBreed",
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
    name: "houndsStamina",
    outputs: [
      {
        internalType: "uint256",
        name: "staminaLastUpdate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "staminaRefill1x",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "staminaValue",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "staminaPerHour",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "staminaCap",
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
        name: "onId",
        type: "uint256",
      },
      {
        internalType: "uint32[54]",
        name: "genetics",
        type: "uint32[54]",
      },
    ],
    name: "initializeHoundGamingStats",
    outputs: [],
    stateMutability: "nonpayable",
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
            components: [
              {
                internalType: "address",
                name: "breedingFeeCurrency",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "lastBreed",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "breedingCooldown",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "breedingFee",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "availableToBreed",
                type: "bool",
              },
            ],
            internalType: "struct HoundBreeding.Struct",
            name: "defaultBreeding",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "staminaLastUpdate",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "staminaRefill1x",
                type: "uint256",
              },
              {
                internalType: "uint32",
                name: "staminaValue",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "staminaPerHour",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "staminaCap",
                type: "uint32",
              },
            ],
            internalType: "struct HoundStamina.Struct",
            name: "defaultStamina",
            type: "tuple",
          },
          {
            internalType: "address[]",
            name: "allowed",
            type: "address[]",
          },
          {
            internalType: "address",
            name: "restricted",
            type: "address",
          },
          {
            internalType: "address",
            name: "methods",
            type: "address",
          },
        ],
        internalType: "struct Constructor.Struct",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620018a5380380620018a5833981016040819052620000349162000483565b80620000403362000167565b80518051600180546001600160a01b039092166001600160a01b03199092169190911781556020808301516002556040808401516003556060808501516004556080948501516005805491151560ff1990921691909117905582860151805160065580840151600755808301516008805493830151929097015163ffffffff908116680100000000000000000263ffffffff60401b19938216640100000000026001600160401b031990951691909216179290921716179093559183015180518493620001139260099291019062000276565b5060608201516009820180546001600160a01b03199081166001600160a01b0393841617909155608090930151600a9092018054909316911617905560408101516200015f90620001b7565b5050620005de565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60005b81518110156200027257600c6000838381518110620001dd57620001dd620005a0565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060009054906101000a900460ff1615600c60008484815181106200022d576200022d620005a0565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff19169115159190911790556200026a81620005b6565b9050620001ba565b5050565b828054828255906000526020600020908101928215620002ce579160200282015b82811115620002ce57825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062000297565b50620002dc929150620002e0565b5090565b5b80821115620002dc5760008155600101620002e1565b634e487b7160e01b600052604160045260246000fd5b60405160a081016001600160401b0381118282101715620003325762000332620002f7565b60405290565b80516001600160a01b03811681146200035057600080fd5b919050565b805163ffffffff811681146200035057600080fd5b600060a082840312156200037d57600080fd5b620003876200030d565b90508151815260208201516020820152620003a56040830162000355565b6040820152620003b86060830162000355565b6060820152620003cb6080830162000355565b608082015292915050565b600082601f830112620003e857600080fd5b815160206001600160401b0380831115620004075762000407620002f7565b8260051b604051601f19603f830116810181811084821117156200042f576200042f620002f7565b6040529384528581018301938381019250878511156200044e57600080fd5b83870191505b848210156200047857620004688262000338565b8352918301919083019062000454565b979650505050505050565b6000602082840312156200049657600080fd5b81516001600160401b0380821115620004ae57600080fd5b908301908185036101a0811215620004c557600080fd5b620004cf6200030d565b60a0821215620004de57600080fd5b620004e86200030d565b9150620004f58462000338565b8252602084015160208301526040840151604083015260608401516060830152608084015180151581146200052957600080fd5b6080830152818152620005408760a086016200036a565b60208201526101408401519150828211156200055b57600080fd5b6200056987838601620003d6565b60408201526200057d610160850162000338565b606082015262000591610180850162000338565b60808201529695505050505050565b634e487b7160e01b600052603260045260246000fd5b600060018201620005d757634e487b7160e01b600052601160045260246000fd5b5060010190565b6112b780620005ee6000396000f3fe608060405234801561001057600080fd5b50600436106100a45760003560e01c80630ad47e1e146100a95780632c85e863146100be578063408c3b2e146100e85780635815d8bf146101085780636f27089f14610186578063715018a6146102045780638da5cb5b1461020c578063d63a8e111461022c578063d8de65871461025f578063dcdb3ee014610315578063e622563014610328578063f2fde38b14610348575b600080fd5b6100bc6100b7366004610d82565b61035b565b005b6100d16100cc366004610e14565b610799565b6040516100df929190610ea3565b60405180910390f35b6100fb6100f6366004610e14565b61085a565b6040516100df9190610ec6565b610152610116366004610e14565b600e60205260009081526040902080546001820154600283015460038401546004909401546001600160a01b0390931693919290919060ff1685565b604080516001600160a01b03909616865260208601949094529284019190915260608301521515608082015260a0016100df565b6101d1610194366004610e14565b600d6020526000908152604090208054600182015460029092015490919063ffffffff80821691600160201b8104821691600160401b9091041685565b60408051958652602086019490945263ffffffff928316938501939093528116606084015216608082015260a0016100df565b6100bc6108bf565b6102146108d3565b6040516001600160a01b0390911681526020016100df565b61024f61023a366004610ef1565b600c6020526000908152604090205460ff1681565b60405190151581526020016100df565b6040805160a080820183526001546001600160a01b0390811683526002546020808501919091526003548486015260045460608086019190915260055460ff1615156080808701919091528651948501875260065485526007549285019290925260085463ffffffff80821697860197909752600160201b8104871691850191909152600160401b900490941693820193909352600a54600b5461030594918216911684565b6040516100df9493929190610f0c565b6100bc610323366004611051565b6108e2565b61033b610336366004610e14565b610a01565b6040516100df919061115a565b6100bc610356366004610ef1565b610a67565b336000908152600c602052604090205460ff1661037757600080fd5b6040805160a0810190915260008152602081016003836035602002015163ffffffff16116103d9576106a083015160075463ffffffff909116906103bd90606490611194565b6103c791906111b6565b6007546103d491906111d5565b61040e565b6106a083015160075463ffffffff909116906103f790606490611194565b61040191906111b6565b60075461040e91906111e8565b81526020016006836034602002015163ffffffff161161044657610680830151600854610441919063ffffffff166111fb565b61046b565b6106808301516008546006916104619163ffffffff1661121f565b61046b91906111fb565b63ffffffff168152602001826033602002015163ffffffff166009146104a057600854600160201b900463ffffffff166104a3565b60025b63ffffffff1681526020016006836032602002015163ffffffff16116104e8576106408301516008546104e39190600160401b900463ffffffff166111fb565b61051f565b6106408301516104fa906006906111fb565b61050590600561123c565b60085461051f9190600160401b900463ffffffff1661121f565b63ffffffff9081169091526000848152600d602090815260408083208551815585830151600180830191909155868301516002909201805460608901516080909901518816600160401b0263ffffffff60401b19998916600160201b026001600160401b03199092169490981693909317929092179690961694909417909355825160a0810184528281529081019190915291908201908390602002015163ffffffff16600114610639576003836032602002015163ffffffff16106105e6576000610627565b6106408301516105f790600161121f565b61060290600861123c565b63ffffffff16606460016000016002015461061d9190611194565b61062791906111b6565b60035461063491906111d5565b6106a3565b6003836032602002015163ffffffff1610610655576000610696565b61064083015161066690600161121f565b61067190600861123c565b63ffffffff16606460016000016002015461068c9190611194565b61069691906111b6565b6003546106a391906111e8565b81526020016003836035602002015163ffffffff16106106f7576106a083015160045463ffffffff909116906106db90606490611194565b6106e591906111b6565b6004546106f291906111d5565b61072c565b6106a083015160045463ffffffff9091169061071590606490611194565b61071f91906111b6565b60045461072c91906111e8565b815260006020918201819052938452600e8152604093849020825181546001600160a01b0319166001600160a01b0390911617815590820151600182015592810151600284015560608101516003840155608001516004909201805460ff19169215159290921790915550565b6107a1610c49565b6107a9610c77565b50506000908152600d60209081526040808320600e835292819020815160a08082018452855482526001808701548387015260029687015463ffffffff80821685880152600160201b82048116606080870191909152600160401b909204166080808601919091528651938401875285546001600160a01b03168452918501549683019690965295830154938101939093526003820154938301939093526004015460ff1615159281019290925291565b610862610c77565b506000908152600e6020908152604091829020825160a08101845281546001600160a01b031681526001820154928101929092526002810154928201929092526003820154606082015260049091015460ff161515608082015290565b6108c7610ae5565b6108d16000610b44565b565b6000546001600160a01b031690565b6108ea610ae5565b6108f78160400151610b94565b80518051600180546001600160a01b039092166001600160a01b03199092169190911781556020808301516002556040808401516003556060808501516004556080948501516005805491151560ff1990921691909117905582860151805160065580840151600755808301516008805493830151929097015163ffffffff908116600160401b0263ffffffff60401b19938216600160201b026001600160401b0319909516919092161792909217161790935591830151805184936109c292600992910190610cb1565b5060608201516009820180546001600160a01b03199081166001600160a01b0393841617909155608090930151600a9092018054909316911617905550565b610a09610c49565b506000908152600d6020908152604091829020825160a081018452815481526001820154928101929092526002015463ffffffff80821693830193909352600160201b810483166060830152600160401b9004909116608082015290565b610a6f610ae5565b6001600160a01b038116610ad95760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b610ae281610b44565b50565b33610aee6108d3565b6001600160a01b0316146108d15760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610ad0565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60005b8151811015610c4557600c6000838381518110610bb657610bb6611168565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060009054906101000a900460ff1615600c6000848481518110610c0357610c03611168565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916911515919091179055610c3e81611268565b9050610b97565b5050565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b6040518060a0016040528060006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b828054828255906000526020600020908101928215610d06579160200282015b82811115610d0657825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190610cd1565b50610d12929150610d16565b5090565b5b80821115610d125760008155600101610d17565b634e487b7160e01b600052604160045260246000fd5b60405160a081016001600160401b0381118282101715610d6357610d63610d2b565b60405290565b803563ffffffff81168114610d7d57600080fd5b919050565b6000806106e0808486031215610d9757600080fd5b83359250602085603f860112610dac57600080fd5b6040516106c081016001600160401b0381118282101715610dcf57610dcf610d2b565b604052918501918087841115610de457600080fd5b8287015b84811015610e0657610df981610d69565b8252908301908301610de8565b509497909650945050505050565b600060208284031215610e2657600080fd5b5035919050565b8051825260208101516020830152604081015163ffffffff808216604085015280606084015116606085015280608084015116608085015250505050565b80516001600160a01b031682526020808201519083015260408082015190830152606080820151908301526080908101511515910152565b6101408101610eb28285610e2d565b610ebf60a0830184610e6b565b9392505050565b60a08101610ed48284610e6b565b92915050565b80356001600160a01b0381168114610d7d57600080fd5b600060208284031215610f0357600080fd5b610ebf82610eda565b6101808101610f1b8287610e6b565b610f2860a0830186610e2d565b6001600160a01b03938416610140830152919092166101609092019190915292915050565b600060a08284031215610f5f57600080fd5b610f67610d41565b90508135815260208201356020820152610f8360408301610d69565b6040820152610f9460608301610d69565b6060820152610fa560808301610d69565b608082015292915050565b600082601f830112610fc157600080fd5b813560206001600160401b0380831115610fdd57610fdd610d2b565b8260051b604051601f19603f8301168101818110848211171561100257611002610d2b565b60405293845285810183019383810192508785111561102057600080fd5b83870191505b848210156110465761103782610eda565b83529183019190830190611026565b979650505050505050565b60006020828403121561106357600080fd5b81356001600160401b038082111561107a57600080fd5b908301908185036101a081121561109057600080fd5b611098610d41565b60a08212156110a657600080fd5b6110ae610d41565b91506110b984610eda565b8252602084013560208301526040840135604083015260608401356060830152608084013580151581146110ec57600080fd5b60808301528181526111018760a08601610f4d565b602082015261014084013591508282111561111b57600080fd5b61112787838601610fb0565b60408201526111396101608501610eda565b606082015261114b6101808501610eda565b60808201529695505050505050565b60a08101610ed48284610e2d565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000826111b157634e487b7160e01b600052601260045260246000fd5b500490565b60008160001904831182151516156111d0576111d061117e565b500290565b80820180821115610ed457610ed461117e565b81810381811115610ed457610ed461117e565b63ffffffff8281168282160390808211156112185761121861117e565b5092915050565b63ffffffff8181168382160190808211156112185761121861117e565b600063ffffffff8083168185168183048111821515161561125f5761125f61117e565b02949350505050565b60006001820161127a5761127a61117e565b506001019056fea2646970667358221220d55cf7bf29749e894818fbd9a048762e5c439b62f03b31156d4eda8ca808120a64736f6c63430008100033";

type GamificationMethodsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GamificationMethodsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GamificationMethods__factory extends ContractFactory {
  constructor(...args: GamificationMethodsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "GamificationMethods";
  }

  deploy(
    input: Constructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GamificationMethods> {
    return super.deploy(input, overrides || {}) as Promise<GamificationMethods>;
  }
  getDeployTransaction(
    input: Constructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(input, overrides || {});
  }
  attach(address: string): GamificationMethods {
    return super.attach(address) as GamificationMethods;
  }
  connect(signer: Signer): GamificationMethods__factory {
    return super.connect(signer) as GamificationMethods__factory;
  }
  static readonly contractName: "GamificationMethods";
  public readonly contractName: "GamificationMethods";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GamificationMethodsInterface {
    return new utils.Interface(_abi) as GamificationMethodsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GamificationMethods {
    return new Contract(address, _abi, signerOrProvider) as GamificationMethods;
  }
}
