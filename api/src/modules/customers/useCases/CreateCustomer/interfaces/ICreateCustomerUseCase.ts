import ICreateCustomerUseCaseDTO from './ICreateCustomerUseCaseDTO';
import ICreateCustomerUseCaseResponseDTO from './ICreateCustomerUseCaseResponseDTO';

export default interface ICreateCustomerUseCase {
  run(data: ICreateCustomerUseCaseDTO): Promise<ICreateCustomerUseCaseResponseDTO>;
}
