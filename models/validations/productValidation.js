const Joi = require('joi');

const variantSchema = Joi.object({
  name: Joi.string().required(),
  SKU: Joi.string().required(),
  additionalCost: Joi.number().required(),
  stockCount: Joi.number().integer().required()
});

const productSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  variants: Joi.array().items(variantSchema)
});

module.exports = {
  productSchema,
  variantSchema
};
