import { SendSaleToCustomerTypeEnum } from '@modules/sales/enums';
import { ICustomerRepository, ISaleRepository } from '@shared/repositories/prisma';
import { ApiError } from '@shared/utils';
import { inject, injectable } from 'tsyringe';
import {
  ISendSaleToCustomerUseCase,
  ISendSaleToCustomerUseCaseDTO,
  ISendSaleToCustomerUseCaseResponseDTO,
} from '../interfaces';

@injectable()
export default class SendSaleToCustomerUseCase implements ISendSaleToCustomerUseCase {
  constructor(
    @inject('CustomerRepository')
    private customerRepository: ICustomerRepository,
    @inject('SaleRepository')
    private saleRepository: ISaleRepository,
  ) {}

  async run({
    saleId,
    customerId,
    sendType,
  }: ISendSaleToCustomerUseCaseDTO): Promise<ISendSaleToCustomerUseCaseResponseDTO> {
    const customer = await this.customerRepository.findById(customerId);
    if (!customer) throw new ApiError(404, 'Customer not found');

    const sale = await this.saleRepository.findById(saleId);
    if (!sale) throw new ApiError(404, 'Sale not found');

    if (sendType === SendSaleToCustomerTypeEnum.email) {
      //Aqui implantar logica de envio de email
      console.log('Enviou', { saleId, customerId, sendType });
    } else {
      throw new ApiError(404, 'Param sendType not found');
    }
  }
}
