import jwt from 'jsonwebtoken';

export interface AuthJwtPayload {
  id: string;
  userType?: AuthJwtUserType.USER;
}

export enum AuthJwtUserType {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

const secretJwt = process.env.SECRET_JWT || 'df287dfc1406ed2b692e1c2c783bb5ce783bb5cec97ea';

const expiresJwtAccessTokenInSeconds =
  Number(process.env.EXPIRES_JWT_ACCESS_TOKEN_IN_SECONDS) || 60 * 10;

const expiresJwtRefreshTokenInSeconds =
  Number(process.env.EXPIRES_JWT_REFRESH_TOKEN_IN_SECONDS) || 60 * 60 * 24 * 30;

class AuthJwt {
  private generationToken(params = {}, expiresInSeconds = expiresJwtAccessTokenInSeconds) {
    return jwt.sign(params, secretJwt, {
      expiresIn: expiresInSeconds,
    });
  }

  public login(params: AuthJwtPayload) {
    return {
      refreshToken: this.generationToken(params, expiresJwtRefreshTokenInSeconds),
      accessToken: this.generationToken(params),
    };
  }

  public isAuthenticated(token: string) {
    return jwt.verify(token, secretJwt);
  }

  public decode(token: string) {
    return jwt.decode(token);
  }
}
export default new AuthJwt();
