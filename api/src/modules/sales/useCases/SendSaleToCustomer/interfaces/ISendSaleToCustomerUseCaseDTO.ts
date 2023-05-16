import { SendSaleToCustomerTypeEnum } from '@modules/sales/enums';

export default interface ISendSaleToCustomerUseCaseDTO {
  saleId: number;
  customerId: number;
  sendType: SendSaleToCustomerTypeEnum;
}
