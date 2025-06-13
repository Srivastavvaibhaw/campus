    const express=require("express")
    const router= express.Router();
    const admincontrollers = require("../Controllers/admincontrollers")
    const wrapAsync = require("../utils/wrapAsync");
    const validatecollege=require('../middlewares/validatecollege');
    const isadmin =require("../middlewares/isadmin");

    //Multer and cloudinary
    const multer= require("multer");
    const {storage}= require("../utils/cloudinary"); // Ensure cloudinary is set up
    const upload= multer({storage});

    router.get("/",isadmin,wrapAsync(admincontrollers.admindashboard));

    router.get("/college",isadmin,wrapAsync(admincontrollers.sendallcollegedata));

    router.get("/college/:id",isadmin,wrapAsync(admincontrollers.sendcollegedata));

    router.get("/college/:id/update",isadmin,wrapAsync(admincontrollers.sendcollegedataforedit));

    router.get("/addnewcollege",isadmin,admincontrollers.sendnewform);


    router.post("/addnewcollege",isadmin,validatecollege ,
        upload.fields([
            { name: 'college[image]', maxCount: 1 }, // For image upload
            { name: 'college[brochure]', maxCount: 1 }, // For PDF upload
        ]),  wrapAsync(admincontrollers.addcollege));


    router.put("/college/:id/update",isadmin,validatecollege,   upload.fields([
            { name: 'college[image]', maxCount: 1 }, // For image upload
            { name: 'college[brochure]', maxCount: 1 }, // For PDF upload
        ]) ,wrapAsync(admincontrollers.updatecollegedata));

    router.delete("/college/:id",isadmin,wrapAsync(admincontrollers.deletecollege));


    module.exports=router;