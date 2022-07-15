import { ArenasSystem } from '../common/dto/test/arenasSystem.dto';
import { GeneticsSystem } from '../common/dto/test/geneticsSystem.dto';
import { IncubatorSystem } from '../common/dto/test/incubatorSystem.dto';
import { DeployedLibraries } from '../common/dto/test/librariesDeployment.dto';
import { PaymentEcosystem } from '../common/dto/test/paymentEcosystem.dto';
import { RandomnessSystem } from '../common/dto/test/randomnessSystem.dto';
import { run as runLibraries } from './1_Deploy_Libraries';
import { run as runPayments } from './2_Deploy_Payments_Ecosystem';
import { run as runRandomness } from './3_Deploy_Randomness';
import { run as runArenas } from './4_Deploy_Arenas';
import { run as runGenetics } from './5_Deploy_Genetics';
import { run as runIncubators } from './6_Deploy_Incubator';


async function main() {

    const libraries: DeployedLibraries = await runLibraries();
    console.log("Test deployed: " + 
        libraries.converters.address + " , " + 
        libraries.sortings.address
    );
    
    const payments: PaymentEcosystem = await runPayments();
    
    const randomness: RandomnessSystem = await runRandomness();

    const arenas: ArenasSystem = await runArenas({
        paymentsAddress: payments.payments.address,
        allowedCallers: []
    });

    const genetics: GeneticsSystem = await runGenetics({
        arenasAddress: arenas.arenas.address,
        randomnessAddress: randomness.randomness.address
    });

    const incubators: IncubatorSystem = await runIncubators({
        geneticsAddress: genetics.genetics.address,
        randomnessAddress: randomness.randomness.address
    });
    
}

main();