/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Withdrawable, WithdrawableInterface } from "../Withdrawable";

const _abi = [
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "payout",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6104328061007e6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063715018a6146100515780638da5cb5b1461005b578063e115234314610087578063f2fde38b1461009a575b600080fd5b6100596100ad565b005b6000546040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100596100953660046103a6565b6100c1565b6100596100a83660046103bf565b6101fc565b6100b56102b0565b6100bf6000610331565b565b6100c96102b0565b4781111561015e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f5061796f75743a2052657175657374656420616d6f756e7420746f207769746860448201527f6472617720697320746f6f20626967000000000000000000000000000000000060648201526084015b60405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff9091169183156108fc02918491818181858888f193505050506101f9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f5061796f75743a204661696c656420746f2077697468647261770000000000006044820152606401610155565b50565b6102046102b0565b73ffffffffffffffffffffffffffffffffffffffff81166102a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610155565b6101f981610331565b60005473ffffffffffffffffffffffffffffffffffffffff1633146100bf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610155565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156103b857600080fd5b5035919050565b6000602082840312156103d157600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146103f557600080fd5b939250505056fea264697066735822122097ce435636efcb0cf47e1ec7ef89afa592d13607090ddfbdc875285d912e684d64736f6c63430008110033";

type WithdrawableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WithdrawableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Withdrawable__factory extends ContractFactory {
  constructor(...args: WithdrawableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Withdrawable";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Withdrawable> {
    return super.deploy(overrides || {}) as Promise<Withdrawable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Withdrawable {
    return super.attach(address) as Withdrawable;
  }
  connect(signer: Signer): Withdrawable__factory {
    return super.connect(signer) as Withdrawable__factory;
  }
  static readonly contractName: "Withdrawable";
  public readonly contractName: "Withdrawable";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WithdrawableInterface {
    return new utils.Interface(_abi) as WithdrawableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Withdrawable {
    return new Contract(address, _abi, signerOrProvider) as Withdrawable;
  }
}
