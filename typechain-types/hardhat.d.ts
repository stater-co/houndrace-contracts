/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC1155MetadataURI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155MetadataURI__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "ERC721URIStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721URIStorage__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC721Holder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Holder__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "Arenas",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Arenas__factory>;
    getContractFactory(
      name: "IArena",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IArena__factory>;
    getContractFactory(
      name: "IArenaOwner",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IArenaOwner__factory>;
    getContractFactory(
      name: "ICreateArena",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICreateArena__factory>;
    getContractFactory(
      name: "IEditArena",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IEditArena__factory>;
    getContractFactory(
      name: "IHandleArenaUsage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IHandleArenaUsage__factory>;
    getContractFactory(
      name: "ISetGlobalParameters",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISetGlobalParameters__factory>;
    getContractFactory(
      name: "ISetTokenURI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISetTokenURI__factory>;
    getContractFactory(
      name: "ITokenURI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITokenURI__factory>;
    getContractFactory(
      name: "ArenasMethods",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ArenasMethods__factory>;
    getContractFactory(
      name: "Params",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Params__factory>;
    getContractFactory(
      name: "ArenasRestricted",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ArenasRestricted__factory>;
    getContractFactory(
      name: "TestingErc1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestingErc1155__factory>;
    getContractFactory(
      name: "AlphaERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AlphaERC721__factory>;
    getContractFactory(
      name: "Loot",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Loot__factory>;
    getContractFactory(
      name: "Generator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Generator__factory>;
    getContractFactory(
      name: "IGenerate",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGenerate__factory>;
    getContractFactory(
      name: "ISimulateClassicRace",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISimulateClassicRace__factory>;
    getContractFactory(
      name: "GeneratorMethods",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GeneratorMethods__factory>;
    getContractFactory(
      name: "Params",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Params__factory>;
    getContractFactory(
      name: "GeneratorZerocost",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GeneratorZerocost__factory>;
    getContractFactory(
      name: "Genetics",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Genetics__factory>;
    getContractFactory(
      name: "IArithmeticMutation",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IArithmeticMutation__factory>;
    getContractFactory(
      name: "IInversionMutation",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IInversionMutation__factory>;
    getContractFactory(
      name: "IMixGenes",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMixGenes__factory>;
    getContractFactory(
      name: "IScrambleMutation",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IScrambleMutation__factory>;
    getContractFactory(
      name: "ISwapMutation",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISwapMutation__factory>;
    getContractFactory(
      name: "IUniformCrossover",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniformCrossover__factory>;
    getContractFactory(
      name: "IWholeArithmeticRecombination",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWholeArithmeticRecombination__factory>;
    getContractFactory(
      name: "Params",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Params__factory>;
    getContractFactory(
      name: "Hounds",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Hounds__factory>;
    getContractFactory(
      name: "IBoostHoundBreeding",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBoostHoundBreeding__factory>;
    getContractFactory(
      name: "IBoostHoundStamina",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBoostHoundStamina__factory>;
    getContractFactory(
      name: "IBreedHounds",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBreedHounds__factory>;
    getContractFactory(
      name: "IGetBreedCost",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGetBreedCost__factory>;
    getContractFactory(
      name: "IHound",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IHound__factory>;
    getContractFactory(
      name: "IHoundOwner",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IHoundOwner__factory>;
    getContractFactory(
      name: "IInitializeHound",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IInitializeHound__factory>;
    getContractFactory(
      name: "IPutHoundForBreed",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPutHoundForBreed__factory>;
    getContractFactory(
      name: "ISetTokenURI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISetTokenURI__factory>;
    getContractFactory(
      name: "ITokenURI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITokenURI__factory>;
    getContractFactory(
      name: "IUpdateHoundRunning",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUpdateHoundRunning__factory>;
    getContractFactory(
      name: "IUpdateHoundStamina",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUpdateHoundStamina__factory>;
    getContractFactory(
      name: "HoundsMinter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HoundsMinter__factory>;
    getContractFactory(
      name: "HoundsModifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HoundsModifier__factory>;
    getContractFactory(
      name: "Params",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Params__factory>;
    getContractFactory(
      name: "HoundsRestricted",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HoundsRestricted__factory>;
    getContractFactory(
      name: "Incubator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Incubator__factory>;
    getContractFactory(
      name: "IBreedHounds",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBreedHounds__factory>;
    getContractFactory(
      name: "IncubatorMethods",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IncubatorMethods__factory>;
    getContractFactory(
      name: "Params",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Params__factory>;
    getContractFactory(
      name: "HoundracePotions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HoundracePotions__factory>;
    getContractFactory(
      name: "IPay",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPay__factory>;
    getContractFactory(
      name: "Payments",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Payments__factory>;
    getContractFactory(
      name: "Params",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Params__factory>;
    getContractFactory(
      name: "Queues",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Queues__factory>;
    getContractFactory(
      name: "ICreateQueues",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICreateQueues__factory>;
    getContractFactory(
      name: "IDeleteQueue",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDeleteQueue__factory>;
    getContractFactory(
      name: "IEnqueue",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IEnqueue__factory>;
    getContractFactory(
      name: "IParticipantsOf",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IParticipantsOf__factory>;
    getContractFactory(
      name: "IQueue",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IQueue__factory>;
    getContractFactory(
      name: "ISetGlobalParameters",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISetGlobalParameters__factory>;
    getContractFactory(
      name: "IUnenqueue",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUnenqueue__factory>;
    getContractFactory(
      name: "QueuesMethods",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.QueuesMethods__factory>;
    getContractFactory(
      name: "Params",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Params__factory>;
    getContractFactory(
      name: "QueuesRestricted",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.QueuesRestricted__factory>;
    getContractFactory(
      name: "Races",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Races__factory>;
    getContractFactory(
      name: "IHandleRaceLoot",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IHandleRaceLoot__factory>;
    getContractFactory(
      name: "IParticipantsOf",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IParticipantsOf__factory>;
    getContractFactory(
      name: "IRaceStart",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRaceStart__factory>;
    getContractFactory(
      name: "IUploadRace",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUploadRace__factory>;
    getContractFactory(
      name: "RacesMethods",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RacesMethods__factory>;
    getContractFactory(
      name: "Params",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Params__factory>;
    getContractFactory(
      name: "RacesRestricted",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RacesRestricted__factory>;
    getContractFactory(
      name: "IGetRandomNumber",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGetRandomNumber__factory>;
    getContractFactory(
      name: "Randomness",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Randomness__factory>;
    getContractFactory(
      name: "Shop",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Shop__factory>;
    getContractFactory(
      name: "ICalculateDiscount",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICalculateDiscount__factory>;
    getContractFactory(
      name: "ICheckDiscount",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICheckDiscount__factory>;
    getContractFactory(
      name: "ICreateDiscount",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICreateDiscount__factory>;
    getContractFactory(
      name: "IEditDiscount",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IEditDiscount__factory>;
    getContractFactory(
      name: "ShopMethods",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShopMethods__factory>;
    getContractFactory(
      name: "Geyser",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Geyser__factory>;
    getContractFactory(
      name: "Params",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Params__factory>;
    getContractFactory(
      name: "ShopRestricted",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShopRestricted__factory>;
    getContractFactory(
      name: "ShopZerocost",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShopZerocost__factory>;
    getContractFactory(
      name: "Converters",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Converters__factory>;
    getContractFactory(
      name: "Sortings",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Sortings__factory>;
    getContractFactory(
      name: "Withdrawable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Withdrawable__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IERC1155MetadataURI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155MetadataURI>;
    getContractAt(
      name: "IERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "IERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Receiver>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "ERC721URIStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721URIStorage>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC721Holder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Holder>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "Arenas",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Arenas>;
    getContractAt(
      name: "IArena",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IArena>;
    getContractAt(
      name: "IArenaOwner",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IArenaOwner>;
    getContractAt(
      name: "ICreateArena",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICreateArena>;
    getContractAt(
      name: "IEditArena",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IEditArena>;
    getContractAt(
      name: "IHandleArenaUsage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IHandleArenaUsage>;
    getContractAt(
      name: "ISetGlobalParameters",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISetGlobalParameters>;
    getContractAt(
      name: "ISetTokenURI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISetTokenURI>;
    getContractAt(
      name: "ITokenURI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITokenURI>;
    getContractAt(
      name: "ArenasMethods",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ArenasMethods>;
    getContractAt(
      name: "Params",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Params>;
    getContractAt(
      name: "ArenasRestricted",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ArenasRestricted>;
    getContractAt(
      name: "TestingErc1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestingErc1155>;
    getContractAt(
      name: "AlphaERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AlphaERC721>;
    getContractAt(
      name: "Loot",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Loot>;
    getContractAt(
      name: "Generator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Generator>;
    getContractAt(
      name: "IGenerate",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGenerate>;
    getContractAt(
      name: "ISimulateClassicRace",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISimulateClassicRace>;
    getContractAt(
      name: "GeneratorMethods",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GeneratorMethods>;
    getContractAt(
      name: "Params",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Params>;
    getContractAt(
      name: "GeneratorZerocost",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GeneratorZerocost>;
    getContractAt(
      name: "Genetics",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Genetics>;
    getContractAt(
      name: "IArithmeticMutation",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IArithmeticMutation>;
    getContractAt(
      name: "IInversionMutation",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IInversionMutation>;
    getContractAt(
      name: "IMixGenes",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMixGenes>;
    getContractAt(
      name: "IScrambleMutation",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IScrambleMutation>;
    getContractAt(
      name: "ISwapMutation",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISwapMutation>;
    getContractAt(
      name: "IUniformCrossover",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniformCrossover>;
    getContractAt(
      name: "IWholeArithmeticRecombination",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWholeArithmeticRecombination>;
    getContractAt(
      name: "Params",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Params>;
    getContractAt(
      name: "Hounds",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Hounds>;
    getContractAt(
      name: "IBoostHoundBreeding",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBoostHoundBreeding>;
    getContractAt(
      name: "IBoostHoundStamina",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBoostHoundStamina>;
    getContractAt(
      name: "IBreedHounds",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBreedHounds>;
    getContractAt(
      name: "IGetBreedCost",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGetBreedCost>;
    getContractAt(
      name: "IHound",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IHound>;
    getContractAt(
      name: "IHoundOwner",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IHoundOwner>;
    getContractAt(
      name: "IInitializeHound",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IInitializeHound>;
    getContractAt(
      name: "IPutHoundForBreed",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPutHoundForBreed>;
    getContractAt(
      name: "ISetTokenURI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISetTokenURI>;
    getContractAt(
      name: "ITokenURI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITokenURI>;
    getContractAt(
      name: "IUpdateHoundRunning",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUpdateHoundRunning>;
    getContractAt(
      name: "IUpdateHoundStamina",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUpdateHoundStamina>;
    getContractAt(
      name: "HoundsMinter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HoundsMinter>;
    getContractAt(
      name: "HoundsModifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HoundsModifier>;
    getContractAt(
      name: "Params",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Params>;
    getContractAt(
      name: "HoundsRestricted",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HoundsRestricted>;
    getContractAt(
      name: "Incubator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Incubator>;
    getContractAt(
      name: "IBreedHounds",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBreedHounds>;
    getContractAt(
      name: "IncubatorMethods",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IncubatorMethods>;
    getContractAt(
      name: "Params",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Params>;
    getContractAt(
      name: "HoundracePotions",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HoundracePotions>;
    getContractAt(
      name: "IPay",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPay>;
    getContractAt(
      name: "Payments",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Payments>;
    getContractAt(
      name: "Params",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Params>;
    getContractAt(
      name: "Queues",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Queues>;
    getContractAt(
      name: "ICreateQueues",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICreateQueues>;
    getContractAt(
      name: "IDeleteQueue",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDeleteQueue>;
    getContractAt(
      name: "IEnqueue",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IEnqueue>;
    getContractAt(
      name: "IParticipantsOf",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IParticipantsOf>;
    getContractAt(
      name: "IQueue",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IQueue>;
    getContractAt(
      name: "ISetGlobalParameters",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISetGlobalParameters>;
    getContractAt(
      name: "IUnenqueue",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUnenqueue>;
    getContractAt(
      name: "QueuesMethods",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.QueuesMethods>;
    getContractAt(
      name: "Params",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Params>;
    getContractAt(
      name: "QueuesRestricted",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.QueuesRestricted>;
    getContractAt(
      name: "Races",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Races>;
    getContractAt(
      name: "IHandleRaceLoot",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IHandleRaceLoot>;
    getContractAt(
      name: "IParticipantsOf",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IParticipantsOf>;
    getContractAt(
      name: "IRaceStart",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRaceStart>;
    getContractAt(
      name: "IUploadRace",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUploadRace>;
    getContractAt(
      name: "RacesMethods",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RacesMethods>;
    getContractAt(
      name: "Params",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Params>;
    getContractAt(
      name: "RacesRestricted",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RacesRestricted>;
    getContractAt(
      name: "IGetRandomNumber",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGetRandomNumber>;
    getContractAt(
      name: "Randomness",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Randomness>;
    getContractAt(
      name: "Shop",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Shop>;
    getContractAt(
      name: "ICalculateDiscount",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICalculateDiscount>;
    getContractAt(
      name: "ICheckDiscount",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICheckDiscount>;
    getContractAt(
      name: "ICreateDiscount",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICreateDiscount>;
    getContractAt(
      name: "IEditDiscount",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IEditDiscount>;
    getContractAt(
      name: "ShopMethods",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShopMethods>;
    getContractAt(
      name: "Geyser",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Geyser>;
    getContractAt(
      name: "Params",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Params>;
    getContractAt(
      name: "ShopRestricted",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShopRestricted>;
    getContractAt(
      name: "ShopZerocost",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShopZerocost>;
    getContractAt(
      name: "Converters",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Converters>;
    getContractAt(
      name: "Sortings",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Sortings>;
    getContractAt(
      name: "Withdrawable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Withdrawable>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
