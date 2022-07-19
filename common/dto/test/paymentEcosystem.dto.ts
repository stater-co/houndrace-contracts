import { HoundracePotions } from '../../../typechain-types/contracts/ogars/Data.sol/HoundracePotions';
import { Payments } from '../../../typechain-types/contracts/payments/methods/Index.sol/Payments';
import { AlphaERC721 } from '../../../typechain-types/contracts/erc721/Index.sol/AlphaERC721';
import { TestingErc1155 } from '../../../typechain-types/contracts/erc1155/TestingErc1155';
import { ShopMethods } from '../../../typechain-types/contracts/shop/methods/Index.sol/ShopMethods';
import { ShopZerocost } from '../../../typechain-types/contracts/shop/zerocost/Index.sol/ShopZerocost';
import { ShopRestricted } from '../../../typechain-types/contracts/shop/restricted/Index.sol/ShopRestricted';
import { Shop } from '../../../typechain-types/contracts/shop/Index.sol/Shop';

export interface PaymentEcosystem {
    houndracePotions: HoundracePotions;
    payments: Payments;
    testErc721: AlphaERC721;
    testErc1155: TestingErc1155;
    shopRestricted: ShopRestricted;
    shopMethods: ShopMethods;
    shopZerocost: ShopZerocost;
    shop: Shop;
}