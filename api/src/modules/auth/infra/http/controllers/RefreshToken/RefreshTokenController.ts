import { IRefreshTokenUseCase } from '@modules/auth/useCases';
import { NextFunction, Request, Response } from 'express';
import { inject, singleton } from 'tsyringe';

@singleton()
export default class RefreshTokenController {
  constructor(
    @inject('RefreshTokenUseCase')
    private refreshTokenUseCase: IRefreshTokenUseCase,
  ) {}

  public async handle(req: Request, res: Response, next: NextFunction) {
    const { refreshToken } = req.body;
    try {
      const response = await this.refreshTokenUseCase.run({ refreshToken });
      return res.status(201).send(response);
    } catch (error) {
      return next(error);
    }
  }
}
