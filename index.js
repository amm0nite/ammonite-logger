const logger = require('winston');

logger.setLevels({ error:0, warn:1, info:2, debug:3 });
logger.addColors({ debug:'green', info:'cyan', warn:'yellow', error:'red' });

let logLevel = 'debug';
if (process.env.NODE_ENV == 'prod') {
    logLevel = 'info';
}

logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    level:     logLevel,
    colorize:  true,
    timestamp: true
});

module.exports = logger;
