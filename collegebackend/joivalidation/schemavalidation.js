const Joi = require("joi");

const validatecollegeschemabyjoi = Joi.object({
  name: Joi.string().min(2).required(),
  type: Joi.string().min(2).required(),
  category: Joi.string().allow(null, ""),
  image: Joi.object({
    url: Joi.string().allow("", null),
    filename: Joi.string().allow("", null),
  }).allow(null),
  brochure:Joi.object({
    url: Joi.string().allow("",null),
    filename: Joi.string().allow("",null),
  }).allow(null),
  estyear: Joi.number().integer().allow(null),
  country: Joi.string().required(),
  location: Joi.object({
    state: Joi.string().required(),
    city: Joi.string().required(),
    address: Joi.string().allow(null, ""),
    code: Joi.number().integer().allow(null),
  }),
  coordinates: Joi.object({
    latitude: Joi.number().allow(null),
    longitude: Joi.number().allow(null),
  }).allow(null),
  collegewebsite: Joi.string().allow(null, ""),
  contact: Joi.object({
    email: Joi.string().email().allow(null, ""),
    phone: Joi.number().integer().allow(null),
  }).allow(null),
  about: Joi.string().allow(null, ""),
  fee: Joi.number().allow(null),
  courses: Joi.array()
    .items(
      Joi.object({
        coursename: Joi.string().required(),
        fee: Joi.string().allow(null),
        duration: Joi.string().allow(null, ""),
        seats: Joi.string().allow(null, ""),
      })
    )
    .allow(null)
    .required(),
});
module.exports = validatecollegeschemabyjoi;
