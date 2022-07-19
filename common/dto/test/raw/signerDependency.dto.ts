import { Signer, providers } from 'ethers';

export interface SignerDependency {
    signer: Signer | providers.Provider
}