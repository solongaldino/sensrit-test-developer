import { ILoginUseCase, ILoginUseCaseResponseDTO } from '@modules/auth/useCases';
import { NextFunction, Request, Response } from 'express';
import { inject, singleton } from 'tsyringe';

@singleton()
export default class LoginController {
  constructor(
    @inject('LoginUseCase')
    private loginUseCase: ILoginUseCase,
  ) {}

  public async handle(req: Request, res: Response<ILoginUseCaseResponseDTO>, next: NextFunction) {
    try {
      const { email, password } = req.body;

      const response = await this.loginUseCase.run({
        email,
        password,
      });

      return res.status(200).send(response);
    } catch (error) {
      return next(error);
    }
  }
}
