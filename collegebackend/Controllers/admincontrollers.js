const expresserror=require("../utils/expresserror.js");
const mongoose=require("mongoose");
const collegemodel = require("../Models/schema.js");
const usermodel=require("../Models/user.js");

//multer and cloudinary
const multer = require("multer");
const { storage } = require("../utils/cloudinary");
const upload = multer({ storage });
const cloudinary=require("cloudinary");



module.exports.admindashboard = async (req, res) => {
    try {
      // Fetch statistics from MongoDB
      const userCount = await usermodel.countDocuments();
      const collegeCount = await collegemodel.countDocuments();
      
      // Fetch the latest colleges (for example, last 5 added colleges)
      const recentColleges = await collegemodel.find().sort({ _id: -1 }).limit(5);
      
      // You can also fetch other data like total courses or fee data if required
      const totalCourses = await collegemodel.aggregate([
        { $unwind: "$courses" },
        { $group: { _id: null, totalCourses: { $sum: 1 } } }
      ]);
  
      // Render the admin dashboard page with the data
      res.render('admin.ejs', {
        userCount,
        collegeCount,
        recentColleges,
        totalCourses: totalCourses[0] ? totalCourses[0].totalCourses : 0
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  };


module.exports.sendallcollegedata=async (req,res,next )=>{
    try{
    const allcollegedata= await collegemodel.find({})
    res.json(allcollegedata);
    }catch(err){
        console.log(`Error fetching all college data`,err);
        next(new expresserror(500,"Failed to fetch college data."));
    };
};


module.exports.sendcollegedata=async(req,res,next)=>{
    const {id}=req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
           // console.log(`Invalid ID: ${id}`);
           return next(new expresserror(404,"Invalid Id"));  
        }else{
            try{
            const collegedatabyid= await collegemodel.findById(id)
            res.json(collegedatabyid);
            }catch(err){
                console.log(`Error fetching specific college ${id}data admin`,err);
                next(new expresserror(500,"Failed to fetch thiscollege data"));
            }
    }
};


module.exports.sendcollegedataforedit=async(req,res,next)=>{
    const {id}=req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
             // console.log(`Invalid ID: ${id}`);
             return next(new expresserror(404,"Invalid Id"));  
         }else{
              try{
                const collegedatabyid= await collegemodel.findById(id)
                if(!collegedatabyid){
                    return next(new expresserror(404,"Page not found"));
                }
                // res.json(collegedatabyid);
                res.render("updatecollege.ejs",{collegedatabyid})
              }catch(err){
                  console.log(`Error fetching specific college ${id}data foredit`,err);
                  next(new expresserror(500,"Error Fetching data Internal Server Error"));
              }
     }
};


module.exports.updatecollegedata = async (req, res, next) => {
    let { id } = req.params;

    // Validate the ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(new expresserror(404, "Invalid Id"));
    }

    try {
        // Fetch the existing college data
        const existingCollege = await collegemodel.findById(id);
        if (!existingCollege) {
            return next(new expresserror(404, "College not found"));
        }

        // Prepare the updated data
        const updatedData = { ...req.body.college };

        // Handle image upload (if provided)
        if (req.files && req.files['college[image]']) {
            const imageFile = req.files['college[image]'][0]; // Access the uploaded image

            // Delete the old image from Cloudinary (optional)
            if (existingCollege.image && existingCollege.image.filename) {
                await cloudinary.v2.uploader.destroy(existingCollege.image.filename,{resource_type: 'raw'}).then(result=>console.log(result));
            }

            // Update the image data
            updatedData.image = {
                url: imageFile.path, // Cloudinary URL
                filename: imageFile.filename, // Cloudinary public ID
            };
        } else {
            updatedData.image = existingCollege.image; // Retain the old image if no new one is uploaded
        }

        // Handle brochure upload (if provided)
        if (req.files && req.files['college[brochure]']) {
            const brochureFile = req.files['college[brochure]'][0]; // Access the uploaded PDF

            // Delete the old brochure from Cloudinary (optional)
            if (existingCollege.brochure && existingCollege.brochure.filename) {
                await cloudinary.v2.uploader.destroy(existingCollege.brochure.filename,{resource_type: 'raw'}).then(result=>console.log(result));
            }

            // Update the brochure data
            updatedData.brochure = {
                url: brochureFile.path, // Cloudinary URL
                filename: brochureFile.filename, // Cloudinary public ID
            };
        } else {
            updatedData.brochure = existingCollege.brochure; // Retain the old brochure if no new one is uploaded
        }

        // Log the updated data for debugging
        console.log("Updated Data:", updatedData);

        // Update the college data in the database
        const updatedCollege = await collegemodel.findByIdAndUpdate(
            id,
            updatedData,
            { new: true, runValidators: true }
        );

        if (!updatedCollege) {
            return next(new expresserror(404, "College not found"));
        }

        console.log("Stored in DB:", updatedCollege);
        res.json(updatedCollege);
    } catch (err) {
        console.log("Error updating college data:", err);
        next(new expresserror(500, "Internal Server Error"));
    }
};


