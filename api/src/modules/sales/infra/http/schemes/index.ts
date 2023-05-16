import * as Joi from 'joi';

export const createSale = Joi.object({
  body: Joi.object({
    customerId: Joi.number().required(),
    list: Joi.array().required(),
  }),
}).unknown(true);

export * as Schema from '.';
