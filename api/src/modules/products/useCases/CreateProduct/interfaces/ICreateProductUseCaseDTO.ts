import { Product } from '@shared/repositories/prisma';

export default interface ICreateProductUseCaseDTO {
  name: Product['name'];
  value: Product['value'];
  description: Product['description'];
}
