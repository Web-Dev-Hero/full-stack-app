import { Config } from './config';
import app from './app';
import logger from './config/logger';

const server = () => {
    const PORT = Config.PORT;
    try {
        app.listen(PORT, () => {
            logger.info('serveer listing in port', { port: PORT });
        });
    } catch (err) {
        console.error('Error starting server', err);
    }
};
server();
