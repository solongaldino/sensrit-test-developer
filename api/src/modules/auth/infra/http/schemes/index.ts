import * as Joi from 'joi';

export const login = Joi.object({
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
}).unknown(true);

export * as AuthSchema from '.';
