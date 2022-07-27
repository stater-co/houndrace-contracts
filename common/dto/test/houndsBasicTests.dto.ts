import { Contract, Signer } from "ethers";

export interface HoundsBasicTests {
    hounds: Contract;
    signer: Signer;
}