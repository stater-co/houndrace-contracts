import { ArenasSystem } from '../common/dto/test/arenasSystem.dto';
import { HoundsSystem } from '../common/dto/test/houndsSystem.dto';
import { PaymentEcosystem } from '../common/dto/test/paymentEcosystem.dto';
import { QueuesSystem } from '../common/dto/test/queuesSystem.dto';
import { RacesSystem } from '../common/dto/test/racesSystem.dto';
import { GeneticsSystem } from '../common/dto/test/geneticsSystem.dto';
import { run as runGenetics } from '../test/5_Deploy_Genetics';
import { test as testGenetics } from '../test/22_Genetics/22_1_Genetics_Basic_Tests';
import { run as runPayments } from '../test/2_Deploy_Payments_Ecosystem';
import { run as runArenas } from '../test/4_Deploy_Arenas';
import { run as runHounds } from '../test/7_Deploy_Hounds_Ecosystem';
import { run as runRaces } from '../test/8_Deploy_Races_Ecosystem';
import { run as runQueues } from '../test/9_Deploy_Queues_Ecosystem';
import { set as setQueues } from '../test/18_Setup_Queues_Contracts';
import { set as setShop } from '../test/14_Setup_Shop_Contracts';
import { set as setArenas } from '../test/15_Setup_Arenas_Contracts';
import { set as setHounds } from '../test/17_Setup_Hounds_Contracts';
import { set as setRaces } from '../test/20_Setup_Races_Contracts';
import { test as testHounds } from '../test/23_Hounds/23_1_Hounds_Basic_Tests';
import { test as testHoundsAdvanced } from '../test/23_Hounds/23_2_Hounds_Custom_Token_Tests';
import { test as testArenas } from '../test/24_Arenas/24_1_Arenas_Basic_Tests';
import { test as testQueues } from '../test/25_Queues/25_1_Queues_Basic_Tests';
import { test as testQueuesAdvanced } from '../test/25_Queues/25_2_Queues_Advanced_Tests';
import { test as testRaces } from '../test/26_Races/26_1_Races_Basic_Tests';
import { globalParams } from '../common/params';
import { run as runLootboxes } from '../test/11_Deploy_Lootboxes';
import { LootboxesSystem } from '../common/dto/test/lootboxesSystem.dto';
import { test as testLootboxes } from '../test/27_Lootboxes/27_1_Lootboxes_Basic_Tests';
import { test as testRacesAdvanced } from '../test/26_Races/26_2_Races_Advanced_Tests';
import { set as setPayments } from '../test/13_Setup_Payments_Ecosystem';


