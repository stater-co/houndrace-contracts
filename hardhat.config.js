require("hardhat-tracer");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require('hardhat-contract-sizer');
require("hardhat-gas-reporter");
require("solidity-coverage");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
let accounts = [];
if ( process.env.KEY1 !== undefined ) {
  accounts.push(process.env.KEY1);
}
if ( process.env.KEY !== undefined ) {
  accounts.push(process.env.KEY);
}
if ( process.env.KEY2 !== undefined ) {
  accounts.push(process.env.KEY2);
}

module.exports = {
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0 // workaround from https://github.com/sc-forks/solidity-coverage/issues/652#issuecomment-896330136 . Remove when that issue is closed.
    },
    rinkeby: {
      url: process.env.RINKEBY_URL || "",
      timeout: 120000,
      accounts: accounts
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.RINKEBY_ETHERSCAN_API_KEY
  },
  mocha: {
    timeout: 100000,
    reporter: 'eth-gas-reporter'
  },
  timeout: 100000,
  solidity: {
    compilers: [
      {
        version: "0.8.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1
          }
        }
      }
    ]
  },
  paths: {
    sources: "./contracts",
    artifacts: "./artifacts"
  }
};