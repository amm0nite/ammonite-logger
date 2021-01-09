
const winston = require('winston');

let level = 'debug';
if (process.env.NODE_ENV == 'prod') {
    level = 'info';
}

const logger = winston.createLogger({
  level,
  format: winston.format.json(),
  defaultMeta: {},
  transports: [
    new winston.transports.Console({
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.errors({ stack: true }),
            winston.format.splat(),
            winston.format.colorize(),
            winston.format.simple()
        ),
    }),
  ],
});

module.exports = logger;
