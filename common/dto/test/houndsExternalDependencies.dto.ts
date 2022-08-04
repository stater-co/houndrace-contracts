import { AlphaERC721 } from "../../../typechain-types/AlphaERC721";

export interface HoundExternalDependencies {
    incubatorAddress: string;
    paymentsAddress: string;
    shopsAddress: string;
    transferrableRoot: AlphaERC721;
}