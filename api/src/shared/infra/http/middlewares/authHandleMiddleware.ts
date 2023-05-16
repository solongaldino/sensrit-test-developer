import { Request, Response, NextFunction } from 'express';
import { ApiError, AuthJwt, Logger } from '@shared/utils';
import { IJwtPayload } from '@shared/types';

const authHandleMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    next(new ApiError(400, 'Authorization header not provided'));
    return;
  }

  try {
    const token = authHeader.split(' ')[1];
    const jwtPayload = AuthJwt.isAuthenticated(token);
    ['iat', 'exp'].forEach((keyToRemove) => delete jwtPayload[keyToRemove]);
    req.jwtPayload = jwtPayload as IJwtPayload;
    next();
  } catch (error) {
    Logger.error(error);
    return next(ApiError.authorizationError(error));
  }
};

export default authHandleMiddleware;
