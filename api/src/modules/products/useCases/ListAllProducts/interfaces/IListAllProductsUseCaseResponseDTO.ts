import { Product } from '@shared/repositories/prisma';

type IListAllProductsUseCaseResponseDTO = {
  id: number;
  name: string;
  value: number;
  description: string;
  createdAt: Date;
}[];

export default IListAllProductsUseCaseResponseDTO;
