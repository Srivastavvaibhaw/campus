const jwt=require("jsonwebtoken");
const expresserror = require("../utils/expresserror");

//isloggedin middleware
const isloggedin=async(req,res,next)=>{
    try{
        if (!req.cookies.token) {
            return res.render("error.ejs", { message: "You must log in first",statusCode:500 });
        }
        else{
    const data=jwt.verify(req.cookies.token,"secretcode");
    req.user=data;
    next();
}
    }catch(err){
        console.log("Authentication error",err);
        return next(new expresserror(400,"Invalid or Expired ! Please login again"));
    }
}

module.exports=isloggedin