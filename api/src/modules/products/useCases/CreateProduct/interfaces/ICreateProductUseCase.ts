import ICreateProductUseCaseDTO from './ICreateProductUseCaseDTO';
import ICreateProductUseCaseResponseDTO from './ICreateProductUseCaseResponseDTO';

export default interface ICreateProductUseCase {
  run(data: ICreateProductUseCaseDTO): Promise<ICreateProductUseCaseResponseDTO>;
}
