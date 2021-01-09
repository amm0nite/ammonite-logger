const logger = require('./index.js');

logger.info('HELLO', { foo: 'bar' });

try {
    throw new Error("BIM");
} catch (err) {
    logger.error(err);
    logger.warn('errored: %s', err);
    console.log('------------');
    console.log(err);
}