import { startServer } from './app';

const PORT = process.env.PORT || 3000;

const server = startServer();

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
