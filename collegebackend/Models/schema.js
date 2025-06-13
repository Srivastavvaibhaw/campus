const mongoose= require("mongoose");
const {Schema}= mongoose;

const MainSchema= new Schema({
    name: {type:"String", required:true},

    type:{type:"String", required:true},

    category:"String",

    image: {
        url: "String", // Store the image URL
        filename: "String", // Store the Cloudinary file reference
      },

      brochure:{
            url:"String",
            filename: "String",
      },

    estyear:"Number",

    country:{type:"String",required:true},

    location:{ state:{type:"String", required:true},city:{type:"String", required:true},address:"String",code:"Number"},

    coordinates:{latitude:"Number",longitude:"Number"},

    collegewebsite:"String",

    contact:{email:"String",phone:"Number",},

    about:"String",

    fee:"Number",

    courses:[{
        coursename:{type:"String", required:true},
        fee:"String",
        duration:"String",
        seats:"String",
    }],

});

const collegemodel= new mongoose.model("Collegemodel",MainSchema);
module.exports=collegemodel;


