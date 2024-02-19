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
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.add = exports.getOne = exports.getAll = void 0;
const countries_1 = require("../models/countries");
function getAll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield countries_1.Countries.find();
            res.json(data);
        }
        catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Error fetching data' });
        }
    });
}
exports.getAll = getAll;
function getOne(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield countries_1.Countries.findOne({ _id: req.params.id });
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
    });
}
exports.getOne = getOne;
function add(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = new countries_1.Countries({
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
    });
}
exports.add = add;
function update(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield countries_1.Countries.updateOne({ _id: req.params.id }, {
            $set: req.body
        });
        res.send(result);
    });
}
exports.update = update;
function remove(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield countries_1.Countries.deleteOne({ _id: req.params.id });
        res.send(result);
    });
}
exports.remove = remove;
