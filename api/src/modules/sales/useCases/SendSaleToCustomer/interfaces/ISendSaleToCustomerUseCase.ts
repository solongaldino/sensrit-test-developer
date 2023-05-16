import ISendSaleToCustomerUseCaseDTO from './ISendSaleToCustomerUseCaseDTO';
import ISendSaleToCustomerUseCaseResponseDTO from './ISendSaleToCustomerUseCaseResponseDTO';

export default interface ISendSaleToCustomerUseCase {
  run(data: ISendSaleToCustomerUseCaseDTO): Promise<ISendSaleToCustomerUseCaseResponseDTO>;
}
