import * as Joi from 'joi';

export const createProduct = Joi.object({
  body: Joi.object({
    name: Joi.string().required(),
    value: Joi.number().required(),
    description: Joi.string(),
  }),
}).unknown(true);

export * as Schema from '.';
