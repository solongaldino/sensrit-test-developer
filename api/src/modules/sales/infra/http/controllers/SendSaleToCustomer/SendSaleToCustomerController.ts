import { ISendSaleToCustomerUseCase } from '../../../../useCases';
import { NextFunction, Request, Response } from 'express';
import { inject, singleton } from 'tsyringe';

@singleton()
export default class SendSaleToCustomerController {
  constructor(
    @inject('SendSaleToCustomerUseCase')
    private sendsaletocustomerUseCase: ISendSaleToCustomerUseCase,
  ) {}

  public async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { saleId, customerId, sendType } = req.body;

      const response = await this.sendsaletocustomerUseCase.run({
        saleId,
        customerId,
        sendType,
      });

      return res.status(200).send(response);
    } catch (error) {
      return next(error);
    }
  }
}
