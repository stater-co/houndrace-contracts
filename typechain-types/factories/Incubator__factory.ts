/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Incubator,
  IncubatorInterface,
  IncubatorConstructor,
} from "../Incubator";

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
        internalType: "uint256",
        name: "hound1Id",
        type: "uint256",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint64",
                name: "totalRuns",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "firstPlace",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "secondPlace",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "thirdPlace",
                type: "uint64",
              },
            ],
            internalType: "struct Hound.Statistics",
            name: "statistics",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "staminaRefill1xCurrency",
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
                name: "staminaPerHour",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "staminaCap",
                type: "uint32",
              },
            ],
            internalType: "struct Hound.Stamina",
            name: "stamina",
            type: "tuple",
          },
          {
            components: [
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
                internalType: "address",
                name: "breedingcurrency",
                type: "address",
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
            internalType: "struct Hound.Breeding",
            name: "breeding",
            type: "tuple",
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
            internalType: "struct Hound.Identity",
            name: "identity",
            type: "tuple",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "token_uri",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "queueId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "custom",
            type: "bool",
          },
        ],
        internalType: "struct Hound.Struct",
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
            components: [
              {
                internalType: "uint64",
                name: "totalRuns",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "firstPlace",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "secondPlace",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "thirdPlace",
                type: "uint64",
              },
            ],
            internalType: "struct Hound.Statistics",
            name: "statistics",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "staminaRefill1xCurrency",
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
                name: "staminaPerHour",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "staminaCap",
                type: "uint32",
              },
            ],
            internalType: "struct Hound.Stamina",
            name: "stamina",
            type: "tuple",
          },
          {
            components: [
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
                internalType: "address",
                name: "breedingcurrency",
                type: "address",
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
            internalType: "struct Hound.Breeding",
            name: "breeding",
            type: "tuple",
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
            internalType: "struct Hound.Identity",
            name: "identity",
            type: "tuple",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "token_uri",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "queueId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "custom",
            type: "bool",
          },
        ],
        internalType: "struct Hound.Struct",
        name: "hound2",
        type: "tuple",
      },
    ],
    name: "breedHounds",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint64",
                name: "totalRuns",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "firstPlace",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "secondPlace",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "thirdPlace",
                type: "uint64",
              },
            ],
            internalType: "struct Hound.Statistics",
            name: "statistics",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "staminaRefill1xCurrency",
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
                name: "staminaPerHour",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "staminaCap",
                type: "uint32",
              },
            ],
            internalType: "struct Hound.Stamina",
            name: "stamina",
            type: "tuple",
          },
          {
            components: [
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
                internalType: "address",
                name: "breedingcurrency",
                type: "address",
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
            internalType: "struct Hound.Breeding",
            name: "breeding",
            type: "tuple",
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
            internalType: "struct Hound.Identity",
            name: "identity",
            type: "tuple",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "token_uri",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "queueId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "custom",
            type: "bool",
          },
        ],
        internalType: "struct Hound.Struct",
        name: "",
        type: "tuple",
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
        name: "randomness",
        type: "address",
      },
      {
        internalType: "address",
        name: "genetics",
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
  "0x60806040523480156200001157600080fd5b506040516200124d3803806200124d83398101604081905262000034916200011a565b806200004033620000ad565b8051600180546001600160a01b039283166001600160a01b0319918216179091556020830151600280549184169190921617905560408201516003805460609094015163ffffffff16600160a01b026001600160c01b0319909416919092161791909117905550620001b8565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146200011557600080fd5b919050565b6000608082840312156200012d57600080fd5b604051608081016001600160401b03811182821017156200015e57634e487b7160e01b600052604160045260246000fd5b6040526200016c83620000fd565b81526200017c60208401620000fd565b60208201526200018f60408401620000fd565b6040820152606083015163ffffffff81168114620001ac57600080fd5b60608201529392505050565b61108580620001c86000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063203dbf0214610067578063715018a61461007c57806385b7dd89146100845780638da5cb5b146100ad578063d8de6587146100cd578063f2fde38b14610133575b600080fd5b61007a6100753660046105d1565b610146565b005b61007a6101b6565b6100976100923660046109fd565b6101ca565b6040516100a49190610c98565b60405180910390f35b6100b5610256565b6040516001600160a01b0390911681526020016100a4565b6001546002546003546100fd926001600160a01b039081169281169190811690600160a01b900463ffffffff1684565b604080516001600160a01b0395861681529385166020850152919093169082015263ffffffff90911660608201526080016100a4565b61007a610141366004610cb2565b610265565b61014e6102e3565b8051600180546001600160a01b039283166001600160a01b0319918216179091556020830151600280549184169190921617905560408201516003805460609094015163ffffffff16600160a01b026001600160c01b03199094169190921617919091179055565b6101be6102e3565b6101c86000610342565b565b6101d2610392565b6001546040516385b7dd8960e01b81526001600160a01b03909116906385b7dd8990610208908890889088908890600401610ccf565b600060405180830381865afa158015610225573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261024d9190810190610f43565b95945050505050565b6000546001600160a01b031690565b61026d6102e3565b6001600160a01b0381166102d75760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6102e081610342565b50565b336102ec610256565b6001600160a01b0316146101c85760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102ce565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040805161018081019091526000610100820181815261012083018290526101408301829052610160830191909152819081526040805160c08101825260008082526020828101829052928201819052606082018190526080820181905260a082015291019081526040805160a081018252600080825260208281018290529282018190526060820181905260808201529101908152602001610433610457565b81526020016060815260200160608152602001600081526020016000151581525090565b6040518060c0016040528060008152602001600081526020016000815260200160008152602001610486610493565b8152602001606081525090565b604051806106c001604052806036906020820280368337509192915050565b634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b03811182821017156104ea576104ea6104b2565b60405290565b60405160c081016001600160401b03811182821017156104ea576104ea6104b2565b60405160a081016001600160401b03811182821017156104ea576104ea6104b2565b60405161010081016001600160401b03811182821017156104ea576104ea6104b2565b6040516106c081016001600160401b03811182821017156104ea576104ea6104b2565b604051601f8201601f191681016001600160401b03811182821017156105a2576105a26104b2565b604052919050565b6001600160a01b03811681146102e057600080fd5b63ffffffff811681146102e057600080fd5b6000608082840312156105e357600080fd5b604051608081016001600160401b0381118282101715610605576106056104b2565b6040528235610613816105aa565b81526020830135610623816105aa565b60208201526040830135610636816105aa565b60408201526060830135610649816105bf565b60608201529392505050565b6001600160401b03811681146102e057600080fd5b60006080828403121561067c57600080fd5b6106846104c8565b9050813561069181610655565b815260208201356106a181610655565b602082015260408201356106b481610655565b604082015260608201356106c781610655565b606082015292915050565b600060c082840312156106e457600080fd5b6106ec6104f0565b905081356106f9816105aa565b808252506020820135602082015260408201356040820152606082013561071f816105bf565b60608201526080820135610732816105bf565b608082015260a0820135610745816105bf565b60a082015292915050565b80151581146102e057600080fd5b803561076981610750565b919050565b600060a0828403121561078057600080fd5b610788610512565b9050813581526020820135602082015260408201356107a6816105aa565b60408201526060828101359082015260808201356107c381610750565b608082015292915050565b60006001600160401b038211156107e7576107e76104b2565b50601f01601f191660200190565b600082601f83011261080657600080fd5b8135610819610814826107ce565b61057a565b81815284602083860101111561082e57600080fd5b816020850160208301376000918101602001919091529392505050565b6000610760828403121561085e57600080fd5b6108666104f0565b90508135815260208083013581830152604083013560408301526060830135606083015283609f84011261089957600080fd5b6108a1610557565b806107408501868111156108b457600080fd5b608086015b818110156108d95780356108cc816105bf565b84529284019284016108b9565b506080850191909152359150506001600160401b038111156108fa57600080fd5b610906848285016107f5565b60a08301525092915050565b6000610280828403121561092557600080fd5b61092d610534565b9050610939838361066a565b815261094883608084016106d2565b602082015261095b83610140840161076e565b60408201526101e08201356001600160401b038082111561097b57600080fd5b6109878583860161084b565b60608401526102008401359150808211156109a157600080fd5b6109ad858386016107f5565b60808401526102208401359150808211156109c757600080fd5b506109d4848285016107f5565b60a08301525061024082013560c08201526109f2610260830161075e565b60e082015292915050565b60008060008060808587031215610a1357600080fd5b8435935060208501356001600160401b0380821115610a3157600080fd5b610a3d88838901610912565b9450604087013593506060870135915080821115610a5a57600080fd5b50610a6787828801610912565b91505092959194509250565b60005b83811015610a8e578181015183820152602001610a76565b83811115610a9d576000848401525b50505050565b60008151808452610abb816020860160208601610a73565b601f01601f19169290920160200192915050565b60006107608251845260208084015181860152604084015160408601526060840151606086015260808401516080860160005b6036811015610b2557825163ffffffff1682529183019190830190600101610b02565b5050505060a08301518161074086015261024d82860182610aa3565b6000610280610b7f84845180516001600160401b03908116835260208083015182169084015260408281015182169084015260609182015116910152565b6020830151610bda608086018280516001600160a01b03168252602080820151908301526040808201519083015260608082015163ffffffff9081169184019190915260808083015182169084015260a09182015116910152565b5060408381015180516101408701526020810151610160870152908101516001600160a01b031661018086015260608101516101a0860152608081015115156101c0860152506060830151816101e0860152610c3882860182610acf565b9150506080830151848203610200860152610c538282610aa3565b91505060a0830151848203610220860152610c6e8282610aa3565b91505060c083015161024085015260e0830151610c9061026086018215159052565b509392505050565b602081526000610cab6020830184610b41565b9392505050565b600060208284031215610cc457600080fd5b8135610cab816105aa565b848152608060208201526000610ce86080830186610b41565b8460408401528281036060840152610d008185610b41565b979650505050505050565b600060808284031215610d1d57600080fd5b610d256104c8565b90508151610d3281610655565b81526020820151610d4281610655565b60208201526040820151610d5581610655565b604082015260608201516106c781610655565b600060c08284031215610d7a57600080fd5b610d826104f0565b90508151610d8f816105aa565b8082525060208201516020820152604082015160408201526060820151610db5816105bf565b60608201526080820151610dc8816105bf565b608082015260a0820151610745816105bf565b805161076981610750565b600060a08284031215610df857600080fd5b610e00610512565b905081518152602082015160208201526040820151610e1e816105aa565b60408201526060828101519082015260808201516107c381610750565b600082601f830112610e4c57600080fd5b8151610e5a610814826107ce565b818152846020838601011115610e6f57600080fd5b610e80826020830160208701610a73565b949350505050565b60006107608284031215610e9b57600080fd5b610ea36104f0565b90508151815260208083015181830152604083015160408301526060830151606083015283609f840112610ed657600080fd5b610ede610557565b80610740850186811115610ef157600080fd5b608086015b81811015610f16578051610f09816105bf565b8452928401928401610ef6565b506080850191909152519150506001600160401b03811115610f3757600080fd5b61090684828501610e3b565b600060208284031215610f5557600080fd5b81516001600160401b0380821115610f6c57600080fd5b908301906102808286031215610f8157600080fd5b610f89610534565b610f938684610d0b565b8152610fa28660808501610d68565b6020820152610fb5866101408501610de6565b60408201526101e083015182811115610fcd57600080fd5b610fd987828601610e88565b60608301525061020083015182811115610ff257600080fd5b610ffe87828601610e3b565b6080830152506102208301518281111561101757600080fd5b61102387828601610e3b565b60a08301525061024083015160c08201526110416102608401610ddb565b60e08201529594505050505056fea26469706673582212203338db10b163532a51298f2010919dbf682e887a430dfd1bfb0e66b7344f593764736f6c634300080f0033";

type IncubatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IncubatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Incubator__factory extends ContractFactory {
  constructor(...args: IncubatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Incubator";
  }

  deploy(
    input: IncubatorConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Incubator> {
    return super.deploy(input, overrides || {}) as Promise<Incubator>;
  }
  getDeployTransaction(
    input: IncubatorConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(input, overrides || {});
  }
  attach(address: string): Incubator {
    return super.attach(address) as Incubator;
  }
  connect(signer: Signer): Incubator__factory {
    return super.connect(signer) as Incubator__factory;
  }
  static readonly contractName: "Incubator";
  public readonly contractName: "Incubator";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IncubatorInterface {
    return new utils.Interface(_abi) as IncubatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Incubator {
    return new Contract(address, _abi, signerOrProvider) as Incubator;
  }
}
