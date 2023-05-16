import { ICreateSaleUseCase } from '../../../../useCases';
import { NextFunction, Request, Response } from 'express';
import { inject, singleton } from 'tsyringe';

@singleton()
export default class CreateSaleController {
  constructor(
    @inject('CreateSaleUseCase')
    private createsaleUseCase: ICreateSaleUseCase,
  ) {}

  public async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { list, customerId } = req.body;
      const { userId } = req.claims;

      const response = await this.createsaleUseCase.run({
        list,
        customerId,
        loggedUserId: userId as number,
      });

      return res.status(201).send(response);
    } catch (error) {
      return next(error);
    }
  }
}
