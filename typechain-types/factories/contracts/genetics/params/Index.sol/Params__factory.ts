/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  Params,
  ParamsInterface,
  GeneticsConstructor,
} from "../../../../../contracts/genetics/params/Index.sol/Params";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "randomness",
            type: "address",
          },
          {
            internalType: "address",
            name: "terrains",
            type: "address",
          },
          {
            internalType: "uint32[54]",
            name: "male",
            type: "uint32[54]",
          },
          {
            internalType: "uint32[54]",
            name: "female",
            type: "uint32[54]",
          },
          {
            internalType: "uint32",
            name: "maleGenesProbability",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "femaleGenesProbability",
            type: "uint32",
          },
          {
            internalType: "uint32[13]",
            name: "geneticSequenceSignature",
            type: "uint32[13]",
          },
          {
            internalType: "uint32[54]",
            name: "maxValues",
            type: "uint32[54]",
          },
        ],
        internalType: "struct GeneticsConstructor.Struct",
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
    inputs: [],
    name: "control",
    outputs: [
      {
        internalType: "address",
        name: "randomness",
        type: "address",
      },
      {
        internalType: "address",
        name: "terrains",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "maleGenesProbability",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "femaleGenesProbability",
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
            name: "randomness",
            type: "address",
          },
          {
            internalType: "address",
            name: "terrains",
            type: "address",
          },
          {
            internalType: "uint32[54]",
            name: "male",
            type: "uint32[54]",
          },
          {
            internalType: "uint32[54]",
            name: "female",
            type: "uint32[54]",
          },
          {
            internalType: "uint32",
            name: "maleGenesProbability",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "femaleGenesProbability",
            type: "uint32",
          },
          {
            internalType: "uint32[13]",
            name: "geneticSequenceSignature",
            type: "uint32[13]",
          },
          {
            internalType: "uint32[54]",
            name: "maxValues",
            type: "uint32[54]",
          },
        ],
        internalType: "struct GeneticsConstructor.Struct",
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
  "0x60806040523480156200001157600080fd5b5060405162000b3638038062000b368339810160408190526200003491620003dd565b6200003f3362000114565b8051600180546001600160a01b039283166001600160a01b03199182161782556020840151600280549190941691161790915560408201518291906200008a90600390603662000164565b506060820151620000a2906009830190603662000164565b50608082015160108201805460a085015163ffffffff908116640100000000026001600160401b031990921693169290921791909117905560c0820151620000f1906011830190600d62000207565b5060e082015162000109906013830190603662000164565b50905050506200049d565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600783019183908215620001f55791602002820160005b83821115620001c157835183826101000a81548163ffffffff021916908363ffffffff16021790555092602001926004016020816003010492830192600103026200017b565b8015620001f35782816101000a81549063ffffffff0219169055600401602081600301049283019260010302620001c1565b505b506200020392915062000263565b5090565b600283019183908215620001f557916020028201600083821115620001c157835183826101000a81548163ffffffff021916908363ffffffff16021790555092602001926004016020816003010492830192600103026200017b565b5b8082111562000203576000815560010162000264565b634e487b7160e01b600052604160045260246000fd5b60405161010081016001600160401b0381118282101715620002b657620002b66200027a565b60405290565b80516001600160a01b0381168114620002d457600080fd5b919050565b805163ffffffff81168114620002d457600080fd5b600082601f8301126200030057600080fd5b6040516106c08082016001600160401b03811183821017156200032757620003276200027a565b604052830181858211156200033b57600080fd5b845b8281101562000360576200035181620002d9565b8252602091820191016200033d565b509195945050505050565b600082601f8301126200037d57600080fd5b6040516101a08082016001600160401b0381118382101715620003a457620003a46200027a565b60405283018185821115620003b857600080fd5b845b828110156200036057620003ce81620002d9565b825260209182019101620003ba565b60006116608284031215620003f157600080fd5b620003fb62000290565b6200040683620002bc565b81526200041660208401620002bc565b60208201526200042a8460408501620002ee565b60408201526200043f846107008501620002ee565b606082015262000453610dc08401620002d9565b608082015262000467610de08401620002d9565b60a08201526200047c84610e0085016200036b565b60c08201526200049184610fa08501620002ee565b60e08201529392505050565b61068980620004ad6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806356967ca81461005c578063715018a6146100715780638da5cb5b14610079578063d8de65871461009e578063f2fde38b14610104575b600080fd5b61006f61006a366004610584565b610117565b005b61006f6101de565b6100816101f2565b6040516001600160a01b0390911681526020015b60405180910390f35b6001546002546011546100cd926001600160a01b0390811692169063ffffffff80821691600160201b90041684565b604080516001600160a01b03958616815294909316602085015263ffffffff91821692840192909252166060820152608001610095565b61006f610112366004610631565b610201565b8051600180546001600160a01b039283166001600160a01b031991821617825560208401516002805491909416911617909155604082015182919061016090600390603661032e565b506060820151610176906009830190603661032e565b50608082015160108201805460a085015163ffffffff908116600160201b026001600160401b031990921693169290921791909117905560c08201516101c2906011830190600d6103ca565b5060e08201516101d8906013830190603661032e565b50505050565b6101e661027f565b6101f060006102de565b565b6000546001600160a01b031690565b61020961027f565b6001600160a01b0381166102735760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61027c816102de565b50565b336102886101f2565b6001600160a01b0316146101f05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161026a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6007830191839082156103ba5791602002820160005b8382111561038857835183826101000a81548163ffffffff021916908363ffffffff1602179055509260200192600401602081600301049283019260010302610344565b80156103b85782816101000a81549063ffffffff0219169055600401602081600301049283019260010302610388565b505b506103c6929150610423565b5090565b6002830191839082156103ba5791602002820160008382111561038857835183826101000a81548163ffffffff021916908363ffffffff1602179055509260200192600401602081600301049283019260010302610344565b5b808211156103c65760008155600101610424565b634e487b7160e01b600052604160045260246000fd5b60405161010081016001600160401b038111828210171561047157610471610438565b60405290565b80356001600160a01b038116811461048e57600080fd5b919050565b803563ffffffff8116811461048e57600080fd5b600082601f8301126104b857600080fd5b6040516106c08082016001600160401b03811183821017156104dc576104dc610438565b604052830181858211156104ef57600080fd5b845b828110156105105761050281610493565b8252602091820191016104f1565b509195945050505050565b600082601f83011261052c57600080fd5b6040516101a08082016001600160401b038111838210171561055057610550610438565b6040528301818582111561056357600080fd5b845b828110156105105761057681610493565b825260209182019101610565565b6000611660828403121561059757600080fd5b61059f61044e565b6105a883610477565b81526105b660208401610477565b60208201526105c884604085016104a7565b60408201526105db8461070085016104a7565b60608201526105ed610dc08401610493565b60808201526105ff610de08401610493565b60a082015261061284610e00850161051b565b60c082015261062584610fa085016104a7565b60e08201529392505050565b60006020828403121561064357600080fd5b61064c82610477565b939250505056fea2646970667358221220d0489d8e7a603e6a6e1bde932a1a134434a642f9f6aff1f594258b7b0f6bdc9364736f6c634300080f0033";

type ParamsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ParamsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Params__factory extends ContractFactory {
  constructor(...args: ParamsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    input: GeneticsConstructor.StructStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Params> {
    return super.deploy(input, overrides || {}) as Promise<Params>;
  }
  override getDeployTransaction(
    input: GeneticsConstructor.StructStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(input, overrides || {});
  }
  override attach(address: string): Params {
    return super.attach(address) as Params;
  }
  override connect(signer: Signer): Params__factory {
    return super.connect(signer) as Params__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ParamsInterface {
    return new utils.Interface(_abi) as ParamsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Params {
    return new Contract(address, _abi, signerOrProvider) as Params;
  }
}
