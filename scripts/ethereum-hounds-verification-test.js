const hre = require("hardhat");
const address0 = "0x0000000000000000000000000000000000000000";
const maleBoilerplateGene = [ 1, 1, 8, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 9, 8, 2, 1, 4, 2, 9, 8, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 7, 7, 0, 2, 9, 1, 0, 9, 1, 1, 2, 1, 9, 0, 2, 2, 8, 5, 2, 8, 1, 9 ];
const femaleBoilerplateGene = [ 2, 2, 6, 6, 1, 2, 3, 4, 4, 3, 2, 1, 5, 4, 3, 1, 9, 1, 4, 2, 4, 7, 1, 2, 6, 5, 8, 3, 9, 9, 8, 1, 1, 7, 2, 7, 9, 1, 0, 9, 1, 1, 2, 1, 0, 7, 2, 2, 8, 5, 8, 7, 1, 3 ];
const defaultHound = [
  [ 0, 0, 0, 0],
  [ 10000000, 10000000, 100, 1, 100 ],
  [ 0, 100000, 1000, false ],
  [ 0, 0, 0, maleBoilerplateGene ],
  "",
  "",
  false,
  false
];




async function main() {

  const Hounds = await hre.ethers.getContractFactory("Hounds");
  const hounds = await Hounds.deploy([
    "HoundRace",
    "HR",
    [],
    [
      address0,
      address0,
      address0,
      address0,
      address0,
      address0,
      address0,
      address0
    ],[
      "0xB1A2BC2EC50000",
      "0x2386F26FC10000",
      "0x2386F26FC10000",
      "0x2386F26FC10000",
      "0x2386F26FC10000"
    ]
  ]);
  await hounds.deployed();
  console.log("Hounds deployed to: ", hounds.address);

  

  try {
    await hre.run("verify:verify", {
      address: hounds.address,
      constructorArguments: [
        "HoundRace",
        "HR",
        [],
        [
          address0,
          address0,
          address0,
          address0,
          address0,
          address0,
          address0,
          address0
        ],[
          "0xB1A2BC2EC50000",
          "0x2386F26FC10000",
          "0x2386F26FC10000",
          "0x2386F26FC10000",
          "0x2386F26FC10000"
        ]
      ]
    });
  } catch (err) {
    console.error(err);
  }
  
}



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});