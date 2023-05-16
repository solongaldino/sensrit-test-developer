import { User } from '@shared/repositories/prisma';

export default interface ILoginUseCaseResponseDTO {
  id: User['id'];
  name: User['name'];
  email: User['email'];
  accessToken: string;
  refreshToken: string;
}
