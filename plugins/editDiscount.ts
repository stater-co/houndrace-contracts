import { ethers } from "ethers";

export async function editDiscount(
    contract: ethers.Contract, 
    id: number | string, 
    erc721Address: string, 
    ids: Array<number | string>, 
    dateStart: number | string, 
    dateStop: number | string, 
    discount: number, 
    tokenType: number, 
    usable: boolean
) {
      await contract.editDiscount([
        erc721Address,
        ids,
        dateStart,
        dateStop,
        discount,
        tokenType,
        usable
      ],id);
  }