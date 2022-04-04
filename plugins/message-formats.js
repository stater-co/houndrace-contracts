function deployedAt(name,address) {
    return name + " deployed at: " + address;
}

function globalParametersSetAt(name,params) {
    return "Set global parameters on " + name + " with: " + JSON.stringify(params) 
}

function queuesCreation(queues) {
    return "Create queues: " + JSON.stringify(queues);
}

function houndId(id) {
    return "Current id to use for next hound: " + id;
}

function houndInitialized(position,hound) {
    return "Hound initialization successfully called on position: " + position + ", with: " + JSON.stringify(hound);
}

function breedHounds(hound1,hound2,value) {
    return "Paid " + value + " to breed hounds: " + hound1 + " and " + hound2;
}

module.exports = {
    deployedAt, globalParametersSetAt, queuesCreation, houndId, houndInitialized, breedHounds
}