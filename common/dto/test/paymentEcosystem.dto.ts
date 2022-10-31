import { HoundracePotions } from '../../../typechain-types/HoundracePotions';
import { Payments } from '../../../typechain-types/Payments';
import { PaymentsMethods } from '../../../typechain-types/PaymentsMethods';
import { AlphaERC721 } from '../../../typechain-types/AlphaERC721';
import { TestingErc1155 } from '../../../typechain-types/TestingErc1155';
import { ShopMethods } from '../../../typechain-types/ShopMethods';
import { ShopZerocost } from '../../../typechain-types/ShopZerocost';
import { ShopRestricted } from '../../../typechain-types/ShopRestricted';
import { Shop } from '../../../typechain-types/Shop';

export interface PaymentEcosystem {
    houndracePotions: HoundracePotions;
    payments: Payments;
    paymentMethods: PaymentsMethods;
    testErc721: AlphaERC721;
    testErc1155: TestingErc1155;
    shopRestricted: ShopRestricted;
    shopMethods: ShopMethods;
    shopZerocost: ShopZerocost;
    shop: Shop;
}