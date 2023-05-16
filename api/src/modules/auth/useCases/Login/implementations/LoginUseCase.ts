import { inject, injectable } from 'tsyringe';
import { ILoginUseCase, ILoginUseCaseDTO } from '../interfaces';
import { IUserRepository } from '@shared/repositories/prisma';
import { ApiError, AuthJwt, CryptoPassword } from '@shared/utils';

@injectable()
export default class LoginUseCase implements ILoginUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async run(data: ILoginUseCaseDTO) {
    const user = await this.userRepository.findByEmail(data.email);

    if (!!!user) throw new ApiError(401, 'E-mail not found');

    const isValidPassword = CryptoPassword.comparePassword(data.password, user.password);

    if (!isValidPassword) {
      throw new ApiError(403, 'Incorrect password');
    }

    try {
      const { accessToken, refreshToken } = AuthJwt.login({
        id: user.id,
      });
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        accessToken,
        refreshToken,
      };
    } catch (error) {
      throw new ApiError(400, 'Failed to generate tokens');
    }
  }
}