async function main() {
    
    const payments: PaymentEcosystem = await runPayments();

    const arenas: ArenasSystem = await runArenas({
        paymentsAddress: payments.payments.address
    });

    const genetics: GeneticsSystem = await runGenetics({
        arenasAddress: arenas.arenas.address
    });

    const hounds: HoundsSystem = await runHounds({
        shopsAddress: payments.shop.address,
        paymentsAddress: payments.payments.address,
        transferrableRoot: payments.testErc721,
        geneticsAddress: genetics.genetics.address
    });
    const races: RacesSystem = await runRaces({
        arenasAddress: arenas.arenas.address,
        houndsAddress: hounds.hounds.address,
        paymentsAddress: payments.payments.address
    });

    const queues: QueuesSystem = await runQueues({
        racesAddress: races.races.address,
        arenasAddress: arenas.arenas.address,
        houndsAddress: hounds.hounds.address,
        paymentsAddress: payments.payments.address
    });

    const lootboxes: LootboxesSystem = await runLootboxes({
        canBeOpened: false,
        houndsAddress: hounds.hounds.address,
        paymentsAddress: payments.payments.address
    });

    await setPayments({
        payments: payments.payments,
        paymentMethods: payments.paymentMethods,
        houndsAddress: hounds.hounds.address,
        queuesAddress: queues.queues.address,
        arenasAddress: arenas.arenas.address,
        constructor: {
            methods: payments.paymentMethods.address,
            operators: [],
            targets: []
        }
    });

    await setShop({
        shopMethods: payments.shopMethods,
        shopRestricted: payments.shopRestricted,
        shop: payments.shop,
        houndsAddress: hounds.hounds.address,
        constructor: {
            methods: payments.shopMethods.address,
            restricted: payments.shopRestricted.address,
            alphadune: String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
            operators: [],
            targets: []
        }
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
            operators: [],
            targets: []
        }
    });

    await setArenas({
        arenas: arenas.arenas,
        arenasMethods: arenas.arenasMethods,
        arenasRestricted: arenas.arenasRestricted,
        racesAddress: races.races.address,
        constructor: {
            name: "HoundRace Arenas",
            symbol: "HRA",
            alphadune: String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
            methods: arenas.arenasMethods.address,
            restricted: arenas.arenasRestricted.address,
            payments: payments.payments.address,
            alhpadunePercentage: 60,
            operators: [],
            targets: []
        }
    });

    await setHounds({
        hounds: hounds.hounds,
        houndsMinter: hounds.houndsMinter,
        houndsModifier: hounds.houndsModifier,
        houndsRestricted: hounds.houndsRestricted,
        houndsZerocost: hounds.houndsZerocost,
        queuesAddress: queues.queues.address,
        racesAddress: races.races.address,
        constructor: {
           name: "HoundRace",
           symbol: "HR",
           defaultHound: globalParams.defaultHound,
           operators: [],
           targets: [],
           boilerplate: {
            alphadune: String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
            houndsModifier: hounds.houndsModifier.address,
            zerocost: hounds.houndsZerocost.address,
            minter: hounds.houndsMinter.address,
            restricted: hounds.houndsRestricted.address,
            payments: payments.payments.address,
            shop: payments.shop.address,
            hounds: hounds.hounds.address,
            races: races.races.address,
            genetics: genetics.genetics.address
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
        queuesAddress: queues.queues.address,
        constructor: {
            arenas: arenas.arenas.address,
            hounds: hounds.hounds.address,
            methods: races.racesMethods.address,
            payments: payments.payments.address,
            queues: queues.queues.address,
            restricted: races.racesRestricted.address,
            races: races.races.address,
            operators: [],
            targets: []
        }
    });

    await testGenetics.basicTest({
        genetics: genetics.genetics
    });

    await testHounds.basicTest({
        hounds: hounds.hounds,
        races: races.races,
        payments: payments.payments
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
        race: globalParams.defaultRace,
        hounds: hounds.hounds,
        queues: queues.queues
    });

    await setHounds({
        hounds: hounds.hounds,
        houndsMinter: hounds.houndsMinter,
        houndsModifier: hounds.houndsModifier,
        houndsRestricted: hounds.houndsRestricted,
        houndsZerocost: hounds.houndsZerocost,
        queuesAddress: queues.queues.address,
        racesAddress: races.races.address,
        constructor: {
           name: "HoundRace",
           symbol: "HR",
           defaultHound: globalParams.defaultHound,
           operators: [],
           targets: [],
           boilerplate: {
            alphadune: String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
            zerocost: hounds.houndsZerocost.address,
            houndsModifier: hounds.houndsModifier.address,
            minter: hounds.houndsMinter.address,
            restricted: hounds.houndsRestricted.address,
            payments: payments.payments.address,
            shop: payments.shop.address,
            hounds: hounds.hounds.address,
            races: races.races.address,
            genetics: genetics.genetics.address
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
        payments: payments.payments
    });

    await testLootboxes.basicTest({
        lootboxesContract: lootboxes.lootboxes,
        houndsContract: hounds.hounds,
        races: races.races
    });

    await testRacesAdvanced.advancedTests({
        contract: races.races,
        race: globalParams.defaultRace,
        queues: queues.queues,
        hounds: hounds.hounds
    });

}

main();