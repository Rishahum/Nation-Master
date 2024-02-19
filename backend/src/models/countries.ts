import mongoose from "mongoose";

const infoSchema = new mongoose.Schema({
    country: String,
    capital: String
}, { versionKey: false });

export const Countries = mongoose.model('countries', infoSchema);