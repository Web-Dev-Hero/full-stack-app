import { Config } from './config';
import app from './app';

const server = () => {
    const PORT = Config.PORT;
    try {
        app.listen(PORT, () =>
            console.log(`Server is running on port ${PORT}`),
        );
    } catch (err) {
        console.error('Error starting server', err);
    }
};
server();
