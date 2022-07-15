import { ethers } from 'ethers';
import { PaymentEcosystem } from '../common/dto/test/paymentEcosystem.dto';
import { deployContract } from '../plugins/deployContract';
const address0 = '0x0000000000000000000000000000000000000000';


let houndracePotions: ethers.Contract;
let payments: ethers.Contract;
let testErc721: ethers.Contract;
let testErc1155: ethers.Contract;
let shopRestricted: ethers.Contract;
let shopMethods: ethers.Contract;
let shop: ethers.Contract;


export async function run(): Promise<PaymentEcosystem> {
  return new Promise((resolve, ) => {
    describe('Setting up the Payments System', function () {
  
      it('Deploy the HoundRace Potions contract', async function () {
        console.log('Deploy the HoundRace Potions contract');
        houndracePotions = await deployContract({
          name: 'HoundracePotions',
          constructor: ['Ogars', 'OG'],
          props: {}
        });
      });
    
      it('Deploy the payments contract', async function () {
        payments = await deployContract({
          name: 'Payments',
          constructor: [],
          props: {}
        });
      });
    

      it('Deploy the erc721 test contract', async function () {
        testErc721 = await deployContract({
          name: 'AlphaERC721',
          constructor: [[
            'Alpha NFTs',
            'ANFT',
            'loot box uri',
            'second loot box uri',
            address0,
            false
          ]],
          props: {}
        });
      });
      
      it('Deploy the erc1155 test contract', async function () {
        testErc1155 = await deployContract({
          name: 'TestingErc1155',
          constructor: ['test'],
          props: {}
        });
      });
    
      it('Deploy the Payments methods contract', async function () {
        shopRestricted = await deployContract({
          name: 'ShopRestricted',
          constructor: [[address0,address0]],
          props: {}
        });
        shopMethods = await deployContract({
          name: 'ShopMethods',
          constructor: [[address0,shopRestricted.address]],
          props: {}
        });
        shop = await deployContract({
          name: 'Shop',
          constructor: [[shopMethods.address,shopRestricted.address]],
          props: {}
        });
      });

    });

    resolve({
      houndracePotions: houndracePotions,
      payments: payments,
      shop: shop,
      shopMethods: shopMethods,
      shopRestricted: shopRestricted,
      testErc1155: testErc1155,
      testErc721: testErc721
    });
  });
}