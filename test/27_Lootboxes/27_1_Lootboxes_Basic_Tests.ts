import { LootboxesBasicTests } from "../../common/dto/test/lootboxesBasicTests";
import { globalParams } from "../../common/params";
import { expecting } from "../../plugins/expecting";
const { ethers } = require('hardhat');


async function basicTest(
  dependencies: LootboxesBasicTests
): Promise<void> {
  return new Promise((resolve, ) => {
    describe('Lootboxes Basic Tests', async function () {

      const totalLootboxesToCreate: number = 20;
      const tokenId: number = 1;

      it("Create hounds for lootbox", async function () {
        let [, , , , , , , , , signer] = await ethers.getSigners();
        let houndsBalanceBefore = await dependencies.lootboxesContract.balanceOf(signer.address, tokenId);
        await dependencies.lootboxesContract.connect(signer).mint(totalLootboxesToCreate, tokenId, "token_uri");
        const data: string = '0x60a0604052600060809081526003906200001a9082620005a5565b503480156200002857600080fd5b5060405162003b7d38038062003b7d8339810160408190526200004b9162000936565b602081015160a08201518251620000628162000264565b50620000776200007162000276565b620002d4565b80518251146200008657600080fd5b60005b82518110156200019f5760005b828281518110620000ab57620000ab62000a44565b6020026020010151518110156200018b5760066000858481518110620000d557620000d562000a44565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002083838151811062000112576200011262000a44565b602002602001015182815181106200012e576200012e62000a44565b60209081029190910181015182546001810184556000938452919092206008820401805463ffffffff60079093166004026101000a928302191660e09390931c91909102919091179055620001838162000a5a565b905062000096565b50620001978162000a5a565b905062000089565b505081518291506007908190620001b79082620005a5565b506020828101518051620001d2926001850192019062000326565b5060408201516002820180546001600160a01b039283166001600160a01b0319918216179091556060840151600384018054918416918316919091179055608084015160048401805491909316911617905560a082015180516200024191600584019160209091019062000390565b5060c091909101516006909101805460ff19169115159190911790555062000a82565b6002620002728282620005a5565b5050565b6000303303620002ce57600080368080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050503601516001600160a01b03169150620002d19050565b50335b90565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280548282559060005260206000209081019282156200037e579160200282015b828111156200037e57825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062000347565b506200038c929150620003f0565b5090565b828054828255906000526020600020908101928215620003e2579160200282015b82811115620003e25782518051620003d191849160209091019062000407565b5091602001919060010190620003b1565b506200038c929150620004b5565b5b808211156200038c5760008155600101620003f1565b828054828255906000526020600020906007016008900481019282156200037e5791602002820160005b838211156200047457835183826101000a81548163ffffffff021916908360e01c0217905550926020019260040160208160030104928301926001030262000431565b8015620004a65782816101000a81549063ffffffff021916905560040160208160030104928301926001030262000474565b50506200038c929150620003f0565b808211156200038c576000620004cc8282620004d6565b50600101620004b5565b508054600082556007016008900490600052602060002090810190620004fd9190620003f0565b50565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200052b57607f821691505b6020821081036200054c57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620005a057600081815260208120601f850160051c810160208610156200057b5750805b601f850160051c820191505b818110156200059c5782815560010162000587565b5050505b505050565b81516001600160401b03811115620005c157620005c162000500565b620005d981620005d2845462000516565b8462000552565b602080601f831160018114620006115760008415620005f85750858301515b600019600386901b1c1916600185901b1785556200059c565b600085815260208120601f198616915b82811015620006425788860151825594840194600190910190840162000621565b5085821015620006615787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60405160e081016001600160401b038111828210171562000696576200069662000500565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620006c757620006c762000500565b604052919050565b600082601f830112620006e157600080fd5b81516001600160401b03811115620006fd57620006fd62000500565b602062000713601f8301601f191682016200069c565b82815285828487010111156200072857600080fd5b60005b83811015620007485785810183015182820184015282016200072b565b506000928101909101919091529392505050565b60006001600160401b0382111562000778576200077862000500565b5060051b60200190565b80516001600160a01b03811681146200079a57600080fd5b919050565b600082601f830112620007b157600080fd5b81516020620007ca620007c4836200075c565b6200069c565b82815260059290921b84018101918181019086841115620007ea57600080fd5b8286015b848110156200081057620008028162000782565b8352918301918301620007ee565b509695505050505050565b600082601f8301126200082d57600080fd5b8151602062000840620007c4836200075c565b828152600592831b85018201928282019190878511156200086057600080fd5b8387015b85811015620009185780516001600160401b03811115620008855760008081fd5b8801603f81018a13620008985760008081fd5b858101516040620008ad620007c4836200075c565b82815291851b8301810191888101908d841115620008cb5760008081fd5b938201935b838510156200090657845192506001600160e01b031983168314620008f55760008081fd5b8282529389019390890190620008d0565b88525050509385019350840162000864565b5090979650505050505050565b805180151581146200079a57600080fd5b6000602082840312156200094957600080fd5b81516001600160401b03808211156200096157600080fd5b9083019060e082860312156200097657600080fd5b6200098062000671565b8251828111156200099057600080fd5b6200099e87828601620006cf565b825250602083015182811115620009b457600080fd5b620009c2878286016200079f565b602083015250620009d66040840162000782565b6040820152620009e96060840162000782565b6060820152620009fc6080840162000782565b608082015260a08301518281111562000a1457600080fd5b62000a22878286016200081b565b60a08301525062000a3660c0840162000925565b60c082015295945050505050565b634e487b7160e01b600052603260045260246000fd5b60006001820162000a7b57634e487b7160e01b600052601160045260246000fd5b5060010190565b6130eb8062000a926000396000f3fe608060405234801561001057600080fd5b506004361061016b5760003560e01c8063a22cb465116100cd578063ec32246911610081578063f23a6e6111610066578063f23a6e611461034b578063f242432a14610383578063f2fde38b1461039657600080fd5b8063ec32246914610325578063edd0cb871461033857600080fd5b8063c6e64e53116100b2578063c6e64e53146102e6578063d8de6587146102f9578063e985e9c51461031257600080fd5b8063a22cb4651461029b578063bc197c81146102ae57600080fd5b80634e1273f411610124578063715018a611610109578063715018a6146102655780637c46a44b1461026d5780638da5cb5b1461028057600080fd5b80634e1273f4146102015780635b19e2941461022157600080fd5b80630e89341c116101555780630e89341c146101b95780632eb2c2d6146101d95780634082de67146101ee57600080fd5b8062fdd58e1461017057806301ffc9a714610196575b600080fd5b61018361017e36600461208b565b6103a9565b6040519081526020015b60405180910390f35b6101a96101a43660046120e3565b610455565b604051901515815260200161018d565b6101cc6101c7366004612100565b610460565b60405161018d9190612169565b6101ec6101e736600461232d565b610540565b005b6101ec6101fc3660046123d7565b6105f4565b61021461020f366004612466565b61065f565b60405161018d9190612505565b61023461022f36600461208b565b61079d565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200161018d565b6101ec6107e3565b6101ec61027b366004612528565b6107f7565b6005546040516001600160a01b03909116815260200161018d565b6101ec6102a9366004612543565b6108f1565b6102346102bc36600461232d565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b6101ec6102f4366004612576565b610903565b610301610a48565b60405161018d9594939291906125c6565b6101a961032036600461260c565b610b06565b6101ec610333366004612733565b610c09565b6101ec6103463660046128a0565b610cff565b610234610359366004612a1f565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b6101ec610391366004612a1f565b610e0f565b6101ec6103a4366004612a84565b610ebc565b60006001600160a01b03831661042c5760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201527f616c6964206f776e65720000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b506000818152602081815260408083206001600160a01b03861684529091529020545b92915050565b600061044f82610f4c565b60008181526004602052604081208054606092919061047e90612a9f565b80601f01602080910402602001604051908101604052809291908181526020018280546104aa90612a9f565b80156104f75780601f106104cc576101008083540402835291602001916104f7565b820191906000526020600020905b8154815290600101906020018083116104da57829003601f168201915b5050505050905060008151116105155761051083610fa2565b610539565b600381604051602001610529929190612af2565b6040516020818303038152906040525b9392505050565b610548611036565b6001600160a01b0316856001600160a01b0316148061056e575061056e85610320611036565b6105e05760405162461bcd60e51b815260206004820152602f60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206e6f7220617070726f76656400000000000000000000000000000000006064820152608401610423565b6105ed8585858585611092565b5050505050565b600d5460ff1661060357600080fd5b8061060e33846103a9565b101561061957600080fd5b604051818152339083907f31266934116d5ecd9a3a4ca1e39cead51a67ca6a5ffceb01dcc3f38c394524d49060200160405180910390a361065b33838361133b565b5050565b606081518351146106d85760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e67746860448201527f206d69736d6174636800000000000000000000000000000000000000000000006064820152608401610423565b6000835167ffffffffffffffff8111156106f4576106f461217c565b60405190808252806020026020018201604052801561071d578160200160208202803683370190505b50905060005b84518110156107955761076885828151811061074157610741612b97565b602002602001015185838151811061075b5761075b612b97565b60200260200101516103a9565b82828151811061077a5761077a612b97565b602090810291909101015261078e81612bf5565b9050610723565b509392505050565b600660205281600052604060002081815481106107b957600080fd5b9060005260206000209060089182820401919006600402915091509054906101000a900460e01b81565b6107eb6114fa565b6107f56000611573565b565b6000805b336000908152600660205260409020548110156108b457336000908152600660205260408120805491357fffffffff0000000000000000000000000000000000000000000000000000000016918390811061085857610858612b97565b90600052602060002090600891828204019190066004029054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916036108a457600191505b6108ad81612bf5565b90506107fb565b50806108bf57600080fd5b50600d80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b61065b6108fc611036565b83836115dd565b6000805b336000908152600660205260409020548110156109c057336000908152600660205260408120805491357fffffffff0000000000000000000000000000000000000000000000000000000016918390811061096457610964612b97565b90600052602060002090600891828204019190066004029054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916036109b057600191505b6109b981612bf5565b9050610907565b50806109cb57600080fd5b610a0c3384866040518060400160405280600381526020017f30783000000000000000000000000000000000000000000000000000000000008152506116ef565b610a1582611821565b604051849084907fe929bb466f0257bc8400388f631be46b0a21b612148f8e8df8b8651a9c67ded690600090a350505050565b600780548190610a5790612a9f565b80601f0160208091040260200160405190810160405280929190818152602001828054610a8390612a9f565b8015610ad05780601f10610aa557610100808354040283529160200191610ad0565b820191906000526020600020905b815481529060010190602001808311610ab357829003601f168201915b50505060028401546003850154600486015460069096015494956001600160a01b03928316959183169450909116915060ff1685565b6000805b6001600160a01b038316600090815260066020526040902054811015610bda576001600160a01b0383166000908152600660205260408120805491357fffffffff00000000000000000000000000000000000000000000000000000000169183908110610b7957610b79612b97565b90600052602060002090600891828204019190066004029054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191603610bca57600191505061044f565b610bd381612bf5565b9050610b0a565b506001600160a01b0380841660009081526001602090815260408083209386168352929052205460ff16610539565b610c116114fa565b805181906007908190610c249082612c78565b506020828101518051610c3d9260018501920190611e9b565b5060408201516002820180546001600160a01b039283167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091556060840151600384018054918416918316919091179055608084015160048401805491909316911617905560a08201518051610cc2916005840191602090910190611f18565b5060c09190910151600690910180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001691151591909117905550565b6000805b33600090815260066020526040902054811015610dbc57336000908152600660205260408120805491357fffffffff00000000000000000000000000000000000000000000000000000000169183908110610d6057610d60612b97565b90600052602060002090600891828204019190066004029054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191603610dac57600191505b610db581612bf5565b9050610d03565b5080610dc757600080fd5b826001600160a01b0316847f7a5720c402da950ff59a7f43abce6ea657c0f7ae160b624c7335c19cde58419484604051610e019190612de7565b60405180910390a350505050565b610e17611036565b6001600160a01b0316856001600160a01b03161480610e3d5750610e3d85610320611036565b610eaf5760405162461bcd60e51b815260206004820152602f60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206e6f7220617070726f76656400000000000000000000000000000000006064820152608401610423565b6105ed858585858561182d565b610ec46114fa565b6001600160a01b038116610f405760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610423565b610f4981611573565b50565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000148061044f575061044f82611a0e565b606060028054610fb190612a9f565b80601f0160208091040260200160405190810160405280929190818152602001828054610fdd90612a9f565b801561102a5780601f10610fff5761010080835404028352916020019161102a565b820191906000526020600020905b81548152906001019060200180831161100d57829003601f168201915b50505050509050919050565b600030330361108c57600080368080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050503601516001600160a01b0316915061108f9050565b50335b90565b81518351146111095760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d617463680000000000000000000000000000000000000000000000006064820152608401610423565b6001600160a01b0384166111855760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610423565b600061118f611036565b905060005b84518110156112cd5760008582815181106111b1576111b1612b97565b6020026020010151905060008583815181106111cf576111cf612b97565b602090810291909101810151600084815280835260408082206001600160a01b038e1683529093529190912054909150818110156112755760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e73666572000000000000000000000000000000000000000000006064820152608401610423565b6000838152602081815260408083206001600160a01b038e8116855292528083208585039055908b168252812080548492906112b2908490612ef3565b92505081905550505050806112c690612bf5565b9050611194565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb878760405161131d929190612f06565b60405180910390a4611333818787878787611af1565b505050505050565b6001600160a01b0383166113b75760405162461bcd60e51b815260206004820152602360248201527f455243313135353a206275726e2066726f6d20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610423565b60006113c1611036565b905060006113ce84611cf5565b905060006113db84611cf5565b60408051602080820183526000918290528882528181528282206001600160a01b038b168352905220549091508481101561147d5760405162461bcd60e51b8152602060048201526024808201527f455243313135353a206275726e20616d6f756e7420657863656564732062616c60448201527f616e6365000000000000000000000000000000000000000000000000000000006064820152608401610423565b6000868152602081815260408083206001600160a01b038b81168086529184528285208a8703905582518b81529384018a90529092908816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46040805160208101909152600090525b50505050505050565b611502611036565b6001600160a01b031661151d6005546001600160a01b031690565b6001600160a01b0316146107f55760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610423565b600580546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b0316036116645760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c2073746174757360448201527f20666f722073656c6600000000000000000000000000000000000000000000006064820152608401610423565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b03841661176b5760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610423565b6000611775611036565b9050600061178285611cf5565b9050600061178f85611cf5565b90506000868152602081815260408083206001600160a01b038b168452909152812080548792906117c1908490612ef3565b909155505060408051878152602081018790526001600160a01b03808a1692600092918716917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46114f183600089898989611d40565b600261065b8282612c78565b6001600160a01b0384166118a95760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610423565b60006118b3611036565b905060006118c085611cf5565b905060006118cd85611cf5565b90506000868152602081815260408083206001600160a01b038c168452909152902054858110156119665760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e73666572000000000000000000000000000000000000000000006064820152608401610423565b6000878152602081815260408083206001600160a01b038d8116855292528083208985039055908a168252812080548892906119a3908490612ef3565b909155505060408051888152602081018890526001600160a01b03808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4611a03848a8a8a8a8a611d40565b505050505050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fd9b67a26000000000000000000000000000000000000000000000000000000001480611aa157507fffffffff0000000000000000000000000000000000000000000000000000000082167f0e89341c00000000000000000000000000000000000000000000000000000000145b8061044f57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000083161461044f565b6001600160a01b0384163b15611333576040517fbc197c810000000000000000000000000000000000000000000000000000000081526001600160a01b0385169063bc197c8190611b4e9089908990889088908890600401612f34565b6020604051808303816000875af1925050508015611b89575060408051601f3d908101601f19168201909252611b8691810190612f92565b60015b611c3e57611b95612faf565b806308c379a003611bce5750611ba9612fca565b80611bb45750611bd0565b8060405162461bcd60e51b81526004016104239190612169565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e204552433131353560448201527f526563656976657220696d706c656d656e7465720000000000000000000000006064820152608401610423565b7fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c8100000000000000000000000000000000000000000000000000000000146114f15760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a6563746560448201527f6420746f6b656e730000000000000000000000000000000000000000000000006064820152608401610423565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110611d2f57611d2f612b97565b602090810291909101015292915050565b6001600160a01b0384163b15611333576040517ff23a6e610000000000000000000000000000000000000000000000000000000081526001600160a01b0385169063f23a6e6190611d9d9089908990889088908890600401613072565b6020604051808303816000875af1925050508015611dd8575060408051601f3d908101601f19168201909252611dd591810190612f92565b60015b611de457611b95612faf565b7fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e6100000000000000000000000000000000000000000000000000000000146114f15760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a6563746560448201527f6420746f6b656e730000000000000000000000000000000000000000000000006064820152608401610423565b828054828255906000526020600020908101928215611f08579160200282015b82811115611f0857825182547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03909116178255602090920191600190910190611ebb565b50611f14929150611f71565b5090565b828054828255906000526020600020908101928215611f65579160200282015b82811115611f655782518051611f55918491602090910190611f86565b5091602001919060010190611f38565b50611f1492915061202d565b5b80821115611f145760008155600101611f72565b82805482825590600052602060002090600701600890048101928215611f085791602002820160005b83821115611ff057835183826101000a81548163ffffffff021916908360e01c02179055509260200192600401602081600301049283019260010302611faf565b80156120205782816101000a81549063ffffffff0219169055600401602081600301049283019260010302611ff0565b5050611f14929150611f71565b80821115611f14576000612041828261204a565b5060010161202d565b508054600082556007016008900490600052602060002090810190610f499190611f71565b80356001600160a01b038116811461208657600080fd5b919050565b6000806040838503121561209e57600080fd5b6120a78361206f565b946020939093013593505050565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114610f4957600080fd5b6000602082840312156120f557600080fd5b8135610539816120b5565b60006020828403121561211257600080fd5b5035919050565b60005b8381101561213457818101518382015260200161211c565b50506000910152565b60008151808452612155816020860160208601612119565b601f01601f19169290920160200192915050565b602081526000610539602083018461213d565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b601f19601f830116810181811067ffffffffffffffff821117156121d1576121d161217c565b6040525050565b60405160e0810167ffffffffffffffff811182821017156121fb576121fb61217c565b60405290565b6040516080810167ffffffffffffffff811182821017156121fb576121fb61217c565b600067ffffffffffffffff82111561223e5761223e61217c565b5060051b60200190565b600082601f83011261225957600080fd5b8135602061226682612224565b60405161227382826121ab565b83815260059390931b850182019282810191508684111561229357600080fd5b8286015b848110156122ae5780358352918301918301612297565b509695505050505050565b600082601f8301126122ca57600080fd5b813567ffffffffffffffff8111156122e4576122e461217c565b6040516122fb6020601f19601f85011601826121ab565b81815284602083860101111561231057600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a0868803121561234557600080fd5b61234e8661206f565b945061235c6020870161206f565b9350604086013567ffffffffffffffff8082111561237957600080fd5b61238589838a01612248565b9450606088013591508082111561239b57600080fd5b6123a789838a01612248565b935060808801359150808211156123bd57600080fd5b506123ca888289016122b9565b9150509295509295909350565b600080604083850312156123ea57600080fd5b50508035926020909101359150565b600082601f83011261240a57600080fd5b8135602061241782612224565b60405161242482826121ab565b83815260059390931b850182019282810191508684111561244457600080fd5b8286015b848110156122ae576124598161206f565b8352918301918301612448565b6000806040838503121561247957600080fd5b823567ffffffffffffffff8082111561249157600080fd5b61249d868387016123f9565b935060208501359150808211156124b357600080fd5b506124c085828601612248565b9150509250929050565b600081518084526020808501945080840160005b838110156124fa578151875295820195908201906001016124de565b509495945050505050565b60208152600061053960208301846124ca565b8035801515811461208657600080fd5b60006020828403121561253a57600080fd5b61053982612518565b6000806040838503121561255657600080fd5b61255f8361206f565b915061256d60208401612518565b90509250929050565b60008060006060848603121561258b57600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156125b057600080fd5b6125bc868287016122b9565b9150509250925092565b60a0815260006125d960a083018861213d565b6001600160a01b039687166020840152948616604083015250919093166060820152911515608090920191909152919050565b6000806040838503121561261f57600080fd5b6126288361206f565b915061256d6020840161206f565b600082601f83011261264757600080fd5b8135602061265482612224565b6040805161266283826121ab565b848152600594851b870184019484820193508886111561268157600080fd5b8488015b8681101561272557803567ffffffffffffffff8111156126a55760008081fd5b8901603f81018b136126b75760008081fd5b868101356126c481612224565b86516126d082826121ab565b82815291851b830187019189810191508d8311156126ee5760008081fd5b928701925b82841015612715578335612706816120b5565b825292890192908901906126f3565b8852505050938501938501612685565b509098975050505050505050565b60006020828403121561274557600080fd5b813567ffffffffffffffff8082111561275d57600080fd5b9083019060e0828603121561277157600080fd5b6127796121d8565b82358281111561278857600080fd5b612794878286016122b9565b8252506020830135828111156127a957600080fd5b6127b5878286016123f9565b6020830152506127c76040840161206f565b60408201526127d86060840161206f565b60608201526127e96080840161206f565b608082015260a08301358281111561280057600080fd5b61280c87828601612636565b60a08301525061281e60c08401612518565b60c082015295945050505050565b600082601f83011261283d57600080fd5b8135602061284a82612224565b60405161285782826121ab565b83815260059390931b850182019282810191508684111561287757600080fd5b8286015b848110156122ae578035600481106128935760008081fd5b835291830191830161287b565b6000806000606084860312156128b557600080fd5b8335925060206128c681860161206f565b9250604085013567ffffffffffffffff808211156128e357600080fd5b818701915087601f8301126128f757600080fd5b813561290281612224565b60405161290f82826121ab565b82815260059290921b840185019185810191508a83111561292f57600080fd5b8585015b83811015612a0e5780358581111561294a57600080fd5b86016080818e03601f190112156129615760008081fd5b612969612201565b888201358781111561297b5760008081fd5b6129898f8b838601016123f9565b82525060408201358781111561299f5760008081fd5b6129ad8f8b83860101612248565b8a830152506060820135878111156129c55760008081fd5b6129d38f8b83860101612248565b6040830152506080820135878111156129ec5760008081fd5b6129fa8f8b8386010161282c565b606083015250845250918601918601612933565b508096505050505050509250925092565b600080600080600060a08688031215612a3757600080fd5b612a408661206f565b9450612a4e6020870161206f565b93506040860135925060608601359150608086013567ffffffffffffffff811115612a7857600080fd5b6123ca888289016122b9565b600060208284031215612a9657600080fd5b6105398261206f565b600181811c90821680612ab357607f821691505b602082108103612aec577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b6000808454612b0081612a9f565b60018281168015612b185760018114612b4b57612b7a565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0084168752821515830287019450612b7a565b8860005260208060002060005b85811015612b715781548a820152908401908201612b58565b50505082870194505b505050508351612b8e818360208801612119565b01949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612c2657612c26612bc6565b5060010190565b601f821115612c7357600081815260208120601f850160051c81016020861015612c545750805b601f850160051c820191505b8181101561133357828155600101612c60565b505050565b815167ffffffffffffffff811115612c9257612c9261217c565b612ca681612ca08454612a9f565b84612c2d565b602080601f831160018114612cf95760008415612cc35750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b178555611333565b600085815260208120601f198616915b82811015612d2857888601518255948401946001909101908401612d09565b5085821015612d6457878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b60008151808452602080850194508084016000805b84811015612ddb5782516004808210612dc8577f4e487b7100000000000000000000000000000000000000000000000000000000845260218152602484fd5b5088529683019691830191600101612d89565b50959695505050505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b84811015612ee4578984037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0018652825180516080808752815190870181905260a08701918b019085905b80821015612e835782516001600160a01b03168452928c0192918c019160019190910190612e5a565b505050898201518682038b880152612e9b82826124ca565b915050888201518682038a880152612eb382826124ca565b91505060608083015192508682038188015250612ed08183612d74565b978a01979550505091870191600101612e0f565b50919998505050505050505050565b8082018082111561044f5761044f612bc6565b604081526000612f1960408301856124ca565b8281036020840152612f2b81856124ca565b95945050505050565b60006001600160a01b03808816835280871660208401525060a06040830152612f6060a08301866124ca565b8281036060840152612f7281866124ca565b90508281036080840152612f86818561213d565b98975050505050505050565b600060208284031215612fa457600080fd5b8151610539816120b5565b600060033d111561108f5760046000803e5060005160e01c90565b600060443d1015612fd85790565b6040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc803d016004833e81513d67ffffffffffffffff816024840111818411171561302657505050505090565b828501915081518181111561303e5750505050505090565b843d87010160208285010111156130585750505050505090565b613067602082860101876121ab565b509095945050505050565b60006001600160a01b03808816835280871660208401525084604083015283606083015260a060808301526130aa60a083018461213d565b97965050505050505056fea2646970667358221220c4320bed1b18d437d49e026aa19c6cfc263a3083d013521ae5a03d50c3b21a3964736f6c63430008110033000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
        const ok = ethers.utils.defaultAbiCoder.decode(['tuple(string name,address[] operators,address hounds,address payments,address alphadune,bytes4[][] targets,bool canBeOpened) input'], data);
        console.log(ok);
        let houndsBalanceAfter = await dependencies.lootboxesContract.balanceOf(signer.address, tokenId);
        expecting(Number(houndsBalanceBefore) < Number(houndsBalanceAfter), "Lootboxes creation bugged");
      });

      it("Set open status to true", async function () {
        let [, , , , , , , , , , signer] = await ethers.getSigners();
        const controlBefore: any = await dependencies.lootboxesContract.control();
        await dependencies.lootboxesContract.connect(signer).setOpenStatus(true);
        const controlAfter: any = await dependencies.lootboxesContract.control();
        expecting(JSON.stringify(controlBefore) !== JSON.stringify(controlAfter), "Set open status method bugged");
      })

      it("Open lootbox", async function() {
        let [, , , , , , , , , signer, , signer2] = await ethers.getSigners();
        await dependencies.lootboxesContract.connect(signer).open(1,1);
        await dependencies.lootboxesContract.connect(signer2).opened(1,signer.address,[globalParams.defaultLootbox]);
        resolve();
      });

    });

  });

}

export interface TestInterface {
    basicTest: Function;
}

export const test: TestInterface = {
    basicTest: basicTest
};