import IListAllProductsUseCaseDTO from './IListAllProductsUseCaseDTO';
import IListAllProductsUseCaseResponseDTO from './IListAllProductsUseCaseResponseDTO';

export default interface IListAllProductsUseCase {
  run(data: IListAllProductsUseCaseDTO): Promise<IListAllProductsUseCaseResponseDTO>;
}
