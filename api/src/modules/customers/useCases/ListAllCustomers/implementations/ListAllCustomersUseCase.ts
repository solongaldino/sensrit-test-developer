import { ICustomerRepository } from '@shared/repositories/prisma';
import { inject, injectable } from 'tsyringe';
import {
  IListAllCustomersUseCase,
  IListAllCustomersUseCaseDTO,
  IListAllCustomersUseCaseResponseDTO,
} from '../interfaces';

@injectable()
export default class ListAllCustomersUseCase implements IListAllCustomersUseCase {
  constructor(
    @inject('CustomerRepository')
    private customerRepository: ICustomerRepository,
  ) {}

  async run({}: IListAllCustomersUseCaseDTO): Promise<IListAllCustomersUseCaseResponseDTO> {
    const list = await this.customerRepository.findMany({});
    return list.map((item) => ({
      id: item.id,
      name: item.name,
      email: item.email,
      createdAt: item.createdAt,
    }));
  }
}
