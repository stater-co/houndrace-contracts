import { PaymentEcosystem } from '../common/dto/test/paymentEcosystem.dto';
import { globalParams } from '../common/params';
import { deployContract } from '../plugins/test/deployContract';
import { ShopRestricted } from '../typechain-types/ShopRestricted';
import { ShopMethods } from '../typechain-types/ShopMethods';
import { HoundracePotions } from '../typechain-types/HoundracePotions';
import { Payments } from '../typechain-types/Payments';
import { AlphaERC721 } from '../typechain-types/AlphaERC721';
import { TestingErc1155 } from '../typechain-types/TestingErc1155';
import { ShopZerocost } from '../typechain-types/ShopZerocost';
import { Shop } from '../typechain-types/Shop';
import { PaymentsRestricted } from '../typechain-types/PaymentsRestricted';
import { PaymentsMethods } from '../typechain-types/PaymentsMethods';


let houndracePotions: HoundracePotions;
let payments: Payments;
let paymentsRestricted: PaymentsRestricted;
let paymentsMethods: PaymentsMethods;
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
    
      it('Deploy the payments restricted contract', async function () {
        paymentsRestricted = await deployContract({
          name: 'PaymentsRestricted',
          constructor: [[
            globalParams.address0,
            globalParams.address0,
            globalParams.address0
          ]],
          props: {}
        }) as PaymentsRestricted;
      });

      it('Deploy the payments methods contract', async function () {
        paymentsMethods = await deployContract({
          name: 'PaymentsMethods',
          constructor: [[
            globalParams.address0,
            globalParams.address0,
            globalParams.address0
          ]],
          props: {}
        }) as PaymentsMethods;
      });

      it('Deploy the payments contract', async function () {
        payments = await deployContract({
          name: 'Payments',
          constructor: [[
            String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
            globalParams.address0,
            globalParams.address0
          ]],
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
    
      it('Deploy the Shop Restricted contract', async function () {
        shopRestricted = await deployContract({
          name: 'ShopRestricted',
          constructor: [[globalParams.address0,globalParams.address0,String(process.env.ETH_ACCOUNT_PUBLIC_KEY)]],
          props: {}
        }) as ShopRestricted;
      });

      it('Deploy the Shop Methods contract', async function () {
        shopMethods = await deployContract({
          name: 'ShopMethods',
          constructor: [[globalParams.address0,shopRestricted.address,String(process.env.ETH_ACCOUNT_PUBLIC_KEY)]],
          props: {}
        }) as ShopMethods;
      });

      it('Deploy the Shop Zerocost contract', async function () {
        shopZerocost = await deployContract({
          name: 'ShopZerocost',
          constructor: [[globalParams.address0,shopRestricted.address,String(process.env.ETH_ACCOUNT_PUBLIC_KEY)]],
          props: {}
        }) as ShopZerocost;
      });

      it('Deploy the Shop contract', async function () {
        shop = await deployContract({
          name: 'Shop',
          constructor: [[shopMethods.address,shopRestricted.address,String(process.env.ETH_ACCOUNT_PUBLIC_KEY)]],
          props: {}
        }) as Shop;

        resolve({
          houndracePotions: houndracePotions,
          payments: payments,
          paymentMethods: paymentsMethods,
          paymentRestricted: paymentsRestricted,
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