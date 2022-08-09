/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Randomness, RandomnessInterface } from "../Randomness";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "input",
        type: "bytes",
      },
    ],
    name: "getRandomNumber",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610218806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063abaa08b314610030575b600080fd5b61004361003e3660046100af565b610055565b60405190815260200160405180910390f35b600044424561006560014361015f565b408560405160200161007b959493929190610184565b60408051601f19818403018152919052805160209091012092915050565b634e487b7160e01b600052604160045260246000fd5b6000602082840312156100c157600080fd5b81356001600160401b03808211156100d857600080fd5b818401915084601f8301126100ec57600080fd5b8135818111156100fe576100fe610099565b604051601f8201601f19908116603f0116810190838211818310171561012657610126610099565b8160405282815287602084870101111561013f57600080fd5b826020860160208301376000928101602001929092525095945050505050565b60008282101561017f57634e487b7160e01b600052601160045260246000fd5b500390565b858152600060208681840152856040840152846060840152835160005b818110156101bd578581018301518582016080015282016101a1565b818111156101cf576000608083870101525b509290920160800197965050505050505056fea2646970667358221220ef2467824f7216b5f8430be477d64f0449b85038c942cf9039ca11784c4442c864736f6c634300080f0033";

type RandomnessConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RandomnessConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Randomness__factory extends ContractFactory {
  constructor(...args: RandomnessConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Randomness";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Randomness> {
    return super.deploy(overrides || {}) as Promise<Randomness>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Randomness {
    return super.attach(address) as Randomness;
  }
  connect(signer: Signer): Randomness__factory {
    return super.connect(signer) as Randomness__factory;
  }
  static readonly contractName: "Randomness";
  public readonly contractName: "Randomness";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RandomnessInterface {
    return new utils.Interface(_abi) as RandomnessInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Randomness {
    return new Contract(address, _abi, signerOrProvider) as Randomness;
  }
}