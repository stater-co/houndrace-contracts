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
      initialBaseFeePerGas: 0
    },
    rinkeby: {
      url: process.env.RINKEBY_URL,
      accounts: [process.env.ETH_ACCOUNT_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.RINKEBY_ETHERSCAN_API_KEY
  },
  mocha: {
    reporter: 'eth-gas-reporter'
  },
  solidity: {
    compilers: [
      {
        version: "0.8.15"
      }
    ]
  },
  paths: {
    sources: "./contracts",
    artifacts: "./artifacts"
  }
};