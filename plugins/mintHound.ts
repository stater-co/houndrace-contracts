import { ethers } from "ethers";


export async function mintHound(
  contract: ethers.Contract
) {
      await contract.initializeHound();
}