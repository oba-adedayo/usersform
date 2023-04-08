const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const cloudinary = require('cloudinary');
const cors = require("cors")
app.use(cors())
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true,limit:"100mb"}))
app.use(bodyParser.json({extended:true,limit:"100mb"}))
require('dotenv').config();
const PORT = process.env.PORT ;
const URI = process.env.MONGO_URL;
//  "mongodb+srv://obaadedayo:ade2002@cluster0.di71v.mongodb.net/clientinfo_Db?retryWrites=true&w=majority"
mongoose.connect(URI, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);   
  });

const userRoute = require('./routes/user.route');
app.use('/users', userRoute)
app.listen(PORT, ()=>{
    console.log(`my node is listening at ${PORT}`);
}) 