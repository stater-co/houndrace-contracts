import { ethers } from "ethers";
import { PaymentEcosystem } from "../common/dto/test/paymentEcosystem";
import { getContractInstance } from "../plugins/contractDeployer";
import { createDiscount } from "../plugins/createDiscount";
import { editDiscount } from "../plugins/editDiscount";
import { mintERC1155Batch } from "../plugins/mintERC1155Batch";
import { mintERC721 } from "../plugins/mintERC721";
import { ShopConstructor, ParamsInterface } from '../typechain-types/contracts/shop/params/Index.sol/Params';
import { AlphaERC721 } from "../typechain-types/contracts/erc721/Index.sol/AlphaERC721";
const ethersHardhat = require("ethers").ethers;
const address0 = "0x0000000000000000000000000000000000000000";


let houndracePotions: ethers.Contract;
let payments: ethers.Contract;
let testErc721: ethers.Contract;
let testErc1155: ethers.Contract;
let shopRestricted: ethers.Contract;
let shopMethods: ethers.Contract;
let shop: ethers.Contract;


export async function run(): Promise<PaymentEcosystem> {
  return new Promise((resolve, reject) => {
    describe("Setting up the Payments System", function () {
  
      it("Deploy the HoundRace Potions contract", async function () {
        console.log("Deploy the HoundRace Potions contract");
        let constructor: AlphaERC721.ConstructorStruct = {
          name: "Ogars",
          symbol: "OG"
        };
        houndracePotions = await getContractInstance("HoundracePotions",constructor);
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
        testErc1155 = await getContractInstance("TestingErc1155",["test"]);
      });
    
      it("Mint erc1155 nfts", async function () {
        const [owner] = await ethersHardhat.getSigners();
        await mintERC1155Batch(testErc1155,owner.address,Array.from(Array(100).keys()),Array(100).fill(5000),'0x00');
      });
    
      it("Deploy the Payments methods contract", async function () {
        let shopConstructor: ShopConstructor.StructStruct = {
          methods: address0,
          restricted: address0
        };
        shopRestricted = await getContractInstance("ShopRestricted", shopConstructor);
        shopConstructor.restricted = shopRestricted.address;
        shopMethods = await getContractInstance("ShopMethods", shopConstructor);
        shopConstructor.methods = shopMethods.address;
        shop = await getContractInstance("Shop", shopConstructor);
      });
    
      /*
      it("Add discounts", async function () {
    
        // Add erc721 nfts
        for ( let i = 1 ; i < 100 ; ++i ) {
          await createDiscount(shop,testErc721.address,[i],0,0,5,0,false);
        }
    
        // Add erc1155 nfts
        for ( let i = 1 ; i < 100 ; ++i ) {
          await createDiscount(shop,testErc1155.address,[i],0,0,10,1,false);
        }
    
        // Edit erc721 nfts
        for ( let i = 1 ; i < 100 ; ++i ) {
          await editDiscount(
            shop,
            i,
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
          await editDiscount(
            shop,
            i,
            testErc1155.address,
            [i],
            0,
            0,
            10,
            1,
            false
          );
        }
        resolve({
          houndracePotions: houndracePotions,
          payments: payments,
          testErc721: testErc721,
          testErc1155: testErc1155,
          shopRestricted: shopRestricted,
          shopMethods: shopMethods,
          shop: shop
        });
      });
      */
    });
  });
}