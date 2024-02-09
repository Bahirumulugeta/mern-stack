import Joi from "joi";

export const createOrderValidation = Joi.object({
  userId: Joi.string().required(),
  bookId: Joi.string().required(),
  address: Joi.string().required(),
  description: Joi.string().required(),
  quantity: Joi.number().required(),
  total_price: Joi.number().required(),
});
