import { ethers } from "ethers";
import { DeployedLibraries } from "../common/dto/test/librariesDeployment.dto";
import { getContractInstance } from "../plugins/contractDeployer";
import { createDiscount } from "../plugins/createDiscount";
import { mintERC1155Batch } from "../plugins/mintERC1155Batch";
import { mintERC721 } from "../plugins/mintERC721";
const ethersHardhat = require("ethers").ethers;
const address0 = "0x0000000000000000000000000000000000000000";


let houndracePotions: ethers.Contract;
let payments: ethers.Contract;
let testErc721: ethers.Contract;
let testErc1155: ethers.Contract;
let shopRestricted: ethers.Contract;
let shopMethods: ethers.Contract;
let shop: ethers.Contract;


async function run(): Promise<DeployedLibraries> {
  return new Promise((resolve, reject) => {
    describe("Setting up the Payments System", function () {
  
      it("Deploy the HoundRace Potions contract", async function () {
        const HoundracePotions = await getContractInstance("HoundracePotions");
        houndracePotions = await HoundracePotions.deploy("Ogars","OG");
        await houndracePotions.deployed();
      });
    
      it("Deploy the payments contract", async function () {
        payments = await getContractInstance("Payments");
      });
    
      it("Deploy the erc721 test contract", async function () {
        const TestingErc721 = await ethersHardhat.getContractFactory("AlphaERC721");
        testErc721 = await TestingErc721.deploy("test","t");
        await testErc721.deployed();
      });
    
      it("Mint erc721 nfts", async function () {
        const [owner] = await ethersHardhat.getSigners();
        for ( let i = 0 ; i < 100 ; ++i ) {
          await mintERC721(testErc721,owner.address,i,'0x00');
        }
      });
    
      it("Deploy the erc1155 test contract", async function () {
        testErc1155 = await getContractInstance("TestingErc1155","test");
      });
    
      it("Mint erc1155 nfts", async function () {
        const [owner] = await ethersHardhat.getSigners();
        await mintERC1155Batch(testErc1155,owner.address,Array.from(Array(100).keys()),Array(100).fill(5000),'0x00');
      });
    
      it("Deploy the Payments methods contract", async function () {
        shopRestricted = await getContractInstance("ShopRestricted",[address0,address0,address0]);
        shopMethods = await getContractInstance("ShopMethods",[address0,address0,address0]);
        shop = await getContractInstance("Shop",[shopMethods.address,shopRestricted.address]);
      });
    
      it("Add discounts", async function () {
    
        // Add erc721 nfts
        for ( let i = 1 ; i < 100 ; ++i ) {
          await createDiscount(testErc721.address,[i],0,0,5,0,false);
        }
    
        // Add erc1155 nfts
        for ( let i = 1 ; i < 100 ; ++i ) {
          await createDiscount(testErc1155.address,[i],0,0,10,1,false);
        }
    
        // Edit erc721 nfts
        for ( let i = 1 ; i < 100 ; ++i ) {
          await editDiscount(i,
            testErc721.address,
            [i],
            0,
            0,
            5,
            0,
            false
          );
        }
    
        // Edit erc1155 nfts
        for ( let i = 1 ; i < 100 ; ++i ) {
          await editDiscount(i,
            testErc1155.address,
            [i],
            0,
            0,
            10,
            1,
            false
          );
        }
    
      });
    */
    });
  });
}

export default run;