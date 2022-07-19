import { ethers } from 'ethers';
import { PaymentEcosystem } from '../common/dto/test/paymentEcosystem.dto';
import { SignerDependency } from '../common/dto/test/raw/signerDependency.dto';
import { params } from '../common/params';
import { deployContract } from '../plugins/deployContract';
import { HoundracePotions__factory } from '../typechain-types/factories/contracts/ogars/Data.sol/HoundracePotions__factory';
import { Payments__factory } from '../typechain-types/factories/contracts/payments/methods/Index.sol/Payments__factory';
import { Shop__factory } from '../typechain-types/factories/contracts/shop/Index.sol/Shop__factory';
import { ShopMethods__factory } from '../typechain-types/factories/contracts/shop/methods/Index.sol/ShopMethods__factory';
import { ShopRestricted__factory } from '../typechain-types/factories/contracts/shop/restricted/Index.sol/ShopRestricted__factory';
import { ShopZerocost__factory } from '../typechain-types/factories/contracts/shop/zerocost/Index.sol/ShopZerocost__factory';
import { AlphaERC721__factory } from '../typechain-types/factories/contracts/erc721/Index.sol/AlphaERC721__factory';
import { TestingErc1155__factory } from '../typechain-types/factories/contracts/erc1155/TestingErc1155__factory';

let houndracePotions: ethers.Contract;
let payments: ethers.Contract;
let testErc721: ethers.Contract;
let testErc1155: ethers.Contract;
let shopRestricted: ethers.Contract;
let shopMethods: ethers.Contract;
let shopZerocost: ethers.Contract;
let shop: ethers.Contract;


export async function run(
  dependencies: SignerDependency
): Promise<PaymentEcosystem> {
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
            params.address0,
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
          constructor: [[params.address0,params.address0]],
          props: {}
        });
        shopMethods = await deployContract({
          name: 'ShopMethods',
          constructor: [[params.address0,shopRestricted.address]],
          props: {}
        });
        shopZerocost = await deployContract({
          name: 'ShopZerocost',
          constructor: [[params.address0,shopRestricted.address]],
          props: {}
        });
        shop = await deployContract({
          name: 'Shop',
          constructor: [[shopMethods.address,shopRestricted.address]],
          props: {}
        });

        resolve({
          houndracePotions: HoundracePotions__factory.connect(houndracePotions.address, dependencies.signer),
          payments: Payments__factory.connect(payments.address, dependencies.signer),
          shop: Shop__factory.connect(shop.address, dependencies.signer),
          shopMethods: ShopMethods__factory.connect(shopMethods.address, dependencies.signer),
          shopRestricted: ShopRestricted__factory.connect(shopRestricted.address, dependencies.signer),
          shopZerocost: ShopZerocost__factory.connect(shopZerocost.address, dependencies.signer),
          testErc1155: TestingErc1155__factory.connect(testErc1155.address, dependencies.signer),
          testErc721: AlphaERC721__factory.connect(testErc1155.address, dependencies.signer)
        });

      });

    });

  });
}