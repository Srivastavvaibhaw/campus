const Joi = require("joi");

const signupvalidationbyjoi=Joi.object({
    username:Joi.string().allow("").required(),
    contact:Joi.string().required(),
    email:Joi.string().email().required(),
    password:Joi.string().required(),
    });
module.exports=signupvalidationbyjoi



const loginvalidationbyjoi=Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required(),
})
module.exports=loginvalidationbyjoi