import { IListAllProductsUseCase } from '../../../../useCases';
import { NextFunction, Request, Response } from 'express';
import { inject, singleton } from 'tsyringe';

@singleton()
export default class ListAllProductsController {
  constructor(
    @inject('ListAllProductsUseCase')
    private listallproductsUseCase: IListAllProductsUseCase,
  ) {}

  public async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.listallproductsUseCase.run({});

      return res.status(200).send(response);
    } catch (error) {
      return next(error);
    }
  }
}
