import { ethers, Signer } from 'ethers';

export const generateSigners = (amount: number): Signer[] => {
  const signers: Signer[] = []
  for (let i = 0; i < amount; i++) {
    signers.push(ethers.Wallet.createRandom().connect(ethers.getDefaultProvider()));
  }
  return signers
}