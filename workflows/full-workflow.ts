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
import { set as setGenerator } from '../test/19_Setup_Generator_Contracts';
import { test as testGenetics } from '../test/22_Genetics/22_1_Genetics_Basic_Tests';
import { test as testHounds } from '../test/23_Hounds/23_1_Hounds_Basic_Tests';
import { test as testHoundsAdvanced } from '../test/23_Hounds/23_2_Hounds_Custom_Token_Tests';
import { test as testArenas } from '../test/24_Arenas/24_1_Arenas_Basic_Tests';
import { test as testQueues } from '../test/25_Queues/25_1_Queues_Basic_Tests';
import { test as testQueuesAdvanced } from '../test/25_Queues/25_2_Queues_Advanced_Tests';
import { test as testRaces } from '../test/26_Races/26_1_Races_Basic_Tests';
import { globalParams } from '../common/params';
import { run as runLootboxes } from '../test/11_Deploy_Lootboxes';
import { LootboxesSystem } from '../common/dto/test/lootboxesSystem.dto';
import { run as runGamification } from '../test/12_Deploy_Gamification';
import { set as setGamification } from '../test/21_Setup_Gamification';
import { test as testLootboxes } from '../test/27_Lootboxes/27_1_Lootboxes_Basic_Tests';
import { GamificationSystem } from '../common/dto/test/gamificationSystem.dto';
import { test as testRacesAdvanced } from '../test/26_Races/26_2_Races_Advanced_Tests';
import { set as setPayments } from '../test/13_Setup_Payments_Ecosystem';
import { DeployedFirewall } from '../common/dto/test/firewallDeployment.dto';
import { run as runFirewall } from '../test/0_Deploy_Firewall';


async function main() {
    
    const firewall: DeployedFirewall = await runFirewall({
        council: [],
        minCouncilApprovals: 0
    });

    const libraries: DeployedLibraries = await runLibraries();
    
    const payments: PaymentEcosystem = await runPayments({
        firewall: firewall.firewall.address
    });
    
    const randomness: RandomnessSystem = await runRandomness();

    const arenas: ArenasSystem = await runArenas({
        paymentsAddress: payments.payments.address,
        firewall: firewall.firewall.address
    });

    const genetics: GeneticsSystem = await runGenetics({
        arenasAddress: arenas.arenas.address,
        randomnessAddress: randomness.randomness.address,
        firewall: firewall.firewall.address
    });

    const incubators: IncubatorSystem = await runIncubators({
        geneticsAddress: genetics.genetics.address,
        randomnessAddress: randomness.randomness.address,
        firewall: firewall.firewall.address
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

    const gamification: GamificationSystem = await runGamification({
        defaultBreeding: globalParams.houndBreeding,
        defaultStamina: globalParams.houndStamina,
        firewall: firewall.firewall.address
    });

    const lootboxes: LootboxesSystem = await runLootboxes({
        canBeOpened: false,
        houndsAddress: hounds.hounds.address,
        paymentsAddress: payments.payments.address
    });

    await setPayments({
        payments: payments.payments,
        paymentMethods: payments.paymentMethods,
        paymentRestricted: payments.paymentRestricted,
        constructor: {
            restricted: payments.paymentRestricted.address,
            methods: payments.paymentMethods.address,
            alphadune: String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
            firewall: firewall.firewall.address
        }
    });

    await setShop({
        shopMethods: payments.shopMethods,
        shopRestricted: payments.shopRestricted,
        constructor: {
            methods: payments.shopMethods.address,
            restricted: payments.shopRestricted.address,
            alphadune: String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
            firewall: firewall.firewall.address
        }
    });

    await setGamification({
        constructor: {
            defaultBreeding: globalParams.houndBreeding,
            defaultStamina: globalParams.houndStamina,
            methods: gamification.methods.address,
            restricted: gamification.restricted.address,
            firewall: firewall.firewall.address
        },
        methods: gamification.methods,
        restricted: gamification.restricted,
        gamification: gamification.gamification,
        firewall: firewall.firewall.address
    });

    await setQueues({
        queuesRestricted: queues.queuesRestricted,
        queuesMethods: queues.queueMethods,
        queuesZerocost: queues.queueZerocost,
        queues: queues.queues,
        constructor: {
            arenas: arenas.arenas.address,
            hounds: hounds.hounds.address,
            methods: queues.queueMethods.address,
            payments: payments.payments.address,
            restricted: queues.queuesRestricted.address,
            races: races.races.address,
            queues: queues.queues.address,
            zerocost: queues.queueZerocost.address,
            incubator: incubators.incubator.address,
            firewall: firewall.firewall.address
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
            alhpadunePercentage: 60,
            firewall: firewall.firewall.address
        }
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
            firewall: firewall.firewall.address
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
            races: races.races.address,
            firewall: firewall.firewall.address
           },
           fees: {
            breedCostCurrency: globalParams.address0,
            breedFeeCurrency: globalParams.address0,
            currency: globalParams.address0,
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
            firewall: firewall.firewall.address
        }
    });

    await setGenerator({
        generatorMethods: generator.generatorMethods,
        generatorZerocost: generator.generatorZerocost,
        constructor: {
            arenas: arenas.arenas.address,
            hounds: hounds.hounds.address,
            methods: generator.generatorMethods.address,
            payments: payments.payments.address,
            randomness: randomness.randomness.address,
            zerocost: generator.generatorZerocost.address,
            incubator: incubators.incubator.address,
            gamification: gamification.gamification.address,
            firewall: firewall.firewall.address
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

    await testArenas.basicTest({
        arenas: arenas.arenas,
        arena: globalParams.defaultArena
    });

    await testQueues.basicTest({
        contract: queues.queues,
        houndsContract: hounds.hounds,
        houndIdToEnqueue: 1,
        queue: globalParams.defaultQueue,
        arenasContract: arenas.arenas,
        erc20: payments.houndracePotions,
        payments: payments.payments
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
           boilerplate: {
            incubator: incubators.incubator.address,
            alphadune: String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
            zerocost: hounds.houndsZerocost.address,
            houndsModifier: hounds.houndsModifier.address,
            minter: hounds.houndsMinter.address,
            restricted: hounds.houndsRestricted.address,
            payments: payments.payments.address,
            shop: payments.shop.address,
            gamification: gamification.gamification.address,
            races: races.races.address,
            firewall: firewall.firewall.address
           },
           fees: {
            breedCostCurrency: payments.houndracePotions.address,
            breedFeeCurrency: payments.houndracePotions.address,
            currency: payments.houndracePotions.address,
            breedCost: "0xB1A2BC2EC50000",
            breedFee: "0x2386F26FC10000"
           }
        }
    });

    await testHoundsAdvanced.advancedTests({
        hounds: hounds.hounds,
        transferableHounds: hounds.transferrableRoot,
        erc20: payments.houndracePotions,
        payments: payments.payments,
        gamification: gamification.gamification,
        races: races.races
    });

    await testQueuesAdvanced.advancedTests({
        queuesContract: queues.queues,
        arenasContract: arenas.arenas,
        erc20: payments.houndracePotions,
        queue: globalParams.defaultQueue,
        arena: globalParams.defaultArena,
        houndsContract: hounds.hounds,
        races: races.races,
        gamification: gamification.gamification,
        payments: payments.payments
    });



    await testLootboxes.basicTest({
        lootboxesContract: lootboxes.lootboxes,
        houndsContract: hounds.hounds,
        gamification: gamification.gamification,
        races: races.races
    });

    await testRacesAdvanced.advancedTests({
        contract: races.races,
        race: globalParams.defaultRace
    });

}

main();