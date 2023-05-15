import { IClaims, IJwtPayload } from '..';

declare global {
  namespace Express {
    export interface Request {
      jwtPayload: IJwtPayload;
      claims: IClaims;
    }
  }
}
