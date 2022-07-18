import { ethers } from "ethers";

export interface ShopSystemController {
    shopRestricted: ethers.Contract;
    shopMethods: ethers.Contract;
}