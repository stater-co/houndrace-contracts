import { ethers, run, network } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`Network:  ${network.name}`);
  console.log(`Deployer: ${deployer.address}`);
  console.log(`Balance:  ${ethers.utils.formatEther(await deployer.getBalance())}\n`);

  const Factory = await ethers.getContractFactory("DuneForwarder");
  const forwarder = await Factory.deploy();
  await forwarder.deployed();

  console.log(`DuneForwarder deployed at: ${forwarder.address}`);

  // Give the explorer a few blocks to index the contract before verifying.
  console.log(`Waiting for confirmations...`);
  await forwarder.deployTransaction.wait(5);

  console.log(`Verifying...`);
  try {
    await run("verify:verify", {
      address: forwarder.address,
      constructorArguments: [],
      contract: "contracts/duneforwarder/DuneForwarder.sol:DuneForwarder"
    });
    console.log(`Verified ✔`);
  } catch (err) {
    const msg = (err as Error).message || String(err);
    if (/already verified/i.test(msg)) {
      console.log(`Already verified.`);
    } else {
      console.error(`Verification failed: ${msg}`);
    }
  }

  console.log(`\nDONE -> ${forwarder.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
