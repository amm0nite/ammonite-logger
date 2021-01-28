const logger = require('./index.js');

logger.debug('test');
logger.debug({ hello: 'world' });
console.log({ hello: 'world' });

logger.info('HELLO');

try {
    throw new Error("BIM");
} catch (err) {
    logger.error(err);
    logger.warn('errored: %s', err);
    console.log('------------');
    console.log(err);
}
