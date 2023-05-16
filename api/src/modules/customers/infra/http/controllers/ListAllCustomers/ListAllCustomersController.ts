import { IListAllCustomersUseCase } from '../../../../useCases';
import { NextFunction, Request, Response } from 'express';
import { inject, singleton } from 'tsyringe';

@singleton()
export default class ListAllCustomersController {
  constructor(
    @inject('ListAllCustomersUseCase')
    private listallcustomersUseCase: IListAllCustomersUseCase,
  ) {}

  public async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.listallcustomersUseCase.run({});

      return res.status(200).send(response);
    } catch (error) {
      return next(error);
    }
  }
}
