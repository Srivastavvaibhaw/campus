const express= require("express");
const app=express();
const path=require("path");
require("dotenv").config(); 
const expresserror= require("./utils/expresserror.js");
const cors = require('cors');

app.use(cors());

const methodOverride = require('method-override');
const mongoose = require("mongoose");
let PORT= process.env.PORT || 8080;
const MONGOURL= process.env.MONGOURL;


//Database Connection
async function main(){
    await mongoose.connect(MONGOURL);
 }
main().then(()=>{console.log("Collegebackend Database connected")}).catch((err)=>{console.log(err)});
 

//Pre Setup methods
app.use(express.json()); // Parses JSON body
app.use(express.urlencoded({ extended: true })); // Parses form data
app.use(methodOverride('_method')); 
const cookieParser = require("cookie-parser");
app.use(cookieParser());

//FOR EJS
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));


//Getting Routers
const adminRouter =require("./routes/admin.js");
const loginRoute=require("./routes/login.js");
const logoutRouter=require("./routes/logout.js");
const signupRoute=require("./routes/signup.js")
const userRouter=require("./routes/user.js");


//Home Page Request
app.get("/",(req,res)=>{
    console.log("Get Request at Home page");
    res.send("This request will be for home Page")
});


//Routing requests their router
app.use("/login",loginRoute);
app.use("/logout",logoutRouter);
app.use("/signup",signupRoute)
app.use("/college",userRouter);
app.use("/admin",adminRouter);


//Handling all other Request
app.all("*", (req, res, next) => {
    next(new expresserror(404, "Page not Found"));
});


app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went Wrong!" } = err;
    res.status(statusCode).render("error.ejs", { statusCode,message });
}); 


app.listen(PORT,()=>{
    console.log(`Listening to Port ${PORT}`);
});