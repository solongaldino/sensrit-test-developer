import { regexes } from '@shared/regexes';
import * as Joi from 'joi';

export const register = Joi.object({
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    login: Joi.string()
      .regex(regexes.login.pattern)
      .required()
      .messages({
        'string.pattern.base': 'login ' + regexes.login.message,
      }),
    password: Joi.string().required(),
  }),
}).unknown(true);

export * as UserSchema from '.';
