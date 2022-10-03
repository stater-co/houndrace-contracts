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
import { run as runLibraries } from '../test/1_Deploy_Libraries';
import { run as runPayments } from '../test/2_Deploy_Payments_Ecosystem';
import { run as runRandomness } from '../test/3_Deploy_Randomness';
import { run as runArenas } from '../test/4_Deploy_Arenas';
import { run as runGenetics } from '../test/5_Deploy_Genetics';
import { run as runIncubators } from '../test/6_Deploy_Incubator';
import { run as runHounds } from '../test/7_Deploy_Hounds_Ecosystem';
import { run as runRaces } from '../test/8_Deploy_Races_Ecosystem';
import { run as runQueues } from '../test/9_Deploy_Queues_Ecosystem';
import { run as runGenerator } from '../test/10_Deploy_Generator';
import { set as setQueues } from '../test/18_Setup_Queues_Contracts';
import { set as setShop } from '../test/14_Setup_Shop_Contracts';
import { set as setArenas } from '../test/15_Setup_Arenas_Contracts';
import { set as setIncubators } from '../test/16_Setup_Incubator_Contracts';
import { set as setHounds } from '../test/17_Setup_Hounds_Contracts';
import { set as setRaces } from '../test/20_Setup_Races_Contracts';
import { test as testGenetics } from '../test/22_Genetics/22_1_Genetics_Basic_Tests';
import { test as testHounds } from '../test/23_Hounds/23_1_Hounds_Basic_Tests';
import { test as testRaces } from '../test/26_Races/26_1_Races_Basic_Tests';
import { globalParams } from '../common/params';
import { run as runGamification } from '../test/12_Deploy_Gamification';
import { set as setGamification } from '../test/21_Setup_Gamification';
import { GamificationSystem } from '../common/dto/test/gamificationSystem.dto';
import { test as generationTests } from '../test/26_Races/26_3_Races_Generation_Tests';


