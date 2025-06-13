const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
if(process.env.NODE_ENV !="production"){
    require("dotenv").config(); 
}
  const cloud_name=process.env.CLOUD_NAME;
const api_key=process.env.CLOUD_API_KEY;
const api_secret=process.env.CLOUD_API_SECRET

cloudinary.config({
    cloud_name: cloud_name,
    api_key: api_key,
    api_secret: api_secret,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'collegeimages',
      allowed_formats: ['png','jpg','jpeg',"pdf"], 
      resource_type: "raw", 
    },
  });

  module.exports={ cloudinary,storage}