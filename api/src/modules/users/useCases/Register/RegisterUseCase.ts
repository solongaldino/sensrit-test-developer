import { IUserRepository } from '@shared/repositories/prisma';
import { inject, injectable } from 'tsyringe';
import IRegisterUseCase from './IRegisterUseCase';
import IRegisterUseCaseDTO from './IRegisterUseCaseDTO';

@injectable()
export default class RegisterUseCase implements IRegisterUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async run({ name, email, login, password }: IRegisterUseCaseDTO) {}
}
