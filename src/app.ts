import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; 
import { Sequelize } from 'sequelize';

dotenv.config();  

const app: Express = express();

const loadConnection = (): string => {
    const dbConnection = process.env.DbConnection;
    if (!dbConnection) {
        throw new Error('Database connection string is not provided in the environment variables.');
    }
    return dbConnection;
}

const sequelizeInstance = new Sequelize(loadConnection());

async function configureApp(): Promise<void> {
    try {
        await sequelizeInstance.authenticate();
        console.log('Database connected successfully but it is 🔐🔐🔐🔐🔐🔐🔐🔐🔐🔐🔐🔐🔐');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    // Middleware setup
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
