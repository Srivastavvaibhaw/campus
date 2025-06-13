const express=require("express");
const router= express.Router();
const wrapAsync = require("../utils/wrapAsync");
const accesscontrollers =require("../Controllers/accesscontorollers");
const loginvalidation= require("../middlewares/user");
const isAlreadyLoggedIn=require("../middlewares/isalreadyloggedin")


router.get("/",isAlreadyLoggedIn,accesscontrollers.sendloginform);
router.post("/",loginvalidation,wrapAsync(accesscontrollers.loginuser));

module.exports=router



