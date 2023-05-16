import { ICreateCustomerUseCase } from '../../../../useCases';
import { NextFunction, Request, Response } from 'express';
import { inject, singleton } from 'tsyringe';

@singleton()
export default class CreateCustomerController {
  constructor(
    @inject('CreateCustomerUseCase')
    private createcustomerUseCase: ICreateCustomerUseCase,
  ) {}

  public async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email } = req.body;

      const response = await this.createcustomerUseCase.run({
        name,
        email,
      });

      return res.status(201).send(response);
    } catch (error) {
      return next(error);
    }
  }
}
