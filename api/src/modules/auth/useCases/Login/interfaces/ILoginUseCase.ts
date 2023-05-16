import ILoginUseCaseDTO from './ILoginUseCaseDTO';
import ILoginUseCaseResponseDTO from './ILoginUseCaseResponseDTO';

export default interface ILoginUseCase {
  run(data: ILoginUseCaseDTO): Promise<ILoginUseCaseResponseDTO>;
}
