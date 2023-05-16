import { IProductRepository } from '@shared/repositories/prisma';
import { inject, injectable } from 'tsyringe';
import {
  IListAllProductsUseCase,
  IListAllProductsUseCaseDTO,
  IListAllProductsUseCaseResponseDTO,
} from '../interfaces';

@injectable()
export default class ListAllProductsUseCase implements IListAllProductsUseCase {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  async run({}: IListAllProductsUseCaseDTO): Promise<IListAllProductsUseCaseResponseDTO> {
    const list = await this.productRepository.findMany({});
    return list.map((item) => ({
      id: item.id,
      name: item.name,
      value: item.value,
      description: item.description,
      createdAt: item.createdAt,
    }));
  }
}
