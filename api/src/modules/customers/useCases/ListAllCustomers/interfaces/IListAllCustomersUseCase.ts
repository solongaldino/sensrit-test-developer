import IListAllCustomersUseCaseDTO from './IListAllCustomersUseCaseDTO';
import IListAllCustomersUseCaseResponseDTO from './IListAllCustomersUseCaseResponseDTO';

export default interface IListAllCustomersUseCase {
  run(data: IListAllCustomersUseCaseDTO): Promise<IListAllCustomersUseCaseResponseDTO>;
}
