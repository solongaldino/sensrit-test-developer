import { NextFunction, Request, Response } from 'express';
import { inject, singleton } from 'tsyringe';
import IRegisterUseCase from '@modules/users/useCases/Register/IRegisterUseCase';
import IRegisterUseCaseDTO from '@modules/users/useCases/Register/IRegisterUseCaseDTO';

@singleton()
export default class RegisterController {
  constructor(
    @inject('RegisterUseCase')
    private registerUseCase: IRegisterUseCase,
  ) {}

  public async handle(
    req: Request<unknown, unknown, IRegisterUseCaseDTO>,
    res: Response,
    next: NextFunction,
  ) {
    const { name, email, login, password } = req.body;
    try {
      await this.registerUseCase.run({
        name,
        email,
        login,
        password,
      });
      return res.status(201).send();
    } catch (error) {
      return next(error);
    }
  }
}
