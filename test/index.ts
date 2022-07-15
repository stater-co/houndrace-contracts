import { ArenasSystem } from '../common/dto/test/arenasSystem.dto';
import { DeployedLibraries } from '../common/dto/test/librariesDeployment.dto';
import { PaymentEcosystem } from '../common/dto/test/paymentEcosystem.dto';
import { RandomnessSystem } from '../common/dto/test/randomnessSystem.dto';
import { run as runLibraries } from './1_Deploy_Libraries';
import { run as runPayments } from './2_Deploy_Payments_Ecosystem';
import { run as runRandomness } from './3_Deploy_Randomness';
import { run as runArenas } from './4_Deploy_Arenas';
import { ethers } from 'hardhat';

async function main() {
    const [deployer] = await ethers.getSigners();

    const libraries: DeployedLibraries = await runLibraries();
    console.log("Test deployed: " + 
        libraries.converters.address + " , " + 
        libraries.sortings.address
    );
    
    const payments: PaymentEcosystem = await runPayments();
    console.log(
        "Payments deployed: " + 
        payments.houndracePotions.address + " , " + 
        payments.payments.address + " , " + 
        payments.shop.address + " ," + 
        payments.shopMethods + " , " + 
        payments.shopRestricted + " , " + 
        payments.testErc1155 + " , " + 
        payments.testErc721
    );
    
    const randomness: RandomnessSystem = await runRandomness();
    console.log("Randomness deployed: " + 
        randomness.randomness.address
    );

    const arenas: ArenasSystem = await runArenas({
        paymentsAddress: payments.payments.address,
        alphaduneAccountAddress: deployer.address,
        allowedCallers: []
    });
    console.log("Arenas deployed: " + 
        arenas.arenasRestricted.address + " , " + 
        arenas.arenasMethods.address + " , " + 
        arenas.arenas.address
    );
    
}

main();