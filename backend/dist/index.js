"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express');
const express_1 = __importDefault(require("express"));
const mongoose = require('mongoose');
const dotenv_1 = __importDefault(require("dotenv"));
const cors = require('cors');
// import bodyParser from "body-parser";
const bodyparser = require('body-parser');
const app = (0, express_1.default)();
const port = process.env.PORT || 2000;
dotenv_1.default.config();
const infoSchema = new mongoose.Schema({
    country: String,
    capital: String
}, { versionKey: false });
const User = mongoose.model('countries', infoSchema);
// const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(bodyparser.json());
app.use(express_1.default.json());
mongoose.connect("mongodb://127.0.0.1:27017/Todo", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    console.log('Connected to the database');
})
    .catch((error) => {
    console.error('Error connecting to the database:', error);
});
app.get('/countries', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield User.find();
        res.json(data);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
}));
app.post('/country/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = new User({
            country: req.body.country,
            capital: req.body.capital,
        });
        const result = yield data.save();
        res.send(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error posting data' });
    }
}));
app.delete('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield User.deleteOne({ _id: req.params.id });
    res.send(result);
}));
app.get('/country/get/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield User.findOne({ _id: req.params.id });
        if (result) {
            res.send(result);
        }
        else {
            res.send({ message: "No reord found" });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
app.put('/country/edit/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield User.updateOne({ _id: req.params.id }, {
        $set: req.body
    });
    res.send(result);
}));
app.listen(port, () => {
    console.log("Server is running on port 2000");
});
