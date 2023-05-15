import { Request, Response, NextFunction } from 'express';
import { ApiError, Logger } from '@shared/utils';

type HandledError = ApiError | Error;

const isDev = process.env.NODE_ENV === 'development';
const isLocal = process.env.NODE_ENV === 'local';

// eslint-disable-next-line
const errorHandlerMiddleware = (
  err: HandledError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (isLocal) {
    console.error(err);
  }

  Logger.error(err);

  if (err instanceof ApiError) {
    let response = { message: err.message };

    if (err.payload) {
      response = { ...response, ...err.payload };
    }

    return res.status(err.statusCode).json(response);
  }

  return res.status(500).json({
    message: isDev || isLocal ? err.message : 'Something went wrong',
  });
};

export default errorHandlerMiddleware;