module.exports.sendnewform=(req,res)=>{
    res.render("addnewcollege.ejs");
}

module.exports.addcollege = async (req, res, next) => {
    try {
        // Log the incoming data for debugging purposes
        console.log("Request body:", req.body.college);
        console.log("Files received:", req.files); // Debugging

        // Create and save the new college data
        const newcollegedata = new collegemodel(req.body.college);

        // Handle image upload (if provided)
        if (req.files && req.files['college[image]']) {
            const imageFile = req.files['college[image]'][0]; // Access the uploaded image
            newcollegedata.image = {
                url: imageFile.path, // Cloudinary URL
                filename: imageFile.filename, // Cloudinary public ID
            };
        } else {
            console.log("No image file uploaded");
        }

        // Handle brochure upload (if provided)
        if (req.files && req.files['college[brochure]']) {
            const brochureFile = req.files['college[brochure]'][0]; // Access the uploaded PDF
            newcollegedata.brochure = {
                url: brochureFile.path, // Cloudinary URL
                filename: brochureFile.filename, // Cloudinary public ID
            };
        } else {
            console.log("No brochure file uploaded");
        }

        // Save the new college data to the database
        await newcollegedata.save();

        console.log("Added New College data");
        res.redirect("/admin"); // Respond only if save is successful
    } catch (err) {
        console.error("Error adding new data in database:", err);

        // Pass an appropriate error to the global error handler
        next(new expresserror(500, "Failed to add college data"));
    }
};

module.exports.deletecollege = async (req, res, next) => {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            // console.log(`Invalid ID: ${id}`);
            return next(new expresserror(404,"Invalid Id"));  
        }else{
            try {
                // Check if the college exists
                const idDetail = await collegemodel.findById(id);
                
                if (!idDetail) {
                    console.log("No data found for this ID");
                    return next(new expresserror(404,"No data found"));
                }

                //delete image multer
                if (idDetail.image && idDetail.image.filename) {
                 
                    await    cloudinary.v2.uploader
                    .destroy(idDetail.image.filename, {resource_type: 'raw'})
                    .then(result => console.log(result))
                }

                // Delete brochure (PDF) from Cloudinary
            if (idDetail.brochure && idDetail.brochure.filename) {
                await  cloudinary.v2.uploader.destroy(idDetail.brochure.filename, { resource_type: 'raw' }).then(result=>console.log(result));
            }
        
                // If data exists, proceed with deletion
                console.log(`Delete request for college with ID: ${id}`);
                await collegemodel.findByIdAndDelete(id);
                console.log("College deleted successfully");
                res.render("delete-success", { message: "College deleted successfully" });
            } catch (err) {
                // Handle any unexpected errors
                console.error("Error during deletion:", err);
                next(new expresserror(500, "Failed to delete college data"));
            }
        }     
    };      
