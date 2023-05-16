import ICreateSaleUseCaseDTO from './ICreateSaleUseCaseDTO';
import ICreateSaleUseCaseResponseDTO from './ICreateSaleUseCaseResponseDTO';

export default interface ICreateSaleUseCase {
  run(data: ICreateSaleUseCaseDTO): Promise<ICreateSaleUseCaseResponseDTO>;
}
