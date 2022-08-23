import { ethers } from "ethers";


export async function mintERC1155Batch(contract: ethers.Contract, receiver: string, ids: Array<number | string>, amounts: Array<number | string>, data: string): Promise<void> {
  await contract.mintBatch(
    receiver,
    ids,
    amounts,
    data
  );
}