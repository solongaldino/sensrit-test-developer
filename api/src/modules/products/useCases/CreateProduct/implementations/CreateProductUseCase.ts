import { IProductRepository } from '@shared/repositories/prisma';
import { ApiError } from '@shared/utils';
import { inject, injectable } from 'tsyringe';
import {
  ICreateProductUseCase,
  ICreateProductUseCaseDTO,
  ICreateProductUseCaseResponseDTO,
} from '../interfaces';

@injectable()
export default class CreateProductUseCase implements ICreateProductUseCase {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  async run({
    name,
    value,
    description,
  }: ICreateProductUseCaseDTO): Promise<ICreateProductUseCaseResponseDTO> {
    const foundProductByName = await this.productRepository.findFirst({
      where: {
        name: name,
      },
    });

    if (foundProductByName) throw new ApiError(400, 'Product with this name already registered');

    await this.productRepository.create({
      data: {
        name,
        value,
        description,
        createdAt: new Date(),
      },
    });
  }
}
