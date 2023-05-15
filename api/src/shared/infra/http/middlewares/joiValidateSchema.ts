import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi';

import { ApiError } from '@shared/utils';

const joiValidateSchema = (schema: Joi.Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req, { abortEarly: false });

    if (!error) {
      req.query = value.query;
      req.body = value.body;
      req.params = value.params;
      next();
      return;
    }

    next(ApiError.validationError(error));
  };
};

export default joiValidateSchema;
