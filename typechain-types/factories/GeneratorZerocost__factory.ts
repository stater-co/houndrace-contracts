/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GeneratorZerocost,
  GeneratorZerocostInterface,
  GeneratorConstructor,
} from "../GeneratorZerocost";

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
            name: "arenas",
            type: "address",
          },
          {
            internalType: "address",
            name: "hounds",
            type: "address",
          },
          {
            internalType: "address",
            name: "allowed",
            type: "address",
          },
          {
            internalType: "address",
            name: "methods",
            type: "address",
          },
          {
            internalType: "address",
            name: "payments",
            type: "address",
          },
          {
            internalType: "address",
            name: "zerocost",
            type: "address",
          },
          {
            internalType: "address",
            name: "incubator",
            type: "address",
          },
          {
            internalType: "address",
            name: "gamification",
            type: "address",
          },
        ],
        internalType: "struct GeneratorConstructor.Struct",
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
    stateMutability: "payable",
    type: "fallback",
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
        name: "arenas",
        type: "address",
      },
      {
        internalType: "address",
        name: "hounds",
        type: "address",
      },
      {
        internalType: "address",
        name: "allowed",
        type: "address",
      },
      {
        internalType: "address",
        name: "methods",
        type: "address",
      },
      {
        internalType: "address",
        name: "payments",
        type: "address",
      },
      {
        internalType: "address",
        name: "zerocost",
        type: "address",
      },
      {
        internalType: "address",
        name: "incubator",
        type: "address",
      },
      {
        internalType: "address",
        name: "gamification",
        type: "address",
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
            name: "arenas",
            type: "address",
          },
          {
            internalType: "address",
            name: "hounds",
            type: "address",
          },
          {
            internalType: "address",
            name: "allowed",
            type: "address",
          },
          {
            internalType: "address",
            name: "methods",
            type: "address",
          },
          {
            internalType: "address",
            name: "payments",
            type: "address",
          },
          {
            internalType: "address",
            name: "zerocost",
            type: "address",
          },
          {
            internalType: "address",
            name: "incubator",
            type: "address",
          },
          {
            internalType: "address",
            name: "gamification",
            type: "address",
          },
        ],
        internalType: "struct GeneratorConstructor.Struct",
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
        internalType: "uint256[]",
        name: "participants",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "terrain",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "theRandomness",
        type: "uint256",
      },
    ],
    name: "simulateClassicRace",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
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
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001545380380620015458339810160408190526200003491620001ac565b80620000403362000107565b8051600180546001600160a01b03199081166001600160a01b0393841617909155602083015160028054831691841691909117905560408301516003805483169184169190911790556060830151600480548316918416919091179055608083015160058054831691841691909117905560a083015160068054831691841691909117905560c083015160078054831691841691909117905560e0830151600880548316918416919091179055610100909201516009805490931691161790555062000277565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60405161012081016001600160401b03811182821017156200018957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114620001a757600080fd5b919050565b60006101208284031215620001c057600080fd5b620001ca62000157565b620001d5836200018f565b8152620001e5602084016200018f565b6020820152620001f8604084016200018f565b60408201526200020b606084016200018f565b60608201526200021e608084016200018f565b60808201526200023160a084016200018f565b60a08201526200024460c084016200018f565b60c08201526200025760e084016200018f565b60e08201526101006200026c8185016200018f565b908201529392505050565b6112be80620002876000396000f3fe6080604052600436106100565760003560e01c8063715018a61461005f57806377479c9c146100745780638da5cb5b1461009457806393380e78146100c6578063d8de6587146100f4578063f2fde38b1461019f57005b3661005d57005b005b34801561006b57600080fd5b5061005d6101bf565b34801561008057600080fd5b5061005d61008f366004610afe565b6101d3565b3480156100a057600080fd5b506100a961029d565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100d257600080fd5b506100e66100e1366004610bd7565b6102ac565b6040516100bd929190610cb7565b34801561010057600080fd5b50600154600254600354600454600554600654600754600854600954610145986001600160a01b03908116988116978116968116958116948116938116928116911689565b604080516001600160a01b039a8b168152988a1660208a01529689169688019690965293871660608701529186166080860152851660a0850152841660c0840152831660e0830152909116610100820152610120016100bd565b3480156101ab57600080fd5b5061005d6101ba366004610ce5565b6104a6565b6101c7610524565b6101d16000610583565b565b6101db610524565b8051600180546001600160a01b03199081166001600160a01b0393841617909155602083015160028054831691841691909117905560408301516003805483169184169190911790556060830151600480548316918416919091179055608083015160058054831691841691909117905560a083015160068054831691841691909117905560c083015160078054831691841691909117905560e083015160088054831691841691909117905561010090920151600980549093169116179055565b6000546001600160a01b031690565b600254604051635ba52fdf60e11b81526004810184905260609182916000916001600160a01b03169063b74a5fbe90602401600060405180830381865afa1580156102fb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103239190810190610dac565b9050600061033187836105d3565b90506000600f8644604051602001610353929190918252602082015260400190565b6040516020818303038152906040528051906020012060001c6103769190610ea0565b905060005b82518110156104065760648284838151811061039957610399610eb4565b60200260200101516103ab9190610ee0565b6103b59190610ef7565b8382815181106103c7576103c7610eb4565b60200260200101516103d99190610f0b565b8382815181106103eb576103eb610eb4565b60209081029190910101526103ff81610f1e565b905061037b565b5073__$13ac0bbe16ff54a473352cca36c2f6a8c7$__633e96a35b838a6000600187516104339190610f37565b6040518563ffffffff1660e01b81526004016104529493929190610f4a565b600060405180830381865af415801561046f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104979190810190610fe9565b94509450505050935093915050565b6104ae610524565b6001600160a01b0381166105185760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61052181610583565b50565b3361052d61029d565b6001600160a01b0316146101d15760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161050f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6060600083516001600160401b038111156105f0576105f0610a48565b604051908082528060200260200182016040528015610619578160200160208202803683370190505b5090506106246109e7565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101829052905b86518110156109da5760085487516001600160a01b03909116906385e3f0589089908490811061069057610690610eb4565b60200260200101516040518263ffffffff1660e01b81526004016106b691815260200190565b600060405180830381865afa1580156106d3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106fb91908101906110cf565b60095488519194506001600160a01b03169063e62256309089908490811061072557610725610eb4565b60200260200101516040518263ffffffff1660e01b815260040161074b91815260200190565b60e060405180830381865afa158015610768573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061078c919061117b565b60808401516104208101516104008201516103e08301516103c090930151939550909290916107ba91611219565b6107c49190611219565b6107ce9190611219565b6107d990606361123d565b63ffffffff168482815181106107f1576107f1610eb4565b602002602001018181525050600084828151811061081157610811610eb4565b60200260200101519050866080015163ffffffff16846080015160096036811061083d5761083d610eb4565b602002015163ffffffff160361088257610858601482610ef7565b85838151811061086a5761086a610eb4565b6020026020010181815161087e9190610f0b565b9052505b8660a0015163ffffffff168460800151600a603681106108a4576108a4610eb4565b602002015163ffffffff16036108e9576108bf601482610ef7565b8583815181106108d1576108d1610eb4565b602002602001018181516108e59190610f0b565b9052505b8660c0015163ffffffff168460800151600b6036811061090b5761090b610eb4565b602002015163ffffffff160361095057610926601482610ef7565b85838151811061093857610938610eb4565b6020026020010181815161094c9190610f0b565b9052505b826080015163ffffffff1660028460c0015161096c9190611265565b63ffffffff1611156109c957606485838151811061098c5761098c610eb4565b6020026020010151605a6109a09190610ee0565b6109aa9190610ef7565b8583815181106109bc576109bc610eb4565b6020026020010181815250505b506109d381610f1e565b905061065e565b5091925050505b92915050565b6040518060e0016040528060008152602001600081526020016000815260200160008152602001610a16610a29565b8152606060208201526040016000905290565b604051806106c001604052806036906020820280368337509192915050565b634e487b7160e01b600052604160045260246000fd5b60405161012081016001600160401b0381118282101715610a8157610a81610a48565b60405290565b60405160e081016001600160401b0381118282101715610a8157610a81610a48565b604051601f8201601f191681016001600160401b0381118282101715610ad157610ad1610a48565b604052919050565b6001600160a01b038116811461052157600080fd5b8035610af981610ad9565b919050565b60006101208284031215610b1157600080fd5b610b19610a5e565b610b2283610aee565b8152610b3060208401610aee565b6020820152610b4160408401610aee565b6040820152610b5260608401610aee565b6060820152610b6360808401610aee565b6080820152610b7460a08401610aee565b60a0820152610b8560c08401610aee565b60c0820152610b9660e08401610aee565b60e0820152610100610ba9818501610aee565b908201529392505050565b60006001600160401b03821115610bcd57610bcd610a48565b5060051b60200190565b600080600060608486031215610bec57600080fd5b83356001600160401b03811115610c0257600080fd5b8401601f81018613610c1357600080fd5b80356020610c28610c2383610bb4565b610aa9565b82815260059290921b83018101918181019089841115610c4757600080fd5b938201935b83851015610c6557843582529382019390820190610c4c565b999188013598505060409096013595945050505050565b600081518084526020808501945080840160005b83811015610cac57815187529582019590820190600101610c90565b509495945050505050565b604081526000610cca6040830185610c7c565b8281036020840152610cdc8185610c7c565b95945050505050565b600060208284031215610cf757600080fd5b8135610d0281610ad9565b9392505050565b600082601f830112610d1a57600080fd5b81516001600160401b03811115610d3357610d33610a48565b6020610d47601f8301601f19168201610aa9565b8281528582848701011115610d5b57600080fd5b60005b83811015610d79578581018301518282018401528201610d5e565b506000928101909101919091529392505050565b8051610af981610ad9565b805163ffffffff81168114610af957600080fd5b600060208284031215610dbe57600080fd5b81516001600160401b0380821115610dd557600080fd5b9083019060e08286031215610de957600080fd5b610df1610a87565b825182811115610e0057600080fd5b610e0c87828601610d09565b825250602083015182811115610e2157600080fd5b610e2d87828601610d09565b602083015250610e3f60408401610d8d565b604082015260608301516060820152610e5a60808401610d98565b6080820152610e6b60a08401610d98565b60a0820152610e7c60c08401610d98565b60c082015295945050505050565b634e487b7160e01b600052601260045260246000fd5b600082610eaf57610eaf610e8a565b500690565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176109e1576109e1610eca565b600082610f0657610f06610e8a565b500490565b808201808211156109e1576109e1610eca565b600060018201610f3057610f30610eca565b5060010190565b818103818111156109e1576109e1610eca565b608081526000610f5d6080830187610c7c565b8281036020840152610f6f8187610c7c565b604084019590955250506060015292915050565b600082601f830112610f9457600080fd5b81516020610fa4610c2383610bb4565b82815260059290921b84018101918181019086841115610fc357600080fd5b8286015b84811015610fde5780518352918301918301610fc7565b509695505050505050565b60008060408385031215610ffc57600080fd5b82516001600160401b038082111561101357600080fd5b61101f86838701610f83565b9350602085015191508082111561103557600080fd5b5061104285828601610f83565b9150509250929050565b600082601f83011261105d57600080fd5b6040516106c08082016001600160401b038111838210171561108157611081610a48565b6040528301818582111561109457600080fd5b845b828110156110b5576110a781610d98565b825260209182019101611096565b509195945050505050565b805160078110610af957600080fd5b6000602082840312156110e157600080fd5b81516001600160401b03808211156110f857600080fd5b90830190610780828603121561110d57600080fd5b611115610a87565b82518152602083015160208201526040830151604082015260608301516060820152611144866080850161104c565b60808201526107408301518281111561115c57600080fd5b61116887828601610d09565b60a083015250610e7c61076084016110c0565b600060e0828403121561118d57600080fd5b60405160e081016001600160401b03811182821017156111af576111af610a48565b60405282516111bd81610ad9565b808252506020830151602082015260408301516040820152606083015160608201526111eb60808401610d98565b60808201526111fc60a08401610d98565b60a082015261120d60c08401610d98565b60c08201529392505050565b63ffffffff81811683821601908082111561123657611236610eca565b5092915050565b63ffffffff81811683821602808216919082811461125d5761125d610eca565b505092915050565b600063ffffffff8084168061127c5761127c610e8a565b9216919091049291505056fea2646970667358221220720e208553b7294b32b500dce15733f721bbf6923694d66fded66ce89166c09964736f6c63430008110033";

