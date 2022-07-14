import { ethers } from "ethers";
const hardhatEthers = require("ethers").ethers;
import { deploymentMessage } from "./deploymentMessage";


export async function getContractInstance(name: string, constructor?: Array<any>, props?: object): Promise<ethers.Contract> {
    let Contract: ethers.ContractFactory;
  
    if ( props ) {
      Contract = await hardhatEthers.getContractFactory(name,props);
    } else {
      Contract = await hardhatEthers.getContractFactory(name);
    }
     
    let contract: ethers.Contract = constructor ? await Contract.deploy(constructor) : await Contract.deploy();
    await contract.deployed();
  
    deploymentMessage(name,contract.address);
    return contract;
  }