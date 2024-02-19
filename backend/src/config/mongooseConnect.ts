import mongoose from "mongoose";

export function mongooseConnect() {
    mongoose.connect("mongodb://127.0.0.1:27017/Todo")
        .then(() => {
            console.log('Connected to the database');
        })
        .catch((error: Error) => {
            console.error('Error connecting to the database:', error);
        });
}