const express=require("express");
const router= express.Router();
const wrapAsync = require("../utils/wrapAsync");
const accesscontrollers =require("../Controllers/accesscontorollers");
const isloggedin =require("../middlewares/islogin");


router.post("/",isloggedin,wrapAsync(accesscontrollers.logoutuser));

module.exports=router



