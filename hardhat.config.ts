import '@nomiclabs/hardhat-etherscan';
import '@typechain/hardhat';
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomiclabs/hardhat-ethers";
import 'solidity-coverage';
import '@nomicfoundation/hardhat-toolbox';
import "hardhat-deploy-ethers"
import { HardhatUserConfig } from 'hardhat/config';


const config: HardhatUserConfig = {
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0
    },
    rinkeby: {
      url: String(process.env.RINKEBY_URL),
      accounts: [String(process.env.ETH_ACCOUNT_PRIVATE_KEY)]
    },
    polygonMumbai: {
      url: String(process.env.MUMBAI_URL),
      accounts: [String(process.env.ETH_ACCOUNT_PRIVATE_KEY)]
    }
  },
  etherscan: {
    apiKey: process.env.POLYSCAN_API_KEY
  },
  solidity: {
    compilers: [
      {
        version: '0.8.17',
        /*
        settings: {
          optimizer: {
            enabled: true,
            runs: 1,
          },
        }
        */
      }
    ]
  },
  paths: {
    sources: './contracts',
    artifacts: './artifacts',
    root: './',
    tests: './test',
    cache: './cache'
  }
};

export default config;