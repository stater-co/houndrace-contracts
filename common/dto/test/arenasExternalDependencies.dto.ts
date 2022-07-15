import { ethers } from "ethers";

export interface ArenasExternalDependencies {
    paymentsAddress: string;
    alphaduneAccountAddress: string;
    allowedCallers: Array<string>
}