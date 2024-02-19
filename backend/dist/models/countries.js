"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Countries = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const infoSchema = new mongoose_1.default.Schema({
    country: String,
    capital: String
}, { versionKey: false });
exports.Countries = mongoose_1.default.model('countries', infoSchema);
