const usermodel= require("../Models/user");
const jwt=require("jsonwebtoken");
const bcrypt = require('bcrypt');
const expresserror=require("../utils/expresserror");


module.exports.sendloginform=(req,res)=>{
    res.render("login.ejs");
}


module.exports.loginuser= async (req,res,next)=>{
    const {email,password}=req.body.user;
    try{    
            //checking email exists in db or not
            const userdetail=await usermodel.findOne({email});
            if(!userdetail){
                return next(new expresserror(404,"User not found"));
            }
            //comparing password if correct or not
            const ispasswordvalid=await bcrypt.compare(password,userdetail.password);
            if(!ispasswordvalid){
                return next(expresserror(401,"Invalid email or password"));
            }
            //creating jwt token for furthur requests
            const token=jwt.sign({email:userdetail.email, id: userdetail._id},"secretcode",{expiresIn:"48h"});
            //sending token in cookie
            res.cookie("token",token,{
                httpOnly:true,
                secure:true,
                sameSite:"Strict",
                maxAge:48*60*60*1000,   
            });
            res.status(200).redirect("/");
    }catch(err){
        console.log("Error during user login",err)
        next(new expresserror(500,"Internal server error"));
    }
};


module.exports.logoutuser=async(req,res,next)=>{
    res.cookie("token","");
    res.redirect("/");
}


module.exports.sendsignupform=(req,res)=>{
    res.render("signup.ejs");
}


module.exports.signupuser = async (req, res, next) => {
    try {
        const { username, password,contact, email } = req.body.user;

        // Generate salt and hash the password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        // Create a new user instance
        const newuser = new usermodel({ username, password: hash,contact, email });

        // Save the user to the database
        const savedUser = await newuser.save();

        // Extract _id and email from the saved user
        const { _id, email: savedEmail } = savedUser;

        // Generate a JWT token
        const token = jwt.sign({ email: savedEmail, id: _id }, "secretcode", { expiresIn: "48h" });

        // Set the token in a secure, httpOnly cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
            maxAge: 48 * 60 * 60 * 1000, // Expiration time: 48 hours
        });
        console.log("User Signed Up");
        res.status(201).redirect("/")
    } catch (err) {
        console.error("Error during user signup:", err);
        next(expressError(500, "Internal server error"));
    };
};