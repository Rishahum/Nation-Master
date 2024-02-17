// const express = require('express');
import  express,{Express,  Request, Response } from "express";
const mongoose = require('mongoose');
import  dotenv from 'dotenv'
const cors = require('cors');
// import bodyParser from "body-parser";
const bodyparser=require('body-parser')
const app: Express = express();
const port = process.env.PORT || 2000;



dotenv.config();

  const infoSchema = new mongoose.Schema({
    country:String,
    capital:String

  },{ versionKey: false });


const User = mongoose.model('countries', infoSchema);

// const app = express();

app.use(cors({
  origin: 'http://localhost:3000', 
}));
app.use(bodyparser.json());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/Todo", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error: Error) => {
    console.error('Error connecting to the database:', error);
  });

app.get('/countries', async (req : Request, res: Response) => {
  try {
    const data = await User.find();
    res.json(data);
    
  } catch (error: unknown) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.post('/country/add',async (req : Request,res: Response)=>{
  try{
    const data= new User({
    country: req.body.country,
    capital: req.body.capital,
  })
  const result=await data.save();
  res.send(result)
  }catch(error: unknown){
    console.log(error)
    res.status(500).json({ error: 'Error posting data' });
  }
  
})
app.delete('/delete/:id',async (req: Request,res: Response)=>{
  const result= await User.deleteOne({_id:req.params.id})
  res.send(result)
})

app.get('/country/get/:id', async(req: Request,res: Response)=>{
  try{
    const result= await User.findOne({_id:req.params.id})
    if(result){
      res.send(result)
    }else{
      res.send({message:"No reord found"})
    }
    
  }catch(error: unknown){
    res.status(500).json(error);
  }
})

app.put('/country/edit/:id', async(req: Request,res: Response)=>{
  let result = await User.updateOne(
    {_id:req.params.id},
    {
      $set: req.body
    }
  )
  res.send(result)
})


app.listen(port, () => {
  console.log("Server is running on port 2000");
})