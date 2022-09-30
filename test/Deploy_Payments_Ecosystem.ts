import { PaymentEcosystem } from '../common/dto/test/paymentEcosystem.dto';
import { globalParams } from '../common/params';
import { deployContract } from '../plugins/test/deployContract';
import { ShopRestricted } from '../typechain-types/ShopRestricted';
import { ShopMethods } from '../typechain-types/ShopMethods';
import { HoundRacePotions } from '../typechain-types/HoundRacePotions';
import { Payments } from '../typechain-types/Payments';
import { AlphaERC721 } from '../typechain-types/AlphaERC721';
import { TestingErc1155 } from '../typechain-types/TestingErc1155';
import { ShopZerocost } from '../typechain-types/ShopZerocost';
import { Shop } from '../typechain-types/Shop';
import { PaymentsRestricted } from '../typechain-types/PaymentsRestricted';
import { PaymentsMethods } from '../typechain-types/PaymentsMethods';
import { PaymentsExternalDependencies } from '../common/dto/test/paymentsExternalDependencies.dto';


let houndRacePotions: HoundRacePotions;
let payments: Payments;
let paymentsRestricted: PaymentsRestricted;
let paymentsMethods: PaymentsMethods;
let testErc721: AlphaERC721;
let testErc1155: TestingErc1155;
let shopRestricted: ShopRestricted;
let shopMethods: ShopMethods;
let shopZerocost: ShopZerocost;
let shop: Shop;


export async function run(
  dependencies: PaymentsExternalDependencies
): Promise<PaymentEcosystem> {
  return new Promise((resolve, ) => {
    describe('Setting up the Payments System', function () {
  
      it('Deploy the HoundRace Potions contract', async function () {
        houndRacePotions = await deployContract({
          name: 'HoundRacePotions',
          constructor: ['Ogars', 'OG'],
          props: {}
        }) as HoundRacePotions;
      });
    
      it('Deploy the payments restricted contract', async function () {
        paymentsRestricted = await deployContract({
          name: 'PaymentsRestricted',
          constructor: [[
            String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
            globalParams.address0,
            globalParams.address0,
            dependencies.firewallAddress
          ]],
          props: {}
        }) as PaymentsRestricted;
      });

      it('Deploy the payments methods contract', async function () {
        paymentsMethods = await deployContract({
          name: 'PaymentsMethods',
          constructor: [[
            String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
            paymentsRestricted.address,
            globalParams.address0,
            dependencies.firewallAddress
          ]],
          props: {}
        }) as PaymentsMethods;
      });

      it('Deploy the payments contract', async function () {
        payments = await deployContract({
          name: 'Payments',
          constructor: [[
            String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
            paymentsRestricted.address,
            paymentsMethods.address,
            dependencies.firewallAddress
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
    
      it('Deploy the Shop restricted contract', async function () {
        shopRestricted = await deployContract({
          name: 'ShopRestricted',
          constructor: [[
            globalParams.address0,
            globalParams.address0,
            String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
            dependencies.firewallAddress
          ]],
          props: {}
        }) as ShopRestricted;
      });

      it('Deploy the Shop methods contract', async function () {
        shopMethods = await deployContract({
          name: 'ShopMethods',
          constructor: [[
            globalParams.address0,
            shopRestricted.address,
            String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
            dependencies.firewallAddress
          ]],
          props: {}
        }) as ShopMethods;
      });

      it('Deploy the Shop zerocost contract', async function () {
        shopZerocost = await deployContract({
          name: 'ShopZerocost',
          constructor: [[
            shopMethods.address,
            shopRestricted.address,
            String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
            dependencies.firewallAddress
          ]],
          props: {}
        }) as ShopZerocost;
      });

      it('Deploy the Shop contract', async function () {
        shop = await deployContract({
          name: 'Shop',
          constructor: [[
            shopMethods.address,
            shopRestricted.address,
            String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
            dependencies.firewallAddress
          ]],
          props: {}
        }) as Shop;

        resolve({
          houndracePotions: houndRacePotions,
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