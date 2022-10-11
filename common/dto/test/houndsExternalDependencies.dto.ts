import { AlphaERC721 } from "../../../typechain-types/AlphaERC721";

export interface HoundExternalDependencies {
    paymentsAddress: string;
    shopsAddress: string;
    transferrableRoot: AlphaERC721;
}