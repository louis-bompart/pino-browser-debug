import pino from 'pino';

const logger = pino({
    level: 'warn'
});

logger.warn('This is a warning');
logger.info('This is an info');
logger.debug('This is a debug');