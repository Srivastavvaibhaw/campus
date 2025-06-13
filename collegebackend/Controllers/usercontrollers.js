const mongoose=require("mongoose");
const collegemodel = require("../Models/schema.js");
const expresserror=require("../utils/expresserror.js");

module.exports.showcollege= async (req,res)=>{
    try{
        const allcollegedata= await collegemodel.find({})
        res.json(allcollegedata);
        }catch(err){
            console.log(`Error fetching all college data`,err);
            next(new expresserror(500,"Failed to fetch college data."));
        };
};

module.exports.showthiscollege=async (req,res,next)=>{
    const {id}=req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
            // console.log(`Invalid ID: ${id}`);
            return next(new expresserror(404,"Invalid Id"));  
        }else{
             try{
                       console.log(`Get request for college ${id}`);
                       const collegedatabyid= await collegemodel.findById(id)
                       res.json(collegedatabyid);
                  }catch(err){
                       console.log(`Error fetching specific college ${id}data`,err);
                       next(new expresserror(500,"Failed to fetch thiscollege data"));
                }
    }
};



//after stage 4
module.exports.sendSearchedRelatedData = async (req, res, next) => {
    console.log("searched request");
        try {
            const { searchedlocation } = req.query;
    
            // Check if the input is only numbers (invalid location)
            let containsOnlyNumbers = /^[0-9]+$/.test(searchedlocation);
            if (containsOnlyNumbers) {
                return next(new expresserror(422, 'Please search for a valid location'));
            }
    
            // Search for colleges by name or location (state, city, address)
            const colleges = await collegemodel.find({
                $or: [
                    { name: { $regex: searchedlocation, $options: "i" } }, // Case-insensitive match for name
                    { "location.state": { $regex: searchedlocation, $options: "i" } },
                    { "location.city": { $regex: searchedlocation, $options: "i" } },
                    { "location.address": { $regex: searchedlocation, $options: "i" } },
                    { "courses.coursename": { $regex: searchedlocation, $options: "i" } }, // Match courses
                    {category: {$regex: searchedlocation, $options: "i"}},
                ]
            });
    
            if (!colleges.length) {
                return res.status(404).json({ message: "No matching colleges found" });
            }
    
            res.status(200).json(colleges);
        } catch (error) {
            next(error);
        }
    };
