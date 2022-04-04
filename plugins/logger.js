const winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      new winston.transports.File({ filename: './logs.log', level: 'info' }),
      new winston.transports.File({ filename: './errors.log', level: 'error' })
    ]
});


module.exports = { logger };