import express, { Express } from "express";
import dotenv from 'dotenv';
import { expressConfig } from './config/express';
import { mongooseConnect } from './config/mongooseConnect';
import { restRoutes } from "./config/restRoutes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 2000;

mongooseConnect()
expressConfig(app);
restRoutes(app);

app.listen(port, () => {
  console.log("Server is running on port 2000");
})