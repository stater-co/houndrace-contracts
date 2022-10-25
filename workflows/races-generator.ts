import { ArenasSystem } from '../common/dto/test/arenasSystem.dto';
import { HoundsSystem } from '../common/dto/test/houndsSystem.dto';
import { PaymentEcosystem } from '../common/dto/test/paymentEcosystem.dto';
import { RacesSystem } from '../common/dto/test/racesSystem.dto';
import { run as runPayments } from '../test/2_Deploy_Payments_Ecosystem';
import { run as runArenas } from '../test/4_Deploy_Arenas';
import { run as runHounds } from '../test/7_Deploy_Hounds_Ecosystem';
import { run as runRaces } from '../test/8_Deploy_Races_Ecosystem';
import { set as setHounds } from '../test/17_Setup_Hounds_Contracts';
import { globalParams } from '../common/params';
import { test as generationTests } from '../test/26_Races/26_3_Races_Generation_Tests';
import { GeneticsSystem } from '../common/dto/test/geneticsSystem.dto';
import { run as runGenetics } from '../test/5_Deploy_Genetics';


async function main() {
    
    const payments: PaymentEcosystem = await runPayments();

    const arenas: ArenasSystem = await runArenas({
        paymentsAddress: payments.payments.address,
        allowedCallers: []
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

    await setHounds({
        hounds: hounds.hounds,
        houndsMinter: hounds.houndsMinter,
        houndsModifier: hounds.houndsModifier,
        houndsRestricted: hounds.houndsRestricted,
        houndsZerocost: hounds.houndsZerocost,
        constructor: {
           name: "HoundRace",
           symbol: "HR",
           defaultHound: globalParams.defaultHound,
           allowedCallers: [
            hounds.hounds.address,
            races.races.address
           ],
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

    await generationTests.generationTests({
        race: globalParams.defaultRace,
        hounds: hounds.hounds,
        arena: globalParams.defaultArena,
        races: races.races
    });

}

main();