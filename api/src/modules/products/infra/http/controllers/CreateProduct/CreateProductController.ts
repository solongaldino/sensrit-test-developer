import { ICreateProductUseCase } from '../../../../useCases';
import { NextFunction, Request, Response } from 'express';
import { inject, singleton } from 'tsyringe';

@singleton()
export default class CreateProductController {
  constructor(
    @inject('CreateProductUseCase')
    private createproductUseCase: ICreateProductUseCase,
  ) {}

  public async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, value, description } = req.body;

      const response = await this.createproductUseCase.run({
        name,
        value,
        description,
      });

      return res.status(201).send(response);
    } catch (error) {
      return next(error);
    }
  }
}
