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
  "0x60806040523480156200001157600080fd5b5060405162001d2138038062001d2183398101604081905262000034916200051b565b806200004033620001a6565b80518051600180546001600160a01b039283166001600160a01b03199182161782556020808501516002805491861691841691909117905560408086015160035560608087015160045560808088015160055560a08089015160065560c089015160075560e0909801516008805491151560ff19909216919091179055838901518051600980549190991696169590951790965583830151600a5583820151600b55830151600c805496850151949097015163ffffffff908116680100000000000000000263ffffffff60401b19958216640100000000026001600160401b031990981691909216179590951792909216939093179093559183015180518493926200015292600d92910190620002b5565b506060820151600d820180546001600160a01b03199081166001600160a01b0393841617909155608090930151600e9092018054909316911617905560408101516200019e90620001f6565b50506200069f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60005b8151811015620002b157601060008383815181106200021c576200021c62000661565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060009054906101000a900460ff1615601060008484815181106200026c576200026c62000661565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916911515919091179055620002a98162000677565b9050620001f9565b5050565b8280548282559060005260206000209081019282156200030d579160200282015b828111156200030d57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190620002d6565b506200031b9291506200031f565b5090565b5b808211156200031b576000815560010162000320565b634e487b7160e01b600052604160045260246000fd5b60405160a081016001600160401b038111828210171562000371576200037162000336565b60405290565b60405161010081016001600160401b038111828210171562000371576200037162000336565b80516001600160a01b0381168114620003b557600080fd5b919050565b805163ffffffff81168114620003b557600080fd5b600060c08284031215620003e257600080fd5b60405160c081016001600160401b038111828210171562000407576200040762000336565b60405290508062000418836200039d565b815260208301516020820152604083015160408201526200043c60608401620003ba565b60608201526200044f60808401620003ba565b60808201526200046260a08401620003ba565b60a08201525092915050565b600082601f8301126200048057600080fd5b815160206001600160401b03808311156200049f576200049f62000336565b8260051b604051601f19603f83011681018181108482111715620004c757620004c762000336565b604052938452858101830193838101925087851115620004e657600080fd5b83870191505b84821015620005105762000500826200039d565b83529183019190830190620004ec565b979650505050505050565b6000602082840312156200052e57600080fd5b81516001600160401b03808211156200054657600080fd5b908301908185036102208112156200055d57600080fd5b620005676200034c565b610100808312156200057857600080fd5b6200058262000377565b92506200058f856200039d565b83526200059f602086016200039d565b602084015260408501516040840152606085015160608401526080850151608084015260a085015160a084015260c085015160c084015260e08501518015158114620005ea57600080fd5b60e08401528282526200060088868301620003cf565b6020830152506101c08401519150828211156200061c57600080fd5b6200062a878386016200046e565b60408201526200063e6101e085016200039d565b60608201526200065261020085016200039d565b60808201529695505050505050565b634e487b7160e01b600052603260045260246000fd5b6000600182016200069857634e487b7160e01b600052601160045260246000fd5b5060010190565b61167280620006af6000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c80638da5cb5b11610081578063d8de65871161005b578063d8de65871461032f578063e622563014610425578063f2fde38b146104f757600080fd5b80638da5cb5b146102c1578063a681aaaa146102e9578063d63a8e11146102fc57600080fd5b80635815d8bf116100b25780635815d8bf146101385780636f27089f146101fb578063715018a6146102b957600080fd5b80630ad47e1e146100d95780632c85e863146100ee578063408c3b2e14610118575b600080fd5b6100ec6100e7366004610f77565b61050a565b005b6101016100fc36600461100a565b6106de565b60405161010f929190611023565b60405180910390f35b61012b61012636600461100a565b610885565b60405161010f9190611104565b6101a661014636600461100a565b6012602052600090815260409020805460018201546002830154600384015460048501546005860154600687015460079097015473ffffffffffffffffffffffffffffffffffffffff968716979590961695939492939192909160ff1688565b6040805173ffffffffffffffffffffffffffffffffffffffff998a168152989097166020890152958701949094526060860192909252608085015260a084015260c0830152151560e08201526101000161010f565b61026961020936600461100a565b601160205260009081526040902080546001820154600283015460039093015473ffffffffffffffffffffffffffffffffffffffff90921692909163ffffffff808216916401000000008104821691680100000000000000009091041686565b6040805173ffffffffffffffffffffffffffffffffffffffff909716875260208701959095529385019290925263ffffffff908116606085015290811660808401521660a082015260c00161010f565b6100ec610987565b60005460405173ffffffffffffffffffffffffffffffffffffffff909116815260200161010f565b6100ec6102f73660046112f6565b61099b565b61031f61030a366004611427565b60106020526000908152604090205460ff1681565b604051901515815260200161010f565b604080516101008101825260015473ffffffffffffffffffffffffffffffffffffffff908116825260025481166020808401919091526003548385015260045460608085019190915260055460808086019190915260065460a08087019190915260075460c08088019190915260085460ff16151560e08801528751908101885260095486168152600a5494810194909452600b5496840196909652600c5463ffffffff8082169385019390935264010000000081048316918401919091526801000000000000000090041693810193909352600e54600f546104159492918216911684565b60405161010f9493929190611442565b6104ea61043336600461100a565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915250600090815260116020908152604091829020825160c081018452815473ffffffffffffffffffffffffffffffffffffffff16815260018201549281019290925260028101549282019290925260039091015463ffffffff8082166060840152640100000000820481166080840152680100000000000000009091041660a082015290565b60405161010f9190611547565b6100ec610505366004611427565b610b97565b3360009081526010602052604090205460ff1661052657600080fd5b506000908152601160209081526040808320600954815473ffffffffffffffffffffffffffffffffffffffff9182167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216178355600a54600180850191909155600b54600280860191909155600c80546003968701805463ffffffff9283167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000082168117835584547fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000909216176401000000009182900484169091021780825592547fffffffffffffffffffffffffffffffffffffffff00000000ffffffffffffffff909316680100000000000000009384900490921690920217905560129096529390952083548154908316908716178155845493810180549490921693909516929092179091558054918301919091556004805491830191909155600580549183019190915560068054918301919091556007805491830191909155600854910180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff9092161515919091179055565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a0810191909152610786604051806101000160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581525090565b505060009081526011602090815260408083206012835292819020815160c08082018452855473ffffffffffffffffffffffffffffffffffffffff9081168352600180880154848801526002808901548588015260039889015463ffffffff808216606080890191909152640100000000830482166080808a01919091526801000000000000000090930490911660a080890191909152895161010081018b528954871681529489015490951699840199909952908601549682019690965296840154958701959095526004830154938601939093526005820154938501939093526006810154918401919091526007015460ff16151560e083015291565b6108fb604051806101000160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581525090565b50600090815260126020908152604091829020825161010081018452815473ffffffffffffffffffffffffffffffffffffffff9081168252600183015416928101929092526002810154928201929092526003820154606082015260048201546080820152600582015460a0820152600682015460c082015260079091015460ff16151560e082015290565b61098f610c53565b6109996000610cd4565b565b6109a3610c53565b6109b08160400151610d49565b805180516001805473ffffffffffffffffffffffffffffffffffffffff9283167fffffffffffffffffffffffff00000000000000000000000000000000000000009182161782556020808501516002805491861691841691909117905560408086015160035560608087015160045560808088015160055560a08089015160065560c089015160075560e090980151600880549115157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00909216919091179055838901518051600980549190991696169590951790965583830151600a5583820151600b55830151600c805496850151949097015163ffffffff90811668010000000000000000027fffffffffffffffffffffffffffffffffffffffff00000000ffffffffffffffff958216640100000000027fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000009098169190921617959095179290921693909317909355918301518051849392610b3392600d92910190610e43565b506060820151600d820180547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff93841617909155608090930151600e9092018054909316911617905550565b610b9f610c53565b73ffffffffffffffffffffffffffffffffffffffff8116610c47576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b610c5081610cd4565b50565b60005473ffffffffffffffffffffffffffffffffffffffff163314610999576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610c3e565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60005b8151811015610e3f5760106000838381518110610d6b57610d6b6115ae565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161560106000848481518110610dd257610dd26115ae565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff16825281019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055610e38816115dd565b9050610d4c565b5050565b828054828255906000526020600020908101928215610ebd579160200282015b82811115610ebd57825182547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909116178255602090920191600190910190610e63565b50610ec9929150610ecd565b5090565b5b80821115610ec95760008155600101610ece565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160a0810167ffffffffffffffff81118282101715610f3457610f34610ee2565b60405290565b604051610100810167ffffffffffffffff81118282101715610f3457610f34610ee2565b803563ffffffff81168114610f7257600080fd5b919050565b6000806106e0808486031215610f8c57600080fd5b83359250602085603f860112610fa157600080fd5b6040516106c0810181811067ffffffffffffffff82111715610fc557610fc5610ee2565b604052918501918087841115610fda57600080fd5b8287015b84811015610ffc57610fef81610f5e565b8252908301908301610fde565b509497909650945050505050565b60006020828403121561101c57600080fd5b5035919050565b6101c0810161108b828573ffffffffffffffffffffffffffffffffffffffff81511682526020810151602083015260408101516040830152606081015163ffffffff80821660608501528060808401511660808501528060a08401511660a085015250505050565b6110fd60c083018473ffffffffffffffffffffffffffffffffffffffff8082511683528060208301511660208401525060408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e0810151151560e08301525050565b9392505050565b6101008101611178828473ffffffffffffffffffffffffffffffffffffffff8082511683528060208301511660208401525060408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e0810151151560e08301525050565b92915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610f7257600080fd5b600060c082840312156111b457600080fd5b60405160c0810181811067ffffffffffffffff821117156111d7576111d7610ee2565b6040529050806111e68361117e565b8152602083013560208201526040830135604082015261120860608401610f5e565b606082015261121960808401610f5e565b608082015261122a60a08401610f5e565b60a08201525092915050565b600082601f83011261124757600080fd5b8135602067ffffffffffffffff8083111561126457611264610ee2565b8260051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f830116810181811084821117156112a7576112a7610ee2565b6040529384528581018301938381019250878511156112c557600080fd5b83870191505b848210156112eb576112dc8261117e565b835291830191908301906112cb565b979650505050505050565b60006020828403121561130857600080fd5b813567ffffffffffffffff8082111561132057600080fd5b9083019081850361022081121561133657600080fd5b61133e610f11565b6101008083121561134e57600080fd5b611356610f3a565b92506113618561117e565b835261136f6020860161117e565b602084015260408501356040840152606085013560608401526080850135608084015260a085013560a084015260c085013560c084015260e085013580151581146113b957600080fd5b60e08401528282526113cd888683016111a2565b6020830152506101c08401359150828211156113e857600080fd5b6113f487838601611236565b60408201526114066101e0850161117e565b6060820152611418610200850161117e565b60808201529695505050505050565b60006020828403121561143957600080fd5b6110fd8261117e565b61020081016114b6828773ffffffffffffffffffffffffffffffffffffffff8082511683528060208301511660208401525060408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e0810151151560e08301525050565b845173ffffffffffffffffffffffffffffffffffffffff1661010083015260208501516101208301526040850151610140830152606085015163ffffffff9081166101608401526080860151811661018084015260a0860151166101a083015273ffffffffffffffffffffffffffffffffffffffff8085166101c08401528084166101e08401525095945050505050565b60c08101611178828473ffffffffffffffffffffffffffffffffffffffff81511682526020810151602083015260408101516040830152606081015163ffffffff80821660608501528060808401511660808501528060a08401511660a085015250505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611635577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b506001019056fea2646970667358221220add5f851cdece0897da19a368044c218d9d785191708ada31782dc57fdb7c86064736f6c63430008110033";

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
