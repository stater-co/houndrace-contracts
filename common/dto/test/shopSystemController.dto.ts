import { ethers } from "ethers";
import { ShopConstructor } from '../../../typechain-types/contracts/shop/params/Index.sol/Params';

export interface ShopSystemController {
    shopRestricted: ethers.Contract;
    shopMethods: ethers.Contract;
    constructor: ShopConstructor.StructStruct;
}