const { createLogger, format, transports } = require('winston');
const { combine, timestamp, prettyPrint } = format;

const debug = new createLogger({
  levels: {
    debug: 0
  },
  format: combine(
    timestamp(),
    prettyPrint()
  ),
  transports: [
    new (transports.Console)({ level: 'debug', timestamp: true })
  ]
});

const info = new createLogger({
  levels: {
    info: 1
  },
  format: combine(
    timestamp(),
    prettyPrint()
  ),
  transports: [
    new (transports.File)({ filename: './output.logs', level: 'info', timestamp: true })
  ]
});

const error = new createLogger({
  levels: {
    error: 3
  },
  format: combine(
    timestamp(),
    prettyPrint()
  ),
  transports: [
    new (transports.File)({ filename: './output.errors', level: 'error', timestamp: true })
  ]
});

module.exports = {
  debug: function(msg){
    debug.debug(msg);
  },
  info: function(msg){
    info.info(msg);
  },
  error: function(msg){
    error.error(msg);
  }
};