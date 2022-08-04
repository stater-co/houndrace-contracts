import { Signer } from 'ethers';

export interface SignerDependency {
    signer: Signer;
    signer2?: Signer;
    signer3?: Signer;
}