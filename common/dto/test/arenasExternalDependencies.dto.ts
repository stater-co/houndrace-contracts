import { ethers } from "ethers";

export interface ArenasExternalDependencies {
    paymentsAddress: string;
    allowedCallers: Array<string>
}