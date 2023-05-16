import * as Joi from 'joi';

export const createSale = Joi.object({
  body: Joi.object({
    customerId: Joi.number().required(),
    list: Joi.array().required(),
  }),
}).unknown(true);

export const sendSaleToCustomer = Joi.object({
  body: Joi.object({
    saleId: Joi.number().required(),
    customerId: Joi.number().required(),
    sendType: Joi.string().required(),
  }),
}).unknown(true);

export * as Schema from '.';
