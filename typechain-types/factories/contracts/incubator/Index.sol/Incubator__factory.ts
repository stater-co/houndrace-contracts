/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  Incubator,
  IncubatorInterface,
  IncubatorConstructor,
} from "../../../../contracts/incubator/Index.sol/Incubator";

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
                name: "breedingFeeCurrency",
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
                name: "breedingFeeCurrency",
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
                name: "breedingFeeCurrency",
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
  "0x60806040523480156200001157600080fd5b50604051620011aa380380620011aa83398101604081905262000034916200011a565b806200004033620000ad565b8051600180546001600160a01b039283166001600160a01b0319918216179091556020830151600280549184169190921617905560408201516003805460609094015163ffffffff16600160a01b026001600160c01b0319909416919092161791909117905550620001b8565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146200011557600080fd5b919050565b6000608082840312156200012d57600080fd5b604051608081016001600160401b03811182821017156200015e57634e487b7160e01b600052604160045260246000fd5b6040526200016c83620000fd565b81526200017c60208401620000fd565b60208201526200018f60408401620000fd565b6040820152606083015163ffffffff81168114620001ac57600080fd5b60608201529392505050565b610fe280620001c86000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063203dbf02146100675780634a2be0041461007c578063715018a6146100a55780638da5cb5b146100ad578063d8de6587146100cd578063f2fde38b14610133575b600080fd5b61007a6100753660046105c9565b610146565b005b61008f61008a3660046109b9565b6101b6565b60405161009c9190610c34565b60405180910390f35b61007a610242565b6100b5610256565b6040516001600160a01b03909116815260200161009c565b6001546002546003546100fd926001600160a01b039081169281169190811690600160a01b900463ffffffff1684565b604080516001600160a01b0395861681529385166020850152919093169082015263ffffffff909116606082015260800161009c565b61007a610141366004610c4e565b610265565b61014e6102e3565b8051600180546001600160a01b039283166001600160a01b0319918216179091556020830151600280549184169190921617905560408201516003805460609094015163ffffffff16600160a01b026001600160c01b03199094169190921617919091179055565b6101be610392565b60015460405163128af80160e21b81526001600160a01b0390911690634a2be004906101f4908890889088908890600401610c6b565b600060405180830381865afa158015610211573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102399190810190610eb2565b95945050505050565b61024a6102e3565b6102546000610342565b565b6000546001600160a01b031690565b61026d6102e3565b6001600160a01b0381166102d75760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6102e081610342565b50565b336102ec610256565b6001600160a01b0316146102545760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102ce565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040805161018081019091526000610100820181815261012083018290526101408301829052610160830191909152819081526040805160c08101825260008082526020828101829052928201819052606082018190526080820181905260a082015291019081526040805160a081018252600080825260208281018290529282018190526060820181905260808201529101908152602001610433610457565b81526020016060815260200160608152602001600081526020016000151581525090565b6040518060a001604052806000815260200160008152602001600081526020016000815260200161048661048b565b905290565b604051806106c001604052806036906020820280368337509192915050565b634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b03811182821017156104e2576104e26104aa565b60405290565b60405160c081016001600160401b03811182821017156104e2576104e26104aa565b60405160a081016001600160401b03811182821017156104e2576104e26104aa565b60405161010081016001600160401b03811182821017156104e2576104e26104aa565b6040516106c081016001600160401b03811182821017156104e2576104e26104aa565b604051601f8201601f191681016001600160401b038111828210171561059a5761059a6104aa565b604052919050565b6001600160a01b03811681146102e057600080fd5b63ffffffff811681146102e057600080fd5b6000608082840312156105db57600080fd5b604051608081016001600160401b03811182821017156105fd576105fd6104aa565b604052823561060b816105a2565b8152602083013561061b816105a2565b6020820152604083013561062e816105a2565b60408201526060830135610641816105b7565b60608201529392505050565b6001600160401b03811681146102e057600080fd5b60006080828403121561067457600080fd5b61067c6104c0565b905081356106898161064d565b815260208201356106998161064d565b602082015260408201356106ac8161064d565b604082015260608201356106bf8161064d565b606082015292915050565b600060c082840312156106dc57600080fd5b6106e46104e8565b905081356106f1816105a2565b8082525060208201356020820152604082013560408201526060820135610717816105b7565b6060820152608082013561072a816105b7565b608082015260a082013561073d816105b7565b60a082015292915050565b80151581146102e057600080fd5b803561076181610748565b919050565b600060a0828403121561077857600080fd5b61078061050a565b90508135815260208201356020820152604082013561079e816105a2565b60408201526060828101359082015260808201356107bb81610748565b608082015292915050565b60006107408083850312156107da57600080fd5b6107e261050a565b91508235825260208084013581840152604084013560408401526060840135606084015284609f85011261081557600080fd5b61081d61054f565b91840191808684111561082f57600080fd5b608086015b84811015610854578035610847816105b7565b8352918301918301610834565b5060808501525091949350505050565b60006001600160401b0382111561087d5761087d6104aa565b50601f01601f191660200190565b600082601f83011261089c57600080fd5b81356108af6108aa82610864565b610572565b8181528460208386010111156108c457600080fd5b816020850160208301376000918101602001919091529392505050565b60006109a082840312156108f457600080fd5b6108fc61052c565b90506109088383610662565b815261091783608084016106ca565b602082015261092a836101408401610766565b604082015261093d836101e084016107c6565b60608201526109208201356001600160401b038082111561095d57600080fd5b6109698583860161088b565b608084015261094084013591508082111561098357600080fd5b506109908482850161088b565b60a08301525061096082013560c08201526109ae6109808301610756565b60e082015292915050565b600080600080608085870312156109cf57600080fd5b8435935060208501356001600160401b03808211156109ed57600080fd5b6109f9888389016108e1565b9450604087013593506060870135915080821115610a1657600080fd5b50610a23878288016108e1565b91505092959194509250565b8051825260208082015181840152604082015160408401526060820151606084015260808201516080840160005b6036811015610a8057825163ffffffff1682529183019190830190600101610a5d565b505050505050565b60005b83811015610aa3578181015183820152602001610a8b565b83811115610ab2576000848401525b50505050565b60008151808452610ad0816020860160208601610a88565b601f01601f19169290920160200192915050565b60006109a0610b2284845180516001600160401b03908116835260208083015182169084015260408281015182169084015260609182015116910152565b6020830151610b7d608086018280516001600160a01b03168252602080820151908301526040808201519083015260608082015163ffffffff9081169184019190915260808083015182169084015260a09182015116910152565b5060408381015180516101408701526020810151610160870152908101516001600160a01b031661018086015260608101516101a0860152608081015115156101c0860152506060830151610bd66101e0860182610a2f565b50608083015181610920860152610bef82860182610ab8565b91505060a0830151848203610940860152610c0a8282610ab8565b91505060c083015161096085015260e0830151610c2c61098086018215159052565b509392505050565b602081526000610c476020830184610ae4565b9392505050565b600060208284031215610c6057600080fd5b8135610c47816105a2565b848152608060208201526000610c846080830186610ae4565b8460408401528281036060840152610c9c8185610ae4565b979650505050505050565b600060808284031215610cb957600080fd5b610cc16104c0565b90508151610cce8161064d565b81526020820151610cde8161064d565b60208201526040820151610cf18161064d565b604082015260608201516106bf8161064d565b600060c08284031215610d1657600080fd5b610d1e6104e8565b90508151610d2b816105a2565b8082525060208201516020820152604082015160408201526060820151610d51816105b7565b60608201526080820151610d64816105b7565b608082015260a082015161073d816105b7565b805161076181610748565b600060a08284031215610d9457600080fd5b610d9c61050a565b905081518152602082015160208201526040820151610dba816105a2565b60408201526060828101519082015260808201516107bb81610748565b6000610740808385031215610deb57600080fd5b610df361050a565b91508251825260208084015181840152604084015160408401526060840151606084015284609f850112610e2657600080fd5b610e2e61054f565b918401918086841115610e4057600080fd5b608086015b84811015610854578051610e58816105b7565b8352918301918301610e45565b600082601f830112610e7657600080fd5b8151610e846108aa82610864565b818152846020838601011115610e9957600080fd5b610eaa826020830160208701610a88565b949350505050565b600060208284031215610ec457600080fd5b81516001600160401b0380821115610edb57600080fd5b908301906109a08286031215610ef057600080fd5b610ef861052c565b610f028684610ca7565b8152610f118660808501610d04565b6020820152610f24866101408501610d82565b6040820152610f37866101e08501610dd7565b606082015261092083015182811115610f4f57600080fd5b610f5b87828601610e65565b60808301525061094083015182811115610f7457600080fd5b610f8087828601610e65565b60a08301525061096083015160c0820152610f9e6109808401610d77565b60e08201529594505050505056fea2646970667358221220235c0c0137733981bfc9c33f7efe42913e47c827ef38258577b9961fa2008ef064736f6c634300080f0033";

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
  }

  override deploy(
    input: IncubatorConstructor.StructStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Incubator> {
    return super.deploy(input, overrides || {}) as Promise<Incubator>;
  }
  override getDeployTransaction(
    input: IncubatorConstructor.StructStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(input, overrides || {});
  }
  override attach(address: string): Incubator {
    return super.attach(address) as Incubator;
  }
  override connect(signer: Signer): Incubator__factory {
    return super.connect(signer) as Incubator__factory;
  }

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