import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import sequelizeInstance from './config/dbConnection';


const app: Express = express();

async function configureApp(): Promise<void> {
    try {
        await sequelizeInstance.authenticate();
        console.log('Database connected successfully but it is 🔐🔐🔐🔐🔐🔐🔐🔐🔐🔐🔐🔐🔐');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    app.use(cors());
    app.use(express.json());
}

function setupRoutes(): void {
    app.get('/api/v1', (_req: Request, res: Response) => {
        res.send('Auth API version 1').status(200);
    });
}

export function startServer(): Express {
    configureApp();
    setupRoutes();
    
    return app;
}
