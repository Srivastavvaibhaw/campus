const validatecollegeschemabyjoi = require("../joivalidation/schemavalidation");
const expresserror= require("../utils/expresserror");


const validatecollege=(req,res,next)=>{
    let {error}= validatecollegeschemabyjoi.validate(req.body.college);
    if(error){
        let errmsg=error.details.map((el)=>el.message).join(",");
        console.log(errmsg);
        throw new expresserror(400,errmsg);
    }else{
        console.log("validation done");
        next();
    }
};

module.exports=validatecollege