// // pages/api/countries.js
// import mongoose from 'mongoose';
// import User from '@/lib/User';
// import type { NextApiRequest, NextApiResponse } from "next";

// mongoose.connect("mongodb://127.0.0.1:27017/Todo", { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected');
//   })
//   .catch((error: unknown) => {
//     console.error( error);
//   });

export default async function handler() {
    const response= await fetch(`http://localhost:2000/countries`)
    return response.json() 
}
