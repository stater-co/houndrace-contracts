/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AlphaERC721, AlphaERC721Interface } from "../AlphaERC721";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
        ],
        internalType: "struct AlphaERC721.Constructor",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002d7238038062002d7283398181016040528101906200003791906200029e565b8060000151600090816200004c91906200053a565b508060200151600190816200006291906200053a565b505062000621565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620000ce8262000083565b810181811067ffffffffffffffff82111715620000f057620000ef62000094565b5b80604052505050565b6000620001056200006a565b9050620001138282620000c3565b919050565b600080fd5b600080fd5b600080fd5b600067ffffffffffffffff82111562000145576200014462000094565b5b620001508262000083565b9050602081019050919050565b60005b838110156200017d57808201518184015260208101905062000160565b60008484015250505050565b6000620001a06200019a8462000127565b620000f9565b905082815260208101848484011115620001bf57620001be62000122565b5b620001cc8482856200015d565b509392505050565b600082601f830112620001ec57620001eb6200011d565b5b8151620001fe84826020860162000189565b91505092915050565b60006040828403121562000220576200021f6200007e565b5b6200022c6040620000f9565b9050600082015167ffffffffffffffff8111156200024f576200024e62000118565b5b6200025d84828501620001d4565b600083015250602082015167ffffffffffffffff81111562000284576200028362000118565b5b6200029284828501620001d4565b60208301525092915050565b600060208284031215620002b757620002b662000074565b5b600082015167ffffffffffffffff811115620002d857620002d762000079565b5b620002e68482850162000207565b91505092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200034257607f821691505b602082108103620003585762000357620002fa565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003c27fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000383565b620003ce868362000383565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006200041b620004156200040f84620003e6565b620003f0565b620003e6565b9050919050565b6000819050919050565b6200043783620003fa565b6200044f620004468262000422565b84845462000390565b825550505050565b600090565b6200046662000457565b620004738184846200042c565b505050565b5b818110156200049b576200048f6000826200045c565b60018101905062000479565b5050565b601f821115620004ea57620004b4816200035e565b620004bf8462000373565b81016020851015620004cf578190505b620004e7620004de8562000373565b83018262000478565b50505b505050565b600082821c905092915050565b60006200050f60001984600802620004ef565b1980831691505092915050565b60006200052a8383620004fc565b9150826002028217905092915050565b6200054582620002ef565b67ffffffffffffffff81111562000561576200056062000094565b5b6200056d825462000329565b6200057a8282856200049f565b600060209050601f831160018114620005b257600084156200059d578287015190505b620005a985826200051c565b86555062000619565b601f198416620005c2866200035e565b60005b82811015620005ec57848901518255600182019150602085019450602081019050620005c5565b868310156200060c578489015162000608601f891682620004fc565b8355505b6001600288020188555050505b505050505050565b61274180620006316000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063a22cb46511610066578063a22cb4651461025b578063b88d4fde14610277578063c87b56dd14610293578063e985e9c5146102c3576100ea565b806370a08231146101f15780638832e6e31461022157806395d89b411461023d576100ea565b8063095ea7b3116100c8578063095ea7b31461016d57806323b872dd1461018957806342842e0e146101a55780636352211e146101c1576100ea565b806301ffc9a7146100ef57806306fdde031461011f578063081812fc1461013d575b600080fd5b61010960048036038101906101049190611682565b6102f3565b60405161011691906116ca565b60405180910390f35b6101276103d5565b6040516101349190611775565b60405180910390f35b610157600480360381019061015291906117cd565b610467565b604051610164919061183b565b60405180910390f35b61018760048036038101906101829190611882565b6104ec565b005b6101a3600480360381019061019e91906118c2565b610603565b005b6101bf60048036038101906101ba91906118c2565b610663565b005b6101db60048036038101906101d691906117cd565b610683565b6040516101e8919061183b565b60405180910390f35b61020b60048036038101906102069190611915565b610734565b6040516102189190611951565b60405180910390f35b61023b60048036038101906102369190611aa1565b6107eb565b005b610245610846565b6040516102529190611775565b60405180910390f35b61027560048036038101906102709190611b3c565b6108d8565b005b610291600480360381019061028c9190611b7c565b6108ee565b005b6102ad60048036038101906102a891906117cd565b610950565b6040516102ba9190611775565b60405180910390f35b6102dd60048036038101906102d89190611bff565b6109f7565b6040516102ea91906116ca565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103be57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103ce57506103cd82610a8b565b5b9050919050565b6060600080546103e490611c6e565b80601f016020809104026020016040519081016040528092919081815260200182805461041090611c6e565b801561045d5780601f106104325761010080835404028352916020019161045d565b820191906000526020600020905b81548152906001019060200180831161044057829003601f168201915b5050505050905090565b600061047282610af5565b6104b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104a890611d11565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104f782610683565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610567576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055e90611da3565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610586610b61565b73ffffffffffffffffffffffffffffffffffffffff1614806105b557506105b4816105af610b61565b6109f7565b5b6105f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105eb90611e35565b60405180910390fd5b6105fe8383610b69565b505050565b61061461060e610b61565b82610c22565b610653576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064a90611ec7565b60405180910390fd5b61065e838383610d00565b505050565b61067e838383604051806020016040528060008152506108ee565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361072b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072290611f59565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079b90611feb565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6107f58383610f5b565b6108026000848484611128565b610841576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108389061207d565b60405180910390fd5b505050565b60606001805461085590611c6e565b80601f016020809104026020016040519081016040528092919081815260200182805461088190611c6e565b80156108ce5780601f106108a3576101008083540402835291602001916108ce565b820191906000526020600020905b8154815290600101906020018083116108b157829003601f168201915b5050505050905090565b6108ea6108e3610b61565b83836112af565b5050565b6108ff6108f9610b61565b83610c22565b61093e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093590611ec7565b60405180910390fd5b61094a8484848461141b565b50505050565b606061095b82610af5565b61099a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109919061210f565b60405180910390fd5b60006109a4611477565b905060008151116109c457604051806020016040528060008152506109ef565b806109ce8461148e565b6040516020016109df92919061216b565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610bdc83610683565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610c2d82610af5565b610c6c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6390612201565b60405180910390fd5b6000610c7783610683565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610ce657508373ffffffffffffffffffffffffffffffffffffffff16610cce84610467565b73ffffffffffffffffffffffffffffffffffffffff16145b80610cf75750610cf681856109f7565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610d2082610683565b73ffffffffffffffffffffffffffffffffffffffff1614610d76576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6d90612293565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610de5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ddc90612325565b60405180910390fd5b610df08383836115ee565b610dfb600082610b69565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e4b9190612374565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ea291906123a8565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610fca576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fc190612428565b60405180910390fd5b610fd381610af5565b15611013576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100a90612494565b60405180910390fd5b61101f600083836115ee565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461106f91906123a8565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b60006111498473ffffffffffffffffffffffffffffffffffffffff166115f3565b156112a2578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611172610b61565b8786866040518563ffffffff1660e01b81526004016111949493929190612509565b6020604051808303816000875af19250505080156111d057506040513d601f19601f820116820180604052508101906111cd919061256a565b60015b611252573d8060008114611200576040519150601f19603f3d011682016040523d82523d6000602084013e611205565b606091505b50600081510361124a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112419061207d565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506112a7565b600190505b949350505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361131d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611314906125e3565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161140e91906116ca565b60405180910390a3505050565b611426848484610d00565b61143284848484611128565b611471576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114689061207d565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b6060600082036114d5576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506115e9565b600082905060005b600082146115075780806114f090612603565b915050600a82611500919061267a565b91506114dd565b60008167ffffffffffffffff81111561152357611522611976565b5b6040519080825280601f01601f1916602001820160405280156115555781602001600182028036833780820191505090505b5090505b600085146115e25760018261156e9190612374565b9150600a8561157d91906126ab565b603061158991906123a8565b60f81b81838151811061159f5761159e6126dc565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856115db919061267a565b9450611559565b8093505050505b919050565b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61165f8161162a565b811461166a57600080fd5b50565b60008135905061167c81611656565b92915050565b60006020828403121561169857611697611620565b5b60006116a68482850161166d565b91505092915050565b60008115159050919050565b6116c4816116af565b82525050565b60006020820190506116df60008301846116bb565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561171f578082015181840152602081019050611704565b60008484015250505050565b6000601f19601f8301169050919050565b6000611747826116e5565b61175181856116f0565b9350611761818560208601611701565b61176a8161172b565b840191505092915050565b6000602082019050818103600083015261178f818461173c565b905092915050565b6000819050919050565b6117aa81611797565b81146117b557600080fd5b50565b6000813590506117c7816117a1565b92915050565b6000602082840312156117e3576117e2611620565b5b60006117f1848285016117b8565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611825826117fa565b9050919050565b6118358161181a565b82525050565b6000602082019050611850600083018461182c565b92915050565b61185f8161181a565b811461186a57600080fd5b50565b60008135905061187c81611856565b92915050565b6000806040838503121561189957611898611620565b5b60006118a78582860161186d565b92505060206118b8858286016117b8565b9150509250929050565b6000806000606084860312156118db576118da611620565b5b60006118e98682870161186d565b93505060206118fa8682870161186d565b925050604061190b868287016117b8565b9150509250925092565b60006020828403121561192b5761192a611620565b5b60006119398482850161186d565b91505092915050565b61194b81611797565b82525050565b60006020820190506119666000830184611942565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6119ae8261172b565b810181811067ffffffffffffffff821117156119cd576119cc611976565b5b80604052505050565b60006119e0611616565b90506119ec82826119a5565b919050565b600067ffffffffffffffff821115611a0c57611a0b611976565b5b611a158261172b565b9050602081019050919050565b82818337600083830152505050565b6000611a44611a3f846119f1565b6119d6565b905082815260208101848484011115611a6057611a5f611971565b5b611a6b848285611a22565b509392505050565b600082601f830112611a8857611a8761196c565b5b8135611a98848260208601611a31565b91505092915050565b600080600060608486031215611aba57611ab9611620565b5b6000611ac88682870161186d565b9350506020611ad9868287016117b8565b925050604084013567ffffffffffffffff811115611afa57611af9611625565b5b611b0686828701611a73565b9150509250925092565b611b19816116af565b8114611b2457600080fd5b50565b600081359050611b3681611b10565b92915050565b60008060408385031215611b5357611b52611620565b5b6000611b618582860161186d565b9250506020611b7285828601611b27565b9150509250929050565b60008060008060808587031215611b9657611b95611620565b5b6000611ba48782880161186d565b9450506020611bb58782880161186d565b9350506040611bc6878288016117b8565b925050606085013567ffffffffffffffff811115611be757611be6611625565b5b611bf387828801611a73565b91505092959194509250565b60008060408385031215611c1657611c15611620565b5b6000611c248582860161186d565b9250506020611c358582860161186d565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611c8657607f821691505b602082108103611c9957611c98611c3f565b5b50919050565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000611cfb602c836116f0565b9150611d0682611c9f565b604082019050919050565b60006020820190508181036000830152611d2a81611cee565b9050919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000611d8d6021836116f0565b9150611d9882611d31565b604082019050919050565b60006020820190508181036000830152611dbc81611d80565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b6000611e1f6038836116f0565b9150611e2a82611dc3565b604082019050919050565b60006020820190508181036000830152611e4e81611e12565b9050919050565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b6000611eb16031836116f0565b9150611ebc82611e55565b604082019050919050565b60006020820190508181036000830152611ee081611ea4565b9050919050565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b6000611f436029836116f0565b9150611f4e82611ee7565b604082019050919050565b60006020820190508181036000830152611f7281611f36565b9050919050565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b6000611fd5602a836116f0565b9150611fe082611f79565b604082019050919050565b6000602082019050818103600083015261200481611fc8565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b60006120676032836116f0565b91506120728261200b565b604082019050919050565b600060208201905081810360008301526120968161205a565b9050919050565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b60006120f9602f836116f0565b91506121048261209d565b604082019050919050565b60006020820190508181036000830152612128816120ec565b9050919050565b600081905092915050565b6000612145826116e5565b61214f818561212f565b935061215f818560208601611701565b80840191505092915050565b6000612177828561213a565b9150612183828461213a565b91508190509392505050565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b60006121eb602c836116f0565b91506121f68261218f565b604082019050919050565b6000602082019050818103600083015261221a816121de565b9050919050565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b600061227d6029836116f0565b915061228882612221565b604082019050919050565b600060208201905081810360008301526122ac81612270565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061230f6024836116f0565b915061231a826122b3565b604082019050919050565b6000602082019050818103600083015261233e81612302565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061237f82611797565b915061238a83611797565b92508282039050818111156123a2576123a1612345565b5b92915050565b60006123b382611797565b91506123be83611797565b92508282019050808211156123d6576123d5612345565b5b92915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b60006124126020836116f0565b915061241d826123dc565b602082019050919050565b6000602082019050818103600083015261244181612405565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b600061247e601c836116f0565b915061248982612448565b602082019050919050565b600060208201905081810360008301526124ad81612471565b9050919050565b600081519050919050565b600082825260208201905092915050565b60006124db826124b4565b6124e581856124bf565b93506124f5818560208601611701565b6124fe8161172b565b840191505092915050565b600060808201905061251e600083018761182c565b61252b602083018661182c565b6125386040830185611942565b818103606083015261254a81846124d0565b905095945050505050565b60008151905061256481611656565b92915050565b6000602082840312156125805761257f611620565b5b600061258e84828501612555565b91505092915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006125cd6019836116f0565b91506125d882612597565b602082019050919050565b600060208201905081810360008301526125fc816125c0565b9050919050565b600061260e82611797565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036126405761263f612345565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061268582611797565b915061269083611797565b9250826126a05761269f61264b565b5b828204905092915050565b60006126b682611797565b91506126c183611797565b9250826126d1576126d061264b565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea2646970667358221220fd0f2a1b69ab8ea50408b5bc257fe80be904d507f40fe9d414032f38b7a14ac564736f6c63430008110033";

type AlphaERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AlphaERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AlphaERC721__factory extends ContractFactory {
  constructor(...args: AlphaERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AlphaERC721";
  }

  deploy(
    input: AlphaERC721.ConstructorStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AlphaERC721> {
    return super.deploy(input, overrides || {}) as Promise<AlphaERC721>;
  }
  getDeployTransaction(
    input: AlphaERC721.ConstructorStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(input, overrides || {});
  }
  attach(address: string): AlphaERC721 {
    return super.attach(address) as AlphaERC721;
  }
  connect(signer: Signer): AlphaERC721__factory {
    return super.connect(signer) as AlphaERC721__factory;
  }
  static readonly contractName: "AlphaERC721";
  public readonly contractName: "AlphaERC721";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AlphaERC721Interface {
    return new utils.Interface(_abi) as AlphaERC721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AlphaERC721 {
    return new Contract(address, _abi, signerOrProvider) as AlphaERC721;
  }
}
