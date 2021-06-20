const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const  app= express()
const port=3100;

 
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/DealGenie', 
{useNewUrlParser: true});

const FAQ=require("./models/FAQ");
const User=require("./models/User");

//get All FAQ
app.get('/faq',(req,res)=>{
    FAQ.find({},(err,faq)=>{
        res.send(faq);
    });
})

//get All users
app.get('/users',(req,res)=>{
    User.find({},(err,user)=>{
        res.send(user);
    });
})

app.listen(port,()=>{
    console.log('server running');
})
