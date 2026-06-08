import '@nomiclabs/hardhat-etherscan';
import '@typechain/hardhat';
import '@nomicfoundation/hardhat-chai-matchers';
import 'hardhat-gas-reporter'
import '@nomiclabs/hardhat-ethers';
import 'solidity-coverage';
import '@nomicfoundation/hardhat-toolbox';
import 'hardhat-deploy-ethers'
import { HardhatUserConfig } from 'hardhat/config';


const ethAccounts = process.env.ETH_ACCOUNT_PRIVATE_KEY
  ? [process.env.ETH_ACCOUNT_PRIVATE_KEY]
  : [];

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0
    },
    rinkeby: {
      url: String(process.env.RINKEBY_URL),
      accounts: ethAccounts
    },
    polygonMumbai: {
      url: String(process.env.MUMBAI_URL),
      accounts: ethAccounts
    },
    polygon: {
      url: String(process.env.POLYGON_URL),
      accounts: ethAccounts,
      //gasMultiplier: 2,
      //gasPrice: "auto"
    },
    arbitrumSepolia: {
      url: 'https://sepolia-rollup.arbitrum.io/rpc',
      chainId: 421614,
      accounts: ethAccounts,
      gasMultiplier: 2,
      gasPrice: 100_000_000,   // 0.1 gwei — well above ASep base fee
    },
    alphaDuneTestnet: {
      url: 'https://rpc.testnet.alphadune.com',
      chainId: 4126084,
      accounts: ethAccounts,
    }
  },
  etherscan: {
    apiKey: process.env.POLYSCAN_API_KEY
  },
  solidity: {
    compilers: [
      {
        version: '0.8.17',
        settings: {
          optimizer: {
            enabled: true,
            runs: 10000,
          },
        }
      }
    ]
  },
  paths: {
    sources: './contracts',
    artifacts: './artifacts',
    root: './',
    tests: './test',
    cache: './cache'
  },
  gasReporter: {
    currency: 'ETH',
    gasPrice: 40,
    enabled: true
  },
  mocha: {
    reporter: 'eth-gas-reporter',
    timeout: 100000000,
    reporterOptions : {

    }
  }
};

export default config;