import { ethers } from 'ethers';
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
import { set as setArenas } from './13_Setup_Arenas_Contracts';
import { set as setIncubators } from './14_Setup_Incubator_Contracts';
import { set as setHounds } from './15_Setup_Hounds_Contracts';
import { set as setRaces } from './16_Setup_Races_Contracts';
import { set as setGenerator } from './17_Setup_Generator_Contracts';
import { test as testGenetics } from './18_Genetics/18_1_Genetics_Basic_Tests';
import { test as testHounds } from './19_Hounds/19_1_Hounds_Basic_Tests';
import { test as testArenas } from './20_Arenas/20_1_Arenas_Basic_Tests';
import { test as testQueues } from './21_Queues/21_1_Queues_Basic_Tests';
import { test as testRaces } from './22_Races/22_1_Races_Basic_Tests';
import { globalParams } from '../common/params';
import { SignerDependency } from '../common/dto/test/raw/signerDependency.dto';
import { BigNumber } from 'ethers';


async function main() {

    const signerDependency: SignerDependency = {
        signer: new ethers.Wallet(String(process.env.ETH_ACCOUNT_PRIVATE_KEY))
    };

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
        constructor: {
            arenas: arenas.arenas.address,
            hounds: hounds.hounds.address,
            methods: queues.queueMethods.address,
            payments: payments.payments.address,
            restricted: queues.queuesRestricted.address,
            races: races.races.address,
            allowedCallers: [ races.races.address]
        }
    });

    await setShop({
        shopMethods: payments.shopMethods,
        shopRestricted: payments.shopRestricted,
        constructor: {
            methods: payments.shopMethods.address,
            restricted: payments.shopRestricted.address
        },
        ...signerDependency
    });

    await setArenas({
        arenas: arenas.arenas,
        arenasMethods: arenas.arenasMethods,
        arenasRestricted: arenas.arenasRestricted,
        constructor: {
            name: "HoundRace Arenas",
            symbol: "HRA",
            alphadune: await signerDependency.signer.getAddress(),
            methods: arenas.arenasMethods.address,
            restricted: arenas.arenasRestricted.address,
            payments: payments.payments.address,
            allowedCallers: [races.races.address,queues.queues.address]
        }
    });
    
    await setIncubators({
        incubator: incubators.incubator,
        incubatorMethods: incubators.incubatorMethods,
        constructor: {
            genetics: genetics.genetics.address,
            methods: incubators.incubatorMethods.address,
            randomness: randomness.randomness.address,
            secondsToMaturity: 345600
        }
    });

    await setHounds({
        hounds: hounds.hounds,
        houndsMinter: hounds.houndsMinter,
        houndsModifier: hounds.houndsModifier,
        houndsRestricted: hounds.houndsRestricted,
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
            staterApi: await signerDependency.signer.getAddress(),
            houndModifier: hounds.houndsModifier.address,
            hounds: hounds.hounds.address,
            minter: hounds.houndsMinter.address,
            restricted: hounds.houndsRestricted.address,
            payments: payments.payments.address,
            shop: payments.shop.address
           },
           fees: {
            breedCostCurrency: globalParams.address0,
            breedFeeCurrency: globalParams.address0,
            refillStaminaCostCurrency: globalParams.address0,
            refillBreedingCostCurrency: globalParams.address0,
            breedCost: "0xB1A2BC2EC50000",
            breedFee: "0x2386F26FC10000",
            refillCost: "0x2386F26FC10000",
            refillBreedingCooldownCost: "0x2386F26FC10000",
            refillStaminaCooldownCost: "0x2386F26FC10000"
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
            restricted: queues.queuesRestricted.address,
            raceFee: 500000000,
            callable: false,
            allowedCallers: [
                races.races.address,
                queues.queues.address,
                await signerDependency.signer.getAddress()
            ]
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
            allowed: races.races.address
        }
    });

    await testGenetics.basicTest({
        genetics: genetics.genetics
    });

    await testHounds.basicTest({
        hounds: hounds.hounds,
        ...signerDependency
    });

    await testArenas.basicTest({
        arenas: arenas.arenas,
        arena: {
            "0": "Arena #",
            "1": "arena_token_uri",
            "2": globalParams.address0,
            "3": BigNumber.from(100),
            "4": 1,
            "5": 1,
            "6": 1,
            name: "Arena #",
            token_uri: "arena_token_uri",
            feeCurrency: globalParams.address0,
            fee: BigNumber.from(100),
            surface: 1,
            distance: 1,
            weather: 1
        }
    });

    await testQueues.basicTest({
        contract: queues.queues,
        houndsContract: hounds.hounds,
        houndIdToEnqueue: 1,
        queue: {
            "0": "Queue #",
            "1": globalParams.address0,
            "2": [],
            "3": [],
            "4": 1,
            "5": 1000,
            "6": 0,
            "7": 0,
            "8": 0,
            "9": {
                "0": [],
                "1": [],
                "2": [],
                "3": [],
                "4": [[]],
                "5": [[]],
                "6": [],
                from: [],
                to: [],
                currency: [],
                ids: [[]],
                amounts: [[]],
                paymentType: []
            },
            "10": 3,
            "11": 0,
            "12": false,
            name: "Queue #",
            currency: globalParams.address0,
            participants: [],
            enqueueDates: [],
            arena: 1,
            entryFee: 1000,
            startDate: 0,
            endDate: 0,
            lastCompletion: 0,
            payments: {
                "0": [],
                "1": [],
                "2": [],
                "3": [],
                "4": [[]],
                "5": [[]],
                "6": [],
                from: [],
                to: [],
                currency: [],
                ids: [[]],
                amounts: [[]],
                paymentType: []
            },
            totalParticipants: 3,
            cooldown: 0,
            closed: false
        }
    });

    await testRaces.basicTest({
        contract: races.races,
        race: {
            "0": "Race #",
            "1": globalParams.address0,
            "2": [],
            "3": 1,
            "4": 0,
            "5": 34,
            "6": {
                "0": [],
                "1": [],
                "2": [],
                "3": [],
                "4": [[]],
                "5": [[]],
                "6": [],
                from: [],
                to: [],
                currency: [],
                ids: [[]],
                amounts: [[]],
                paymentType: []
            },
            "7": 1,
            "8": "0x00",
            "name": "Race #",
            "currency": globalParams.address0,
            "participants": [],
            "arena": 1,
            "entryFee": 0,
            "randomness": 34,
            "payments": {
                "0": [],
                "1": [],
                "2": [],
                "3": [],
                "4": [[]],
                "5": [[]],
                "6": [],
                from: [],
                to: [],
                currency: [],
                ids: [[]],
                amounts: [[]],
                paymentType: []
            },
            "queueId": 1,
            "seed": "0x00"
        }
    });

}

main();