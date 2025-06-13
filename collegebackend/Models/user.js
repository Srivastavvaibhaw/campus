const mongoose= require("mongoose");
const {Schema}=mongoose

const UserSchema= new Schema({
    username:{type:"String",required:true},
    contact:{type:"String",required:true},
    password:{type:"String",required:true},
    email:{type:"String",required:true},
});

const usermodel= new mongoose.model("usermodel",UserSchema);
module.exports=usermodel;   