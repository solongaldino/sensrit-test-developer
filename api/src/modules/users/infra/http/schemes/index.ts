import * as Joi from 'joi';

export const register = Joi.object({
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
}).unknown(true);

export * as UserSchema from '.';
