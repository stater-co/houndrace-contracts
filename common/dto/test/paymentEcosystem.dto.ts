import { ethers } from "ethers";

export interface PaymentEcosystem {
    houndracePotions: ethers.Contract;
    payments: ethers.Contract;
    testErc721: ethers.Contract;
    testErc1155: ethers.Contract;
    shopRestricted: ethers.Contract;
    shopMethods: ethers.Contract;
    shopZerocost: ethers.Contract;
    shop: ethers.Contract;
}