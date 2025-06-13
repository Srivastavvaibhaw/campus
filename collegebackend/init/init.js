const collegemodel =require("../Models/schema.js");
const mongoose = require("mongoose");
require("dotenv").config(); 
const data=require("./data.js");
const MONGOURL= process.env.MONGOURL;

//Database Connection
async function main(){
   await mongoose.connect("mongodb://127.0.0.1:27017/collegebackend");
};
main().then(()=>{console.log("Collegebackend Database connected for initialization")}).catch((err)=>{console.log(err)});

//Initializing sample data of College
  const initdb=async ()=>{
    await collegemodel.deleteMany({});
    await collegemodel.insertMany(data).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
    console.log("data inserted")
};
  initdb();

