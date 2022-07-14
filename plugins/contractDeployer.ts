import hre from 'hardhat'
import { ethers } from "ethers";
import { deploymentMessage } from "./deploymentMessage";


export async function getContractInstance(name: string, constructor?: object, props?: object): Promise<ethers.Contract> {
    let Contract: ethers.ContractFactory;
  
    console.log(name,constructor,props);

    if ( props ) {
      Contract = await hre.ethers.getContractFactory(name,props);
    } else {
      Contract = await hre.ethers.getContractFactory(name);
    }
     
    console.log('################################## ', typeof constructor);

    let contract: ethers.Contract = constructor ? await Contract.deploy(Object.keys(constructor)) : await Contract.deploy();
    await contract.deployed();
  
    deploymentMessage(name,contract.address);
    return contract;
  }