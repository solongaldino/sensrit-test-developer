import IRefreshTokenUseCaseResponseDTO from './IRefreshTokenUseCaseResponseDTO';
import IRefreshTokenUseCaseDTO from './IRefreshTokenUseCaseDTO';

export default interface IRefreshTokenUseCase {
  run(data: IRefreshTokenUseCaseDTO): Promise<IRefreshTokenUseCaseResponseDTO>;
}
