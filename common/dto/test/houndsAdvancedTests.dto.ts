import { Contract, Signer } from "ethers";

export interface HoundsAdvancedTests {
    hounds: Contract;
    erc20: Contract;
    payments: Contract;
    signer: Signer;
    signer2: Signer;
    signer3: Signer;
}