const express=require("express")
const router=express.Router();
const usercontrollers = require("../Controllers/usercontrollers");
const wrapAsync = require("../utils/wrapAsync");



//afterstage 4
const validatesearch=(req,res,next)=>{
    const {searchedlocation}= req.query;
    if(searchedlocation && searchedlocation.trim() !=='' && searchedlocation){
            next()
    }else{
        throw new expresserror(422,"Please Search a valid location");
    }
};
///



router.get("/",wrapAsync(usercontrollers.showcollege));

////after stage 4
router.get("/s",validatesearch,wrapAsync(usercontrollers.sendSearchedRelatedData));
////


router.get("/:id",wrapAsync(usercontrollers.showthiscollege));




module.exports=router;