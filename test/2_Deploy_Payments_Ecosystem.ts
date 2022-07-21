import { PaymentEcosystem } from '../common/dto/test/paymentEcosystem.dto';
import { globalParams } from '../common/params';
import { deployContract } from '../plugins/test/deployContract';
import { ShopRestricted } from '../typechain-types/contracts/shop/restricted/Index.sol/ShopRestricted';
import { ShopMethods } from '../typechain-types/contracts/shop/methods/Index.sol/ShopMethods';
import { HoundracePotions } from '../typechain-types/contracts/ogars/Data.sol/HoundracePotions';
import { Payments } from '../typechain-types/contracts/payments/methods/Index.sol/Payments';
import { AlphaERC721 } from '../typechain-types/contracts/erc721/Index.sol/AlphaERC721';
import { TestingErc1155 } from '../typechain-types/contracts/erc1155/TestingErc1155';
import { ShopZerocost } from '../typechain-types/contracts/shop/zerocost/Index.sol/ShopZerocost';
import { Shop } from '../typechain-types/contracts/shop/Index.sol/Shop';


let houndracePotions: HoundracePotions;
let payments: Payments;
let testErc721: AlphaERC721;
let testErc1155: TestingErc1155;
let shopRestricted: ShopRestricted;
let shopMethods: ShopMethods;
let shopZerocost: ShopZerocost;
let shop: Shop;


export async function run(): Promise<PaymentEcosystem> {
  return new Promise((resolve, ) => {
    describe('Setting up the Payments System', function () {
  
      it('Deploy the HoundRace Potions contract', async function () {
        houndracePotions = await deployContract({
          name: 'HoundracePotions',
          constructor: ['Ogars', 'OG'],
          props: {}
        }) as HoundracePotions;
      });
    
      it('Deploy the payments contract', async function () {
        payments = await deployContract({
          name: 'Payments',
          constructor: [],
          props: {}
        }) as Payments;
      });
    

      it('Deploy the erc721 test contract', async function () {
        testErc721 = await deployContract({
          name: 'AlphaERC721',
          constructor: [[
            'Alpha NFTs',
            'ANFT',
            'loot box uri',
            'second loot box uri',
            globalParams.address0,
            false
          ]],
          props: {}
        }) as AlphaERC721;
      });
      
      it('Deploy the erc1155 test contract', async function () {
        testErc1155 = await deployContract({
          name: 'TestingErc1155',
          constructor: ['test'],
          props: {}
        }) as TestingErc1155;
      });
    
      it('Deploy the Payments methods contract', async function () {
        shopRestricted = await deployContract({
          name: 'ShopRestricted',
          constructor: [[globalParams.address0,globalParams.address0]],
          props: {}
        }) as ShopRestricted;
        shopMethods = await deployContract({
          name: 'ShopMethods',
          constructor: [[globalParams.address0,shopRestricted.address]],
          props: {}
        }) as ShopMethods;
        shopZerocost = await deployContract({
          name: 'ShopZerocost',
          constructor: [[globalParams.address0,shopRestricted.address]],
          props: {}
        }) as ShopZerocost;
        shop = await deployContract({
          name: 'Shop',
          constructor: [[shopMethods.address,shopRestricted.address]],
          props: {}
        }) as Shop;

        resolve({
          houndracePotions: houndracePotions,
          payments: payments,
          shop: shop,
          shopMethods: shopMethods,
          shopRestricted: shopRestricted,
          shopZerocost: shopZerocost,
          testErc1155: testErc1155,
          testErc721: testErc721
        });

      });

    });

  });
}