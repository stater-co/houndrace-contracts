require("hardhat-tracer");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require('hardhat-contract-sizer');
require("hardhat-gas-reporter");
require("solidity-coverage");


task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


module.exports = {
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0,
      gas: 4800000,
      gasPrice: 8000000000
    },
    rinkeby: {
      url: process.env.RINKEBY_URL,
      timeout: 120000,
      accounts: [process.env.ETH_ACCOUNT_PRIVATE_KEY,process.env.ETH_ACCOUNT_PRIVATE_KEY2],
      gas: 4800000,
      gasPrice: 8000000000
    }
  },
  etherscan: {
    apiKey: process.env.RINKEBY_ETHERSCAN_API_KEY
  },
  mocha: {
    timeout: 800000,
    reporter: 'eth-gas-reporter'
  },
  timeout: 800000,
  solidity: {
    compilers: [
      {
        version: "0.8.13"
      }
    ]
  },
  paths: {
    sources: "./contracts",
    artifacts: "./artifacts"
  }
};