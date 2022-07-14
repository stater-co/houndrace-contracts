import { DeployedLibraries } from '../common/dto/test/librariesDeployment.dto';
import run from './1_Deploy_Libraries';

async function main() {
    const libraries: DeployedLibraries = await run();
    console.log("Test deployed: " + libraries.converters.address + " , " + libraries.sortings.address);
}

main();