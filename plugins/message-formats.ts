function deployedAt(name: string, address: string): string {
    return name + " deployed at: " + address;
}

function globalParametersSetAt(name: string, params: string): string {
    return "Set global parameters on " + name + " with: " + JSON.stringify(params) 
}

function queuesCreation(queues: object): string {
    return "Create queues: " + JSON.stringify(queues);
}

function houndId(id: number): string {
    return "Current id to use for next hound: " + id;
}

function houndInitialized(position: number, hound: object): string {
    return "Hound initialization successfully called on position: " + position + ", with: " + JSON.stringify(hound);
}

function breedHounds(hound1: object, hound2: object, value: number): string {
    return "Paid " + value + " to breed hounds: " + hound1 + " and " + hound2;
}

function consoleLogAllContractAddresses(contracts: Array<any>): void {
    for ( let i = 0 , l = contracts.length ; i < l ; ++i ) {
        console.log('export ' + contracts[i].name+ '=' + contracts[i].address);
    }
}

module.exports = {
    deployedAt, globalParametersSetAt, queuesCreation, houndId, houndInitialized, breedHounds, consoleLogAllContractAddresses
}