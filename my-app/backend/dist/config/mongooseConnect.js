"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongooseConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
function mongooseConnect() {
    mongoose_1.default.connect("mongodb://127.0.0.1:27017/Todo")
        .then(() => {
        console.log('Connected to the database');
    })
        .catch((error) => {
        console.error('Error connecting to the database:', error);
    });
}
exports.mongooseConnect = mongooseConnect;
