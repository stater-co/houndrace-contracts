import { ethers } from "ethers";
import { DeployedLibraries } from "../common/dto/test/librariesDeployment.dto";
import { getContractInstance } from "../plugins/contractDeployer";

let convertersLibrary: ethers.Contract;
let sortingsLibrary: ethers.Contract;


async function run(): Promise<DeployedLibraries> {
  return new Promise((resolve, reject) => {
    describe("Setting up the used libraries", () => {
      it("Deploy the Converters", async function () {
        convertersLibrary = await getContractInstance("Converters");
      });
      it("Deploy the Sortings", async function () {
        sortingsLibrary = await getContractInstance("Sortings");
        resolve({
          converters: convertersLibrary,
          sortings: sortingsLibrary
        });
      });
    });
  });
}

export default run;