import { Contract, Signer } from "ethers";

export interface HoundsAdvancedTests {
    hounds: Contract;
    erc20: Contract;
    payments: Contract;
    transferableHounds: Contract;
}