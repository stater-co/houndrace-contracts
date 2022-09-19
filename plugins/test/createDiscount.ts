import { ethers } from "ethers";


export async function createDiscount(contract: ethers.Contract, erc721Address: string, ids: Array<number | string>, dateStart: number | string, dateStop: number | string, discount: number, tokenType: number, usable: boolean) {
  await contract.createDiscount([
    erc721Address,
    ids,
    dateStart,
    dateStop,
    discount,
    tokenType,
    usable
  ]);
}