import Joi from "joi";

export const createBookValidation = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  writer: Joi.required(),
  tags:Joi.array(),
});
