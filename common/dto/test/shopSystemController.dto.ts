import { ShopConstructor } from '../../../typechain-types/contracts/shop/params/Index.sol/Params';
import { SignerDependency } from "./raw/signerDependency.dto";
import { ShopMethods } from '../../../typechain-types/contracts/shop/methods/Index.sol/ShopMethods';
import { ShopRestricted } from '../../../typechain-types/contracts/shop/restricted/Index.sol/ShopRestricted';

export interface ShopSystemController extends SignerDependency {
    shopRestricted: ShopRestricted;
    shopMethods: ShopMethods;
    constructor: ShopConstructor.StructStruct;
}