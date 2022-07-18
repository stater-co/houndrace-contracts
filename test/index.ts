import { ArenasSystem } from '../common/dto/test/arenasSystem.dto';
import { GeneratorSystem } from '../common/dto/test/generatorSystem.dto';
import { GeneticsSystem } from '../common/dto/test/geneticsSystem.dto';
import { HoundsSystem } from '../common/dto/test/houndsSystem.dto';
import { IncubatorSystem } from '../common/dto/test/incubatorSystem.dto';
import { DeployedLibraries } from '../common/dto/test/librariesDeployment.dto';
import { PaymentEcosystem } from '../common/dto/test/paymentEcosystem.dto';
import { QueuesSystem } from '../common/dto/test/queuesSystem.dto';
import { RacesSystem } from '../common/dto/test/racesSystem.dto';
import { RandomnessSystem } from '../common/dto/test/randomnessSystem.dto';
import { run as runLibraries } from './1_Deploy_Libraries';
import { run as runPayments } from './2_Deploy_Payments_Ecosystem';
import { run as runRandomness } from './3_Deploy_Randomness';
import { run as runArenas } from './4_Deploy_Arenas';
import { run as runGenetics } from './5_Deploy_Genetics';
import { run as runIncubators } from './6_Deploy_Incubator';
import { run as runHounds } from './7_Deploy_Hounds_Ecosystem';
import { run as runRaces } from './8_Deploy_Races_Ecosystem';
import { run as runQueues } from './9_Deploy_Queues_Ecosystem';
import { run as runGenerator } from './10_Deploy_Generator';
import { set as setQueues } from './11_Setup_Queues_Contracts';
import { set as setShop } from './12_Setup_Shop_Contracts';


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

    const hounds: HoundsSystem = await runHounds({
        shopsAddress: payments.shop.address,
        paymentsAddress: payments.payments.address,
        incubatorAddress: incubators.incubator.address
    });

    const races: RacesSystem = await runRaces({
        arenasAddress: arenas.arenas.address,
        houndsAddress: hounds.hounds.address,
        paymentsAddress: payments.payments.address,
        randomnessAddress: randomness.randomness.address
    });

    const queues: QueuesSystem = await runQueues({
        racesAddress: races.races.address,
        arenasAddress: arenas.arenas.address,
        houndsAddress: hounds.hounds.address,
        paymentsAddress: payments.payments.address
    });
    
    const generator: GeneratorSystem = await runGenerator({
        arenasAddress: arenas.arenas.address,
        houndsAddress: hounds.hounds.address,
        paymentsAddress: payments.payments.address,
        racesAddress: races.races.address,
        randomnessAddress: randomness.randomness.address,
        sortingsLibraryAddress: libraries.sortings.address
    });

    await setQueues({
        queuesRestricted: queues.queuesRestricted,
        queuesMethods: queues.queueMethods,
        arenasAddress: arenas.arenas.address,
        houndsAddress: hounds.hounds.address,
        paymentsAddress: payments.payments.address,
        queuesAddress: queues.queues.address,
        racesAddress: races.races.address,
        allowed: [
            races.races.address
        ]
    });

    await setShop({
        shopMethods: payments.shopMethods,
        shopRestricted: payments.shopRestricted
    });
}

main();