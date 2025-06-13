const signupvalidationbyjoi= require("../joivalidation/uservalidation");
const loginvalidationbyjoi= require("../joivalidation/uservalidation");

const expresserror= require("../utils/expresserror");

//For signup details
const signupvalidation=(req,res,next)=>{
    console.log(req.body.user);
    let {error}= signupvalidationbyjoi.validate(req.body.user);
    if(error){
        let errmsg=error.details.map((el)=>el.message).join(",");
        console.log(errmsg);
        throw next(new expresserror(400,errmsg));
    }else{
        next();
    }
};
module.exports=signupvalidation


const loginvalidation=(req,res,next)=>{
    let {error}= loginvalidationbyjoi.validate(req.body.user);
    if(error){
        let errmsg=error.details.map((el)=>el.message).join(",");
        console.log(errmsg);
        throw next(new expresserror(400,errmsg));
    }else{
        next();
    }
};
module.exports=loginvalidation