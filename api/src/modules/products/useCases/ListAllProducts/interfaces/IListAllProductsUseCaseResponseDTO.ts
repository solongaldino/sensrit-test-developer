import { Product } from '@shared/repositories/prisma';

type IListAllProductsUseCaseResponseDTO = {
  id: Product['id'];
  name: Product['name'];
  value: Product['value'];
  description: Product['description'];
  createdAt: Product['createdAt'];
}[];

export default IListAllProductsUseCaseResponseDTO;
