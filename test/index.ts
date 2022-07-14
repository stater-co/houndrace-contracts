import { DeployedLibraries } from '../common/dto/test/librariesDeployment.dto';
import { PaymentEcosystem } from '../common/dto/test/paymentEcosystem';
import { run as runLibraries } from './1_Deploy_Libraries';
import { run as runPayments } from './2_Deploy_Payments_Ecosystem';

async function main() {
    const libraries: DeployedLibraries = await runLibraries();
    console.log("Test deployed: " + libraries.converters.address + " , " + libraries.sortings.address);
    const payments: PaymentEcosystem = await runPayments();
    console.log("Payments deployed: " + payments.houndracePotions + " , " + payments.payments + " , " + payments.shop + " ," + payments.shopMethods + " , " + payments.shopRestricted + " , " + payments.testErc1155 + " , " + payments.testErc721);
}

main();