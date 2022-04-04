const winston = require('winston');

const debug = new winston.createLogger({
  levels: {
    debug: 0
  },
  transports: [
    new (winston.transports.Console)({level: 'debug'})
  ]
});

const info = new winston.createLogger({
  levels: {
    info: 1
  },
  transports: [
    new (winston.transports.File)({ filename: './output.logs', level: 'info'})
  ]
});

const error = new winston.createLogger({
  levels: {
    error: 3
  },
  transports: [
    new (winston.transports.File)({ filename: './output.errors', level: 'error'})
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