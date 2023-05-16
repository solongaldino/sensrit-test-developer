import { IUserRepository } from '@shared/repositories/prisma';
import { ApiError, CryptoPassword } from '@shared/utils';
import { inject, injectable } from 'tsyringe';
import {
  ICreateUserUseCase,
  ICreateUserUseCaseDTO,
  ICreateUserUseCaseResponseDTO,
} from '../interfaces';

@injectable()
export default class CreateUserUseCase implements ICreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async run({
    name,
    email,
    password,
  }: ICreateUserUseCaseDTO): Promise<ICreateUserUseCaseResponseDTO> {
    const foundUserByEmail = await this.userRepository.findByEmail(email);
    if (foundUserByEmail) throw new ApiError(401, 'Email is in use');

    await this.userRepository.create({
      data: {
        name,
        email,
        password: CryptoPassword.generationHash(password),
        createdAt: new Date(),
      },
    });
  }
}
