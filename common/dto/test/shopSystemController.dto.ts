import { ShopConstructor } from '../../../typechain-types/Shop';
import { ShopMethods } from '../../../typechain-types/ShopMethods';
import { ShopRestricted } from '../../../typechain-types/ShopRestricted';

export interface ShopSystemController {
    shopRestricted: ShopRestricted;
    shopMethods: ShopMethods;
    constructor: ShopConstructor.StructStruct;
}