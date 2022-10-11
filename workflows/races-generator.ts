import { ArenasSystem } from '../common/dto/test/arenasSystem.dto';
import { GeneticsSystem } from '../common/dto/test/geneticsSystem.dto';
import { HoundsSystem } from '../common/dto/test/houndsSystem.dto';
import { IncubatorSystem } from '../common/dto/test/incubatorSystem.dto';
import { PaymentEcosystem } from '../common/dto/test/paymentEcosystem.dto';
import { RacesSystem } from '../common/dto/test/racesSystem.dto';
import { RandomnessSystem } from '../common/dto/test/randomnessSystem.dto';
import { run as runPayments } from '../test/2_Deploy_Payments_Ecosystem';
import { run as runRandomness } from '../test/3_Deploy_Randomness';
import { run as runArenas } from '../test/4_Deploy_Arenas';
import { run as runGenetics } from '../test/5_Deploy_Genetics';
import { run as runIncubators } from '../test/6_Deploy_Incubator';
import { run as runHounds } from '../test/7_Deploy_Hounds_Ecosystem';
import { run as runRaces } from '../test/8_Deploy_Races_Ecosystem';
import { set as setIncubators } from '../test/16_Setup_Incubator_Contracts';
import { set as setHounds } from '../test/17_Setup_Hounds_Contracts';
import { globalParams } from '../common/params';
import { run as runGamification } from '../test/12_Deploy_Gamification';
import { set as setGamification } from '../test/21_Setup_Gamification';
import { GamificationSystem } from '../common/dto/test/gamificationSystem.dto';
import { test as generationTests } from '../test/26_Races/26_3_Races_Generation_Tests';


async function main() {
    
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
            races.races.address
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

    await generationTests.generationTests({
        race: globalParams.defaultRace,
        hounds: hounds.hounds,
        arena: globalParams.defaultArena,
        gamification: gamification.gamification,
        races: races.races
    });

}

main();