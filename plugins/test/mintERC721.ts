import { ethers } from "ethers";

export async function mintERC721(contract: ethers.Contract, receiver: string, id: number, data: string): Promise<void> {
    await contract.safeMint(
      receiver,
      id,
      data
    );
}