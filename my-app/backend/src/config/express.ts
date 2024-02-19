import express, { Express } from 'express'
import cors from 'cors';
import bodyParser from "body-parser";

export function expressConfig(app: Express) {
    app.use(cors({
        origin: 'http://localhost:3000',
    }));
    app.use(bodyParser.json());
    app.use(express.json());
}