const { createLogger, format, transports } = require('winston');
const { combine, timestamp, prettyPrint } = format;


const deployment = new createLogger({
  levels: {
    info: 1
  },
  format: combine(
    timestamp(),
    prettyPrint()
  ),
  transports: [
    new (transports.File)({ filename: './deployments.logs', level: 'info', timestamp: true })
  ]
});


module.exports = {
  deployment: function(msg){
    deployment.info(msg);
  }
};