import hre from 'hardhat'
import { ethers } from "ethers";
import { deploymentMessage } from "../deploymentMessage";
import { ContractParams } from '../../common/dto/contracts/contractParams.dto';


export async function deployContract(contractParams: ContractParams): Promise<ethers.Contract> {
    const Contract: ethers.ContractFactory = await hre.ethers.getContractFactory(contractParams.name,contractParams.props);

    const contract: ethers.Contract = await Contract.deploy(...contractParams.constructor);
    await contract.deployed();
  
    if ( contractParams.logs ) {
      deploymentMessage(contractParams.name,contract.address);
    }
    return contract;
  }