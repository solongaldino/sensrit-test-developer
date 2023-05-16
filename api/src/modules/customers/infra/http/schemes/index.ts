import * as Joi from 'joi';

export const createCustomer = Joi.object({
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
  }),
}).unknown(true);

export * as Schema from '.';
