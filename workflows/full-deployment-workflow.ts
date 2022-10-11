import { ArenasSystem } from '../common/dto/test/arenasSystem.dto';
import { GeneticsSystem } from '../common/dto/test/geneticsSystem.dto';
import { HoundsSystem } from '../common/dto/test/houndsSystem.dto';
import { IncubatorSystem } from '../common/dto/test/incubatorSystem.dto';
import { PaymentEcosystem } from '../common/dto/test/paymentEcosystem.dto';
import { QueuesSystem } from '../common/dto/test/queuesSystem.dto';
import { RacesSystem } from '../common/dto/test/racesSystem.dto';
import { run as runPayments } from '../test/2_Deploy_Payments_Ecosystem';
import { run as runArenas } from '../test/4_Deploy_Arenas';
import { run as runGenetics } from '../test/5_Deploy_Genetics';
import { run as runIncubators } from '../test/6_Deploy_Incubator';
import { run as runHounds } from '../test/7_Deploy_Hounds_Ecosystem';
import { run as runRaces } from '../test/8_Deploy_Races_Ecosystem';
import { run as runQueues } from '../test/9_Deploy_Queues_Ecosystem';
import { set as setQueues } from '../test/18_Setup_Queues_Contracts';
import { set as setShop } from '../test/14_Setup_Shop_Contracts';
import { set as setArenas } from '../test/15_Setup_Arenas_Contracts';
import { set as setIncubators } from '../test/16_Setup_Incubator_Contracts';
import { set as setHounds } from '../test/17_Setup_Hounds_Contracts';
import { set as setRaces } from '../test/20_Setup_Races_Contracts';
import { globalParams } from '../common/params';
import { run as runLootboxes } from '../test/11_Deploy_Lootboxes';
import { LootboxesSystem } from '../common/dto/test/lootboxesSystem.dto';
import { run as runGamification } from '../test/12_Deploy_Gamification';
import { set as setGamification } from '../test/21_Setup_Gamification';
import { GamificationSystem } from '../common/dto/test/gamificationSystem.dto';
import { set as setPayments } from '../test/13_Setup_Payments_Ecosystem';
import { test as generationTests } from '../test/26_Races/26_3_Races_Generation_Tests';


async function main() {
    
    const payments: PaymentEcosystem = await runPayments();

    const arenas: ArenasSystem = await runArenas({
        paymentsAddress: payments.payments.address,
        allowedCallers: []
    });

    const genetics: GeneticsSystem = await runGenetics({
        arenasAddress: arenas.arenas.address
    });

    const incubators: IncubatorSystem = await runIncubators({
        geneticsAddress: genetics.genetics.address
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
        paymentsAddress: payments.payments.address
    });

    const queues: QueuesSystem = await runQueues({
        racesAddress: races.races.address,
        arenasAddress: arenas.arenas.address,
        houndsAddress: hounds.hounds.address,
        paymentsAddress: payments.payments.address,
        incubatorAddress: incubators.incubator.address
    });

    const gamification: GamificationSystem = await runGamification({
        allowed: [],
        defaultBreeding: globalParams.houndBreeding,
        defaultStamina: globalParams.houndStamina
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
            alphadune: String(process.env.ETH_ACCOUNT_PUBLIC_KEY)
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
            allowedCallers: [races.races.address],
            queues: queues.queues.address,
            zerocost: queues.queueZerocost.address,
            incubator: incubators.incubator.address
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

    await setIncubators({
        incubator: incubators.incubator,
        incubatorMethods: incubators.incubatorMethods,
        constructor: {
            genetics: genetics.genetics.address,
            methods: incubators.incubatorMethods.address,
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
            hounds: hounds.hounds.address,
            methods: races.racesMethods.address,
            payments: payments.payments.address,
            queues: queues.queues.address,
            restricted: queues.queuesRestricted.address,
            races: races.races.address,
            allowedCallers: [
                races.races.address,
                queues.queues.address,
                globalParams.address0
            ]
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
           allowedCallers: [],
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
            races: races.races.address
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

    lootboxes.lootboxes.setGlobalParameters({
        name: "HoundRace Lootboxes",
        alphadune: String(process.env.ETH_ACCOUNT_PUBLIC_KEY),
        canBeOpened: true,
        hounds: hounds.hounds.address,
        payments: payments.payments.address,
        allowedApprovals: []
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