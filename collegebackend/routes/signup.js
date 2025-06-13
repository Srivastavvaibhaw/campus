const express=require("express");
const router= express.Router();
const wrapAsync = require("../utils/wrapAsync");
const expresserror=require("../utils/expresserror");
const accesscontrollers =require("../Controllers/accesscontorollers");
const Joi = require("joi");
const isAlreadyLoggedIn=require("../middlewares/isalreadyloggedin")


const signupvalidationbyjoi=Joi.object({
    username:Joi.string().required(),
    contact:Joi.string().required(),
    email:Joi.string().email().required(),
    password:Joi.string().required(),
    })


const signupvalidation=(req,res,next)=>{
    let {error}= signupvalidationbyjoi.validate(req.body.user);
    if(error){
        let errmsg=error.details.map((el)=>el.message).join(",");
        console.log(errmsg);
        throw new expresserror(400,errmsg);
    }else{
        next();
    }
};


router.get("/",isAlreadyLoggedIn,accesscontrollers.sendsignupform);
router.post("/",signupvalidation,wrapAsync(accesscontrollers.signupuser));


module.exports=router;



