import ICreateUserUseCaseDTO from './ICreateUserUseCaseDTO';
import ICreateUserUseCaseResponseDTO from './ICreateUserUseCaseResponseDTO';

export default interface ICreateUserUseCase {
  run(data: ICreateUserUseCaseDTO): Promise<ICreateUserUseCaseResponseDTO>;
}
