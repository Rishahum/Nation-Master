"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_2 = require("./config/express");
const mongooseConnect_1 = require("./config/mongooseConnect");
const restRoutes_1 = require("./config/restRoutes");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 2000;
(0, mongooseConnect_1.mongooseConnect)();
(0, express_2.expressConfig)(app);
(0, restRoutes_1.restRoutes)(app);
app.listen(port, () => {
    console.log("Server is running on port 2000");
});
