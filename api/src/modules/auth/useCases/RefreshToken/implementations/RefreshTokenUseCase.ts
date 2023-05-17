import { inject, injectable } from 'tsyringe';
import { IRefreshTokenUseCase, IRefreshTokenUseCaseDTO } from '../interfaces';
import { IUserRepository } from '@shared/repositories/prisma';
import { IJwtPayload } from '@shared/types';
import { ApiError, AuthJwt } from '@shared/utils';

@injectable()
export default class RefreshTokenUseCase implements IRefreshTokenUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async run({ refreshToken }: IRefreshTokenUseCaseDTO) {
    try {
      AuthJwt.isAuthenticated(refreshToken);
    } catch (error) {
      throw new ApiError(401, error.message);
    }

    const { id: userId } = AuthJwt.decode(refreshToken) as IJwtPayload;

    const foundUser = await this.userRepository.findById(userId as number);

    if (!foundUser) {
      throw new ApiError(404, 'User not found');
    }

    try {
      const { accessToken } = AuthJwt.login({
        id: foundUser.id,
      });
      return {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        accessToken,
      };
    } catch (error) {
      throw new ApiError(400, 'Failed to generate accessToken');
    }
  }
}