async function main() {
    
    const libraries: DeployedLibraries = await runLibraries();
    
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
        incubatorAddress: incubators.incubator.address,
        transferrableRoot: payments.testErc721
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
        paymentsAddress: payments.payments.address,
        incubatorAddress: incubators.incubator.address
    });
    
    const generator: GeneratorSystem = await runGenerator({
        arenasAddress: arenas.arenas.address,
        houndsAddress: hounds.hounds.address,
        paymentsAddress: payments.payments.address,
        racesAddress: races.races.address,
        randomnessAddress: randomness.randomness.address,
        sortingsLibraryAddress: libraries.sortings.address,
        incubatorAddress: incubators.incubator.address
    });

    await setQueues({
        queuesRestricted: queues.queuesRestricted,
        queuesMethods: queues.queueMethods,
        queues: queues.queues,
        queuesZerocost: queues.queueZerocost,
        constructor: {
            arenas: arenas.arenas.address,
            hounds: hounds.hounds.address,
            methods: queues.queueMethods.address,
            payments: payments.payments.address,
            restricted: queues.queuesRestricted.address,
            races: races.races.address,
            allowedCallers: [ races.races.address],
            queues: queues.queues.address,
            zerocost: queues.queueZerocost.address,
            incubator: incubators.incubator.address
        }
    });

    await setShop({
        shopMethods: payments.shopMethods,
        shopRestricted: payments.shopRestricted,
        constructor: {
            methods: payments.shopMethods.address,
            restricted: payments.shopRestricted.address,
            alphadune: String(process.env.ETH_ACCOUNT_PUBLIC_KEY)
        }
    });

    await setArenas({
        arenas: arenas.arenas,
        arenasMethods: arenas.arenasMethods,
        arenasRestricted: arenas.arenasRestricted,
        constructor: {
            name: "HoundRace Arenas",
            symbol: "HRA",
            alphadune: globalParams.address0,
            methods: arenas.arenasMethods.address,
            restricted: arenas.arenasRestricted.address,
            payments: payments.payments.address,
            allowedCallers: [races.races.address,queues.queues.address],
            alhpadunePercentage: 60
        }
    });

    const gamification: GamificationSystem = await runGamification({
        allowed: [],
        defaultBreeding: globalParams.houndBreeding,
        defaultStamina: globalParams.houndStamina
    });

    await setGamification({
        constructor: {
            allowed: [incubators.incubator.address, hounds.hounds.address, incubators.incubatorMethods.address],
            defaultBreeding: globalParams.houndBreeding,
            defaultStamina: globalParams.houndStamina,
            methods: gamification.methods.address,
            restricted: gamification.restricted.address
        },
        methods: gamification.methods,
        restricted: gamification.restricted,
        gamification: gamification.gamification
    });

    await setIncubators({
        incubator: incubators.incubator,
        incubatorMethods: incubators.incubatorMethods,
        constructor: {
            genetics: genetics.genetics.address,
            methods: incubators.incubatorMethods.address,
            randomness: randomness.randomness.address,
            secondsToMaturity: 345600,
            gamification: gamification.gamification.address,
            races: races.races.address,
            allowed: [incubators.incubator.address, hounds.hounds.address, incubators.incubatorMethods.address]
        }
    });

    await setHounds({
        hounds: hounds.hounds,
        houndsMinter: hounds.houndsMinter,
        houndsModifier: hounds.houndsModifier,
        houndsRestricted: hounds.houndsRestricted,
        houndsZerocost: hounds.houndsZerocost,
        constructor: {
           name: "HoundRace",
           symbol: "HR",
           allowedCallers: [
            hounds.hounds.address,
            races.races.address,
            queues.queues.address
           ],
           boilerplate: {
            incubator: incubators.incubator.address,
            alphadune: String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
            houndsModifier: hounds.houndsModifier.address,
            zerocost: hounds.houndsZerocost.address,
            minter: hounds.houndsMinter.address,
            restricted: hounds.houndsRestricted.address,
            payments: payments.payments.address,
            shop: payments.shop.address,
            gamification: gamification.gamification.address,
            races: races.races.address
           },
           fees: {
            currency: globalParams.address0,
            breedCostCurrency: globalParams.address0,
            breedFeeCurrency: globalParams.address0,
            breedCost: "0xB1A2BC2EC50000",
            breedFee: "0x2386F26FC10000"
           }
        }
    });

    await setRaces({
        races: races.races,
        racesMethods: races.racesMethods,
        racesRestricted: races.racesRestricted,
        constructor: {
            arenas: arenas.arenas.address,
            generator: generator.generator.address,
            hounds: hounds.hounds.address,
            methods: races.racesMethods.address,
            payments: payments.payments.address,
            queues: queues.queues.address,
            randomness: randomness.randomness.address,
            restricted: races.racesRestricted.address,
            races: races.races.address,
            callable: false,
            allowedCallers: [
                races.races.address,
                queues.queues.address,
                globalParams.address0
            ]
        }
    });

    await testGenetics.basicTest({
        genetics: genetics.genetics
    });

    await testHounds.basicTest({
        hounds: hounds.hounds,
        gamification: gamification.gamification,
        races: races.races
    });

    await testRaces.basicTest({
        contract: races.races,
        race: globalParams.defaultRace
    });

    await setHounds({
        hounds: hounds.hounds,
        houndsMinter: hounds.houndsMinter,
        houndsModifier: hounds.houndsModifier,
        houndsRestricted: hounds.houndsRestricted,
        houndsZerocost: hounds.houndsZerocost,
        constructor: {
           name: "HoundRace",
           symbol: "HR",
           allowedCallers: [],
           boilerplate: {
            incubator: incubators.incubator.address,
            alphadune: String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
            houndsModifier: hounds.houndsModifier.address,
            minter: hounds.houndsMinter.address,
            restricted: hounds.houndsRestricted.address,
            payments: payments.payments.address,
            shop: payments.shop.address,
            gamification: gamification.gamification.address,
            zerocost: hounds.houndsZerocost.address,
            races: races.races.address
           },
           fees: {
            currency: payments.houndracePotions.address,
            breedCostCurrency: payments.houndracePotions.address,
            breedFeeCurrency: payments.houndracePotions.address,
            breedCost: "0xB1A2BC2EC50000",
            breedFee: "0x2386F26FC10000"
           }
        }
    });

    await generationTests.generationTests({
        race: globalParams.defaultRace,
        hounds: hounds.hounds,
        arena: globalParams.defaultArena,
        gamification: gamification.gamification,
        races: races.races
    });

}

main();