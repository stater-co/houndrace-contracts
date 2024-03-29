import { PaymentEcosystem } from '../common/dto/test/paymentEcosystem.dto';
import { globalParams } from '../common/params';
import { deployContract } from '../plugins/test/deployContract';
import { ShopRestricted } from '../typechain-types/ShopRestricted';
import { ShopMethods } from '../typechain-types/ShopMethods';
import { HoundPotions } from '../typechain-types/HoundPotions';
import { Payments } from '../typechain-types/Payments';
import { AlphaERC721 } from '../typechain-types/AlphaERC721';
import { TestingErc1155 } from '../typechain-types/TestingErc1155';
import { Shop } from '../typechain-types/Shop';
import { PaymentsMethods } from '../typechain-types/PaymentsMethods';
import { ShopZerocost } from '../typechain-types/ShopZerocost';
const { ethers } = require('hardhat');


let houndPotions: HoundPotions;
let payments: Payments;
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
  
      it('Deploy the Houndrace Potions contract', async function () {
        houndPotions = await deployContract({
          name: 'HoundPotions',
          constructor: ['Ogars', 'OG', '500000000000000000000000000'],
          props: {}
        }) as HoundPotions;
      });

      it('Deploy the payments methods contract', async function () {
        paymentsMethods = await deployContract({
          name: 'PaymentsMethods',
          constructor: [[
            [],
            globalParams.address0,
            []
          ]],
          props: {}
        }) as PaymentsMethods;
      });

      it('Deploy the payments contract', async function () {
        payments = await deployContract({
          name: 'Payments',
          constructor: [[
            [],
            globalParams.address0,
            []
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
        const [owner] = await ethers.getSigners();
        shopRestricted = await deployContract({
          name: 'ShopRestricted',
          constructor: [
            [
              [],
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              owner.address,
              []
            ]
          ],
          props: {}
        }) as ShopRestricted;
      });

      it('Deploy the Shop Methods contract', async function () {
        const [owner] = await ethers.getSigners();
        shopMethods = await deployContract({
          name: 'ShopMethods',
          constructor: [
            [
              [],
              globalParams.address0,
              globalParams.address0,
              globalParams.address0,
              shopRestricted.address,
              owner.address,
              []
            ]
          ],
          props: {}
        }) as ShopMethods;
      });

      it('Deploy the Shop Zerocost contract', async function () {
        const [owner] = await ethers.getSigners();
        shopZerocost = await deployContract({
          name: 'ShopZerocost',
          constructor: [
            [
              [],
              shopMethods.address,
              globalParams.address0,
              globalParams.address0,
              shopRestricted.address,
              owner.address,
              []
            ]
          ],
          props: {}
        }) as ShopZerocost;
      });

      it('Deploy the Shop contract', async function () {
        const [owner] = await ethers.getSigners();
        shop = await deployContract({
          name: 'Shop',
          constructor: [
            [
              [],
              shopMethods.address,
              shopZerocost.address,
              globalParams.address0,
              shopRestricted.address,
              owner.address,
              []
            ]
          ],
          props: {}
        }) as Shop;

        resolve({
          houndPotions: houndPotions,
          payments: payments,
          paymentMethods: paymentsMethods,
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