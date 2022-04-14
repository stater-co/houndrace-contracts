const { createLogger, format, transports } = require('winston');
const { combine, timestamp, prettyPrint } = format;
const hardhat = require("hardhat")

const deploymentFormat = format((info) => {
  info.network = hardhat.network.name;
  return info;
})();

const deployment = new createLogger({
  levels: {
    info: 1
  },
  format: combine(
    deploymentFormat,
    timestamp(),
    prettyPrint()
  ),
  transports: [
    new (transports.File)({ filename: './deployments.logs', level: 'info', timestamp: true })
  ]
});

const errorsFormat = format((info) => {
  info.errorMessage = info.message;
  return info;
})();

const errors = new createLogger({
  levels: {
    error: 3
  },
  format: combine(
    errorsFormat,
    timestamp(),
    prettyPrint()
  ),
  transports: [
    new (transports.File)({ filename: './errors.logs', level: 'error', timestamp: true })
  ]
});


module.exports = {
  deployment: function(msg){
    deployment.info(msg);
  },
  errors: function(msg){
    errors.error(msg);
  }
};