/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Generator,
  GeneratorInterface,
  GeneratorConstructor,
} from "../Generator";

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
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "address",
                name: "feeCurrency",
                type: "address",
              },
              {
                internalType: "address",
                name: "entryFeeCurrency",
                type: "address",
              },
              {
                internalType: "uint256[]",
                name: "participants",
                type: "uint256[]",
              },
              {
                internalType: "uint256[]",
                name: "enqueueDates",
                type: "uint256[]",
              },
              {
                internalType: "uint256",
                name: "arena",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "entryFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "fee",
                type: "uint256",
              },
              {
                components: [
                  {
                    internalType: "address[]",
                    name: "from",
                    type: "address[]",
                  },
                  {
                    internalType: "address[]",
                    name: "to",
                    type: "address[]",
                  },
                  {
                    internalType: "address[]",
                    name: "currency",
                    type: "address[]",
                  },
                  {
                    internalType: "uint256[][]",
                    name: "ids",
                    type: "uint256[][]",
                  },
                  {
                    internalType: "uint256[][]",
                    name: "amounts",
                    type: "uint256[][]",
                  },
                  {
                    internalType: "uint32[]",
                    name: "paymentType",
                    type: "uint32[]",
                  },
                ],
                internalType: "struct Payment.Struct",
                name: "payments",
                type: "tuple",
              },
            ],
            internalType: "struct Core.Struct",
            name: "core",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "startDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastCompletion",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "totalParticipants",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "cooldown",
            type: "uint32",
          },
          {
            internalType: "bool",
            name: "closed",
            type: "bool",
          },
        ],
        internalType: "struct Queue.Struct",
        name: "queue",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "queueId",
        type: "uint256",
      },
    ],
    name: "generate",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "address",
                name: "feeCurrency",
                type: "address",
              },
              {
                internalType: "address",
                name: "entryFeeCurrency",
                type: "address",
              },
              {
                internalType: "uint256[]",
                name: "participants",
                type: "uint256[]",
              },
              {
                internalType: "uint256[]",
                name: "enqueueDates",
                type: "uint256[]",
              },
              {
                internalType: "uint256",
                name: "arena",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "entryFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "fee",
                type: "uint256",
              },
              {
                components: [
                  {
                    internalType: "address[]",
                    name: "from",
                    type: "address[]",
                  },
                  {
                    internalType: "address[]",
                    name: "to",
                    type: "address[]",
                  },
                  {
                    internalType: "address[]",
                    name: "currency",
                    type: "address[]",
                  },
                  {
                    internalType: "uint256[][]",
                    name: "ids",
                    type: "uint256[][]",
                  },
                  {
                    internalType: "uint256[][]",
                    name: "amounts",
                    type: "uint256[][]",
                  },
                  {
                    internalType: "uint32[]",
                    name: "paymentType",
                    type: "uint32[]",
                  },
                ],
                internalType: "struct Payment.Struct",
                name: "payments",
                type: "tuple",
              },
            ],
            internalType: "struct Core.Struct",
            name: "core",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "randomness",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "queueId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "seed",
            type: "bytes",
          },
        ],
        internalType: "struct Race.Struct",
        name: "",
        type: "tuple",
      },
    ],
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
  "0x60806040523480156200001157600080fd5b5060405162001826380380620018268339810160408190526200003491620001ac565b80620000403362000107565b8051600180546001600160a01b03199081166001600160a01b0393841617909155602083015160028054831691841691909117905560408301516003805483169184169190911790556060830151600480548316918416919091179055608083015160058054831691841691909117905560a083015160068054831691841691909117905560c083015160078054831691841691909117905560e0830151600880548316918416919091179055610100909201516009805490931691161790555062000277565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60405161012081016001600160401b03811182821017156200018957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114620001a757600080fd5b919050565b60006101208284031215620001c057600080fd5b620001ca62000157565b620001d5836200018f565b8152620001e5602084016200018f565b6020820152620001f8604084016200018f565b60408201526200020b606084016200018f565b60608201526200021e608084016200018f565b60808201526200023160a084016200018f565b60a08201526200024460c084016200018f565b60c08201526200025760e084016200018f565b60e08201526101006200026c8185016200018f565b908201529392505050565b61159f80620002876000396000f3fe6080604052600436106100615760003560e01c8063715018a61461006a57806377479c9c1461007f5780638da5cb5b1461009f57806393380e78146100d1578063a30a0860146100ff578063d8de65871461012c578063f2fde38b146101d757005b3661006857005b005b34801561007657600080fd5b506100686101f7565b34801561008b57600080fd5b5061006861009a3660046106ef565b61020b565b3480156100ab57600080fd5b506100b46102d5565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100dd57600080fd5b506100f16100ec366004610840565b6102e4565b6040516100c89291906108c8565b34801561010b57600080fd5b5061011f61011a366004610cd6565b61036e565b6040516100c89190610f3e565b34801561013857600080fd5b5060015460025460035460045460055460065460075460085460095461017d986001600160a01b03908116988116978116968116958116948116938116928116911689565b604080516001600160a01b039a8b168152988a1660208a01529689169688019690965293871660608701529186166080860152851660a0850152841660c0840152831660e0830152909116610100820152610120016100c8565b3480156101e357600080fd5b506100686101f236600461103b565b610406565b6101ff610484565b61020960006104e3565b565b610213610484565b8051600180546001600160a01b03199081166001600160a01b0393841617909155602083015160028054831691841691909117905560408301516003805483169184169190911790556060830151600480548316918416919091179055608083015160058054831691841691909117905560a083015160068054831691841691909117905560c083015160078054831691841691909117905560e083015160088054831691841691909117905561010090920151600980549093169116179055565b6000546001600160a01b031690565b60075460405163126701cf60e31b815260609182916001600160a01b03909116906393380e789061031d9088908890889060040161105f565b600060405180830381865afa15801561033a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261036291908101906110df565b91509150935093915050565b610376610533565b60055460405160009182916001600160a01b039091169061039a9083903690611142565b600060405180830381855af49150503d80600081146103d5576040519150601f19603f3d011682016040523d82523d6000602084013e6103da565b606091505b5091509150816103e957600080fd5b808060200190518101906103fd91906113e8565b95945050505050565b61040e610484565b6001600160a01b0381166104785760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b610481816104e3565b50565b3361048d6102d5565b6001600160a01b0316146102095760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161046f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040518060800160405280610546610561565b81526020016000815260200160008152602001606081525090565b6040518061012001604052806060815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160608152602001606081526020016000815260200160008152602001600081526020016105f06040518060c001604052806060815260200160608152602001606081526020016060815260200160608152602001606081525090565b905290565b634e487b7160e01b600052604160045260246000fd5b60405161012081016001600160401b038111828210171561062e5761062e6105f5565b60405290565b60405160c081016001600160401b038111828210171561062e5761062e6105f5565b60405160e081016001600160401b038111828210171561062e5761062e6105f5565b604051608081016001600160401b038111828210171561062e5761062e6105f5565b604051601f8201601f191681016001600160401b03811182821017156106c2576106c26105f5565b604052919050565b6001600160a01b038116811461048157600080fd5b80356106ea816106ca565b919050565b6000610120828403121561070257600080fd5b61070a61060b565b610713836106df565b8152610721602084016106df565b6020820152610732604084016106df565b6040820152610743606084016106df565b6060820152610754608084016106df565b608082015261076560a084016106df565b60a082015261077660c084016106df565b60c082015261078760e084016106df565b60e082015261010061079a8185016106df565b908201529392505050565b6001600160a01b03169052565b60006001600160401b038211156107cb576107cb6105f5565b5060051b60200190565b600082601f8301126107e657600080fd5b813560206107fb6107f6836107b2565b61069a565b82815260059290921b8401810191818101908684111561081a57600080fd5b8286015b84811015610835578035835291830191830161081e565b509695505050505050565b60008060006060848603121561085557600080fd5b83356001600160401b0381111561086b57600080fd5b610877868287016107d5565b9660208601359650604090950135949350505050565b600081518084526020808501945080840160005b838110156108bd578151875295820195908201906001016108a1565b509495945050505050565b6040815260006108db604083018561088d565b82810360208401526103fd818561088d565b60006001600160401b03821115610906576109066105f5565b50601f01601f191660200190565b600082601f83011261092557600080fd5b81356109336107f6826108ed565b81815284602083860101111561094857600080fd5b816020850160208301376000918101602001919091529392505050565b600082601f83011261097657600080fd5b813560206109866107f6836107b2565b82815260059290921b840181019181810190868411156109a557600080fd5b8286015b848110156108355780356109bc816106ca565b83529183019183016109a9565b600082601f8301126109da57600080fd5b813560206109ea6107f6836107b2565b82815260059290921b84018101918181019086841115610a0957600080fd5b8286015b848110156108355780356001600160401b03811115610a2c5760008081fd5b610a3a8986838b01016107d5565b845250918301918301610a0d565b63ffffffff8116811461048157600080fd5b80356106ea81610a48565b600082601f830112610a7657600080fd5b81356020610a866107f6836107b2565b82815260059290921b84018101918181019086841115610aa557600080fd5b8286015b84811015610835578035610abc81610a48565b8352918301918301610aa9565b600060c08284031215610adb57600080fd5b610ae3610634565b905081356001600160401b0380821115610afc57600080fd5b610b0885838601610965565b83526020840135915080821115610b1e57600080fd5b610b2a85838601610965565b60208401526040840135915080821115610b4357600080fd5b610b4f85838601610965565b60408401526060840135915080821115610b6857600080fd5b610b74858386016109c9565b60608401526080840135915080821115610b8d57600080fd5b610b99858386016109c9565b608084015260a0840135915080821115610bb257600080fd5b50610bbf84828501610a65565b60a08301525092915050565b60006101208284031215610bde57600080fd5b610be661060b565b905081356001600160401b0380821115610bff57600080fd5b610c0b85838601610914565b8352610c19602085016106df565b6020840152610c2a604085016106df565b60408401526060840135915080821115610c4357600080fd5b610c4f858386016107d5565b60608401526080840135915080821115610c6857600080fd5b610c74858386016107d5565b608084015260a084013560a084015260c084013560c084015260e084013560e084015261010091508184013581811115610cad57600080fd5b610cb986828701610ac9565b8385015250505092915050565b803580151581146106ea57600080fd5b60008060408385031215610ce957600080fd5b82356001600160401b0380821115610d0057600080fd5b9084019060e08287031215610d1457600080fd5b610d1c610656565b823582811115610d2b57600080fd5b610d3788828601610bcb565b825250602083013560208201526040830135604082015260608301356060820152610d6460808401610a5a565b6080820152610d7560a08401610a5a565b60a0820152610d8660c08401610cc6565b60c08201529660209590950135955050505050565b60005b83811015610db6578181015183820152602001610d9e565b50506000910152565b60008151808452610dd7816020860160208601610d9b565b601f01601f19169290920160200192915050565b600081518084526020808501945080840160005b838110156108bd5781516001600160a01b031687529582019590820190600101610dff565b600081518084526020808501808196508360051b8101915082860160005b85811015610e6c578284038952610e5a84835161088d565b98850198935090840190600101610e42565b5091979650505050505050565b6000815160c08452610e8e60c0850182610deb565b905060208084015185830382870152610ea78382610deb565b92505060408401518583036040870152610ec18382610deb565b92505060608401518583036060870152610edb8382610e24565b92505060808401518583036080870152610ef58382610e24565b60a086810151888303918901919091528051808352908401945060009250908301905b8083101561083557845163ffffffff168252938301936001929092019190830190610f18565b60208152600082516080602084015280516101208060a0860152610f666101c0860183610dbf565b91506020830151610f7a60c08701826107a5565b506040830151610f8d60e08701826107a5565b506060830151609f19610100818886030181890152610fac858461088d565b945060808601519250818886030184890152610fc8858461088d565b60a08701516101408a015260c08701516101608a015260e08701516101808a01529501518786039091016101a0880152939250611009915082905083610e79565b91505060208401516040840152604084015160608401526060840151601f198483030160808501526103fd8282610dbf565b60006020828403121561104d57600080fd5b8135611058816106ca565b9392505050565b606081526000611072606083018661088d565b60208301949094525060400152919050565b600082601f83011261109557600080fd5b815160206110a56107f6836107b2565b82815260059290921b840181019181810190868411156110c457600080fd5b8286015b8481101561083557805183529183019183016110c8565b600080604083850312156110f257600080fd5b82516001600160401b038082111561110957600080fd5b61111586838701611084565b9350602085015191508082111561112b57600080fd5b5061113885828601611084565b9150509250929050565b8183823760009101908152919050565b600082601f83011261116357600080fd5b81516111716107f6826108ed565b81815284602083860101111561118657600080fd5b611197826020830160208701610d9b565b949350505050565b80516106ea816106ca565b600082601f8301126111bb57600080fd5b815160206111cb6107f6836107b2565b82815260059290921b840181019181810190868411156111ea57600080fd5b8286015b84811015610835578051611201816106ca565b83529183019183016111ee565b600082601f83011261121f57600080fd5b8151602061122f6107f6836107b2565b82815260059290921b8401810191818101908684111561124e57600080fd5b8286015b848110156108355780516001600160401b038111156112715760008081fd5b61127f8986838b0101611084565b845250918301918301611252565b600082601f83011261129e57600080fd5b815160206112ae6107f6836107b2565b82815260059290921b840181019181810190868411156112cd57600080fd5b8286015b848110156108355780516112e481610a48565b83529183019183016112d1565b600060c0828403121561130357600080fd5b61130b610634565b82519091506001600160401b038082111561132557600080fd5b611331858386016111aa565b8352602084015191508082111561134757600080fd5b611353858386016111aa565b6020840152604084015191508082111561136c57600080fd5b611378858386016111aa565b6040840152606084015191508082111561139157600080fd5b61139d8583860161120e565b606084015260808401519150808211156113b657600080fd5b6113c28583860161120e565b608084015260a08401519150808211156113db57600080fd5b50610bbf8482850161128d565b6000602082840312156113fa57600080fd5b81516001600160401b038082111561141157600080fd5b908301906080828603121561142557600080fd5b61142d610678565b82518281111561143c57600080fd5b8301610120818803121561144f57600080fd5b61145761060b565b81518481111561146657600080fd5b61147289828501611152565b8252506114816020830161119f565b60208201526114926040830161119f565b60408201526060820151848111156114a957600080fd5b6114b589828501611084565b6060830152506080820151848111156114cd57600080fd5b6114d989828501611084565b60808301525060a082015160a082015260c082015160c082015260e082015160e0820152610100808301518581111561151157600080fd5b61151d8a8286016112f1565b8284015250508083525050602083015160208201526040830151604082015260608301518281111561154e57600080fd5b61155a87828601611152565b6060830152509594505050505056fea2646970667358221220f0fb4401ea1869dafa462cdfc762096d4db0634ce481e45a8c702f03eb4c0ed764736f6c63430008100033";

type GeneratorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GeneratorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Generator__factory extends ContractFactory {
  constructor(...args: GeneratorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Generator";
  }

  deploy(
    input: GeneratorConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Generator> {
    return super.deploy(input, overrides || {}) as Promise<Generator>;
  }
  getDeployTransaction(
    input: GeneratorConstructor.StructStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(input, overrides || {});
  }
  attach(address: string): Generator {
    return super.attach(address) as Generator;
  }
  connect(signer: Signer): Generator__factory {
    return super.connect(signer) as Generator__factory;
  }
  static readonly contractName: "Generator";
  public readonly contractName: "Generator";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GeneratorInterface {
    return new utils.Interface(_abi) as GeneratorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Generator {
    return new Contract(address, _abi, signerOrProvider) as Generator;
  }
}
