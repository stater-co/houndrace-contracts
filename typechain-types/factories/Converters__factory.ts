/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Converters, ConvertersInterface } from "../Converters";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "erc721Contract",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "erc721IdsToOwners",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x61036961003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c806340160f2d1461003a575b600080fd5b61004d6100483660046101b3565b610063565b60405161005a9190610285565b60405180910390f35b6060600082516001600160401b038111156100805761008061019d565b6040519080825280602002602001820160405280156100a9578160200160208202803683370190505b5090508360005b845181101561017b57816001600160a01b0316636352211e8683815181106100da576100da6102d2565b60200260200101516040518263ffffffff1660e01b815260040161010091815260200190565b602060405180830381865afa15801561011d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061014191906102e8565b838281518110610153576101536102d2565b6001600160a01b03909216602092830291909101909101526101748161030c565b90506100b0565b5090949350505050565b6001600160a01b038116811461019a57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156101c657600080fd5b82356101d181610185565b91506020838101356001600160401b03808211156101ee57600080fd5b818601915086601f83011261020257600080fd5b8135818111156102145761021461019d565b8060051b604051601f19603f830116810181811085821117156102395761023961019d565b60405291825284820192508381018501918983111561025757600080fd5b938501935b828510156102755784358452938501939285019261025c565b8096505050505050509250929050565b6020808252825182820181905260009190848201906040850190845b818110156102c65783516001600160a01b0316835292840192918401916001016102a1565b50909695505050505050565b634e487b7160e01b600052603260045260246000fd5b6000602082840312156102fa57600080fd5b815161030581610185565b9392505050565b60006001820161032c57634e487b7160e01b600052601160045260246000fd5b506001019056fea26469706673582212206f14a0889c185a8908ce127c4dbb6c50e2d168ecda341af64ca74303bb270f8b64736f6c63430008100033";

type ConvertersConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConvertersConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Converters__factory extends ContractFactory {
  constructor(...args: ConvertersConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Converters";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Converters> {
    return super.deploy(overrides || {}) as Promise<Converters>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Converters {
    return super.attach(address) as Converters;
  }
  connect(signer: Signer): Converters__factory {
    return super.connect(signer) as Converters__factory;
  }
  static readonly contractName: "Converters";
  public readonly contractName: "Converters";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConvertersInterface {
    return new utils.Interface(_abi) as ConvertersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Converters {
    return new Contract(address, _abi, signerOrProvider) as Converters;
  }
}