type GeneratorZerocostConstructorParams =
  | [linkLibraryAddresses: GeneratorZerocostLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GeneratorZerocostConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class GeneratorZerocost__factory extends ContractFactory {
  constructor(...args: GeneratorZerocostConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        GeneratorZerocost__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
    this.contractName = "GeneratorZerocost";
  }

  static linkBytecode(
    linkLibraryAddresses: GeneratorZerocostLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$13ac0bbe16ff54a473352cca36c2f6a8c7\\$__", "g"),
      linkLibraryAddresses["contracts/utils/Sortings.sol:Sortings"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    input: GeneratorConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GeneratorZerocost> {
    return super.deploy(input, overrides || {}) as Promise<GeneratorZerocost>;
  }
  getDeployTransaction(
    input: GeneratorConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(input, overrides || {});
  }
  attach(address: string): GeneratorZerocost {
    return super.attach(address) as GeneratorZerocost;
  }
  connect(signer: Signer): GeneratorZerocost__factory {
    return super.connect(signer) as GeneratorZerocost__factory;
  }
  static readonly contractName: "GeneratorZerocost";
  public readonly contractName: "GeneratorZerocost";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GeneratorZerocostInterface {
    return new utils.Interface(_abi) as GeneratorZerocostInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GeneratorZerocost {
    return new Contract(address, _abi, signerOrProvider) as GeneratorZerocost;
  }
}

export interface GeneratorZerocostLibraryAddresses {
  ["contracts/utils/Sortings.sol:Sortings"]: string;
}
