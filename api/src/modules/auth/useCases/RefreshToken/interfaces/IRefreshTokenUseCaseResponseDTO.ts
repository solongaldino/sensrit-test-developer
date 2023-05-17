import { User } from '@shared/repositories/prisma';

export default interface IRefreshTokenUseCaseResponseDTO {
  id: User['id'];
  name: User['name'];
  email: User['email'];
  accessToken: string;
}
