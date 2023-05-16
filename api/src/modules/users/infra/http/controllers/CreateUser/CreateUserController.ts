import { ICreateUserUseCase } from '../../../../useCases';
import { NextFunction, Request, Response } from 'express';
import { inject, singleton } from 'tsyringe';

@singleton()
export default class CreateUserController {
  constructor(
    @inject('CreateUserUseCase')
    private createuserUseCase: ICreateUserUseCase,
  ) {}

  public async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password } = req.body;

      const response = await this.createuserUseCase.run({
        name,
        email,
        password,
      });

      return res.status(201).send(response);
    } catch (error) {
      return next(error);
    }
  }
}
