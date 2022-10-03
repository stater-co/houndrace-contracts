/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Gamification,
  GamificationInterface,
  Constructor,
} from "../Gamification";

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
                internalType: "address",
                name: "breedingCooldownCurrency",
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
                internalType: "uint256",
                name: "breedingCooldownTimeUnit",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "refillBreedingCooldownCost",
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
                internalType: "address",
                name: "staminaRefillCurrency",
                type: "address",
              },
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
                name: "staminaPerTimeUnit",
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
            internalType: "address",
            name: "breedingCooldownCurrency",
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
            internalType: "uint256",
            name: "breedingCooldownTimeUnit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "refillBreedingCooldownCost",
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
            internalType: "address",
            name: "staminaRefillCurrency",
            type: "address",
          },
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
            name: "staminaPerTimeUnit",
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
            internalType: "address",
            name: "breedingCooldownCurrency",
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
            internalType: "uint256",
            name: "breedingCooldownTimeUnit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "refillBreedingCooldownCost",
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
            internalType: "address",
            name: "staminaRefillCurrency",
            type: "address",
          },
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
            name: "staminaPerTimeUnit",
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
            internalType: "address",
            name: "staminaRefillCurrency",
            type: "address",
          },
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
            name: "staminaPerTimeUnit",
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
            internalType: "address",
            name: "breedingCooldownCurrency",
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
            internalType: "uint256",
            name: "breedingCooldownTimeUnit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "refillBreedingCooldownCost",
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
        internalType: "address",
        name: "breedingCooldownCurrency",
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
        internalType: "uint256",
        name: "breedingCooldownTimeUnit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "refillBreedingCooldownCost",
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
        internalType: "address",
        name: "staminaRefillCurrency",
        type: "address",
      },
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
        name: "staminaPerTimeUnit",
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
        name: "id",
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
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "breedingFeeCurrency",
            type: "address",
          },
          {
            internalType: "address",
            name: "breedingCooldownCurrency",
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
            internalType: "uint256",
            name: "breedingCooldownTimeUnit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "refillBreedingCooldownCost",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "availableToBreed",
            type: "bool",
          },
        ],
        internalType: "struct HoundBreeding.Struct",
        name: "breeding",
        type: "tuple",
      },
    ],
    name: "setBreeding",
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
                internalType: "address",
                name: "breedingCooldownCurrency",
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
                internalType: "uint256",
                name: "breedingCooldownTimeUnit",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "refillBreedingCooldownCost",
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
                internalType: "address",
                name: "staminaRefillCurrency",
                type: "address",
              },
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
                name: "staminaPerTimeUnit",
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
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "staminaRefillCurrency",
            type: "address",
          },
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
            name: "staminaPerTimeUnit",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "staminaCap",
            type: "uint32",
          },
        ],
        internalType: "struct HoundStamina.Struct",
        name: "stamina",
        type: "tuple",
      },
    ],
    name: "setStamina",
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
  "0x60806040523480156200001157600080fd5b5060405162001c9d38038062001c9d83398101604081905262000034916200051b565b806200004033620001a6565b80518051600180546001600160a01b039283166001600160a01b03199182161782556020808501516002805491861691841691909117905560408086015160035560608087015160045560808088015160055560a08089015160065560c089015160075560e0909801516008805491151560ff19909216919091179055838901518051600980549190991696169590951790965583830151600a5583820151600b55830151600c805496850151949097015163ffffffff908116680100000000000000000263ffffffff60401b19958216640100000000026001600160401b031990981691909216179590951792909216939093179093559183015180518493926200015292600d92910190620002b5565b506060820151600d820180546001600160a01b03199081166001600160a01b0393841617909155608090930151600e9092018054909316911617905560408101516200019e90620001f6565b50506200069f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60005b8151811015620002b157601060008383815181106200021c576200021c62000661565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060009054906101000a900460ff1615601060008484815181106200026c576200026c62000661565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916911515919091179055620002a98162000677565b9050620001f9565b5050565b8280548282559060005260206000209081019282156200030d579160200282015b828111156200030d57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190620002d6565b506200031b9291506200031f565b5090565b5b808211156200031b576000815560010162000320565b634e487b7160e01b600052604160045260246000fd5b60405160a081016001600160401b038111828210171562000371576200037162000336565b60405290565b60405161010081016001600160401b038111828210171562000371576200037162000336565b80516001600160a01b0381168114620003b557600080fd5b919050565b805163ffffffff81168114620003b557600080fd5b600060c08284031215620003e257600080fd5b60405160c081016001600160401b038111828210171562000407576200040762000336565b60405290508062000418836200039d565b815260208301516020820152604083015160408201526200043c60608401620003ba565b60608201526200044f60808401620003ba565b60808201526200046260a08401620003ba565b60a08201525092915050565b600082601f8301126200048057600080fd5b815160206001600160401b03808311156200049f576200049f62000336565b8260051b604051601f19603f83011681018181108482111715620004c757620004c762000336565b604052938452858101830193838101925087851115620004e657600080fd5b83870191505b84821015620005105762000500826200039d565b83529183019190830190620004ec565b979650505050505050565b6000602082840312156200052e57600080fd5b81516001600160401b03808211156200054657600080fd5b908301908185036102208112156200055d57600080fd5b620005676200034c565b610100808312156200057857600080fd5b6200058262000377565b92506200058f856200039d565b83526200059f602086016200039d565b602084015260408501516040840152606085015160608401526080850151608084015260a085015160a084015260c085015160c084015260e08501518015158114620005ea57600080fd5b60e08401528282526200060088868301620003cf565b6020830152506101c08401519150828211156200061c57600080fd5b6200062a878386016200046e565b60408201526200063e6101e085016200039d565b60608201526200065261020085016200039d565b60808201529695505050505050565b634e487b7160e01b600052603260045260246000fd5b6000600182016200069857634e487b7160e01b600052601160045260246000fd5b5060010190565b6115ee80620006af6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063715018a61161008c578063d63a8e1111610066578063d63a8e1114610333578063d8de658714610366578063e62256301461045c578063f2fde38b1461052e57600080fd5b8063715018a6146102f05780638da5cb5b146102f8578063a681aaaa1461032057600080fd5b8063408ebaf9116100c8578063408ebaf91461014e5780634aecebf3146101615780635815d8bf1461016f5780636f27089f1461023257600080fd5b80630ad47e1e146100ef5780632c85e86314610104578063408c3b2e1461012e575b600080fd5b6101026100fd366004610ed6565b610541565b005b610117610112366004610f69565b6105c1565b604051610125929190610f82565b60405180910390f35b61014161013c366004610f69565b610768565b6040516101259190611063565b61010261015c366004611195565b61086a565b61010261015c36600461124b565b6101dd61017d366004610f69565b6012602052600090815260409020805460018201546002830154600384015460048501546005860154600687015460079097015473ffffffffffffffffffffffffffffffffffffffff968716979590961695939492939192909160ff1688565b6040805173ffffffffffffffffffffffffffffffffffffffff998a168152989097166020890152958701949094526060860192909252608085015260a084015260c0830152151560e082015261010001610125565b6102a0610240366004610f69565b601160205260009081526040902080546001820154600283015460039093015473ffffffffffffffffffffffffffffffffffffffff90921692909163ffffffff808216916401000000008104821691680100000000000000009091041686565b6040805173ffffffffffffffffffffffffffffffffffffffff909716875260208701959095529385019290925263ffffffff908116606085015290811660808401521660a082015260c001610125565b610102610897565b60005460405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610125565b61010261032e366004611270565b6108ab565b610356610341366004611393565b60106020526000908152604090205460ff1681565b6040519015158152602001610125565b604080516101008101825260015473ffffffffffffffffffffffffffffffffffffffff908116825260025481166020808401919091526003548385015260045460608085019190915260055460808086019190915260065460a08087019190915260075460c08088019190915260085460ff16151560e08801528751908101885260095486168152600a5494810194909452600b5496840196909652600c5463ffffffff8082169385019390935264010000000081048316918401919091526801000000000000000090041693810193909352600e54600f5461044c9492918216911684565b60405161012594939291906113ae565b61052161046a366004610f69565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915250600090815260116020908152604091829020825160c081018452815473ffffffffffffffffffffffffffffffffffffffff16815260018201549281019290925260028101549282019290925260039091015463ffffffff8082166060840152640100000000820481166080840152680100000000000000009091041660a082015290565b60405161012591906114b3565b61010261053c366004611393565b610aa7565b600f5460405160009173ffffffffffffffffffffffffffffffffffffffff169061056e908390369061151a565b600060405180830381855af49150503d80600081146105a9576040519150601f19603f3d011682016040523d82523d6000602084013e6105ae565b606091505b50509050806105bc57600080fd5b505050565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a0810191909152610669604051806101000160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581525090565b505060009081526011602090815260408083206012835292819020815160c08082018452855473ffffffffffffffffffffffffffffffffffffffff9081168352600180880154848801526002808901548588015260039889015463ffffffff808216606080890191909152640100000000830482166080808a01919091526801000000000000000090930490911660a080890191909152895161010081018b528954871681529489015490951699840199909952908601549682019690965296840154958701959095526004830154938601939093526005820154938501939093526006810154918401919091526007015460ff16151560e083015291565b6107de604051806101000160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581525090565b50600090815260126020908152604091829020825161010081018452815473ffffffffffffffffffffffffffffffffffffffff9081168252600183015416928101929092526002810154928201929092526003820154606082015260048201546080820152600582015460a0820152600682015460c082015260079091015460ff16151560e082015290565b600e5460405160009173ffffffffffffffffffffffffffffffffffffffff169061056e908390369061151a565b61089f610b63565b6108a96000610be4565b565b6108b3610b63565b6108c08160400151610c59565b805180516001805473ffffffffffffffffffffffffffffffffffffffff9283167fffffffffffffffffffffffff00000000000000000000000000000000000000009182161782556020808501516002805491861691841691909117905560408086015160035560608087015160045560808088015160055560a08089015160065560c089015160075560e090980151600880549115157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00909216919091179055838901518051600980549190991696169590951790965583830151600a5583820151600b55830151600c805496850151949097015163ffffffff90811668010000000000000000027fffffffffffffffffffffffffffffffffffffffff00000000ffffffffffffffff958216640100000000027fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000009098169190921617959095179290921693909317909355918301518051849392610a4392600d92910190610d53565b506060820151600d820180547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff93841617909155608090930151600e9092018054909316911617905550565b610aaf610b63565b73ffffffffffffffffffffffffffffffffffffffff8116610b57576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b610b6081610be4565b50565b60005473ffffffffffffffffffffffffffffffffffffffff1633146108a9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610b4e565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60005b8151811015610d4f5760106000838381518110610c7b57610c7b61152a565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161560106000848481518110610ce257610ce261152a565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff16825281019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055610d4881611559565b9050610c5c565b5050565b828054828255906000526020600020908101928215610dcd579160200282015b82811115610dcd57825182547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909116178255602090920191600190910190610d73565b50610dd9929150610ddd565b5090565b5b80821115610dd95760008155600101610dde565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610100810167ffffffffffffffff81118282101715610e4557610e45610df2565b60405290565b60405160a0810167ffffffffffffffff81118282101715610e4557610e45610df2565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610eb557610eb5610df2565b604052919050565b803563ffffffff81168114610ed157600080fd5b919050565b6000806106e0808486031215610eeb57600080fd5b83359250602085603f860112610f0057600080fd5b6040516106c0810181811067ffffffffffffffff82111715610f2457610f24610df2565b604052918501918087841115610f3957600080fd5b8287015b84811015610f5b57610f4e81610ebd565b8252908301908301610f3d565b509497909650945050505050565b600060208284031215610f7b57600080fd5b5035919050565b6101c08101610fea828573ffffffffffffffffffffffffffffffffffffffff81511682526020810151602083015260408101516040830152606081015163ffffffff80821660608501528060808401511660808501528060a08401511660a085015250505050565b61105c60c083018473ffffffffffffffffffffffffffffffffffffffff8082511683528060208301511660208401525060408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e0810151151560e08301525050565b9392505050565b61010081016110d7828473ffffffffffffffffffffffffffffffffffffffff8082511683528060208301511660208401525060408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e0810151151560e08301525050565b92915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610ed157600080fd5b600060c0828403121561111357600080fd5b60405160c0810181811067ffffffffffffffff8211171561113657611136610df2565b604052905080611145836110dd565b8152602083013560208201526040830135604082015261116760608401610ebd565b606082015261117860808401610ebd565b608082015261118960a08401610ebd565b60a08201525092915050565b60008060e083850312156111a857600080fd5b823591506111b98460208501611101565b90509250929050565b600061010082840312156111d557600080fd5b6111dd610e21565b90506111e8826110dd565b81526111f6602083016110dd565b602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e0820135801515811461124057600080fd5b60e082015292915050565b600080610120838503121561125f57600080fd5b823591506111b984602085016111c2565b6000602080838503121561128357600080fd5b823567ffffffffffffffff8082111561129b57600080fd5b9084019061022082870312156112b057600080fd5b6112b8610e4b565b6112c287846111c2565b81526112d2876101008501611101565b848201526101c0830135828111156112e957600080fd5b8301601f810188136112fa57600080fd5b80358381111561130c5761130c610df2565b8060051b935061131d868501610e6e565b818152938201860193868101908a86111561133757600080fd5b928701925b8584101561135c5761134d846110dd565b8252928701929087019061133c565b6040850152506113729150506101e084016110dd565b606082015261138461020084016110dd565b60808201529695505050505050565b6000602082840312156113a557600080fd5b61105c826110dd565b6102008101611422828773ffffffffffffffffffffffffffffffffffffffff8082511683528060208301511660208401525060408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e0810151151560e08301525050565b845173ffffffffffffffffffffffffffffffffffffffff1661010083015260208501516101208301526040850151610140830152606085015163ffffffff9081166101608401526080860151811661018084015260a0860151166101a083015273ffffffffffffffffffffffffffffffffffffffff8085166101c08401528084166101e08401525095945050505050565b60c081016110d7828473ffffffffffffffffffffffffffffffffffffffff81511682526020810151602083015260408101516040830152606081015163ffffffff80821660608501528060808401511660808501528060a08401511660a085015250505050565b8183823760009101908152919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036115b1577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b506001019056fea2646970667358221220d9fa653c9b985f7c19e0a9d9890be44894b4fc7c45d8b5615fafea75f34ff5f164736f6c63430008110033";

type GamificationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GamificationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Gamification__factory extends ContractFactory {
  constructor(...args: GamificationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Gamification";
  }

  deploy(
    input: Constructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Gamification> {
    return super.deploy(input, overrides || {}) as Promise<Gamification>;
  }
  getDeployTransaction(
    input: Constructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(input, overrides || {});
  }
  attach(address: string): Gamification {
    return super.attach(address) as Gamification;
  }
  connect(signer: Signer): Gamification__factory {
    return super.connect(signer) as Gamification__factory;
  }
  static readonly contractName: "Gamification";
  public readonly contractName: "Gamification";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GamificationInterface {
    return new utils.Interface(_abi) as GamificationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Gamification {
    return new Contract(address, _abi, signerOrProvider) as Gamification;
  }
}
