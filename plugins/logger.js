const { createLogger, format, transports } = require('winston');
const { combine, timestamp, prettyPrint } = format;


const debug = new createLogger({
  silent: true,
  format: combine(
    timestamp(),
    prettyPrint()
  ),
  transports: [
    new (transports.File)({ filename: './debugging.logs', level: 'debug', timestamp: true })
  ]
});

const error = new createLogger({
  silent: false,
  format: combine(
    timestamp(),
    prettyPrint()
  ),
  transports: [
    new (transports.File)({ filename: './errors.logs', level: 'error', timestamp: true })
  ]
});

const info = new createLogger({
  silent: true,
  transports: [
    new (transports.File)({ filename: './deployments.logs', level: 'info' })
  ]
});

module.exports = {
  debug: function(msg){
    debug.debug(msg);
  },
  error: function(msg){
    error.error(msg);
  },
  info: function(msg){
    info.info(msg);
  }
};